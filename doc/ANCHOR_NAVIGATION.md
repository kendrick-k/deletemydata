# Navigation par Ancres (Hash Navigation)

## Vue d'ensemble

Le Header et Footer utilisent des liens d'ancrage (`#`) pour naviguer vers des sections spécifiques de la page d'accueil. Cela permet une navigation fluide sans rechargement de page.

## Ancres disponibles

### 1. Comment ça marche (`#how-it-works`)
- **Section** : Explication du processus en 3 étapes
- **Contenu** : 
  - Identifiez les entreprises
  - Générez les demandes
  - Suivez et relancez
- **ID HTML** : `id="how-it-works"`

### 2. Tarifs (`#pricing`)
- **Section** : Plans tarifaires et modal détaillé
- **Contenu** :
  - Plan Gratuit (0€/mois)
  - Plan Pro (9€/mois)
  - Plan Business (49€/mois)
- **ID HTML** : `id="pricing"`

## Comment ça fonctionne

### Navigation depuis le Header
```vue
<!-- Navigation desktop -->
<nav class="hidden md:flex space-x-8">
  <a href="#how-it-works">Comment ça marche</a>
  <a href="#pricing">Tarifs</a>
</nav>

<!-- Navigation mobile -->
<div class="md:hidden">
  <a href="#how-it-works">Comment ça marche</a>
  <a href="#pricing">Tarifs</a>
</div>
```

### Navigation depuis le Footer
```vue
<!-- Section Produit -->
<ul class="space-y-2">
  <li>
    <a href="#how-it-works">Comment ça marche</a>
  </li>
  <li>
    <a href="#pricing">Tarifs</a>
  </li>
</ul>
```

## Structure des sections dans index.vue

### Section "Comment ça marche"
```vue
<section id="how-it-works" class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">
        Comment ça marche
      </h2>
      <!-- Contenu de la section -->
    </div>
  </div>
</section>
```

### Section "Tarifs"
```vue
<section id="pricing" class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">
        Tarifs simples et transparents
      </h2>
      <!-- Contenu de la section -->
    </div>
  </div>
</section>
```

## Comportement de la navigation

### 1. Navigation interne
- **Depuis la page d'accueil** : Défilement fluide vers la section
- **Depuis d'autres pages** : Redirection vers la page d'accueil + défilement vers la section

### 2. URL générée
- **Comment ça marche** : `https://deletemydata.online/#how-it-works`
- **Tarifs** : `https://deletemydata.online/#pricing`

### 3. Comportement du navigateur
- **Défilement automatique** vers la section cible
- **Historique** : L'URL avec l'ancre est ajoutée à l'historique
- **Partage** : L'URL avec l'ancre peut être partagée directement

## Avantages de ce système

### 1. Performance
- Pas de rechargement de page
- Navigation instantanée
- Expérience utilisateur fluide

### 2. SEO
- URLs sémantiques
- Structure de page claire
- Navigation interne optimisée

### 3. Accessibilité
- Navigation clavier supportée
- Screen readers compatibles
- Structure HTML sémantique

## Utilisation pour les développeurs

### Ajouter une nouvelle section avec ancre
1. **Créer la section** dans `pages/index.vue`
2. **Ajouter l'ID** : `id="nouvelle-section"`
3. **Ajouter le lien** dans Header et Footer : `href="#nouvelle-section"`

### Exemple d'ajout
```vue
<!-- Dans index.vue -->
<section id="nouvelle-section" class="py-20 bg-gray-50">
  <h2>Nouvelle Section</h2>
  <!-- Contenu -->
</section>

<!-- Dans Header.vue -->
<a href="#nouvelle-section">Nouvelle Section</a>

<!-- Dans Footer.vue -->
<a href="#nouvelle-section">Nouvelle Section</a>
```

### Modifier une section existante
1. **Changer l'ID** dans la section HTML
2. **Mettre à jour tous les liens** dans Header et Footer
3. **Vérifier** que la navigation fonctionne

## Test et débogage

### Vérifier les ancres
```bash
# Rechercher tous les IDs dans index.vue
grep -r 'id=' pages/index.vue

# Vérifier la cohérence des liens
grep -r 'href="#' components/
```

### Tester la navigation
1. **Page d'accueil** : Cliquer sur les liens d'ancres
2. **Autres pages** : Vérifier la redirection + défilement
3. **URLs directes** : Tester `/#how-it-works` et `/#pricing`

### Problèmes courants
- **ID manquant** : Vérifier que la section a bien l'ID
- **Lien cassé** : Vérifier la correspondance entre `href` et `id`
- **Défilement** : Vérifier que la section est visible

## Conclusion

Le système de navigation par ancres offre une expérience utilisateur fluide et une structure de page claire. Les liens "Comment ça marche" et "Tarifs" pointent correctement vers les sections correspondantes de la page d'accueil, permettant une navigation intuitive sans rechargement de page. 