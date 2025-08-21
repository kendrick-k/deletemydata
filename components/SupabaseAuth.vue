<template>
  <div class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
    <div v-if="!user" class="space-y-4">
      <h2 class="text-2xl font-bold text-center text-gray-900">Sign In</h2>
      
      <form @submit.prevent="signIn" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        <button
          type="submit"
          :disabled="loading"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {{ loading ? 'Signing in...' : 'Sign In' }}
        </button>
      </form>
      
      <div class="text-center">
        <button
          @click="signUp"
          :disabled="loading"
          class="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
        >
          Don't have an account? Sign up
        </button>
      </div>
    </div>
    
    <div v-else class="text-center space-y-4">
      <h2 class="text-2xl font-bold text-gray-900">Welcome!</h2>
      <p class="text-gray-600">Signed in as {{ user.email }}</p>
      <button
        @click="signOut"
        class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      >
        Sign Out
      </button>
    </div>
    
    <div v-if="error" class="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { $supabase } = useNuxtApp()

const user = ref(null)
const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

// Get initial user
onMounted(async () => {
  const { data: { user: initialUser } } = await $supabase.auth.getUser()
  user.value = initialUser
  
  // Listen for auth changes
  $supabase.auth.onAuthStateChange((event, session) => {
    user.value = session?.user ?? null
  })
})

const signIn = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const { error: signInError } = await $supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    
    if (signInError) throw signInError
    
    email.value = ''
    password.value = ''
  } catch (err: any) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

const signUp = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const { error: signUpError } = await $supabase.auth.signUp({
      email: email.value,
      password: password.value
    })
    
    if (signUpError) throw signUpError
    
    error.value = 'Check your email for the confirmation link!'
  } catch (err: any) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

const signOut = async () => {
  try {
    await $supabase.auth.signOut()
  } catch (err: any) {
    error.value = err.message
  }
}
</script> 