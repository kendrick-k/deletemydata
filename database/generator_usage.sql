-- Table pour tracker les utilisations du générateur RGPD
-- À exécuter dans l'éditeur SQL de Supabase

-- Créer la table si elle n'existe pas
create table if not exists public.generator_usage (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  company_domain text,
  request_type text check (request_type in ('deletion', 'access', 'rectification', 'portability', 'other')) default 'deletion',
  user_email text, -- Optionnel, si l'utilisateur fournit son email
  user_agent text,
  ip_address inet,
  source text default 'website',
  additional_details text,
  generated_at timestamptz default now()
);

-- Créer les index pour les performances
create index if not exists idx_generator_usage_company on public.generator_usage(company_name);
create index if not exists idx_generator_usage_type on public.generator_usage(request_type);
create index if not exists idx_generator_usage_date on public.generator_usage(generated_at);

-- Activer RLS (Row Level Security)
alter table public.generator_usage enable row level security;

-- Politiques RLS pour permettre l'insertion publique
drop policy if exists "Allow public insert" on public.generator_usage;
create policy "Allow public insert" on public.generator_usage for insert with check (true);

-- Politique pour permettre la lecture (optionnel, pour les admins)
drop policy if exists "Allow public read" on public.generator_usage;
create policy "Allow public read" on public.generator_usage for select using (true);

-- Vérifier que la table existe
select 
  table_name,
  column_name,
  data_type,
  is_nullable
from information_schema.columns 
where table_name = 'generator_usage'
order by ordinal_position; 