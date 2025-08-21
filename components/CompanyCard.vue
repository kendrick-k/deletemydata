<template>
  <div class="company-card">
    <!-- Header de la carte -->
    <div class="flex items-center mb-4">
      <div class="company-icon mr-4" :class="iconBgColor">
        <svg class="w-6 h-6" :class="iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconPath"/>
        </svg>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-gray-900">{{ company }}</h3>
        <p class="text-sm text-gray-600">{{ domain }}</p>
      </div>
    </div>
    
    <!-- Informations de contact -->
    <div class="space-y-2 mb-6 text-sm text-gray-600">
      <div v-if="dpo" class="flex items-center">
        <svg class="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
        <strong>DPO:</strong> {{ dpo }}
      </div>
      <div v-if="privacy" class="flex items-center">
        <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <strong>Privacy:</strong> {{ privacy }}
      </div>
      <div v-if="legal" class="flex items-center">
        <svg class="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        <strong>Legal:</strong> {{ legal }}
      </div>
    </div>
    
    <!-- Bouton d'action -->
    <AutoFillButton
      :company="company"
      :domain="domain"
      :dpo="dpo"
      :privacy="privacy"
      :legal="legal"
      :button-text="buttonText"
      :button-classes="buttonClasses"
      :show-icon="showIcon"
    />
  </div>
</template>

<script setup lang="ts">
// Import du composant bouton
import AutoFillButton from './AutoFillButton.vue'

// Analytics
const { trackCompanyCardClick } = useAnalytics()

// Props
interface Props {
  company: string
  domain: string
  dpo?: string
  privacy?: string
  legal?: string
  buttonText?: string
  buttonClasses?: string
  showIcon?: boolean
  iconBgColor?: string
  iconColor?: string
  iconPath?: string
}

const props = withDefaults(defineProps<Props>(), {
  buttonText: 'Créer une demande RGPD',
  buttonClasses: 'w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 text-center',
  showIcon: true,
  iconBgColor: 'bg-blue-100',
  iconColor: 'text-blue-600',
  iconPath: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
})

// Track card interaction
const handleCardInteraction = () => {
  trackCompanyCardClick(props.company, props.domain)
}
</script> 