<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Supabase Test Page</h1>
      
      <!-- Show fallback if Supabase is not configured -->
      <SupabaseFallback v-if="!isSupabaseConfigured" />
      
      <!-- Main content only if Supabase is configured -->
      <div v-else>
        <!-- Environment Variables Status -->
        <div class="bg-white rounded-lg shadow p-6 mb-6">
          <h2 class="text-xl font-semibold mb-4">Environment Variables Status</h2>
          <div class="space-y-2">
            <div class="flex items-center">
              <span class="w-4 h-4 rounded-full mr-3" :class="supabaseUrl ? 'bg-green-500' : 'bg-red-500'"></span>
              <span class="font-mono text-sm">SUPABASE_URL: {{ supabaseUrl ? '✅ Set' : '❌ Missing' }}</span>
            </div>
            <div class="flex items-center">
              <span class="w-4 h-4 rounded-full mr-3" :class="supabaseAnonKey ? 'bg-green-500' : 'bg-red-500'"></span>
              <span class="font-mono text-sm">SUPABASE_ANON_KEY: {{ supabaseAnonKey ? '✅ Set' : '❌ Missing' }}</span>
            </div>
          </div>
        </div>
        
        <!-- Supabase Client Test -->
        <div class="bg-white rounded-lg shadow p-6 mb-6">
          <h2 class="text-xl font-semibold mb-4">Supabase Client Test</h2>
          <div v-if="supabaseClient" class="text-green-600 mb-4">
            ✅ Supabase client is available
          </div>
          <div v-else class="text-red-600 mb-4">
            ❌ Supabase client is not available
          </div>
          
          <button 
            @click="testConnection"
            :disabled="testing"
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {{ testing ? 'Testing...' : 'Test Connection' }}
          </button>
          
          <div v-if="connectionResult" class="mt-4 p-3 rounded" :class="connectionResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
            {{ connectionResult.message }}
          </div>
        </div>
        
        <!-- Authentication Test -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-4">Authentication Test</h2>
          <div v-if="user" class="mb-4">
            <p class="text-green-600">✅ User is authenticated: {{ user.email }}</p>
            <button @click="signOut" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-2">
              Sign Out
            </button>
          </div>
          <div v-else class="mb-4">
            <p class="text-gray-600">No user authenticated</p>
            <button @click="signInAnonymously" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-2">
              Sign In Anonymously (Test)
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

// Check if Supabase is properly configured
const isSupabaseConfigured = computed(() => {
  return config.public.supabaseUrl && 
         config.public.supabaseAnonKey && 
         config.public.supabaseUrl !== 'https://placeholder.supabase.co' &&
         config.public.supabaseAnonKey !== 'placeholder_key'
})

// Only try to use Supabase if it's configured
const supabaseClient = isSupabaseConfigured.value ? useNuxtApp().$supabase : null

// Environment variables
const supabaseUrl = config.public.supabaseUrl
const supabaseAnonKey = config.public.supabaseAnonKey

// Connection test
const testing = ref(false)
const connectionResult = ref(null)

// User state
const user = ref(null)

// Test Supabase connection
const testConnection = async () => {
  if (!supabaseClient) return
  
  testing.value = true
  connectionResult.value = null
  
  try {
    // Try to get the current user (this will test the connection)
    const { data, error } = await supabaseClient.auth.getUser()
    
    if (error) {
      connectionResult.value = {
        success: false,
        message: `Connection failed: ${error.message}`
      }
    } else {
      connectionResult.value = {
        success: true,
        message: 'Connection successful! Supabase is working correctly.'
      }
    }
  } catch (err: any) {
    connectionResult.value = {
      success: false,
      message: `Error: ${err.message}`
    }
  } finally {
    testing.value = false
  }
}

// Sign in anonymously for testing
const signInAnonymously = async () => {
  if (!supabaseClient) return
  
  try {
    const { data, error } = await supabaseClient.auth.signInAnonymously()
    if (error) throw error
    user.value = data.user
  } catch (err: any) {
    console.error('Sign in error:', err)
  }
}

// Sign out
const signOut = async () => {
  if (!supabaseClient) return
  
  try {
    await supabaseClient.auth.signOut()
    user.value = null
  } catch (err: any) {
    console.error('Sign out error:', err)
  }
}

// Get initial user
onMounted(async () => {
  if (!supabaseClient) return
  
  try {
    const { data: { user: initialUser } } = await supabaseClient.auth.getUser()
    user.value = initialUser
    
    // Listen for auth changes
    supabaseClient.auth.onAuthStateChange((event, session) => {
      user.value = session?.user ?? null
    })
  } catch (err: any) {
    console.error('Error getting user:', err)
  }
})
</script> 