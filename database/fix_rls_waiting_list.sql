-- Script pour corriger le problème RLS sur waiting_list_rgpd
-- À exécuter dans l'éditeur SQL de Supabase

-- 1. Vérifier l'état actuel de RLS
select 
  schemaname,
  tablename,
  rowsecurity as rls_enabled
from pg_tables 
where tablename = 'waiting_list_rgpd' 
  and schemaname = 'public';

-- 2. Activer RLS sur la table
alter table public.waiting_list_rgpd enable row level security;

-- 3. Supprimer les anciennes politiques pour les recréer proprement
drop policy if exists "public read access" on public.waiting_list_rgpd;
drop policy if exists "public insert access" on public.waiting_list_rgpd;
drop policy if exists "Allow public insert" on public.waiting_list_rgpd;
drop policy if exists "Allow public read" on public.waiting_list_rgpd;
drop policy if exists "Allow public update" on public.waiting_list_rgpd;

-- 4. Créer les nouvelles politiques RLS
-- Accès en lecture publique (pour les statistiques et données publiques)
create policy "waiting_list_public_read"
on public.waiting_list_rgpd for select
using (true);

-- Accès en insertion publique (pour les nouvelles inscriptions)
create policy "waiting_list_public_insert"
on public.waiting_list_rgpd for insert
with check (true);

-- Accès en mise à jour publique (pour les changements de statut)
create policy "waiting_list_public_update"
on public.waiting_list_rgpd for update
using (true)
with check (true);

-- 5. Vérifier que RLS est maintenant activé
select 
  schemaname,
  tablename,
  rowsecurity as rls_enabled
from pg_tables 
where tablename = 'waiting_list_rgpd' 
  and schemaname = 'public';

-- 6. Afficher toutes les politiques sur la table
select 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
from pg_policies 
where tablename = 'waiting_list_rgpd' 
  and schemaname = 'public';

-- 7. Vérifier que la table est accessible
select count(*) as total_records from public.waiting_list_rgpd;

