<template>
  <div class="py-12">
    <div class="container-custom">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Générateur de demandes RGPD
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Créez des demandes de suppression de données personnalisées et conformes au RGPD. 
          Nos modèles légaux pré-approuvés vous garantissent une efficacité maximale.
        </p>
      </div>
      
      <GdprRequestForm />
      
      <!-- Informations supplémentaires -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Conforme RGPD</h3>
          <p class="text-gray-600 text-sm">
            Tous nos modèles respectent strictement les exigences du Règlement Général sur la Protection des Données.
          </p>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Sécurisé</h3>
          <p class="text-gray-600 text-sm">
            Vos données sont chiffrées et ne sont utilisées que pour générer vos demandes. Aucune conservation.
          </p>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Rapide</h3>
          <p class="text-gray-600 text-sm">
            Générez une demande complète en moins de 2 minutes. Plus besoin de rédiger de longs emails.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Meta tags pour SEO
useHead({
  title: 'Générateur de demandes RGPD - DeleteMyData.online',
  meta: [
    {
      name: 'description',
      content: 'Générez des demandes RGPD personnalisées et conformes en quelques clics. Modèles légaux pré-approuvés, génération rapide et sécurisée.'
    }
  ]
})
</script> 