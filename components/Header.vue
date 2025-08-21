<template>
  <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </div>
            <span class="text-xl font-bold text-gray-900">DeleteMyData.online</span>
          </a>
        </div>

        <!-- Navigation Desktop -->
        <nav class="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" class="text-gray-600 hover:text-blue-600 transition-colors font-medium">
            Comment ça marche
          </a>
          <a href="#features" class="text-gray-600 hover:text-blue-600 transition-colors font-medium">
            Fonctionnalités
          </a>
          <a href="#pricing" class="text-gray-600 hover:text-blue-600 transition-colors font-medium">
            Tarifs
          </a>
          <a href="/generator" class="text-gray-600 hover:text-blue-600 transition-colors font-medium">
            Générateur
          </a>
          <a href="/directory" class="text-gray-600 hover:text-blue-600 transition-colors font-medium">
            Annuaire
          </a>
          <a href="#get-started" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Commencer
          </a>
        </nav>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            type="button" 
            class="text-gray-600 hover:text-blue-600 transition-colors"
            @click="toggleMobileMenu"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200">
        <nav class="flex flex-col space-y-4">
          <a href="#how-it-works" class="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
            Comment ça marche
          </a>
          <a href="#features" class="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
            Fonctionnalités
          </a>
          <a href="#pricing" class="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
            Tarifs
          </a>
          <a href="/generator" class="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
            Générateur
          </a>
          <a href="/directory" class="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
            Annuaire
          </a>
          <a href="#get-started" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">
            Commencer
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Close mobile menu when clicking on a link
const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Close mobile menu when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
      mobileMenuOpen.value = false
    }
  })
})
</script> 