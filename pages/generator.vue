<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-6">
          Générateur de demandes RGPD
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Créez des demandes de suppression de données conformes au RGPD et au Delete Act en quelques clics.
        </p>
      </div>

      <!-- Generator Form -->
      <div class="max-w-3xl mx-auto">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <form class="space-y-6">
            <!-- Personal Information -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Informations personnelles</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
              </div>
              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
            </div>

            <!-- Company Information -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Entreprise cible</h3>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nom de l'entreprise</label>
                <input type="text" placeholder="Ex: Google, Facebook, Amazon..." class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Domaine de l'entreprise</label>
                <input type="text" placeholder="Ex: google.com" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
            </div>

            <!-- Request Type -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Type de demande</h3>
              <div class="space-y-3">
                <label class="flex items-center">
                  <input type="radio" name="requestType" value="deletion" class="mr-3" checked>
                  <span class="text-sm text-gray-700">Demande de suppression (droit à l'oubli)</span>
                </label>
                <label class="flex items-center">
                  <input type="radio" name="requestType" value="access" class="mr-3">
                  <span class="text-sm text-gray-700">Demande d'accès aux données</span>
                </label>
                <label class="flex items-center">
                  <input type="radio" name="requestType" value="rectification" class="mr-3">
                  <span class="text-sm text-gray-700">Demande de rectification</span>
                </label>
              </div>
            </div>

            <!-- Additional Details -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Détails supplémentaires</h3>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Informations spécifiques (optionnel)</label>
                <textarea rows="4" placeholder="Décrivez les données spécifiques que vous souhaitez supprimer ou accéder..." class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="pt-4">
              <button type="submit" class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Générer ma demande RGPD
              </button>
            </div>
          </form>
        </div>

        <!-- Info Box -->
        <div class="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div class="flex items-start">
            <svg class="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
            </svg>
            <div>
              <h4 class="text-sm font-semibold text-blue-900">Vos droits RGPD</h4>
              <p class="text-sm text-blue-800 mt-1">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous avez le droit de demander la suppression de vos données personnelles. L'entreprise a 30 jours pour répondre à votre demande.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Générateur RGPD - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Générez des demandes RGPD conformes en quelques clics. Modèles légaux pré-approuvés pour la suppression de vos données personnelles.'
    }
  ]
})
</script> 