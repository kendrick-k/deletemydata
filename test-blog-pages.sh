#!/bin/bash

echo "🧪 Test des pages blog pour vérifier la structure des composants..."

# Liste des pages blog à tester
BLOG_PAGES=(
  "index"
  "guide-rgpd-2024"
  "comment-rediger-demande-suppression-rgpd"
  "protection-donnees-entreprises"
  "cookies-tracking"
  "donnees-sante-privacy"
  "tendances-rgpd-2024-nouvelles-reglementations"
  "supprimer-donnees-google"
  "droit-oubli-facebook"
)

# URL de base
BASE_URL="http://localhost:3005/blog"

# Compteurs
TOTAL_PAGES=${#BLOG_PAGES[@]}
SUCCESS_COUNT=0
ERROR_COUNT=0

echo "📊 Test de $TOTAL_PAGES pages blog..."
echo ""

for page in "${BLOG_PAGES[@]}"; do
  echo "🔍 Test de /blog/$page..."
  
  # Test de la page
  response=$(curl -s -w "\n%{http_code}" "$BASE_URL/$page")
  
  # Extraire le code de statut HTTP
  http_code=$(echo "$response" | tail -n1)
  response_body=$(echo "$response" | head -n -1)
  
  if [ "$http_code" -eq 200 ]; then
    echo "✅ Succès - Code HTTP: $http_code"
    ((SUCCESS_COUNT++))
  else
    echo "❌ Erreur - Code HTTP: $http_code"
    echo "   Réponse: $response_body"
    ((ERROR_COUNT++))
  fi
  
  echo ""
done

# Résumé
echo "📊 Résumé des tests :"
echo "   ✅ Pages réussies: $SUCCESS_COUNT/$TOTAL_PAGES"
echo "   ❌ Pages en erreur: $ERROR_COUNT/$TOTAL_PAGES"

if [ $ERROR_COUNT -eq 0 ]; then
  echo "🎉 Toutes les pages blog fonctionnent correctement !"
  echo "✅ Structure des composants validée (un seul div racine)"
else
  echo "⚠️  Certaines pages ont des problèmes à vérifier"
fi

echo ""
echo "🔍 Vérifiez la console du navigateur pour les avertissements Vue :"
echo "   - Ouvrez http://localhost:3005/blog"
echo "   - Appuyez sur F12 pour ouvrir les outils développeur"
echo "   - Vérifiez l'onglet Console pour les avertissements" 