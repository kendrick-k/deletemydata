<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">{{ title }}</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {{ subtitle }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(value, index) in values" 
          :key="index"
          class="text-center"
        >
          <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" :class="value.bgColor">
            <svg class="w-8 h-8" :class="value.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="value.iconPath"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ value.title }}</h3>
          <p class="text-gray-600 leading-relaxed">
            {{ value.description }}
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
  values?: Array<{
    title: string
    description: string
    bgColor: string
    iconColor: string
    iconPath: string
  }>
}

withDefaults(defineProps<Props>(), {
  title: 'Nos Valeurs',
  subtitle: 'Les principes qui guident nos actions et notre développement',
  values: [
    {
      title: 'Transparence',
      description: 'Nous croyons en la transparence totale dans nos processus et nos communications.',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Sécurité',
      description: 'La protection de vos données et de votre vie privée est notre priorité absolue.',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
    },
    {
      title: 'Innovation',
      description: 'Nous innovons constamment pour simplifier l\'exercice de vos droits numériques.',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Communauté',
      description: 'Nous construisons une communauté engagée pour la protection de la vie privée.',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    }
  ]
})
</script> 