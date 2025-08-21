# 🚀 Migrations Supabase - DeleteMyData

Ce document explique comment gérer votre base de données Supabase avec le système de migrations.

## 📋 Prérequis

- [Supabase CLI](https://supabase.com/docs/guides/cli) installé
- Accès à votre projet Supabase distant
- Être connecté via `supabase login`

## 🏗️ Structure des migrations

```
supabase/
├── migrations/                    # Dossier des migrations
│   ├── 20240821_001_create_contact_messages.sql
│   └── 20240821_002_create_waiting_list_rgpd.sql
├── config.toml                    # Configuration Supabase
└── .gitignore                     # Fichiers à ignorer
```

## 🔧 Commandes principales

### 1. Lier le projet local au projet distant
```bash
supabase link --project-ref huvjfkaqszetdbbfvahw
```

### 2. Appliquer toutes les migrations
```bash
supabase db push
```

### 3. Créer une nouvelle migration
```bash
supabase migration new nom_de_la_migration
```

### 4. Voir l'état des migrations
```bash
supabase migration list
```

### 5. Annuler la dernière migration
```bash
supabase db reset
```

## 🚀 Application rapide des migrations

Utilisez notre script automatisé :

```bash
./scripts/apply-migrations.sh
```

## 📊 Tables créées

### 1. `contact_messages`
- **Objectif :** Gérer les messages de contact des utilisateurs
- **Champs :** first_name, last_name, email, subject, message, status, priority
- **Sécurité :** RLS activé, insertion publique, lecture/modification authentifiée

### 2. `waiting_list_rgpd`
- **Objectif :** Gérer la liste d'attente des demandes RGPD
- **Champs :** email, first_name, last_name, company_name, request_type, status
- **Sécurité :** RLS activé, lecture et écriture publiques

## 🔒 Politiques de sécurité (RLS)

### Contact Messages
- ✅ **Insertion :** Publique (pour le formulaire de contact)
- ✅ **Lecture :** Utilisateurs authentifiés seulement
- ✅ **Modification :** Utilisateurs authentifiés seulement

### Waiting List RGPD
- ✅ **Insertion :** Publique (pour l'inscription)
- ✅ **Lecture :** Publique
- ✅ **Modification :** Publique

## 📈 Fonctions utilitaires

### Contact Messages
- `contact_messages_stats()` - Statistiques par statut
- `pending_contact_messages()` - Messages non traités
- `contact_messages_by_priority()` - Messages par priorité

### Waiting List RGPD
- `waiting_list_stats()` - Statistiques par statut
- `waiting_list_by_source()` - Inscriptions par source
- `waiting_list_by_request_type()` - Inscriptions par type de demande

## 🛠️ Développement local

### Démarrer l'environnement local
```bash
supabase start
```

### Arrêter l'environnement local
```bash
supabase stop
```

### Voir les logs
```bash
supabase logs
```

## 🔍 Vérification

Après avoir appliqué les migrations, vérifiez dans votre dashboard Supabase :

1. **Database > Tables** - Vérifiez que les tables sont créées
2. **Database > Functions** - Vérifiez que les fonctions sont créées
3. **Authentication > Policies** - Vérifiez que les politiques RLS sont actives

## 🚨 Dépannage

### Erreur "Project not found"
```bash
supabase logout
supabase login
supabase link --project-ref huvjfkaqszetdbbfvahw
```

### Erreur de migration
```bash
supabase db reset
supabase db push
```

### Problème de connexion
Vérifiez vos variables d'environnement dans `.env.local`

## 📚 Ressources

- [Documentation Supabase CLI](https://supabase.com/docs/guides/cli)
- [Guide des migrations](https://supabase.com/docs/guides/cli/local-development#database-migrations)
- [Politiques RLS](https://supabase.com/docs/guides/auth/row-level-security) 