# 📋 Système de Liste d'Attente RGPD

## 🎯 Vue d'ensemble

Le système de liste d'attente RGPD permet aux utilisateurs de s'inscrire pour recevoir des informations sur nos nouvelles fonctionnalités et services de protection des données personnelles.

## 🏗️ Architecture

### Base de données
- **Table :** `waiting_list_rgpd`
- **Base :** Supabase PostgreSQL
- **RLS :** Activé avec politiques publiques

### Composants
1. **WaitingListForm.vue** - Formulaire principal
2. **WaitingListModal.vue** - Modal d'inscription
3. **WaitingListButton.vue** - Bouton d'ouverture du modal
4. **API :** `/api/waiting-list` (POST)

## 🗄️ Structure de la base de données

```sql
CREATE TABLE public.waiting_list_rgpd (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  first_name text,
  last_name text,
  company_name text,
  company_domain text,
  request_type text CHECK (request_type IN ('deletion', 'access', 'rectification')) DEFAULT 'deletion',
  additional_details text,
  status text CHECK (status IN ('pending', 'contacted', 'converted', 'unsubscribed')) DEFAULT 'pending',
  source text,
  ip_address inet,
  user_agent text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

### Champs
- **email** : Email unique de l'utilisateur
- **first_name/last_name** : Nom et prénom
- **company_name/domain** : Informations entreprise (optionnel)
- **request_type** : Type de demande RGPD
- **additional_details** : Détails supplémentaires
- **status** : Statut de l'inscription
- **source** : Source de l'inscription (website, modal, etc.)
- **ip_address/user_agent** : Informations techniques

## 🚀 Utilisation

### 1. Formulaire simple

```vue
<template>
  <WaitingListForm 
    title="Inscrivez-vous"
    subtitle="Description personnalisée"
    @subscribed="handleSubscribed"
  />
</template>

<script setup>
import WaitingListForm from '~/components/WaitingListForm.vue'

const handleSubscribed = (email) => {
  console.log('Inscrit:', email)
}
</script>
```

### 2. Bouton avec modal

```vue
<template>
  <WaitingListButton 
    button-text="Rejoindre la liste"
    button-classes="bg-green-600 text-white px-8 py-4 rounded-lg"
    @subscribed="handleSubscribed"
  />
</template>

<script setup>
import WaitingListButton from '~/components/WaitingListButton.vue'
</script>
```

### 3. Modal personnalisé

```vue
<template>
  <WaitingListModal
    :is-open="showModal"
    title="Titre personnalisé"
    form-title="Sous-titre"
    @close="showModal = false"
    @subscribed="handleSubscribed"
  />
</template>
```

## ⚙️ Configuration

### Variables d'environnement

```bash
# .env
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Configuration Nuxt

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY
    }
  }
})
```

## 🔧 Personnalisation

### Props disponibles

#### WaitingListForm
- `title` : Titre du formulaire
- `subtitle` : Sous-titre descriptif
- `submitButtonText` : Texte du bouton de soumission
- `source` : Source de l'inscription

#### WaitingListButton
- `buttonText` : Texte du bouton
- `buttonClasses` : Classes CSS du bouton
- `showIcon` : Afficher l'icône
- `modalTitle` : Titre du modal
- `formTitle` : Titre du formulaire
- `formSubtitle` : Sous-titre du formulaire

#### WaitingListModal
- `isOpen` : État d'ouverture du modal
- `title` : Titre du modal
- `formTitle` : Titre du formulaire
- `formSubtitle` : Sous-titre du formulaire
- `submitButtonText` : Texte du bouton de soumission
- `source` : Source de l'inscription

### Événements

- `@subscribed` : Émis lors d'une inscription réussie
- `@close` : Émis lors de la fermeture du modal

## 📱 Responsive Design

Tous les composants sont entièrement responsifs et s'adaptent aux différentes tailles d'écran :
- **Mobile** : Layout en colonne unique
- **Tablet** : Grilles adaptatives
- **Desktop** : Layout optimisé

## 🎨 Thème et styles

Les composants utilisent Tailwind CSS et respectent la charte graphique du site :
- **Couleurs** : Bleu principal (#2563eb)
- **Typographie** : Hiérarchie claire des titres
- **Espacement** : Système cohérent de marges et paddings
- **Animations** : Transitions fluides et micro-interactions

## 🔒 Sécurité

### Validation des données
- Validation côté client et serveur
- Sanitisation des entrées utilisateur
- Protection contre les injections SQL

### Protection de la vie privée
- Conformité RGPD
- Stockage sécurisé des données
- Politique de confidentialité claire

## 📊 Analytics et suivi

### Métriques collectées
- Taux de conversion des formulaires
- Sources d'inscription
- Types de demandes RGPD
- Performance des composants

### Intégration
```typescript
const handleSubscribed = (email: string) => {
  // Google Analytics
  gtag('event', 'waiting_list_signup', {
    email: email,
    source: 'website'
  })
  
  // Autres analytics...
}
```

## 🧪 Tests

### Tests unitaires
```bash
npm run test:unit components/WaitingListForm.vue
npm run test:unit components/WaitingListModal.vue
npm run test:unit components/WaitingListButton.vue
```

### Tests d'intégration
```bash
npm run test:integration api/waiting-list
```

## 🚨 Dépannage

### Problèmes courants

1. **Erreur de configuration Supabase**
   - Vérifier les variables d'environnement
   - Contrôler les clés d'API

2. **Formulaire ne se soumet pas**
   - Vérifier la console pour les erreurs
   - Contrôler la validation des champs

3. **Modal ne s'ouvre pas**
   - Vérifier l'état `isOpen`
   - Contrôler les événements de clic

### Logs et debugging

```typescript
// Activer les logs détaillés
console.log('Form data:', formData)
console.log('Supabase response:', response)
```

## 📈 Évolutions futures

### Fonctionnalités prévues
- [ ] Double opt-in par email
- [ ] Segmentation des listes
- [ ] Intégration avec des outils marketing
- [ ] A/B testing des formulaires
- [ ] Analytics avancés

### Améliorations techniques
- [ ] Cache Redis pour les performances
- [ ] Webhooks pour les intégrations
- [ ] API GraphQL
- [ ] Tests automatisés complets

## 📞 Support

Pour toute question ou problème :
- **Documentation** : Ce fichier
- **Issues** : Repository GitHub
- **Support** : support@deletemydata.online

---

*Dernière mise à jour : {{ new Date().toLocaleDateString('fr-FR') }}* 