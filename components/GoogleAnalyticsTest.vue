<template>
  <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
    <h3 class="text-lg font-semibold text-blue-900 mb-3">Test Google Analytics</h3>
    
    <div class="space-y-3">
      <!-- Test de chargement -->
      <div class="flex items-center gap-3">
        <span class="text-sm text-gray-600">État GA :</span>
        <span 
          :class="[
            'px-2 py-1 rounded text-xs font-medium',
            gaLoaded ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          ]"
        >
          {{ gaLoaded ? 'Chargé' : 'Non chargé' }}
        </span>
      </div>

      <!-- Test d'événement -->
      <button 
        @click="testEvent"
        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
        :disabled="!gaLoaded"
      >
        Tester événement GA
      </button>

      <!-- Test de page view -->
      <button 
        @click="testPageView"
        class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
        :disabled="!gaLoaded"
      >
        Tester page view GA
      </button>

      <!-- Logs -->
      <div v-if="logs.length > 0" class="mt-4">
        <h4 class="text-sm font-medium text-gray-700 mb-2">Logs :</h4>
        <div class="bg-gray-100 p-3 rounded text-xs font-mono max-h-32 overflow-y-auto">
          <div v-for="(log, index) in logs" :key="index" class="text-gray-600">
            {{ log }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $gtag } = useNuxtApp()

const gaLoaded = ref(false)
const logs = ref<string[]>([])

// Vérifier si GA est chargé
onMounted(() => {
  const checkGA = () => {
    if (window.gtag && typeof window.gtag === 'function') {
      gaLoaded.value = true
      addLog('✅ Google Analytics chargé avec succès')
    } else {
      setTimeout(checkGA, 1000) // Vérifier toutes les secondes
    }
  }
  
  checkGA()
})

// Ajouter un log
const addLog = (message: string) => {
  const timestamp = new Date().toLocaleTimeString()
  logs.value.unshift(`[${timestamp}] ${message}`)
  if (logs.value.length > 10) logs.value.pop()
}

// Tester un événement
const testEvent = () => {
  if (window.gtag) {
    window.gtag('event', 'test_event', {
      event_category: 'test',
      event_label: 'Test depuis le composant',
      value: 1
    })
    addLog('📊 Événement GA envoyé : test_event')
  }
}

// Tester une page view
const testPageView = () => {
  if (window.gtag) {
    window.gtag('config', 'G-9FHSG87X4G', {
      page_title: 'Test Page View',
      page_location: window.location.href,
      page_path: '/test'
    })
    addLog('📄 Page view GA envoyée')
  }
}
</script> 