<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-6">
          Test du Pré-remplissage
        </h1>
        <p class="text-xl text-gray-600">
          Testez le pré-remplissage du générateur RGPD avec différents paramètres
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Test 1: Google -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Test Google</h3>
          <p class="text-gray-600 mb-4">
            Pré-remplissage avec les informations de Google
          </p>
          <a 
            href="/generator?company=Google&domain=google.com&dpo=dpo@google.com&privacy=privacy@google.com&legal=legal@google.com"
            class="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            tester google
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>

        <!-- Test 2: Facebook -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Test Facebook</h3>
          <p class="text-gray-600 mb-4">
            Pré-remplissage avec les informations de Facebook
          </p>
          <a 
            href="/generator?company=Facebook&domain=facebook.com&dpo=dpo@facebook.com&privacy=privacy@facebook.com&legal=legal@facebook.com"
            class="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            tester facebook
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>

        <!-- Test 3: Amazon -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Test Amazon</h3>
          <p class="text-gray-600 mb-4">
            Pré-remplissage avec les informations d'Amazon
          </p>
          <a 
            href="/generator?company=Amazon&domain=amazon.com&dpo=dpo@amazon.com&privacy=privacy@amazon.com&legal=legal@amazon.com"
            class="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            tester amazon
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>

        <!-- Test 4: Test simple -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Test Simple</h3>
          <p class="text-gray-600 mb-4">
            Pré-remplissage avec des données de test
          </p>
          <a 
            href="/generator?company=Test%20Company&domain=test.com&dpo=dpo@test.com&privacy=privacy@test.com&legal=legal@test.com"
            class="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            tester simple
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Instructions -->
      <div class="mt-12 bg-blue-50 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-blue-900 mb-4">Instructions de test</h3>
        <ol class="list-decimal list-inside space-y-2 text-blue-800">
          <li>Cliquez sur un des liens de test ci-dessus</li>
          <li>Vous serez redirigé vers le générateur RGPD</li>
          <li>Vérifiez que les champs sont pré-remplis avec les bonnes informations</li>
          <li>Testez la génération de la demande</li>
        </ol>
      </div>

      <!-- Retour au générateur -->
      <div class="mt-8 text-center">
        <a 
          href="/generator"
          class="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
        >
          Aller au générateur (sans pré-remplissage)
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Meta tags pour SEO
useHead({
  title: 'Test Pré-remplissage - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Testez le pré-remplissage du générateur RGPD avec différents paramètres d\'entreprise.'
    }
  ]
})
</script> 