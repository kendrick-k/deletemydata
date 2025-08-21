# 📊 Configuration Google Analytics avec Nuxt

## 🎯 Vue d'ensemble

Google Analytics est configuré pour fonctionner uniquement en production, évitant ainsi de polluer les données avec les interactions de développement.

## ⚙️ Configuration

### **1. Variables d'environnement**

```bash
# .env
GOOGLE_ANALYTICS_ID=G-9FHSG87X4G
NODE_ENV=production
```

### **2. Configuration Nuxt**

Le script Google Analytics est chargé automatiquement en production via `nuxt.config.ts` :

```typescript
app: {
  head: {
    script: [
      // Google Analytics - only in production
      ...(process.env.NODE_ENV === 'production' ? [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-9FHSG87X4G',
          async: true
        }
      ] : [])
    ]
  }
}
```

### **3. Plugin gtag.client.ts**

Le plugin initialise Google Analytics et fournit des fonctions utilitaires :

- **Initialisation automatique** de gtag
- **Tracking des pages** lors des changements de route
- **Fonctions utilitaires** pour tracker les événements

## 🚀 Utilisation

### **Composable useAnalytics**

```typescript
const { 
  trackEvent, 
  trackWaitingListSignup, 
  trackCompanyCardClick 
} = useAnalytics()

// Tracker un événement personnalisé
trackEvent('button_click', 'user_interaction', 'cta_button')

// Tracker une inscription à la liste d'attente
trackWaitingListSignup('footer_button')

// Tracker un clic sur une carte d'entreprise
trackCompanyCardClick('Google', 'google.com')
```

### **Fonctions disponibles**

#### **Tracking d'événements**
- `trackEvent(action, category, label?, value?)`
- `trackFormSubmission(formName, success)`
- `trackButtonClick(buttonName, location)`

#### **Tracking des conversions**
- `trackWaitingListSignup(source)`
- `trackGeneratorUsage(company, requestType)`
- `trackCompanyCardClick(company, domain)`

#### **Tracking de l'engagement**
- `trackTimeOnPage(page, timeSpent)`
- `trackScrollDepth(page, depth)`
- `trackNavigation(from, to)`

## 📱 Intégration dans les composants

### **Formulaire d'inscription**

```vue
<script setup>
const { trackWaitingListSignup, trackFormSubmission } = useAnalytics()

const handleSubmit = async () => {
  try {
    // ... logique de soumission
    
    // Analytics
    trackWaitingListSignup('website_form')
    trackFormSubmission('waiting_list_form', true)
  } catch (error) {
    trackFormSubmission('waiting_list_form', false)
  }
}
</script>
```

### **Carte d'entreprise**

```vue
<script setup>
const { trackCompanyCardClick } = useAnalytics()

const handleCardInteraction = () => {
  trackCompanyCardClick(props.company, props.domain)
}
</script>
```

## 🔒 Sécurité et confidentialité

### **Protection des données**
- **Aucun tracking** en mode développement
- **Données anonymisées** par défaut
- **Conformité RGPD** intégrée

### **Variables d'environnement**
- **ID Google Analytics** configurable
- **Mode production** automatique
- **Fallbacks** pour le développement

## 📊 Métriques trackées

### **Pages et navigation**
- Vues de pages
- Changements de route
- Temps passé sur les pages

### **Interactions utilisateur**
- Clics sur les boutons
- Soumissions de formulaires
- Utilisation des fonctionnalités

### **Conversions**
- Inscriptions à la liste d'attente
- Utilisation du générateur RGPD
- Sélection d'entreprises

### **Engagement**
- Profondeur de scroll
- Temps d'interaction
- Parcours utilisateur

## 🧪 Tests et développement

### **Mode développement**
```bash
NODE_ENV=development npm run dev
# Google Analytics désactivé
```

### **Mode production**
```bash
NODE_ENV=production npm run build
# Google Analytics activé
```

### **Vérification**
- **Console** : Messages de debug en développement
- **Network** : Scripts Google Analytics chargés en production
- **Analytics** : Données visibles dans Google Analytics

## 🚨 Dépannage

### **Problèmes courants**

1. **Scripts non chargés**
   - Vérifier `NODE_ENV=production`
   - Contrôler la console pour les erreurs

2. **Événements non trackés**
   - Vérifier l'import du composable
   - Contrôler les paramètres des fonctions

3. **Données manquantes**
   - Vérifier l'ID Google Analytics
   - Contrôler les filtres dans GA

### **Debug et logs**

```typescript
// Activer les logs détaillés
console.log('Analytics tracking:', { action, category, label })

// Vérifier l'état de gtag
console.log('gtag available:', typeof window.gtag)
```

## 📈 Évolutions futures

### **Fonctionnalités prévues**
- [ ] **Enhanced Ecommerce** pour les conversions
- [ ] **User ID tracking** pour les utilisateurs connectés
- [ ] **Custom dimensions** pour les métriques business
- [ ] **Real-time reporting** intégré

### **Améliorations techniques**
- [ ] **Lazy loading** des scripts analytics
- [ ] **Performance monitoring** intégré
- [ ] **A/B testing** avec Google Optimize
- [ ] **Conversion tracking** avancé

---

*Dernière mise à jour : {{ new Date().toLocaleDateString('fr-FR') }}* 