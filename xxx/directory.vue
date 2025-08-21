<template>
  <div class="py-12">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Annuaire Privacy Contacts
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Base de données des contacts DPO, privacy@ et légaux vérifiés et maintenus à jour. 
          Trouvez rapidement les bons contacts pour exercer vos droits.
        </p>
      </div>
      
      <CompanySearch />
      
      <!-- Catégories d'entreprises -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          Par catégorie d'entreprise
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Tech & Internet</h3>
            <p class="text-sm text-gray-600 mb-3">Google, Facebook, Amazon, Apple...</p>
            <div class="text-2xl font-bold text-blue-600">150+</div>
          </div>
          
          <div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">E-commerce</h3>
            <p class="text-sm text-gray-600 mb-3">Amazon, eBay, Cdiscount, Fnac...</p>
            <div class="text-2xl font-bold text-green-600">80+</div>
          </div>
          
          <div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Banques & Finance</h3>
            <p class="text-sm text-gray-600 mb-3">BNP, Crédit Agricole, Société Générale...</p>
            <div class="text-2xl font-bold text-purple-600">60+</div>
          </div>
          
          <div class="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
            <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Télécoms</h3>
            <p class="text-sm text-gray-600 mb-3">Orange, SFR, Free, Bouygues...</p>
            <div class="text-2xl font-bold text-orange-600">40+</div>
          </div>
        </div>
      </div>
      
      <!-- Statistiques détaillées -->
      <div class="mt-16 bg-gray-50 rounded-xl p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          Statistiques de notre base de données
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div class="text-gray-600 mb-2">Entreprises référencées</div>
            <div class="text-sm text-gray-500">Tous secteurs confondus</div>
          </div>
          
          <div class="text-center">
            <div class="text-4xl font-bold text-green-600 mb-2">1000+</div>
            <div class="text-gray-600 mb-2">Contacts vérifiés</div>
            <div class="text-sm text-gray-500">DPO, privacy@, legal@</div>
          </div>
          
          <div class="text-center">
            <div class="text-4xl font-bold text-purple-600 mb-2">24h</div>
            <div class="text-gray-600 mb-2">Mise à jour</div>
            <div class="text-sm text-gray-500">Vérification continue</div>
          </div>
          
          <div class="text-center">
            <div class="text-4xl font-bold text-orange-600 mb-2">95%</div>
            <div class="text-gray-600 mb-2">Taux de réponse</div>
            <div class="text-sm text-gray-500">Emails actifs</div>
          </div>
        </div>
      </div>
      
      <!-- Comment nous trouvons les contacts -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">
          Comment nous trouvons les contacts
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Scraping intelligent</h3>
            <p class="text-gray-600 text-sm">
              Analyse automatique des sites web pour identifier les pages de confidentialité 
              et extraire les contacts appropriés.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-green-600">2</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Registres publics</h3>
            <p class="text-gray-600 text-sm">
              Consultation des registres officiels (CPPA pour les data brokers US, 
              registres européens) pour des informations vérifiées.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Vérification continue</h3>
            <p class="text-gray-600 text-sm">
              Tests automatiques et manuels pour s'assurer que les emails sont actifs 
              et que les contacts sont toujours valides.
            </p>
          </div>
        </div>
      </div>
      
      <!-- CTA -->
      <div class="mt-16 text-center">
        <div class="bg-blue-600 rounded-xl p-8 text-white">
          <h2 class="text-2xl font-bold mb-4">
            Besoin d'aide pour trouver un contact ?
          </h2>
          <p class="text-blue-100 mb-6">
            Notre équipe peut vous aider à identifier le bon contact pour une entreprise spécifique.
          </p>
          <button class="btn-secondary">
            Demander de l'aide
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Meta tags pour SEO
useHead({
  title: 'Annuaire Privacy Contacts - DeleteMyData.online',
  meta: [
    {
      name: 'description',
      content: 'Base de données des contacts DPO, privacy@ et légaux vérifiés. Trouvez rapidement les bons contacts pour exercer vos droits RGPD.'
    }
  ]
})
</script> 