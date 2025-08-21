<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Centre d'aide <span class="gradient-text">DeleteMyData</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Trouvez rapidement des réponses à vos questions et obtenez l'aide dont vous avez besoin
        </p>
      </div>
    </section>

    <!-- Recherche -->
    <section class="py-12 bg-white border-b border-gray-200">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher dans l'aide..."
            class="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
          <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- Contenu principal -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <!-- Navigation latérale -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Catégories</h3>
              <nav class="space-y-2">
                <button
                  v-for="category in categories"
                  :key="category.id"
                  @click="selectedCategory = category.id"
                  :class="[
                    'w-full text-left px-3 py-2 rounded-lg text-sm transition-colors',
                    selectedCategory === category.id
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  ]"
                >
                  {{ category.name }}
                </button>
              </nav>
            </div>
          </div>

          <!-- Contenu principal -->
          <div class="lg:col-span-3">
            <!-- Catégorie sélectionnée -->
            <div v-if="selectedCategory" class="space-y-8">
              <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">
                  {{ getCategoryName(selectedCategory) }}
                </h2>
                
                <div class="space-y-6">
                  <div
                    v-for="faq in getCategoryFAQs(selectedCategory)"
                    :key="faq.id"
                    class="border border-gray-200 rounded-lg"
                  >
                    <button
                      @click="toggleFAQ(faq.id)"
                      class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span class="font-medium text-gray-900">{{ faq.question }}</span>
                      <svg
                        :class="[
                          'w-5 h-5 text-gray-500 transition-transform',
                          openFAQs.includes(faq.id) ? 'rotate-180' : ''
                        ]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>
                    
                    <div
                      v-show="openFAQs.includes(faq.id)"
                      class="px-6 pb-4 border-t border-gray-200"
                    >
                      <div class="pt-4 text-gray-600 leading-relaxed" v-html="faq.answer"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Vue d'ensemble -->
            <div v-else class="space-y-8">
              <!-- Guide de démarrage rapide -->
              <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Guide de démarrage rapide</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div class="text-center">
                    <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span class="text-2xl font-bold text-blue-600">1</span>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Créez votre compte</h3>
                    <p class="text-gray-600 text-sm">
                      Inscrivez-vous gratuitement en quelques secondes
                    </p>
                  </div>
                  <div class="text-center">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span class="text-2xl font-bold text-green-600">2</span>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Générez vos demandes</h3>
                    <p class="text-gray-600 text-sm">
                      Utilisez notre générateur pour créer des demandes RGPD
                    </p>
                  </div>
                  <div class="text-center">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span class="text-2xl font-bold text-purple-600">3</span>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">Suivez vos demandes</h3>
                    <p class="text-gray-600 text-sm">
                      Surveillez l'état de vos demandes en temps réel
                    </p>
                  </div>
                </div>
              </div>

              <!-- Questions fréquentes populaires -->
              <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
                <div class="space-y-4">
                  <div
                    v-for="faq in popularFAQs"
                    :key="faq.id"
                    class="border border-gray-200 rounded-lg"
                  >
                    <button
                      @click="toggleFAQ(faq.id)"
                      class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span class="font-medium text-gray-900">{{ faq.question }}</span>
                      <svg
                        :class="[
                          'w-5 h-5 text-gray-500 transition-transform',
                          openFAQs.includes(faq.id) ? 'rotate-180' : ''
                        ]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>
                    
                    <div
                      v-show="openFAQs.includes(faq.id)"
                      class="px-6 pb-4 border-t border-gray-200"
                    >
                      <div class="pt-4 text-gray-600 leading-relaxed" v-html="faq.answer"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Ressources utiles -->
              <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">Ressources utiles</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
                    <div class="flex items-center mb-4">
                      <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                      </div>
                      <h3 class="text-lg font-semibold text-gray-900">Documentation</h3>
                    </div>
                    <p class="text-gray-600 mb-4">
                      Guides détaillés et tutoriels pour utiliser toutes les fonctionnalités
                    </p>
                    <a href="#" class="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Consulter la documentation →
                    </a>
                  </div>

                  <div class="border border-gray-200 rounded-lg p-6 hover:border-green-300 transition-colors">
                    <div class="flex items-center mb-4">
                      <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <h3 class="text-lg font-semibold text-gray-900">FAQ</h3>
                    </div>
                    <p class="text-gray-600 mb-4">
                      Réponses aux questions les plus courantes des utilisateurs
                    </p>
                    <a href="#" class="text-green-600 hover:text-green-700 font-medium text-sm">
                      Voir toutes les FAQ →
                    </a>
                  </div>

                  <div class="border border-gray-200 rounded-lg p-6 hover:border-purple-300 transition-colors">
                    <div class="flex items-center mb-4">
                      <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                        </svg>
                      </div>
                      <h3 class="text-lg font-semibold text-gray-900">Forum communautaire</h3>
                    </div>
                    <p class="text-gray-600 mb-4">
                      Échangez avec d'autres utilisateurs et partagez vos expériences
                    </p>
                    <a href="#" class="text-purple-600 hover:text-purple-700 font-medium text-sm">
                      Rejoindre le forum →
                    </a>
                  </div>

                  <div class="border border-gray-200 rounded-lg p-6 hover:border-orange-300 transition-colors">
                    <div class="flex items-center mb-4">
                      <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                        <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                        </svg>
                      </div>
                      <h3 class="text-lg font-semibold text-gray-900">Blog</h3>
                    </div>
                    <p class="text-gray-600 mb-4">
                      Articles et actualités sur la protection des données et le RGPD
                    </p>
                    <a href="/blog" class="text-orange-600 hover:text-orange-700 font-medium text-sm">
                      Lire le blog →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact support -->
    <section class="py-20 bg-blue-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">
          Besoin d'aide supplémentaire ?
        </h2>
        <p class="text-xl text-blue-100 mb-8 leading-relaxed">
          Notre équipe support est là pour vous aider. Contactez-nous et nous vous répondrons dans les plus brefs délais.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="/contact" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Contacter le support
          </a>
          <a href="/#pricing" class="text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
            Voir nos plans
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Meta tags pour SEO
useHead({
  title: 'Support - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Centre d\'aide DeleteMyData. Trouvez des réponses à vos questions, consultez la FAQ et obtenez l\'aide dont vous avez besoin.'
    }
  ]
})

// État de la recherche et navigation
const searchQuery = ref('')
const selectedCategory = ref(null)
const openFAQs = ref([])

// Catégories d'aide
const categories = [
  { id: 'getting-started', name: 'Premiers pas' },
  { id: 'features', name: 'Fonctionnalités' },
  { id: 'billing', name: 'Facturation' },
  { id: 'technical', name: 'Support technique' },
  { id: 'legal', name: 'Questions légales' },
  { id: 'troubleshooting', name: 'Dépannage' }
]

// FAQ populaires
const popularFAQs = ref([
  {
    id: 'pop-1',
    question: 'Comment fonctionne DeleteMyData ?',
    answer: `
      <p class="mb-3">DeleteMyData simplifie le processus de suppression de vos données personnelles :</p>
      <ol class="list-decimal list-inside space-y-2">
        <li><strong>Créez votre compte</strong> gratuitement en quelques secondes</li>
        <li><strong>Générez des demandes RGPD</strong> avec notre outil automatisé</li>
        <li><strong>Envoyez automatiquement</strong> vos demandes aux entreprises</li>
        <li><strong>Suivez l'état</strong> de vos demandes en temps réel</li>
        <li><strong>Recevez des notifications</strong> et relances automatiques</li>
      </ol>
    `
  },
  {
    id: 'pop-2',
    question: 'Combien de demandes puis-je envoyer ?',
    answer: `
      <p class="mb-3">Cela dépend de votre plan :</p>
      <ul class="list-disc list-inside space-y-2">
        <li><strong>Gratuit :</strong> 3 demandes par mois</li>
        <li><strong>Pro :</strong> Demandes illimitées</li>
        <li><strong>Business :</strong> Demandes illimitées + fonctionnalités avancées</li>
      </ul>
      <p class="mt-3">Vous pouvez toujours passer à un plan supérieur si vous avez besoin de plus de demandes.</p>
    `
  },
  {
    id: 'pop-3',
    question: 'Quels types de données puis-je faire supprimer ?',
    answer: `
      <p class="mb-3">Vous pouvez demander la suppression de tous vos <strong>données personnelles</strong> :</p>
      <ul class="list-disc list-inside space-y-2">
        <li>Informations de profil (nom, email, téléphone)</li>
        <li>Données de navigation et cookies</li>
        <li>Historique d'achat et préférences</li>
        <li>Données de localisation</li>
        <li>Contenu généré par l'utilisateur</li>
        <li>Données de tiers (partenaires, annonceurs)</li>
      </ul>
    `
  }
])

// Toutes les FAQ par catégorie
const allFAQs = ref({
  'getting-started': [
    {
      id: 'gs-1',
      question: 'Comment créer mon compte ?',
      answer: `
        <p class="mb-3">Créer votre compte est simple et gratuit :</p>
        <ol class="list-decimal list-inside space-y-2">
          <li>Cliquez sur "S'inscrire" dans le menu principal</li>
          <li>Remplissez le formulaire avec vos informations</li>
          <li>Vérifiez votre email</li>
          <li>Connectez-vous et commencez à utiliser la plateforme</li>
        </ol>
        <p class="mt-3">Aucune carte de crédit n'est requise pour commencer.</p>
      `
    },
    {
      id: 'gs-2',
      question: 'Quels sont les prérequis ?',
      answer: `
        <p class="mb-3">Pour utiliser DeleteMyData, vous avez besoin de :</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Une adresse email valide</li>
          <li>Être majeur (18 ans ou plus)</li>
          <li>Résider dans l'UE ou aux États-Unis (pour le Delete Act)</li>
          <li>Un navigateur web moderne (Chrome, Firefox, Safari, Edge)</li>
        </ul>
      `
    }
  ],
  'features': [
    {
      id: 'feat-1',
      question: 'Qu\'est-ce que l\'annuaire Privacy Contacts ?',
      answer: `
        <p class="mb-3">L\'annuaire Privacy Contacts est une base de données de plus de 10 000 entreprises avec leurs contacts de protection des données :</p>
        <ul class="list-disc list-inside space-y-2">
          <li><strong>Emails DPO</strong> vérifiés et maintenus à jour</li>
          <li><strong>Contacts privacy@</strong> pour les demandes générales</li>
          <li><strong>Adresses légales</strong> pour les demandes officielles</li>
          <li><strong>Mise à jour continue</strong> des informations</li>
        </ul>
      `
    }
  ],
  'billing': [
    {
      id: 'bill-1',
      question: 'Comment annuler mon abonnement ?',
      answer: `
        <p class="mb-3">Pour annuler votre abonnement :</p>
        <ol class="list-decimal list-inside space-y-2">
          <li>Connectez-vous à votre compte</li>
          <li>Allez dans "Paramètres" > "Abonnement"</li>
          <li>Cliquez sur "Annuler l'abonnement"</li>
          <li>Confirmez votre choix</li>
        </ol>
        <p class="mt-3">Votre abonnement restera actif jusqu'à la fin de la période facturée.</p>
      `
    }
  ]
})

// Méthodes
const getCategoryName = (categoryId) => {
  const category = categories.find(cat => cat.id === categoryId)
  return category ? category.name : ''
}

const getCategoryFAQs = (categoryId) => {
  return allFAQs.value[categoryId] || []
}

const toggleFAQ = (faqId) => {
  const index = openFAQs.value.indexOf(faqId)
  if (index > -1) {
    openFAQs.value.splice(index, 1)
  } else {
    openFAQs.value.push(faqId)
  }
}

// Recherche dans les FAQ
const searchFAQs = computed(() => {
  if (!searchQuery.value) return []
  
  const query = searchQuery.value.toLowerCase()
  const results = []
  
  // Rechercher dans toutes les catégories
  Object.values(allFAQs.value).forEach(categoryFAQs => {
    categoryFAQs.forEach(faq => {
      if (faq.question.toLowerCase().includes(query) || 
          faq.answer.toLowerCase().includes(query)) {
        results.push(faq)
      }
    })
  })
  
  return results
})
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style> 