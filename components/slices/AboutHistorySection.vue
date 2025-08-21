<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">{{ title }}</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {{ subtitle }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(step, index) in steps" 
          :key="index"
          class="text-center"
        >
          <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span class="text-2xl font-bold text-blue-600">{{ index + 1 }}</span>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ step.title }}</h3>
          <p class="text-gray-600 leading-relaxed">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Props personnalisables
interface Props {
  title?: string
  subtitle?: string
  steps?: Array<{
    title: string
    description: string
  }>
}

withDefaults(defineProps<Props>(), {
  title: 'Notre Histoire',
  subtitle: 'L\'histoire de DeleteMyData commence par une prise de conscience et une volonté de changement',
  steps: [
    {
      title: 'La Prise de Conscience',
      description: 'En 2023, nos fondateurs ont réalisé l\'ampleur de la collecte de données et la difficulté pour les utilisateurs d\'exercer leurs droits RGPD.'
    },
    {
      title: 'La Solution',
      description: 'Nous avons développé une plateforme qui simplifie le processus de suppression des données en automatisant la génération et l\'envoi des demandes RGPD.'
    },
    {
      title: 'L\'Impact',
      description: 'Aujourd\'hui, des milliers d\'utilisateurs ont repris le contrôle de leurs données grâce à DeleteMyData, et nous continuons à étendre notre impact.'
    }
  ]
})
</script> 