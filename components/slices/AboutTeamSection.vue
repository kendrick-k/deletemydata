<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">{{ title }}</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {{ subtitle }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(member, index) in team" 
          :key="index"
          class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center"
        >
          <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4" :class="member.bgColor">
            <svg class="w-12 h-12" :class="member.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ member.name }}</h3>
          <p class="font-medium mb-3" :class="member.roleColor">{{ member.role }}</p>
          <p class="text-gray-600 text-sm leading-relaxed">
            {{ member.description }}
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
  team?: Array<{
    name: string
    role: string
    description: string
    bgColor: string
    iconColor: string
    roleColor: string
  }>
}

withDefaults(defineProps<Props>(), {
  title: 'Notre Équipe',
  subtitle: 'Des experts passionnés par la protection de la vie privée et la technologie',
  team: [
    {
      name: 'Alexandre Martin',
      role: 'Fondateur & CEO',
      description: 'Expert en cybersécurité et protection des données avec 15 ans d\'expérience dans le secteur technologique.',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      roleColor: 'text-blue-600'
    },
    {
      name: 'Sophie Dubois',
      role: 'CTO & Lead Developer',
      description: 'Développeuse full-stack passionnée par la création d\'outils qui améliorent la vie des utilisateurs.',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      roleColor: 'text-green-600'
    },
    {
      name: 'Thomas Leroy',
      role: 'Responsable Légal',
      description: 'Avocat spécialisé en droit numérique et RGPD, garant de la conformité de nos services.',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      roleColor: 'text-purple-600'
    }
  ]
})
</script> 