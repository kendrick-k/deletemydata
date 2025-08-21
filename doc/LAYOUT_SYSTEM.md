# Système de Layout avec Header et Footer

## Vue d'ensemble

Nous avons créé un système de layout par défaut qui applique automatiquement le Header et Footer à toutes les pages de l'application. Cela garantit une cohérence visuelle et une maintenance simplifiée.

## Structure des fichiers

### Layout par défaut
- **`layouts/default.vue`** - Layout principal qui inclut Header et Footer

### Composants
- **`components/Header.vue`** - Navigation principale avec logo et menu
- **`components/Footer.vue`** - Pied de page avec liens et informations

### Pages
- **`pages/index.vue`** - Page d'accueil (Header et Footer supprimés, maintenant gérés par le layout)
- **`pages/generator.vue`** - Page du générateur RGPD
- **`pages/directory.vue`** - Page de l'annuaire des contacts

## Comment ça fonctionne

### 1. Layout automatique
Nuxt.js applique automatiquement le layout `default.vue` à toutes les pages qui n'ont pas de layout spécifique.

### 2. Structure du layout
```vue
<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <Header />
    
    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>
```

### 3. Utilisation des composants
- **Header** : Navigation principale, logo, menu mobile
- **Footer** : Liens, informations de contact, liens légaux
- **Slot** : Contenu spécifique à chaque page

## Composants détaillés

### Header.vue
**Fonctionnalités :**
- Logo et nom de l'application
- Navigation desktop avec liens principaux
- Menu mobile responsive
- Bouton CTA "Commencer"
- Position sticky pour une navigation facile

**Navigation incluse :**
- Accueil (`/`)
- Générateur (`/generator`)
- Annuaire (`/directory`)
- Comment ça marche (`#how-it-works`)
- Tarifs (`#pricing`)

### Footer.vue
**Sections :**
- **Informations entreprise** : Logo, description, réseaux sociaux
- **Liens produit** : Générateur, Annuaire, Comment ça marche, Tarifs
- **Liens entreprise** : À propos, Blog, Contact, Support
- **Liens légaux** : Politique de confidentialité, Conditions, Cookies

## Avantages du système

### 1. Cohérence
- Header et Footer identiques sur toutes les pages
- Navigation cohérente
- Identité visuelle uniforme

### 2. Maintenance
- Modifications centralisées dans les composants
- Pas besoin de modifier chaque page individuellement
- Réutilisabilité des composants

### 3. Performance
- Composants chargés une seule fois
- Pas de duplication de code
- Optimisation du rendu

### 4. Responsive
- Menu mobile intégré
- Adaptation automatique aux différentes tailles d'écran
- Navigation tactile optimisée

## Utilisation

### Pour les développeurs
1. **Créer une nouvelle page** : Le layout s'applique automatiquement
2. **Modifier le Header** : Éditer `components/Header.vue`
3. **Modifier le Footer** : Éditer `components/Footer.vue`
4. **Layout personnalisé** : Créer `layouts/custom.vue` si nécessaire

### Pour les utilisateurs
- Navigation cohérente sur tout le site
- Accès facile aux fonctionnalités principales
- Informations de contact toujours visibles
- Liens légaux facilement accessibles

## Personnalisation

### Ajouter de nouveaux liens
1. Modifier `components/Header.vue` (navigation desktop et mobile)
2. Modifier `components/Footer.vue` (section appropriée)

### Changer le style
1. Modifier les classes Tailwind dans les composants
2. Ajouter des styles CSS personnalisés si nécessaire

### Ajouter de nouvelles sections
1. Étendre le composant Footer avec de nouvelles colonnes
2. Ajouter de nouveaux éléments dans le Header si nécessaire

## Exemples d'utilisation

### Page simple
```vue
<template>
  <div class="py-12">
    <h1>Ma nouvelle page</h1>
    <p>Contenu de la page...</p>
  </div>
</template>
```
→ Header et Footer automatiquement inclus

### Page avec layout personnalisé
```vue
<template>
  <div>
    <!-- Contenu sans Header/Footer -->
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom'
})
</script>
```

## Maintenance

### Mise à jour du Header
- Navigation
- Logo
- Boutons CTA
- Menu mobile

### Mise à jour du Footer
- Liens
- Informations de contact
- Réseaux sociaux
- Liens légaux

### Ajout de nouvelles pages
- Créer le fichier dans `pages/`
- Le layout s'applique automatiquement
- Pas besoin de modifier Header/Footer

## Conclusion

Ce système de layout centralisé simplifie grandement la maintenance et garantit une expérience utilisateur cohérente sur tout le site. Toutes les pages bénéficient automatiquement du Header et Footer sans configuration supplémentaire. 