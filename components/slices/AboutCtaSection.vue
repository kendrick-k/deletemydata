<template>
  <section class="py-20 bg-blue-600">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl font-bold text-white mb-6 leading-tight">
        {{ title }}
      </h2>
      <p class="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
        {{ subtitle }}
      </p>
      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a 
          :href="primaryButtonHref" 
          class="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-3"
        >
          {{ primaryButtonText }}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </a>
        <a 
          :href="secondaryButtonHref" 
          class="text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
        >
          {{ secondaryButtonText }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Props personnalisables
interface Props {
  title?: string
  subtitle?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Prêt à reprendre le contrôle de vos données ?',
  subtitle: 'Rejoignez des milliers d\'utilisateurs qui ont déjà supprimé leurs données de centaines d\'entreprises.',
  primaryButtonText: 'Commencer gratuitement',
  primaryButtonHref: '/generator',
  secondaryButtonText: 'Nous contacter',
  secondaryButtonHref: '/contact'
})
</script> 