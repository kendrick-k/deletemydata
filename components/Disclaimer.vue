<template>
  <section class="py-12 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-b border-blue-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <!-- Icône et badge -->
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200 shadow-sm">
            Information importante
          </span>
        </div>
        
        <!-- Message principal -->
        <div class="max-w-3xl mx-auto">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">
            Transparence et conformité
          </h3>
          <p class="text-base text-gray-700 leading-relaxed">
            Nous facilitons l'exercice de vos droits RGPD et Delete Act. 
            <span class="font-medium text-gray-900">La suppression effective dépend de l'entreprise destinataire</span> 
            et de sa conformité aux réglementations en vigueur.
          </p>
        </div>
        
        <!-- Lien vers plus d'infos -->
        <div class="mt-6">
          <a 
            href="/privacy" 
            class="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            En savoir plus sur notre approche
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Aucune logique nécessaire pour ce composant
</script> 