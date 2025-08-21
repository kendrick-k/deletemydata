<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">Supabase Debug</h1>
      
      <!-- Runtime Config -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Runtime Config</h2>
        <div class="space-y-2 text-sm">
          <div><strong>SUPABASE_URL:</strong> {{ config.public.supabaseUrl || 'Not set' }}</div>
          <div><strong>SUPABASE_ANON_KEY:</strong> {{ config.public.supabaseAnonKey ? `${config.public.supabaseAnonKey.substring(0, 20)}...` : 'Not set' }}</div>
          <div><strong>SUPABASE_SERVICE_ROLE_KEY:</strong> {{ config.supabaseServiceRoleKey ? `${config.supabaseServiceRoleKey.substring(0, 20)}...` : 'Not set' }}</div>
        </div>
      </div>

      <!-- Nuxt App -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Nuxt App</h2>
        <div class="space-y-2 text-sm">
          <div><strong>Has $supabase:</strong> {{ hasSupabase ? 'Yes' : 'No' }}</div>
          <div><strong>Supabase URL:</strong> {{ nuxtSupabaseUrl || 'Not available' }}</div>
        </div>
      </div>

      <!-- Composables Test -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Composables Test</h2>
        <div class="space-y-4">
          <button @click="testComposables" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Test Composables
          </button>
          <div v-if="composablesResult" class="p-3 bg-gray-100 rounded text-sm">
            <pre>{{ composablesResult }}</pre>
          </div>
        </div>
      </div>

      <!-- Direct Client Test -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Direct Client Test</h2>
        <div class="space-y-4">
          <button @click="testDirectClient" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Test Direct Client
          </button>
          <div v-if="directClientResult" class="p-3 bg-gray-100 rounded text-sm">
            <pre>{{ directClientResult }}</pre>
          </div>
        </div>
      </div>

      <!-- Auth Test -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Auth Test</h2>
        <div class="space-y-4">
          <button @click="testAuth" class="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Test Auth
          </button>
          <div v-if="authResult" class="p-3 bg-gray-100 rounded text-sm">
            <pre>{{ authResult }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const nuxtApp = useNuxtApp()

const hasSupabase = computed(() => !!nuxtApp.$supabase)
const nuxtSupabaseUrl = computed(() => nuxtApp.$supabase?.supabaseUrl || null)

const composablesResult = ref('')
const directClientResult = ref('')
const authResult = ref('')

const testComposables = () => {
  try {
    const client = useSupabaseClient()
    const user = useSupabaseUser()
    
    composablesResult.value = JSON.stringify({
      client: !!client,
      clientUrl: client?.supabaseUrl,
      user: !!user.value,
      userEmail: user.value?.email
    }, null, 2)
  } catch (error) {
    composablesResult.value = `Error: ${error.message}`
  }
}

const testDirectClient = () => {
  try {
    if (nuxtApp.$supabase) {
      directClientResult.value = JSON.stringify({
        available: true,
        url: nuxtApp.$supabase.supabaseUrl,
        hasAuth: !!nuxtApp.$supabase.auth
      }, null, 2)
    } else {
      directClientResult.value = 'Direct client not available'
    }
  } catch (error) {
    directClientResult.value = `Error: ${error.message}`
  }
}

const testAuth = async () => {
  try {
    if (nuxtApp.$supabase?.auth) {
      const { data, error } = await nuxtApp.$supabase.auth.getUser()
      
      if (error) {
        authResult.value = `Auth error: ${error.message}`
      } else {
        authResult.value = JSON.stringify({
          success: true,
          user: data.user,
          session: data.session
        }, null, 2)
      }
    } else {
      authResult.value = 'Auth not available'
    }
  } catch (error) {
    authResult.value = `Error: ${error.message}`
  }
}

// Test on mount
onMounted(() => {
  testComposables()
  testDirectClient()
})
</script> 