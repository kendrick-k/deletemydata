<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Domain Redirect Test</h1>
      
      <div class="bg-white rounded-lg shadow p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4">Current Domain Information</h2>
        <div class="space-y-2">
          <div class="flex items-center">
            <span class="font-mono text-sm">Hostname: {{ currentHostname }}</span>
          </div>
          <div class="flex items-center">
            <span class="font-mono text-sm">Protocol: {{ currentProtocol }}</span>
          </div>
          <div class="flex items-center">
            <span class="font-mono text-sm">Full URL: {{ currentUrl }}</span>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4">Redirect Logic</h2>
        <div class="space-y-2">
          <div class="flex items-center">
            <span class="w-4 h-4 rounded-full mr-3" :class="shouldRedirect ? 'bg-red-500' : 'bg-green-500'"></span>
            <span class="font-mono text-sm">
              Should Redirect: {{ shouldRedirect ? 'Yes' : 'No' }}
            </span>
          </div>
          <div class="flex items-center">
            <span class="w-4 h-4 rounded-full mr-3" :class="isLocalhost ? 'bg-green-500' : 'bg-blue-500'"></span>
            <span class="font-mono text-sm">
              Is Localhost: {{ isLocalhost ? 'Yes' : 'No' }}
            </span>
          </div>
          <div class="flex items-center">
            <span class="w-4 h-4 rounded-full mr-3" :class="isMainDomain ? 'bg-green-500' : 'bg-blue-500'"></span>
            <span class="font-mono text-sm">
              Is Main Domain: {{ isMainDomain ? 'Yes' : 'No' }}
            </span>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Actions</h2>
        <div class="space-y-4">
          <button 
            @click="testRedirect"
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Test Redirect Logic
          </button>
          
          <button 
            @click="copyCurrentInfo"
            class="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 ml-2"
          >
            Copy Current Info
          </button>
        </div>
        
        <div v-if="redirectTarget" class="mt-4 p-3 bg-blue-100 text-blue-800 rounded">
          <p><strong>Redirect Target:</strong> {{ redirectTarget }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { shouldRedirectToMainDomain, getMainDomainUrl } from '~/utils/domain'

// Current domain information
const currentHostname = ref('')
const currentProtocol = ref('')
const currentUrl = ref('')
const shouldRedirect = ref(false)
const isLocalhost = ref(false)
const isMainDomain = ref(false)
const redirectTarget = ref('')

// Test redirect logic
const testRedirect = () => {
  if (process.client) {
    const hostname = window.location.hostname
    const protocol = window.location.protocol
    
    shouldRedirect.value = shouldRedirectToMainDomain(hostname)
    isLocalhost.value = hostname === 'localhost' || hostname === '127.0.0.1'
    isMainDomain.value = hostname === 'deletemydata.online' || hostname.endsWith('.deletemydata.online')
    
    if (shouldRedirect.value) {
      redirectTarget.value = `${getMainDomainUrl(protocol)}${window.location.pathname}`
    } else {
      redirectTarget.value = ''
    }
  }
}

// Copy current domain information
const copyCurrentInfo = async () => {
  const info = `
Current Domain Info:
- Hostname: ${currentHostname.value}
- Protocol: ${currentProtocol.value}
- Full URL: ${currentUrl.value}
- Should Redirect: ${shouldRedirect.value ? 'Yes' : 'No'}
- Is Localhost: ${isLocalhost.value ? 'Yes' : 'No'}
- Is Main Domain: ${isMainDomain.value ? 'Yes' : 'No'}
  `.trim()
  
  try {
    await navigator.clipboard.writeText(info)
    alert('Domain information copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy:', err)
    alert('Failed to copy to clipboard')
  }
}

// Get initial information
onMounted(() => {
  if (process.client) {
    currentHostname.value = window.location.hostname
    currentProtocol.value = window.location.protocol
    currentUrl.value = window.location.href
    
    // Test redirect logic on mount
    testRedirect()
  }
})
</script> 