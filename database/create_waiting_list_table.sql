-- Script pour créer la table waiting_list_rgpd
-- À exécuter dans l'éditeur SQL de Supabase

-- 1. Créer la table principale
create table if not exists public.waiting_list_rgpd (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  first_name text not null,
  last_name text not null,
  company_name text,
  company_domain text,
  request_type text check (request_type in ('deletion', 'access', 'rectification', 'portability', 'other')) default 'deletion',
  additional_details text,
  status text check (status in ('pending', 'contacted', 'completed', 'cancelled')) default 'pending',
  source text default 'website',
  user_agent text,
  ip_address inet,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 2. Créer les index pour les performances
create index if not exists idx_waiting_list_email on public.waiting_list_rgpd(email);
create index if not exists idx_waiting_list_status on public.waiting_list_rgpd(status);
create index if not exists idx_waiting_list_created_at on public.waiting_list_rgpd(created_at);
create index if not exists idx_waiting_list_request_type on public.waiting_list_rgpd(request_type);

-- 3. Activer Row Level Security (RLS)
alter table public.waiting_list_rgpd enable row level security;

-- 4. Créer les politiques RLS
-- Politique pour permettre l'insertion publique
create policy "Allow public insert" on public.waiting_list_rgpd
  for insert with check (true);

-- Politique pour permettre la lecture publique (optionnel, pour les admins)
create policy "Allow public read" on public.waiting_list_rgpd
  for select using (true);

-- Politique pour permettre la mise à jour publique (pour les utilisateurs existants)
create policy "Allow public update" on public.waiting_list_rgpd
  for update using (true);

-- 5. Créer le trigger pour updated_at
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_waiting_list_updated_at
  before update on public.waiting_list_rgpd
  for each row
  execute function update_updated_at_column();

-- 6. Créer des fonctions utilitaires
create or replace function waiting_list_stats()
returns table (
  total_count bigint,
  pending_count bigint,
  contacted_count bigint,
  completed_count bigint
) as $$
begin
  return query
  select 
    count(*) as total_count,
    count(*) filter (where status = 'pending') as pending_count,
    count(*) filter (where status = 'contacted') as contacted_count,
    count(*) filter (where status = 'completed') as completed_count
  from public.waiting_list_rgpd;
end;
$$ language plpgsql security definer;

-- 7. Insérer des données de test (optionnel)
-- insert into public.waiting_list_rgpd (email, first_name, last_name, request_type, source) values
--   ('test@example.com', 'Test', 'User', 'deletion', 'website');

-- 8. Vérifier la création
select 
  table_name,
  column_name,
  data_type,
  is_nullable,
  column_default
from information_schema.columns 
where table_name = 'waiting_list_rgpd'
order by ordinal_position; 