<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">
          Test Google Analytics
        </h1>
        <p class="text-lg text-gray-600">
          Vérifiez que Google Analytics fonctionne correctement
        </p>
      </div>

      <!-- Composant de test -->
      <GoogleAnalyticsTest />

      <!-- Instructions -->
      <div class="mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Comment vérifier :</h3>
        <ol class="list-decimal list-inside space-y-2 text-gray-600">
          <li>Ouvrez les <strong>Outils de développement</strong> (F12)</li>
          <li>Allez dans l'onglet <strong>Console</strong></li>
          <li>Vérifiez qu'il n'y a pas d'erreurs</li>
          <li>Allez dans l'onglet <strong>Network</strong></li>
          <li>Recherchez les requêtes vers <code>googletagmanager.com</code></li>
          <li>Vérifiez dans <strong>Google Analytics</strong> que les événements arrivent</li>
        </ol>
      </div>

      <!-- Retour à l'accueil -->
      <div class="mt-8 text-center">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Retour à l'accueil
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Meta tags pour SEO
useHead({
  title: 'Test Google Analytics - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Page de test pour vérifier le fonctionnement de Google Analytics'
    }
  ]
})
</script> 