#!/bin/bash

# Script pour appliquer les migrations Supabase
# Usage: ./scripts/apply-migrations.sh

echo "🚀 Application des migrations Supabase..."

# Vérifier que Supabase CLI est installé
if ! command -v supabase &> /dev/null; then
    echo "❌ Supabase CLI n'est pas installé. Installez-le d'abord."
    exit 1
fi

# Vérifier que l'utilisateur est connecté
if ! supabase projects list &> /dev/null; then
    echo "❌ Vous n'êtes pas connecté à Supabase. Exécutez 'supabase login' d'abord."
    exit 1
fi

# Lier le projet local au projet distant
echo "🔗 Liaison du projet local au projet distant..."
supabase link --project-ref huvjfkaqszetdbbfvahw

# Appliquer les migrations
echo "📊 Application des migrations..."
supabase db push

echo "✅ Migrations appliquées avec succès !"
echo "🌐 Vérifiez vos tables dans le dashboard Supabase :"
echo "   https://supabase.com/dashboard/project/huvjfkaqszetdbbfvahw/database/tables" 