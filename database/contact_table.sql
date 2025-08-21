-- =====================================================
-- TABLE CONTACT_MESSAGES POUR DELETEMYDATA.ONLINE
-- =====================================================
-- À exécuter dans votre dashboard Supabase : 
-- https://supabase.com/dashboard/project/huvjfkaqszetdbbfvahw/database/tables

-- 1. Créer la table principale
create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  subject text not null check (subject in ('support', 'billing', 'partnership', 'press', 'legal', 'other')),
  message text not null,
  accept_privacy boolean not null default false,
  status text check (status in ('new', 'in_progress', 'resolved', 'spam')) default 'new',
  priority text check (priority in ('low', 'medium', 'high', 'urgent')) default 'medium',
  assigned_to uuid references public.profiles(id),
  internal_notes text,
  ip_address inet,
  user_agent text,
  source text default 'contact_form',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 2. Créer les index pour la performance
create index on public.contact_messages (email);
create index on public.contact_messages (status);
create index on public.contact_messages (subject);
create index on public.contact_messages (priority);
create index on public.contact_messages (created_at);
create index on public.contact_messages (assigned_to);

-- 3. Activer Row Level Security (RLS)
alter table public.contact_messages enable row level security;

-- 4. Créer les politiques RLS
-- Permettre l'insertion publique (pour le formulaire de contact)
create policy "public insert access"
on public.contact_messages for insert
with check (true);

-- Permettre la lecture aux admins seulement
create policy "admins can read all"
on public.contact_messages for select
using (
  exists (
    select 1 from public.workspace_members wm
    join public.workspaces w on w.id = wm.workspace_id
    where wm.user_id = auth.uid() 
    and wm.role in ('owner', 'admin')
    and w.plan in ('pro', 'business', 'enterprise')
  )
);

-- Permettre la mise à jour aux admins seulement
create policy "admins can update"
on public.contact_messages for update
using (
  exists (
    select 1 from public.workspace_members wm
    join public.workspaces w on w.id = wm.workspace_id
    where wm.user_id = auth.uid() 
    and wm.role in ('owner', 'admin')
    and w.plan in ('pro', 'business', 'enterprise')
  )
);

-- 5. Créer le trigger pour updated_at automatique
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_contact_messages_updated_at 
  before update on public.contact_messages
  for each row execute function public.update_updated_at_column();

-- 6. Créer des fonctions utiles pour la gestion
-- Statistiques des messages par statut
create or replace function public.contact_messages_stats()
returns table(status text, count bigint) language sql stable as $$
  select status, count(*) as count
  from public.contact_messages
  group by status
  order by count desc;
$$;

-- Messages non traités (nouveaux)
create or replace function public.pending_contact_messages()
returns table(id uuid, first_name text, last_name text, email text, subject text, created_at timestamptz) language sql stable as $$
  select id, first_name, last_name, email, subject, created_at
  from public.contact_messages
  where status = 'new'
  order by created_at asc;
$$;

-- Messages par priorité
create or replace function public.contact_messages_by_priority()
returns table(priority text, count bigint) language sql stable as $$
  select priority, count(*) as count
  from public.contact_messages
  where status != 'resolved'
  group by priority
  order by 
    case priority 
      when 'urgent' then 1 
      when 'high' then 2 
      when 'medium' then 3 
      when 'low' then 4 
    end;
$$;

-- 7. Insérer quelques données de test (optionnel)
insert into public.contact_messages (first_name, last_name, email, subject, message, accept_privacy, status, priority) values
('Jean', 'Dupont', 'jean.dupont@example.com', 'support', 'Bonjour, j''ai un problème avec la génération de PDF.', true, 'new', 'medium'),
('Marie', 'Martin', 'marie.martin@entreprise.fr', 'partnership', 'Nous souhaiterions discuter d''un partenariat.', true, 'new', 'high'),
('Pierre', 'Durand', 'pierre.durand@startup.io', 'legal', 'Question sur la conformité RGPD de votre service.', true, 'new', 'medium')
on conflict do nothing;

-- =====================================================
-- VÉRIFICATION
-- =====================================================
-- Vérifiez que la table a été créée :
-- select * from public.contact_messages;

-- Vérifiez les politiques RLS :
-- select schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
-- from pg_policies 
-- where tablename = 'contact_messages';

-- Testez les fonctions :
-- select * from public.contact_messages_stats();
-- select * from public.pending_contact_messages(); 