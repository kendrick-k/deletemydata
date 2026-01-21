#!/bin/bash

# Script pour corriger le problème RLS sur waiting_list_rgpd
# Usage: ./scripts/fix-rls.sh

echo "🔒 Correction du problème RLS sur waiting_list_rgpd..."

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

# Appliquer la migration de correction RLS
echo "📊 Application de la correction RLS..."
supabase db push

echo "✅ Correction RLS appliquée avec succès !"
echo ""
echo "🌐 Vérifiez que RLS est maintenant activé dans le dashboard Supabase :"
echo "   https://supabase.com/dashboard/project/huvjfkaqszetdbbfvahw/database/tables"
echo ""
echo "📋 Vous pouvez aussi exécuter le script SQL directement dans l'éditeur SQL :"
echo "   database/fix_rls_waiting_list.sql"
echo ""
echo "🔍 Pour vérifier que le problème est résolu, relancez le linter Supabase."

