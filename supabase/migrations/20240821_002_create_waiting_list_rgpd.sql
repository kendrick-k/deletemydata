-- Migration: Créer la table waiting_list_rgpd
-- Date: 2024-08-21
-- Description: Table pour gérer la liste d'attente des demandes RGPD

-- 1. Créer la table principale
create table public.waiting_list_rgpd (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  first_name text,
  last_name text,
  company_name text,
  company_domain text,
  request_type text check (request_type in ('deletion', 'access', 'rectification')) default 'deletion',
  additional_details text,
  status text check (status in ('pending', 'contacted', 'converted', 'unsubscribed')) default 'pending',
  source text, -- 'website', 'generator', 'directory', etc.
  ip_address inet,
  user_agent text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 2. Créer les index pour la performance
create index on public.waiting_list_rgpd (email);
create index on public.waiting_list_rgpd (status);
create index on public.waiting_list_rgpd (created_at);
create index on public.waiting_list_rgpd (company_domain);

-- 3. Activer Row Level Security (RLS)
alter table public.waiting_list_rgpd enable row level security;

-- 4. Créer les politiques RLS
-- Lecture publique, écriture publique (pour l'inscription)
create policy "public read access"
on public.waiting_list_rgpd for select
using (true);

create policy "public insert access"
on public.waiting_list_rgpd for insert
with check (true);

-- 5. Créer le trigger pour updated_at automatique
create trigger update_waiting_list_rgpd_updated_at 
  before update on public.waiting_list_rgpd
  for each row execute function public.update_updated_at_column();

-- 6. Créer des fonctions utiles pour la gestion
-- Statistiques de la liste d'attente
create or replace function public.waiting_list_stats()
returns table(status text, count bigint) language sql stable as $$
  select status, count(*) as count
  from public.waiting_list_rgpd
  group by status
  order by count desc;
$$;

-- Inscriptions par source
create or replace function public.waiting_list_by_source()
returns table(source text, count bigint) language sql stable as $$
  select coalesce(source, 'unknown') as source, count(*) as count
  from public.waiting_list_rgpd
  group by source
  order by count desc;
$$;

-- Inscriptions par type de demande
create or replace function public.waiting_list_by_request_type()
returns table(request_type text, count bigint) language sql stable as $$
  select request_type, count(*) as count
  from public.waiting_list_rgpd
  group by request_type
  order by count desc;
$$; 