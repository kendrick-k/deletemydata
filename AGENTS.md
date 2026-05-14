# AGENTS.md

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
