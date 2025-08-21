-- =====================================================
-- SCHEMA COMPLET POUR DELETEMYDATA.ONLINE
-- =====================================================

-- 1) Comptes & multi-tenant
create table public.workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique,
  plan text check (plan in ('free','pro','business','enterprise')) default 'free',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.workspace_members (
  workspace_id uuid references public.workspaces(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  role text check (role in ('owner','admin','member')) default 'member',
  created_at timestamptz default now(),
  primary key (workspace_id, user_id)
);

-- 2) Référentiel contacts privacy (actif clé)
create table public.privacy_contacts (
  id bigserial primary key,
  domain text not null,                           -- ex: "example.com"
  company_name text,                              -- "Example SAS"
  email text not null,                            -- "dpo@example.com"
  type text check (type in ('dpo','privacy','legal','support','generic')) default 'privacy',
  source text,                                    -- "cnil", "site:privacy-policy", "cppa", "manual"
  url text,                                       -- url de la page source
  confidence int check (confidence between 0 and 100) default 70,
  last_verified_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(domain, email)
);

-- 3) Demandes & suivi
create table public.deletion_requests (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references public.workspaces(id) on delete cascade,
  requester_user_id uuid not null references public.profiles(id) on delete set null,
  target_domain text not null,                    -- "example.com"
  target_company text,
  target_email text,                              -- email choisi (copié depuis privacy_contacts)
  subject text not null,                          -- "Request for erasure (GDPR)"
  body_markdown text not null,                    -- contenu de la demande (stocké)
  body_html text,                                 -- version HTML générée
  status text check (status in ('draft','queued','sent','bounced','replied','completed','expired')) default 'draft',
  sent_via text check (sent_via in ('manual','smtp','api','certified')) default 'manual',
  external_message_id text,                       -- id retour de ton provider email
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  sent_at timestamptz
);

create table public.request_events (
  id bigserial primary key,
  request_id uuid references public.deletion_requests(id) on delete cascade,
  kind text check (kind in ('created','queued','sent','bounce','reply','reminder','completed','note')),
  payload jsonb,
  created_at timestamptz default now()
);

-- 4) File d'enrichissement (scrape/validation d'emails)
create table public.enrichment_jobs (
  id bigserial primary key,
  workspace_id uuid references public.workspaces(id) on delete cascade,
  domain text not null,
  status text check (status in ('queued','running','done','failed')) default 'queued',
  attempts int default 0,
  result jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 5) Abonnements et facturation
create table public.workspace_subscriptions (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references public.workspaces(id) on delete cascade,
  stripe_subscription_id text unique,
  plan text check (plan in ('free','pro','business','enterprise')),
  status text check (status in ('active','canceled','past_due','unpaid')),
  current_period_start timestamptz,
  current_period_end timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- =====================================================
-- INDEXES POUR LES PERFORMANCES
-- =====================================================

create index on public.workspaces (slug);
create index on public.workspace_members (user_id);
create index on public.workspace_members (workspace_id);

create index on public.privacy_contacts (domain);
create index on public.privacy_contacts (type);
create index on public.privacy_contacts (confidence desc);
create index on public.privacy_contacts (last_verified_at);

create index on public.deletion_requests (workspace_id);
create index on public.deletion_requests (target_domain);
create index on public.deletion_requests (status);
create index on public.deletion_requests (requester_user_id);
create index on public.deletion_requests (created_at);

create index on public.request_events (request_id);
create index on public.request_events (kind);
create index on public.request_events (created_at);

create index on public.enrichment_jobs (status, created_at);
create index on public.enrichment_jobs (workspace_id);

create index on public.workspace_subscriptions (workspace_id);
create index on public.workspace_subscriptions (stripe_subscription_id);

-- =====================================================
-- FONCTIONS UTILES
-- =====================================================

-- Normaliser le domaine (bypass www.)
create or replace function public.norm_domain(url_or_domain text)
returns text language sql immutable as $$
  select regexp_replace(lower(url_or_domain), '^https?://', '')      -- enlève protocole
       |> regexp_replace('^www\.', '')                               -- enlève www.
       |> regexp_replace('/.*$', '');                                -- enlève path
$$;

-- Sélecteur "meilleur email privacy" pour un domaine
create or replace function public.best_privacy_email_for(domain_in text)
returns table(email text, type text, confidence int, company_name text) language sql stable as $$
  select email, type, confidence, company_name
  from public.privacy_contacts
  where domain = public.norm_domain(domain_in)
  order by
    case type when 'dpo' then 1 when 'privacy' then 2 when 'legal' then 3 when 'support' then 4 else 5 end,
    confidence desc
  limit 1;
$$;

-- Compter les demandes par statut pour un workspace
create or replace function public.request_stats_for_workspace(ws_id uuid)
returns table(status text, count bigint) language sql stable as $$
  select status, count(*) as count
  from public.deletion_requests
  where workspace_id = ws_id
  group by status;
$$;

-- =====================================================
-- ROW LEVEL SECURITY (RLS)
-- =====================================================

-- Activer RLS sur toutes les tables
alter table public.workspaces enable row level security;
alter table public.workspace_members enable row level security;
alter table public.profiles enable row level security;
alter table public.deletion_requests enable row level security;
alter table public.request_events enable row level security;
alter table public.enrichment_jobs enable row level security;
alter table public.workspace_subscriptions enable row level security;

-- Référentiel privacy_contacts : lecture publique (auth requise) ; écriture via service role
alter table public.privacy_contacts enable row level security;

-- =====================================================
-- POLITIQUES RLS
-- =====================================================

-- Profils & membres
create policy "profiles are self"
on public.profiles for select using (id = auth.uid());

create policy "profiles can update self"
on public.profiles for update using (id = auth.uid());

create policy "members can read own workspaces"
on public.workspace_members
for select using (user_id = auth.uid());

create policy "members can read workspaces"
on public.workspaces
for select using (
  exists (select 1 from public.workspace_members m
          where m.workspace_id = workspaces.id and m.user_id = auth.uid())
);

-- Demandes & évènements (multi-tenant)
create policy "rw requests in my workspace"
on public.deletion_requests
for select using (
  exists (select 1 from public.workspace_members m
          where m.workspace_id = deletion_requests.workspace_id
            and m.user_id = auth.uid())
)
with check (
  exists (select 1 from public.workspace_members m
          where m.workspace_id = deletion_requests.workspace_id
            and m.user_id = auth.uid())
);

create policy "rw events via parent request"
on public.request_events
for select using (
  exists (select 1 from public.deletion_requests r
          join public.workspace_members m on m.workspace_id = r.workspace_id
         where r.id = request_events.request_id and m.user_id = auth.uid())
)
with check (
  exists (select 1 from public.deletion_requests r
          join public.workspace_members m on m.workspace_id = r.workspace_id
         where r.id = request_events.request_id and m.user_id = auth.uid())
);

-- Jobs
create policy "rw jobs in my workspace"
on public.enrichment_jobs
for select using (
  exists (select 1 from public.workspace_members m
          where m.workspace_id = enrichment_jobs.workspace_id
            and m.user_id = auth.uid())
)
with check (
  exists (select 1 from public.workspace_members m
          where m.workspace_id = enrichment_jobs.workspace_id
            and m.user_id = auth.uid())
);

-- Abonnements
create policy "read subscriptions in my workspace"
on public.workspace_subscriptions
for select using (
  exists (select 1 from public.workspace_members m
          where m.workspace_id = workspace_subscriptions.workspace_id
            and m.user_id = auth.uid())
);

-- Référentiel privacy_contacts (lecture globale, écriture par service role)
create policy "read privacy contacts (auth only)"
on public.privacy_contacts for select
using (auth.role() = 'authenticated');

-- =====================================================
-- TRIGGERS POUR MISE À JOUR AUTOMATIQUE
-- =====================================================

-- Mettre à jour updated_at automatiquement
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_workspaces_updated_at before update on public.workspaces
  for each row execute function public.update_updated_at_column();

create trigger update_profiles_updated_at before update on public.profiles
  for each row execute function public.update_updated_at_column();

create trigger update_deletion_requests_updated_at before update on public.deletion_requests
  for each row execute function public.update_updated_at_column();

create trigger update_enrichment_jobs_updated_at before update on public.enrichment_jobs
  for each row execute function public.update_updated_at_column();

create trigger update_workspace_subscriptions_updated_at before update on public.workspace_subscriptions
  for each row execute function public.update_updated_at_column();

-- =====================================================
-- DONNÉES INITIALES
-- =====================================================

-- Créer un workspace par défaut pour les nouveaux utilisateurs
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.workspaces (name, slug)
  values (new.email || '''s Workspace', lower(regexp_replace(new.email, '[^a-zA-Z0-9]', '', 'g')));
  
  insert into public.workspace_members (workspace_id, user_id, role)
  select id, new.id, 'owner'
  from public.workspaces
  where slug = lower(regexp_replace(new.email, '[^a-zA-Z0-9]', '', 'g'));
  
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Insérer quelques contacts privacy de démonstration
insert into public.privacy_contacts (domain, company_name, email, type, source, confidence) values
('google.com', 'Google LLC', 'dpo@google.com', 'dpo', 'manual', 95),
('facebook.com', 'Meta Platforms Inc.', 'dpo@facebook.com', 'dpo', 'manual', 95),
('amazon.com', 'Amazon.com Inc.', 'privacy@amazon.com', 'privacy', 'manual', 90),
('apple.com', 'Apple Inc.', 'privacy@apple.com', 'privacy', 'manual', 90),
('microsoft.com', 'Microsoft Corporation', 'privacy@microsoft.com', 'privacy', 'manual', 90),
('netflix.com', 'Netflix Inc.', 'privacy@netflix.com', 'privacy', 'manual', 85),
('twitter.com', 'X Corp.', 'privacy@twitter.com', 'privacy', 'manual', 85),
('linkedin.com', 'Microsoft Corporation', 'privacy@linkedin.com', 'privacy', 'manual', 85),
('instagram.com', 'Meta Platforms Inc.', 'dpo@instagram.com', 'dpo', 'manual', 90),
('youtube.com', 'Google LLC', 'privacy@youtube.com', 'privacy', 'manual', 90)
on conflict (domain, email) do nothing;

-- =====================================================
-- LISTE D'ATTENTE RGPD
-- =====================================================

-- Table pour la liste d'attente des demandes RGPD
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

-- Index pour la performance
create index on public.waiting_list_rgpd (email);
create index on public.waiting_list_rgpd (status);
create index on public.waiting_list_rgpd (created_at);
create index on public.waiting_list_rgpd (company_domain);

-- Activer RLS
alter table public.waiting_list_rgpd enable row level security;

-- Politique RLS : lecture publique, écriture publique (pour l'inscription)
create policy "public read access"
on public.waiting_list_rgpd for select
using (true);

create policy "public insert access"
on public.waiting_list_rgpd for insert
with check (true);

-- Trigger pour updated_at
create trigger update_waiting_list_rgpd_updated_at before update on public.waiting_list_rgpd
  for each row execute function public.update_updated_at_column(); 