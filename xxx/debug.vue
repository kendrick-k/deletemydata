<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Debug Page</h1>
      
      <div class="bg-white rounded-lg shadow p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4">Basic Vue Test</h2>
        <p class="text-gray-600 mb-4">If you can see this, Vue is working!</p>
        <p class="text-gray-600 mb-4">Counter: {{ counter }}</p>
        <button @click="increment" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Increment ({{ counter }})
        </button>
      </div>
      
      <div class="bg-white rounded-lg shadow p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4">Environment Test</h2>
        <p class="text-gray-600 mb-2">Node Environment: {{ nodeEnv }}</p>
        <p class="text-gray-600 mb-2">Client Side: {{ isClient }}</p>
        <p class="text-gray-600 mb-2">Server Side: {{ isServer }}</p>
      </div>
      
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Console Test</h2>
        <p class="text-gray-600 mb-4">Check browser console for any errors</p>
        <button @click="testConsole" class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Test Console
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Basic reactive data
const counter = ref(0)
const nodeEnv = ref(process.env.NODE_ENV || 'unknown')
const isClient = ref(process.client)
const isServer = ref(process.server)

// Methods
const increment = () => {
  counter.value++
  console.log('Counter incremented to:', counter.value)
}

const testConsole = () => {
  console.log('Console test successful!')
  console.log('Current counter:', counter.value)
  console.log('Environment:', nodeEnv.value)
}

// Lifecycle
onMounted(() => {
  console.log('Debug page mounted successfully!')
  console.log('Environment:', nodeEnv.value)
  console.log('Client:', isClient.value)
  console.log('Server:', isServer.value)
})

// Error handling
onErrorCaptured((error) => {
  console.error('Error captured:', error)
  return false
})
</script> 