#!/bin/bash

echo "🧪 Test de l'API generator-usage..."

# URL de l'API (ajustez le port si nécessaire)
API_URL="http://localhost:3005/api/generator-usage"

# Données de test
TEST_DATA='{
  "companyName": "Google",
  "companyDomain": "google.com",
  "requestType": "deletion",
  "userEmail": "test@example.com",
  "additionalDetails": "Test de l\'API generator-usage"
}'

echo "📤 Envoi de la requête POST à $API_URL"
echo "📋 Données: $TEST_DATA"

# Test de l'API
response=$(curl -s -w "\n%{http_code}" \
  -X POST \
  -H "Content-Type: application/json" \
  -d "$TEST_DATA" \
  "$API_URL")

# Extraire le code de statut HTTP
http_code=$(echo "$response" | tail -n1)
response_body=$(echo "$response" | head -n -1)

echo ""
echo "📊 Résultat:"
echo "HTTP Code: $http_code"
echo "Response: $response_body"

# Vérifier le résultat
if [ "$http_code" -eq 200 ] || [ "$http_code" -eq 201 ]; then
  echo "✅ Succès ! L'API fonctionne correctement."
  echo "📊 L'utilisation du générateur a été enregistrée dans Supabase."
else
  echo "❌ Erreur ! L'API a retourné le code $http_code"
  echo "🔍 Vérifiez que :"
  echo "   1. Le serveur Nuxt fonctionne sur le port 3005"
  echo "   2. La table generator_usage existe dans Supabase"
  echo "   3. Les variables d'environnement sont configurées"
fi 