-- Script simple pour créer la table waiting_list_rgpd
-- À exécuter dans l'éditeur SQL de Supabase

-- Créer la table si elle n'existe pas
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

-- Créer les index
create index if not exists idx_waiting_list_email on public.waiting_list_rgpd(email);
create index if not exists idx_waiting_list_status on public.waiting_list_rgpd(status);

-- Activer RLS
alter table public.waiting_list_rgpd enable row level security;

-- Politiques RLS
drop policy if exists "Allow public insert" on public.waiting_list_rgpd;
create policy "Allow public insert" on public.waiting_list_rgpd for insert with check (true);

drop policy if exists "Allow public read" on public.waiting_list_rgpd;
create policy "Allow public read" on public.waiting_list_rgpd for select using (true);

drop policy if exists "Allow public update" on public.waiting_list_rgpd;
create policy "Allow public update" on public.waiting_list_rgpd for update using (true);

-- Vérifier que la table existe
select 
  table_name,
  column_name,
  data_type,
  is_nullable
from information_schema.columns 
where table_name = 'waiting_list_rgpd'
order by ordinal_position; 