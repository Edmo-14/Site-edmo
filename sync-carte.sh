#!/bin/bash
# ============================================================
# Synchronise la Carte IA du Sport vers le site MaestrIA.
#
# Source  : librairie-skills-sport/carte-ia-sport/  (référence)
# Cible   : maestria-landing/                       (ce dossier)
#
# Fichiers synchronisés :
#   - data/cas.js  (les fiches de cas, générées côté source)
#   - app.js       (la logique applicative, copiée telle quelle)
#
# Jamais synchronisés (spécifiques MaestrIA) :
#   - feuille-de-route.html (structure + funnel MaestrIA)
#   - carte.css             (charte EDMO)
#
# Usage : ./sync-carte.sh          → synchronise
#         ./sync-carte.sh --check  → montre les écarts sans rien copier
# ============================================================

set -euo pipefail

CIBLE="$(cd "$(dirname "$0")" && pwd)"
SOURCE="$CIBLE/../librairie-skills-sport/carte-ia-sport"

if [ ! -d "$SOURCE" ]; then
  echo "❌ Source introuvable : $SOURCE" >&2
  exit 1
fi

MODE="${1:-sync}"
ECARTS=0

compare() {
  local rel="$1"
  if ! cmp -s "$SOURCE/$rel" "$CIBLE/$rel"; then
    ECARTS=$((ECARTS + 1))
    echo "≠ $rel diffère de la source"
  else
    echo "= $rel identique"
  fi
}

echo "Source : $SOURCE"
echo "Cible  : $CIBLE"
echo ""
compare "data/cas.js"
compare "app.js"
echo ""

if [ "$MODE" = "--check" ]; then
  [ "$ECARTS" -eq 0 ] && echo "✅ Tout est synchronisé." || echo "→ $ECARTS fichier(s) à synchroniser (relancer sans --check)."
  exit 0
fi

if [ "$ECARTS" -eq 0 ]; then
  echo "✅ Rien à faire, tout est déjà synchronisé."
  exit 0
fi

mkdir -p "$CIBLE/data"
cp "$SOURCE/data/cas.js" "$CIBLE/data/cas.js"
cp "$SOURCE/app.js" "$CIBLE/app.js"

NB_CAS=$(grep -c '"id"' "$CIBLE/data/cas.js" || true)
echo "✅ Synchronisé : $NB_CAS cas dans data/cas.js."
echo "→ Pense à recharger feuille-de-route.html dans le navigateur pour vérifier."
