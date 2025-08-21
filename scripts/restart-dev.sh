#!/bin/bash

echo "🔄 Redémarrage du serveur de développement..."

# Tuer les processus Nuxt existants
echo "🛑 Arrêt des processus existants..."
pkill -f "nuxt dev" 2>/dev/null || echo "Aucun processus Nuxt trouvé"

# Attendre un peu
sleep 2

# Redémarrer le serveur
echo "🚀 Démarrage du serveur..."
npm run dev