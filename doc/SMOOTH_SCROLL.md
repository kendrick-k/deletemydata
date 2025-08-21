# Smooth Scroll CSS et JavaScript

## Vue d'ensemble

Ce projet implémente un système de smooth scroll complet avec :
- **CSS natif** pour les navigateurs modernes
- **JavaScript fallback** pour la compatibilité
- **Composants réutilisables** pour une meilleure UX

## 🎯 Fonctionnalités

### 1. Smooth Scroll CSS
```css
html {
  scroll-behavior: smooth;
}
```

**Avantages :**
- Performance native du navigateur
- Pas de JavaScript nécessaire
- Animation fluide et optimisée

**Support :**
- ✅ Chrome 61+
- ✅ Firefox 36+
- ✅ Safari 15.4+
- ❌ IE (tous)

### 2. JavaScript Fallback
Pour les navigateurs qui ne supportent pas le CSS, un fallback JavaScript est automatiquement activé.

**Fonctionnalités :**
- Animation personnalisée avec easing
- Durée configurable (800ms par défaut)
- Gestion des offsets
- Mise à jour de l'URL

## 🚀 Utilisation

### Composant AnchorLink
```vue
<template>
  <AnchorLink 
    href="#section-id" 
    :offset="80" 
    :duration="1000"
    custom-class="text-blue-600"
  >
    Lien vers la section
  </AnchorLink>
</template>
```

**Props :**
- `href` : ID de la section cible (ex: "#pricing")
- `offset` : Décalage en pixels (défaut: 0)
- `duration` : Durée de l'animation en ms (défaut: 800)
- `custom-class` : Classes CSS personnalisées

### Composable useSmoothScroll
```typescript
const { scrollToSection, scrollToTop, scrollToBottom } = useSmoothScroll()

// Scroll vers une section
scrollToSection('pricing')

// Scroll vers le haut
scrollToTop()

// Scroll vers le bas
scrollToBottom()
```

**Méthodes disponibles :**
- `scrollTo(target, options)` : Scroll vers un élément, sélecteur ou position
- `scrollToSection(sectionId)` : Scroll vers une section par ID
- `scrollToTop()` : Scroll vers le haut de la page
- `scrollToBottom()` : Scroll vers le bas de la page
- `isSmoothScrollSupported()` : Vérifie la compatibilité
- `enableSmoothScrollForAnchors()` : Active le fallback automatiquement

### Bouton Scroll to Top
```vue
<template>
  <ScrollToTop />
</template>
```

**Caractéristiques :**
- Apparaît après 300px de scroll
- Animation d'entrée/sortie fluide
- Tooltip au survol
- Animation de rebond
- Position fixe en bas à droite

## 🎨 Personnalisation

### CSS Variables
```css
:root {
  --scroll-duration: 800ms;
  --scroll-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --scroll-offset: 0px;
}
```

### Classes utilitaires
```css
.section-animate {
  animation: fadeInUp 0.6s ease-out;
}

.anchor-link::after {
  @apply block w-0 h-0.5 bg-blue-600 transition-all duration-300;
}
```

## 🔧 Configuration

### Plugin automatique
Le plugin `plugins/smooth-scroll.client.ts` s'active automatiquement et :
- Détecte la compatibilité du navigateur
- Active le fallback si nécessaire
- Gère tous les liens d'ancres automatiquement

### Configuration Nuxt
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  plugins: ['~/plugins/smooth-scroll.client.ts']
})
```

## 📱 Responsive et Accessibilité

### Responsive
- Bouton scroll-to-top adaptatif
- Animations optimisées pour mobile
- Gestion des écrans tactiles

### Accessibilité
- Support des préférences de réduction de mouvement
- Navigation au clavier
- ARIA labels appropriés
- Focus visible

## 🧪 Tests

### Test de compatibilité
```typescript
// Vérifier si le smooth scroll est supporté
const isSupported = 'scrollBehavior' in document.documentElement.style
console.log('Smooth scroll supporté:', isSupported)
```

### Test des composants
```bash
# Démarrer le serveur de développement
npm run dev

# Tester la navigation
# 1. Cliquer sur "Comment ça marche" dans le header
# 2. Cliquer sur "Tarifs" 
# 3. Utiliser le bouton "Retour en haut"
```

## 🐛 Dépannage

### Problèmes courants

**1. Le smooth scroll ne fonctionne pas**
```bash
# Vérifier la console pour les erreurs
# Vérifier que le plugin est chargé
# Vérifier la compatibilité du navigateur
```

**2. Animation saccadée**
```css
/* Réduire la durée */
html {
  scroll-behavior: smooth;
  scroll-behavior-duration: 400ms;
}
```

**3. Offset incorrect**
```vue
<!-- Ajuster l'offset -->
<AnchorLink href="#section" :offset="100">
  Lien avec offset
</AnchorLink>
```

## 📚 Ressources

- [MDN - scroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)
- [Can I Use - scroll-behavior](https://caniuse.com/?search=scroll-behavior)
- [CSS Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap)

## 🔄 Mises à jour

### Version 1.0.0
- Implémentation CSS native
- Fallback JavaScript
- Composants réutilisables
- Plugin automatique

### Prochaines versions
- [ ] Support des scroll containers
- [ ] Animations personnalisables
- [ ] Support des gestes tactiles
- [ ] Tests unitaires complets 