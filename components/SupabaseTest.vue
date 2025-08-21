<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">Supabase Test Component</h3>
    
    <div class="space-y-4">
      <!-- Status -->
      <div class="text-sm">
        <p><strong>Client Status:</strong> {{ clientStatus }}</p>
        <p><strong>User Status:</strong> {{ userStatus }}</p>
      </div>

      <!-- Test Buttons -->
      <div class="flex gap-2">
        <button 
          @click="testClient" 
          class="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
        >
          Test Client
        </button>
        <button 
          @click="testAuth" 
          class="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700"
        >
          Test Auth
        </button>
        <button 
          @click="testUser" 
          class="bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700"
        >
          Test User
        </button>
      </div>

      <!-- Results -->
      <div v-if="testResult" class="p-3 bg-gray-100 rounded text-sm">
        <pre>{{ testResult }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
const clientStatus = ref('Unknown')
const userStatus = ref('Unknown')
const testResult = ref('')

// Test Supabase client
const testClient = () => {
  try {
    const client = useSupabaseClient()
    if (client) {
      clientStatus.value = 'Available'
      testResult.value = `Client OK: ${client.supabaseUrl ? 'URL set' : 'URL missing'}`
    } else {
      clientStatus.value = 'Not available'
      testResult.value = 'Client not available'
    }
  } catch (error) {
    clientStatus.value = 'Error'
    testResult.value = `Client error: ${error.message}`
  }
}

// Test authentication
const testAuth = () => {
  try {
    const client = useSupabaseClient()
    if (client && client.auth) {
      testResult.value = 'Auth OK: Authentication methods available'
    } else {
      testResult.value = 'Auth not available'
    }
  } catch (error) {
    testResult.value = `Auth error: ${error.message}`
  }
}

// Test user
const testUser = () => {
  try {
    const user = useSupabaseUser()
    if (user.value) {
      userStatus.value = 'Authenticated'
      testResult.value = `User OK: ${user.value.email || 'Anonymous user'}`
    } else {
      userStatus.value = 'Not authenticated'
      testResult.value = 'No user authenticated'
    }
  } catch (error) {
    userStatus.value = 'Error'
    testResult.value = `User error: ${error.message}`
  }
}

// Initialize on mount
onMounted(() => {
  testClient()
  testUser()
})
</script> 