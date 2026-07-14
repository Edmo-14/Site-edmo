// Données de la Carte IA du Sport — généré, ne pas éditer à la main.
// Source : librairie-skills-sport (cas observés en formation, anonymisés).
window.TAXONOMIE = {
 "services": [
  [
   "direction",
   "Direction générale"
  ],
  [
   "commercial",
   "Commercial & Sponsoring"
  ],
  [
   "marcom",
   "Marketing & Communication"
  ],
  [
   "billetterie",
   "Billetterie & Merchandising"
  ],
  [
   "evenementiel",
   "Événementiel"
  ],
  [
   "sportif",
   "Sportif & Compétitions"
  ],
  [
   "juridique",
   "Juridique & Réglementaire"
  ],
  [
   "finance",
   "Finances & Gestion"
  ],
  [
   "rh",
   "Ressources humaines"
  ],
  [
   "formation",
   "Formation & Certification"
  ]
 ],
 "besoins": [
  [
   "reunions",
   "Réunions & comptes rendus"
  ],
  [
   "mails",
   "Boîte mail"
  ],
  [
   "redaction",
   "Rédiger & adapter"
  ],
  [
   "donnees",
   "Données & tableurs"
  ],
  [
   "documents-longs",
   "Documents longs"
  ],
  [
   "visuels",
   "Visuels & médias"
  ],
  [
   "assistants",
   "Assistants & FAQ"
  ],
  [
   "templates",
   "Documents types"
  ],
  [
   "veille",
   "Veille & benchmark"
  ],
  [
   "automatisation",
   "Automatisations & agents"
  ],
  [
   "analyse",
   "Analyse & décision"
  ]
 ],
 "faisabilite": [
  [
   "facile",
   "🟢 Facile"
  ],
  [
   "moyen",
   "🟠 Moyen"
  ],
  [
   "complexe",
   "🔴 Difficile"
  ]
 ],
 "structures": [
  [
   "federation",
   "Fédération"
  ],
  [
   "ligue",
   "Ligue"
  ],
  [
   "club",
   "Club"
  ],
  [
   "comite",
   "Comité"
  ],
  [
   "salle",
   "Salle / Stade"
  ]
 ],
 "portee": [
  [
   "transversal",
   "Basique"
  ],
  [
   "sport",
   "Spécifique sport"
  ]
 ],
 "preuve": [
  [
   "eprouve",
   "Éprouvé en atelier"
  ],
  [
   "teste",
   "Testé en session"
  ],
  [
   "demande",
   "Demandé sur le terrain"
  ]
 ]
};

window.CAS = [
 {
  "id": "assistant-faq-reseau-clubs",
  "titre": "Créer un assistant qui répond aux questions récurrentes du réseau de clubs",
  "service": "direction",
  "besoin": "assistants",
  "faisabilite": "complexe",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Les mêmes questions remontent en boucle du terrain vers vos équipes : une fédération nationale gère un réseau d'environ 1 400 clubs, une autre traite près de 4 000 questions juridiques par an — chacune une par une.",
  "gain": "L'assistant répond instantanément aux questions de premier niveau en citant ses sources — vos équipes ne traitent plus que les cas complexes.",
  "prompt": "Dispositif : constituer une base de connaissances à partir des règlements, des FAQ existantes et des réponses déjà envoyées au réseau, puis la connecter à un assistant IA accessible aux clubs. L'assistant répond aux questions de premier niveau en citant ses sources et transmet aux équipes celles qui sortent de son périmètre. Le journal des questions posées alimente la mise à jour de la base et révèle les sujets qui méritent une communication proactive.",
  "process": [
   "Constituer la base de connaissances (règlements, FAQ existantes, réponses déjà envoyées)",
   "Connecter la base à un assistant IA accessible aux clubs",
   "Répondre aux questions de premier niveau en citant les sources",
   "Transmettre aux équipes les questions hors périmètre",
   "Mettre à jour la base à partir du journal des questions posées"
  ],
  "conseil": "Commencer par les vingt questions les plus fréquentes et garder un humain dans la boucle sur les réponses à portée juridique.",
  "skill": null
 },
 {
  "id": "analyse-sondages-clubs",
  "titre": "Analyser et synthétiser un sondage envoyé aux clubs",
  "service": "direction",
  "besoin": "analyse",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "comite"
  ],
  "preuve": "demande",
  "douleur": "Les réponses à vos sondages s'empilent dans un tableur : le dépouillement des questions ouvertes est fastidieux, et la synthèse arrive souvent après les arbitrages qu'elle devait éclairer.",
  "gain": "L'IA dégage les thèmes, les quantifie et sélectionne les verbatims représentatifs en quelques minutes — vous n'avez plus qu'à valider la synthèse avant la réunion.",
  "prompt": "Voici l'export brut des réponses à notre sondage envoyé aux clubs : [coller l'export du tableur]. Analyse-le : dégage les grands thèmes qui ressortent des réponses ouvertes, quantifie le poids de chaque thème, sélectionne deux ou trois verbatims représentatifs par thème et signale les signaux faibles ou réponses atypiques. Termine par une synthèse d'une demi-page destinée au comité directeur.",
  "conseil": "Retirer les colonnes nominatives (nom du club, contact) avant de coller l'export : la synthèse n'en a pas besoin et les données personnelles restent chez vous.",
  "skill": null
 },
 {
  "id": "rapport-activite-mensuel-direction",
  "titre": "Rédiger le rapport d'activité mensuel de la direction",
  "service": "direction",
  "besoin": "redaction",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Chaque fin de mois, vous rédigez à la main le rapport d'activité destiné aux instances, à partir de notes éparses et de remontées des services, toujours dans le même format Word — et toujours au pire moment.",
  "gain": "L'IA produit un premier jet complet au format attendu en moins d'une heure — vous relisez et ajustez au lieu de rédiger.",
  "prompt": "Tu m'aides à rédiger le rapport d'activité mensuel de [structure] destiné à [instance]. Voici la trame habituelle : [coller le sommaire type]. Voici mes notes et les remontées des services pour [mois] : [coller la matière brute]. Rédige chaque section dans un style factuel et synthétique, dans l'ordre de la trame, et signale entre crochets les informations manquantes que je dois compléter.",
  "conseil": "Conserver la même trame d'un mois sur l'autre dans un projet ou GPT dédié : le deuxième rapport se produit deux fois plus vite que le premier.",
  "skill": null
 },
 {
  "id": "analyse-dossier-avant-decision",
  "titre": "Analyser un dossier de 50 pages avant une décision",
  "service": "direction",
  "besoin": "documents-longs",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Avant un arbitrage, vous recevez un dossier de 50 pages — parfois un cahier des charges de 200 à 300 pages ou une étude de 70 pages — que vous n'avez matériellement pas le temps de lire en entier avant la décision.",
  "gain": "L'IA vous livre une synthèse orientée décision — points clés, risques, questions ouvertes — en quelques minutes ; la lecture intégrale redevient un choix, pas une obligation.",
  "prompt": "Voici un dossier de [nombre] pages sur [sujet], que je dois arbitrer le [date]. Analyse-le et restitue en deux pages maximum : 1) les décisions à prendre et les options en présence, 2) les risques et points de vigilance, 3) les points non résolus ou contradictoires du dossier, 4) les trois questions à poser avant de trancher. Cite la page du document pour chaque point.",
  "conseil": "Toujours exiger les références de pages : c'est ce qui permet de vérifier en deux minutes les points sensibles avant de s'engager.",
  "skill": null
 },
 {
  "id": "preparation-complete-comex",
  "titre": "Préparer un Comex complet : ordre du jour, support, relevé de décisions",
  "service": "direction",
  "besoin": "reunions",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Chaque réunion d'instance vous mobilise des heures de préparation dispersées : invitation, ordre du jour, note de synthèse, support, puis compte rendu et suivi des décisions — souvent portés par la même personne au secrétariat général.",
  "gain": "L'IA produit toute la chaîne documentaire de la réunion à partir d'une seule matière de départ — il ne vous reste que la relecture et l'animation.",
  "prompt": "Je prépare le [instance] de [structure] du [date]. Voici les sujets à traiter et leur contexte : [coller les points]. Produis dans l'ordre : 1) l'invitation aux membres, 2) l'ordre du jour minuté, 3) une note de synthèse d'une page par sujet nécessitant une décision, 4) la trame du relevé de décisions à compléter en séance. Reprends la terminologie de nos documents habituels : [coller un ancien ordre du jour].",
  "conseil": "Travailler dans un projet dédié (ChatGPT Projects ou équivalent) qui garde en mémoire la composition de l'instance, les statuts et les décisions passées.",
  "skill": null
 },
 {
  "id": "discours-assemblee-generale",
  "titre": "Écrire ou améliorer un discours d'assemblée générale",
  "service": "direction",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "teste",
  "douleur": "Vous rédigez le discours d'AG tard, souvent la veille, en jonglant entre bilan sportif, remerciements et messages politiques — et il finit par ressembler à celui de l'année précédente.",
  "gain": "L'IA vous propose un discours structuré avec plusieurs tons à comparer — vous choisissez, personnalisez et lisez à voix haute, en une heure au lieu d'une soirée.",
  "prompt": "Voici le discours d'AG de l'an dernier et mes notes pour cette année : [coller les deux]. Rédige un discours de [durée] minutes pour l'assemblée générale de [structure] : bilan de la saison, remerciements aux [bénévoles, salariés, partenaires], perspectives sur [projets à venir]. Ton [chaleureux ou solennel], phrases courtes faites pour être dites à voix haute, et termine sur un message mobilisateur.",
  "conseil": "Fournir deux ou trois anciens discours du président : l'IA capte sa voix et évite l'effet discours générique — puis lire le résultat à voix haute avant de valider.",
  "skill": null
 },
 {
  "id": "capturer-voix-dirigeant",
  "titre": "Capturer la voix du dirigeant pour ses mots, discours et réponses",
  "service": "direction",
  "besoin": "redaction",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Mot du président, éditos, réponses aux courriers : tout ce qui est signé du dirigeant doit sonner comme lui, et chaque texte que vous préparez repart en allers-retours de reformulation.",
  "gain": "L'IA extrait une fiche de style personnelle du dirigeant et produit des premiers jets « à sa voix » — il valide au lieu de réécrire.",
  "prompt": "Voici cinq textes écrits ou validés par notre [président / directeur général] : [coller]. Analyse son style — vocabulaire, longueur de phrases, formules récurrentes, ton — et produis une fiche de style en cinq règles. Rédige ensuite [le mot du président / la réponse à ce courrier] en appliquant strictement cette fiche.",
  "conseil": "Choisir des textes réellement écrits ou retouchés par le dirigeant, pas ceux déjà rédigés par l'équipe : la fiche doit capturer sa voix, pas celle de ses plumes.",
  "skill": null
 },
 {
  "id": "veille-sectorielle-dirigeant",
  "titre": "Mettre en place la veille sectorielle quotidienne du dirigeant",
  "service": "direction",
  "besoin": "veille",
  "faisabilite": "complexe",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club"
  ],
  "preuve": "eprouve",
  "douleur": "Vous savez que vous devriez suivre l'actualité de votre sport, de vos concurrents et de vos financeurs, mais la veille passe toujours après l'urgence : elle se fait par à-coups, quand elle se fait.",
  "gain": "Un brief de cinq minutes arrive tout seul chaque matin — vous lisez et décidez, au lieu de perdre une heure en navigation dispersée.",
  "prompt": "Dispositif : définir une fois les sources à surveiller (médias sport business, sites institutionnels, concurrents) et les questions qui intéressent le dirigeant, puis programmer une exécution quotidienne — tâche planifiée dans ChatGPT pour démarrer, ou workflow n8n qui collecte les sources et envoie chaque matin un brief par mail. Chaque item du brief tient en trois lignes : le fait, pourquoi c'est important pour la structure, l'action éventuelle.",
  "process": [
   "Définir les sources à surveiller (médias sport business, sites institutionnels, concurrents)",
   "Formaliser les questions qui intéressent le dirigeant",
   "Programmer une exécution quotidienne (tâche planifiée ChatGPT ou workflow n8n)",
   "Collecter les sources et rédiger le brief : le fait, pourquoi c'est important, l'action éventuelle",
   "Envoyer le brief chaque matin par mail"
  ],
  "conseil": "Commencer par la version simple (tâche planifiée dans ChatGPT) avant d'investir dans une automatisation complète.",
  "skill": null
 },
 {
  "id": "cr-reunion-instance",
  "titre": "Rédiger le compte rendu d'un comité directeur ou d'une AG",
  "service": "direction",
  "besoin": "reunions",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Après chaque comité directeur ou bureau, vous passez votre soirée à transformer des notes éparses en compte rendu — ou vous laissez un transcript brut de trente pages que personne ne relira. C'est le besoin numéro un remonté dans toutes les structures, du club omnisports à la fédération nationale.",
  "gain": "L'IA produit un CR structuré — décisions, actions, échéances — en dix minutes ; vous relisez au lieu de rédiger pendant deux heures.",
  "prompt": "Voici la transcription de notre réunion de [instance : comité directeur, bureau, AG] du [date]. Rédige un compte rendu structuré : décisions prises, actions par personne avec échéance, points en suspens à remettre à l'ordre du jour. Ton neutre et factuel, une page maximum.",
  "conseil": "Enregistrer et transcrire la réunion plutôt que de partir de notes éparses, et fournir la liste des participants : c'est ce qui permet d'attribuer correctement décisions et actions à chacun.",
  "skill": null
 },
 {
  "id": "tri-boite-mail",
  "titre": "Trier sa boîte mail et préparer les réponses en attente",
  "service": "direction",
  "besoin": "mails",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Votre boîte mail déborde — jusqu'à 200 messages par jour pour un directeur général — et vous refaites le tri à la main chaque matin, à l'accueil d'un comité départemental comme en direction d'un grand club.",
  "gain": "L'IA classe vos mails par urgence et prépare les projets de réponse — vous relisez et envoyez, en quelques minutes chaque matin.",
  "prompt": "Voici les mails reçus depuis hier [copier-coller les mails, ou connecter la boîte via Copilot]. Classe-les en trois catégories : à traiter aujourd'hui, à déléguer, à archiver. Pour chaque mail « à traiter », propose un projet de réponse court dans un ton [cordial / institutionnel]. Signale les demandes qui reviennent plusieurs fois.",
  "conseil": "Avec Copilot connecté à la messagerie, le tri se fait sans copier-coller ; garder le prompt de tri sous la main pour le rejouer chaque matin.",
  "skill": null
 },
 {
  "id": "mail-synthese-post-instance",
  "titre": "Rédiger l'email de synthèse aux équipes après un conseil d'administration",
  "service": "direction",
  "besoin": "mails",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Après chaque conseil d'administration, vos directeurs attendent de savoir ce qui les concerne — mais le compte rendu officiel arrive des jours plus tard et personne ne le lit en entier.",
  "gain": "L'IA rédige un email de synthèse — trois décisions, trois actions, une échéance — que vous envoyez le soir même de l'instance.",
  "prompt": "Voici mes notes ou la transcription du conseil d'administration : [coller]. Rédige un email de synthèse à destination des directeurs : les 3 décisions principales, les 3 actions qui en découlent avec leur responsable, et les échéances. Dix lignes maximum, ton factuel, sans reprendre les débats.",
  "conseil": "Envoyer la synthèse le soir même sans attendre le compte rendu officiel : les deux documents ont des rôles différents.",
  "skill": null
 },
 {
  "id": "courrier-sensible-relecture",
  "titre": "Rédiger un courrier sensible avec double relecture et indice de confiance",
  "service": "direction",
  "besoin": "mails",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "teste",
  "douleur": "Le courrier délicat — refus, recadrage, réponse à une mise en cause — vous le réécrivez dix fois : trop sec, trop mou, un mot de travers peut envenimer la situation.",
  "gain": "L'IA rédige le courrier au ton juste, le relit comme le ferait le destinataire et vous donne son indice de confiance — vous n'arbitrez plus que les points qu'elle signale avant d'envoyer.",
  "prompt": "Rédige un courrier à [destinataire] dans ce contexte délicat : [décrire la situation et l'objectif]. Ton ferme mais respectueux, factuel, sans formule blessante. Ensuite : relis ton courrier comme le ferait le destinataire, identifie ce qui pourrait être mal pris, corrige, et donne ton indice de confiance sur la version finale en expliquant les points restants à mon arbitrage.",
  "conseil": "Ne jamais envoyer sans relecture humaine : l'indice de confiance guide l'attention, il ne remplace pas votre jugement.",
  "skill": null
 },
 {
  "id": "document-sur-modele",
  "titre": "Générer un document conforme au modèle maison (livret, convocation)",
  "service": "direction",
  "besoin": "templates",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "teste",
  "douleur": "Livret de séminaire, convocations, dossier de présentation : chaque nouveau document repart d'une page blanche, alors que votre maquette et votre présentation sont toujours les mêmes.",
  "gain": "L'IA reproduit automatiquement votre modèle et travaille le fond avec vous — vous ne complétez plus que ce qui manque.",
  "prompt": "Étape 1 : analyse ce document modèle [joindre un exemplaire déjà validé] et génère un fichier design.md qui décrit sa structure, son vocabulaire et sa mise en forme, pour pouvoir le reproduire. Étape 2 : propose une trame de contenu pour [le nouveau document]. Étape 3 : pose-moi des questions pour affiner la trame. Étape 4 : quand j'aurai validé, génère le document final en respectant exactement le design.md. Fais les étapes une par une. Contraintes : le document doit être autoporteur ; là où le contenu manque encore, mets des XXX que je remplirai plus tard.",
  "conseil": "Travailler dans un projet ChatGPT ou Copilot avec le modèle en source, et conserver le fichier design.md : il resservira pour tous les documents du même type.",
  "skill": null
 },
 {
  "id": "dictee-vocale",
  "titre": "Dicter ses mails et ses notes au lieu de les taper",
  "service": "direction",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Vous tapez lentement au clavier et vous repoussez les petites tâches d'écriture : le mail qu'on remet à plus tard, la note qu'on ne prend jamais.",
  "gain": "Vous parlez deux minutes, l'IA restructure en texte propre — vous relisez et envoyez. En formation, c'est l'usage à l'effet le plus immédiat, tous profils confondus.",
  "prompt": "Je vais te dicter [un mail / une note / une demande] en vrac. Restructure mes propos en un texte clair et bien organisé : supprime les répétitions et les hésitations, garde mon vocabulaire, et signale-moi ce qui semble manquer avant de finaliser. Voici la dictée : [dicter avec le micro].",
  "conseil": "Le micro est disponible dans les applications mobiles ChatGPT et Copilot : dicter en vrac sans se soucier de la forme, c'est le travail de l'IA.",
  "skill": null
 },
 {
  "id": "projet-chatgpt-mission-recurrente",
  "titre": "Créer un projet ChatGPT qui garde le contexte d'une mission récurrente",
  "service": "direction",
  "besoin": "assistants",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "teste",
  "douleur": "À chaque nouvelle conversation, vous réexpliquez tout : la structure, la mission, la ligne éditoriale, les documents de référence. Pour une mission qui revient chaque semaine — animer les réseaux sociaux, suivre un dossier, préparer des déplacements — cette remise en contexte se répète sans fin.",
  "gain": "L'IA démarre chaque conversation avec tout le contexte en tête — vous attaquez directement la tâche du jour, sans phase de briefing.",
  "prompt": "Dans un projet ChatGPT (ou l'équivalent Copilot), déposer en sources une fiche contexte sur la structure, une fiche sur la mission et les documents de référence [planning, charte, exemples validés]. Puis, dans chaque conversation du projet : « En t'appuyant sur les sources du projet, [tâche du jour : rédige les publications de la semaine / prépare le point d'étape]. À la fin de la session, génère une fiche résumée des décisions prises, que je redéposerai dans les sources. »",
  "conseil": "Le projet ne se met pas à jour tout seul : en fin de session importante, demander une fiche résumée des décisions et la redéposer dans les sources.",
  "skill": null
 },
 {
  "id": "reflexion-critique-decision",
  "titre": "Challenger une décision stratégique avec l'IA avant de trancher",
  "service": "direction",
  "besoin": "analyse",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "club",
   "federation",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Vous prenez vos décisions structurantes sans vrai contradicteur : l'entourage valide, personne n'ose pousser les objections, et les angles morts ne se révèlent qu'une fois la décision engagée.",
  "gain": "L'IA joue le contradicteur exigeant et met objections, hypothèses implicites et scénarios de risque sur la table en une session — vous tranchez en connaissance de cause.",
  "prompt": "Voici la décision que je m'apprête à prendre : [décrire la décision, le contexte, les chiffres clés]. Joue le rôle d'un contradicteur exigeant : liste les 5 objections les plus solides contre cette décision, les hypothèses implicites sur lesquelles je m'appuie, et le scénario dans lequel elle échoue. Termine par les 3 questions auxquelles je dois répondre avant de trancher.",
  "conseil": "Demander explicitement à l'IA de ne pas conclure à votre place : l'objectif est de durcir la décision, pas de la déléguer.",
  "skill": null
 },
 {
  "id": "note-executive-comite",
  "titre": "Écrire une note exécutive pour le comité directeur",
  "service": "direction",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "ligue",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Chaque comité directeur exige des notes courtes et structurées sur des dossiers complexes : vous passez plusieurs heures, souvent la veille au soir, à condenser un sujet en deux pages qui permettent de décider.",
  "gain": "L'IA produit une note exécutive structurée — contexte, options, recommandation — en une heure, relecture comprise ; vous n'avez plus qu'à arbitrer le fond.",
  "prompt": "À partir de ce dossier : [coller les éléments : contexte, chiffres, contraintes], rédige une note exécutive de 2 pages pour le comité directeur sur [sujet]. Structure : 1) contexte et enjeu en 5 lignes, 2) les options avec avantages, risques et coûts, 3) recommandation argumentée, 4) décision attendue du comité. Style factuel, phrases courtes, chiffres mis en avant.",
  "conseil": "Donner à l'IA une note exécutive déjà validée comme modèle de style : le format attendu par un comité est très codifié.",
  "skill": null
 },
 {
  "id": "reponses-mails-gpt-dedie",
  "titre": "Répondre aux mails récurrents avec un GPT dédié",
  "service": "direction",
  "besoin": "mails",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "comite",
   "federation",
   "ligue"
  ],
  "preuve": "eprouve",
  "douleur": "Les mêmes questions reviennent chaque semaine par mail — licences, règlements, procédures internes — et vous réécrivez chaque réponse à la main, avec une précision qui dépend de qui répond et du temps disponible.",
  "gain": "Le GPT dédié rédige des réponses homogènes et sourcées en une minute, y compris sur les demandes qui exigeaient de replonger dans les textes — vous vérifiez la source citée et envoyez.",
  "prompt": "Créer un GPT (ou projet) dédié avec en sources les documents de référence [règlements, procédures, FAQ interne, exemples de réponses validées]. Instructions du GPT : « Tu réponds aux mails reçus par [service]. Appuie chaque réponse sur les sources jointes, cite le document et l'article utilisés, signale explicitement quand la question sort des sources. Ton courtois et précis, format mail prêt à envoyer. »",
  "conseil": "Exiger la citation du document source dans chaque réponse : c'est ce qui permet de vérifier en 10 secondes avant d'envoyer.",
  "skill": null
 },
 {
  "id": "scraping-donnees-publiques",
  "titre": "Scraper des données publiques utiles : calendriers, aides",
  "service": "direction",
  "besoin": "automatisation",
  "faisabilite": "complexe",
  "portee": "transversal",
  "structures": [
   "federation",
   "comite"
  ],
  "preuve": "teste",
  "douleur": "Des données publiques précieuses — calendriers d'autres compétitions, dispositifs d'aides, appels à projets — se consultent site par site : la collecte manuelle est si lourde qu'elle ne se fait pas, et des opportunités vous passent sous le nez.",
  "gain": "Le dispositif collecte automatiquement les sources utiles et vous livre chaque semaine la synthèse des nouveautés classée par priorité — vous ne traitez plus que les opportunités.",
  "prompt": "Dispositif : un workflow planifié (n8n ou équivalent) qui parcourt les sources définies [lister : sites institutionnels des aides, calendriers de compétitions, plateformes d'appels à projets], extrait les contenus nouveaux depuis le dernier passage, et les passe à l'IA avec la consigne : « Filtre les éléments pertinents pour [notre structure : critères], résume chacun (dispositif, montant, échéance, lien), classe par priorité. » La synthèse part par mail chaque [semaine] à [destinataires].",
  "process": [
   "Lister les sources publiques à surveiller (sites d'aides, calendriers de compétitions, plateformes d'appels à projets)",
   "Mettre en place un workflow planifié (n8n ou équivalent) qui parcourt ces sources",
   "Extraire les contenus nouveaux depuis le dernier passage",
   "Faire filtrer et résumer chaque élément par l'IA (dispositif, montant, échéance, lien) selon les critères de la structure",
   "Envoyer la synthèse classée par priorité aux destinataires à la fréquence choisie"
  ],
  "conseil": "Respecter les conditions d'utilisation des sites sources et privilégier les flux et API publics quand ils existent : le scraping sauvage se paie en blocages.",
  "skill": null
 },
 {
  "id": "donnees-territoires-tableaux",
  "titre": "Compiler les données territoriales en tableaux de bord",
  "service": "direction",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Les données de vos territoires — licenciés, clubs, équipements, encadrants — arrivent dans des formats hétérogènes et se compilent à la main pour chaque revue territoriale : la photographie du réseau est toujours en retard d'une saison.",
  "gain": "L'IA harmonise les remontées, signale les incohérences et produit des tableaux de bord comparables à chaque campagne — vous pilotez le réseau sur des données à jour.",
  "prompt": "Voici les remontées des territoires [coller ou joindre : licenciés, clubs, encadrants, équipements par comité ou région, formats variables]. Consolide : harmonise les formats et les intitulés, signale les données manquantes ou incohérentes par territoire (évolution improbable, doublons), puis produis les tableaux de bord : effectifs et évolutions par territoire, densité de clubs et d'encadrants, comparaison à la moyenne nationale, classement des territoires par dynamique. Termine par les 5 signaux notables de la période.",
  "conseil": "Renvoyer la liste des incohérences aux territoires avant de publier les tableaux : les comparaisons entre territoires ne sont acceptées que si les données sont incontestables.",
  "skill": null
 },
 {
  "id": "courriers-types-federaux",
  "titre": "Rédiger les courriers types de la structure fédérale",
  "service": "direction",
  "besoin": "templates",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "comite",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Félicitations, condoléances, remerciements aux bénévoles : vous réécrivez sans cesse les mêmes courriers officiels. Et selon qui rédige, le ton change d'un courrier à l'autre.",
  "gain": "L'IA capture votre fiche de style une fois pour toutes et personnalise chaque courrier en deux minutes — vous n'avez plus qu'à relire et signer.",
  "prompt": "Voici 3 courriers officiels représentatifs de notre structure : [coller les exemples]. Établis la fiche de style (formules d'appel, ton, signature) puis rédige un courrier de [type : félicitations / remerciement / réponse à une sollicitation] adressé à [destinataire et contexte], conforme à ce style. Prévois les variables entre crochets pour réutilisation.",
  "conseil": "Faire valider la fiche de style une fois par le secrétariat général, puis la réutiliser dans chaque demande plutôt que repartir de zéro.",
  "skill": null
 },
 {
  "id": "matrices-licence-club",
  "titre": "Remplir les matrices financières du dossier de licence club",
  "service": "direction",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "club"
  ],
  "preuve": "teste",
  "douleur": "Chaque année, le dossier de licence club vous impose de remplir des matrices financières denses à partir de données éparpillées dans plusieurs fichiers. Des journées de ressaisie sous la pression de la date de dépôt.",
  "gain": "L'IA pré-remplit les matrices depuis vos documents existants en citant ses sources — vous vérifiez et arbitrez au lieu de ressaisir.",
  "prompt": "Voici la matrice à remplir pour le dossier de licence [coller la structure de la matrice] et nos documents sources : [budget, comptes, effectifs, contrats]. Remplis chaque rubrique de la matrice à partir des sources, en citant pour chaque valeur le document et l'onglet d'origine. Liste à part les rubriques pour lesquelles les sources sont incomplètes ou contradictoires.",
  "conseil": "Faire tourner l'exercice rubrique par rubrique plutôt que la matrice entière d'un coup : le contrôle des valeurs reportées reste humain.",
  "skill": null
 },
 {
  "id": "comparaison-donnees-plateformes",
  "titre": "Comparer les données entre plateformes pour les fiabiliser",
  "service": "direction",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "ligue",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Les mêmes données — calendriers, résultats, licenciés — vivent dans plusieurs plateformes qui divergent avec le temps. Vous découvrez les écarts quand un partenaire ou un média publie une donnée fausse issue de la mauvaise source.",
  "gain": "L'IA compare vos exports enregistrement par enregistrement et repère les patterns d'écart — vous rétablissez la source de vérité avant que l'erreur ne sorte.",
  "prompt": "Voici les exports de la même donnée depuis nos [2-3] plateformes : [coller : export A, export B, en précisant la source de vérité théorique]. Compare enregistrement par enregistrement : divergences de valeurs, enregistrements présents dans une source et absents de l'autre, écarts de format qui masquent une égalité réelle. Produis : le tableau des divergences avec la valeur de chaque source, la correction recommandée selon la source de vérité, et les patterns d'écart récurrents qui trahissent un problème de synchronisation.",
  "conseil": "Analyser les patterns d'écarts plutôt que corriger au cas par cas : un écart récurrent signale un flux de synchronisation cassé à réparer une fois.",
  "skill": null
 },
 {
  "id": "generation-google-forms",
  "titre": "Générer un formulaire Google Forms par l'IA",
  "service": "direction",
  "besoin": "automatisation",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "comite",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Chaque enquête ou inscription passe par un formulaire monté à la main, question par question. Un travail de clic répétitif — et des formulaires mal structurés qui produisent des données inexploitables à l'arrivée.",
  "gain": "L'IA génère le formulaire complet depuis la description de votre besoin, pensé pour l'exploitation des données — vous n'avez plus qu'à vérifier et diffuser.",
  "prompt": "Génère un formulaire pour [besoin : inscription à un événement, enquête clubs, recensement de bénévoles] : décris d'abord la structure optimale (sections, questions, types de réponses) en pensant à l'exploitation des données : choix fermés plutôt que texte libre partout où c'est possible, formats normalisés (dates, téléphones), champs obligatoires justifiés, logique conditionnelle si besoin. Puis génère le formulaire via Gemini dans Google Forms [ou fournis la structure à recopier]. Ajoute le message de confirmation et les règles de diffusion.",
  "conseil": "Penser l'exploitation avant la collecte : chaque question en texte libre est une heure de nettoyage de données plus tard.",
  "skill": null
 },
 {
  "id": "analyse-territoire-textuel",
  "titre": "Analyser les besoins d'un territoire depuis les données textuelles",
  "service": "direction",
  "besoin": "analyse",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "comite"
  ],
  "preuve": "teste",
  "douleur": "Les remontées qualitatives de vos territoires — comptes rendus de visites, courriers de clubs, rapports d'assemblées — contiennent les vrais besoins du réseau. Mais personne ne peut lire et croiser des centaines de pages : ces signaux se perdent.",
  "gain": "L'IA extrait et synthétise les besoins, forces et signaux faibles de chaque territoire — votre stratégie territoriale s'appuie enfin sur le terrain.",
  "prompt": "Voici les documents qualitatifs du territoire [joindre : comptes rendus de visites, courriers de clubs, rapports d'AG]. Analyse : 1) les besoins exprimés, classés par thème (équipements, encadrement, financement, formation) avec leur fréquence et des citations sources, 2) les forces et initiatives locales qui méritent d'être valorisées ou essaimées, 3) les signaux faibles (tensions, clubs en difficulté, opportunités), 4) la synthèse en une page pour l'élu référent du territoire. Distingue ce qui est dit par plusieurs sources de ce qui n'apparaît qu'une fois.",
  "conseil": "Pondérer par la récurrence entre sources indépendantes : un besoin cité par cinq clubs différents vaut une politique, un besoin cité une fois vaut une visite.",
  "skill": null
 },
 {
  "id": "agents-review-code",
  "titre": "Mettre des agents IA de review sur le code interne",
  "service": "direction",
  "besoin": "automatisation",
  "faisabilite": "complexe",
  "portee": "transversal",
  "structures": [
   "club",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Votre petite équipe de développement n'a pas le temps de relire systématiquement le code des outils maison : des failles de sécurité et des régressions passent en production faute de revue par les pairs.",
  "gain": "Un agent relit automatiquement chaque modification de code contre vos normes de sécurité et de qualité — la fusion reste une décision humaine.",
  "prompt": "Un agent de review IA (Claude Code, GitHub Copilot ou équivalent) est branché sur le dépôt de code. À chaque pull request, l'agent contrôle : failles de sécurité classiques (injections, secrets en clair, données personnelles loguées), respect des normes maison [formaliser le document de normes : conventions, gestion des erreurs, tests attendus], régressions probables sur les modules touchés. L'agent commente la PR avec ses constats classés par gravité ; la fusion reste une décision humaine.",
  "process": [
   "Formaliser le document de normes maison : conventions, gestion des erreurs, tests attendus",
   "Brancher un agent de review IA sur le dépôt de code",
   "Contrôler chaque pull request : failles de sécurité, normes maison, régressions probables",
   "Commenter la pull request avec les constats classés par gravité",
   "Décider la fusion humainement"
  ],
  "conseil": "Écrire le document de normes avant de brancher l'agent : sans référentiel explicite, la review IA applique des standards génériques qui ne sont pas les vôtres.",
  "skill": null
 },
 {
  "id": "outil-documentation-interne",
  "titre": "Construire un outil de documentation interne avec l'IA",
  "service": "direction",
  "besoin": "automatisation",
  "faisabilite": "complexe",
  "portee": "transversal",
  "structures": [
   "club",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Votre connaissance technique interne — architecture des outils, procédures, configurations — vit dans les têtes et quelques fichiers épars : chaque départ ou absence met l'équipe en difficulté sur des systèmes que personne d'autre ne connaît.",
  "gain": "L'agent génère et maintient une documentation qui suit les évolutions du code et des systèmes — vous relisez avant fusion au lieu de rédiger.",
  "prompt": "Un agent IA de code (Claude Code ou équivalent) travaille sur les dépôts internes avec la mission : « Documente ce système pour un nouvel arrivant technique : architecture et flux de données, dépendances et configurations, procédures d'exploitation courantes (déploiement, sauvegarde, incidents), points de fragilité connus. » La documentation vit dans le dépôt (markdown versionné) et se met à jour à chaque évolution majeure via le même agent, avec relecture humaine avant fusion.",
  "process": [
   "Lancer un agent IA de code sur les dépôts internes",
   "Documenter chaque système pour un nouvel arrivant : architecture, dépendances, procédures d'exploitation, fragilités",
   "Versionner la documentation en markdown dans le dépôt, avec le code",
   "Mettre à jour la documentation à chaque évolution majeure via le même agent",
   "Relire humainement avant fusion"
  ],
  "conseil": "Versionner la documentation avec le code plutôt que dans un wiki séparé : une documentation qui ne suit pas les commits ment au bout de trois mois.",
  "skill": null
 },
 {
  "id": "dossiers-subventions",
  "titre": "Monter les dossiers de subventions depuis la présentation type",
  "service": "direction",
  "besoin": "templates",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "club",
   "comite"
  ],
  "preuve": "teste",
  "douleur": "Chaque demande de subvention ou réponse à un marché public vous redemande les mêmes éléments — présentation de l'association, projet, budget, bilans — dans un format différent : des heures à remouliner la même matière pour chaque financeur.",
  "gain": "L'IA remplit chaque dossier depuis votre dossier de présentation maître, adapté au vocabulaire et aux critères du financeur — vous ne complétez que ce qui manque.",
  "prompt": "Voici notre dossier de présentation maître [coller : présentation de la structure, projets, chiffres clés, bilans] et le formulaire ou cahier des charges du financeur [joindre]. Remplis la demande : reprends les éléments du dossier maître en les adaptant au vocabulaire et aux priorités de ce financeur [politique de la ville, sport santé, emploi...], respecte les limites de caractères par rubrique, et mets en avant les éléments de notre dossier qui répondent à ses critères d'attribution. Liste ce qui manque au dossier maître pour cette demande.",
  "conseil": "Entretenir le dossier maître après chaque demande (nouveaux chiffres, nouveaux projets) : c'est lui l'actif, les dossiers déposés n'en sont que des projections.",
  "skill": null
 },
 {
  "id": "profilage-rdv-commercial",
  "titre": "Préparer un RDV commercial en profilant l'entreprise et l'interlocuteur",
  "service": "commercial",
  "besoin": "reunions",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Avant chaque rendez-vous partenaire, vous épluchez le site, LinkedIn et la presse locale pour cerner l'entreprise et son dirigeant. Un travail refait à la main pour chaque prospect, souvent bâclé faute de temps.",
  "gain": "L'IA vous prépare une fiche de synthèse complète sur l'entreprise et votre interlocuteur en trois minutes — vous n'avez plus qu'à la relire avant d'entrer en rendez-vous.",
  "prompt": "Je prépare un rendez-vous commercial avec [nom de l'entreprise], représentée par [prénom, nom, fonction]. Fais une recherche web et rédige une fiche de synthèse : activité et actualité récente de l'entreprise, enjeux et implantations locales, historique de sponsoring ou de partenariats sportifs, parcours de mon interlocuteur, puis trois angles d'accroche personnalisés pour une offre de [sponsoring / hospitalités]. Termine par trois questions à lui poser en rendez-vous.",
  "conseil": "Activer la recherche web et vérifier les informations clés avant le rendez-vous : l'IA peut confondre des homonymes ou dater ses sources.",
  "skill": null
 },
 {
  "id": "dossier-partenaire-personnalise",
  "titre": "Construire un dossier de sponsoring personnalisé pour un partenaire cible",
  "service": "commercial",
  "besoin": "templates",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Chaque dossier partenaire ou de mécénat repart de la dernière présentation en date, recopiée et adaptée à la main. La mise en forme vous mange le temps qui devrait aller à la personnalisation.",
  "gain": "L'IA produit une première version du dossier adaptée au prospect — vous ne faites plus que retravailler et personnaliser, au lieu de tout recréer.",
  "prompt": "Voici la trame de notre dossier partenaire et les informations recueillies sur [entreprise cible] : [coller la trame et les informations]. Rédige une version personnalisée du dossier : accroche liée à l'actualité de l'entreprise, bénéfices reformulés selon ses enjeux ([visibilité locale / RSE / relations publiques]), offre en trois niveaux avec contreparties, et appel à l'action final. Conserve notre ton et nos chiffres exacts, sans en inventer.",
  "conseil": "Créer un projet ou un GPT dédié alimenté avec les dossiers gagnants et la charte graphique : chaque nouveau dossier part alors d'une base fiable.",
  "skill": null
 },
 {
  "id": "argumentaire-vente-sponsoring",
  "titre": "Rédiger l'argumentaire de vente d'une offre de sponsoring",
  "service": "commercial",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club"
  ],
  "preuve": "eprouve",
  "douleur": "Face à un partenaire qui négocie, chacun défend l'offre à sa manière : vos arguments varient d'une personne à l'autre et les objections classiques vous prennent de court.",
  "gain": "L'IA structure un argumentaire complet avec les réponses aux objections — vous n'avez plus qu'à le valider et le partager à toute l'équipe avant la négociation.",
  "prompt": "Je vends une offre de sponsoring [description de l'offre : visibilité, hospitalités, droits] à [type d'entreprise]. Rédige un argumentaire de vente : trois bénéfices principaux appuyés sur nos chiffres [audience, affluence, retombées], les cinq objections les plus probables (prix, retour sur investissement, visibilité face aux autres partenaires…) avec une réponse pour chacune, et une formulation de conclusion pour engager la signature.",
  "conseil": "Nourrir l'IA avec les chiffres réels d'audience et d'affluence : un argumentaire sans données vérifiables ne convainc pas un directeur financier.",
  "skill": null
 },
 {
  "id": "cr-rdv-dicte-crm",
  "titre": "Dicter le compte rendu d'un RDV client et l'importer dans le CRM",
  "service": "commercial",
  "besoin": "reunions",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club"
  ],
  "preuve": "eprouve",
  "douleur": "Vos comptes rendus de rendez-vous s'accumulent en fin de semaine : le CRM reste vide ou rempli de mémoire, et les signaux chauds — budget évoqué, objections, prochaine étape — se perdent.",
  "gain": "Vous dictez cinq minutes en sortant du rendez-vous, l'IA structure tout au format de votre CRM — il ne reste qu'à coller et valider.",
  "prompt": "Voici le compte rendu dicté de mon rendez-vous avec [entreprise] : [transcription vocale]. Structure-le au format de mon CRM : contexte, besoins exprimés, objections, budget évoqué, prochaine étape avec échéance, et les champs [étape du pipeline / montant estimé / date de relance]. Liste ensuite les actions à mener, par personne.",
  "conseil": "Utiliser le mode vocal de l'application mobile juste après le rendez-vous, tant que les détails sont frais, puis coller le résultat structuré dans la fiche CRM.",
  "skill": null
 },
 {
  "id": "gestion-places-partenaires",
  "titre": "Automatiser la gestion des demandes de places partenaires",
  "service": "commercial",
  "besoin": "automatisation",
  "faisabilite": "complexe",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club"
  ],
  "preuve": "demande",
  "douleur": "Avant chaque match, les demandes de places partenaires vous arrivent par mail, téléphone et SMS. Dans une ligue professionnelle, leur traitement mobilise environ vingt heures par semaine.",
  "gain": "L'automatisation traite la majorité des demandes selon les quotas contractuels — vous ne gérez plus que les arbitrages et les cas sensibles.",
  "prompt": "Dispositif : centraliser les demandes dans un formulaire unique, puis connecter une automatisation (n8n) qui vérifie le quota contractuel de chaque partenaire, prépare la réponse et met à jour le tableau de suivi. Un humain ne valide que les demandes hors quota ou les cas sensibles. Le dispositif se construit en accompagnement, branché sur l'outil de billetterie existant.",
  "process": [
   "Cartographier les règles réelles d'attribution (quotas, priorités, exceptions)",
   "Centraliser les demandes dans un formulaire unique",
   "Vérifier automatiquement le quota contractuel de chaque partenaire",
   "Préparer la réponse et mettre à jour le tableau de suivi",
   "Faire valider par un humain les demandes hors quota ou sensibles"
  ],
  "conseil": "Commencer par cartographier les règles réelles d'attribution (quotas, priorités, exceptions) : c'est le contrat qui pilote l'automatisation, pas l'inverse.",
  "skill": null
 },
 {
  "id": "benchmark-activations-sponsors",
  "titre": "Benchmarker les activations partenaires d'autres organisations sportives",
  "service": "commercial",
  "besoin": "veille",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Avant de construire une offre, vous devriez savoir ce que proposent les autres clubs, fédérations et agences — formats, jauges, tarification. Cette recherche chronophage passe souvent à la trappe faute de temps.",
  "gain": "L'IA vous dresse un panorama sourcé des activations comparables en trente minutes — vous n'avez plus qu'à vérifier les chiffres et piocher les idées transposables.",
  "prompt": "Fais une recherche sur les activations de sponsoring et les offres d'hospitalité proposées par [type d'organisations : clubs de [discipline], fédérations, événements comparables] en France et en Europe. Pour chaque exemple : format, partenaire concerné, jauge ou audience, mécanique d'activation, tarification lorsqu'elle est publique, avec la source. Présente le résultat en tableau et termine par trois idées transposables à [ma structure].",
  "conseil": "Exiger la source pour chaque exemple cité et vérifier les chiffres : l'IA peut mélanger des éditions ou des années.",
  "skill": null
 },
 {
  "id": "mail-prospection-sponsor",
  "titre": "Écrire le mail de prospection d'un sponsor potentiel",
  "service": "commercial",
  "besoin": "mails",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Le premier mail à un sponsor potentiel décide de la suite : trop générique, il finit à la corbeille — mais le personnaliser sérieusement pour chaque prospect vous prend un temps que la prospection en volume ne permet pas.",
  "gain": "L'IA rédige un mail d'approche personnalisé par prospect en quelques minutes, appuyé sur son actualité réelle — vous vérifiez les faits cités et envoyez.",
  "prompt": "Je veux approcher [entreprise] pour une offre de [sponsoring / hospitalités]. Fais une recherche sur son actualité et ses enjeux locaux, puis rédige un mail de prospection court : une accroche liée à son actualité, le lien concret avec notre projet sportif, une proposition de rendez-vous. Pas de superlatifs, pas de jargon marketing.",
  "conseil": "Vérifier l'actualité citée avant l'envoi : une accroche fondée sur une information fausse ou datée ruine l'approche.",
  "skill": null
 },
 {
  "id": "script-prise-parole-partenaire",
  "titre": "Rédiger le script de prise de parole d'un partenaire en conférence de presse",
  "service": "commercial",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club"
  ],
  "preuve": "eprouve",
  "douleur": "À l'annonce d'un partenariat, le représentant du partenaire attend que vous lui prépariez sa prise de parole — un exercice délicat qui doit servir les deux marques sans lui faire dire ce qu'il ne dirait jamais.",
  "gain": "L'IA rédige un script de deux minutes calibré pour le partenaire — vous le relisez avec lui avant la conférence.",
  "prompt": "Nous annonçons un partenariat entre notre [organisation sportive] et [entreprise]. Rédige le script de prise de parole du représentant du partenaire en conférence de presse : deux minutes, pourquoi ce partenariat a du sens pour son entreprise, ce que le projet sportif lui apporte, une phrase de conclusion mémorable. Ton sincère, pas de langue de bois.",
  "conseil": "Faire relire le script au partenaire avant la conférence : il doit pouvoir s'approprier chaque phrase.",
  "skill": null
 },
 {
  "id": "mails-bilingues-internationaux",
  "titre": "Rédiger des mails bilingues pour des interlocuteurs internationaux",
  "service": "commercial",
  "besoin": "mails",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club"
  ],
  "preuve": "demande",
  "douleur": "Écrire à un partenaire ou un fournisseur étranger vous prend trois fois plus de temps qu'en français : vous hésitez sur les formulations, le registre professionnel et les tournures d'usage.",
  "gain": "L'IA rédige vos mails en anglais ou dans une autre langue, au bon registre, aussi vite qu'en français — vous vérifiez le sens sur la version française et envoyez.",
  "prompt": "Rédige ce mail en anglais professionnel à destination de [interlocuteur, contexte] : [décrire le message en français ou coller le brouillon]. Registre courtois mais direct, tournures naturelles pour un anglophone, pas de traduction mot à mot. Donne aussi la version française pour que je vérifie le sens.",
  "conseil": "Demander systématiquement la version française en regard : c'est ce qui permet de vérifier le sens sans maîtriser la langue.",
  "skill": null
 },
 {
  "id": "planning-equipe-sponsoring",
  "titre": "Construire le planning annuel de l'équipe sponsoring",
  "service": "commercial",
  "besoin": "templates",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Le planning annuel de l'équipe sponsoring se reconstruit à la main à chaque saison : échéances contractuelles, activations, temps forts sportifs et disponibilités se percutent sans vue d'ensemble.",
  "gain": "L'IA structure un planning annuel priorisé en une session et signale les semaines de surcharge — vous ne lui redonnez que les changements à chaque mise à jour.",
  "prompt": "Construis le planning annuel de l'équipe sponsoring à partir de : calendrier sportif [coller les dates], obligations contractuelles par partenaire [lister les livrables et échéances], effectif de l'équipe [nombre de personnes et rôles]. Produis un tableau par mois avec les livrables, le responsable proposé et la charge estimée, puis signale les semaines de surcharge et propose des lissages.",
  "conseil": "Mettre à jour le planning en redonnant à l'IA seulement les changements : elle reconstruit le tableau sans tout ressaisir.",
  "skill": null
 },
 {
  "id": "standardiser-entretien-besoins",
  "titre": "Standardiser la conduite d'entretien de découverte client",
  "service": "commercial",
  "besoin": "templates",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "club"
  ],
  "preuve": "teste",
  "douleur": "Chaque commercial mène ses entretiens de découverte à sa façon : les besoins du prospect sont creusés inégalement, des informations clés vous manquent au moment de construire l'offre, et rien ne se capitalise entre les rendez-vous.",
  "gain": "L'IA construit une trame d'entretien homogène pour toute l'équipe — vous documentez chaque besoin client au même format, rendez-vous après rendez-vous.",
  "prompt": "Construis une trame d'entretien de découverte pour un rendez-vous sponsoring : notre offre [décrire les actifs : visibilité, hospitalité, activation], nos cibles [types d'entreprises]. La trame couvre : contexte et enjeux du prospect, objectifs marketing, budget et circuit de décision, freins probables. Pour chaque section, propose 3 questions ouvertes et les signaux à écouter. Format une page, utilisable en rendez-vous.",
  "conseil": "Après chaque entretien, faire remplir la trame et la déposer au même endroit : c'est la matière première des offres suivantes.",
  "skill": null
 },
 {
  "id": "image-realiste-activation",
  "titre": "Générer l'image réaliste d'une activation pour la vendre",
  "service": "commercial",
  "besoin": "visuels",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Vendre une activation qui n'existe pas encore oblige votre prospect à l'imaginer sur description : sans visuel réaliste, le concept perd sa force et la décision traîne.",
  "gain": "L'IA génère un visuel réaliste de l'activation projetée en quelques minutes — la discussion bascule du concept à la mise en œuvre.",
  "prompt": "Génère une image réaliste de cette activation : [décrire la scène : par exemple une personnalité portant le maillot officiel dans un contexte précis, une animation de parvis de stade, un espace partenaire]. Style photographique, éclairage naturel, cadrage [plan large / serré], ambiance [décrire]. L'image doit être crédible pour une présentation commerciale, sans texte incrusté.",
  "conseil": "Attention au droit à l'image : une personnalité reconnaissable générée par IA ne peut pas être diffusée sans accord, réserver ces visuels aux présentations internes.",
  "skill": null
 },
 {
  "id": "optimiser-supports-partenaires",
  "titre": "Corriger et optimiser les supports de présentation partenaires",
  "service": "commercial",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Vos supports partenaires accumulent les défauts au fil des réutilisations : messages délayés, slides surchargées, arguments qui ne correspondent plus à l'offre — et personne ne prend le temps d'une refonte.",
  "gain": "L'IA audite le support comme un directeur commercial exigeant et propose la structure cible slide par slide — vous resserrez le tout en une session, sans repasser par une agence.",
  "prompt": "Voici le contenu de notre support de présentation partenaires : [coller le texte des slides]. Audite-le comme un directeur commercial exigeant : messages redondants, arguments faibles ou datés, slides à fusionner ou supprimer, informations manquantes qu'un prospect attendrait. Propose ensuite la structure cible slide par slide, avec le message unique de chaque slide en une phrase.",
  "conseil": "Imposer la règle une slide, un message : si l'IA n'arrive pas à résumer la slide en une phrase, c'est qu'elle doit être coupée.",
  "skill": null
 },
 {
  "id": "suivi-menus-hospitalite",
  "titre": "Suivre les menus hospitalité pour éviter les répétitions",
  "service": "commercial",
  "besoin": "donnees",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "club",
   "salle"
  ],
  "preuve": "teste",
  "douleur": "Vos abonnés hospitalité reviennent match après match — et sans historique des menus servis, les mêmes plats reviennent aussi : des convives premium qui paient cher remarquent la répétition avant le traiteur.",
  "gain": "L'IA analyse l'historique et propose des menus sans répétition pour les prochains matchs — vous validez la rotation en quelques minutes avec le traiteur.",
  "prompt": "Voici l'historique des menus servis en espace hospitalité cette saison : [coller la liste par date]. Analyse les répétitions (plats, familles de produits, desserts) par espace et par période. Propose pour les [4] prochains matchs des menus qui évitent toute répétition sur les [6] dernières réceptions, en tenant compte de la saisonnalité et des contraintes [budget par couvert, régimes spécifiques].",
  "conseil": "Tenir le fichier des menus au fil de l'eau après chaque match : la valeur du suivi vient de l'exhaustivité de l'historique.",
  "skill": null
 },
 {
  "id": "actions-post-rdv-client",
  "titre": "Extraire les actions par personne après un RDV client",
  "service": "commercial",
  "besoin": "reunions",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "club"
  ],
  "preuve": "teste",
  "douleur": "Après un rendez-vous client, les engagements pris se dispersent entre les notes de chacun : des actions promises au partenaire passent à la trappe et se redécouvrent au rendez-vous suivant, au pire moment.",
  "gain": "L'IA extrait de vos notes la liste des actions par personne avec échéances en deux minutes — vous la partagez avant la fin de la journée.",
  "prompt": "Voici les notes (ou la transcription) de notre rendez-vous avec [partenaire] : [coller]. Extrais toutes les actions à mener : pour chacune, le responsable (nous ou le partenaire, et qui nommément si précisé), l'échéance mentionnée ou à proposer, et le livrable attendu. Présente deux listes séparées : nos engagements, les leurs. Signale les points restés ouverts sans décision.",
  "conseil": "Envoyer la liste des engagements mutuels au partenaire dans la foulée : c'est un outil de suivi et un signal de professionnalisme.",
  "skill": null
 },
 {
  "id": "interroger-base-commerciale",
  "titre": "Interroger la base commerciale interne en langage naturel",
  "service": "commercial",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "club"
  ],
  "preuve": "teste",
  "douleur": "Votre base commerciale répond mal aux questions du quotidien : chaque interrogation un peu fine — contrats à échéance, partenaires sans contact depuis six mois — exige des filtres et des croisements manuels.",
  "gain": "L'IA répond immédiatement à vos questions posées en langage naturel sur un export de la base, en citant les lignes utilisées — vous vérifiez et passez à l'action.",
  "prompt": "Voici l'export de notre base commerciale [coller ou joindre : partenaires, contrats, montants, échéances, derniers contacts]. Réponds à mes questions en t'appuyant uniquement sur ces données et en citant les lignes utilisées : [exemples : quels contrats expirent dans les 6 mois ? quels partenaires ont baissé leur engagement vs N-1 ? qui n'a eu aucun contact depuis 3 mois ?]. Si une donnée manque pour répondre, dis-le au lieu d'estimer.",
  "conseil": "Anonymiser ou pseudonymiser les contacts personnels avant de charger l'export dans un outil grand public : les données contractuelles sont sensibles.",
  "skill": null
 },
 {
  "id": "verification-programmation-audiences",
  "titre": "Vérifier la programmation des matchs et suivre les audiences",
  "service": "commercial",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Les données de programmation TV et les audiences arrivent de sources dispersées : vous vérifiez à la main, match par match, que la programmation respecte les contrats de diffusion, et le suivi des audiences par case horaire n'est jamais à jour.",
  "gain": "L'IA contrôle la conformité de la programmation et consolide le suivi d'audiences en un tableau de bord — quelques minutes par journée de championnat, et les écarts contractuels remontent d'eux-mêmes.",
  "prompt": "Voici la programmation de la journée [coller : matchs, diffuseurs, cases horaires] avec les engagements contractuels [coller : nombre de matchs par diffuseur, cases garanties, exposition par club] et les audiences réalisées [coller]. Contrôle : conformité de la programmation aux engagements, équité d'exposition entre clubs sur la saison [coller le cumul], audiences par case horaire vs moyenne. Produis : les écarts contractuels, le classement des cases par performance, et les recommandations de programmation pour les journées à venir.",
  "conseil": "Tenir le cumul d'exposition par club dans le fichier : l'iniquité d'exposition se joue sur la saison entière, pas sur une journée.",
  "skill": null
 },
 {
  "id": "relecture-strategie-2e-ia",
  "titre": "Faire relire une stratégie par une seconde IA",
  "service": "commercial",
  "besoin": "analyse",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "club",
   "federation",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "À force d'itérer dans le même fil, l'IA qui vous a aidé à construire votre stratégie sponsoring finit par valider ce que vous voulez entendre. Les faiblesses passent inaperçues jusqu'à la présentation.",
  "gain": "Une seconde IA relit votre stratégie avec un regard neuf et pointe les incohérences et les hypothèses fragiles — vous corrigez avant de présenter.",
  "prompt": "Voici une stratégie sponsoring rédigée par ailleurs : [coller le document]. Tu n'as pas participé à son élaboration. Relis-la en critique exigeant : identifie les incohérences internes, les hypothèses non justifiées, les chiffres qui semblent fragiles et les objections qu'un directeur financier soulèverait. Classe tes remarques par gravité et propose une correction pour chacune.",
  "conseil": "Utiliser une IA différente de celle qui a produit le document (Claude vs ChatGPT) : deux modèles ne partagent pas les mêmes biais.",
  "skill": null
 },
 {
  "id": "storyboards-activations",
  "titre": "Créer le storyboard d'une activation partenaire",
  "service": "commercial",
  "besoin": "visuels",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Pour faire comprendre le déroulé d'une activation à un partenaire, il vous faut un storyboard — mais le passage par un graphiste prend des jours, pour un support parfois jeté après le premier échange.",
  "gain": "L'IA vous produit un storyboard présentable dans la journée — vous itérez en direct avec le partenaire.",
  "prompt": "Crée le storyboard d'une activation partenaire en [6] scènes : concept [décrire l'activation], lieu [stade, fan zone, digital], moments clés [avant-match, mi-temps, après-match]. Pour chaque scène : description visuelle en 2 lignes, message affiché, rôle du partenaire. Génère ensuite une image par scène dans un style croquis homogène.",
  "conseil": "Rester en style croquis ou illustration : un rendu trop réaliste fige la discussion sur les détails au lieu du concept.",
  "skill": null
 },
 {
  "id": "infographie-post-evenement-sponsor",
  "titre": "Créer l'infographie de bilan d'un événement pour un sponsor",
  "service": "commercial",
  "besoin": "visuels",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Après chaque événement, vos partenaires attendent le bilan de leur visibilité. Le temps de compiler les chiffres et de mettre en forme, il arrive quand l'événement est déjà oublié.",
  "gain": "L'IA structure l'infographie de bilan par partenaire en quelques minutes — vous la livrez dans la semaine, quand elle prépare encore le renouvellement.",
  "prompt": "Prépare le contenu d'une infographie de bilan pour notre partenaire [type de partenaire] après [événement] : données disponibles [affluence, audience TV/streaming, retombées réseaux sociaux, passages LED, mentions presse]. Structure : 3 chiffres clés en haut, visibilité détaillée par canal, moments forts, et un message de projection vers la suite. Formule chaque chiffre de façon percutante (comparaisons parlantes).",
  "conseil": "Envoyer le bilan dans les 7 jours : sa valeur commerciale décroît chaque semaine, mieux vaut une infographie simple et rapide qu'un rapport parfait et tardif.",
  "skill": null
 },
 {
  "id": "brainstorm-activations-sponsors",
  "titre": "Brainstormer des activations sponsors innovantes",
  "service": "commercial",
  "besoin": "veille",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Vos activations se ressemblent d'une saison à l'autre : LED, loges, jeux-concours. Vous tournez en rond sur les mêmes formats alors que vos partenaires attendent de la nouveauté pour renouveler.",
  "gain": "L'IA vous génère quinze idées d'activations adaptées à chaque partenaire en une session de brainstorm — vous n'avez plus qu'à trier et affiner les meilleures.",
  "prompt": "Brainstorme 15 idées d'activations pour notre partenaire [secteur, objectifs marketing, cible]. Contexte : [notre sport, nos supports disponibles : stade, digital, événements]. Contraintes : [budget, calendrier]. Varie les registres : expérience fan, contenu digital, présence terrain, RSE. Pour chaque idée : concept en 2 lignes, coût estimé (faible/moyen/élevé), et ce qui la rend différenciante. Termine par ton top 3 argumenté.",
  "conseil": "Nourrir le prompt avec les objectifs réels du partenaire plutôt que demander des idées génériques : la pertinence vient du contexte fourni.",
  "skill": null
 },
 {
  "id": "comparatif-benefices-activations",
  "titre": "Construire le tableau comparatif des bénéfices par activation",
  "service": "commercial",
  "besoin": "analyse",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Face à un partenaire qui hésite entre plusieurs dispositifs, vous n'avez pas de vue comparée des bénéfices par type d'activation. Chaque arbitrage se rediscute de zéro, sans grille commune.",
  "gain": "L'IA construit le tableau comparatif — visibilité, engagement, coût, mesurabilité — vous arbitrez avec le partenaire sur une base claire.",
  "prompt": "Construis un tableau comparatif de nos types d'activation [lister : LED, naming d'événement, contenu digital, hospitalité, opération fan experience]. Critères : visibilité générée, engagement du public, coût de mise en oeuvre, facilité de mesure, adéquation par objectif marketing (notoriété, considération, RSE). Note chaque case sur 5 avec une justification courte. Termine par une lecture : quelle activation recommander selon l'objectif prioritaire du partenaire.",
  "conseil": "Caler les notes avec les données réelles de vos dernières campagnes quand elles existent : le tableau gagne en crédibilité face au partenaire.",
  "skill": null
 },
 {
  "id": "controle-passages-led",
  "titre": "Contrôler les temps de passage LED des partenaires",
  "service": "commercial",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "ligue",
   "club",
   "salle"
  ],
  "preuve": "teste",
  "douleur": "Vos contrats garantissent des temps de passage LED précis, mais compiler les logs de diffusion match par match est si fastidieux que vous contrôlez par sondage. Un écart non détecté, et le risque devient contractuel.",
  "gain": "L'IA rapproche les logs des engagements contractuels en quelques minutes par journée — vous voyez les écarts et organisez le rattrapage à temps.",
  "prompt": "Voici les logs de diffusion LED de la journée [coller l'export : partenaire, séquence, durée, période de match] et les engagements contractuels par partenaire [coller le tableau des temps garantis]. Calcule le temps de passage réel par partenaire, compare aux engagements, et produis : le tableau de conformité (réalisé vs garanti, écart en %), la liste des partenaires sous le seuil avec le rattrapage nécessaire sur les prochains matchs.",
  "conseil": "Traiter les écarts au fil de la saison : un rattrapage étalé sur trois matchs passe inaperçu, un rattrapage de fin de saison se négocie mal.",
  "skill": null
 },
 {
  "id": "benchmark-valorisation-sponsoring",
  "titre": "Benchmarker la valorisation internationale du sponsoring",
  "service": "commercial",
  "besoin": "veille",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Vous fixez vos prix de packages sponsoring sans référence internationale, au risque de sous-valoriser vos actifs. Les comparables existent, mais les compiler représente des semaines d'étude ou un cabinet spécialisé.",
  "gain": "L'IA compile un benchmark sourcé des valorisations comparables en quelques sessions — vous objectivez votre grille tarifaire face aux partenaires.",
  "prompt": "Benchmarke la valorisation du sponsoring pour des organisations comparables à la nôtre [sport, audience, pays de référence] : montants publics des contrats de naming, maillot, partenaires majeurs dans [3-4 pays], structuration des packages (tiers de partenaires, actifs inclus), tendances de prix sur 3 ans. Cite chaque source avec sa date. Termine par une fourchette de valorisation argumentée pour nos actifs [lister] et les écarts avec notre grille actuelle.",
  "conseil": "Croiser systématiquement deux sources par montant cité : les chiffres de sponsoring qui circulent mélangent rumeurs et contrats réels.",
  "skill": null
 },
 {
  "id": "plans-table-partenaires",
  "titre": "Automatiser la gestion des plans de table partenaires",
  "service": "commercial",
  "besoin": "automatisation",
  "faisabilite": "complexe",
  "portee": "transversal",
  "structures": [
   "club",
   "salle"
  ],
  "preuve": "teste",
  "douleur": "À chaque réception, vous refaites les plans de table partenaires à la main : confirmations au fil de l'eau, affinités et incompatibilités à respecter, et des heures de replacement au moindre désistement de dernière minute.",
  "gain": "L'automatisation régénère le plan de table en quelques minutes à chaque changement, selon vos règles de placement — vous ne validez plus que les cas sensibles.",
  "prompt": "Dispositif : un fichier de référence des invités (partenaire, statut, affinités, incompatibilités, historique de placement) alimenté par les confirmations, connecté via un workflow (n8n ou équivalent) à un moteur de placement. À chaque mise à jour des confirmations, l'IA régénère le plan de table selon les règles (mixer les partenaires complémentaires, séparer les concurrents, VIP près des hôtes) et produit le plan imprimable plus la liste des changements depuis la version précédente.",
  "process": [
   "Formaliser les règles de placement (affinités, incompatibilités, priorités VIP)",
   "Tenir un fichier de référence des invités alimenté par les confirmations",
   "Connecter le fichier à un workflow (n8n ou équivalent) relié au moteur de placement",
   "Régénérer le plan de table à chaque mise à jour des confirmations",
   "Produire le plan imprimable et la liste des changements depuis la version précédente"
  ],
  "conseil": "Formaliser les règles de placement implicites de l'équipe avant d'automatiser : c'est la connaissance des affinités qui fait la valeur, pas l'outil.",
  "skill": null
 },
 {
  "id": "listing-prospects-sponsors",
  "titre": "Constituer un listing de prospects sponsors qualifiés",
  "service": "commercial",
  "besoin": "veille",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "ligue",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Construire une liste de prospects sponsoring pertinents vous demande des heures de recherche : entreprises du territoire, secteurs compatibles, dirigeants sensibles au sport. Et la liste vieillit dès qu'elle est finie.",
  "gain": "L'IA produit un listing de prospects qualifiés avec un angle d'approche par entreprise en une session — vous vérifiez les informations clés avant de décrocher le téléphone.",
  "prompt": "Constitue une liste de 30 entreprises prospects pour du sponsoring sportif : zone géographique [territoire], secteurs prioritaires [lister], taille minimale [CA ou effectif]. Pour chaque entreprise : activité, implantation locale, actualité récente, lien éventuel avec le sport, et angle d'approche suggéré en une ligne. Présente le résultat en tableau exportable.",
  "conseil": "Vérifier les informations clés (dirigeant, actualité) avant tout contact : les outils de recherche IA peuvent citer des données périmées.",
  "skill": null
 },
 {
  "id": "preparation-soutenance-orale",
  "titre": "Préparer une soutenance orale de candidature",
  "service": "commercial",
  "besoin": "reunions",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club"
  ],
  "preuve": "eprouve",
  "douleur": "La soutenance orale décide souvent de l'attribution d'un marché ou d'un événement, mais vous la préparez à la fin, sans répétition sérieuse ni anticipation des questions du jury.",
  "gain": "L'IA joue le jury et vous pose les dix questions les plus probables, dont les déstabilisantes — vous répétez vos réponses à voix haute avant le jour J.",
  "prompt": "Nous soutenons cette candidature à l'oral : [coller le dossier ou son résumé]. Le jury : [composition, attentes connues]. Joue le jury : pose-nous les 10 questions les plus probables, dont 3 volontairement déstabilisantes sur nos points faibles [budget, références, délais]. Pour chaque question, propose ensuite la structure d'une réponse en 30 secondes : position, preuve, bénéfice pour le jury.",
  "conseil": "Répéter à voix haute contre les questions générées : c'est la formulation orale qui coince le jour J, pas les idées.",
  "skill": null
 },
 {
  "id": "visuel-sponsor-joueurs",
  "titre": "Produire un visuel sponsor personnalisé avec les joueurs",
  "service": "commercial",
  "besoin": "visuels",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Vos partenaires demandent des visuels les associant aux joueurs — vœux, anniversaires d'entreprise, annonces — et chaque demande repart en production graphique avec des délais incompatibles avec l'attente du sponsor.",
  "gain": "L'IA compose des déclinaisons personnalisées par partenaire à partir de vos photos officielles, dans la journée — vous validez la composition et les droits avant diffusion.",
  "prompt": "À partir de cette photo officielle [photo de joueurs dont les droits sont couverts], compose un visuel pour notre partenaire [nom du partenaire] : intégration de son logo [emplacement], message [texte court : vœux, félicitations, annonce], aux couleurs [charte du club et du partenaire]. Format [post réseaux sociaux / écran stade / print]. Propose 3 compositions différentes.",
  "conseil": "Vérifier que le contrat image des joueurs couvre l'usage par le partenaire : l'association joueur-marque est encadrée par les contrats individuels.",
  "skill": null
 },
 {
  "id": "marges-evenements-seminaires",
  "titre": "Calculer les marges des événements et séminaires accueillis",
  "service": "commercial",
  "besoin": "donnees",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "club",
   "salle"
  ],
  "preuve": "teste",
  "douleur": "Vous vendez des séminaires et des événements d'entreprise dans vos espaces sans vision fine de leur rentabilité : les coûts — traiteur, personnel, énergie — sont éparpillés et la marge réelle se découvre trop tard.",
  "gain": "L'IA calcule la marge par événement dès le devis et pointe les postes qui la dégradent — vous ajustez votre grille tarifaire sur les prestations réellement rentables.",
  "prompt": "Voici les données de nos derniers événements accueillis : [coller le tableau : recettes par poste, coûts traiteur, personnel, technique, énergie]. Calcule la marge brute et la marge nette par événement et par type de prestation. Identifie les postes de coût qui dégradent le plus la marge, les prestations les plus et les moins rentables, et propose 3 ajustements de la grille tarifaire.",
  "conseil": "Inclure les coûts cachés (nettoyage, énergie, heures supplémentaires) dans le tableau source : c'est là que la marge s'évapore.",
  "skill": null
 },
 {
  "id": "questionnaires-fans-sponsors",
  "titre": "Créer les questionnaires fans et sponsors puis analyser les réponses",
  "service": "commercial",
  "besoin": "analyse",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "ligue",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Mesurer la perception de vos partenariats exige des questionnaires bien construits puis une analyse des réponses : deux exercices chronophages, alors l'enquête est repoussée ou dépouillée superficiellement.",
  "gain": "L'IA conçoit le questionnaire en une heure puis synthétise les réponses avec des enseignements actionnables — vous choisissez les chiffres à mettre en avant auprès des partenaires.",
  "prompt": "1) Conçois un questionnaire de [15] questions pour mesurer [la perception des partenaires par les fans / la satisfaction des sponsors] : mix d'échelles, de choix multiples et de 2 questions ouvertes, 5 minutes maximum à remplir. 2) Après collecte, voici les réponses : [coller l'export]. Analyse : tendances par profil de répondant, verbatims marquants, 3 enseignements actionnables et les chiffres à mettre en avant auprès des partenaires.",
  "conseil": "Limiter les questions ouvertes à deux : elles font la richesse de l'analyse IA mais tuent le taux de complétion au-delà.",
  "skill": null
 },
 {
  "id": "reco-operations-digitales",
  "titre": "Rédiger une reco d'opérations digitales en trois variantes",
  "service": "commercial",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "ligue",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Chaque partenaire attend une recommandation d'opérations digitales personnalisée, mais produire plusieurs scénarios argumentés par partenaire prend un temps que vous n'avez pas : tout le monde reçoit la même proposition.",
  "gain": "L'IA rédige trois variantes personnalisées par partenaire — budget serré, équilibré, ambitieux — en moins d'une heure ; vous n'avez plus qu'à ajuster et présenter.",
  "prompt": "Rédige une recommandation d'opérations digitales pour notre partenaire [secteur, objectifs, cible, budget indicatif] en 3 variantes : essentielle (budget serré), équilibrée (recommandée), ambitieuse (budget élargi). Pour chaque variante : dispositifs proposés sur nos canaux [lister : réseaux, site, newsletter, écrans stade], mécanique, indicateurs de succès et estimation de portée. Une page par variante, ton conseil, orienté résultats.",
  "conseil": "Toujours présenter la variante recommandée en deuxième position : l'effet de contraste entre les trois fait accepter le budget médian.",
  "skill": null
 },
 {
  "id": "veille-implantations-entreprises",
  "titre": "Suivre chaque semaine les implantations d'entreprises du bassin",
  "service": "commercial",
  "besoin": "veille",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "club"
  ],
  "preuve": "teste",
  "douleur": "Les nouvelles implantations d'entreprises sur votre territoire sont autant de prospects sponsors à contacter tôt, mais personne ne fait cette veille systématiquement : vous apprenez les arrivées quand un concurrent a déjà signé.",
  "gain": "L'IA vous livre chaque semaine les implantations et développements d'entreprises du bassin, triés par score d'intérêt sponsoring — vous contactez les meilleurs prospects en premier.",
  "prompt": "Chaque semaine, recherche les annonces d'implantations, d'extensions ou de levées de fonds d'entreprises dans [territoire : agglomération, département] sur les 7 derniers jours : presse économique locale, annonces officielles, communiqués. Pour chaque entreprise : activité, taille estimée, dirigeant, source datée, et un score d'intérêt sponsoring (proximité géographique, secteur, dynamique). Format : tableau trié par score.",
  "conseil": "Automatiser l'envoi hebdomadaire (n8n ou tâche planifiée ChatGPT) : la valeur vient de la régularité, pas de la profondeur de chaque recherche.",
  "skill": null
 },
 {
  "id": "budgets-activation-partenaires",
  "titre": "Construire les budgets d'activation des partenaires",
  "service": "commercial",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Vous montez chaque budget d'activation partenaire à la main : postes oubliés, hypothèses non tracées, et des écarts découverts en fin d'opération faute de modèle commun entre chefs de projet.",
  "gain": "L'IA structure en une heure un budget complet et comparable, avec hypothèses explicites et postes oubliés signalés — vous arbitrez les fourchettes.",
  "prompt": "Construis le budget prévisionnel de cette activation partenaire : [décrire l'opération, le lieu, la durée, l'audience attendue]. Structure le budget par postes : production et technique, personnel et prestataires, communication, dotations, logistique, imprévus (10 %). Pour chaque poste : hypothèses chiffrées explicites et fourchette basse/haute. Ajoute les recettes éventuelles et le reste à charge par partie. Signale les postes que j'ai probablement oubliés.",
  "conseil": "Capitaliser après chaque opération en donnant le réalisé à l'IA : les budgets suivants se calent sur vos coûts réels, plus sur des estimations.",
  "skill": null
 },
 {
  "id": "plan-communication-match",
  "titre": "Créer le plan de communication d'un match",
  "service": "marcom",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "club",
   "ligue",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Chaque match exige son plan de communication : annonce, montée en tension, temps forts, bilan. Vous le reconstruisez de zéro, dans l'urgence de la semaine de match.",
  "gain": "L'IA vous livre une trame complète de J-7 à J+1 en quelques minutes — vous n'avez plus qu'à l'ajuster au contexte sportif.",
  "prompt": "Tu es responsable communication de [type de structure : club, fédération, ligue]. Prépare le plan de communication du match [équipes, date, compétition, enjeu] : séquence de J-7 à J+1, messages clés par moment (annonce, avant-match, pendant, après-match), canaux (site, réseaux sociaux, presse, newsletter) et formats. Présente le tout en tableau chronologique.",
  "conseil": "Partir d'un match réellement programmé et préciser l'enjeu sportif : le plan gagne nettement en pertinence.",
  "skill": null
 },
 {
  "id": "fiche-style-editoriale",
  "titre": "Capturer le ton éditorial de la structure dans une fiche de style",
  "service": "marcom",
  "besoin": "redaction",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "teste",
  "douleur": "Plusieurs personnes écrivent au nom de votre structure et chacune a son style : vos contenus manquent de cohérence, et l'IA utilisée sans cadrage produit un ton générique qui ne ressemble à personne.",
  "gain": "L'IA extrait de vos meilleurs contenus une fiche de style en cinq règles — vous la validez une fois, puis vous la réutilisez dans chaque prompt.",
  "prompt": "Voici [5 à 10] contenus représentatifs de notre communication : [coller articles, posts, communiqués]. Analyse-les et produis une fiche de style en 5 règles : ton, vocabulaire à privilégier et à bannir, longueur des phrases, structure type, avec un exemple avant/après par règle. Cette fiche servira de consigne pour tous nos futurs contenus.",
  "conseil": "Choisir des contenus dont la structure est fière plutôt que les plus récents : la fiche doit capturer le ton visé, pas le ton subi.",
  "skill": null
 },
 {
  "id": "declinaison-multicanal",
  "titre": "Décliner un contenu sur tous les canaux (site, réseaux, newsletter)",
  "service": "marcom",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "teste",
  "douleur": "Un même contenu — article, annonce, résultat — doit vivre sur le site, les réseaux sociaux et la newsletter. Vous réécrivez chaque déclinaison à la main, pour un contenu qui existe déjà.",
  "gain": "L'IA produit toutes les déclinaisons en une seule passe, chacune aux codes de son canal — vous n'avez plus qu'à relire et publier.",
  "prompt": "Voici un article publié sur notre site : [coller l'article]. Décline-le en : un post LinkedIn (ton institutionnel, 150 mots maximum), un post Instagram (accroche directe, phrases courtes), un encart newsletter (3 phrases + appel à cliquer). Respecte notre fiche de style : [coller la fiche de style].",
  "conseil": "Combiner avec la fiche de style éditoriale pour garder la même voix sur tous les canaux.",
  "skill": null
 },
 {
  "id": "communique-presse-modele",
  "titre": "Rédiger un communiqué de presse sur le modèle maison",
  "service": "marcom",
  "besoin": "templates",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club"
  ],
  "preuve": "eprouve",
  "douleur": "Partenariat, événement, nomination : chaque communiqué de presse repart d'une page blanche, alors que vous en produisez toute l'année sur le même format.",
  "gain": "L'IA rédige un communiqué conforme à votre format maison en quelques minutes — vous relisez au lieu de rédiger.",
  "prompt": "Voici un communiqué de presse récent et représentatif de notre structure : [coller le communiqué modèle]. Rédige sur ce modèle exact le communiqué annonçant [l'information : partenariat, événement, nomination] : titre, chapeau, 2 à 3 paragraphes, citation de [nom de la fonction : président, directeur général], bloc « à propos », contact presse. Ton institutionnel, factuel, sans superlatifs.",
  "conseil": "Donner un vrai communiqué passé comme modèle plutôt que de décrire le format : l'IA reproduit mieux ce qu'elle voit.",
  "skill": null
 },
 {
  "id": "infographie-post-match",
  "titre": "Générer l'infographie post-match (score, stats, citation)",
  "service": "marcom",
  "besoin": "visuels",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "club",
   "ligue",
   "federation"
  ],
  "preuve": "eprouve",
  "douleur": "Après chaque match, vous devez produire les mêmes contenus dans un temps très court : score, statistiques, réaction. Et le graphiste n'est pas toujours disponible le soir du match.",
  "gain": "L'IA prépare tout le contenu de l'infographie — score, stats marquantes, citation — dès le coup de sifflet final ; vous n'avez plus qu'à le couler dans votre gabarit.",
  "prompt": "Voici les données du match [équipes, score, statistiques] et la déclaration d'après-match de [entraîneur ou joueur] : [coller]. Prépare le contenu d'une infographie post-match : le score mis en scène, les 3 statistiques les plus parlantes, un insight tactique en une phrase, la citation la plus forte. Format : textes courts et hiérarchisés, prêts à intégrer dans notre gabarit.",
  "conseil": "Préparer le gabarit graphique à l'avance : l'IA fournit le contenu, le gabarit garantit l'identité visuelle du club.",
  "skill": null
 },
 {
  "id": "calendrier-contenu-saison",
  "titre": "Planifier le calendrier de contenu à partir des dates clés de la saison",
  "service": "marcom",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Vous connaissez le calendrier des matchs et des événements des mois à l'avance, mais votre communication se décide encore semaine par semaine, dans la réaction plutôt que dans l'anticipation.",
  "gain": "L'IA construit un calendrier éditorial couvrant toute la saison à partir des dates déjà connues — vous n'avez plus qu'à l'amender en une session de travail.",
  "prompt": "Voici les dates clés de notre saison : [coller le calendrier des matchs, événements, échéances]. Construis un calendrier de contenu : pour chaque date, propose les contenus avant/pendant/après (annonce, teaser, couverture, bilan), le canal et le format. Ajoute les marronniers pertinents [rentrée sportive, fêtes, journées mondiales]. Présente le résultat en tableau exportable vers un tableur.",
  "conseil": null,
  "skill": null
 },
 {
  "id": "revue-de-presse",
  "titre": "Synthétiser la revue de presse du club ou de la fédération",
  "service": "marcom",
  "besoin": "veille",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Chaque jour ou chaque semaine, vous lisez, triez et résumez des dizaines d'articles avant de diffuser la revue de presse en interne. Des heures de lecture pour quelques lignes de synthèse.",
  "gain": "L'IA produit une synthèse hiérarchisée des retombées en quelques minutes — vous n'avez plus qu'à la relire avant diffusion.",
  "prompt": "Voici les articles parus sur [la structure] depuis [période] : [coller le texte des articles]. Produis une revue de presse : synthèse générale en 5 lignes, puis pour chaque article le média, l'angle, la tonalité (positive, neutre, négative) et une citation marquante. Termine par les 3 points d'attention à signaler à la direction.",
  "conseil": "Coller le texte des articles plutôt que les seuls liens : les outils n'accèdent pas toujours au contenu derrière un lien.",
  "skill": null
 },
 {
  "id": "sous-titrage-videos-multilingue",
  "titre": "Traduire et sous-titrer les vidéos de la structure en plusieurs langues",
  "service": "marcom",
  "besoin": "visuels",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue"
  ],
  "preuve": "eprouve",
  "douleur": "Vos vidéos restent monolingues : sous-titrer et traduire pour les audiences internationales coûte trop cher en prestation pour être systématique.",
  "gain": "L'IA génère les sous-titres multilingues — vous les faites relire, et chaque vidéo s'ouvre aux audiences internationales.",
  "prompt": "Voici la transcription de notre vidéo : [coller ou joindre]. Découpe-la en sous-titres (deux lignes maximum, lisibles en 3 secondes), puis traduis-les en [langues] en gardant le ton et en adaptant les expressions plutôt qu'en traduisant mot à mot. Livre un fichier par langue au format SRT.",
  "conseil": "Faire relire chaque langue par un locuteur natif avant publication, en particulier les noms propres et le vocabulaire du sport.",
  "skill": null
 },
 {
  "id": "carrousel-reseaux-sociaux",
  "titre": "Générer un carrousel LinkedIn ou Instagram en vingt minutes",
  "service": "marcom",
  "besoin": "visuels",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Un carrousel pour les réseaux, c'est un contenu qui performe mais qui coûte : structurer le propos slide par slide puis tout mettre en forme vous prend une demi-journée que l'équipe n'a pas.",
  "gain": "L'IA structure le contenu slide par slide, vous le coulez dans l'outil de mise en page — le carrousel sort en vingt minutes.",
  "prompt": "Je veux un carrousel de 8 slides sur [sujet] pour [LinkedIn / Instagram]. Structure-le : slide 1 accroche, slides 2 à 7 une idée par slide (titre + deux lignes), slide 8 appel à l'action. Texte court, percutant, adapté à notre audience de [public]. Je collerai ensuite le résultat dans un outil de mise en page.",
  "conseil": "Générer le contenu et la mise en forme en deux temps : l'IA structure le propos, l'outil de mise en page garantit l'identité visuelle.",
  "skill": null
 },
 {
  "id": "preparer-interview-joueur",
  "titre": "Préparer les questions d'interview d'un joueur ou d'un membre du staff",
  "service": "marcom",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club"
  ],
  "preuve": "demande",
  "douleur": "Vos interviews maison se ressemblent toutes : mêmes questions, mêmes réponses convenues. Trouver un angle neuf pour chaque joueur demande une préparation que le rythme des contenus ne vous laisse pas.",
  "gain": "L'IA propose des angles différenciants et une grille de questions adaptée au profil de la personne — vous choisissez l'angle et menez l'interview.",
  "prompt": "Je prépare une interview de [joueur / membre du staff] pour [support]. Voici son profil et son actualité : [coller]. Propose trois angles d'interview originaux qui évitent les questions convenues, puis pour l'angle que je choisirai, une grille de dix questions progressives, avec deux relances possibles par question.",
  "conseil": "Fournir le profil et l'actualité réelle de la personne : sans matière, l'IA retombe sur les questions convenues qu'on voulait éviter.",
  "skill": null
 },
 {
  "id": "maquetter-espace-fan",
  "titre": "Maquetter un espace fan ou un site événementiel",
  "service": "marcom",
  "besoin": "visuels",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Votre projet d'espace fan ou de site événementiel présenté en cahier des charges texte convainc rarement les instances, et une maquette d'agence coûte cher et prend des semaines.",
  "gain": "L'IA génère une maquette interactive et cliquable en une heure — vous la montrez en réunion avant d'engager le moindre développement.",
  "prompt": "Maquette un espace fan pour [notre ligue / notre club] : page d'accueil avec les prochains matchs, classement, programme de fidélité à points, boutique et accès billetterie. Génère une maquette HTML interactive et cliquable, aux couleurs [couleurs de la structure], consultable sur mobile. Je veux pouvoir la présenter en réunion pour faire valider le concept.",
  "conseil": "La maquette sert à valider le concept et aligner les décideurs, pas à remplacer le développement final.",
  "skill": null
 },
 {
  "id": "contenu-seo-billetterie-boutique",
  "titre": "Rédiger le contenu SEO des pages billetterie et boutique",
  "service": "marcom",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Vos pages billetterie et boutique partent en ligne telles quelles, sans travail de référencement : quand un fan cherche l'événement ou le maillot sur Google, votre offre officielle n'apparaît pas en tête.",
  "gain": "L'IA rédige titres, méta-descriptions et textes optimisés en quelques minutes — vous publiez sans prestataire SEO.",
  "prompt": "Tu es rédacteur SEO. Voici les informations sur [l'événement ou le produit] : [date, lieu, tarifs, points forts]. Rédige pour la page [billetterie / boutique] du site : un titre optimisé pour la requête « [requête visée, ex. billets match X] », une méta-description de 155 caractères, et un texte de présentation de 200 mots qui donne envie d'acheter tout en plaçant naturellement les mots-clés.",
  "conseil": "Partir des requêtes réellement tapées par les fans (nom de l'équipe, de l'événement, de la ville) plutôt que du vocabulaire interne.",
  "skill": null
 },
 {
  "id": "campagne-crm-segment-fan",
  "titre": "Concevoir une campagne CRM pour un segment de fans",
  "service": "marcom",
  "besoin": "redaction",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club"
  ],
  "preuve": "eprouve",
  "douleur": "Votre base CRM compte des milliers de contacts fans, mais vos campagnes restent génériques : le même message part à l'abonné fidèle et à l'acheteur d'un billet unique.",
  "gain": "L'IA conçoit la campagne segmentée complète — promesse, séquence de mails, indicateurs — vous n'avez plus qu'à ajuster et programmer l'envoi.",
  "prompt": "Je prépare une campagne CRM pour le segment [fans ayant acheté un billet une seule fois cette saison] de [ma structure]. Objectif : [les faire revenir sur un prochain match]. Propose : la promesse centrale de la campagne, une séquence de 3 mails (objet, angle, appel à l'action pour chacun), le meilleur moment d'envoi, et les 3 indicateurs à suivre pour juger la performance.",
  "conseil": "Travailler sur des segments et des volumes agrégés : ne jamais coller de données nominatives issues du CRM dans l'outil (vigilance données personnelles).",
  "skill": null
 },
 {
  "id": "decliner-message-publics",
  "titre": "Décliner un même message pour plusieurs publics (clubs, élus, familles)",
  "service": "marcom",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "demande",
  "douleur": "La même information — nouvelle règle, événement, décision — doit être annoncée aux clubs, aux élus, aux familles ou aux partenaires, et vous réécrivez chaque version à la main. En formation, ce besoin arrive en tête des demandes (7,9/10 au questionnaire d'un comité départemental).",
  "gain": "Vous rédigez une seule fois, l'IA décline en versions adaptées à chaque public — vous vérifiez le ton et diffusez.",
  "prompt": "Voici un message à diffuser : [coller le texte]. Décline-le en trois versions : une pour [les clubs], une pour [les élus et partenaires institutionnels], une pour [les familles et le grand public]. Adapte le ton, le niveau de détail et la longueur à chaque public, sans changer les informations factuelles. Garde mes formulations quand elles sont bonnes.",
  "conseil": "Donner un exemple de message déjà envoyé à chaque public : l'IA cale le ton beaucoup plus vite que sur des consignes abstraites.",
  "skill": null
 },
 {
  "id": "minifilm-annonce-partenariat",
  "titre": "Produire le mini-film d'annonce d'un partenariat",
  "service": "marcom",
  "besoin": "visuels",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "club"
  ],
  "preuve": "teste",
  "douleur": "L'annonce d'un nouveau partenariat mérite une vidéo qui marque, mais entre le brief agence, le tournage et le montage, le coût et les délais vous poussent à vous contenter d'un communiqué et d'un visuel statique.",
  "gain": "L'IA écrit le script séquencé et génère les plans manquants — vous produisez en interne un mini-film de 30 à 60 secondes en quelques jours, pour une annonce qui existe vraiment sur les réseaux.",
  "prompt": "Écris le script d'un mini-film de [45] secondes annonçant le partenariat entre notre structure et [partenaire, secteur]. Structure : accroche visuelle forte (5 s), l'histoire commune ou les valeurs partagées (20 s), la révélation du partenariat (10 s), signature et appel à suivre (10 s). Pour chaque séquence : visuel à générer ou images d'archives à utiliser, texte à l'écran, ambiance sonore. Génère ensuite les plans manquants en vidéo IA, style [réaliste / motion design].",
  "conseil": "Mixer images réelles d'archives et plans générés : le tout-IA se voit, l'hybride passe très bien sur les réseaux.",
  "skill": null
 },
 {
  "id": "visuels-multicanal",
  "titre": "Décliner les visuels d'un contenu sur tous les canaux",
  "service": "marcom",
  "besoin": "visuels",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Chaque campagne exige ses formats : story, post carré, bannière site, newsletter, affiche. Vous déclinez le même visuel à la main pendant des heures, pour un travail purement répétitif.",
  "gain": "L'IA produit toutes les déclinaisons de formats dans l'heure à partir du visuel maître — vous contrôlez la cohérence et publiez.",
  "prompt": "À partir de ce visuel maître [image] et de ce message [texte de la campagne], décline la création pour : story Instagram (9:16), post carré (1:1), bannière site (16:5), en-tête newsletter, affiche A3. Pour chaque format : adaptation du cadrage, hiérarchie du texte (accroche, information, appel à l'action) et zone de logo. Respecte la charte [couleurs, police] et garde le même impact visuel sur tous les formats.",
  "conseil": "Faire valider le visuel maître avant de décliner : une correction après déclinaison multiplie le travail par le nombre de formats.",
  "skill": null
 },
 {
  "id": "patterns-engagement-posts",
  "titre": "Analyser ses posts pour en extraire les patterns d'engagement",
  "service": "marcom",
  "besoin": "analyse",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "club",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Certains de vos posts décollent et d'autres tombent à plat sans que vous sachiez pourquoi : les recettes qui marchent ne sont jamais formalisées, et chaque publication repart d'une intuition.",
  "gain": "L'IA compare vos posts et leurs statistiques, identifie les ressorts d'engagement et en tire un template réutilisable — vous l'appliquez aux prochains sujets.",
  "prompt": "Voici [2] posts que nous avons publiés avec leurs statistiques : [coller le texte de chaque post + impressions, réactions, commentaires, partages]. Compare-les : structure (accroche, corps, chute), ton, longueur, usage des émotions, appel à l'action. Explique ce qui fait la différence d'engagement, puis produis un template du post performant : structure ligne par ligne avec les variables entre crochets, pour reproduire le pattern sur d'autres sujets.",
  "conseil": "Refaire l'exercice tous les trimestres avec les posts récents : les patterns d'engagement s'usent à mesure que l'audience s'habitue.",
  "skill": null
 },
 {
  "id": "personas-lecteurs-linkedin",
  "titre": "Définir les personas de lecteurs de sa page LinkedIn",
  "service": "marcom",
  "besoin": "analyse",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "club",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Votre page LinkedIn publie pour tout le monde à la fois — recruteurs, partenaires, fans, institutionnels : sans personas de lecteurs définis, chaque post dilue son message pour ne fâcher personne et ne parle vraiment à personne.",
  "gain": "L'IA documente vos personas de lecteurs depuis vos statistiques et vos posts les plus commentés — vous choisissez, post par post, à qui vous parlez et avec quel angle.",
  "prompt": "Définis les personas de lecteurs de notre page LinkedIn [structure : sport, taille, objectifs de communication]. Base-toi sur : nos statistiques d'abonnés [coller les données démographiques LinkedIn], nos posts les plus commentés [coller 3 exemples avec qui a réagi]. Pour chaque persona : fonction type, ce qu'il vient chercher sur notre page, les sujets qui le font réagir, le ton qui lui parle, et un exemple de post calibré pour lui. Maximum 4 personas.",
  "conseil": "Assumer un persona prioritaire par post plutôt que viser tous les personas à la fois : c'est le ciblage qui crée l'engagement.",
  "skill": null
 },
 {
  "id": "affiches-match-headshots",
  "titre": "Créer les affiches de match et les visuels joueurs de la saison",
  "service": "marcom",
  "besoin": "visuels",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "club"
  ],
  "preuve": "teste",
  "douleur": "Affiches de match, portraits stylisés des joueurs, cartes de statistiques : ces visuels récurrents mobilisent votre graphiste chaque semaine pour des variations du même gabarit, au détriment des projets créatifs de fond.",
  "gain": "L'IA produit en série les visuels de la saison à partir de vos gabarits et des photos officielles — le temps créatif se réinvestit sur les contenus premium.",
  "prompt": "À partir de ce gabarit d'affiche de match [modèle avec la charte] et des photos officielles [portraits des joueurs], produis les visuels de la journée : affiche du match [adversaire, date, heure, tribune à promouvoir], portrait stylisé du joueur mis en avant [traitement : fond, éclairage, effet], carte de statistiques [stats à afficher]. Respecte strictement la charte [couleurs, polices] et les maillots officiels.",
  "conseil": "Créer une fois un gabarit par type de visuel et le décliner ensuite : l'IA est plus fiable en variation qu'en création libre sur les éléments de marque.",
  "skill": null
 },
 {
  "id": "visuels-resultats-classements",
  "titre": "Générer les visuels hebdomadaires de résultats et classements",
  "service": "marcom",
  "besoin": "visuels",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "ligue",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Chaque journée de compétition impose les mêmes visuels de résultats et de classements : une mise à jour manuelle de gabarits répétée toute la saison, avec des erreurs de saisie qui partent en publication.",
  "gain": "L'IA génère les contenus des visuels depuis les données officielles et en vérifie la cohérence en quelques minutes — vous mettez en forme et publiez sans erreur de recopie.",
  "prompt": "Voici les résultats de la journée [coller : scores, classement mis à jour, buteurs ou performances]. Génère les contenus des visuels hebdomadaires selon nos gabarits : visuel résultats (scores de tous les matchs), visuel classement (top [X] avec évolution), visuel performance (joueur ou équipe de la semaine avec ses statistiques). Vérifie la cohérence des données (totaux, écarts de points) et signale toute anomalie avant la mise en forme.",
  "conseil": "Faire vérifier la cohérence des chiffres par l'IA avant publication : une erreur de classement publiée se paie en commentaires toute la semaine.",
  "skill": null
 },
 {
  "id": "visuels-depuis-modele-3d",
  "titre": "Générer des visuels réalistes à partir d'un modèle 3D",
  "service": "marcom",
  "besoin": "visuels",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "club",
   "salle"
  ],
  "preuve": "teste",
  "douleur": "Vos projets d'équipements ou d'aménagements n'existent qu'en maquette 3D technique : ces rendus bruts ne font rêver ni les prospects ni les financeurs, et chaque rendu photoréaliste d'agence coûte cher à chaque variante.",
  "gain": "L'IA transforme les captures de votre maquette en visuels photoréalistes et habités — vous vendez le projet avant qu'il existe.",
  "prompt": "À partir de cette capture de notre maquette 3D [export SketchUp ou équivalent], génère un visuel photoréaliste du lieu en situation : ambiance [jour/soir, événement en cours], personnes présentes [public, sportifs], matériaux et lumières réalistes, notre identité visuelle sur les surfaces prévues [préciser]. Garde la géométrie et les proportions du bâtiment strictement identiques à la maquette.",
  "conseil": "Vérifier que les proportions et éléments structurels restent fidèles à la maquette : l'IA embellit volontiers au prix de la véracité, ce qui pose problème face à un financeur.",
  "skill": null
 },
 {
  "id": "editos-journalistes",
  "titre": "Préparer des éditos et actus prêts à l'emploi pour les journalistes",
  "service": "marcom",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "ligue",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Les médias locaux n'ont plus les moyens de couvrir votre compétition : sans matière prête à l'emploi, la couverture se réduit aux résultats bruts et votre discipline perd en visibilité.",
  "gain": "L'IA prépare chaque semaine un kit médias — édito, brèves, angles chiffrés — que les rédactions reprennent tel quel. La couverture s'étoffe sans effectif en plus.",
  "prompt": "À partir des faits de la journée de compétition [coller : résultats, classements, performances marquantes, statistiques], prépare le kit médias hebdomadaire : 1) un édito de 300 mots avec un angle fort, 2) 5 brèves de 50 mots reprises telles quelles, 3) 3 idées d'angles avec les chiffres qui les soutiennent, 4) les citations disponibles [coller les déclarations]. Style journalistique neutre, prêt à publier, sans superlatifs promotionnels.",
  "conseil": "Écrire en style agence (neutre et factuel) plutôt qu'en style communication : plus le texte est repris tel quel, plus le dispositif fonctionne.",
  "skill": null
 },
 {
  "id": "newsletter-hebdo-rubriques",
  "titre": "Produire la newsletter hebdo avec des rubriques équilibrées",
  "service": "marcom",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Votre newsletter hebdomadaire doit donner leur place à tous les acteurs du réseau — clubs, commissions, partenaires. La collecte et l'équilibrage tournent au casse-tête politique, et le bouclage déborde chaque semaine.",
  "gain": "L'IA assemble une newsletter équilibrée en une heure et trace la répartition des mentions — vous ne gérez plus que les arbitrages sensibles.",
  "prompt": "Assemble la newsletter hebdomadaire à partir de ces matériaux : [coller : actus reçues, résultats, annonces, contenus partenaires]. Contraintes : rubriques fixes [lister], équilibre entre les acteurs (voici le suivi des dernières éditions : [coller le décompte des mentions par club ou commission]), 600 mots maximum. Rédige chaque rubrique, signale les acteurs sous-représentés ce mois-ci à prioriser la semaine prochaine, et propose l'objet du mail (2 variantes).",
  "conseil": "Tenir le décompte des mentions par acteur dans un fichier joint au prompt : l'équilibre perçu par le réseau est politique avant d'être éditorial.",
  "skill": null
 },
 {
  "id": "resume-article-angles",
  "titre": "Résumer un article en 3 points et en tirer des angles de contenu",
  "service": "marcom",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "club",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Votre veille produit des lectures intéressantes qui ne deviennent jamais des contenus : entre lire un article de fond et en tirer un post, il y a un travail d'extraction que personne ne prend le temps de faire.",
  "gain": "L'IA convertit chaque article en résumé actionnable et en angles de posts en cinq minutes — votre veille alimente enfin la production.",
  "prompt": "Voici un article : [coller le texte ou le lien]. Produis : 1) un résumé en 3 bullet points factuels, 2) le point le plus contre-intuitif ou surprenant de l'article, 3) trois angles de posts pour notre audience [décrire : professionnels du sport, fans, réseau de clubs], chacun avec l'accroche proposée et l'opinion qu'on pourrait défendre. Indique pour chaque angle le lien avec notre actualité [contexte du moment].",
  "conseil": "Toujours relier l'angle à votre actualité propre : un commentaire d'article sans ancrage local reste un partage de veille sans valeur.",
  "skill": null
 },
 {
  "id": "ligne-editoriale-video",
  "titre": "Formaliser la ligne éditoriale des contenus vidéo",
  "service": "marcom",
  "besoin": "redaction",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Vos contenus vidéo s'accumulent sans ligne directrice : formats disparates, tonalités qui varient selon le monteur, et aucun document de référence pour briefer un prestataire ou un nouvel arrivant.",
  "gain": "L'IA formalise votre ligne éditoriale vidéo à partir de l'existant — vous obtenez un document de référence opposable aux prestataires.",
  "prompt": "Formalise notre ligne éditoriale vidéo à partir de l'existant : [décrire ou lister les vidéos représentatives : format, durée, audience, performance]. Produis le document de référence : 1) piliers de contenu (3-4 familles avec leur objectif), 2) formats types par pilier (durée, structure, plateforme), 3) ton et codes visuels (rythme, musique, habillage, sous-titres), 4) grille de décision : quel format pour quelle actualité, 5) les interdits. Format : document de brief utilisable par un prestataire externe.",
  "conseil": "Tester la ligne éditoriale sur les 3 dernières vidéos produites : si elles n'y rentrent pas, c'est la ligne ou la production qu'il faut corriger.",
  "skill": null
 },
 {
  "id": "visuels-communication-courante",
  "titre": "Produire les visuels de communication courante en autonomie",
  "service": "marcom",
  "besoin": "visuels",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "club",
   "federation",
   "ligue"
  ],
  "preuve": "eprouve",
  "douleur": "Annonces de match, promotions, couvertures d'événements : la demande de visuels du quotidien dépasse la capacité du studio. Vos équipes attendent des jours pour un visuel simple, ou bricolent hors charte.",
  "gain": "L'IA permet à chaque équipe de produire ses visuels courants en quelques minutes, dans la charte — le studio se concentre sur les créations à forte valeur.",
  "prompt": "Crée un visuel pour [usage : annonce de match, promotion d'une offre, événement] au format [post carré / story / bannière]. Éléments : message principal [texte court], informations [date, lieu, prix], notre charte [couleurs, police, logo à placer]. Style : [décrire l'univers visuel maison]. Propose 3 variantes de composition et indique laquelle privilégier pour la lisibilité mobile.",
  "conseil": "Mettre à disposition des équipes un prompt type avec la charte intégrée : l'autonomie ne marche que si le cadre est fourni.",
  "skill": null
 },
 {
  "id": "personas-marketing",
  "titre": "Construire les personas marketing de la structure",
  "service": "marcom",
  "besoin": "analyse",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "club",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Vos campagnes s'adressent à un public indifférencié faute de personas formalisés : chacun a sa représentation implicite du fan ou du licencié type, et les messages ratent leurs cibles sans que vous sachiez pourquoi.",
  "gain": "L'IA construit en une session des personas documentés à partir de vos données réelles — vous validez ce qui est étayé et faites vérifier par enquête ce qui ne l'est pas.",
  "prompt": "Construis [4] personas marketing pour notre structure [sport, offre, territoire] à partir de ces données : [coller ce qui existe : stats billetterie, réseaux sociaux, enquêtes, profils licenciés]. Pour chaque persona : prénom fictif, profil sociodémographique, motivations et freins vis-à-vis de notre offre, canaux préférés, moment de consommation, et le message qui le ferait agir. Signale les personas construits sur des données faibles, à valider par enquête.",
  "conseil": "Distinguer ce qui vient des données de ce que l'IA extrapole : un persona inventé de toutes pièces oriente les campagnes dans le mauvais sens.",
  "skill": null
 },
 {
  "id": "post-institutionnel-vers-perso",
  "titre": "Reformuler un post institutionnel en post personnel de salarié",
  "service": "marcom",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "club",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Les posts de votre compte officiel portent moins que les posts personnels des équipes, mais demander aux salariés de relayer donne des copier-coller institutionnels sans authenticité, qui n'engagent personne.",
  "gain": "L'IA décline chaque annonce en versions personnelles crédibles par profil de salarié — chacun adapte la sienne en deux minutes avant de publier.",
  "prompt": "Voici notre post institutionnel : [coller]. Reformule-le en post personnel LinkedIn pour [profil du salarié : fonction, ancienneté, ce qu'il a fait sur le projet]. Le post parle à la première personne, raconte un détail vécu ou une coulisse [préciser si connu], donne un point de vue personnel, et mentionne la structure naturellement sans réciter l'annonce. 120 mots maximum, pas de jargon corporate, une question ouverte en fin de post.",
  "conseil": "Laisser chaque salarié modifier au moins une phrase avant publication : dix posts identiques signés de dix comptes différents ruinent l'effet.",
  "skill": null
 },
 {
  "id": "post-linkedin-prompt-maitre",
  "titre": "Rédiger un post LinkedIn complet avec un prompt maître",
  "service": "marcom",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "club",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Vous rédigez chaque post LinkedIn en partant d'une page blanche : le ton varie selon l'inspiration du jour, les bonnes pratiques s'appliquent de mémoire, et la production reste lente et irrégulière.",
  "gain": "Un prompt maître réutilisable produit des premiers jets constants en qualité et en voix — vous relisez et publiez.",
  "prompt": "Tu es le rédacteur de nos posts LinkedIn. Voix : [décrire : direct, concret, sans jargon] et voici 3 posts représentatifs de notre style : [coller]. Structure imposée : accroche de 1-2 lignes qui crée une tension, développement aéré (phrases courtes, un saut de ligne par idée), une preuve concrète (chiffre, exemple vécu), chute avec opinion ou question. Interdits : superlatifs creux, hashtags multiples, émojis en rafale. Sujet du jour : [décrire le sujet et les faits].",
  "conseil": "Sauvegarder le prompt maître et l'améliorer à chaque post réussi : c'est un actif qui se bonifie, pas un prompt jetable.",
  "skill": null
 },
 {
  "id": "indexation-phototheque",
  "titre": "Nommer et retrouver les photos de la photothèque",
  "service": "marcom",
  "besoin": "automatisation",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Des milliers de photos dorment dans votre photothèque sous des noms de fichiers cryptiques : retrouver la bonne image — tel athlète, tel événement, tel format — prend plus de temps que le shooting lui-même.",
  "gain": "L'IA décrit et indexe chaque image automatiquement — vous retrouvez la bonne photo par une recherche en langage naturel, sans ressaisie manuelle.",
  "prompt": "Passer le stock de photos par lot dans un modèle de vision (API ou interface) avec la consigne : « Pour chaque image, génère un nom de fichier descriptif [date_evenement_sujet_plan] et des mots-clés : discipline, type de plan, personnes (fonction, pas de nom sans validation), lieu, usage recommandé (web, print, réseaux). » Les métadonnées alimentent un index (tableur ou photothèque) interrogeable en langage naturel.",
  "conseil": "Traiter d'abord les photos des 12 derniers mois plutôt que tout l'historique : 80 % des recherches portent sur les images récentes.",
  "skill": null
 },
 {
  "id": "fiche-produit-merchandising",
  "titre": "Rédiger une fiche produit merchandising pour la boutique en ligne",
  "service": "billetterie",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club",
   "salle"
  ],
  "preuve": "eprouve",
  "douleur": "À chaque nouvelle collection, vous avez des dizaines de fiches produit à rédiger pour la boutique en ligne. Elles finissent en copier-coller des caractéristiques fournisseur, sans storytelling supporter.",
  "gain": "L'IA produit des fiches homogènes et vendeuses en série, en quelques minutes par référence — vous relisez et mettez en ligne.",
  "prompt": "Rédige la fiche produit e-commerce de [produit : maillot domicile, écharpe, textile enfant] pour la boutique officielle de [ma structure]. Caractéristiques : [matière, coupe, tailles, prix]. Structure attendue : un titre accrocheur, un paragraphe de 80 mots qui raconte le produit côté supporter, les caractéristiques techniques en liste, et une méta-description SEO de 155 caractères. Ton : [fier et populaire / premium].",
  "conseil": "Donner deux ou trois fiches existantes réussies en exemple pour caler le ton avant de lancer la production en série.",
  "skill": null
 },
 {
  "id": "analyse-kpis-ventes-merchandising",
  "titre": "Analyser les KPIs de vente merchandising et en tirer un plan d'action",
  "service": "billetterie",
  "besoin": "analyse",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club",
   "salle"
  ],
  "preuve": "teste",
  "douleur": "Vos exports de ventes s'accumulent dans Excel, mais personne n'a le temps d'en tirer des enseignements : le reporting se limite à un chiffre d'affaires global, sans plan d'action derrière.",
  "gain": "L'IA lit tout le fichier de ventes et vous propose cinq actions priorisées — vous arbitrez en une seule session de travail.",
  "prompt": "Voici l'export Excel des ventes de la boutique sur [période]. Analyse : meilleures et pires ventes par catégorie, évolution par rapport à [période précédente], panier moyen, effet des [matchs, résultats, lancements de collection]. Termine par un plan d'action de 5 mesures priorisées avec, pour chacune, l'indicateur qui permettra de vérifier son effet.",
  "conseil": "Supprimer les colonnes contenant des données clients (noms, mails) de l'export avant de le charger dans l'outil (vigilance données personnelles).",
  "skill": null
 },
 {
  "id": "rapport-cloture-billetterie",
  "titre": "Générer le rapport de clôture billetterie d'un événement",
  "service": "billetterie",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club",
   "salle"
  ],
  "preuve": "eprouve",
  "douleur": "Après chaque événement, votre clôture billetterie se résume à un export brut : le bilan mis en forme pour la direction arrive des semaines plus tard, quand il arrive.",
  "gain": "L'IA produit un rapport de clôture visuel et commenté dès le lendemain de l'événement — vous le présentez après une simple relecture.",
  "prompt": "Voici les données de clôture billetterie de [événement] : ventes par catégorie de places, par canal et par période, taux de remplissage, panier moyen. Produis un rapport de clôture d'une page : chiffres clés mis en avant, comparaison avec [l'édition ou le match précédent], 3 enseignements, 3 recommandations pour la prochaine édition. Mets-le en forme comme une page visuelle prête à présenter.",
  "conseil": "Garder exactement le même modèle de rapport d'un événement à l'autre : c'est ce qui rend les éditions comparables.",
  "skill": null
 },
 {
  "id": "suivi-ventes-billetterie",
  "titre": "Suivre les ventes de billetterie avec un tableau de bord automatisé",
  "service": "billetterie",
  "besoin": "donnees",
  "faisabilite": "complexe",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club",
   "salle"
  ],
  "preuve": "eprouve",
  "douleur": "Vous suivez les ventes à la demande, en rouvrant les exports de l'outil de billetterie : rythme, panier moyen et remplissage ne sont jamais visibles d'un coup d'œil, encore moins comparés au match équivalent de la saison passée.",
  "gain": "Le tableau de bord se met à jour tout seul et l'IA vous signale les matchs en retard de remplissage — vous décidez des actions au lieu d'extraire des données.",
  "prompt": "Un connecteur (type n8n) récupère régulièrement les ventes depuis l'outil de billetterie et alimente un tableau de bord : rythme des ventes par match, panier moyen, remplissage par catégorie, comparaison avec le match équivalent de la saison précédente. L'IA produit chaque semaine une synthèse commentée et signale les matchs dont les ventes décrochent. Dispositif à mettre en place en accompagnement, selon les exports que permet l'outil de billetterie.",
  "process": [
   "Vérifier que l'outil de billetterie permet un export automatique (API ou export planifié)",
   "Récupérer régulièrement les ventes via un connecteur (type n8n)",
   "Alimenter le tableau de bord : rythme des ventes, panier moyen, remplissage, comparaison saison précédente",
   "Produire chaque semaine une synthèse commentée",
   "Signaler les matchs dont les ventes décrochent"
  ],
  "conseil": "Vérifier d'abord que l'outil de billetterie permet un export automatique (API ou export planifié) : c'est le prérequis du dispositif.",
  "skill": null
 },
 {
  "id": "reponses-reclamations-billetterie",
  "titre": "Rédiger les réponses types aux réclamations billetterie",
  "service": "billetterie",
  "besoin": "mails",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "salle"
  ],
  "preuve": "demande",
  "douleur": "Match reporté, placement contesté, remboursement demandé : les réclamations billetterie reviennent en boucle et vous réécrivez chaque réponse à la main, avec un ton qui varie selon la fatigue du moment.",
  "gain": "L'IA constitue une bibliothèque de réponses types par motif de réclamation — vous personnalisez en quelques secondes, avec un ton constant.",
  "prompt": "Voici les 10 motifs de réclamation billetterie les plus fréquents chez nous : [lister]. Pour chacun, rédige une réponse type : accusé de réception empathique, explication claire de la règle applicable [coller les CGV concernées], solution ou prochaine étape concrète. Ton professionnel et apaisant, jamais défensif.",
  "conseil": "Coller les CGV applicables dans le prompt : une réponse empathique mais juridiquement fausse aggrave la réclamation.",
  "skill": null
 },
 {
  "id": "veille-tendances-merch",
  "titre": "Suivre les tendances marché et la concurrence merchandising",
  "service": "billetterie",
  "besoin": "veille",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Vos collections merchandising se construisent sans vision structurée de ce que font les autres organisations sportives ni des tendances de consommation : le catalogue vieillit et les paris produits se font à l'aveugle.",
  "gain": "L'IA vous livre un point de veille sourcé — tendances produits, prix pratiqués, bonnes idées de la concurrence — en une session avant chaque plan de collection ; vous le croisez avec vos propres chiffres de vente.",
  "prompt": "Analyse les tendances merchandising dans le sport pour préparer notre prochaine collection [sport, cible, gamme de prix] : produits qui émergent chez les organisations comparables [citer 4-5 références du même sport ou de sports voisins], tendances de consommation (matières responsables, lifestyle, éditions limitées), fourchettes de prix par catégorie. Cite tes sources. Termine par 5 opportunités produits argumentées pour notre structure et 3 erreurs à éviter.",
  "conseil": "Compléter la veille IA par les chiffres de vos propres ventes : une tendance générale peut être un échec sur votre public spécifique.",
  "skill": null
 },
 {
  "id": "visuels-ecommerce-packshot",
  "titre": "Produire les packshots et bannières de la boutique en ligne",
  "service": "billetterie",
  "besoin": "visuels",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Chaque nouveau produit exige packshot propre, bannière et visuel porté : un shooting par collection coûte cher, et entre deux shootings les nouveautés arrivent en boutique avec des photos amateurs qui vendent mal.",
  "gain": "L'IA produit des visuels e-commerce professionnels — fond propre, mise en situation, bannières — à partir de simples photos produit ; vous contrôlez logos et couleurs avant mise en ligne.",
  "prompt": "À partir de cette photo produit [photo simple du produit], produis les visuels e-commerce : 1) packshot sur fond neutre uniforme, ombres douces, produit centré, 2) mise en situation portée [profil du mannequin : supporter en contexte stade, lifestyle urbain] avec le produit strictement identique à l'original (couleurs, logos, coupe), 3) bannière promotionnelle [format] avec accroche [texte]. Rendu photographique cohérent avec une boutique officielle.",
  "conseil": "Contrôler chaque visuel généré : logos et sponsors sur le produit doivent rester exacts, c'est le point où l'IA se trompe le plus.",
  "skill": null
 },
 {
  "id": "checklist-controles-acces",
  "titre": "Formaliser la check-list des contrôles d'accès jour de match",
  "service": "billetterie",
  "besoin": "templates",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation",
   "club",
   "salle"
  ],
  "preuve": "eprouve",
  "douleur": "Les procédures de contrôle d'accès jour de match vivent dans la tête des responsables : chaque événement se prépare de mémoire, vous briefez les nouveaux agents à l'oral, et un oubli — accréditations, PMR, évacuation — se paie en incident.",
  "gain": "L'IA formalise la check-list et la procédure d'accès à partir de vos notes — vous les faites relire par le terrain, puis les réutilisez à chaque match et pour chaque nouvel agent.",
  "prompt": "Formalise la procédure de contrôle d'accès pour un jour de match : contexte [enceinte, jauges, types de billets et d'accréditations, points d'accès]. Produis : 1) la check-list chronologique (J-7, J-1, jour J avant ouverture, pendant, après), 2) la procédure par cas particulier (accréditations, PMR, VIP, incident de billet, évacuation), 3) le brief type d'un agent d'accueil en une page. Base-toi sur mes notes : [coller l'existant oral ou épars].",
  "conseil": "Faire relire la procédure par les agents de terrain avant de la figer : ce sont eux qui connaissent les cas tordus absents des notes.",
  "skill": null
 },
 {
  "id": "strategie-com-billetterie",
  "titre": "Bâtir la stratégie de communication billetterie par type d'événement",
  "service": "billetterie",
  "besoin": "analyse",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "club",
   "salle"
  ],
  "preuve": "teste",
  "douleur": "Tous vos événements reçoivent le même plan de communication billetterie, alors qu'une affiche premium se vend seule quand un match de milieu de semaine exige un plan d'attaque : les budgets promo se dispersent sans logique.",
  "gain": "L'IA construit depuis votre historique de ventes une typologie d'événements et le plan de communication adapté à chacun — vous concentrez les moyens là où la vente en a besoin.",
  "prompt": "À partir de notre historique de ventes par événement [coller : événement, catégorie, rythme de vente, remplissage final, actions promo menées], définis une typologie d'événements (vente naturelle, vente à accompagner, vente difficile) avec les critères d'affectation. Pour chaque type : le plan de communication adapté (canaux, calendrier de relances, intensité promo, offres à activer) et les indicateurs de déclenchement d'actions correctives en cours de vente.",
  "conseil": "Revalider la typologie chaque saison : un adversaire qui monte en gamme ou une nouvelle offre change la catégorie d'un événement.",
  "skill": null
 },
 {
  "id": "reporting-ventes-merch",
  "titre": "Mettre en forme le reporting depuis les données de ventes",
  "service": "billetterie",
  "besoin": "donnees",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "club",
   "salle"
  ],
  "preuve": "teste",
  "douleur": "Chaque semaine, vous transformez les données brutes de ventes en reporting pour la direction : extraction, tableaux croisés, graphiques, commentaires. Un rituel de plusieurs heures qui ne laisse plus de place à l'analyse.",
  "gain": "L'IA met en forme et commente le reporting hebdomadaire en quelques minutes — vous passez le temps gagné sur l'action commerciale.",
  "prompt": "Voici l'export brut des ventes de la semaine [coller : date, canal, référence, quantité, montant]. Produis le reporting hebdomadaire au format habituel : chiffre d'affaires par canal vs semaine précédente et vs même semaine N-1, top 10 des références, faits marquants en 5 bullet points, et alertes (baisse anormale, rupture probable). Ton factuel, chiffres arrondis lisibles, prêt à envoyer à la direction.",
  "conseil": "Donner à l'IA un exemple du reporting habituel la première fois : elle en reproduit la structure et le niveau de détail attendus.",
  "skill": null
 },
 {
  "id": "inspirations-activation-retail",
  "titre": "Trouver des inspirations d'activation retail innovantes",
  "service": "billetterie",
  "besoin": "veille",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "club",
   "salle"
  ],
  "preuve": "teste",
  "douleur": "Votre boutique et vos points de vente jour de match reconduisent les mêmes dispositifs. Sans inspiration extérieure structurée, les idées d'animation qui feraient venir et acheter vous manquent.",
  "gain": "L'IA vous constitue un vivier d'activations retail sourcées et adaptées à votre réalité — vous le renouvelez avant chaque temps fort commercial.",
  "prompt": "Recherche des activations retail innovantes réalisées par des organisations sportives ou des marques grand public transposables à notre boutique [contexte : boutique de stade, flagship, stands jour de match] : pop-up stores, personnalisation en boutique, expériences immersives, collaborations. Pour chaque exemple : qui, quoi, résultat connu, source. Adapte ensuite les 5 meilleures idées à notre réalité [surface, budget, affluence type] avec une estimation de mise en oeuvre.",
  "conseil": "Chercher aussi hors du sport (mode, gaming, culture) : les meilleures idées retail viennent rarement des autres clubs.",
  "skill": null
 },
 {
  "id": "segmentation-affluence-billetterie",
  "titre": "Segmenter l'affluence depuis les données de billetterie",
  "service": "billetterie",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "club",
   "salle"
  ],
  "preuve": "teste",
  "douleur": "Votre billetterie accumule des données riches — fréquence de venue, tribunes, paniers — que personne n'exploite. Au moment de cibler une campagne ou une offre de réabonnement, impossible de distinguer l'abonné fidèle du spectateur occasionnel.",
  "gain": "L'IA extrait de vos exports des segments actionnables (fidèles, occasionnels, dormants, primo-visiteurs) — vous ciblez enfin vos campagnes.",
  "prompt": "Voici l'export anonymisé de notre billetterie sur [période] : [coller : identifiant acheteur, dates d'achat, matchs, tribune, montant, canal]. Segmente les acheteurs : fidèles (critère à proposer), occasionnels, venus une seule fois, dormants (plus d'achat depuis [X] mois). Pour chaque segment : taille, panier moyen, comportement type, et l'action commerciale adaptée (réabonnement, relance, offre découverte). Signale les segments trop petits pour être ciblés.",
  "conseil": "Remplacer les données nominatives par des identifiants avant de charger l'export : la segmentation n'a pas besoin des noms.",
  "skill": null
 },
 {
  "id": "moodboard-collection-merch",
  "titre": "Créer le moodboard d'une collection et enrichir le brief produit",
  "service": "billetterie",
  "besoin": "visuels",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Le brief d'une nouvelle collection part chez le fournisseur avec quelques références écrites : sans moodboard visuel, les allers-retours de prototypes se multiplient parce que l'intention créative n'était pas partagée.",
  "gain": "L'IA génère le moodboard et enrichit le brief produit dès la première itération — vous cadrez le fournisseur avant le premier prototype, avec moins de prototypes ratés.",
  "prompt": "Crée un moodboard pour notre prochaine collection [thème : rétro, lifestyle, performance ; cible ; saison] : génère 6 images d'ambiance (matières, palettes de couleurs, styles portés en situation) cohérentes avec notre identité [couleurs, histoire du club ou de la fédération]. Puis enrichis ce brief produit : [coller le brief actuel]. Ajoute : direction artistique en 3 lignes, palette précise (codes couleurs), inspirations de coupes et matières, et les erreurs à éviter par rapport à la collection précédente [préciser les retours].",
  "conseil": "Les images générées servent d'intention, pas de spécification : joindre toujours la charte officielle des couleurs, l'IA dérive sur les teintes exactes.",
  "skill": null
 },
 {
  "id": "essayage-virtuel-mannequins",
  "titre": "Créer des essayages virtuels sur mannequins générés",
  "service": "billetterie",
  "besoin": "visuels",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Montrer chaque produit porté par des profils variés — homme, femme, enfant, morphologies différentes — exigerait des shootings multiples hors de prix : votre boutique en ligne affiche le même mannequin partout, ou pas de porté du tout.",
  "gain": "L'IA présente chaque référence portée par plusieurs profils de mannequins virtuels, sans shooting supplémentaire — vous contrôlez la fidélité des couleurs et des logos avant mise en ligne.",
  "prompt": "À partir de ce packshot [photo du produit à plat ou sur cintre], génère le produit porté par un mannequin virtuel : profil [genre, tranche d'âge, morphologie], pose naturelle de catalogue, fond studio neutre. Le produit doit rester strictement fidèle : couleurs exactes, logos et sponsors lisibles et non déformés, coupe respectée. Décline sur [3] profils différents pour la même référence.",
  "conseil": "Mentionner en boutique que les visuels portés sont générés numériquement : la transparence évite les retours pour différence perçue et les polémiques.",
  "skill": null
 },
 {
  "id": "descriptifs-offres-billetterie",
  "titre": "Rédiger les descriptifs d'événements et d'offres billetterie",
  "service": "billetterie",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "club",
   "salle"
  ],
  "preuve": "teste",
  "douleur": "Chaque événement mis en vente exige ses descriptifs : page billetterie, texte court pour les réseaux, version newsletter. Les rédiger un par un pour des dizaines d'événements par saison vous consomme des journées entières.",
  "gain": "L'IA décline tous les descriptifs d'un événement en une passe, dans un ton homogène sur toute la saison — vous relisez et publiez.",
  "prompt": "Rédige les descriptifs de vente pour cet événement : [match ou spectacle, date, enjeu sportif, offres disponibles avec prix]. Déclinaisons : page billetterie (150 mots, arguments de venue, infos pratiques), post réseaux sociaux (30 mots, urgence), bloc newsletter (60 mots), méta-description SEO (155 caractères). Ton : [enthousiaste mais factuel], toujours terminer par l'appel à l'action. Voici un descriptif validé comme référence de style : [coller].",
  "conseil": "Regrouper la production par lot de matchs en début de mois : la cohérence de ton se gère mieux en une session qu'au fil de l'eau.",
  "skill": null
 },
 {
  "id": "retroplanning-evenement",
  "titre": "Construire le rétroplanning d'un match ou d'un événement sportif",
  "service": "evenementiel",
  "besoin": "templates",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite",
   "salle"
  ],
  "preuve": "eprouve",
  "douleur": "Chaque match ou événement repart d'une page blanche : vous reconstruisez les mêmes jalons de mémoire, avec le risque d'oublier une échéance critique — sécurité, prestataires, accréditations.",
  "gain": "L'IA génère un rétroplanning complet et daté en quelques minutes — vous n'avez plus qu'à l'ajuster à votre édition.",
  "prompt": "Je suis responsable de l'organisation de [type d'événement : match, tournoi, gala] prévu le [date] à [lieu], avec une jauge de [nombre] personnes. Construis un rétroplanning sous forme de tableau : jalon, échéance (en semaines avant le jour J), responsable, livrable attendu. Couvre : logistique et réservations, prestataires, sécurité, billetterie, communication, accréditations, protocole. Signale les jalons critiques à ne manquer sous aucun prétexte.",
  "conseil": "Fournir à l'IA le bilan ou le rétroplanning d'une édition précédente améliore nettement la pertinence des jalons.",
  "skill": null
 },
 {
  "id": "briefing-prestataires-post-reunion",
  "titre": "Briefer les prestataires par mail après une réunion de coordination",
  "service": "evenementiel",
  "besoin": "mails",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "salle"
  ],
  "preuve": "teste",
  "douleur": "Après chaque réunion de coordination, vous rédigez un mail sur mesure pour chaque prestataire — traiteur, sécurité, technique. Une rédaction répétitive où le moindre oubli se paie le jour J.",
  "gain": "L'IA rédige tous les mails de briefing à partir de vos notes de réunion — vous les relisez et les envoyez dans les minutes qui suivent.",
  "prompt": "Voici mes notes de la réunion de coordination de [événement] du [date] : [notes ou transcription]. Rédige un mail de briefing distinct pour chaque prestataire concerné ([liste : traiteur, sécurité, technique…]) : rappel du contexte, décisions qui le concernent, actions attendues avec échéances, point de contact. Ton professionnel et direct, un mail par prestataire.",
  "conseil": "Enregistrer la réunion de coordination et partir de la transcription plutôt que de notes éparses.",
  "skill": null
 },
 {
  "id": "cahier-des-charges-prestataire",
  "titre": "Rédiger le cahier des charges d'une prestation événementielle",
  "service": "evenementiel",
  "besoin": "templates",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "salle"
  ],
  "preuve": "eprouve",
  "douleur": "Rédiger un cahier des charges ou un appel d'offres prestataire est un exercice long dont la qualité dépend de qui s'y colle : périmètre flou, critères d'évaluation absents, et des réponses ensuite difficiles à exploiter.",
  "gain": "L'IA structure un cahier des charges et un appel d'offres complets en une session de travail — vous ne faites plus que valider le périmètre et les critères.",
  "prompt": "Rédige le cahier des charges pour une prestation de [type : sécurité, traiteur, accueil, technique…] lors de [événement, date, lieu, jauge]. Structure : contexte et enjeux, périmètre détaillé de la prestation, exigences opérationnelles le jour J, contraintes du site, livrables attendus, planning, critères de sélection pondérés, format de réponse imposé aux candidats. Pose-moi d'abord les questions nécessaires pour combler les informations manquantes avant de rédiger.",
  "conseil": "Imposer un format de réponse identique à tous les candidats facilite énormément la comparaison des offres ensuite.",
  "skill": null
 },
 {
  "id": "comparaison-reponses-ao",
  "titre": "Comparer des réponses d'appel d'offres hétérogènes",
  "service": "evenementiel",
  "besoin": "analyse",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Chaque candidat répond dans son propre format : des dizaines de pages hétérogènes à lire, et une comparaison que vous faites de mémoire ou dans un tableau reconstruit à la main.",
  "gain": "L'IA produit une grille comparative homogène — prix, périmètre, garanties — vous n'avez plus qu'à vérifier les chiffres avant d'arbitrer.",
  "prompt": "Voici [nombre] réponses à notre appel d'offres [objet de la prestation] (documents joints). Construis un tableau comparatif : prix total et détail, périmètre couvert, exclusions, garanties et pénalités, références comparables, délais. Ajoute une ligne « points de vigilance » par candidat et signale toute information manquante plutôt que de la deviner.",
  "conseil": "Toujours vérifier les chiffres extraits dans les documents d'origine avant d'arbitrer.",
  "skill": null
 },
 {
  "id": "checklist-jour-j",
  "titre": "Créer la checklist logistique d'un jour de match ou d'un rassemblement",
  "service": "evenementiel",
  "besoin": "templates",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club",
   "salle"
  ],
  "preuve": "eprouve",
  "douleur": "La logistique de vos jours de match ou de rassemblement repose sur la mémoire de quelques personnes expérimentées : rien n'est formalisé, et chaque absence met l'organisation en risque.",
  "gain": "L'IA formalise des checklists complètes et réutilisables — vous les faites valider par le terrain, puis elles sécurisent chaque événement, même en cas d'absence.",
  "prompt": "Crée la checklist logistique complète pour [type : jour de match, rassemblement d'équipe] impliquant [nombre] personnes à [lieu, dates]. Organise par phase (J-7, veille, jour J matin, pendant, après) et par domaine (transport, hébergement, restauration, équipements, accueil, sécurité). Format tableau avec case à cocher, responsable et heure limite pour chaque item.",
  "conseil": "Faire relire la checklist générée par la personne la plus expérimentée de l'équipe : l'IA structure, le terrain valide.",
  "skill": null
 },
 {
  "id": "deplacements-collectifs",
  "titre": "Organiser un déplacement collectif : itinéraires et devis",
  "service": "evenementiel",
  "besoin": "automatisation",
  "faisabilite": "complexe",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Organiser les déplacements d'équipes ou de délégations — itinéraires, hôtels, trains, avions — vous mobilise des journées de recherche et d'allers-retours de devis pour chaque compétition.",
  "gain": "L'IA compile les options d'itinéraires et prépare les demandes de devis — vous ne faites plus qu'arbitrer et réserver.",
  "prompt": "Dispositif : un assistant IA avec recherche web compile pour chaque déplacement les itinéraires possibles (train, avion, car) avec horaires et ordres de prix, puis génère les demandes de devis personnalisées à envoyer aux hôtels et transporteurs. Les réponses reçues sont consolidées dans un tableau comparatif unique, prêt pour l'arbitrage et la réservation.",
  "process": [
   "Compiler les itinéraires possibles (train, avion, car) avec horaires et ordres de prix",
   "Générer les demandes de devis personnalisées pour les hôtels et transporteurs",
   "Consolider les réponses reçues dans un tableau comparatif unique",
   "Arbitrer et réserver"
  ],
  "conseil": "Vigilance données personnelles : ne pas transmettre de listes nominatives de participants à un outil grand public sans cadre validé.",
  "skill": null
 },
 {
  "id": "scenarios-gestion-crise",
  "titre": "Élaborer les scénarios de gestion de crise du jour J",
  "service": "evenementiel",
  "besoin": "analyse",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club",
   "salle"
  ],
  "preuve": "demande",
  "douleur": "Le jour J, un incident — panne technique, intempérie, mouvement de foule, défaillance d'un prestataire — se gère dans l'urgence : sans scénarios préparés, chacun improvise et les décisions critiques prennent trop de temps.",
  "gain": "L'IA rédige des fiches réflexes par scénario de crise — vous les faites relire au référent sécurité avant l'événement, au lieu d'improviser pendant.",
  "prompt": "Je prépare [événement] accueillant [jauge] personnes à [lieu]. À partir du dispositif suivant : [description : site, prestataires, effectifs, horaires], identifie les dix scénarios de crise les plus probables (météo, technique, sécurité, transport, sanitaire). Pour chacun, rédige une fiche réflexe : signaux d'alerte, première décision à prendre, qui décide, qui prévenir, message type aux équipes et au public.",
  "conseil": "Faire relire les fiches par le référent sécurité et les tester lors d'un briefing d'avant-événement.",
  "skill": null
 },
 {
  "id": "deroule-livret-seminaire",
  "titre": "Construire le déroulé et le livret d'un séminaire de cadres",
  "service": "evenementiel",
  "besoin": "templates",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "teste",
  "douleur": "À chaque édition, vous reconstruisez le livret du séminaire de direction : trame du programme, contenus des journées, mise au format maison — plusieurs jours de travail alors que la structure du document ne change presque pas.",
  "gain": "L'IA propose la trame du programme, l'affine avec vous par questions et génère le livret au format maison — vous ne complétez plus que ce qui manque.",
  "prompt": "Nous organisons un séminaire pour [public] du [dates]. Étape 1 : propose une trame de programme (séquences, horaires, objectifs par séquence). Étape 2 : pose-moi des questions pour affiner la trame. Étape 3 : quand j'aurai validé, génère le livret complet en t'appuyant sur notre modèle joint. Là où le contenu manque, mets des XXX. Fais les étapes une par une.",
  "conseil": "Faire les étapes une par une et valider la trame avant de générer le livret : c'est ce qui évite de retravailler un document entier.",
  "skill": null
 },
 {
  "id": "guide-logistique-delegations",
  "titre": "Rédiger le guide logistique des délégations d'un événement",
  "service": "evenementiel",
  "besoin": "templates",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "federation"
  ],
  "preuve": "demande",
  "douleur": "Pour chaque événement international, vous réécrivez le guide remis aux délégations — transports, hébergements, accréditations, contacts — depuis celui de l'édition précédente, avec le risque de laisser une information périmée au milieu.",
  "gain": "L'IA génère le guide depuis votre trame et les données de l'édition, et liste ce qu'elle n'a pas pu mettre à jour — vous ne vérifiez plus que ces points.",
  "prompt": "Voici le guide délégations de notre précédente édition et les informations de la nouvelle : [joindre les deux]. Génère le nouveau guide en conservant exactement la structure du modèle, en remplaçant toutes les informations datées (lieux, horaires, contacts, navettes) et en listant à part chaque information de l'ancien guide que tu n'as pas pu mettre à jour.",
  "conseil": "Exiger la liste à part des informations non mises à jour : c'est elle que l'on vérifie en priorité, pas le guide entier.",
  "skill": null
 },
 {
  "id": "rooming-list-deplacement",
  "titre": "Mettre en forme la rooming list d'un déplacement depuis des données brutes",
  "service": "evenementiel",
  "besoin": "donnees",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation"
  ],
  "preuve": "demande",
  "douleur": "Avant chaque déplacement, vous construisez la rooming list à la main depuis des listes hétérogènes — inscriptions, contraintes de chambres, arrivées décalées — et chaque changement de dernière minute vous oblige à tout repasser en revue.",
  "gain": "L'IA génère une rooming list propre depuis les données brutes et la met à jour en quelques secondes à chaque changement — vous n'arbitrez plus que les cas non résolus.",
  "prompt": "Voici la liste des participants au déplacement avec leurs contraintes : [coller les données brutes]. Génère la rooming list au format de l'hôtel : répartition par chambre en respectant [contraintes : chambres simples/doubles, groupes, encadrants], dates d'arrivée et de départ par personne, et liste séparée des cas non résolus à arbitrer.",
  "conseil": "Vigilance données personnelles : ne pas coller de liste nominative de participants dans un outil grand public sans cadre validé.",
  "skill": null
 },
 {
  "id": "extraire-conditions-contrat-hotel",
  "titre": "Extraire les tarifs et conditions d'annulation d'un contrat hôtelier",
  "service": "evenementiel",
  "besoin": "documents-longs",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation",
   "club"
  ],
  "preuve": "demande",
  "douleur": "Chaque contrat hôtelier d'un déplacement ou d'un événement cache ses tarifs, échéances de paiement et pénalités d'annulation dans des pages de conditions générales — et c'est au moment d'annuler que vous découvrez la clause qui coûte cher.",
  "gain": "L'IA extrait les conditions clés de chaque contrat dans un tableau comparatif, clause citée à l'appui — vous vérifiez avant de signer, pas après.",
  "prompt": "Voici un contrat hôtelier : [joindre le PDF]. Extrais dans un tableau : tarifs par typologie de chambre, conditions et échéances de paiement, dates limites et pénalités d'annulation (par palier), prestations incluses, clauses inhabituelles ou défavorables. Cite la clause exacte pour chaque ligne afin que je puisse vérifier.",
  "conseil": "Exiger la citation de la clause exacte pour chaque ligne du tableau : c'est ce qui permet de vérifier dans le contrat avant de signer.",
  "skill": null
 },
 {
  "id": "traduction-docs-operationnels",
  "titre": "Traduire les documents opérationnels d'un événement",
  "service": "evenementiel",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Vos événements internationaux exigent les documents opérationnels — programmes, consignes, feuilles de route — en plusieurs langues : la traduction humaine coûte cher et arrive tard, alors que ces documents changent jusqu'au dernier moment.",
  "gain": "L'IA retraduit les documents en quelques minutes à chaque mise à jour, dans un vocabulaire événementiel correct — vous ne faites relire que les passages qu'elle signale comme ambigus.",
  "prompt": "Traduis ce document opérationnel en [langues] : [coller le document : programme, consignes, feuille de route]. Contraintes : vocabulaire événementiel professionnel, noms propres et horaires inchangés, mise en forme conservée (titres, tableaux, numérotation), et glossaire imposé pour les termes récurrents : [coller le glossaire : lieux, fonctions, intitulés officiels]. Signale les passages ambigus en français qui risquent un contresens.",
  "conseil": "Retirer les données personnelles (noms, téléphones des participants) avant de charger le document dans un outil grand public : les consignes se traduisent, pas les listings.",
  "skill": null
 },
 {
  "id": "recherche-hebergements",
  "titre": "Rechercher les hébergements adaptés à un déplacement",
  "service": "evenementiel",
  "besoin": "veille",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "comite"
  ],
  "preuve": "teste",
  "douleur": "Trouver les hébergements adaptés à chaque déplacement — capacité de groupe, proximité du site, budget, petit-déjeuner tôt — repart de zéro à chaque destination : des heures de recherche sur les plateformes pour appliquer toujours les mêmes critères.",
  "gain": "L'IA vous présélectionne les hébergements pertinents par destination en quelques minutes — il ne vous reste que la vérification, la négociation et la réservation.",
  "prompt": "Recherche des hébergements pour un groupe de [taille] à [destination] du [dates] : critères impératifs [distance maximale du site de compétition, budget par nuit, chambres multiples, petit-déjeuner avant [heure], parking bus], critères souhaités [salle de réunion, restauration groupe]. Pour chaque option : capacité, distance au site, tarif indicatif, points forts et faibles vs nos critères, coordonnées. Classe par pertinence et cite tes sources.",
  "conseil": "Vérifier disponibilité et tarifs en direct avant toute annonce interne : les informations des recherches IA datent parfois de plusieurs mois.",
  "skill": null
 },
 {
  "id": "signaletique-multilingue",
  "titre": "Produire la signalétique multilingue d'un événement",
  "service": "evenementiel",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "salle"
  ],
  "preuve": "teste",
  "douleur": "La signalétique d'un événement international se décline en plusieurs langues : vous envoyez à des prestataires des textes de quelques mots, avec des allers-retours interminables et des panneaux erronés découverts à l'installation.",
  "gain": "L'IA traduit et vérifie l'ensemble des textes de signalétique en une session, aux standards de l'affichage public — vous ne faites relire que les textes de sécurité par un locuteur natif.",
  "prompt": "Voici la liste des textes de signalétique de l'événement : [coller : directions, zones, consignes, interdictions]. Traduis chaque texte en [langues] avec les contraintes de la signalétique : formulations courtes et standards internationaux de l'affichage public (pas de traduction littérale), cohérence du même terme partout (glossaire : [zones et lieux officiels]). Produis le tableau texte source / traductions / remarques, et signale les textes trop longs pour un panneau.",
  "conseil": "Faire relire uniquement les textes de sécurité (évacuation, interdictions) par un locuteur natif : c'est là qu'une erreur engage la responsabilité de l'organisateur.",
  "skill": null
 },
 {
  "id": "convocations-deplacements",
  "titre": "Générer les convocations pour les déplacements d'équipes",
  "service": "evenementiel",
  "besoin": "templates",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Chaque déplacement d'équipe exige ses convocations individuelles : les mêmes informations recopiées du tableau logistique, mises en forme une par une. Une erreur d'horaire ou de destinataire, et c'est un raté le jour du départ.",
  "gain": "L'IA génère toutes les convocations d'un déplacement d'un coup depuis le tableau logistique — et vous signale les incohérences avant qu'elles ne partent.",
  "prompt": "Voici le tableau du déplacement [coller : participants, rôles, horaires de convocation, lieu de rendez-vous, transport, hébergement, consignes] et notre modèle de convocation [coller le modèle]. Génère une convocation par participant en remplissant le modèle avec ses informations propres. Signale les participants dont des informations manquent ou sont incohérentes (horaire antérieur au départ, hébergement absent) au lieu de deviner.",
  "conseil": "Faire lister par l'IA les incohérences du tableau source avant génération : c'est le meilleur moment pour attraper les erreurs de saisie.",
  "skill": null
 },
 {
  "id": "visuel-process-parcours",
  "titre": "Dessiner le visuel d'un process ou d'un parcours spectateur",
  "service": "evenementiel",
  "besoin": "visuels",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "club",
   "salle"
  ],
  "preuve": "teste",
  "douleur": "Parcours spectateur, circuit de validation, organigramme jour J : ces schémas indispensables aux briefs restent dans les têtes ou sur des paperboards photographiés, faute de temps pour les mettre au propre.",
  "gain": "L'IA transforme votre description en schéma de flux clair et modifiable en quelques minutes — vous briefez sur un support propre.",
  "prompt": "Transforme cette description en schéma de flux : [décrire : les étapes du parcours spectateur de l'arrivée au placement, ou le circuit de validation d'une décision jour J]. Représente : les étapes dans l'ordre, les points de décision (losanges) avec leurs alternatives, les acteurs responsables par étape (couloirs), et les points de friction connus [préciser] mis en évidence. Format lisible en une page, légende incluse.",
  "conseil": "Faire générer d'abord la liste des étapes en texte et la valider avant le schéma : corriger une liste coûte moins cher que redessiner un diagramme.",
  "skill": null
 },
 {
  "id": "suivi-factures-evenement",
  "titre": "Contrôler les factures et le budget d'un événement",
  "service": "evenementiel",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Les factures fournisseurs de votre événement arrivent en ordre dispersé : les rapprocher des devis et du budget est si fastidieux que les dépassements se découvrent à la clôture, trop tard pour réagir.",
  "gain": "L'IA contrôle chaque facture contre son devis à l'arrivée et tient l'état budgétaire à jour — vous arbitrez les dépassements pendant l'événement, pas après.",
  "prompt": "Voici le budget de l'événement par poste [coller], les devis validés [coller ou joindre] et les factures reçues cette semaine [joindre]. Pour chaque facture : rapproche-la du devis correspondant, signale les écarts (montant, prestations ajoutées, conditions modifiées), et impute-la au poste budgétaire. Produis l'état à date : consommé vs budget par poste, engagements restants, projection d'atterrissage et alertes de dépassement.",
  "conseil": "Traiter les factures par lot hebdomadaire pendant l'événement : le contrôle en continu transforme les mauvaises surprises de clôture en arbitrages à temps.",
  "skill": null
 },
 {
  "id": "presentation-briefing-jour-j",
  "titre": "Monter la présentation de briefing des équipes du jour J",
  "service": "evenementiel",
  "besoin": "templates",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "salle"
  ],
  "preuve": "teste",
  "douleur": "Le briefing général de veille d'événement exige une présentation qui synthétise tout le dispositif : planning, rôles, consignes, urgences. Vous la montez la veille au soir en compilant des documents épars, avec des incohérences entre versions.",
  "gain": "L'IA assemble la présentation de briefing en une heure depuis vos documents opérationnels — et vous signale les contradictions entre les sources.",
  "prompt": "Monte la présentation de briefing des équipes pour [événement, date] à partir de : [coller : planning général, organigramme jour J, consignes par zone, procédures d'urgence, contacts]. Structure : vue d'ensemble et objectifs, planning de la journée heure par heure, qui fait quoi et où (par équipe), consignes clés par zone, procédure en cas d'incident, contacts essentiels. Une idée par slide, texte minimal, l'information critique en gros. Signale les contradictions entre les documents sources.",
  "conseil": "Faire remonter les contradictions détectées aux responsables avant le briefing : c'est souvent là que se cachent les couacs du lendemain.",
  "skill": null
 },
 {
  "id": "suivi-avancement-organisation",
  "titre": "Construire l'outil de suivi d'avancement d'une organisation",
  "service": "evenementiel",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "L'organisation d'un grand événement avance sur des dizaines de chantiers parallèles. Sans outil de suivi consolidé, vous courez après les statuts et les retards se découvrent en réunion, pas avant.",
  "gain": "L'IA met à jour le tableau de bord depuis vos notes de réunion et fait remonter les alertes seules — quelques minutes par semaine suffisent à tenir le suivi.",
  "prompt": "Construis l'outil de suivi de l'organisation de [événement, date] : voici les chantiers et leurs jalons [coller : billetterie, sécurité, hospitalité, communication, logistique avec leurs échéances]. Produis : la structure du tableau de suivi (chantier, jalon, responsable, échéance, statut, risque), puis chaque semaine à partir de mes notes de réunion [coller], mets à jour les statuts, calcule le retard par jalon et produis la synthèse : ce qui avance, ce qui bloque, les 3 alertes de la semaine.",
  "conseil": "Nourrir la mise à jour avec les notes de réunion brutes plutôt que ressaisir les statuts : la friction de saisie est ce qui tue les outils de suivi.",
  "skill": null
 },
 {
  "id": "optimisation-vehicules-chauffeurs",
  "titre": "Optimiser l'affectation des véhicules et chauffeurs",
  "service": "evenementiel",
  "besoin": "analyse",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Affecter véhicules et chauffeurs aux navettes d'un événement sous contraintes — horaires, amplitudes légales, capacités, priorités VIP — se fait sur tableur, à tâtons. Des heures de casse-tête pour un planning fragile au premier aléa.",
  "gain": "L'IA produit un planning d'affectation optimisé en quelques minutes et le recalcule à chaque aléa — en respectant les contraintes légales des chauffeurs.",
  "prompt": "Optimise l'affectation véhicules/chauffeurs pour [événement] : demandes de transport [coller : trajets, horaires, nombre de passagers, priorité], flotte [véhicules et capacités], chauffeurs [disponibilités, amplitudes maximales, temps de pause obligatoires]. Produis le planning par chauffeur et par véhicule, signale les demandes non satisfaites avec une alternative (regroupement, taxi externe), et liste les marges disponibles pour absorber les aléas.",
  "conseil": "Faire poser par l'IA la liste de ses hypothèses (temps de trajet, battements) et les corriger avec le terrain : l'optimisation vaut ce que valent les temps de parcours.",
  "skill": null
 },
 {
  "id": "synthese-cdc-appel-offres",
  "titre": "Synthétiser le cahier des charges d'un appel d'offres",
  "service": "evenementiel",
  "besoin": "documents-longs",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "salle"
  ],
  "preuve": "teste",
  "douleur": "Chaque appel d'offres arrive avec des dizaines de pages de cahier des charges : en extraire les exigences réelles, les critères de notation et les pièges avant de décider de répondre vous prend une journée de lecture.",
  "gain": "L'IA produit une fiche de décision — exigences, critères, points de vigilance, avec la page citée pour chaque point — et vous décidez de répondre en une heure.",
  "prompt": "Voici le cahier des charges d'un appel d'offres : [joindre le document]. Produis la fiche de décision : 1) l'objet et le périmètre exact de la prestation, 2) les exigences impératives vs souhaitables, 3) les critères de notation et leur pondération, 4) le calendrier et les livrables de réponse, 5) les points de vigilance (clauses inhabituelles, pénalités, exigences coûteuses cachées), 6) les informations manquantes à demander. Cite la page pour chaque point clé.",
  "conseil": "Exiger la référence de page pour chaque exigence citée : c'est ce qui permet de vérifier en dix minutes que la synthèse est fidèle.",
  "skill": null
 },
 {
  "id": "rationalisation-fichiers-evenement",
  "titre": "Rationaliser les fichiers Excel de gestion événementielle",
  "service": "evenementiel",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "comite",
   "salle"
  ],
  "preuve": "teste",
  "douleur": "Votre gestion d'événement s'étale sur des dizaines de fichiers Excel accumulés au fil des éditions : doublons, versions contradictoires, formules cassées — et personne n'ose supprimer un fichier de peur de perdre une donnée.",
  "gain": "L'IA cartographie les doublons et les contradictions puis propose une architecture cible avec plan de migration — vous migrez un type de donnée à la fois, sans perte.",
  "prompt": "Voici la liste de nos fichiers de gestion événementielle avec leurs onglets et ce qu'ils contiennent : [coller l'inventaire, ou les fichiers un par un]. Analyse : quelles données sont dupliquées entre fichiers, lesquelles se contredisent, quels fichiers sont obsolètes. Propose une architecture cible : quels fichiers garder, avec quels onglets, qui est la source de vérité pour chaque donnée (participants, budget, planning, prestataires), et le plan de migration étape par étape sans perte.",
  "conseil": "Migrer un type de donnée à la fois (d'abord les participants, puis le budget) : une refonte totale d'un coup ne survit pas au premier événement sous pression.",
  "skill": null
 },
 {
  "id": "cartographie-hotels-delegations",
  "titre": "Cartographier les hôtels pour placer les délégations",
  "service": "evenementiel",
  "besoin": "donnees",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Affecter les délégations aux hôtels suppose de croiser capacités, distances aux sites, budgets et niveaux de gamme : sans vue consolidée, vous affectez à tâtons et renégociez plusieurs fois.",
  "gain": "L'IA consolide la cartographie des hôtels — capacité, distance, gamme, coût — et propose une affectation argumentée dès le premier tour ; vous arbitrez les conflits signalés.",
  "prompt": "Voici les hôtels disponibles [coller : nom ou code, adresse, capacité, gamme, tarif négocié] et les sites de l'événement [adresses]. Calcule pour chaque hôtel la distance et le temps de trajet vers chaque site. Produis : le tableau de synthèse trié par pertinence, puis une proposition d'affectation des délégations [coller : taille, budget, exigences de chaque délégation] qui minimise les trajets sous contrainte de budget et de gamme. Justifie chaque affectation et signale les conflits.",
  "conseil": "Garder un hôtel tampon non affecté dans la cartographie : les délégations qui grossissent au dernier moment sont la règle, pas l'exception.",
  "skill": null
 },
 {
  "id": "checklists-lots-prestataires",
  "titre": "Générer les checklists de vérification par lot prestataire",
  "service": "evenementiel",
  "besoin": "templates",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "salle"
  ],
  "preuve": "teste",
  "douleur": "Chaque lot prestataire — traiteur, sécurité, technique, propreté — doit être contrôlé à l'installation et pendant l'événement, mais les points de contrôle restent dans votre tête : les vérifications dépendent de qui est disponible.",
  "gain": "L'IA génère une checklist de contrôle par lot, alignée sur le cahier des charges de chaque prestataire — n'importe quel membre de l'équipe peut vérifier.",
  "prompt": "Génère les checklists de vérification par lot prestataire pour [événement] : voici les cahiers des charges ou contrats de chaque lot [coller ou joindre : traiteur, sécurité, technique, propreté]. Pour chaque lot : points de contrôle à l'installation (conformité au contrat), contrôles pendant l'événement avec leur fréquence, critères de réception en fin d'événement. Chaque point : formulation vérifiable oui/non, référence à la clause du contrat, photo à prendre si utile pour le contentieux.",
  "conseil": "Formuler chaque point pour qu'un non-spécialiste puisse répondre oui ou non : une checklist qui exige un expert ne sert que quand l'expert est là.",
  "skill": null
 },
 {
  "id": "dossier-candidature-evenement",
  "titre": "Monter le dossier de candidature à l'organisation d'un événement",
  "service": "evenementiel",
  "besoin": "templates",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club"
  ],
  "preuve": "eprouve",
  "douleur": "Candidater à l'organisation d'un événement exige un dossier lourd — concept, infrastructures, budget, garanties, héritage : des semaines de rédaction en compilant des pièces éparses, souvent au détriment du fond stratégique.",
  "gain": "L'IA structure et rédige le dossier en quelques sessions et signale les exigences mal couvertes — vous réinvestissez le temps gagné sur le concept et le lobbying.",
  "prompt": "Monte le dossier de candidature pour l'organisation de [événement] à [lieu, dates] : voici le cahier des charges de l'attributeur [joindre] et nos éléments [coller : infrastructures, expérience, budget prévisionnel, soutiens]. Structure le dossier selon les attentes du cahier des charges, rédige chaque section en valorisant nos atouts, chiffre ce qui doit l'être, et signale les exigences auxquelles nous répondons mal avec une stratégie de compensation pour chacune.",
  "conseil": "Traiter d'abord les exigences mal couvertes : c'est la stratégie de compensation qui se travaille, la rédaction du reste n'est que de la mise en forme.",
  "skill": null
 },
 {
  "id": "qualification-base-hotels",
  "titre": "Qualifier une base de milliers d'hôtels dans le CRM",
  "service": "evenementiel",
  "besoin": "automatisation",
  "faisabilite": "complexe",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Votre base fournisseurs contient des milliers d'hôtels aux fiches incomplètes ou périmées : impossible de requêter par capacité ou équipements, et chaque recherche de destination repart d'une base inutilisable.",
  "gain": "Le workflow qualifie et enrichit la base au fil de l'eau, avec un statut de fiabilité par fiche — vous ne vérifiez à la main que les fiches douteuses.",
  "prompt": "Un workflow (n8n ou équivalent) parcourt la base CRM par lots, et pour chaque hôtel interroge un modèle IA avec accès web : « Vérifie et complète cette fiche hôtel [nom, ville, données actuelles] : capacité de chambres, gamme, salles de réunion, parking bus, distance aux principaux sites de la ville, contact commercial groupe. Cite ta source et sa date, réponds au format JSON strict. » Les réponses alimentent les champs du CRM avec un statut de fiabilité, et les fiches sans source récente partent en file de vérification manuelle.",
  "process": [
   "Parcourir la base CRM par lots via un workflow automatisé",
   "Interroger pour chaque hôtel un modèle IA avec accès web : capacité, gamme, salles, parking bus, distances, contact groupe",
   "Exiger la source et sa date, en réponse au format JSON strict",
   "Alimenter les champs du CRM avec un statut de fiabilité",
   "Envoyer les fiches sans source récente en file de vérification manuelle"
  ],
  "conseil": "Traiter la base par vagues en commençant par les destinations récurrentes : qualifier les 500 hôtels utiles vaut mieux que les 6 000 théoriques.",
  "skill": null
 },
 {
  "id": "grille-evaluation-joueur",
  "titre": "Créer une grille d'évaluation joueur standardisée pour le recrutement",
  "service": "sportif",
  "besoin": "templates",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "club",
   "federation"
  ],
  "preuve": "eprouve",
  "douleur": "Vos évaluations de joueurs varient d'un scout à l'autre : critères implicites, échelles différentes, priorités non hiérarchisées. Au moment de décider, les profils ne sont pas comparables.",
  "gain": "L'IA construit une grille commune — critères notés sur 10, priorité de recrutement A/B/C — que vous affinez avec vos scouts avant de la déployer.",
  "prompt": "Je suis responsable du recrutement d'un club de [sport] évoluant en [championnat]. Construis une fiche d'évaluation joueur standardisée pour le poste de [poste] : critères techniques, tactiques, physiques et mentaux, chacun noté sur 10 avec une définition claire de ce que vaut chaque niveau, une synthèse en trois lignes et une priorité de recrutement A/B/C. Présente le tout sous forme de tableau réutilisable à chaque observation.",
  "conseil": "Construire la grille avec les scouts en atelier : l'IA propose la structure, le terrain arbitre les critères qui comptent vraiment.",
  "skill": null
 },
 {
  "id": "homogeneisation-rapports-scouting",
  "titre": "Homogénéiser les rapports de scouting entre les scouts du club",
  "service": "sportif",
  "besoin": "redaction",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "club",
   "federation"
  ],
  "preuve": "eprouve",
  "douleur": "Chaque scout rédige ses observations dans son propre format et son propre vocabulaire : vous passez plus de temps à déchiffrer les rapports qu'à comparer les joueurs.",
  "gain": "L'IA reformate chaque rapport dans votre trame standard sans rien inventer — vous comparez directement les joueurs en réunion de recrutement.",
  "prompt": "Voici un rapport de scouting rédigé en style libre : [coller le rapport]. Reformate-le selon notre trame standard : identité du joueur et contexte du match, points forts, points faibles, note par critère sur 10, priorité A/B/C, recommandation. Conserve strictement les observations du scout, ne complète rien, et signale les rubriques non renseignées.",
  "conseil": "Créer un projet dédié (GPT personnalisé ou projet Claude) avec la trame en instruction permanente : chaque scout n'a plus qu'à coller ses notes brutes.",
  "skill": null
 },
 {
  "id": "simulation-classement",
  "titre": "Simuler le classement de fin de saison avec les règles d'égalité",
  "service": "sportif",
  "besoin": "analyse",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "comite"
  ],
  "preuve": "teste",
  "douleur": "Projeter le classement de fin de saison en appliquant les règles de départage du règlement — confrontations directes, différentiel de points — se fait à la main dans Excel. Et vous recommencez après chaque journée.",
  "gain": "L'IA simule les scénarios en appliquant les règles d'égalité du règlement et détaille son raisonnement — vous n'avez plus qu'à vérifier les cas d'égalité sensibles.",
  "prompt": "Voici le classement actuel et les résultats de la saison : [coller le tableau ou joindre le fichier]. Voici l'article du règlement sur les règles de départage en cas d'égalité : [coller l'article]. Simule le classement final selon les scénarios suivants : [décrire les scénarios, ex. victoires de l'équipe X sur les trois dernières journées]. Applique strictement l'ordre des critères de départage et détaille ton raisonnement pour chaque égalité.",
  "conseil": "Faire d'abord recalculer un cas d'égalité passé dont on connaît l'issue, pour vérifier que l'ordre des critères de départage est bien respecté.",
  "skill": null
 },
 {
  "id": "cr-observation-joueur",
  "titre": "Rédiger le compte rendu d'observation d'un joueur après un match",
  "service": "sportif",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "club"
  ],
  "preuve": "eprouve",
  "douleur": "Après un match, vos observations terrain sur un joueur — attitude, replacement, communication, tout ce que les statistiques ne captent pas — restent dans des notes éparses ou dans votre tête, et se perdent au moment de décider.",
  "gain": "Vous dictez vos observations en sortant du stade, l'IA les structure en compte rendu — les éléments qualitatifs sont capturés avant de s'évaporer.",
  "prompt": "Voici mes observations dictées après le match sur [joueur, poste] : [transcription vocale]. Structure-les en compte rendu de performance : contexte du match, points forts observés, points faibles, attitude et comportement, éléments non chiffrables notables, recommandation. N'ajoute rien que je n'ai pas observé, et signale les rubriques non renseignées.",
  "conseil": "Dicter à chaud en sortant du stade : la transcription vocale capture des détails qu'une note écrite le lendemain a déjà perdus.",
  "skill": null
 },
 {
  "id": "rapport-equipe-adverse",
  "titre": "Préparer le rapport d'analyse de l'équipe adverse avant un match",
  "service": "sportif",
  "besoin": "analyse",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "club"
  ],
  "preuve": "demande",
  "douleur": "Chaque semaine, vous compilez à la main le rapport sur l'adversaire du week-end depuis les statistiques, les derniers matchs et vos notes d'observation — un travail refait sous la pression du calendrier.",
  "gain": "L'IA produit un rapport adversaire structuré au format du staff à partir de vos données et observations — vous vérifiez et complétez l'analyse tactique.",
  "prompt": "Voici les statistiques et mes notes d'observation sur [équipe adverse] : [coller les données]. Rédige un rapport pré-match selon notre trame : système de jeu et animations, forces, faiblesses exploitables, joueurs clés avec leurs caractéristiques, situations arrêtées, recommandations. Distingue clairement ce qui vient des données de ce qui vient des observations.",
  "conseil": "Exiger la distinction entre données et observations : c'est ce qui permet au staff de savoir ce qui est vérifiable.",
  "skill": null
 },
 {
  "id": "tableau-stats-joueurs-mensuel",
  "titre": "Produire le tableau mensuel des statistiques joueurs sans ressaisie",
  "service": "sportif",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "ligue",
   "club"
  ],
  "preuve": "demande",
  "douleur": "Chaque mois, vous recopiez à la main les statistiques des joueurs depuis les plateformes vers Excel pour produire le tableau de synthèse — des heures de copier-coller à faible valeur et à fort risque d'erreur.",
  "gain": "L'IA produit le tableau mensuel depuis les exports bruts, totaux et évolutions calculés — vous contrôlez au lieu de ressaisir.",
  "prompt": "Voici les exports bruts des statistiques du mois : [coller les données ou joindre les fichiers]. Consolide-les dans notre tableau mensuel type : une ligne par joueur, colonnes [statistiques suivies], totaux, évolution par rapport au mois précédent. Signale toute donnée manquante ou incohérente plutôt que de l'estimer.",
  "conseil": "Faire signaler les données manquantes ou incohérentes plutôt que de les laisser estimer : un tableau faux coûte plus cher qu'un tableau incomplet.",
  "skill": null
 },
 {
  "id": "calendrier-matchs-contraintes",
  "titre": "Construire le calendrier des matchs sous contraintes multiples",
  "service": "sportif",
  "besoin": "analyse",
  "faisabilite": "complexe",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "comite"
  ],
  "preuve": "demande",
  "douleur": "Pour établir le calendrier d'une compétition, vous conciliez disponibilités des salles, diffuseurs, doublons de dates, distances et règles d'alternance domicile-extérieur : des semaines d'itérations manuelles où chaque modification en déclenche d'autres.",
  "gain": "L'IA propose des scénarios de calendrier qui respectent les contraintes déclarées et liste les conflits résiduels — vous n'arbitrez plus que les cas insolubles.",
  "prompt": "Dispositif : formaliser les contraintes (équipes, salles, dates bloquées, alternance, diffusion) dans un fichier structuré, faire générer et vérifier des scénarios de calendrier par l'IA, puis itérer sur les conflits qu'elle liste. Selon le volume, le dispositif passe par un accompagnement (script de vérification automatique des contraintes).",
  "process": [
   "Formaliser les contraintes (équipes, salles, dates bloquées, alternance, diffusion) dans un fichier structuré",
   "Faire générer des scénarios de calendrier par l'IA",
   "Vérifier le respect des contraintes sur chaque scénario",
   "Itérer sur la liste des conflits signalés",
   "Arbitrer humainement les cas insolubles"
  ],
  "conseil": "Formaliser d'abord toutes les contraintes par écrit : c'est le fichier de contraintes qui fait la qualité des scénarios, pas le prompt.",
  "skill": null
 },
 {
  "id": "referentiel-excel-multi-onglets",
  "titre": "Remplir un référentiel Excel multi-onglets à partir des documents métier",
  "service": "sportif",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Votre nouveau logiciel métier exige de remplir un référentiel Excel de plusieurs onglets par activité sportive, à partir des fiches et règlements existants — des dizaines d'activités à traduire à la main dans le format du développeur.",
  "gain": "L'IA remplit le référentiel activité par activité, audite les informations manquantes et laisse une fiche process — vous contrôlez au lieu de ressaisir, et l'exercice se répète de sport en sport.",
  "prompt": "Méthode par étapes sur une première activité : 1) analyse le fichier Excel cible et décris sa structure (onglets, champs attendus) dans un fichier de référence ; 2) à partir de la fiche et du règlement de [activité], audite les informations manquantes ; 3) remplis le fichier, sans rien inventer, en marquant XXX ce qui manque ; 4) à la fin, liste les apprentissages en fiche process pour répéter l'exercice sur les activités suivantes par lots.",
  "conseil": "Traiter une première activité de bout en bout avant de passer aux lots : c'est la fiche process tirée du premier essai qui fait gagner du temps sur les suivantes.",
  "skill": null
 },
 {
  "id": "interroger-reglement-long",
  "titre": "Retrouver une information dans un règlement de plusieurs centaines de pages",
  "service": "sportif",
  "besoin": "documents-longs",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "demande",
  "douleur": "Règlement général, règlements par compétition, textes fédéraux qui se recoupent : vous feuilletez des documents de plusieurs centaines de pages pour retrouver la bonne règle, avec le risque de citer un article périmé ou contradictoire.",
  "gain": "L'IA vous répond en quelques secondes avec la citation exacte et le numéro de page — vous vérifiez dans le document, et c'est réglé.",
  "prompt": "Voici le règlement [nom du règlement] en pièce jointe. Réponds à ma question en citant le passage exact du texte et le numéro de page ou d'article, pour que je puisse vérifier dans le document. Si deux articles se contredisent ou se recoupent, signale-le. Ma question : [question].",
  "conseil": "NotebookLM ne répond qu'à partir des documents chargés et cite ses sources — le plus sûr pour du réglementaire ; ne pas y déposer de documents confidentiels.",
  "skill": null
 },
 {
  "id": "faq-reglements-sportifs",
  "titre": "Construire la FAQ des règlements sportifs pour répondre aux clubs",
  "service": "sportif",
  "besoin": "assistants",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "comite"
  ],
  "preuve": "demande",
  "douleur": "Toute la saison, vous répondez par mail aux mêmes questions de règlement : formats d'épreuve, règles de décompte, catégories d'âge. Chaque réponse vous oblige à rouvrir des règlements de plusieurs dizaines de pages.",
  "gain": "L'IA construit une FAQ et une base interrogeable depuis les règlements officiels — vous validez les réponses une fois, et elles absorbent les questions récurrentes des clubs.",
  "prompt": "Voici nos règlements sportifs en sources. Identifie les 20 questions que posent le plus souvent les clubs (formats de compétition, décompte des points, catégories, qualifications), puis rédige pour chacune une réponse en langage clair avec la référence de l'article. Signale les points ambigus au lieu de les interpréter.",
  "conseil": "Exiger la référence d'article dans chaque réponse : c'est ce qui permet au service des compétitions de valider la FAQ rapidement.",
  "skill": null
 },
 {
  "id": "fusion-reglements-un-document",
  "titre": "Fusionner règlement général et règlements spécifiques en un document unique",
  "service": "sportif",
  "besoin": "documents-longs",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "comite"
  ],
  "preuve": "demande",
  "douleur": "Pour connaître la règle applicable, vous jonglez entre le règlement général et les règlements spécifiques par épreuve, qui se recoupent, se répètent et parfois se contredisent.",
  "gain": "L'IA consolide le tout en un document unique, sans redites, qui donne la règle applicable en une lecture — vous ne traitez plus que les contradictions qu'elle a signalées.",
  "prompt": "Voici notre règlement général et le règlement spécifique de [compétition]. Fusionne-les en un document unique : élimine les redites, garde la règle la plus spécifique quand les deux textes se recouvrent, et signale toute contradiction entre les deux avec les références d'articles.",
  "conseil": "Faire trancher les contradictions signalées par le responsable des règlements avant de diffuser le document consolidé.",
  "skill": null
 },
 {
  "id": "guide-equipements-collectivites",
  "titre": "Rédiger un guide des équipements pour les collectivités",
  "service": "sportif",
  "besoin": "redaction",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "ligue",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Les collectivités qui financent vos salles et équipements manquent d'un référentiel clair des attentes de la discipline : chaque projet local repart de zéro et les équipements livrés ratent des standards évitables.",
  "gain": "L'IA rédige depuis vos référentiels internes un guide diffusable aux collectivités — vous faites valider les chiffres par la commission technique, et le dialogue avec les élus se professionnalise.",
  "prompt": "Rédige un guide des équipements à destination des collectivités pour [discipline] : voici nos référentiels internes [coller : normes de compétition, cahiers des charges existants, retours d'expérience]. Structure : enjeux pour la collectivité, exigences par niveau de compétition (dimensions, revêtements, éclairage, capacité, médias), bonnes pratiques d'exploitation, erreurs classiques de conception, processus d'homologation, contacts. Ton pédagogique pour des élus et services techniques non spécialistes.",
  "conseil": "Faire relire les exigences chiffrées par la commission technique avant diffusion : un guide public avec une norme fausse engage la structure.",
  "skill": null
 },
 {
  "id": "verification-donnees-rencontre",
  "titre": "Vérifier les données de rencontre et générer les mails liés",
  "service": "sportif",
  "besoin": "donnees",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "ligue",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Avant chaque journée, vous vérifiez et notifiez les données de rencontre : officiels désignés, horaires, salles, diffusion. Une revue manuelle répétitive où l'oubli d'une modification crée un incident le jour du match.",
  "gain": "L'IA détecte les incohérences et génère les mails de notification aux clubs en une passe — vous validez au lieu de tout repointer.",
  "prompt": "Voici les données des rencontres de la journée [coller : matchs, horaires, salles, officiels, diffusion] et la version précédemment publiée [coller]. 1) Détecte les incohérences : officiel désigné sur deux matchs, salle en double, horaire incompatible avec la diffusion, données manquantes. 2) Liste les changements depuis la version publiée. 3) Génère le mail de notification par club concerné par un changement : ce qui change, ce que le club doit faire, contact en cas de problème.",
  "conseil": "Faire tourner la vérification à chaque modification plutôt que la veille de la journée : les conflits d'officiels se résolvent facilement à J-7, difficilement à J-1.",
  "skill": null
 },
 {
  "id": "rapports-adversaire-reco",
  "titre": "Compiler les rapports adversaires et les recos de recrutement",
  "service": "sportif",
  "besoin": "analyse",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "club"
  ],
  "preuve": "teste",
  "douleur": "Vos rapports d'observation s'accumulent sans exploitation transversale : au moment de préparer une rencontre ou d'évaluer un joueur repéré, personne ne consolide ce que les observations successives ont appris.",
  "gain": "L'IA consolide toutes les observations passées en une synthèse par adversaire ou par joueur — vous décidez sur l'ensemble du dossier, pas sur le dernier rapport.",
  "prompt": "Voici nos rapports d'observation sur [adversaire ou joueur, désigné par code interne] : [coller les rapports datés]. Consolide : constantes observées sur la durée (système, animations, points faibles récurrents), évolutions entre les observations, contradictions entre observateurs à trancher. Termine par : la recommandation de plan de jeu (pour un adversaire) ou la recommandation de recrutement argumentée (pour un joueur), avec le niveau de confiance selon la quantité d'observations.",
  "conseil": "Dater et signer chaque rapport source : la valeur de la consolidation vient de la capacité à pondérer qui a vu quoi et quand.",
  "skill": null
 },
 {
  "id": "designation-maillots-horaires",
  "titre": "Désigner maillots, jours et horaires de match sans conflit",
  "service": "sportif",
  "besoin": "analyse",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Chaque journée de compétition vous demande de désigner les maillots, les jours et les horaires en croisant conflits de couleurs, contraintes TV, disponibilité des salles et doubles rencontres : un pointage fastidieux et source de litiges entre clubs.",
  "gain": "L'IA propose les désignations vérifiées contre toutes les contraintes et signale les conflits avant publication — vous tranchez les cas insolubles en connaissance de cause.",
  "prompt": "Prépare les désignations de la journée [X] : rencontres [coller la liste], couleurs des équipements par club [coller : domicile, extérieur], contraintes [disponibilité des salles, fenêtres TV, distances de déplacement, rencontres couplées]. Pour chaque rencontre : propose maillots (contraste suffisant y compris pour la TV), jour et horaire, en justifiant. Signale les conflits insolubles avec les options possibles et leur impact sur chaque club.",
  "conseil": "Publier les justifications avec les désignations : un choix motivé génère dix fois moins de contestations de clubs qu'un choix sec.",
  "skill": null
 },
 {
  "id": "dossiers-label-clubs",
  "titre": "Instruire les dossiers Label et refondre le cahier des charges",
  "service": "sportif",
  "besoin": "documents-longs",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "ligue",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Instruire les dossiers Label des clubs — centres de formation, écoles de jeunes — exige de vérifier des dizaines de critères par dossier : des semaines d'instruction chaque année, et un cahier des charges vieillissant que personne n'a le temps de refondre.",
  "gain": "L'IA pré-instruit chaque dossier contre la grille en quelques minutes et nourrit la refonte du cahier des charges avec l'analyse des dossiers réels — la commission décide.",
  "prompt": "1) Instruction : voici le cahier des charges du Label [joindre] et un dossier de candidature [joindre]. Vérifie critère par critère : satisfait / non satisfait / pièce manquante, avec la référence au dossier. Produis la fiche d'instruction et les points à trancher par la commission. 2) Refonte : à partir des fiches d'instruction de la campagne [coller], identifie les critères jamais discriminants, ceux systématiquement mal compris par les clubs, et propose une version révisée du cahier des charges.",
  "conseil": "L'IA pré-instruit, la commission décide : présenter les fiches comme des propositions à valider protège la légitimité de la décision.",
  "skill": null
 },
 {
  "id": "schemas-entrainement-bibliotheque",
  "titre": "Reproduire des schémas d'entraînement au style maison",
  "service": "sportif",
  "besoin": "visuels",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "comite",
   "club"
  ],
  "preuve": "teste",
  "douleur": "Vos éducateurs dessinent leurs exercices d'entraînement à la main ou avec des outils hétérogènes : les schémas sont illisibles ou incohérents entre eux, et les supports pédagogiques manquent d'identité commune.",
  "gain": "L'IA produit des schémas d'exercices homogènes et lisibles en quelques minutes, alignés sur votre style graphique — vous validez le guide de style une fois, puis produisez en série.",
  "prompt": "Méthode en deux temps : 1) constituer la bibliothèque de référence : rassembler [5-10] schémas d'exercices validés et faire décrire par l'IA le style graphique (symboles joueurs/plots/ballons, codes couleurs, flèches de déplacement vs passe, légende) pour produire un guide de style. 2) Pour chaque nouvel exercice : « En respectant ce guide de style [coller] et ces exemples [joindre 2 schémas], dessine l'exercice suivant : [décrire : dispositif, déplacements, consignes]. Légende incluse, format une demi-page. »",
  "conseil": "Valider le guide de style avec les éducateurs avant de produire en série : changer les codes graphiques après coup oblige à tout redessiner.",
  "skill": null
 },
 {
  "id": "faq-reglement",
  "titre": "Construire une FAQ à partir d'un règlement ou d'un contrat de licence",
  "service": "juridique",
  "besoin": "assistants",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "teste",
  "douleur": "Vous répondez toute la saison aux mêmes questions sur des documents que personne ne lit en entier : règlement fédéral, contrat de licence, guide merchandising.",
  "gain": "L'IA génère une FAQ en langage clair avec la référence d'article à l'appui — vous validez les réponses une fois, et elles absorbent les questions récurrentes.",
  "prompt": "Voici notre [règlement fédéral / contrat de licence / guide merchandising] en pièce jointe. Identifie les 20 questions que se posent le plus probablement [les clubs / les licenciés / les partenaires], puis rédige pour chacune une réponse en langage clair avec la référence de l'article concerné. Si un point du texte est ambigu, signale-le plutôt que de l'interpréter.",
  "conseil": "Exiger la référence d'article dans chaque réponse : c'est ce qui permet au juriste de valider la FAQ rapidement.",
  "skill": null
 },
 {
  "id": "rapports-incidents-structures",
  "titre": "Transformer les rapports d'incidents PDF en tableau de suivi structuré",
  "service": "juridique",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "comite"
  ],
  "preuve": "teste",
  "douleur": "Après chaque journée de championnat, les rapports d'incidents vous arrivent en PDF : vous ressaisissez chaque incident à la main dans le tableau de suivi de la commission de discipline.",
  "gain": "L'IA extrait tous les incidents en tableau structuré, prêt pour le suivi disciplinaire — vous contrôlez le résultat au lieu de ressaisir.",
  "prompt": "Voici les rapports d'incidents de la journée au format PDF. Extrais chaque incident dans un tableau : date, rencontre, personne concernée, nature de l'incident, article du règlement potentiellement applicable, gravité estimée. Une ligne par incident, mention « non précisé » quand l'information manque. Restitue le résultat au format [Excel / CSV].",
  "conseil": "Vigilance données personnelles : les rapports citent des personnes — pseudonymiser avant de les soumettre à un outil grand public, ou utiliser un environnement maîtrisé.",
  "skill": null
 },
 {
  "id": "veille-juridique-agent",
  "titre": "Automatiser la veille juridique et réglementaire avec un agent IA",
  "service": "juridique",
  "besoin": "veille",
  "faisabilite": "complexe",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "teste",
  "douleur": "Suivre les décrets du Journal officiel, les évolutions du code du sport et les nouvelles obligations légales exige un dépouillement régulier que vous n'avez jamais le temps de faire correctement.",
  "gain": "Un agent IA produit un rapport de veille structuré en environ une heure trente — vous validez les références citées et diffusez.",
  "prompt": "Un agent de recherche (recherche approfondie de ChatGPT ou Claude, ou workflow n8n planifié) balaie périodiquement les sources officielles — Journal officiel, textes fédéraux, actualité réglementaire du secteur — sur une liste de thèmes définie par le juriste. Il produit un rapport structuré : nouveaux textes parus, impact pour la structure, actions à prévoir. Le juriste valide et diffuse.",
  "process": [
   "Définir la liste des thèmes et des sources officielles à surveiller",
   "Balayer périodiquement le Journal officiel, les textes fédéraux et l'actualité réglementaire",
   "Produire un rapport structuré : textes parus, impact pour la structure, actions à prévoir",
   "Vérifier chaque référence citée",
   "Valider et diffuser le rapport"
  ],
  "conseil": "Faire vérifier chaque référence citée avant diffusion : un texte réglementaire halluciné coûte plus cher qu'une veille en retard.",
  "skill": null
 },
 {
  "id": "contrats-joueurs-assistes",
  "titre": "Générer les contrats joueurs avec les clauses à valider signalées",
  "service": "juridique",
  "besoin": "templates",
  "faisabilite": "complexe",
  "portee": "sport",
  "structures": [
   "club",
   "ligue"
  ],
  "preuve": "eprouve",
  "douleur": "À chaque signature, vous reconstruisez le contrat du joueur à partir d'un précédent : copier-coller de clauses, risque d'oubli d'une mention obligatoire, allers-retours avec le conseil juridique.",
  "gain": "L'assistant génère un projet de contrat complet depuis votre trame, chaque clause sensible signalée — il ne vous reste que la validation juridique finale avant signature.",
  "prompt": "Un assistant dédié embarque la trame de contrat du club, les clauses types et les règles de la convention collective applicable. À partir des paramètres du recrutement (durée, rémunération, primes, options), il génère un projet de contrat complet et signale explicitement chaque clause à faire valider par le juriste. Le document final est toujours relu et validé humainement avant signature.",
  "process": [
   "Embarquer la trame de contrat, les clauses types et la convention collective dans un assistant dédié",
   "Saisir les paramètres du recrutement (durée, rémunération, primes, options)",
   "Générer un projet de contrat complet",
   "Signaler chaque clause sensible à faire valider par le juriste",
   "Relire et valider humainement avant signature"
  ],
  "conseil": "Vigilance données personnelles : générer le contrat avec des champs variables et n'insérer les informations du joueur qu'en dehors de l'outil.",
  "skill": null
 },
 {
  "id": "coherence-contrat-facture",
  "titre": "Contrôler la cohérence entre contrat, facture et pièces",
  "service": "juridique",
  "besoin": "analyse",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "ligue",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Vérifier qu'une facture correspond au contrat — prestations, montants, échéancier, indexations — exige de relire les deux documents ligne à ligne : un contrôle fastidieux, souvent survolé, qui laisse passer des écarts coûteux.",
  "gain": "L'IA contrôle chaque facture contre son contrat en deux minutes et documente les écarts avec la clause de référence — vous décidez : payer, contester ou demander un avoir.",
  "prompt": "Voici un contrat [joindre] et la facture correspondante [joindre]. Contrôle la cohérence : prestations facturées vs prestations contractuelles, montants et modalités de calcul (indexation, révision), échéancier, mentions obligatoires. Produis le tableau des écarts : élément, ce que dit le contrat (clause citée), ce que dit la facture, impact financier, action recommandée (payer, contester, demander un avoir). Signale aussi les prestations contractuelles jamais facturées.",
  "conseil": "Contrôler aussi dans le sens contrat vers facture : les prestations payées d'avance et jamais livrées se repèrent dans ce sens-là.",
  "skill": null
 },
 {
  "id": "qualifications-joueurs-syntheses",
  "titre": "Suivre les qualifications de joueurs et les synthèses d'instances",
  "service": "juridique",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "ligue",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Le suivi des qualifications — mutations, prêts, statuts, dates d'effet — et le reporting aux instances se font par ressaisies successives entre les dossiers et les tableaux de synthèse : chronophage et générateur d'erreurs de droits sportifs.",
  "gain": "L'IA met à jour le registre depuis les dossiers traités, signale les incohérences et génère les synthèses pour les instances en quelques minutes — vous validez avant diffusion.",
  "prompt": "Voici les dossiers de qualification traités cette semaine [coller : joueur (code), club, type (mutation, prêt), dates, conditions] et le registre en cours [coller]. 1) Mets à jour le registre en signalant les incohérences (chevauchement de périodes, conditions non remplies, doublons). 2) Produis la synthèse pour l'instance : volumes par type et par club, cas litigieux en attente avec leur ancienneté, décisions attendues. Format : le tableau réglementaire habituel [décrire ou coller un exemple].",
  "conseil": "Faire signaler les incohérences avant la mise à jour du registre : une qualification erronée validée en instance se corrige beaucoup plus difficilement.",
  "skill": null
 },
 {
  "id": "coherence-textes-reglementaires",
  "titre": "Détecter les incohérences entre textes réglementaires croisés",
  "service": "juridique",
  "besoin": "documents-longs",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "ligue",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Statuts, règlement général, règlements particuliers et circulaires se modifient à des rythmes différents : des contradictions s'installent entre vos textes, et chacune est une faille exploitée au premier contentieux.",
  "gain": "L'IA détecte systématiquement contradictions, renvois cassés et zones de silence entre les textes — vous corrigez avant qu'un club ne les découvre en commission d'appel.",
  "prompt": "Voici nos textes réglementaires : [joindre : statuts, règlement général, règlements particuliers, circulaires en vigueur]. Analyse croisée : 1) contradictions directes entre textes (deux règles incompatibles sur le même objet), 2) renvois cassés (article cité qui n'existe plus ou a changé d'objet), 3) zones de silence (situations qu'aucun texte ne couvre alors que les textes voisins y font allusion), 4) conflits de hiérarchie des normes. Pour chaque anomalie : textes et articles concernés, risque contentieux, correction proposée.",
  "conseil": "Refaire l'analyse après chaque assemblée générale modificative : c'est au moment des modifications que les incohérences se créent.",
  "skill": null
 },
 {
  "id": "legal-design-visuels",
  "titre": "Expliquer des concepts juridiques en visuels de legal design",
  "service": "juridique",
  "besoin": "visuels",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "ligue",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Vos règlements et procédures restent incompris des clubs et des bénévoles : le service juridique répète les mêmes explications, faute de supports visuels qui rendent les règles accessibles aux non-juristes.",
  "gain": "L'IA transforme chaque règle en version langage clair et en schéma de legal design — les questions récurrentes et les erreurs de procédure baissent.",
  "prompt": "Transforme cette règle ou procédure en visuel de legal design : [coller le texte réglementaire : procédure de mutation, circuit disciplinaire, conditions de qualification]. Produis : 1) la version en langage clair (niveau collège, sans perte de précision juridique, écarts signalés), 2) le schéma adapté : arbre de décision (si conditions), frise chronologique (si procédure à délais), ou parcours par acteur. Mets en évidence les délais et les pièges fréquents [coller les erreurs récurrentes des clubs].",
  "conseil": "Ajouter la mention « document explicatif, seul le règlement fait foi » sur chaque visuel : le legal design vulgarise, il ne remplace pas le texte.",
  "skill": null
 },
 {
  "id": "relecture-contrats-clauses",
  "titre": "Relire les contrats joueurs et repérer les clauses non conformes",
  "service": "juridique",
  "besoin": "documents-longs",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "ligue",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "À chaque période d'enregistrement, vous contrôlez des dizaines de contrats joueurs contre le règlement : clauses obligatoires, plafonds, mentions interdites. Une relecture répétitive sous délai d'homologation.",
  "gain": "L'IA pré-contrôle chaque contrat contre votre grille réglementaire en quelques minutes — vous concentrez votre expertise sur les cas signalés.",
  "prompt": "Voici notre grille de conformité des contrats joueurs [coller : clauses obligatoires, clauses interdites, plafonds et formats requis] et un contrat à contrôler [joindre]. Vérifie point par point : conforme / non conforme / ambigu, avec citation de la clause du contrat et de la règle applicable. Produis la fiche de contrôle et la liste des corrections à demander au club avant homologation. Ne conclus jamais conforme si une pièce citée en annexe manque : signale-la.",
  "conseil": "Anonymiser le contrat (noms, montants remplacés par des variables) avant traitement dans un outil grand public : le contrôle porte sur les clauses, pas sur l'identité.",
  "skill": null
 },
 {
  "id": "note-decisions-commission",
  "titre": "Mettre en forme les décisions de la commission juridique",
  "service": "juridique",
  "besoin": "reunions",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "ligue",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Après chaque commission juridique, vous mettez en forme les décisions : note interne, présentation aux instances, notifications. Vous passez plus de temps sur la mise en page que sur le fond des décisions.",
  "gain": "L'IA génère note, support de présentation et notifications d'un coup depuis le relevé brut — vous relisez les fondements au lieu de mettre en page.",
  "prompt": "Voici le relevé brut des décisions de la commission juridique du [date] : [coller]. Produis : 1) la note interne : décisions numérotées avec fondement réglementaire cité, effets et dates, voies de recours ; 2) la trame de présentation pour l'instance : une slide par décision structurante (contexte, décision, impact) ; 3) le projet de notification pour chaque partie concernée : décision la concernant, motivation, délai et modalité de recours. Ton neutre et juridiquement précis, aucune interprétation ajoutée.",
  "conseil": "Relire les fondements réglementaires cités : l'IA met parfaitement en forme mais peut citer l'article voisin, et une notification mal fondée fragilise la décision.",
  "skill": null
 },
 {
  "id": "decisions-disciplinaires-courriers",
  "titre": "Préparer les décisions disciplinaires et leurs courriers",
  "service": "juridique",
  "besoin": "templates",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "ligue",
   "federation"
  ],
  "preuve": "eprouve",
  "douleur": "Chaque dossier disciplinaire génère sa chaîne documentaire : convocation, rapport d'instruction, décision motivée, notification. Des documents à fort enjeu de forme, où une erreur de procédure fait annuler la sanction en appel.",
  "gain": "L'IA prépare la chaîne documentaire dans le strict respect des formes et signale les vices de procédure — vous arbitrez le fond.",
  "prompt": "Voici notre règlement disciplinaire [joindre] et le dossier en cours : [coller : faits, rapport d'officiels, pièces, articles visés]. Prépare : 1) la convocation (faits reprochés, articles, date d'audience, droits de la défense rappelés), 2) la trame d'instruction pour l'audience (questions, points à établir), 3) le projet de décision motivée : faits établis, qualification, sanction dans le barème avec les circonstances retenues, 4) la notification avec voies et délais de recours. Respecte strictement les formes et délais du règlement, et signale tout vice de procédure déjà présent au dossier.",
  "conseil": "Faire vérifier les délais de procédure à chaque étape : la plupart des annulations en appel viennent d'un délai non respecté, pas du fond.",
  "skill": null
 },
 {
  "id": "conventions-comite-organisation",
  "titre": "Rédiger les conventions avec les comités d'organisation",
  "service": "juridique",
  "besoin": "templates",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Chaque événement confié à un comité d'organisation local exige sa convention : obligations réciproques, garanties, billetterie, droits marketing. Vous repartez du dernier modèle bricolé, avec des oublis différents à chaque fois.",
  "gain": "L'IA génère des conventions complètes depuis un modèle maître et les spécificités de chaque événement — vous ne faites valider par l'avocat que le modèle, une fois.",
  "prompt": "À partir de notre convention type avec les comités d'organisation [joindre le meilleur modèle existant], établis le modèle maître : clauses invariantes, clauses à variables [événement, dates, engagements financiers, jauges, partage billetterie], et points de négociation avec leurs options. Puis génère la convention pour [événement] avec ces paramètres : [coller les spécificités]. Signale les situations de cet événement que le modèle ne couvre pas et propose la clause à ajouter.",
  "conseil": "Faire valider le modèle maître une fois par un avocat, puis ne faire varier que les paramètres : la sécurité juridique tient au modèle, pas à chaque génération.",
  "skill": null
 },
 {
  "id": "pv-releves-decisions",
  "titre": "Rédiger les PV, relevés de décisions et réponses types",
  "service": "juridique",
  "besoin": "reunions",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "ligue",
   "federation"
  ],
  "preuve": "eprouve",
  "douleur": "Vos instances produisent un flux continu de PV, relevés de décisions et courriers de réponse aux clubs : une charge rédactionnelle normée qui occupe les juristes au détriment de l'instruction des dossiers.",
  "gain": "L'IA produit PV et relevés en quelques minutes après chaque séance, et des projets de réponse cohérents avec vos précédents — vous relisez et signez.",
  "prompt": "Voici mes notes (ou la transcription) de la séance de [instance] du [date] : [coller]. Rédige : 1) le PV au format réglementaire [coller un PV précédent comme modèle] : présents, ordre du jour, débats résumés objectivement, décisions avec votes ; 2) le relevé de décisions diffusable : décisions numérotées, responsables, échéances ; 3) pour chaque demande de club traitée, le projet de réponse aligné sur nos réponses précédentes dans des cas similaires [coller 2-3 exemples].",
  "conseil": "Constituer une bibliothèque des réponses passées par type de demande : la cohérence des positions dans le temps est un enjeu juridique, pas seulement rédactionnel.",
  "skill": null
 },
 {
  "id": "dossier-disciplinaire-pieces",
  "titre": "Structurer les pièces d'un dossier disciplinaire",
  "service": "juridique",
  "besoin": "donnees",
  "faisabilite": "facile",
  "portee": "sport",
  "structures": [
   "ligue",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Les pièces d'un dossier disciplinaire vous arrivent en vrac : photos de feuilles de match, rapports manuscrits scannés, captures diverses. Les transformer en dossier structuré et lisible pour la commission prend des heures par affaire.",
  "gain": "L'IA transcrit, identifie et ordonne les pièces en un bordereau numéroté exploitable en séance — vous contrôlez les passages signalés comme illisibles.",
  "prompt": "Voici les pièces brutes d'un dossier disciplinaire : [joindre : photos de documents, rapports manuscrits, captures]. Pour chaque pièce : transcris le contenu (y compris manuscrit) en signalant les mots illisibles entre crochets plutôt qu'en devinant, identifie sa nature (rapport d'officiel, feuille de match, correspondance) et sa date. Assemble le bordereau de pièces numérotées dans l'ordre chronologique, avec pour chacune un résumé d'une ligne et les passages pertinents pour l'affaire surlignés.",
  "conseil": "Exiger les crochets sur l'illisible : une transcription qui devine un mot dans un rapport d'officiel peut changer le sens d'une décision.",
  "skill": null
 },
 {
  "id": "relances-impayes-automatisees",
  "titre": "Automatiser les relances de factures impayées",
  "service": "finance",
  "besoin": "automatisation",
  "faisabilite": "complexe",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Vous suivez les impayés en balayant le tableau des factures à la main : les retards de plus de 30 jours passent entre les mailles et les relances partent tard, au détriment de la trésorerie.",
  "gain": "Chaque facture en retard génère automatiquement un brouillon de relance personnalisé dans votre boîte mail — vous relisez, ajustez et envoyez.",
  "prompt": "Une automatisation lit chaque semaine le tableau de suivi des factures, repère celles impayées depuis plus de 30 jours et rédige pour chacune un brouillon de relance personnalisé : montant, échéance, ton adapté à l'ancienneté du retard. Les brouillons sont déposés directement dans la boîte mail du service comptable, qui relit, ajuste et envoie. Rien ne part sans validation humaine.",
  "process": [
   "Lire chaque semaine le tableau de suivi des factures",
   "Repérer les factures impayées depuis plus de 30 jours",
   "Rédiger un brouillon de relance personnalisé (montant, échéance, ton adapté au retard)",
   "Déposer les brouillons dans la boîte mail du service comptable",
   "Relire, ajuster et envoyer après validation humaine"
  ],
  "conseil": "Garder la validation humaine avant envoi : une relance mal calibrée abîme la relation avec un partenaire ou un client.",
  "skill": null
 },
 {
  "id": "comparer-budgets-langage-naturel",
  "titre": "Comparer les budgets par service N vs N-1 en langage naturel",
  "service": "finance",
  "besoin": "donnees",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Comparer le budget de chaque service avec celui de l'an dernier vous coûte des heures de croisements dans Excel, et chaque nouvelle question de la direction relance une manipulation de tableur.",
  "gain": "Vous posez vos questions en français, l'IA sort les écarts et le tableau de synthèse — vous n'avez plus qu'à contrôler quelques totaux avant de diffuser.",
  "prompt": "Voici deux fichiers Excel : le budget [année N] et le budget [année N-1], ventilés par service. Compare-les poste par poste : identifie les écarts supérieurs à [10 %], explique les variations les plus marquantes et présente le tout dans un tableau clair. Je te poserai ensuite mes questions de suivi en langage naturel.",
  "conseil": "Contrôler quelques totaux dans le fichier source avant de diffuser l'analyse : l'IA peut se tromper dans une agrégation.",
  "skill": null
 },
 {
  "id": "simulateur-rentabilite-evenement",
  "titre": "Créer un simulateur de rentabilité d'événement",
  "service": "finance",
  "besoin": "analyse",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Chaque hypothèse de tarif, de jauge ou de sponsoring vous oblige à refaire les calculs dans un tableur. La décision de lancer un tournoi ou une édition se prend souvent sans vision claire du point mort.",
  "gain": "L'IA vous construit un simulateur où vous faites varier les hypothèses et lisez immédiatement le prévisionnel et le point mort — il ne vous reste qu'à arbitrer.",
  "prompt": "Construis-moi un simulateur de rentabilité pour [type d'événement : tournoi, gala, stage]. Variables d'entrée : nombre de participants ou de spectateurs, prix du billet, recettes sponsors, buvette et merchandising, coûts fixes ([location, sécurité, arbitrage]) et coûts variables par participant. Sorties attendues : compte de résultat prévisionnel, point mort et trois scénarios (pessimiste, réaliste, optimiste).",
  "conseil": "Faire générer une version interactive à projeter en réunion : les scénarios se discutent en direct au lieu de s'échanger par mail.",
  "skill": null
 },
 {
  "id": "detecter-erreurs-rapport-annuel",
  "titre": "Détecter les erreurs de chiffres dans un rapport annuel de 100 pages",
  "service": "finance",
  "besoin": "documents-longs",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "teste",
  "douleur": "La relecture de votre rapport d'activité annuel de 100 pages mobilise plusieurs relecteurs pendant des jours, et des erreurs de chiffres passent malgré tout entre les mailles.",
  "gain": "L'IA fait une passe de contrôle exhaustive en quelques minutes, chaque anomalie localisée avec sa correction proposée — vous ne vérifiez plus que les points signalés.",
  "prompt": "Voici notre rapport d'activité annuel de [100] pages. Relis-le comme un contrôleur de gestion : vérifie que les totaux des tableaux sont justes, que les chiffres cités dans le texte correspondent aux tableaux, et que les pourcentages sont cohérents avec les valeurs absolues. Liste chaque anomalie avec la page, le chiffre concerné et la correction proposée.",
  "conseil": "Découper le document en sections si l'outil sature : un rapport de 100 pages dépasse parfois la capacité d'analyse en une seule passe.",
  "skill": null
 },
 {
  "id": "note-synthese-controle-gestion",
  "titre": "Générer la note de synthèse financière pour l'organe de contrôle de gestion",
  "service": "finance",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "club"
  ],
  "preuve": "eprouve",
  "douleur": "Le dossier pour l'organe national de contrôle de gestion exige une note de synthèse qui traduit vos tableaux financiers en un texte argumenté — un exercice redouté que vous refaites à chaque échéance.",
  "gain": "L'IA rédige une première version de la note depuis les données clés de votre fichier Excel — vous validez au lieu d'écrire.",
  "prompt": "Voici les données financières clés de la saison : [coller le tableau]. Rédige la note de synthèse pour notre dossier de contrôle de gestion : situation financière, évolution par rapport à N-1, points d'attention et mesures prises, perspectives. Chiffres strictement issus du tableau, aucun chiffre inventé, ton factuel et prudent.",
  "conseil": "Exiger que chaque chiffre de la note provienne du tableau source : aucun chiffre inventé ne doit atteindre l'organe de contrôle.",
  "skill": null
 },
 {
  "id": "business-plan-projet-sportif",
  "titre": "Construire le business plan d'un projet sportif (académie, section, école)",
  "service": "finance",
  "besoin": "analyse",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Votre projet d'académie ou de nouvelle section attend son business plan depuis des mois : personne en interne n'a le temps ni le réflexe de structurer hypothèses, coûts et revenus dans un document présentable.",
  "gain": "L'IA structure le business plan complet avec les hypothèses à documenter — vous transformez une idée en dossier présentable aux instances.",
  "prompt": "Je veux construire le business plan d'une [académie de jeunes joueurs / école de sport / nouvelle section] pour notre [type de structure]. Pose-moi d'abord les questions nécessaires (capacité, encadrement, tarifs, locaux, subventions), puis structure le business plan : investissements, charges, revenus sur 3 ans, seuil d'équilibre, risques. Distingue mes données réelles de tes hypothèses, à vérifier.",
  "conseil": "Faire distinguer les données réelles des hypothèses de l'IA : ce sont les hypothèses qu'il faut documenter avant de présenter aux instances.",
  "skill": null
 },
 {
  "id": "normaliser-donnees-clubs",
  "titre": "Normaliser les données hétérogènes remontées par les clubs",
  "service": "finance",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "federation",
   "ligue",
   "comite"
  ],
  "preuve": "eprouve",
  "douleur": "Chaque club vous remonte ses données dans son propre format — libellés, unités et colonnes différents — et la consolidation au niveau national passe par de la ressaisie manuelle.",
  "gain": "L'IA établit un référentiel commun et consolide les fichiers automatiquement — vous ne traitez plus que les valeurs qu'elle n'a pas su rattacher.",
  "prompt": "Voici [3] fichiers de données remontées par nos clubs, chacun avec ses propres libellés et formats. Établis d'abord un référentiel commun de catégories à partir de ces exemples, puis mappe chaque colonne et chaque valeur de chaque fichier vers ce référentiel. Produis un fichier consolidé unique et signale à part les valeurs que tu n'as pas su rattacher.",
  "conseil": "Faire valider le référentiel de catégories par le métier sur un échantillon avant de traiter l'ensemble des fichiers.",
  "skill": null
 },
 {
  "id": "nettoyer-croiser-excel",
  "titre": "Nettoyer un export Excel et croiser deux fichiers",
  "service": "finance",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "demande",
  "douleur": "Exports de licences, suivis de paiements, listes d'inscrits : vous passez des heures à nettoyer des fichiers et à croiser des listes ligne par ligne. Chez une fédération nationale, ce cas est arrivé en tête des votes des équipes comptables (7 voix sur 25).",
  "gain": "L'IA nettoie, croise et sort les écarts — doublons, manquants — sans formule RECHERCHEV à déboguer ; vous ne faites plus que contrôler le résultat.",
  "prompt": "Voici deux fichiers Excel : [fichier A, ex. liste des clubs affiliés] et [fichier B, ex. liste des inscrits]. 1) Décris les colonnes de chaque fichier et signale les incohérences de format. 2) Nettoie les données : doublons, casse, espaces parasites. 3) Croise les deux fichiers sur [colonne clé] et sors la liste des [éléments présents dans A mais absents de B]. Avant de commencer, pose-moi tes questions si une colonne est ambiguë.",
  "conseil": "Cadrer précisément la colonne de correspondance avant de lancer : testé sans méthode, un croisement de deux fichiers a demandé six allers-retours avant d'aboutir.",
  "skill": null
 },
 {
  "id": "corriger-formules-excel",
  "titre": "Trouver et corriger une formule Excel qui ne fonctionne pas",
  "service": "finance",
  "besoin": "donnees",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "demande",
  "douleur": "Votre tableau de suivi bloque sur une formule qui renvoie une erreur ou un résultat faux, et personne au bureau ne maîtrise assez Excel pour comprendre pourquoi — le fichier reste cassé ou se refait à la main.",
  "gain": "L'IA corrige la formule et vous l'explique en quelques minutes — et vous propose la bonne quand vous ne savez pas laquelle utiliser.",
  "prompt": "Dans mon fichier Excel, cette formule ne donne pas le résultat attendu : [coller la formule]. Voici la structure des données concernées : [décrire les colonnes] et ce que je veux obtenir : [décrire]. Explique pourquoi elle échoue, donne la formule corrigée, et explique-la pas à pas pour que je puisse la maintenir.",
  "conseil": "Demander l'explication pas à pas de la formule corrigée : c'est ce qui permet de maintenir le fichier ensuite sans aide.",
  "skill": null
 },
 {
  "id": "facturation-evenement-chaine",
  "titre": "Fluidifier la chaîne de facturation d'un événement",
  "service": "finance",
  "besoin": "automatisation",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Facturer un événement enchaîne trois outils qui ne se parlent pas : les éléments dans un tableur, la saisie dans le logiciel de facturation, puis le mail d'envoi au client — avec des ressaisies et des oublis à chaque maillon.",
  "gain": "L'IA vérifie les données, prépare les bordereaux de saisie et rédige les mails d'accompagnement en une passe — vous arbitrez les cas qu'elle signale et émettez.",
  "prompt": "Voici le tableau des éléments à facturer pour [événement] : [coller : client, prestations, montants, conditions]. 1) Vérifie la cohérence (totaux, TVA, doublons, éléments incomplets), 2) produis pour chaque client le bordereau de saisie au format attendu par notre logiciel de facturation [décrire les champs], 3) rédige le mail d'accompagnement personnalisé par client (rappel de la prestation, conditions de règlement, contact). Signale ce qui doit être arbitré avant émission.",
  "conseil": "Commencer par la version semi-automatique (bordereaux et mails préparés, saisie humaine) avant de brancher une automatisation complète : la facturation pardonne mal les erreurs.",
  "skill": null
 },
 {
  "id": "mise-en-forme-grand-livre",
  "titre": "Mettre en forme la donnée brute d'un grand livre",
  "service": "finance",
  "besoin": "donnees",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "club",
   "federation"
  ],
  "preuve": "eprouve",
  "douleur": "Le grand livre sort du logiciel comptable en export brut illisible : pour toute analyse — par projet, par nature, par période — vous refaites des heures de retraitement Excel à chaque demande.",
  "gain": "L'IA retraite l'export en quelques minutes, produit les vues par projet et par nature, et signale les anomalies — vous passez directement à l'analyse.",
  "prompt": "Voici l'export brut de notre grand livre [coller ou joindre]. Retraite-le : nettoie les lignes techniques (à-nouveaux, contre-passations à identifier), structure en tableau exploitable (date, compte, libellé, débit, crédit, projet ou section analytique si présente), et produis les vues : totaux par classe de comptes, par mois, et par section analytique. Signale les anomalies : comptes d'attente non soldés, libellés vides, montants aberrants, doublons probables.",
  "conseil": "Faire signaler les comptes d'attente et les doublons à chaque retraitement : c'est là que se nichent les écritures à corriger avant la clôture.",
  "skill": null
 },
 {
  "id": "suivi-masse-salariale-clubs",
  "titre": "Suivre la masse salariale sportive des clubs",
  "service": "finance",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Le contrôle de la masse salariale sportive des clubs — plafonds, ratios, évolutions — exige de consolider des déclarations hétérogènes à chaque fenêtre de contrôle : une compilation lourde et sensible aux erreurs de périmètre.",
  "gain": "L'IA consolide les déclarations, les contrôle contre les plafonds et identifie tôt les clubs en zone de risque — vous creusez les écarts au lieu de compiler.",
  "prompt": "Voici les déclarations de masse salariale des clubs pour [période] [coller : club, salaires bruts sportifs, charges, avantages, effectif] et les règles de contrôle [coller : plafond, assiette, ratios autorisés]. Consolide : masse salariale par club selon l'assiette réglementaire, position vs plafond (montant et pourcentage), évolution vs période précédente, ratio masse salariale/budget. Signale : dépassements, clubs à moins de [5] % du plafond, variations anormales à creuser, écarts de périmètre probables entre déclarations.",
  "conseil": "Traquer les écarts de périmètre entre clubs (primes, avantages en nature) : les dépassements se cachent plus souvent dans l'assiette que dans les montants.",
  "skill": null
 },
 {
  "id": "suivi-paiements-partenaires",
  "titre": "Tenir le classeur de suivi des paiements partenaires",
  "service": "finance",
  "besoin": "donnees",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "club",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Votre suivi des paiements partenaires — échéanciers contractuels, acomptes, relances — vit dans un classeur tenu à la main. La mise à jour est irrégulière, et les retards se découvrent quand la trésorerie coince.",
  "gain": "L'IA rapproche chaque relevé de vos échéanciers en quelques minutes — les retards et les prochaines échéances ressortent seuls, avec le texte de relance prêt.",
  "prompt": "Voici notre classeur de suivi des paiements partenaires [coller : partenaire, montant contractuel, échéancier, paiements reçus] et le relevé bancaire de la période [coller]. Rapproche les encaissements des échéances : mets à jour le classeur, liste les échéances en retard avec l'ancienneté et le montant, les paiements reçus non identifiés, et les échéances des 30 prochains jours. Propose le texte de relance adapté à chaque retard [premier rappel, relance ferme].",
  "conseil": "Faire le rapprochement à chaque relevé plutôt qu'en fin de mois : une relance envoyée à 8 jours de retard est un rappel, à 60 jours c'est un contentieux.",
  "skill": null
 },
 {
  "id": "extraction-donnees-factures",
  "titre": "Saisir les données comptables depuis les factures et inscriptions",
  "service": "finance",
  "besoin": "donnees",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "comite"
  ],
  "preuve": "teste",
  "douleur": "Factures fournisseurs et bordereaux d'inscriptions arrivent en PDF ou en photos, et vous les ressaisissez à la main dans les tableaux comptables. Des journées de saisie à faible valeur, avec les inévitables inversions de chiffres.",
  "gain": "L'IA extrait les données des documents et les présente au format de votre journal — vous contrôlez au lieu de taper.",
  "prompt": "Voici un lot de documents à saisir : [joindre : factures PDF, photos de bordereaux]. Pour chaque document, extrais : émetteur, date, numéro, montant HT, TVA (par taux), TTC, échéance, et l'imputation probable selon notre plan [coller les comptes usuels par type de dépense]. Présente en tableau au format de notre journal d'achat [coller la structure]. Marque d'un indicateur de confiance les champs incertains (document flou, montant manuscrit) au lieu de deviner.",
  "conseil": "Trier le contrôle humain par l'indicateur de confiance : vérifier en priorité les extractions douteuses fait gagner le temps promis sans sacrifier la fiabilité.",
  "skill": null
 },
 {
  "id": "cr-closing-budgetaire",
  "titre": "Produire le CR des réunions de closing budgétaire",
  "service": "finance",
  "besoin": "reunions",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "club",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Vos réunions de closing budgétaire enchaînent arbitrages et retraitements par service. Sans compte rendu rigoureux immédiat, les décisions se rediscutent au closing suivant et les corrections convenues se perdent.",
  "gain": "L'IA structure le compte rendu — chiffres validés, arbitrages, actions par service — depuis vos notes ou la transcription. Vous le diffusez dans l'heure.",
  "prompt": "Voici la transcription (ou mes notes) de la réunion de closing budgétaire du [date] : [coller]. Produis le compte rendu : par service, les chiffres validés, les retraitements décidés (montant, justification, qui corrige), les arbitrages rendus et leur motif, les points reportés au prochain closing avec leur responsable. Termine par le tableau récapitulatif des actions : correction, responsable, échéance. Distingue clairement décisions actées et pistes évoquées.",
  "conseil": "Distinguer strictement décisions et pistes évoquées : mélanger les deux dans un CR financier crée des corrections fantômes dans les comptes.",
  "skill": null
 },
 {
  "id": "saisie-donnees-contrats",
  "titre": "Extraire les données des contrats vers les tableaux comptables",
  "service": "finance",
  "besoin": "donnees",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "ligue",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Chaque contrat signé doit être ressaisi dans vos tableaux comptables — montants, échéanciers, conditions de facturation : une double saisie fastidieuse depuis des PDF, source d'écarts entre le juridique et la comptabilité.",
  "gain": "L'IA extrait les données contractuelles en tableau prêt à intégrer, avec la page du contrat citée pour chaque donnée — vous contrôlez par échantillon.",
  "prompt": "Voici des contrats signés : [joindre les PDF]. Extrais pour chacun les données comptables : parties, objet, montant total HT/TTC, échéancier de facturation (dates et montants), conditions de paiement, clauses d'indexation ou de variabilité, durée et reconduction. Présente le tout dans ce format de tableau [coller la structure du tableau comptable] et cite la page du contrat pour chaque donnée. Signale les contrats dont l'échéancier est ambigu au lieu d'interpréter.",
  "conseil": "Contrôler par échantillon les montants extraits les premiers temps : la confiance se construit sur des vérifications, pas sur des promesses d'outil.",
  "skill": null
 },
 {
  "id": "categorisation-releves-bancaires",
  "titre": "Catégoriser les relevés bancaires en rubriques de contrôle de gestion",
  "service": "finance",
  "besoin": "donnees",
  "faisabilite": "moyen",
  "portee": "sport",
  "structures": [
   "club"
  ],
  "preuve": "teste",
  "douleur": "Le reporting trésorerie exigé par l'organe national de contrôle de gestion impose de catégoriser chaque ligne de relevé bancaire selon ses rubriques : des centaines de lignes à qualifier à la main chaque mois, sous la pression du calendrier de contrôle.",
  "gain": "L'IA catégorise les relevés en quelques minutes à partir de votre grille de correspondance — vous n'arbitrez que les lignes ambiguës.",
  "prompt": "Voici notre grille de correspondance [coller : rubriques du reporting de contrôle de gestion et exemples de libellés bancaires associés, issus des mois précédents] et le relevé du mois [coller]. Catégorise chaque ligne dans sa rubrique : applique la grille, propose une rubrique avec justification pour les libellés nouveaux, et isole en liste séparée les lignes ambiguës à arbitrer. Produis le tableau de reporting agrégé par rubrique au format attendu [coller le format].",
  "conseil": "Enrichir la grille de correspondance à chaque arbitrage manuel : au bout de trois mois, la part de lignes ambiguës devient marginale.",
  "skill": null
 },
 {
  "id": "trier-candidatures-recrutement",
  "titre": "Trier les candidatures et tenir la boîte mail recrutement",
  "service": "rh",
  "besoin": "mails",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club"
  ],
  "preuve": "eprouve",
  "douleur": "Près de 700 candidatures par an arrivent dans la boîte mail recrutement d'une fédération nationale : vous lisez chaque CV à la main et vos réponses aux candidats prennent du retard.",
  "gain": "L'IA produit une présélection argumentée et un projet de réponse pour chaque candidat — vous gardez la décision et l'envoi.",
  "prompt": "Voici la fiche de poste [intitulé] et [15] candidatures (CV et lettres de motivation). Pour chaque candidat : note d'adéquation sur 10 selon les critères [diplôme requis, expérience, compétences clés], points forts, points de vigilance, puis classement final dans un tableau. Rédige ensuite un projet de réponse bienveillante pour les candidats non retenus.",
  "conseil": "Vigilance données personnelles : traiter les CV dans un espace sécurisé (offre entreprise de l'outil) et garder la décision finale humaine — l'IA présélectionne, elle ne recrute pas.",
  "skill": null
 },
 {
  "id": "fiches-poste-organigramme",
  "titre": "Créer des fiches de poste à partir de l'organigramme et des missions réelles",
  "service": "rh",
  "besoin": "templates",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "teste",
  "douleur": "Vos fiches de poste n'existent pas ou datent d'une autre organisation : au moment de recruter ou d'évaluer, chacun décrit son poste de mémoire et rien n'est comparable.",
  "gain": "L'IA génère un jeu de fiches de poste cohérent depuis l'organigramme et les missions réellement exercées — vous les ajustez avec chaque titulaire.",
  "prompt": "Voici notre organigramme et la description de ce que fait réellement chaque personne : [coller]. Génère une fiche de poste par fonction selon une trame unique : intitulé, rattachement, missions principales, activités récurrentes, compétences requises, interactions internes et externes. Signale les recouvrements de missions entre postes.",
  "conseil": "Faire valider chaque fiche par son titulaire : l'IA structure, le terrain corrige.",
  "skill": null
 },
 {
  "id": "bilan-egalite-hommes-femmes",
  "titre": "Générer le bilan d'égalité femmes-hommes à partir des données RH",
  "service": "rh",
  "besoin": "analyse",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "club",
   "comite"
  ],
  "preuve": "demande",
  "douleur": "Chaque année, vous recompilez les mêmes tableaux pour le bilan social et l'index d'égalité femmes-hommes — effectifs, rémunérations, promotions par sexe — à partir d'exports RH bruts. Un travail de mise en forme long et sans valeur ajoutée.",
  "gain": "L'IA produit les tableaux réglementaires et une première lecture des écarts en une session — vous vérifiez et commentez au lieu de compiler pendant plusieurs jours.",
  "prompt": "Voici l'export anonymisé de nos données RH (effectifs, rémunérations, catégories, ancienneté, sexe) pour [année] : [coller l'export sans les noms]. Produis les tableaux du bilan d'égalité femmes-hommes : répartition des effectifs et des rémunérations par catégorie et par sexe, écarts de rémunération, taux de promotion. Commente ensuite les trois écarts les plus significatifs et propose les indicateurs à suivre l'an prochain.",
  "conseil": "Vigilance données personnelles : remplacer les noms par des identifiants avant de charger l'export ; les rémunérations individuelles ne doivent pas sortir dans un outil grand public.",
  "skill": null
 },
 {
  "id": "harmonisation-dossiers-salaries",
  "titre": "Harmoniser les dossiers salariés et automatiser leur suivi",
  "service": "rh",
  "besoin": "automatisation",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue"
  ],
  "preuve": "teste",
  "douleur": "Vos dossiers salariés se sont constitués au fil des années sans standard : pièces manquantes ou périmées — visites médicales, diplômes, habilitations —, nommages incohérents, et personne ne sait quels dossiers sont conformes sans les ouvrir un à un.",
  "gain": "L'IA dresse l'état de conformité de tous les dossiers et met en place les alertes sur les pièces qui expirent — vous ne traitez plus que le plan de rattrapage.",
  "prompt": "1) Audit : voici la liste des pièces requises par dossier salarié [coller : contrat, pièces d'identité, diplômes, visite médicale avec sa périodicité] et l'inventaire des dossiers existants [coller l'arborescence ou la liste des fichiers par salarié]. Produis l'état de conformité : par salarié, pièces présentes, manquantes, périmées, mal nommées, et le plan de rattrapage priorisé. 2) Suivi : propose la structure cible (nommage type, tableau de suivi avec dates d'expiration) et le workflow d'alerte [n8n ou rappels calendrier] sur les échéances.",
  "conseil": "Traiter l'audit sur les intitulés de fichiers et les dates, sans charger les documents eux-mêmes dans l'outil : les pièces RH contiennent des données personnelles sensibles.",
  "skill": null
 },
 {
  "id": "reponses-emails-rh",
  "titre": "Automatiser les réponses aux emails RH récurrents",
  "service": "rh",
  "besoin": "mails",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "club",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Congés, attestations, mutuelle, notes de frais : les mêmes questions RH reviennent chaque semaine par mail, et chaque réponse individuelle mange le temps que vous devriez passer sur les sujets de fond.",
  "gain": "L'IA prépare les réponses aux demandes récurrentes à partir de vos règles internes — vous validez au lieu de rédiger, et les sujets sensibles restent traités en direct.",
  "prompt": "Crée un assistant de réponses RH avec en sources nos documents de référence : [coller : règlement intérieur, accords, procédures congés et frais, FAQ interne]. Pour chaque mail reçu [coller] : identifie la demande, cite la règle applicable (document et article), rédige la réponse : cordiale, factuelle, avec la procédure à suivre et le lien ou formulaire concerné. Si la demande touche une situation individuelle sensible (santé, conflit, rémunération), réponds uniquement : à traiter en direct par le service RH.",
  "conseil": "Coder en dur l'exclusion des sujets sensibles (santé, conflits, salaires) : l'automatisation RH s'arrête là où commence la situation individuelle.",
  "skill": null
 },
 {
  "id": "offre-emploi-format-type",
  "titre": "Transformer une demande en offre d'emploi au format maison",
  "service": "rh",
  "besoin": "templates",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "comite",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Les demandes de recrutement vous arrivent en mails vagues ou fiches incomplètes : vous réécrivez chaque offre d'emploi de zéro pour la mettre au format maison, avec des allers-retours pour obtenir les informations manquantes.",
  "gain": "L'IA transforme chaque demande en offre publiable au format maison et liste d'un coup les informations manquantes — vous les réclamez en un seul message.",
  "prompt": "Voici notre modèle d'offre d'emploi [coller le format maison] et une demande de recrutement reçue : [coller le mail ou la fiche]. Rédige l'offre au format maison : intitulé normalisé, missions structurées, profil recherché (requis vs souhaité), conditions [contrat, lieu, rémunération si fournie], processus de candidature. Liste à part les informations manquantes à demander au service avant publication, avec une question précise pour chacune.",
  "conseil": "Envoyer la liste des manques en une seule fois au demandeur : les allers-retours au fil de l'eau sont ce qui fait traîner les publications.",
  "skill": null
 },
 {
  "id": "onboarding-rh-automatise",
  "titre": "Automatiser l'onboarding RH d'un nouvel arrivant",
  "service": "rh",
  "besoin": "automatisation",
  "faisabilite": "complexe",
  "portee": "transversal",
  "structures": [
   "ligue",
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Chaque arrivée déclenche la même chaîne manuelle : compte utilisateur, licences logicielles, groupes de distribution, accès aux outils métiers. Des jours de délai, des oublis systématiques, et un nouvel arrivant improductif sa première semaine.",
  "gain": "Le workflow exécute l'onboarding technique dès la fiche d'arrivée validée — le nouvel arrivant est opérationnel le jour un, vous ne gérez que les exceptions.",
  "prompt": "Un workflow (n8n, Power Automate ou équivalent) est déclenché par la fiche d'arrivée RH [poste, service, date, manager]. Étapes automatisées : création du compte utilisateur et de la boîte mail, attribution des licences selon le profil de poste [matrice poste/outils à formaliser], ajout aux groupes de distribution et équipes du service, envoi du kit d'accueil au manager et à l'arrivant, création des rappels J+7 et J+30 pour les vérifications. L'IA sert à générer la matrice poste/accès depuis l'existant et à rédiger les messages du parcours.",
  "process": [
   "Déclencher le workflow à la validation de la fiche d'arrivée RH",
   "Créer le compte utilisateur et la boîte mail",
   "Attribuer les licences selon la matrice poste/outils",
   "Ajouter l'arrivant aux groupes de distribution et aux équipes du service",
   "Envoyer le kit d'accueil au manager et à l'arrivant",
   "Créer les rappels J+7 et J+30 pour les vérifications"
  ],
  "conseil": "Formaliser d'abord la matrice poste/accès avec la DSI : l'automatisation ne vaut que si la règle d'attribution est claire, sinon elle industrialise le désordre.",
  "skill": null
 },
 {
  "id": "verif-dossier-habilitation",
  "titre": "Vérifier la complétude d'un dossier d'habilitation d'organisme de formation",
  "service": "formation",
  "besoin": "analyse",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue"
  ],
  "preuve": "eprouve",
  "douleur": "Instruire un dossier d'habilitation vous impose de contrôler chaque pièce face au référentiel qualité : un travail long et répétitif, où un oubli peut fragiliser la décision de la commission.",
  "gain": "L'IA fait un pré-contrôle exhaustif du dossier en quelques minutes — vous ne traitez plus que les points douteux qu'elle a signalés.",
  "prompt": "Voici le référentiel d'habilitation [joindre le référentiel] et le dossier déposé par l'organisme de formation [joindre le dossier]. Vérifie la complétude et la conformité : liste chaque pièce attendue, indique si elle est présente, conforme ou manquante, et signale les incohérences entre les pièces. Présente le résultat en tableau : pièce, statut, commentaire, action attendue avant passage en commission.",
  "conseil": "Faire tourner l'IA en doublon du contrôle humain sur les premiers dossiers pour caler la grille avant de lui faire confiance.",
  "skill": null
 },
 {
  "id": "cr-visite-controle-of",
  "titre": "Rédiger le compte rendu d'une visite de contrôle d'un organisme de formation",
  "service": "formation",
  "besoin": "redaction",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue"
  ],
  "preuve": "eprouve",
  "douleur": "Chaque visite de contrôle se termine par un rapport à rédiger — conformités, manquements, actions correctives. Vous le reconstruisez après coup à partir de vos notes de terrain, souvent le soir ou plusieurs jours plus tard.",
  "gain": "L'IA transforme vos notes ou votre dictée en compte rendu structuré dès le retour de visite — vous n'avez plus qu'à relire avant envoi.",
  "prompt": "Voici mes notes de la visite de contrôle du [date] chez l'organisme de formation [nom] : [coller les notes ou la dictée vocale]. Rédige le compte rendu de visite selon ce plan : contexte de la visite, points de conformité constatés, manquements relevés classés par gravité, actions correctives demandées avec échéance. Ton factuel et professionnel, prêt à envoyer à l'organisme contrôlé.",
  "conseil": "Dicter ses observations à chaud en fin de visite : la transcription vocale donne une matière bien plus riche que des notes reconstituées.",
  "skill": null
 },
 {
  "id": "anomalies-conformite-reponses",
  "titre": "Recenser les anomalies de conformité et proposer une réponse par anomalie",
  "service": "formation",
  "besoin": "analyse",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue"
  ],
  "preuve": "eprouve",
  "douleur": "Recenser les anomalies de conformité des organismes de formation et rédiger une réponse pour chacune vous occupe environ huit heures par semaine — un traitement répétitif où chaque anomalie appelle pourtant une réponse type.",
  "gain": "L'IA qualifie les anomalies et propose une réponse par cas — vous validez au lieu de tout rédiger.",
  "prompt": "Voici les anomalies relevées dans les dossiers de la semaine : [coller la liste ou les extraits]. Pour chaque anomalie : qualifie-la selon notre typologie [coller la typologie], indique la référence du critère non respecté, et propose la réponse à adresser à l'organisme (constat, exigence, délai de mise en conformité). Signale les cas ambigus à arbitrer humainement.",
  "conseil": "Garder l'arbitrage humain sur les cas signalés comme ambigus : la réponse type ne couvre pas tout.",
  "skill": null
 },
 {
  "id": "convocations-modules-formation",
  "titre": "Automatiser l'édition des convocations aux modules de formation",
  "service": "formation",
  "besoin": "automatisation",
  "faisabilite": "complexe",
  "portee": "transversal",
  "structures": [
   "federation",
   "ligue",
   "comite"
  ],
  "preuve": "demande",
  "douleur": "Chaque convocation à un module de formation suit un circuit de huit étapes manuelles — environ trente minutes par convocation, multipliées par le nombre de stagiaires et de sessions.",
  "gain": "L'automatisation génère le lot complet de convocations prêtes à partir — vous ne faites plus qu'une vérification avant envoi.",
  "prompt": "Dispositif : un scénario d'automatisation lit la liste des stagiaires inscrits depuis le tableur ou la plateforme de formation, remplit le modèle de convocation avec les informations de la session, convertit le document en PDF et prépare l'envoi par mail avec le bon objet et les bonnes pièces jointes. L'équipe formation contrôle le lot généré avant envoi, au lieu de dérouler huit étapes par stagiaire.",
  "process": [
   "Cartographier les étapes existantes du circuit de convocation",
   "Lire la liste des stagiaires inscrits depuis le tableur ou la plateforme de formation",
   "Remplir le modèle de convocation avec les informations de la session",
   "Convertir chaque document en PDF et préparer l'envoi par mail",
   "Contrôler le lot généré avant envoi"
  ],
  "conseil": "Cartographier précisément les huit étapes existantes avant d'automatiser : c'est le process propre qui rend l'automatisation fiable.",
  "skill": null
 },
 {
  "id": "extraction-candidatures-pdf",
  "titre": "Extraire les dossiers de candidature PDF vers un tableau",
  "service": "formation",
  "besoin": "donnees",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Chaque session de formation ou d'habilitation reçoit ses dossiers de candidature en PDF : vous ressaisissez les informations une à une dans le tableau de suivi — des heures de saisie et des erreurs sur les données des candidats.",
  "gain": "L'IA convertit les dossiers en lignes de tableau structurées en quelques minutes, en marquant les champs manquants — vous ne faites plus que relancer les candidats incomplets.",
  "prompt": "Voici des dossiers de candidature en PDF : [joindre]. Extrais pour chaque candidat les champs de notre tableau de suivi : [lister : identité, coordonnées, diplômes, expérience, structure d'origine, pièces jointes fournies]. Présente en tableau au format exact [coller les colonnes]. Pour chaque champ manquant ou illisible dans le dossier, écris MANQUANT au lieu d'inventer, et produis la liste des candidats à relancer avec les pièces attendues.",
  "conseil": "Traiter les dossiers par lots homogènes (même formulaire source) : les extractions sont plus fiables quand la structure des documents est constante.",
  "skill": null
 },
 {
  "id": "courriers-commissions",
  "titre": "Rédiger les courriers des commissions de formation",
  "service": "formation",
  "besoin": "templates",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Chaque session de commission produit sa série de courriers — convocations, notifications de décision, demandes de pièces complémentaires : une rédaction normée et répétitive qui s'accumule après chaque séance.",
  "gain": "L'IA génère tous les courriers d'une session depuis le relevé de décisions, mentions obligatoires comprises — vous ne traitez à la main que les cas hors modèles qu'elle signale.",
  "prompt": "Voici le relevé de décisions de la commission du [date] [coller : dossier, décision, motif] et nos modèles de courriers [coller : notification favorable, défavorable, demande de pièces, convocation]. Génère le courrier adapté pour chaque dossier : modèle correspondant à la décision, motivation reprise du relevé, mentions obligatoires (voies de recours, délais) systématiques. Signale les dossiers dont la décision ne correspond à aucun modèle plutôt que d'improviser un courrier.",
  "conseil": "Faire signaler les cas hors modèles plutôt que laisser improviser : un courrier de commission inventé engage juridiquement la structure.",
  "skill": null
 },
 {
  "id": "conversion-gestion-jury",
  "titre": "Automatiser la préparation documentaire des jurys",
  "service": "formation",
  "besoin": "automatisation",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Chaque session de jury exige de convertir et d'assembler les documents — dossiers candidats en PDF, grilles, convocations, procès-verbaux : des manipulations de fichiers répétitives qui vous occupent des journées avant chaque session.",
  "gain": "Le workflow assemble automatiquement le dossier documentaire complet de chaque jury — vos gestionnaires préparent la session, plus les fichiers.",
  "prompt": "Dispositif : pour chaque session de jury, un workflow prend la liste des candidats [tableau source] et : 1) convertit les documents Word en PDF au nommage normalisé [candidat_piece_session], 2) assemble le dossier par candidat (candidature, grilles vierges, pièces), 3) génère depuis les modèles les convocations des membres du jury et des candidats avec leurs informations propres, 4) prépare la trame de procès-verbal pré-remplie (session, jury, candidats). L'IA génère les documents à variables ; la conversion et l'assemblage passent par l'outil bureautique ou un workflow n8n.",
  "conseil": "Normaliser le nommage des fichiers sources avant d'automatiser : un assemblage automatique sur des fichiers mal nommés distribue les mauvaises pièces aux mauvais candidats.",
  "skill": null
 },
 {
  "id": "fiche-instructeur-preremplie",
  "titre": "Pré-remplir la fiche d'instruction avec notation par critère",
  "service": "formation",
  "besoin": "templates",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Pour chaque dossier à instruire, vous recopiez les éléments du dossier dans la fiche d'évaluation avant même de commencer à évaluer : la moitié du temps d'instruction part en manutention documentaire.",
  "gain": "L'IA pré-remplit la fiche avec les éléments factuels du dossier, page source à l'appui — l'instructeur ne fait plus que l'évaluation.",
  "prompt": "Voici notre fiche d'instruction type [coller : critères, éléments attendus par critère] et un dossier de candidature [joindre]. Pré-remplis la fiche : pour chaque critère, reporte les éléments factuels du dossier qui s'y rapportent (avec la page source), sans porter de jugement ni proposer de note. Marque VIDE les critères sans éléments dans le dossier. L'évaluation et la notation restent la part de l'instructeur : la fiche pré-remplie sépare visuellement les faits reportés (pré-remplis) de l'évaluation (à remplir).",
  "conseil": "Interdire à l'IA de proposer des notes : dès que la fiche arrive avec une notation suggérée, l'instructeur la suit, et l'instruction perd son indépendance.",
  "skill": null
 },
 {
  "id": "controle-pieces-formation",
  "titre": "Contrôler les pièces administratives d'entrée en formation",
  "service": "formation",
  "besoin": "donnees",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Chaque entrée en formation exige son jeu de pièces conformes : diplômes, assurances, certificats, financements. Le contrôle manuel dossier par dossier est répétitif, et une pièce manquante découverte tard bloque le stagiaire à l'entrée.",
  "gain": "L'IA contrôle chaque dossier contre la liste des pièces dès réception et rédige le mail de relance — les blocages se traitent avant l'entrée en formation.",
  "prompt": "Voici la liste des pièces requises pour l'entrée en formation [coller : pièce, critères de validité, périmé si...] et un dossier reçu [joindre les pièces]. Contrôle : chaque pièce présente ou absente, validité (dates, signatures, cohérence des noms entre pièces), conformité aux critères. Produis la fiche de contrôle du dossier (conforme / non conforme / incomplet) et le mail de relance au candidat listant précisément ce qui manque ou doit être refait, avec l'échéance.",
  "conseil": "Vérifier la cohérence des noms entre les pièces d'un même dossier : c'est le contrôle que l'humain saute toujours et qui révèle les dossiers composites.",
  "skill": null
 },
 {
  "id": "mails-habilitation-refus",
  "titre": "Rédiger les mails d'habilitation accordée ou de refus motivé",
  "service": "formation",
  "besoin": "mails",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Après chaque commission d'habilitation, vous rédigez les notifications une à une. Les accords vont vite, mais chaque refus exige une motivation solide et un ton juste — et un refus mal motivé revient en recours.",
  "gain": "L'IA rédige toutes les notifications de la session, les refus motivés critère par critère sur le référentiel — vous relisez et signez.",
  "prompt": "Voici les décisions de la commission d'habilitation [coller : organisme, décision, critères satisfaits et non satisfaits] et le référentiel des critères [coller]. Rédige la notification de chaque dossier : pour les accords, confirmation avec la durée et les conditions ; pour les refus, motivation critère par critère en citant le référentiel, jamais de formulation subjective, les voies et délais de recours, et l'accompagnement possible pour représenter un dossier. Ton institutionnel et respectueux dans les deux cas.",
  "conseil": "Motiver chaque refus uniquement sur les critères du référentiel : toute considération hors référentiel dans le courrier devient un argument de recours.",
  "skill": null
 },
 {
  "id": "comparaison-cdc-certification",
  "titre": "Comparer un cahier des charges de certification au dossier OF",
  "service": "formation",
  "besoin": "documents-longs",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation"
  ],
  "preuve": "teste",
  "douleur": "À chaque renouvellement de certification, vous confrontez des dizaines de pages d'exigences au dossier de votre organisme de formation. Une lecture croisée exhaustive que personne ne peut mener sereinement sous délai.",
  "gain": "L'IA évalue la conformité exigence par exigence et priorise les écarts — vous les traitez avant le dépôt au lieu de les découvrir chez l'auditeur.",
  "prompt": "Voici le cahier des charges de la certification [joindre] et notre dossier d'organisme de formation [joindre]. Confronte-les exigence par exigence : pour chaque exigence du cahier des charges, indique si notre dossier y répond (avec la section et la pièce qui le prouvent), y répond partiellement (ce qui manque), ou n'y répond pas. Produis la matrice de conformité, la liste des écarts priorisée par risque pour la certification, et pour chaque écart l'action corrective avec la pièce à produire.",
  "conseil": "Exiger la référence de la pièce justificative pour chaque exigence couverte : « on y répond » sans preuve documentaire ne passe pas un audit.",
  "skill": null
 },
 {
  "id": "suivi-administratif-of",
  "titre": "Automatiser le suivi administratif de l'organisme de formation",
  "service": "formation",
  "besoin": "automatisation",
  "faisabilite": "complexe",
  "portee": "transversal",
  "structures": [
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Le suivi administratif de vos sessions — questionnaires de satisfaction, relances stagiaires, émargements, attestations — se pilote à la main dans la plateforme de formation. Des relances oubliées et des dossiers incomplets qui ressortent en audit qualité.",
  "gain": "L'automatisation déclenche questionnaires, relances et contrôles d'émargement au bon moment — vos dossiers de session sont complets sans pilotage manuel.",
  "prompt": "Dispositif : un workflow (n8n ou équivalent) connecté à la plateforme de formation, déclenché par les étapes de chaque session : à l'inscription (accusé et pièces à fournir), avant la session (rappel et convocation), pendant (contrôle des émargements du jour, alerte si signature manquante), après (questionnaire de satisfaction, relance à J+7 des non-répondants, génération des attestations). L'IA rédige les messages à variables et produit la synthèse mensuelle : sessions aux dossiers incomplets, taux de réponse aux questionnaires, alertes qualité.",
  "process": [
   "Cartographier les exigences de traçabilité de la certification qualité",
   "Connecter un workflow (n8n ou équivalent) à la plateforme de formation",
   "Déclencher les messages à chaque étape de session (accusé, rappel, convocation)",
   "Contrôler les émargements du jour et alerter en cas de signature manquante",
   "Envoyer le questionnaire de satisfaction et relancer les non-répondants à J+7",
   "Produire la synthèse mensuelle (dossiers incomplets, taux de réponse, alertes qualité)"
  ],
  "conseil": "Cartographier les exigences de la certification qualité (Qualiopi ou équivalente) avant de construire le workflow : c'est elle qui définit ce qui doit être tracé, dans quel délai.",
  "skill": null
 },
 {
  "id": "verification-grilles-certificatives",
  "titre": "Vérifier les grilles certificatives et d'évaluation",
  "service": "formation",
  "besoin": "analyse",
  "faisabilite": "facile",
  "portee": "transversal",
  "structures": [
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Vos grilles certificatives doivent couvrir exactement le référentiel de compétences : les vérifier critère par critère à chaque mise à jour est un travail d'aiguille, et un écart découvert en audit met la certification en risque.",
  "gain": "L'IA contrôle chaque grille contre son référentiel en quelques minutes, matrice de couverture à l'appui — vous corrigez les écarts avant l'audit plutôt que pendant.",
  "prompt": "Voici le référentiel de compétences [joindre] et notre grille certificative [joindre]. Contrôle croisé : 1) chaque compétence du référentiel est-elle évaluée par au moins un critère de la grille (matrice de couverture), 2) chaque critère de la grille se rattache-t-il à une compétence (critères orphelins), 3) les niveaux d'exigence de la grille sont-ils cohérents avec les attendus du référentiel, 4) les modalités d'évaluation prévues sont-elles conformes. Produis la matrice de couverture et la liste des corrections.",
  "conseil": "Rejouer le contrôle à chaque nouvelle version du référentiel : les écarts naissent dans les mises à jour, pas dans la conception initiale.",
  "skill": null
 },
 {
  "id": "avis-commission-habilitation",
  "titre": "Formuler l'avis global pour la commission d'habilitation",
  "service": "formation",
  "besoin": "redaction",
  "faisabilite": "moyen",
  "portee": "transversal",
  "structures": [
   "federation"
  ],
  "preuve": "teste",
  "douleur": "Après l'instruction d'un dossier d'habilitation, vous devez formuler l'avis global et la note de synthèse pour la commission : un exercice délicat qui agrège des évaluations partielles en une position défendable.",
  "gain": "L'IA rédige la note de synthèse et propose l'avis motivé depuis vos évaluations par critère, en signalant les incohérences — vous validez la position avant la commission.",
  "prompt": "Voici l'instruction d'un dossier d'habilitation : [coller : évaluations par critère avec notes et observations de l'instructeur]. Rédige pour la commission : 1) la note de synthèse : forces du dossier, faiblesses, points d'attention, en citant les critères concernés, 2) l'avis global proposé (favorable / favorable avec réserves / défavorable) avec la motivation qui agrège les évaluations, 3) si réserves : leur formulation précise et vérifiable. L'avis doit découler logiquement des évaluations : signale toute incohérence entre les notes et les observations.",
  "conseil": "Faire signaler les incohérences notes/observations avant de formuler l'avis : c'est souvent le signe qu'un critère a été mal évalué, pas mal rédigé.",
  "skill": null
 }
];
