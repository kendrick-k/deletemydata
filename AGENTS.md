# AGENTS.md

- SignalsKit is a vendor loaded by CMPKit.

## SignalsKit Read API SDK and CLI

- SignalsKit exposes project-scoped analytics through read-only tokens. The local SDK and CLI are intended for project backends, cron jobs, internal tools, and AI agents that need aggregated SignalsKit data without admin access.
- Security model:
  - Tokens use the `sk_read_...` prefix and must stay server-side.
  - A token is tied to one SignalsKit project and scopes such as `read:summary`, `read:realtime`, `read:goals`, `read:sources`, and `read:frictions`.
  - Read endpoints are `GET /api/v1/summary`, `GET /api/v1/realtime`, `GET /api/v1/goals`, `GET /api/v1/sources`, and `GET /api/v1/frictions`.
  - The API is read-only and rate-limited.
  - Each successful token-authenticated request is logged in an append-only admin table with endpoint, client kind, status, duration, and cost units.
  - Do not ship `SIGNALSKIT_READ_API_TOKEN` in browser JavaScript, mobile apps, public repos, or client-visible config.
- Generate or rotate tokens in `signalskit/app/pages/projects/edit.vue`; tokens are shown once and support last4, rotation, copy token, and copy curl.
- CLI usage:
  - Set the token in the project environment:

    ```bash
    SIGNALSKIT_READ_API_TOKEN=sk_read_xxxxx
    ```

  - Do not pass real tokens as command-line arguments in shared shells or CI logs. Prefer environment variables because `npm run ... -- --token ...` can echo the command.
  - Run from the SignalsKit repository or any project repository that exposes the local `signalskit` script:

    ```bash
    npm run signalskit -- summary --range today
    npm run signalskit -- realtime --minutes 180 --format json
    npm run signalskit -- goals --range 30d --traffic all
    npm run signalskit -- sources --range 30d --limit 10
    npm run signalskit -- frictions --range 7d --recent-limit 10
    npm run signalskit -- export --range 90d --format json
    ```

  - `watch` polls realtime data until interrupted:

    ```bash
    npm run signalskit -- watch --minutes 30 --interval 30
    ```

## SignalsKit Composable Policy

- Every Nuxt/Vue app or site project must keep a project-specific SignalsKit composable, typically `app/composables/useSignalsKit.ts` or `composables/useSignalsKit.ts`, instead of scattering direct `window.SignalsKit`, `window.signalsKit`, dataLayer, or analytics calls across components.
- The composable is the single client-side entrypoint for SignalsKit events. It must expose typed helpers for page/view events, CTA clicks, forms/leads, onboarding/auth/session state, ecommerce/cart/checkout/purchase, feature usage, consent changes, attribution/source metadata, errors/frictions, performance/web-vitals, and custom project events that do not fit those categories.
- The composable must handle every project state directly: SSR/client boundary, script not loaded yet, consent refused or pending, missing public API key, disabled tracking in dev/test, queued events before readiness, duplicate prevention, and no-op fallback with safe debug logging.
- Server-side or privileged SignalsKit events must use server-only helpers/routes, but event names and payload shapes should stay aligned with the composable's typed API.
- Do not put `SIGNALSKIT_READ_API_TOKEN`, service-role keys, admin endpoints, or other private analytics credentials in the composable or any client-visible config.

## General Project Policies

- Stack policy: Nuxt 4 and Tailwind CSS 4 are mandatory for app/site work; do not choose another frontend stack unless the user explicitly scopes an exception for a specific existing project.
- Backend/data policy: use Supabase by default for app backends, auth, database, storage, and realtime. Use another database only for an explicit project constraint; for French data-residency or certification needs, use the approved French-certified database option, as with Syndex.
- Supabase cost/performance policy: treat repeated Supabase reads, storage requests, realtime subscriptions, and polling as quota and cost risks, especially on free or low-tier projects. Before shipping Supabase-backed features, minimize reads with targeted `select` columns, filters, pagination, indexes, batching, debouncing, and by avoiding client polling loops. Add server-side or edge caching where appropriate (`Cache-Control`, Nitro/server cache, CDN/Cloudflare/Netlify cache, materialized views, scheduled precomputation, or stale-while-revalidate), with clear TTLs and invalidation on writes. Never put private, user-specific, RLS-protected, or service-role-derived data in a public/shared cache; keep service-role keys server-only, preserve RLS/security boundaries, add rate limits for public endpoints, and verify usage/logs when traffic or repeated queries could create unexpected Supabase or infrastructure spend.
- Email policy: use Resend by default. For French data-residency or certification needs, use Brevo when the project expects a French/EU provider, as with Syndex.
- Nuxt 4 docs policy: when touching Nuxt-specific behavior or when in doubt, check the latest Nuxt 4 documentation before implementing.
- UI library policy: use ECharts for charts and Lucide for icons by default; avoid adding other chart or icon libraries unless an existing project convention or explicit user request requires it.
- Input clear policy: every custom text, search, email, URL, number, and textarea input must include a visible clear X/close control when it has a value, with an accessible label, unless the native control already provides an equivalent or clearing would be destructive.
- Button no-wrap policy: never ship a text button whose visible label wraps onto two lines. If a label would wrap, rearrange the layout instead of accepting the wrap: give the button more width, move it out of a narrow column, stack the button group by whole buttons, or adjust the surrounding layout. For any touched UI where button width is uncertain, verify with screenshots at relevant desktop and mobile breakpoints before finishing.
- Form anti-spam policy: every public or user-facing form must include a honeypot field and server-side validation that silently rejects populated honeypots; keep the honeypot out of normal tab order and do not rely on client-side checks alone.
- Component architecture policy: build UI as Vue/Nuxt components, split them into component subdirectories when useful, and drive variants through props, emits, slots, and dynamic data instead of duplicating markup.
- Nuxt auto-import policy: rely on Nuxt auto-imports for components and composables; do not add manual imports for them unless the repo configuration, naming conflict, or tooling explicitly requires it.
- Nuxt routing/server policy: use Nuxt middleware for route/session guards. Put server/API work in Nitro server routes and keep access to private data, secrets, third-party APIs, and privileged operations on the server side.
- Production deploy policy: putting code in production normally only requires pushing to the repository primary branch (`main` or `master`, whichever the repo uses); Netlify deploys from that branch.
- Netlify operations policy: after pushing, use Netlify CLI to inspect deploy logs, function logs, env, and function behavior as needed. Two Netlify accounts/contexts are available; use `netlify switch` and check the other account/context when access, site lookup, deploy lookup, env, or logs do not match before concluding anything is missing.
- Treat a standalone `p` or `P` from the user as shorthand for push: stage all current worktree changes with `git add -A`, commit them together, and push `master` directly unless they specify another branch. Do not selectively leave modified, deleted, or untracked files behind during this shorthand flow.
Instructions pour les agents qui travaillent dans ce depot.

## Contexte projet

- Produit: DeleteMyData.online, application Nuxt pour generation de demandes RGPD, annuaire privacy et collecte de leads.
- Stack principale: Nuxt 4, Vue 3, Tailwind CSS 4, Supabase, Netlify static.
- Gestionnaire de paquets: npm. Ne pas introduire pnpm/yarn sans demande explicite.
- Dev server: `npm run dev` lance Nuxt sur `http://localhost:3005`.
- Build de reference: `npm run build`.

## Regles Supabase et emails Auth

- Ce projet est un projet BUREAU/Supabase: garder les emails Supabase Auth brandes et geres dans le repo.
- Ne pas laisser les templates email Auth Supabase par defaut si un flux Auth email est ajoute ou modifie.
- Quand un flux email Auth change, ajouter ou mettre a jour `supabase/templates/*` et documenter l'application de la configuration Auth hebergee Supabase.
- Pour la production, traiter le SMTP personnalise comme obligatoire pour Supabase Auth.
- Garder les placeholders de config/env dans le repo, notamment via `env.example`.
- Ne jamais committer de secrets SMTP, Supabase service role, tokens CLI ou credentials provider.

## Conventions de modification

- Respecter les patterns Nuxt existants: pages dans `pages/`, endpoints dans `server/api/`, composants dans `components/`, migrations dans `supabase/migrations/`.
- Preferer des migrations Supabase versionnees a des scripts SQL manuels quand le changement doit aller en production.
- Les scripts SQL dans `database/` sont historiques ou manuels; verifier s'ils sont appliques avant de les considerer comme source de verite.
- Garder `env.example` a jour lorsqu'une variable d'environnement est ajoutee.
- Eviter de presenter comme en production les parties encore simulees: auth pages, annuaire statique, envoi automatique, relances, Stripe.
- Ne pas modifier les secrets locaux ni les fichiers `.env*`; ils sont ignores sauf `env.example`.

## Verification

- Pour un changement applicatif, lancer au minimum `npm run build`.
- Les scripts suivants necessitent un serveur dev actif sur le port 3005:
  - `./test-waiting-list-api.sh`
  - `./test-generator-api.sh`
  - `./test-blog-pages.sh`
- Les warnings connus du build concernent les sourcemaps Vite/Tailwind et les liens `/generator` avec query params contenant des majuscules.

## Points d'attention actuels

- `server/api/users.get.ts` est un endpoint de test, pas une API production.
- `generator_usage` existe dans `database/generator_usage.sql`, mais pas encore dans `supabase/migrations/`.
- `waiting_list_rgpd` a une politique RLS de mise a jour publique dans la migration de correction; a auditer avant production.
- `supabase/config.toml` utilise encore des URLs locales generiques qui peuvent diverger du port dev reel.
- Les flows login/signup publics sont majoritairement simules et doivent etre branches proprement sur Supabase Auth avant lancement.

## Agent Readiness Workflow

- When a public site, production URL, crawlability, robots.txt, sitemap, `llms.txt`, discovery headers, markdown/AI-readable routes, locale routing, canonicals, bot access rules, or agent-facing commerce/auth/MCP endpoints change, check whether the public domain is agent-ready.
- Use `https://isitagentready.com/<domain>` in a browser, for example `https://isitagentready.com/giftunder200.com`. When automation is useful, use the scanner API only from server-side/internal tooling and do not include private URLs, secrets, or tokens.
- Record the result in project docs: create or update `doc/agent-readiness.md` unless an existing file such as `doc/agentready.md` or `doc/agent-discovery.md` already covers the same audit. Include scan date, production URL, scanner URL, verdict (`ready`, `not ready`, `blocked`, or `not applicable`), passed signals, missing items, and concrete next actions.
- If the site is not public or has no production domain, document `not applicable` with the reason and skip the external scan.

## Google Search / sitemap workflow

- After any substantial change that affects public URLs, routing, slugs, canonicals, locale routes, or sitemap generation, use the Google Cloud CLI / ADC workflow to refresh Search Console: submit or resubmit the affected sitemap(s), run/update the Google Search Console audit, and update `doc/google-search-console.md` or the relevant `DOC/` / `docs/` Search Console document. Prefer `npm run seo:search-console` when available, and keep the Search Console property aligned with domain properties such as `sc-domain:<domain>`.

## Supabase migration automation

- When a schema change requires or implies a Supabase migration, create the migration and apply it immediately with the Supabase CLI. Use the repo's existing local credentials/env and run `supabase db push` or the repo-defined equivalent such as `npm run db:push`; do not leave migration application as a manual step for the user. If credentials, project linking, or CLI execution fail, report the exact blocker and keep the migration files committed/ready.

## Netlify accounts

- There are two Netlify accounts available. When Netlify CLI access, site linking, project listing, or deploy lookup fails on the current account, use the Netlify account switch workflow before concluding the site is missing: run `netlify switch` to switch to the other account, then list/check sites with `netlify sites:list`, `netlify status`, or the repo's Netlify command. Do not create a duplicate Netlify site until both accounts have been checked.

## Cloudflare operations

- Cloudflare operations policy: when a Cloudflare API token is available through repo-managed environment placeholders or local env files such as `.env`, `.env.local`, Netlify env, or the documented deployment environment (`CLOUDFLARE_API_TOKEN`, `CF_API_TOKEN`, plus account/zone IDs when needed), use it as needed to optimize and protect the site directly in Cloudflare. Do not hesitate to configure or adjust Cloudflare when traffic is high, when precise cache, WAF, firewall, rate-limit, bot-protection, redirect, DNS, or page-rule behavior is needed, or when Netlify usage, bandwidth, functions, build minutes, or pricing need to be checked and contained. Keep Cloudflare tokens and zone/account secrets out of Git; document required placeholders only, inspect existing Cloudflare and Netlify state before changing rules, and verify the production effect after every infrastructure change.

## Codex dashboard heartbeat

- Disabled for this project. Do not send Codex Project Dashboard heartbeats automatically.
- Do not call `CODEX_DASHBOARD_HEARTBEAT_URL` or `/api/codex-heartbeat` unless a user explicitly asks to test that integration.
