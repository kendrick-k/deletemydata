-- Migration: Fix RLS on waiting_list_rgpd table
-- Date: 2024-12-01
-- Description: Ensure Row Level Security is properly enabled and configured

-- 1. Enable RLS on the table (this will fail silently if already enabled)
alter table public.waiting_list_rgpd enable row level security;

-- 2. Drop existing policies to recreate them cleanly
drop policy if exists "public read access" on public.waiting_list_rgpd;
drop policy if exists "public insert access" on public.waiting_list_rgpd;
drop policy if exists "Allow public insert" on public.waiting_list_rgpd;
drop policy if exists "Allow public read" on public.waiting_list_rgpd;
drop policy if exists "Allow public update" on public.waiting_list_rgpd;

-- 3. Create clean RLS policies
-- Allow public read access (for statistics and public data)
create policy "waiting_list_public_read"
on public.waiting_list_rgpd for select
using (true);

-- Allow public insert access (for new registrations)
create policy "waiting_list_public_insert"
on public.waiting_list_rgpd for insert
with check (true);

-- Allow public update access (for status changes)
create policy "waiting_list_public_update"
on public.waiting_list_rgpd for update
using (true)
with check (true);

-- 4. Verify RLS is enabled
-- This will show the current RLS status
select 
  schemaname,
  tablename,
  rowsecurity as rls_enabled
from pg_tables 
where tablename = 'waiting_list_rgpd' 
  and schemaname = 'public';

-- 5. Show all policies on the table
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

