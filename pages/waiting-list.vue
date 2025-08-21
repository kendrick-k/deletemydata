<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-6">
          Liste d'attente RGPD
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Inscrivez-vous pour être informé en premier de nos nouvelles fonctionnalités 
          et services de protection des données personnelles.
        </p>
      </div>

      <!-- Formulaire d'inscription -->
      <WaitingListForm 
        @subscribed="handleSubscribed"
      />

      <!-- Informations supplémentaires -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Accès prioritaire</h3>
          <p class="text-gray-600 text-sm">
            Soyez parmi les premiers à tester nos nouvelles fonctionnalités RGPD
          </p>
        </div>

        <div class="text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Notifications exclusives</h3>
          <p class="text-gray-600 text-sm">
            Recevez des informations exclusives sur la protection des données
          </p>
        </div>

        <div class="text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Support prioritaire</h3>
          <p class="text-gray-600 text-sm">
            Bénéficiez d'un support dédié pour vos questions RGPD
          </p>
        </div>
      </div>

      <!-- FAQ -->
      <div class="mt-16 bg-white rounded-lg shadow-sm p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          Questions fréquentes
        </h2>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              Qu'est-ce que la liste d'attente RGPD ?
            </h3>
            <p class="text-gray-600">
              C'est une liste d'utilisateurs qui souhaitent être informés en premier de nos nouvelles 
              fonctionnalités et services liés à la protection des données personnelles (RGPD).
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              Que vais-je recevoir ?
            </h3>
            <p class="text-gray-600">
              Vous recevrez des notifications sur nos nouvelles fonctionnalités, des conseils RGPD, 
              des mises à jour de nos services et des offres exclusives.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              Puis-je me désinscrire ?
            </h3>
            <p class="text-gray-600">
              Oui, vous pouvez vous désinscrire à tout moment en cliquant sur le lien de désinscription 
              dans nos emails ou en nous contactant directement.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              Mes données sont-elles protégées ?
            </h3>
            <p class="text-gray-600">
              Absolument ! Nous respectons le RGPD et ne partagerons jamais vos informations personnelles 
              avec des tiers. Vos données sont stockées de manière sécurisée.
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-12 text-center">
        <a 
          href="/generator"
          class="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
        >
          Essayer le générateur RGPD
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import du composant
import WaitingListForm from '~/components/WaitingListForm.vue'

// Meta tags pour SEO
useHead({
  title: 'Liste d\'attente RGPD - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Inscrivez-vous à notre liste d\'attente RGPD pour être informé en premier de nos nouvelles fonctionnalités de protection des données personnelles.'
    }
  ]
})

// Gérer l'inscription réussie
const handleSubscribed = (email: string) => {
  console.log('Utilisateur inscrit:', email)
  // Ici vous pouvez ajouter des analytics, redirections, etc.
}
</script> 