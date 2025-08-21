<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
    <!-- Overlay -->
    <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="closeModal"></div>
    
    <!-- Modal -->
    <div class="flex min-h-full items-center justify-center p-4">
      <div class="relative w-full max-w-2xl bg-white rounded-lg shadow-xl">
        <!-- Header du modal -->
        <div class="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 class="text-xl font-semibold text-gray-900">
            {{ title }}
          </h3>
          <button
            @click="closeModal"
            class="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Contenu du modal -->
        <div class="p-6">
          <WaitingListForm 
            :title="formTitle"
            :subtitle="formSubtitle"
            :submit-button-text="submitButtonText"
            :source="source"
            @subscribed="handleSubscribed"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import du composant formulaire
import WaitingListForm from './WaitingListForm.vue'

// Props
interface Props {
  isOpen: boolean
  title?: string
  formTitle?: string
  formSubtitle?: string
  submitButtonText?: string
  source?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Inscription à la liste d\'attente RGPD',
  formTitle: 'Rejoignez notre liste d\'attente',
  formSubtitle: 'Soyez informé en premier de nos nouvelles fonctionnalités RGPD',
  submitButtonText: 'S\'inscrire',
  source: 'modal'
})

// Émettre des événements
const emit = defineEmits<{
  close: []
  subscribed: [email: string]
}>()

// Fermer le modal
const closeModal = () => {
  emit('close')
}

// Gérer l'inscription réussie
const handleSubscribed = (email: string) => {
  emit('subscribed', email)
  // Fermer automatiquement le modal après inscription
  setTimeout(() => {
    closeModal()
  }, 2000)
}
</script> 