<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Test de Redirection</h1>
      
      <div class="bg-white rounded-lg shadow p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4">Informations actuelles</h2>
        <div class="space-y-2 text-sm">
          <p><strong>Hostname:</strong> {{ currentHostname }}</p>
          <p><strong>URL complète:</strong> {{ currentUrl }}</p>
          <p><strong>Protocole:</strong> {{ currentProtocol }}</p>
          <p><strong>Devrait rediriger:</strong> <span :class="shouldRedirect ? 'text-red-600' : 'text-green-600'">{{ shouldRedirect ? 'OUI' : 'NON' }}</span></p>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4">Test de redirection</h2>
        <p class="text-gray-600 mb-4">
          Cette page vous permet de tester le middleware de redirection. 
          Si vous êtes sur un domaine Netlify, vous devriez être redirigé vers deletemydata.online.
        </p>
        
        <div class="space-y-3">
          <button 
            @click="testRedirect" 
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Tester la redirection
          </button>
          
          <button 
            @click="simulateNetlifyDomain" 
            class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Simuler un domaine Netlify
          </button>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Logs de redirection</h2>
        <div class="bg-gray-100 p-4 rounded text-sm font-mono max-h-40 overflow-y-auto">
          <div v-for="(log, index) in logs" :key="index" class="mb-1">
            {{ log }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const currentHostname = ref('')
const currentUrl = ref('')
const currentProtocol = ref('')
const shouldRedirect = ref(false)
const logs = ref([])

// Fonction pour ajouter un log
const addLog = (message) => {
  logs.value.unshift(`[${new Date().toLocaleTimeString()}] ${message}`)
  if (logs.value.length > 20) {
    logs.value = logs.value.slice(0, 20)
  }
}

// Fonction pour vérifier si on devrait rediriger
const checkRedirectStatus = () => {
  if (process.client) {
    currentHostname = window.location.hostname
    currentUrl = window.location.href
    currentProtocol = window.location.protocol
    
    // Logique simplifiée du middleware
    shouldRedirect.value = currentHostname.endsWith('.netlify.app') || 
                          currentHostname.endsWith('.netlify.com')
    
    addLog(`Hostname: ${currentHostname}, Should redirect: ${shouldRedirect.value}`)
  }
}

// Fonction pour tester la redirection
const testRedirect = () => {
  addLog('Test de redirection déclenché')
  
  if (shouldRedirect.value) {
    const targetUrl = `https://deletemydata.online${window.location.pathname}`
    addLog(`Redirection vers: ${targetUrl}`)
    
    // Simuler la redirection
    setTimeout(() => {
      window.location.replace(targetUrl)
    }, 1000)
  } else {
    addLog('Aucune redirection nécessaire')
  }
}

// Fonction pour simuler un domaine Netlify
const simulateNetlifyDomain = () => {
  addLog('Simulation d\'un domaine Netlify')
  
  // Créer une URL avec un domaine Netlify fictif
  const fakeNetlifyUrl = 'https://fake-domain.netlify.app' + window.location.pathname
  addLog(`URL simulée: ${fakeNetlifyUrl}`)
  
  // Rediriger vers cette URL (pour tester)
  window.open(fakeNetlifyUrl, '_blank')
}

// Vérifier le statut au montage
onMounted(() => {
  checkRedirectStatus()
  addLog('Page de test chargée')
})

// Vérifier le statut quand la route change
watch(() => useRoute().path, () => {
  checkRedirectStatus()
})
</script> 