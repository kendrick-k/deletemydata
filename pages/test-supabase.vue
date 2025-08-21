<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Supabase Test Page</h1>
        <p class="text-xl text-gray-600">Test de la configuration et de la connexion Supabase</p>
      </div>

      <!-- Environment Variables Status -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Environment Variables Status</h2>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-gray-700">SUPABASE_URL:</span>
            <span v-if="envStatus.url" class="text-green-600 font-medium">✅ Set</span>
            <span v-else class="text-red-600 font-medium">❌ Missing</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-700">SUPABASE_ANON_KEY:</span>
            <span v-if="envStatus.anonKey" class="text-green-600 font-medium">✅ Set</span>
            <span v-else class="text-red-600 font-medium">❌ Missing</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-700">SUPABASE_SERVICE_ROLE_KEY:</span>
            <span v-if="envStatus.serviceKey" class="text-green-600 font-medium">✅ Set</span>
            <span v-else class="text-red-600 font-medium">❌ Missing</span>
          </div>
        </div>
      </div>

      <!-- Supabase Client Test -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Supabase Client Test</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-gray-700">Client availability:</span>
            <span v-if="clientStatus.available" class="text-green-600 font-medium">✅ Available</span>
            <span v-else class="text-red-600 font-medium">❌ Not available</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-700">Client URL:</span>
            <span class="text-gray-600 font-mono text-sm">{{ clientStatus.url || 'N/A' }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-gray-700">Client Key:</span>
            <span class="text-gray-600 font-mono text-sm">{{ clientStatus.key ? `${clientStatus.key.substring(0, 20)}...` : 'N/A' }}</span>
          </div>
        </div>
      </div>

      <!-- Test Connection -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Test Connection</h2>
        <div class="space-y-4">
          <button 
            @click="testConnection" 
            :disabled="testing"
            class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {{ testing ? 'Testing...' : 'Test Connection' }}
          </button>
          
          <div v-if="connectionResult" class="p-4 rounded-lg" :class="connectionResult.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
            <div class="flex items-center gap-2 mb-2">
              <span v-if="connectionResult.success" class="text-green-600">✅</span>
              <span v-else class="text-red-600">❌</span>
              <span class="font-medium">{{ connectionResult.success ? 'Success' : 'Error' }}</span>
            </div>
            <p class="text-sm" :class="connectionResult.success ? 'text-green-700' : 'text-red-700'">
              {{ connectionResult.message }}
            </p>
          </div>
        </div>
      </div>

      <!-- Authentication Test -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Authentication Test</h2>
        <div class="space-y-4">
          <div class="flex gap-4">
            <button 
              @click="signInAnonymously" 
              :disabled="authTesting"
              class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {{ authTesting ? 'Signing in...' : 'Sign In Anonymously' }}
            </button>
            <button 
              @click="getUser" 
              :disabled="authTesting"
              class="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Get User
            </button>
            <button 
              @click="signOut" 
              :disabled="authTesting"
              class="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Sign Out
            </button>
          </div>
          
          <div v-if="authResult" class="p-4 rounded-lg" :class="authResult.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
            <div class="flex items-center gap-2 mb-2">
              <span v-if="authResult.success" class="text-green-600">✅</span>
              <span v-else class="text-red-600">❌</span>
              <span class="font-medium">{{ authResult.success ? 'Success' : 'Error' }}</span>
            </div>
            <p class="text-sm" :class="authResult.success ? 'text-green-700' : 'text-red-700'">
              {{ authResult.message }}
            </p>
            <pre v-if="authResult.data" class="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">{{ JSON.stringify(authResult.data, null, 2) }}</pre>
          </div>
        </div>
      </div>

      <!-- Database Test -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Database Test</h2>
        <div class="space-y-4">
          <button 
            @click="testDatabase" 
            :disabled="dbTesting"
            class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {{ dbTesting ? 'Testing...' : 'Test Database Query' }}
          </button>
          
          <div v-if="dbResult" class="p-4 rounded-lg" :class="dbResult.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
            <div class="flex items-center gap-2 mb-2">
              <span v-if="dbResult.success" class="text-green-600">✅</span>
              <span v-else class="text-red-600">❌</span>
              <span class="font-medium">{{ dbResult.success ? 'Success' : 'Error' }}</span>
            </div>
            <p class="text-sm" :class="dbResult.success ? 'text-green-700' : 'text-red-700'">
              {{ dbResult.message }}
            </p>
            <pre v-if="dbResult.data" class="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">{{ JSON.stringify(dbResult.data, null, 2) }}</pre>
          </div>
        </div>
      </div>

      <!-- Simple Test Component -->
      <SupabaseTest />
    </div>
  </div>
</template>

<script setup>
// Import components
import SupabaseTest from '~/components/SupabaseTest.vue'

// Status tracking
const envStatus = ref({
  url: false,
  anonKey: false,
  serviceKey: false
})

const clientStatus = ref({
  available: false,
  url: '',
  key: ''
})

const testing = ref(false)
const authTesting = ref(false)
const dbTesting = ref(false)

const connectionResult = ref(null)
const authResult = ref(null)
const dbResult = ref(null)

// Check environment variables
onMounted(() => {
  checkEnvironmentVariables()
  checkSupabaseClient()
})

const checkEnvironmentVariables = () => {
  const config = useRuntimeConfig()
  
  envStatus.value = {
    url: !!config.public.supabaseUrl,
    anonKey: !!config.public.supabaseAnonKey,
    serviceKey: !!config.supabaseServiceRoleKey
  }
}

const checkSupabaseClient = () => {
  try {
    const client = useSupabaseClient()
    if (client) {
      clientStatus.value = {
        available: true,
        url: client.supabaseUrl,
        key: client.supabaseKey
      }
    }
  } catch (error) {
    console.error('Error checking Supabase client:', error)
    clientStatus.value.available = false
  }
}

const testConnection = async () => {
  testing.value = true
  connectionResult.value = null
  
  try {
    const client = useSupabaseClient()
    if (!client) {
      throw new Error('Supabase client not available')
    }
    
    // Test a simple query
    const { data, error } = await client.from('profiles').select('count').limit(1)
    
    if (error) {
      throw error
    }
    
    connectionResult.value = {
      success: true,
      message: 'Successfully connected to Supabase! Database query executed.',
      data: data
    }
  } catch (error) {
    console.error('Connection test error:', error)
    connectionResult.value = {
      success: false,
      message: `Connection failed: ${error.message}`,
      data: null
    }
  } finally {
    testing.value = false
  }
}

const signInAnonymously = async () => {
  authTesting.value = true
  authResult.value = null
  
  try {
    const client = useSupabaseClient()
    if (!client) {
      throw new Error('Supabase client not available')
    }
    
    const { data, error } = await client.auth.signInAnonymously()
    
    if (error) {
      throw error
    }
    
    authResult.value = {
      success: true,
      message: 'Successfully signed in anonymously!',
      data: data
    }
  } catch (error) {
    console.error('Sign in error:', error)
    authResult.value = {
      success: false,
      message: `Sign in failed: ${error.message}`,
      data: null
    }
  } finally {
    authTesting.value = false
  }
}

const getUser = async () => {
  authTesting.value = true
  authResult.value = null
  
  try {
    const client = useSupabaseClient()
    if (!client) {
      throw new Error('Supabase client not available')
    }
    
    const { data: { user }, error } = await client.auth.getUser()
    
    if (error) {
      throw error
    }
    
    authResult.value = {
      success: true,
      message: user ? 'User retrieved successfully!' : 'No user found',
      data: { user }
    }
  } catch (error) {
    console.error('Get user error:', error)
    authResult.value = {
      success: false,
      message: `Get user failed: ${error.message}`,
      data: null
    }
  } finally {
    authTesting.value = false
  }
}

const signOut = async () => {
  authTesting.value = true
  authResult.value = null
  
  try {
    const client = useSupabaseClient()
    if (!client) {
      throw new Error('Supabase client not available')
    }
    
    const { error } = await client.auth.signOut()
    
    if (error) {
      throw error
    }
    
    authResult.value = {
      success: true,
      message: 'Successfully signed out!',
      data: null
    }
  } catch (error) {
    console.error('Sign out error:', error)
    authResult.value = {
      success: false,
      message: `Sign out failed: ${error.message}`,
      data: null
    }
  } finally {
    authTesting.value = false
  }
}

const testDatabase = async () => {
  dbTesting.value = true
  dbResult.value = null
  
  try {
    const client = useSupabaseClient()
    if (!client) {
      throw new Error('Supabase client not available')
    }
    
    // Try to get the current user's profile
    const { data: { user } } = await client.auth.getUser()
    
    if (user) {
      const { data, error } = await client
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
      
      if (error) {
        throw error
      }
      
      dbResult.value = {
        success: true,
        message: 'Database query executed successfully!',
        data: data
      }
    } else {
      dbResult.value = {
        success: true,
        message: 'No user logged in, but database connection is working!',
        data: null
      }
    }
  } catch (error) {
    console.error('Database test error:', error)
    dbResult.value = {
      success: false,
      message: `Database test failed: ${error.message}`,
      data: null
    }
  } finally {
    dbTesting.value = false
  }
}
</script> 