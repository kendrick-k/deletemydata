<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-6">
          Démonstration Auto-remplissage RGPD
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Testez l'auto-remplissage du générateur RGPD avec différents paramètres d'entreprise.
          Cliquez sur un lien pour voir le formulaire pré-rempli automatiquement.
        </p>
      </div>

      <!-- Grille des exemples -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Google -->
        <CompanyCard
          company="Google"
          domain="google.com"
          dpo="dpo@google.com"
          privacy="privacy@google.com"
          legal="legal@google.com"
          button-text="Tester Google"
          button-classes="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 text-center"
          icon-bg-color="bg-red-100"
          icon-color="text-red-600"
          icon-path="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />

        <!-- Facebook -->
        <CompanyCard
          company="Facebook"
          domain="facebook.com"
          dpo="dpo@facebook.com"
          privacy="privacy@facebook.com"
          legal="legal@facebook.com"
          button-text="Tester Facebook"
          button-classes="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 text-center"
          icon-bg-color="bg-blue-100"
          icon-color="text-blue-600"
          icon-path="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />

        <!-- Amazon -->
        <CompanyCard
          company="Amazon"
          domain="amazon.com"
          dpo="dpo@amazon.com"
          privacy="privacy@amazon.com"
          legal="legal@amazon.com"
          button-text="Tester Amazon"
          button-classes="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 text-center"
          icon-bg-color="bg-orange-100"
          icon-color="text-orange-600"
          icon-path="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />

        <!-- Apple -->
        <CompanyCard
          company="Apple"
          domain="apple.com"
          dpo="dpo@apple.com"
          privacy="privacy@apple.com"
          legal="legal@apple.com"
          button-text="Tester Apple"
          button-classes="w-full bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 text-center"
          icon-bg-color="bg-gray-100"
          icon-color="text-gray-600"
          icon-path="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />

        <!-- Microsoft -->
        <CompanyCard
          company="Microsoft"
          domain="microsoft.com"
          dpo="dpo@microsoft.com"
          privacy="privacy@microsoft.com"
          legal="legal@microsoft.com"
          button-text="Tester Microsoft"
          button-classes="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 text-center"
          icon-bg-color="bg-blue-100"
          icon-color="text-blue-600"
          icon-path="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />

        <!-- Netflix -->
        <CompanyCard
          company="Netflix"
          domain="netflix.com"
          dpo="dpo@netflix.com"
          privacy="privacy@netflix.com"
          legal="legal@netflix.com"
          button-text="Tester Netflix"
          button-classes="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 text-center"
          icon-bg-color="bg-red-100"
          icon-color="text-red-600"
          icon-path="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </div>

      <!-- Instructions -->
      <div class="mt-12 bg-blue-50 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-blue-900 mb-4">Comment ça marche ?</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-800">
          <div>
            <h4 class="font-semibold mb-2">1. Auto-remplissage automatique</h4>
            <p class="text-sm">
              Cliquez sur un des liens ci-dessus. Le générateur RGPD s'ouvrira avec tous les champs 
              pré-remplis automatiquement grâce aux paramètres d'URL.
            </p>
          </div>
          <div>
            <h4 class="font-semibold mb-2">2. Paramètres d'URL</h4>
            <p class="text-sm">
              Les paramètres comme <code>?company=Google&domain=google.com</code> permettent 
              de pré-remplir le formulaire sans que l'utilisateur ait à saisir les informations.
            </p>
          </div>
        </div>
      </div>

      <!-- Liens utiles -->
      <div class="mt-8 text-center">
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="http://localhost:3005/generator"
            class="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg inline-flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
            Générateur RGPD (sans pré-remplissage)
          </a>
          
          <a 
            href="/waiting-list"
            class="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg inline-flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            Liste d'attente RGPD
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import du composant
import CompanyCard from '~/components/CompanyCard.vue'

// Meta tags pour SEO
useHead({
  title: 'Démonstration Auto-remplissage RGPD - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Testez l\'auto-remplissage du générateur RGPD avec différents paramètres d\'entreprise. Voir le formulaire pré-rempli automatiquement.'
    }
  ]
})
</script> 