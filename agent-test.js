// ============================================================
// Agent de test (ElevenLabs) : widget à la charte Edmo +
// coordonnées demandées avant le premier lancement.
// Partagé par index.html et feuille-de-route.html.
// Les coordonnées partent à l'agent comme variables dynamiques
// et restent visibles dans l'historique des conversations.
// ============================================================
(function () {
  var AGENT_ID = 'agent_9401m2t6n45he6nrtw5hpqtf3jah';
  var CLE = 'edmo-test-coordonnees';
  var LIBELLES_LANCEMENT = ['Lancer le test', 'Message'];

  var CHARTE = [
    '* {',
    '  --el-base: #032221 !important;',
    '  --el-base-hover: #06302B !important;',
    '  --el-base-active: #06302B !important;',
    '  --el-base-border: rgba(241, 247, 246, 0.16) !important;',
    '  --el-base-subtle: rgba(241, 247, 246, 0.72) !important;',
    '  --el-base-primary: #F1F7F6 !important;',
    '  --el-accent: #00DF81 !important;',
    '  --el-accent-hover: #2CC295 !important;',
    '  --el-accent-active: #2CC295 !important;',
    '  --el-accent-border: #03624C !important;',
    '  --el-accent-subtle: #2CC295 !important;',
    '  --el-accent-primary: #021B14 !important;',
    '  --el-button-radius: 999px !important;',
    '  --el-sheet-radius: 16px !important;',
    '  --el-compact-sheet-radius: 16px !important;',
    '  --el-bubble-radius: 12px !important;',
    '  --el-input-radius: 12px !important;',
    '  font-family: Manrope, system-ui, sans-serif !important;',
    '}',
    '.bg-base { color: var(--el-base-primary); border: 1px solid var(--el-base-border); }',
    '.max-w-64 { font-size: 0.92rem; font-weight: 700; line-height: 1.4; max-width: 15rem; text-wrap: balance; }',
    'p[class*="text-[10px]"] { display: none !important; }',
    'button { font-weight: 800 !important; }',
    'button:focus-visible { outline: 2px solid #00DF81 !important; outline-offset: 3px !important; }'
  ].join('\n');

  var FENETRE = [
    '<button type="button" class="test-fermer" data-test-fermer aria-label="Fermer">×</button>',
    '<h2 id="test-titre">Avant de lancer le test</h2>',
    '<p class="test-intro">L’agent vous appellera par votre prénom. Nous pourrons ensuite vous recontacter pour en parler.</p>',
    '<form class="test-formulaire">',
    '  <div class="test-identite">',
    '    <div class="test-champ">',
    '      <label for="test-prenom">Prénom</label>',
    '      <input type="text" id="test-prenom" name="prenom" autocomplete="given-name" required autofocus>',
    '    </div>',
    '    <div class="test-champ">',
    '      <label for="test-nom">Nom</label>',
    '      <input type="text" id="test-nom" name="nom" autocomplete="family-name" required>',
    '    </div>',
    '  </div>',
    '  <div class="test-champ">',
    '    <label for="test-email">Email professionnel</label>',
    '    <input type="email" id="test-email" name="email" placeholder="vous@organisation.fr" autocomplete="email" required>',
    '  </div>',
    '  <button type="submit" class="test-bouton">Lancer le test</button>',
    '  <p class="test-mention">Vos coordonnées servent à personnaliser le test et à vous recontacter à son sujet. Elles sont conservées dans l’historique de notre agent vocal (ElevenLabs). Pour les faire supprimer&nbsp;: <a href="mailto:jbdurand@edmo.fr">jbdurand@edmo.fr</a>.</p>',
    '</form>'
  ].join('\n');

  var enMemoire = null;

  function lire() {
    if (enMemoire) return enMemoire;
    try { return JSON.parse(localStorage.getItem(CLE)); } catch (e) { return null; }
  }

  function memoriser(coordonnees) {
    enMemoire = coordonnees;
    try { localStorage.setItem(CLE, JSON.stringify(coordonnees)); } catch (e) {}
  }

  // Fenêtre de coordonnées
  var fenetre = document.createElement('dialog');
  fenetre.className = 'test-fenetre';
  fenetre.setAttribute('aria-labelledby', 'test-titre');
  fenetre.innerHTML = FENETRE;
  document.body.appendChild(fenetre);
  var formulaire = fenetre.querySelector('form');

  fenetre.querySelector('[data-test-fermer]').addEventListener('click', function () { fenetre.close(); });
  fenetre.addEventListener('click', function (e) { if (e.target === fenetre) fenetre.close(); });

  // Widget
  var widget = document.createElement('elevenlabs-convai');
  widget.setAttribute('agent-id', AGENT_ID);
  widget.setAttribute('avatar-orb-color-1', '#00DF81');
  widget.setAttribute('avatar-orb-color-2', '#03624C');
  widget.setAttribute('text-contents', JSON.stringify({
    main_label: 'Testez l’automatisation d’un de vos process en 5 minutes',
    start_call: 'Lancer le test'
  }));
  var connues = lire();
  if (connues) widget.setAttribute('dynamic-variables', JSON.stringify(connues));
  document.body.appendChild(widget);

  var script = document.createElement('script');
  script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
  script.async = true;
  document.body.appendChild(script);

  var boutonEnAttente = null;

  formulaire.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!formulaire.reportValidity()) return;
    var coordonnees = {
      prenom: formulaire.prenom.value.trim(),
      nom: formulaire.nom.value.trim(),
      email: formulaire.email.value.trim()
    };
    memoriser(coordonnees);
    widget.setAttribute('dynamic-variables', JSON.stringify(coordonnees));
    fenetre.close();
    var bouton = boutonEnAttente;
    boutonEnAttente = null;
    // Laisse le widget relire l'attribut avant de démarrer
    if (bouton) setTimeout(function () { bouton.click(); }, 50);
  });

  customElements.whenDefined('elevenlabs-convai').then(function () {
    var essais = 0;
    (function brancher() {
      var racine = widget.shadowRoot;
      if (!racine) { if (essais++ < 50) setTimeout(brancher, 100); return; }

      var style = document.createElement('style');
      style.textContent = CHARTE;
      racine.appendChild(style);

      // Premier lancement : on demande les coordonnées avant de laisser partir l'appel
      racine.addEventListener('click', function (e) {
        if (lire()) return;
        var bouton = e.composedPath().find(function (n) { return n.tagName === 'BUTTON'; });
        if (!bouton) return;
        var libelle = bouton.getAttribute('aria-label') || bouton.textContent.trim();
        if (LIBELLES_LANCEMENT.indexOf(libelle) === -1) return;
        e.preventDefault();
        e.stopImmediatePropagation();
        boutonEnAttente = bouton;
        fenetre.showModal();
      }, true);
    })();
  });
})();
