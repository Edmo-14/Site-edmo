/* ============================================================
   La Carte IA du Sport — logique applicative
   Statique, sans backend, sans localStorage.
   La sélection vit uniquement dans l'URL (partageable).
   ============================================================ */

/* ---- Réglage analytique ----------------------------------------------------
   Renseigner l'URL d'un webhook no-code (n8n, Make, Zapier…) pour recevoir un
   évènement anonyme à chaque ajout de cas. Tant que la valeur est null, les
   évènements sont seulement affichés dans la console (aucune donnée envoyée).
   Aucune donnée personnelle n'est transmise : ni identifiant, ni cookie.
--------------------------------------------------------------------------- */
window.CARTE_ANALYTICS_URL = window.CARTE_ANALYTICS_URL || null;

(function () {
  "use strict";

  const CAS = window.CAS || [];
  const TAX = window.TAXONOMIE || {};
  const byId = new Map(CAS.map((c) => [c.id, c]));
  const label = (groupe, cle) => {
    const g = TAX[groupe] || [];
    const t = g.find((x) => x[0] === cle);
    return t ? t[1] : cle;
  };

  /* Ordres de tri de la feuille de route (spec avenant §H) */
  const ORDRE_SERVICES = new Map((TAX.services || []).map(([cle], i) => [cle, i]));
  const ORDRE_EFFORT = { facile: 0, moyen: 1, complexe: 2 };

  /* Type de solution, exclusif, dérivé de la faisabilité */
  const TYPE_SOLUTION = {
    facile: { libelle: "Chatbot IA", description: "un prompt dans l'IA conversationnelle que vous utilisez déjà" },
    moyen: { libelle: "Copilote IA", description: "un assistant configuré pour la tâche : instructions, base de connaissances" },
    complexe: { libelle: "Agent IA", description: "un process automatisé de bout en bout, construit avec accompagnement" },
  };

  /* ---- État ---- */
  let compteurPrecedent = 0; // dernier nombre de cas sélectionnés (pour le pop de pastille)
  const state = {
    entree: "metier", // 'metier' | 'besoin'
    axe: new Set(), // valeurs sélectionnées sur l'axe courant
    faisabilite: new Set(),
    structures: new Set(),
    portee: new Set(),
    panier: new Set(),
  };

  /* ---- Raccourcis DOM ---- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ============================================================
     Encodage / décodage de la sélection dans l'URL
     ============================================================ */
  function encodeSelection() {
    const ids = Array.from(state.panier);
    if (!ids.length) return "";
    try {
      return btoa(unescape(encodeURIComponent(ids.join(".")))).replace(/=+$/, "");
    } catch (e) {
      return ids.join(".");
    }
  }

  function decodeSelection(token) {
    if (!token) return [];
    let brut = token;
    try {
      brut = decodeURIComponent(escape(atob(token)));
    } catch (e) {
      /* jeton déjà en clair (repli) */
    }
    return brut.split(".").filter((id) => byId.has(id));
  }

  function majURL() {
    const params = new URLSearchParams(window.location.search);
    const token = encodeSelection();
    if (token) params.set("s", token);
    else params.delete("s");
    const q = params.toString();
    const url = window.location.pathname + (q ? "?" + q : "") + window.location.hash;
    window.history.replaceState(null, "", url);
  }

  function restaurerDepuisURL() {
    const params = new URLSearchParams(window.location.search);
    decodeSelection(params.get("s")).forEach((id) => state.panier.add(id));
  }

  /* ============================================================
     Analytique anonyme
     ============================================================ */
  function emettre(evenement, cas) {
    const payload = {
      evenement,
      id: cas ? cas.id : null,
      titre: cas ? cas.titre : null,
      service: cas ? cas.service : null,
      besoin: cas ? cas.besoin : null,
      faisabilite: cas ? cas.faisabilite : null,
      horodatage: new Date().toISOString(),
    };
    const url = window.CARTE_ANALYTICS_URL;
    if (!url) {
      console.info("[carte-ia-sport] évènement (non envoyé, endpoint non configuré) :", payload);
      return;
    }
    try {
      const corps = JSON.stringify(payload);
      if (navigator.sendBeacon) {
        navigator.sendBeacon(url, new Blob([corps], { type: "application/json" }));
      } else {
        fetch(url, { method: "POST", body: corps, headers: { "Content-Type": "application/json" }, keepalive: true, mode: "no-cors" });
      }
    } catch (e) {
      console.warn("[carte-ia-sport] envoi analytique impossible", e);
    }
  }

  /* ============================================================
     Filtrage
     ============================================================ */
  const axeKey = () => (state.entree === "metier" ? "service" : "besoin");

  function passeFiltresFins(c) {
    if (state.faisabilite.size && !state.faisabilite.has(c.faisabilite)) return false;
    if (state.portee.size && !state.portee.has(c.portee)) return false;
    if (state.structures.size && !c.structures.some((s) => state.structures.has(s))) return false;
    return true;
  }

  function casFiltres() {
    const k = axeKey();
    return CAS.filter((c) => {
      if (state.axe.size && !state.axe.has(c[k])) return false;
      return passeFiltresFins(c);
    });
  }

  /* ============================================================
     Rendu — Marquee
     ============================================================ */
  function rendreMarquee() {
    const piste = $(".marquee-piste");
    if (!piste) return;
    const phrases = [
      "2 h de compte rendu → 10 minutes",
      "200 mails par jour, triés avant le café",
      "un dossier de 50 pages résumé avant la réunion",
      "20 h/semaine de places partenaires automatisées",
      "les impayés relancés sans y penser",
      "un règlement de 300 pages, interrogé en une phrase",
      "700 candidatures présélectionnées en minutes",
      "le rétroplanning d'un match, prêt d'un coup",
      "la revue de presse résumée en interne",
      "4 000 questions clubs, des réponses instantanées",
    ];
    const bloc = phrases.map((p) => `<span class="marquee-item">${p}</span>`).join("");
    piste.innerHTML = bloc + bloc; // doublé pour la boucle continue
  }

  /* ============================================================
     Rendu — Chips d'axe (métier / besoin)
     ============================================================ */
  function rendreChipsAxe() {
    const cont = $("[data-chips-axe]");
    const groupe = state.entree === "metier" ? "services" : "besoins";
    const k = axeKey();

    // comptages en respectant les filtres fins (mais pas l'axe lui-même)
    const base = CAS.filter(passeFiltresFins);
    const compte = {};
    base.forEach((c) => (compte[c[k]] = (compte[c[k]] || 0) + 1));

    cont.innerHTML = (TAX[groupe] || [])
      .map(([cle, lib]) => {
        const n = compte[cle] || 0;
        const actif = state.axe.has(cle);
        const point = state.entree === "metier" ? `<span class="point" style="background:var(--c-${cle}, var(--encre))"></span>` : "";
        return `<button type="button" class="chip" data-axe-val="${cle}" aria-pressed="${actif}" ${n === 0 ? "disabled style=opacity:.4" : ""}>
          ${point}${lib}<span class="pastille-nb">${n}</span>
        </button>`;
      })
      .join("");
  }

  /* ============================================================
     Rendu — Chips fins (faisabilité / structures / portée)
     ============================================================ */
  function rendreChipsFins() {
    const map = [
      ["faisabilite", "[data-chips-faisabilite]", "faisabilite"],
      ["structures", "[data-chips-structures]", "structures"],
      ["portee", "[data-chips-portee]", "portee"],
    ];
    map.forEach(([groupe, sel, stKey]) => {
      const cont = $(sel);
      cont.innerHTML = (TAX[groupe] || [])
        .map(([cle, lib]) => {
          const actif = state[stKey].has(cle);
          return `<button type="button" class="chip-s" data-fin="${stKey}" data-val="${cle}" aria-pressed="${actif}">${lib}</button>`;
        })
        .join("");
    });
  }

  /* ============================================================
     Rendu — Grille
     ============================================================ */
  function rendreGrille() {
    const grille = $("[data-grille]");
    const vide = $("[data-etat-vide]");
    const liste = casFiltres();

    // compteur de résultats
    const nb = $("[data-nb-resultats]");
    nb.innerHTML = `<strong>${liste.length}</strong> cas ${liste.length > 1 ? "correspondent" : "correspond"} à votre recherche`;

    const reset = $("[data-reset]");
    const filtresActifs = state.axe.size || state.faisabilite.size || state.structures.size || state.portee.size;
    reset.hidden = !filtresActifs;

    if (!liste.length) {
      grille.innerHTML = "";
      vide.hidden = false;
      return;
    }
    vide.hidden = true;

    grille.innerHTML = liste
      .map((c, i) => {
        const choisi = state.panier.has(c.id);
        return `<article class="carte ${choisi ? "est-choisi" : ""}" style="--accent:var(--c-${c.service}, var(--encre));--i:${Math.min(i, 18)}" data-carte="${c.id}">
          <button type="button" class="carte-lien-detail" data-detail="${c.id}">Voir la fiche : ${c.titre}</button>
          <div class="carte-tete">
            <span class="carte-service"><span class="point"></span>${label("services", c.service)}</span>
            <button type="button" class="carte-ajout" data-toggle="${c.id}" aria-pressed="${choisi}" aria-label="${choisi ? "Retirer de ma liste de cas à tester" : "Ajouter à ma liste de cas à tester"}">${choisi ? "✓" : "+"}</button>
          </div>
          <h3 class="carte-titre">${c.titre}</h3>
          <p class="carte-douleur">${c.douleur}</p>
          <div class="carte-pied">
            <span class="tag tag-faisabilite tag-${c.faisabilite}">${label("faisabilite", c.faisabilite)}</span>
          </div>
        </article>`;
      })
      .join("");
  }

  /* ============================================================
     Rendu — Feuille de route + compteurs
     ============================================================ */
  function rendreFeuille() {
    const liste = $("[data-feuille-liste]");
    const vide = $("[data-feuille-vide]");
    const choisis = Array.from(state.panier)
      .map((id) => byId.get(id))
      .filter(Boolean)
      .sort((a, b) => {
        const sa = ORDRE_SERVICES.has(a.service) ? ORDRE_SERVICES.get(a.service) : 99;
        const sb = ORDRE_SERVICES.has(b.service) ? ORDRE_SERVICES.get(b.service) : 99;
        if (sa !== sb) return sa - sb;
        const ea = a.faisabilite in ORDRE_EFFORT ? ORDRE_EFFORT[a.faisabilite] : 9;
        const eb = b.faisabilite in ORDRE_EFFORT ? ORDRE_EFFORT[b.faisabilite] : 9;
        return ea - eb;
      });

    vide.hidden = choisis.length > 0;
    liste.innerHTML = choisis
      .map((c, i) => `<li class="fr-item" style="--i:${Math.min(i, 10)}">
        <span class="fr-item-point" style="background:var(--c-${c.service}, var(--encre))"></span>
        <span class="fr-item-texte">
          <span class="fr-item-titre">${c.titre}</span>
          <span class="fr-item-meta">${label("services", c.service)} · ${label("faisabilite", c.faisabilite)}</span>
        </span>
        <button type="button" class="fr-item-retirer" data-toggle="${c.id}" aria-label="Retirer ${c.titre}">×</button>
      </li>`)
      .join("");

    // compteurs
    const n = state.panier.size;
    $$("[data-compteur]").forEach((el) => (el.textContent = n));
    const s = $("[data-compteur-s]");
    if (s) s.textContent = n > 1 ? "s" : "";

    // coup de tampon sur les pastilles quand la sélection grandit
    if (n > compteurPrecedent) {
      $$(".pastille[data-compteur]").forEach((el) => {
        el.classList.remove("pop");
        void el.offsetWidth; // relance l'animation
        el.classList.add("pop");
      });
    }
    compteurPrecedent = n;
  }

  /* Mise à jour ciblée d'une carte (évite de rejouer l'animation
     d'entrée de toute la grille à chaque ajout/retrait) */
  function majCarte(id) {
    const el = document.querySelector(`[data-carte="${id}"]`);
    if (!el) return;
    const choisi = state.panier.has(id);
    el.classList.toggle("est-choisi", choisi);
    const btn = el.querySelector("[data-toggle]");
    if (btn) {
      btn.setAttribute("aria-pressed", String(choisi));
      btn.setAttribute("aria-label", choisi ? "Retirer de ma liste de cas à tester" : "Ajouter à ma liste de cas à tester");
      btn.textContent = choisi ? "✓" : "+";
    }
  }

  /* ============================================================
     Sélection
     ============================================================ */
  function basculer(id) {
    const cas = byId.get(id);
    if (!cas) return;
    if (state.panier.has(id)) {
      state.panier.delete(id);
    } else {
      state.panier.add(id);
      emettre("ajout_cas", cas);
      toast(`« ${cas.titre} » ajouté à votre liste à tester`);
    }
    majURL();
    // maj ciblée de l'affichage
    majCarte(id);
    rendreFeuille();
  }

  /* ============================================================
     Fiche détail (modale)
     ============================================================ */
  let dernierFocus = null;

  function ouvrirFiche(id) {
    const c = byId.get(id);
    if (!c) return;
    dernierFocus = document.activeElement;
    const contenu = $("[data-fiche-contenu]");
    const choisi = state.panier.has(c.id);

    const type = TYPE_SOLUTION[c.faisabilite];
    const badgeType = type
      ? `<p class="fiche-niveau"><span class="fiche-niveau-badge">${type.libelle}</span> — ${type.description}</p>`
      : "";
    const estComplexe = c.faisabilite === "complexe";
    const aProcess = estComplexe && Array.isArray(c.process) && c.process.length > 0;
    const notePrompt = estComplexe
      ? ""
      : `<p class="fiche-prompt-note">Un exemple pour tester le cas et vous roder — adaptez-le à votre contexte. Pour le déployer vraiment dans votre structure, l'étape d'après est d'encapsuler le process : plus rien à réexpliquer à chaque fois.</p>`;
    /* Cas complexe avec champ process : liste ordonnée d'étapes, sans bouton Copier.
       Sinon : affichage du texte du prompt/dispositif, copiable (repli). */
    const blocProcedure = aProcess
      ? `<ol class="fiche-process">${c.process.map((etape) => `<li>${echapper(etape)}</li>`).join("")}</ol>`
      : `<div class="fiche-prompt-boite">
          <button type="button" class="fiche-copier-prompt" data-copier-prompt>Copier</button>
          <div class="fiche-prompt">${echapper(c.prompt)}</div>
        </div>`;
    const conseil = c.conseil ? `<div class="fiche-bloc"><p class="fiche-conseil">${c.conseil}</p></div>` : "";
    const structs = c.structures.map((s) => label("structures", s)).join(" · ");
    const skillNote = c.skill
      ? `<a class="btn btn-contour" href="${c.skill}" target="_blank" rel="noopener">Voir la fiche recette</a>`
      : `<p class="fiche-skill-note">${
          estComplexe
            ? "Un cas de cette ampleur se construit étape par étape — ajoutez-le à votre feuille de route et parlons-en."
            : "Tout est là pour l'essayer vous-même : le prompt ci-dessus. Ajoutez ce cas à votre liste pour le garder sous la main."
        }</p>`;

    contenu.innerHTML = `
      <span class="fiche-bandeau"></span>
      <span class="fiche-service"><span class="point"></span>${label("services", c.service)}</span>
      <h2 class="fiche-titre" id="fiche-titre">${c.titre}</h2>
      <div class="fiche-tags">
        <span class="tag tag-faisabilite tag-${c.faisabilite}">${label("faisabilite", c.faisabilite)}</span>
        <span class="tag">${label("besoins", c.besoin)}</span>
        <span class="tag">${label("portee", c.portee)}</span>
      </div>
      <div class="fiche-bloc">
        <p class="fiche-bloc-titre">Avant l'IA</p>
        <p class="fiche-douleur">${c.douleur}</p>
      </div>
      <div class="fiche-bloc">
        <p class="fiche-bloc-titre">Après l'IA</p>
        <p class="fiche-gain">${c.gain}</p>
        <a class="fiche-lien-calcul" href="https://cvlc.fr/" target="_blank" rel="noopener">Calculez le temps que ça vous fait gagner → cvlc.fr</a>
      </div>
      <div class="fiche-bloc">
        <p class="fiche-bloc-titre">${estComplexe ? "Le process métier" : "L'esprit du prompt"}</p>
        ${notePrompt}
        ${blocProcedure}
      </div>
      <div class="fiche-bloc">
        <p class="fiche-bloc-titre">Type de solution</p>
        ${badgeType}
      </div>
      ${conseil}
      <div class="fiche-bloc">
        <p class="fiche-bloc-titre">Pour qui</p>
        <p>${structs}</p>
      </div>
      <div class="fiche-cta">
        <button type="button" class="btn ${choisi ? "btn-contour" : "btn-tangerine"}" data-toggle-fiche="${c.id}">
          ${choisi ? "✓ Dans ma liste à tester" : "+ Ajouter à ma liste à tester"}
        </button>
        ${skillNote}
      </div>`;

    const contenuFiche = $("[data-fiche]");
    contenuFiche.style.setProperty("--accent", `var(--c-${c.service}, var(--encre))`);
    const voile = $("[data-voile]");
    voile.hidden = false;
    document.body.style.overflow = "hidden";
    $("[data-fermer]").focus();
  }

  function fermerFiche() {
    $("[data-voile]").hidden = true;
    document.body.style.overflow = "";
    if (dernierFocus) dernierFocus.focus();
  }

  function echapper(txt) {
    const d = document.createElement("div");
    d.textContent = txt;
    return d.innerHTML;
  }

  /* ============================================================
     Copie (lien + prompt) & toast
     ============================================================ */
  let toastTimer = null;
  function toast(msg) {
    const t = $("[data-toast]");
    t.textContent = msg;
    t.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("visible"), 2600);
  }

  async function copier(texte, msg) {
    try {
      await navigator.clipboard.writeText(texte);
      toast(msg);
    } catch (e) {
      // repli : sélection manuelle
      const ta = document.createElement("textarea");
      ta.value = texte;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); toast(msg); } catch (_) { toast("Copie impossible — copiez le lien manuellement"); }
      document.body.removeChild(ta);
    }
  }

  /* ============================================================
     Câblage des évènements
     ============================================================ */
  function cabler() {
    // Double entrée métier / besoin
    $$(".entree").forEach((btn) => {
      btn.addEventListener("click", () => {
        const val = btn.dataset.entree;
        if (val === state.entree) return;
        state.entree = val;
        state.axe.clear();
        $$(".entree").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.entree === val)));
        rendreChipsAxe();
        rendreGrille();
      });
    });

    // Délégation : chips d'axe
    $("[data-chips-axe]").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-axe-val]");
      if (!btn || btn.disabled) return;
      const val = btn.dataset.axeVal;
      if (state.axe.has(val)) state.axe.delete(val);
      else state.axe.add(val);
      btn.setAttribute("aria-pressed", String(state.axe.has(val)));
      rendreGrille();
    });

    // Délégation : chips fins
    $(".filtres-fins").addEventListener("click", (e) => {
      const btn = e.target.closest("[data-fin]");
      if (!btn) return;
      const grp = btn.dataset.fin;
      const val = btn.dataset.val;
      if (state[grp].has(val)) state[grp].delete(val);
      else state[grp].add(val);
      btn.setAttribute("aria-pressed", String(state[grp].has(val)));
      rendreChipsAxe(); // les comptages d'axe dépendent des filtres fins
      rendreGrille();
    });

    // Délégation grille : détail + toggle
    $("[data-grille]").addEventListener("click", (e) => {
      const tog = e.target.closest("[data-toggle]");
      if (tog) { e.preventDefault(); basculer(tog.dataset.toggle); return; }
      const det = e.target.closest("[data-detail]");
      if (det) { e.preventDefault(); ouvrirFiche(det.dataset.detail); }
    });

    // Feuille de route : retirer
    $("[data-feuille-liste]").addEventListener("click", (e) => {
      const tog = e.target.closest("[data-toggle]");
      if (tog) basculer(tog.dataset.toggle);
    });

    // Reset
    const resetTout = () => {
      state.axe.clear(); state.faisabilite.clear(); state.structures.clear(); state.portee.clear();
      rendreChipsAxe(); rendreChipsFins(); rendreGrille();
    };
    $("[data-reset]").addEventListener("click", resetTout);
    $("[data-reset-vide]").addEventListener("click", resetTout);

    // Copier le lien
    $("[data-copier-lien]").addEventListener("click", () => {
      if (!state.panier.size) { toast("Sélectionnez au moins un cas avant de partager"); return; }
      majURL();
      copier(window.location.href, "Lien copié — partagez-le, il rouvrira votre sélection");
      emettre("copie_lien", null);
    });

    // Modale : fermeture
    $("[data-fermer]").addEventListener("click", fermerFiche);
    $("[data-voile]").addEventListener("click", (e) => { if (e.target === e.currentTarget) fermerFiche(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("[data-voile]").hidden) fermerFiche(); });

    // Modale : toggle + copier prompt (délégation sur le contenu)
    $("[data-fiche-contenu]").addEventListener("click", (e) => {
      const tog = e.target.closest("[data-toggle-fiche]");
      if (tog) {
        basculer(tog.dataset.toggleFiche);
        const c = byId.get(tog.dataset.toggleFiche);
        const choisi = state.panier.has(c.id);
        tog.className = "btn " + (choisi ? "btn-contour" : "btn-tangerine");
        tog.textContent = choisi ? "✓ Dans ma liste à tester" : "+ Ajouter à ma liste à tester";
        return;
      }
      const cp = e.target.closest("[data-copier-prompt]");
      if (cp) {
        const prompt = $(".fiche-prompt", $("[data-fiche-contenu]")).textContent;
        copier(prompt, "Prompt copié");
      }
    });

    // FAB → feuille de route
    $("[data-fab]").addEventListener("click", () => {
      $("#feuille-de-route").scrollIntoView({ behavior: "smooth" });
    });
  }

  /* ============================================================
     Atelier — calage du héro, nuancier d'encres, apparitions
     Tout est décoratif : aria-hidden, et neutralisé si
     prefers-reduced-motion est actif.
     ============================================================ */
  const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const motionReduit = () => mqMotion.matches;

  function initCalageHero() {
    const pile = $("[data-hero-pile]");
    const titre = pile ? $(".hero-titre", pile) : null;
    if (!pile || !titre) return;

    // Deux plaques d'encre en surimpression derrière le titre
    ["couche-a", "couche-b"].forEach((cl) => {
      const couche = document.createElement("div");
      couche.className = "hero-titre hero-couche " + cl;
      couche.setAttribute("aria-hidden", "true");
      couche.innerHTML = titre.innerHTML;
      pile.appendChild(couche);
    });

    // Télémétrie : les chiffres convergent pendant que les plaques se calent
    const elX = $("[data-calage-x]");
    const elY = $("[data-calage-y]");
    const elEncres = $("[data-calage-encres]");
    const elStatut = $("[data-calage-statut]");
    const nbEncres = (TAX.services || []).length || 10;
    const fmt = (v) => (v < -0.05 ? "−" : "") + Math.abs(v).toFixed(1).replace(".", ",");
    const terminer = () => {
      if (elX) elX.textContent = "0,0";
      if (elY) elY.textContent = "0,0";
      if (elEncres) elEncres.textContent = `${nbEncres}/${nbEncres}`;
      if (elStatut) { elStatut.textContent = "En registre"; elStatut.classList.add("registre"); }
    };
    if (motionReduit()) {
      terminer();
    } else {
      const duree = 1350;
      const depart = performance.now() + 150;
      const tick = (t) => {
        const p = Math.min(1, Math.max(0, (t - depart) / duree));
        const e = 1 - Math.pow(1 - p, 4);
        if (elX) elX.textContent = fmt(-8.4 * (1 - e));
        if (elY) elY.textContent = fmt(5.2 * (1 - e));
        if (elEncres) elEncres.textContent = `${Math.round(nbEncres * e)}/${nbEncres}`;
        if (p < 1) requestAnimationFrame(tick);
        else terminer();
      };
      requestAnimationFrame(tick);
    }

    // Dérive des plaques au pointeur (desktop uniquement), suivi en lerp
    if (motionReduit() || !window.matchMedia("(pointer: fine)").matches) return;
    const hero = pile.closest(".hero") || pile;
    let cx = 0, cy = 0, tx = 0, ty = 0, actif = false;
    const boucle = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      pile.style.setProperty("--spx", cx.toFixed(2) + "px");
      pile.style.setProperty("--spy", cy.toFixed(2) + "px");
      if (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) requestAnimationFrame(boucle);
      else actif = false;
    };
    const relancer = () => { if (!actif) { actif = true; requestAnimationFrame(boucle); } };
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 7;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 5;
      relancer();
    });
    hero.addEventListener("pointerleave", () => { tx = 0; ty = 0; relancer(); });
  }

  function rendreBarreEncres() {
    const barre = $("[data-barre-encres]");
    if (!barre) return;
    const services = TAX.services || [];
    barre.innerHTML = services
      .map(([cle], i) => `<span style="--enc:var(--c-${cle}, var(--encre));--i:${i}"></span>`)
      .join("");
    const note = $("[data-barre-encres-note]");
    if (note) note.textContent = `${services.length} métiers · chacun sous sa couleur`;
  }

  /* Scène presse : les 4 plaques volent des bords de l'écran et se calent
     en scrubbant. Sans JS ou en motion réduit : affiche statique déjà calée. */
  function initPresse() {
    const sec = $("[data-presse]");
    if (!sec) return;
    const nb = $("[data-nb-cas-presse]");
    if (nb) nb.textContent = CAS.length;
    if (motionReduit()) return;

    sec.classList.add("presse-active");
    const plaques = $$(".presse-pile > span", sec);
    const pct = $("[data-presse-pct]");
    const statut = $("[data-presse-statut]");
    const legende = $(".presse-legende", sec);
    const DEPART = [[-58, -30], [58, -20], [-40, 48], [40, 50]]; // vw / vh
    const REPOS = [[-2, 1.5], [2, -1.5], [1, 2], [0, 0]]; // px
    const avecFlou = window.matchMedia("(min-width: 821px)").matches;
    let dernierP = -1;
    let planifie = false;

    const rendre = () => {
      planifie = false;
      const r = sec.getBoundingClientRect();
      const piste = r.height - window.innerHeight;
      if (piste <= 0) return;
      const p = Math.min(1, Math.max(0, -r.top / piste));
      if (Math.abs(p - dernierP) < 0.002) return;
      dernierP = p;
      const e = 1 - Math.pow(1 - p, 4);
      plaques.forEach((pl, i) => {
        const x = DEPART[i][0] * (1 - e);
        const y = DEPART[i][1] * (1 - e);
        pl.style.transform = `translate(calc(${x.toFixed(2)}vw + ${(REPOS[i][0] * e).toFixed(2)}px), calc(${y.toFixed(2)}vh + ${(REPOS[i][1] * e).toFixed(2)}px))`;
        if (avecFlou) pl.style.filter = e > 0.96 ? "none" : `blur(${((1 - e) * 5).toFixed(2)}px)`;
        pl.style.opacity = Math.min(1, 0.15 + e * 1.2).toFixed(3);
      });
      if (pct) pct.textContent = Math.round(p * 100);
      if (statut) {
        const cale = p >= 0.92;
        statut.textContent = cale ? "En registre" : "Hors registre";
        statut.classList.toggle("registre", cale);
      }
      if (legende) legende.style.opacity = Math.min(1, Math.max(0, (p - 0.75) * 4)).toFixed(3);
    };
    const surScroll = () => {
      if (!planifie) { planifie = true; requestAnimationFrame(rendre); }
    };
    window.addEventListener("scroll", surScroll, { passive: true });
    window.addEventListener("resize", surScroll, { passive: true });
    rendre();
  }

  /* Curseur croix de repérage (desktop, pointeur précis uniquement) */
  function initCurseur() {
    if (motionReduit() || !window.matchMedia("(pointer: fine)").matches) return;
    const cur = document.createElement("div");
    cur.className = "curseur";
    cur.setAttribute("aria-hidden", "true");
    cur.innerHTML = '<svg viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="15" cy="15" r="7.5"/><path d="M15 0v30M0 15h30"/></svg>';
    document.body.appendChild(cur);
    document.body.classList.add("curseur-actif");
    let cx = -100, cy = -100, tx = -100, ty = -100, actif = false;
    const boucle = () => {
      cx += (tx - cx) * 0.22;
      cy += (ty - cy) * 0.22;
      cur.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0)`;
      if (Math.abs(tx - cx) > 0.2 || Math.abs(ty - cy) > 0.2) requestAnimationFrame(boucle);
      else actif = false;
    };
    document.addEventListener("pointermove", (e) => {
      if (tx === -100) { cx = e.clientX; cy = e.clientY; }
      tx = e.clientX; ty = e.clientY;
      cur.classList.add("visible");
      cur.classList.toggle("sur-lien", !!(e.target.closest && e.target.closest("a, button, input, textarea, [role='button']")));
      if (!actif) { actif = true; requestAnimationFrame(boucle); }
    }, { passive: true });
    document.documentElement.addEventListener("pointerleave", () => cur.classList.remove("visible"));
  }

  function initApparitions() {
    const cibles = $$(".cale-scroll");
    if (!cibles.length) return;
    if (motionReduit() || !("IntersectionObserver" in window)) {
      cibles.forEach((el) => el.classList.add("en-registre"));
      return;
    }
    const obs = new IntersectionObserver((entrees) => {
      entrees.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("en-registre");
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.3 });
    cibles.forEach((el) => obs.observe(el));
  }

  /* ============================================================
     Amorçage
     ============================================================ */
  function init() {
    $("[data-nb-cas]").textContent = CAS.length;
    restaurerDepuisURL();
    rendreMarquee();
    rendreBarreEncres();
    rendreChipsAxe();
    rendreChipsFins();
    rendreGrille();
    rendreFeuille();
    initCalageHero();
    initPresse();
    initCurseur();
    initApparitions();
    cabler();
    if (state.panier.size) {
      toast(`${state.panier.size} cas restaurés depuis votre lien`);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
