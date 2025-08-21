<template>
  <a 
    :href="generatorUrl"
    :class="[buttonClasses, 'auto-fill-button']"
  >
    <svg v-if="showIcon" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
    </svg>
    {{ buttonText }}
  </a>
</template>

<script setup lang="ts">
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
}

const props = withDefaults(defineProps<Props>(), {
  buttonText: 'Créer une demande RGPD',
  buttonClasses: 'bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700',
  showIcon: true
})

// Générer l'URL du générateur avec les paramètres
const generatorUrl = computed(() => {
  const baseUrl = 'http://localhost:3005/generator'
  const params = new URLSearchParams()
  
  params.append('company', props.company)
  params.append('domain', props.domain)
  
  if (props.dpo) params.append('dpo', props.dpo)
  if (props.privacy) params.append('privacy', props.privacy)
  if (props.legal) params.append('legal', props.legal)
  
  return `${baseUrl}?${params.toString()}`
})
</script> 