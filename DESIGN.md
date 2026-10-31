---
name: Edmo
description: L'IA orchestrée pour le sport et l'entertainment — site vitrine et Carte IA
colors:
  rich-black: "#021B14"
  vert-nuit: "#032221"
  vert-bangladesh: "#03624C"
  vert-meadow: "#2CC295"
  vert-caribbean: "#00DF81"
  blanc-anti-flash: "#F1F7F6"
  fond-teinte: "#E2EDE9"
  encre-claire: "#294D42"
  pine: "#06302B"
  frog: "#17876D"
typography:
  display:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.6vw, 4.3rem)"
    fontWeight: 800
    lineHeight: 1.22
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 3.8vw, 2.8rem)"
    fontWeight: 800
    lineHeight: 1.22
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1.18rem"
    fontWeight: 800
    lineHeight: 1.35
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 800
rounded:
  pilule: "999px"
  panneau: "16px"
  encart: "12px"
  fiche: "10px"
spacing:
  section: "clamp(76px, 11vh, 128px)"
  conteneur-max: "1120px"
  gouttiere: "clamp(20px, 5vw, 48px)"
  grille: "clamp(28px, 4vw, 56px)"
components:
  button-primary:
    backgroundColor: "{colors.vert-caribbean}"
    textColor: "{colors.rich-black}"
    rounded: "{rounded.pilule}"
    padding: "15px 32px"
  button-primary-hover:
    backgroundColor: "{colors.vert-meadow}"
  button-nav-cta:
    backgroundColor: "{colors.vert-caribbean}"
    textColor: "{colors.rich-black}"
    rounded: "{rounded.pilule}"
    padding: "9px 20px"
  button-contour-clair:
    backgroundColor: "transparent"
    textColor: "{colors.blanc-anti-flash}"
    rounded: "{rounded.pilule}"
    padding: "14px 28px"
  chip:
    backgroundColor: "{colors.blanc-anti-flash}"
    textColor: "{colors.rich-black}"
    rounded: "{rounded.pilule}"
    padding: "8px 15px"
  chip-active:
    backgroundColor: "{colors.rich-black}"
    textColor: "{colors.blanc-anti-flash}"
  panneau-sombre:
    backgroundColor: "{colors.rich-black}"
    textColor: "{colors.blanc-anti-flash}"
    rounded: "{rounded.panneau}"
    padding: "clamp(36px, 5vw, 52px)"
---

# Design System: Edmo

## 1. Overview

**Creative North Star: « Le stade de nuit »**

Edmo, c'est une pelouse éclairée dans l'obscurité. Les fonds sont profonds (Rich Black, vert nuit), le contenu est précis et cadré, et le vert Caribbean joue le rôle des projecteurs : il ne couvre jamais la surface, il désigne ce qui compte — un CTA, la moitié « mo » du wordmark, un chiffre clé, un mot souligné. Le site alterne des nappes sombres et des nappes claires (Anti-Flash White) comme un stade alterne tribunes dans l'ombre et terrain en pleine lumière ; c'est cette alternance, et non des ombres portées, qui crée la profondeur.

Le système est franc et direct : une seule famille typographique (Manrope) menée à la graisse, des pilules pleines pour les actions, des formes géométriques simples (carrés repères, cercles pour les médaillons et badges). Il rejette le décorum SaaS générique — dégradés, glassmorphism, cartes ombrées en grille — au profit d'aplats nets et d'une hiérarchie tenue par le contraste de graisse et de fond.

**Key Characteristics:**
- Alternance de nappes sombres/claires comme structure de page (noir → vert éclat → blanc → vert nuit → blanc → noir)
- Un seul accent (vert Caribbean #00DF81), rare et toujours actionnable ou signifiant
- Manrope seule, du 400 au 800 : la hiérarchie est une affaire de graisse, pas de famille
- Formes : pilules pour les actions, cercles pour les personnes et badges, carrés 14px comme repères
- Surfaces plates ; le relief est réservé au survol

## 2. Colors

Une charte verte tenue du noir presque-vert au vert lumineux, posée sur un blanc légèrement teinté.

### Primary
- **Vert Caribbean** (#00DF81) : l'accent unique — CTA pleins, « mo » du wordmark, badges (× de la section équipe, pastilles), soulignés d'emphase, bandeau des chiffres clés, `::selection`. C'est la lumière des projecteurs : sa rareté fait sa force.
- **Vert Meadow** (#2CC295) : l'état hover du Caribbean et les emphases secondaires (mentions, labels de formulaire, `em` du hero).

### Secondary
- **Vert Bangladesh** (#03624C) : le vert « matière » — panneau de la Carte IA sur la landing, encart financement, repères et bordures secondaires, mots-clés en gras sur fond clair.

### Neutral
- **Rich Black** (#021B14) : fond du header, du hero, du contact et du footer ; encre des textes sur fond vert éclat.
- **Vert nuit** (#032221) : fond de la section méthode et du panneau feuille de route ; encre principale sur fond clair.
- **Anti-Flash White** (#F1F7F6) : le fond clair du site et le texte sur fonds sombres (en transparences 0.66–0.88 pour les textes secondaires).
- **Fond teinté** (#E2EDE9) : variante de fond pour les états et surfaces secondaires de la Carte IA.
- **Encre claire** (#294D42) : texte secondaire sur fond clair — jamais de gris neutre.

**La règle des projecteurs.** Le vert Caribbean occupe moins de 10 % d'un écran. Il désigne une action ou une emphase ; il ne sert jamais de fond de lecture ni de couleur décorative. Si un écran contient deux CTA pleins visibles en même temps, il y en a un de trop.

**La règle Ed/mo.** Le wordmark s'écrit toujours `Ed` dans la couleur d'encre du fond (blanc sur sombre, Rich Black sur clair) et `mo` en vert Caribbean. Aucune autre découpe, aucune autre couleur.

*(Extension Carte IA : la page feuille-de-route ajoute 10 teintes sémantiques par métier — voir `.impeccable/design.json` ; elles n'existent que sur cette page.)*

## 3. Typography

**Display Font:** Manrope (system-ui, sans-serif en repli)
**Body Font:** Manrope — même famille, graisses 400–800 chargées via Google Fonts

**Character:** Une seule voix, géométrique et contemporaine, qui passe du murmure (500) au cri (800) sans jamais changer de timbre. La hiérarchie est entièrement portée par la graisse, la taille et la couleur de fond.

### Hierarchy
- **Display** (800, clamp(2.5rem, 5.6vw, 4.3rem), lh 1.22, ls -0.02em) : le hero uniquement, avec un `em` en vert Meadow sur le mot pivot.
- **Headline** (800, clamp(1.9rem, 3.8vw, 2.8rem), lh 1.22) : titres de section, `max-width` en `ch` (22–24ch) et `text-wrap: balance`.
- **Title** (800, 1.18–1.3rem) : titres de cartes, noms des membres, items de méthode.
- **Body** (500, 17px, lh 1.65) : texte courant, `text-wrap: pretty`, largeur plafonnée (52–58ch). Sur fond sombre : blanc en transparence 0.78–0.85.
- **Label** (800, 0.88–0.92rem) : labels de formulaire (vert Meadow), navigation (600), mentions.

**La règle de la famille unique.** Manrope est la seule famille du système. Interdiction d'introduire une seconde famille (serif d'accent, mono décoratif) : toute nuance passe par la graisse et la taille.

## 4. Elevation

Le système est plat par doctrine. La profondeur vient de l'alternance des nappes de fond (blanc / vert nuit / noir), des rayons de courbure et du contraste — jamais d'ombres décoratives au repos. Les seules ombres autorisées sont réactives : le relief de survol des cartes et boutons de la Carte IA.

### Shadow Vocabulary
- **Trait posé** (`box-shadow: 0 2px 0 rgba(2, 27, 20, 0.08)`) : assise discrète des fiches de la Carte IA au repos.
- **Relief de survol** (`box-shadow: 0 10px 24px rgba(2, 27, 20, 0.16)`) : réponse au hover (cartes, `.btn-plein`), toujours couplée à `transform: translateY(-2px)`.

**La règle du plat.** Une surface au repos n'a pas d'ombre. Si un élément semble manquer de présence, on change son fond ou sa graisse, pas son ombre.

## 5. Components

Francs et directs : on comprend où cliquer en une seconde.

### Buttons
- **Shape:** pilule intégrale (999px)
- **Primary** (`.bouton`, `.btn-tangerine`) : fond vert Caribbean, texte Rich Black 800, padding 15px 32px (14px 28px sur la Carte IA)
- **Hover / Focus:** fond vert Meadow + `translateY(-2px)` ; focus visible : `outline: 2px solid #00DF81, offset 3px`
- **Contour** (`.btn-contour`, `.btn-contour-clair`) : transparent, bordure 1.5px, s'inverse au survol (le fond prend la couleur du trait)
- **Lien-flèche** : texte gras souligné d'un trait 2px vert Caribbean — l'action secondaire de la landing
- **Nav CTA** : la même pilule pleine en 9px 20px dans le header

### Chips (Carte IA)
- **Style:** pilule fond blanc, bordure 1.5px, point de couleur métier 10px à gauche
- **State:** actif = inversion complète (fond Rich Black, texte blanc) ; hover = bordure encre + `translateY(-1px)`

### Cards / Containers
- **Corner Style:** 16px (panneaux), 12px (encarts), 10px (fiches)
- **Background:** panneaux sombres (Rich Black ou vert Bangladesh) posés sur les sections claires ; fiches blanches bordées 1.5px sur la Carte IA
- **Shadow Strategy:** plates au repos, relief au survol uniquement (cf. Elevation)
- **Internal Padding:** clamp(36px, 5vw, 52–56px) pour les panneaux

### Inputs / Fields
- **Style:** pas de boîte — fond transparent, seule une bordure basse 2px (blanc transparent sur fond noir)
- **Focus:** la bordure basse passe au vert Caribbean
- **Labels:** 800, 0.88rem, vert Meadow

### Navigation
- **Style:** header sticky Rich Black, wordmark Ed/mo, liens 600 en blanc 0.82 → vert Caribbean au survol, CTA pilule pleine à droite ; sur mobile, seuls le wordmark et le CTA restent.

### Médaillons & badges (signature)
Les personnes et les connecteurs sont des cercles : portraits en médaillon (120–150px, `border: 3px solid #00DF81` + 5px de respiration sur fond blanc), badge × de la section équipe (54–66px, fond vert Caribbean, × noir), pastilles de compteur. Le cercle vert est le liant visuel entre l'humain et l'action.

## 6. Do's and Don'ts

### Do:
- **Do** alterner les nappes de fond pour rythmer la page : clair → sombre → clair, avec le bandeau vert Caribbean comme respiration unique.
- **Do** réserver le vert Caribbean (#00DF81) aux actions et aux emphases ; l'état hover est toujours le vert Meadow (#2CC295).
- **Do** écrire le wordmark `Ed` (encre du fond) + `mo` (vert Caribbean), partout, y compris le favicon (E vert sur carré noir arrondi).
- **Do** utiliser l'encre claire (#294D42) pour le texte secondaire sur fond clair, et le blanc en transparence (0.78–0.88) sur fond sombre.
- **Do** plafonner les largeurs de lecture en `ch` (52–58ch pour le corps, 22–24ch pour les titres) et garder `text-wrap: balance` sur les titres.
- **Do** coupler tout relief de survol à `translateY(-2px)` et à l'ombre `0 10px 24px rgba(2,27,20,0.16)` — jamais l'un sans l'autre.

### Don't:
- **Don't** utiliser une bordure latérale colorée (`border-left` > 1px) comme accent de carte ou de citation — le motif du système est le carré repère 14px ou le badge rond.
- **Don't** introduire une seconde famille de police, un dégradé de texte (`background-clip: text`) ou du glassmorphism.
- **Don't** poser des ombres sur des surfaces au repos, ni empiler des cartes identiques en grille icône + titre + texte.
- **Don't** utiliser de gris neutre pour du texte : toute couleur de texte appartient à la rampe verte de la charte.
- **Don't** écrire « MaestrIA » où que ce soit sur le site : la marque publique est Edmo (MaestrIA reste un nom de travail interne, hors site).
- **Don't** mettre deux CTA pleins vert Caribbean dans le même viewport.
