<template>
  <section id="pricing" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">Tarifs simples et transparents</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Commencez gratuitement, évoluez selon vos besoins
        </p>
        <button type="button" class="hs-overlay-toggle bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-3" data-hs-overlay="#pricing-modal">
          Voir tous les détails
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Free Plan -->
        <div class="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Gratuit</h3>
          <p class="text-gray-600 mb-6">Pour commencer</p>
          <div class="text-4xl font-bold text-gray-900 mb-8">
            0€
            <span class="text-lg font-normal text-gray-600">/mois</span>
          </div>
          <ul class="text-left space-y-4 mb-8">
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              3 demandes par mois
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Générateur de demandes
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Export PDF
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Annuaire Privacy Contacts
            </li>
          </ul>
                      <a href="http://localhost:3005/generator" class="btn-outline w-full">Commencer gratuitement</a>
        </div>
        
        <!-- Pro Plan - Désactivé -->
        <div class="bg-white border-2 border-gray-200 rounded-xl p-8 text-center relative opacity-30 pointer-events-none">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-gray-400 text-white px-4 py-1 rounded-full text-sm font-semibold">Bientôt disponible</span>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
          <p class="text-gray-600 mb-6">Pour les particuliers</p>
          <div class="text-4xl font-bold text-gray-900 mb-8">
            9€
            <span class="text-lg font-normal text-gray-600">/mois</span>
          </div>
          <ul class="text-left space-y-4 mb-8">
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Demandes illimitées
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Envoi automatique
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Relances automatiques
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Preuves horodatées
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Support prioritaire
            </li>
          </ul>
          <button disabled class="bg-gray-300 text-gray-500 px-6 py-3 rounded-lg font-semibold cursor-not-allowed w-full">
            Bientôt disponible
          </button>
        </div>
        
        <!-- Business Plan - Désactivé -->
        <div class="bg-white border-2 border-gray-200 rounded-xl p-8 text-center opacity-30 pointer-events-none">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Business</h3>
          <p class="text-gray-600 mb-6">Pour les PME</p>
          <div class="text-4xl font-bold text-gray-900 mb-8">
            49€
            <span class="text-lg font-normal text-gray-600">/mois</span>
          </div>
          <ul class="text-left space-y-4 mb-8">
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Tout du plan Pro
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Dashboard multi-marques
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Modèles personnalisés
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Export et rapports
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              3 sièges inclus
            </li>
          </ul>
          <button disabled class="bg-gray-300 text-gray-500 px-6 py-3 rounded-lg font-semibold cursor-not-allowed w-full">
            Bientôt disponible
          </button>
        </div>
      </div>
      
      <!-- Message informatif -->
      <div class="text-center mt-12">
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
          <div class="flex items-center justify-center mb-3">
            <svg class="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <h3 class="text-lg font-semibold text-blue-900">Plans Pro et Business en développement</h3>
          </div>
          <p class="text-blue-800">
            Nous travaillons actuellement sur les fonctionnalités avancées. Le plan gratuit vous permet déjà de commencer 
            à reprendre le contrôle de vos données. Inscrivez-vous pour être notifié de la disponibilité des plans payants.
          </p>
        </div>
      </div>
    </div>
  </section>
</template> 