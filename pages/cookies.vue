<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Politique des <span class="gradient-text">Cookies</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Dernière mise à jour : {{ lastUpdated }}<br>
          Découvrez comment nous utilisons les cookies pour améliorer votre expérience.
        </p>
      </div>
    </section>

    <!-- Content -->
    <div class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          
          <!-- Introduction -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Qu'est-ce qu'un cookie ?</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone) 
              lorsque vous visitez un site web. Les cookies permettent au site de "se souvenir" de vos actions 
              et préférences (identifiant de connexion, langue, taille de police et autres préférences d'affichage) 
              sur une période donnée.
            </p>
            <p class="text-gray-700 leading-relaxed">
              Les cookies ne peuvent pas exécuter de code ou contenir des virus. Ils ne peuvent pas accéder 
              à d'autres informations stockées sur votre appareil.
            </p>
          </div>

          <!-- How We Use Cookies -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Comment nous utilisons les cookies</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              DeleteMyData utilise des cookies pour :
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Améliorer votre expérience :</strong> Mémoriser vos préférences et paramètres</li>
              <li><strong>Analyser l'utilisation :</strong> Comprendre comment vous utilisez notre site</li>
              <li><strong>Sécurité :</strong> Maintenir votre session et protéger contre les attaques</li>
              <li><strong>Fonctionnalités :</strong> Permettre certaines fonctionnalités du site</li>
              <li><strong>Personnalisation :</strong> Adapter le contenu à vos intérêts</li>
            </ul>
          </div>

          <!-- Types of Cookies -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Types de cookies que nous utilisons</h2>
            
            <div class="space-y-8">
              <!-- Essential Cookies -->
              <div class="border-l-4 border-blue-500 pl-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-3">🍪 Cookies essentiels</h3>
                <p class="text-gray-700 mb-3">
                  Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés.
                </p>
                <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Cookies de session pour maintenir votre connexion</li>
                  <li>Cookies de sécurité pour protéger contre les attaques CSRF</li>
                  <li>Cookies de préférences de base (langue, thème)</li>
                </ul>
                <p class="text-sm text-gray-500 mt-2">
                  <strong>Durée :</strong> Session ou 1 an maximum
                </p>
              </div>

              <!-- Analytics Cookies -->
              <div class="border-l-4 border-green-500 pl-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-3">📊 Cookies d'analyse</h3>
                <p class="text-gray-700 mb-3">
                  Ces cookies nous aident à comprendre comment vous utilisez notre site.
                </p>
                <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Google Analytics pour analyser le trafic et l'utilisation</li>
                  <li>Cookies de performance pour mesurer les temps de chargement</li>
                  <li>Cookies d'erreur pour identifier et corriger les problèmes</li>
                </ul>
                <p class="text-sm text-gray-500 mt-2">
                  <strong>Durée :</strong> 2 ans maximum
                </p>
              </div>

              <!-- Functional Cookies -->
              <div class="border-l-4 border-purple-500 pl-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-3">⚙️ Cookies fonctionnels</h3>
                <p class="text-gray-700 mb-3">
                  Ces cookies améliorent votre expérience en mémorisant vos choix.
                </p>
                <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Préférences d'affichage et de mise en page</li>
                  <li>Historique de navigation et favoris</li>
                  <li>Paramètres de formulaire sauvegardés</li>
                </ul>
                <p class="text-sm text-gray-500 mt-2">
                  <strong>Durée :</strong> 1 an maximum
                </p>
              </div>

              <!-- Third Party Cookies -->
              <div class="border-l-4 border-orange-500 pl-6">
                <h3 class="text-xl font-semibold text-gray-800 mb-3">🔗 Cookies tiers</h3>
                <p class="text-gray-700 mb-3">
                  Ces cookies sont placés par des services tiers que nous utilisons.
                </p>
                <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>Preline UI pour les composants d'interface</li>
                  <li>Supabase pour l'authentification et la base de données</li>
                  <li>Services de support client et de chat</li>
                </ul>
                <p class="text-sm text-gray-500 mt-2">
                  <strong>Durée :</strong> Selon les politiques des tiers
                </p>
              </div>
            </div>
          </div>

          <!-- Cookie Management -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Gestion des cookies</h2>
            
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Comment contrôler les cookies</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              Vous pouvez contrôler et/ou supprimer des cookies comme vous le souhaitez. 
              Vous pouvez supprimer tous les cookies déjà présents sur votre ordinateur et 
              configurer la plupart des navigateurs pour les empêcher d'en enregistrer.
            </p>

            <div class="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Paramètres par navigateur :</h4>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies et autres données de sites</li>
                <li><strong>Firefox :</strong> Options → Confidentialité et sécurité → Cookies et données de sites</li>
                <li><strong>Safari :</strong> Préférences → Confidentialité → Cookies et données de sites web</li>
                <li><strong>Edge :</strong> Paramètres → Cookies et autorisations de sites</li>
              </ul>
            </div>

            <h3 class="text-xl font-semibold text-gray-800 mb-4">Notre panneau de gestion des cookies</h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              Nous mettons à votre disposition un panneau de gestion des cookies qui vous permet de :
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Voir tous les cookies utilisés sur notre site</li>
              <li>Activer/désactiver les cookies par catégorie</li>
              <li>Supprimer tous les cookies existants</li>
              <li>Personnaliser vos préférences de cookies</li>
            </ul>

            <!-- Cookie Consent Banner -->
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-blue-900 mb-3">🎛️ Panneau de gestion des cookies</h4>
              <p class="text-blue-800 mb-4">
                Utilisez notre panneau de gestion pour contrôler vos préférences de cookies.
              </p>
              <button 
                @click="openCookieManager"
                class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Ouvrir le gestionnaire de cookies
              </button>
            </div>
          </div>

          <!-- Specific Cookies -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Cookies spécifiques utilisés</h2>
            
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom du cookie</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Objectif</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durée</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 text-sm text-gray-900">nuxt-color-mode</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Préférence de thème (clair/sombre)</td>
                    <td class="px-6 py-4 text-sm text-gray-700">1 an</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Fonctionnel</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-gray-900">sb-[hash]</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Session d'authentification Supabase</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Session</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Essentiel</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-gray-900">_ga</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Analytics Google (identifiant unique)</td>
                    <td class="px-6 py-4 text-sm text-gray-700">2 ans</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Analytics</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-gray-900">_gid</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Analytics Google (session)</td>
                    <td class="px-6 py-4 text-sm text-gray-700">24h</td>
                    <td class="px-6 py-4 text-sm text-gray-700">Analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Updates -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Mises à jour de cette politique</h2>
            <p class="text-gray-700 leading-relaxed">
              Nous pouvons mettre à jour cette politique des cookies de temps à autre pour refléter 
              les changements dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires. 
              Nous vous informerons de tout changement important en publiant la nouvelle politique sur cette page.
            </p>
          </div>

          <!-- Contact -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Questions sur les cookies ?</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
              Si vous avez des questions concernant notre utilisation des cookies, 
              contactez-nous :
            </p>
            <div class="bg-gray-50 rounded-lg p-6">
              <p class="text-gray-700 mb-2">
                <strong>Email :</strong> <a href="mailto:privacy@deletemydata.online" class="text-blue-600 hover:underline">privacy@deletemydata.online</a>
              </p>
              <p class="text-gray-700 mb-2">
                <strong>DPO :</strong> <a href="mailto:dpo@deletemydata.online" class="text-blue-600 hover:underline">dpo@deletemydata.online</a>
              </p>
              <p class="text-gray-700">
                <strong>Support :</strong> <a href="/contact" class="text-blue-600 hover:underline">Formulaire de contact</a>
              </p>
            </div>
          </div>

          <!-- CTA -->
          <div class="text-center bg-blue-50 rounded-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Maintenant que vous savez tout sur nos cookies...</h3>
            <p class="text-gray-600 mb-6">
              Commencez à utiliser notre générateur de demandes RGPD !
            </p>
            <a href="/generator" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
              Commencer gratuitement
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </div>

    <!-- Cookie Manager Modal -->
    <div v-if="showCookieManager" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-2xl font-bold text-gray-900">Gestionnaire de cookies</h3>
            <button 
              @click="showCookieManager = false"
              class="text-gray-400 hover:text-gray-600"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div class="space-y-6">
            <!-- Essential Cookies -->
            <div class="border rounded-lg p-4">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <h4 class="font-semibold text-gray-900">🍪 Cookies essentiels</h4>
                  <p class="text-sm text-gray-600">Nécessaires au fonctionnement du site</p>
                </div>
                <div class="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
                  Toujours actifs
                </div>
              </div>
              <p class="text-sm text-gray-700">
                Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés.
              </p>
            </div>

            <!-- Analytics Cookies -->
            <div class="border rounded-lg p-4">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <h4 class="font-semibold text-gray-900">📊 Cookies d'analyse</h4>
                  <p class="text-sm text-gray-600">Nous aident à améliorer le site</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input 
                    v-model="analyticsEnabled" 
                    type="checkbox" 
                    class="sr-only peer"
                  >
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <p class="text-sm text-gray-700">
                Ces cookies nous aident à comprendre comment vous utilisez notre site.
              </p>
            </div>

            <!-- Functional Cookies -->
            <div class="border rounded-lg p-4">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <h4 class="font-semibold text-gray-900">⚙️ Cookies fonctionnels</h4>
                  <p class="text-sm text-gray-600">Améliorent votre expérience</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input 
                    v-model="functionalEnabled" 
                    type="checkbox" 
                    class="sr-only peer"
                  >
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <p class="text-sm text-gray-700">
                Ces cookies mémorisent vos préférences et choix.
              </p>
            </div>
          </div>

          <div class="flex gap-3 mt-8">
            <button 
              @click="saveCookiePreferences"
              class="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Sauvegarder les préférences
            </button>
            <button 
              @click="showCookieManager = false"
              class="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Meta tags pour SEO
useHead({
  title: 'Politique des Cookies - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Politique des cookies de DeleteMyData. Découvrez comment nous utilisons les cookies et comment les gérer.'
    }
  ]
})

// Date de dernière mise à jour
const lastUpdated = '21 août 2024'

// État du gestionnaire de cookies
const showCookieManager = ref(false)
const analyticsEnabled = ref(true)
const functionalEnabled = ref(true)

// Ouvrir le gestionnaire de cookies
const openCookieManager = () => {
  showCookieManager.value = true
}

// Sauvegarder les préférences de cookies
const saveCookiePreferences = () => {
  // Ici vous pouvez implémenter la logique de sauvegarde des préférences
  // Par exemple, stocker dans localStorage et appliquer les préférences
  localStorage.setItem('cookie-preferences', JSON.stringify({
    analytics: analyticsEnabled.value,
    functional: functionalEnabled.value
  }))
  
  showCookieManager.value = false
  
  // Optionnel : afficher une confirmation
  alert('Préférences de cookies sauvegardées !')
}
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style> 