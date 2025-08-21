# 🎨 Guide d'utilisation Preline UI avec Nuxt 3

## 📋 Installation et Configuration

Preline UI est déjà configuré dans votre projet DeleteMyData avec :
- Plugin automatique : `plugins/preline.client.ts`
- Composable utilitaire : `composables/usePreline.ts`
- Types TypeScript : `types/preline.d.ts`

## 🚀 Utilisation de base

### Dans un composant Vue

```vue
<template>
  <div>
    <!-- Dropdown Preline -->
    <div class="hs-dropdown relative inline-flex">
      <button type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
        Actions
        <svg class="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>

      <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2">
        <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100" href="#">
          Newsletter
        </a>
        <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100" href="#">
          Purchases
        </a>
      </div>
    </div>

    <!-- Modal Preline -->
    <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700" data-hs-overlay="#hs-basic-modal">
      Ouvrir modal
    </button>

    <div id="hs-basic-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
      <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div class="bg-white border border-gray-200 rounded-xl shadow-sm">
          <div class="p-4 sm:p-7">
            <div class="text-center">
              <h3 class="text-lg font-semibold text-gray-800">
                Modal title
              </h3>
              <p class="text-sm text-gray-500">
                Modal body text goes here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { initPrelineDelayed } = usePreline()

// Initialiser Preline après le montage du composant
onMounted(() => {
  initPrelineDelayed(100)
})
</script>
```

## 🔧 Utilisation avancée avec le composable

### Re-initialiser après des changements dynamiques

```vue
<script setup lang="ts">
const { initPreline, cleanupPreline } = usePreline()

// Données réactives
const items = ref([])

// Ajouter un élément avec composant Preline
const addItem = () => {
  items.value.push({ id: Date.now(), name: 'Nouvel item' })
  
  // Re-initialiser Preline après le changement du DOM
  nextTick(() => {
    initPreline()
  })
}

// Nettoyer avant de supprimer des éléments
const removeItem = (index: number) => {
  cleanupPreline(['HSDropdown']) // Nettoyer les dropdowns
  items.value.splice(index, 1)
}
</script>
```

### Obtenir une instance de composant Preline

```vue
<script setup lang="ts">
const { getPrelineInstance } = usePreline()

const openModal = () => {
  // Obtenir l'instance du modal
  const modal = getPrelineInstance('HSOverlay', '#my-modal')
  if (modal) {
    modal.open()
  }
}

const closeDropdown = () => {
  // Obtenir l'instance du dropdown
  const dropdown = getPrelineInstance('HSDropdown', '#my-dropdown')
  if (dropdown) {
    dropdown.close()
  }
}
</script>
```

## 📱 Composants Preline populaires

### 1. Accordéon

```html
<div class="hs-accordion-group">
  <div class="hs-accordion active" id="hs-basic-heading-one">
    <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="hs-basic-collapse-one">
      <svg class="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m6 9 6 6 6-6"/>
      </svg>
      <svg class="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m18 15-6-6-6 6"/>
      </svg>
      Accordion #1
    </button>
    <div id="hs-basic-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-one">
      <p class="text-gray-600">
        It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
      </p>
    </div>
  </div>
</div>
```

### 2. Tabs

```html
<div class="border-b border-gray-200">
  <nav class="flex space-x-8" aria-label="Tabs" role="tablist">
    <button type="button" class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none active" id="horizontal-alignment-item-1" data-hs-tab="#horizontal-alignment-1" aria-controls="horizontal-alignment-1" role="tab">
      Tab 1
    </button>
    <button type="button" class="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none" id="horizontal-alignment-item-2" data-hs-tab="#horizontal-alignment-2" aria-controls="horizontal-alignment-2" role="tab">
      Tab 2
    </button>
  </nav>
</div>

<div class="mt-3">
  <div id="horizontal-alignment-1" role="tabpanel" aria-labelledby="horizontal-alignment-item-1">
    <p class="text-gray-500">
      This is the <em class="font-semibold text-gray-800">first</em> item's tab body.
    </p>
  </div>
  <div id="horizontal-alignment-2" class="hidden" role="tabpanel" aria-labelledby="horizontal-alignment-item-2">
    <p class="text-gray-500">
      This is the <em class="font-semibold text-gray-800">second</em> item's tab body.
    </p>
  </div>
</div>
```

### 3. Select personnalisé

```html
<div class="relative">
  <select data-hs-select='{
    "placeholder": "Sélectionnez une option...",
    "toggleTag": "<button type=\"button\"></button>",
    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-1",
    "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto",
    "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
  }' class="hidden">
    <option value="">Choisir</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>
```

## 🐛 Dépannage

### Preline ne s'initialise pas

```typescript
// Vérifier si Preline est disponible
const { isPrelineAvailable, initPreline } = usePreline()

if (isPrelineAvailable()) {
  initPreline()
} else {
  console.warn('Preline UI n\'est pas encore chargé')
}
```

### Composants ne fonctionnent pas après navigation

```typescript
// Dans votre layout ou composant racine
const router = useRouter()

router.afterEach(() => {
  const { initPrelineDelayed } = usePreline()
  initPrelineDelayed(150) // Délai plus long si nécessaire
})
```

### Nettoyer avant de supprimer des éléments

```typescript
// Avant de supprimer des éléments avec des composants Preline
const { cleanupPreline } = usePreline()

const removeComponent = () => {
  // Nettoyer les composants spécifiques
  cleanupPreline(['HSDropdown', 'HSModal'])
  
  // Ou tout nettoyer
  cleanupPreline(['all'])
  
  // Puis supprimer l'élément du DOM
  element.remove()
}
```

## 📚 Ressources

- [Documentation officielle Preline](https://preline.co/docs/)
- [Composants Preline](https://preline.co/docs/components/)
- [GitHub Preline](https://github.com/htmlstreamofficial/preline)

## 🎯 Bonnes pratiques

1. **Toujours initialiser après les changements du DOM**
2. **Nettoyer avant de supprimer des éléments**
3. **Utiliser les délais appropriés pour l'initialisation**
4. **Vérifier la disponibilité avant l'utilisation**
5. **Utiliser le composable `usePreline()` pour la gestion**