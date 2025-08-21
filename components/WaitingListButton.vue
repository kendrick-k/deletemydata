<template>
  <div>
    <!-- Bouton d'inscription -->
    <button
      @click="openModal"
      :class="buttonClasses"
      class="inline-flex items-center gap-2 transition-colors"
    >
      <svg v-if="showIcon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
      {{ buttonText }}
    </button>

    <!-- Modal d'inscription -->
    <WaitingListModal
      :is-open="isModalOpen"
      :title="modalTitle"
      :form-title="formTitle"
      :form-subtitle="formSubtitle"
      :submit-button-text="submitButtonText"
      :source="source"
      @close="closeModal"
      @subscribed="handleSubscribed"
    />
  </div>
</template>

<script setup lang="ts">
// Import du modal
import WaitingListModal from './WaitingListModal.vue'

// Props
interface Props {
  buttonText?: string
  buttonClasses?: string
  showIcon?: boolean
  modalTitle?: string
  formTitle?: string
  formSubtitle?: string
  submitButtonText?: string
  source?: string
}

const props = withDefaults(defineProps<Props>(), {
  buttonText: 'Inscrivez-vous',
  buttonClasses: 'bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold',
  showIcon: true,
  modalTitle: 'Inscription à la liste d\'attente RGPD',
  formTitle: 'Rejoignez notre liste d\'attente',
  formSubtitle: 'Soyez informé en premier de nos nouvelles fonctionnalités RGPD',
  submitButtonText: 'S\'inscrire',
  source: 'button'
})

// État du modal
const isModalOpen = ref(false)

// Émettre des événements
const emit = defineEmits<{
  subscribed: [email: string]
}>()

// Ouvrir le modal
const openModal = () => {
  isModalOpen.value = true
}

// Fermer le modal
const closeModal = () => {
  isModalOpen.value = false
}

// Gérer l'inscription réussie
const handleSubscribed = (email: string) => {
  emit('subscribed', email)
}
</script> 