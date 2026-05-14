# DeleteMyData.online

Plateforme Nuxt pour aider les utilisateurs a preparer des demandes RGPD, trouver des contacts privacy/DPO et suivre l'interet produit via Supabase.

## Point projet au 14 mai 2026

Le projet est dans un etat MVP avance cote vitrine, generation de demandes et collecte de leads. Il compile en production avec Nuxt/Netlify, mais plusieurs promesses produit presentes dans l'interface restent encore partiellement simulees ou a connecter au backend.

### Ce qui est en place

- Application Nuxt 4 / Vue 3 avec Tailwind CSS 4, Preline, SEO Nuxt et mode statique Netlify.
- Pages publiques: accueil, landing, annuaire, generateur, blog, contact, support, CGU, confidentialite, cookies, login/signup/dashboard.
- Generateur RGPD: formulaire prefille en mode demonstration, generation de texte, export PDF via `jspdf`, ouverture `mailto:` et tracking d'usage.
- Annuaire privacy: recherche et selection d'entreprises sur donnees statiques de demonstration.
- Formulaire de contact: endpoint Nuxt qui insere dans `contact_messages`.
- Liste d'attente RGPD: endpoint Nuxt qui upsert dans `waiting_list_rgpd`.
- Supabase: configuration CLI, migrations pour `contact_messages`, `waiting_list_rgpd`, correctif RLS et heartbeat `warm_project()`.
- Warmup Supabase: workflow GitHub Actions hebdomadaire dans `.github/workflows/supabase-warm.yml`.
- Analytics: Google Analytics configure via `nuxt.config.ts` et composable `useAnalytics`.

### Points a finaliser avant production

- Authentification: les pages `login`, `signup`, `forgot-password` et `dashboard` sont surtout des interfaces/simulations; `components/SupabaseAuth.vue` est un composant d'essai separe.
- Emails Supabase Auth: aucun `supabase/templates/*` n'est encore versionne. Si les flux Auth email sont actives, ajouter les templates et configurer le SMTP production.
- Annuaire privacy: brancher les recherches sur une table/API reelle au lieu des donnees statiques.
- Demandes suivies: implementer `deletion_requests`, envoi email, relances, webhooks de reponse et preuves.
- Paiement: Stripe est documente comme intention produit, mais aucune integration runtime n'est presente dans les dependances.
- Supabase: convertir les scripts SQL utiles de `database/` en migrations versionnees si leur schema doit vivre en production, notamment `generator_usage`.
- RLS: auditer les politiques publiques avant lancement, en particulier la mise a jour publique de `waiting_list_rgpd`.
- Configuration: aligner `supabase/config.toml` avec les URLs locales et production reelles.

### Validation recente

`npm run build` passe le 14 mai 2026.

Warnings connus:

- Warnings sourcemap Vite/Tailwind pendant le build.
- Nuxt Link Checker signale des query params avec majuscules dans des liens vers `/generator`.

## Stack

- Nuxt 4.4
- Vue 3.5
- Tailwind CSS 4 via `@tailwindcss/vite`
- Supabase via `@nuxtjs/supabase`
- Pinia
- `jspdf`
- Netlify static preset
- Google Analytics

## Demarrage local

Prerequis:

- Node.js `>=20.19.0`
- npm `>=10.0.0`
- Un projet Supabase si vous testez les endpoints serveur

Installation:

```bash
npm install
cp env.example .env
```

Renseigner au minimum:

```bash
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your_publishable_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_secret_service_role_key_here
```

Demarrer:

```bash
npm run dev
```

Le serveur ecoute sur `http://localhost:3005`.

Pour charger explicitement `.env` via le script local:

```bash
npm run dev:env
```

## Commandes utiles

```bash
npm run dev          # Nuxt dev sur le port 3005
npm run build        # Build Nuxt/Nitro production
npm run generate     # Generation statique
npm run preview      # Preview Nuxt
npm run netlify:build
```

Scripts de verification manuels, avec le serveur dev deja lance:

```bash
./test-waiting-list-api.sh
./test-generator-api.sh
./test-blog-pages.sh
```

## Variables d'environnement

Les placeholders sont dans `env.example`.

- `SUPABASE_URL`: URL publique du projet Supabase.
- `SUPABASE_ANON_KEY`: cle anon/publishable cote client.
- `SUPABASE_SERVICE_ROLE_KEY`: cle service role, serveur uniquement.
- `DATABASE_URL`: optionnel, pour connexions directes.
- `SUPABASE_ACCESS_TOKEN`, `SUPABASE_DB_PWD`, `SUPABASE_PROJECT_REF`: utilises par la CLI et le warmup GitHub Actions.

Ne jamais committer `.env` ou des secrets. `.env*` est ignore sauf `env.example`.

## Supabase

Fichiers principaux:

- `supabase/config.toml`: configuration CLI locale.
- `supabase/migrations/`: migrations versionnees actuellement suivies.
- `database/`: scripts SQL historiques ou manuels, pas tous appliques automatiquement.
- `doc/SUPABASE_*.md`: guides specifiques.

Migrations suivies:

- `20240821_001_create_contact_messages.sql`
- `20240821_002_create_waiting_list_rgpd.sql`
- `20241201_001_fix_rls_waiting_list.sql`
- `20260427_001_create_warmup_heartbeat.sql`

Application vers le projet lie:

```bash
supabase link --project-ref <project-ref>
supabase db push
```

Le script `scripts/apply-migrations.sh` existe, mais il contient le project ref courant en dur. A adapter si le projet Supabase change.

## API serveur

- `POST /api/waiting-list`: valide et upsert une inscription dans `waiting_list_rgpd` avec la service role key.
- `POST /api/contact`: valide et insere un message dans `contact_messages`.
- `POST /api/generator-usage`: enregistre l'usage du generateur dans `generator_usage`.
- `GET /api/users`: endpoint de test autour de `profiles`, a supprimer ou finaliser avant production.

## Structure

```text
assets/css/          Styles globaux
components/          Composants Vue reutilisables
composables/         Composables analytics, Preline, scroll
database/            Scripts SQL manuels/historiques
doc/                 Documentation technique existante
docs/                Guides de setup fonctionnels
layouts/             Layout Nuxt
middleware/          Redirect global
pages/               Routes Nuxt
plugins/             Plugins client/serveur
public/              Assets statiques
server/api/          Endpoints Nitro
supabase/            Config CLI et migrations Supabase
```

## Deploiement

La configuration Netlify est dans `netlify.toml`:

```toml
[build]
  command = "npm run generate"
  publish = "dist"
```

Node `22.12.0` est configure pour Netlify.

Checklist avant de promouvoir en production:

- Configurer les variables Supabase dans Netlify.
- Verifier que les migrations necessaires sont appliquees.
- Ajouter les templates Supabase Auth si les flux email sont actifs.
- Configurer un SMTP personnalise pour Supabase Auth production.
- Repasser `npm run build`.

## Documentation additionnelle

- `doc/NETLIFY_DEPLOYMENT.md`
- `doc/SUPABASE_SETUP.md`
- `doc/SUPABASE_WARMUP.md`
- `docs/GOOGLE_ANALYTICS_SETUP.md`
- `docs/WAITING_LIST_SETUP.md`
