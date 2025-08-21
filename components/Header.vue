<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
             <CubeLogo :size="32" />
            </div>
            <span class="text-xl font-bold text-gray-900">DeleteMyData</span>
          </a>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <a href="/" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Accueil
          </a>
          <a href="http://localhost:3005/generator" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Générateur
          </a>
          <a href="/directory" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Annuaire
          </a>
          <a href="/#how-it-works" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Comment ça marche
          </a>
          <a href="/#pricing" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Tarifs
          </a>
        </nav>

        <!-- CTA Button -->
        <div class="hidden md:flex items-center space-x-4">
          <a href="/login" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
            Se connecter
          </a>
          <a href="/signup" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            S'inscrire
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-700 hover:text-blue-600 p-2"
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
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          <a href="/" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
            Accueil
          </a>
          <a href="http://localhost:3005/generator" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
            Générateur
          </a>
          <a href="/directory" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
            Annuaire
          </a>
          <a href="/#how-it-works" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
            Comment ça marche
          </a>
          <a href="/#pricing" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
            Tarifs
          </a>
          <div class="pt-4 border-t border-gray-200">
            <a href="/signup" class="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-base font-medium">
              Commencer
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// Import components
import CubeLogo from '~/components/CubeLogo.vue'

const mobileMenuOpen = ref(false)
</script> 