#!/usr/bin/env bash
# lance avec: /opt/homebrew/bin/bash ./bootstrap_github.sh
set -euo pipefail

# --- Prérequis ---
command -v gh >/dev/null || { echo "GitHub CLI requis (brew install gh)"; exit 1; }

REPO="kendrick-k/deletemydata"
gh repo set-default "$REPO" >/dev/null 2>&1 || true

# --- LABELS ---
declare -A LABELS=(
  ["area:backend"]="0366d6 Backend"
  ["area:frontend"]="0e8a16 Frontend"
  ["area:edge"]="5319e7 Edge Functions"
  ["area:infra"]="1d76db Infra/Devops"
  ["area:growth"]="fbca04 Growth/SEO"
  ["moat:data"]="d93f0b Data moat"
  ["moat:deliverability"]="b60205 Sender reputation"
  ["type:feature"]="0052cc Feature"
  ["type:bug"]="d73a4a Bug"
  ["type:chore"]="c5def5 Chore"
  ["priority:P0"]="b60205 Critical"
  ["priority:P1"]="d876e3 High"
  ["priority:P2"]="fef2c0 Medium"
)

echo "• Labels…"
for name in "${!LABELS[@]}"; do
  color="${LABELS[$name]%% *}"
  desc="${LABELS[$name]#* }"
  gh label create "$name" -c "#$color" -d "$desc" >/dev/null 2>&1 || \
  gh label edit   "$name" -c "#$color" -d "$desc" >/dev/null
done

# --- MILESTONES (ASCII pour éviter les soucis d’accents/long dashes) ---
M0="M0 - Semaine 1: Foundations"
M1="M1 - Semaine 2: Privacy Contacts v1"
M2="M2 - Semaine 3: Preuve & Demandes"
M3="M3 - Semaine 4: Envoi & Webhooks"
G1="G1 - Croissance & Moat"
S1="S1 - Secu/Compliance"

echo "• Milestones…"
ensure_ms () {
  local title="$1"
  # crée le milestone s'il n'existe pas; ignore l'erreur si déjà créé
  gh api -X POST "repos/$REPO/milestones" -f title="$title" >/dev/null 2>&1 || true
}
ensure_ms "$M0"; ensure_ms "$M1"; ensure_ms "$M2"; ensure_ms "$M3"; ensure_ms "$G1"; ensure_ms "$S1"

create_issue () {
  local title="$1"; local ms="$2"; local body="$3"; shift 3
  local labels=("$@")
  local args=(--title "$title" --milestone "$ms" --body "$body")
  for l in "${labels[@]}"; do args+=(--label "$l"); done
  gh issue create "${args[@]}"
}

echo "• Issues…"
# === M0 ===
create_issue "Init Nuxt 3 + Supabase (config env)" "$M0" $'AC:\n- Nuxt boot + Supabase client\n- .env.example fourni\n- CI lint/build' \
  "type:chore" "area:infra" "priority:P0"
create_issue "Schema Postgres + RLS (workspaces, requests…)" "$M0" $'AC:\n- Tables: workspaces, profiles, workspace_members, privacy_contacts, deletion_requests, request_events, enrichment_jobs\n- RLS activees + policies multi-tenant' \
  "type:feature" "area:backend" "priority:P0"
create_issue "Auth email (magic link) + onboarding workspace" "$M0" $'AC:\n- Signup/login\n- Creation auto 1er workspace\n- Redirection dashboard' \
  "type:feature" "area:frontend" "priority:P0"
create_issue "Domaine + boites email + SPF/DKIM/DMARC" "$M0" $'AC:\n- DNS OK\n- privacy@ / support@\n- SPF/DKIM/DMARC pass' \
  "type:chore" "area:infra" "priority:P0"
create_issue "Landing + Pricing (Free/Pro/Business)" "$M0" $'AC:\n- Hero, features, FAQ\n- CTA demarrer\n- Page /pricing' \
  "type:feature" "area:frontend" "priority:P1"
create_issue "Analytics privacy-friendly (Plausible/Umami)" "$M0" $'AC:\n- Traque pageviews/CTAs\n- Sans cookies' \
  "type:chore" "area:infra" "priority:P2"

# === M1 ===
create_issue "Fn SQL best_privacy_email_for(domain)" "$M1" $'AC:\n- Retourne email/type/confiance\n- Trie par dpo>privacy>legal>support' \
  "type:feature" "area:backend" "moat:data" "priority:P0"
create_issue "Edge Function enrich-domain (scan pages privacy/mentions)" "$M1" $'AC:\n- Crawl URLs candidates\n- Regex emails + upsert privacy_contacts (source/url/confiance)\n- Service role' \
  "type:feature" "area:edge" "moat:data" "priority:P0"
create_issue "UI recherche contact privacy" "$M1" $'AC:\n- Input domaine\n- Affiche meilleur contact + score\n- Bouton ameliorer contact' \
  "type:feature" "area:frontend" "moat:data" "priority:P1"
create_issue "Job queue enrichment_jobs + cron" "$M1" $'AC:\n- queued/running/done\n- Re-scan domaines sans contact' \
  "type:feature" "area:backend" "moat:data" "priority:P1"

# === M2 ===
create_issue "Composer de demande RGPD (markdown -> PDF)" "$M2" $'AC:\n- Sujet/corps preremplis\n- Variables (nom/email)\n- Export PDF' \
  "type:feature" "area:frontend" "priority:P0"
create_issue "Timeline evenements + hash contenu" "$M2" $'AC:\n- request_events append-only\n- SHA-256 du message/pieces\n- Horodatage Europe/Paris' \
  "type:feature" "area:backend" "priority:P0"
create_issue "Page Mes demandes (liste/filtre)" "$M2" $'AC:\n- Liste par statut\n- Filtres date/domaine' \
  "type:feature" "area:frontend" "priority:P1"
create_issue "Page Traiter la demande (cote entreprise)" "$M2" $'AC:\n- Lien securise\n- Reponse rapide (accept/refus/extension)\n- CTA essai 14 j' \
  "type:feature" "area:frontend" "priority:P1"

# === M3 ===
create_issue "Integration routeur email (Resend/Mailjet/Postmark)" "$M3" $'AC:\n- Envoi depuis domaine\n- Recup Message-ID' \
  "type:feature" "area:infra" "moat:deliverability" "priority:P0"
create_issue "Webhook statuts (accepted/delivered/bounce/reply)" "$M3" $'AC:\n- MAJ status request\n- Ajout request_events\n- Stock SPF/DKIM/DMARC si dispo' \
  "type:feature" "area:edge" "moat:deliverability" "priority:P0"
create_issue "Relances automatiques (J+7 / J+21)" "$M3" $'AC:\n- Taches planifiees\n- Journal des relances' \
  "type:feature" "area:backend" "priority:P1"
create_issue "PDF de preuve consolide" "$M3" $'AC:\n- Metadonnees + contenu envoye\n- Message-ID + statuts\n- Timeline + hashes' \
  "type:feature" "area:backend" "priority:P1"

echo "✓ Backlog initialise."
