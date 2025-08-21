<template>
  <div class="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-4">
        {{ title }}
      </h3>
      <p class="text-gray-600">
        {{ subtitle }}
      </p>
    </div>

    <!-- Formulaire -->
    <form @submit.prevent="submitForm" class="space-y-6">
      <!-- Informations personnelles -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Prénom *
          </label>
          <input 
            v-model="form.firstName" 
            type="text" 
            required
            class="form-input"
            :disabled="isSubmitting"
          >
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Nom *
          </label>
          <input 
            v-model="form.lastName" 
            type="text" 
            required
            class="form-input"
            :disabled="isSubmitting"
          >
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Email *
        </label>
        <input 
          v-model="form.email" 
          type="email" 
          required
          class="form-input"
          :disabled="isSubmitting"
        >
      </div>

      <!-- Informations entreprise -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Nom de l'entreprise
          </label>
          <input 
            v-model="form.companyName" 
            type="text" 
            placeholder="Ex: Google, Facebook..."
            class="form-input"
            :disabled="isSubmitting"
          >
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Domaine de l'entreprise
          </label>
          <input 
            v-model="form.companyDomain" 
            type="text" 
            placeholder="Ex: google.com"
            class="form-input"
            :disabled="isSubmitting"
          >
        </div>
      </div>

      <!-- Type de demande -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-3">
          Type de demande RGPD *
        </label>
        <div class="space-y-2">
          <label class="flex items-center">
            <input 
              type="radio" 
              v-model="form.requestType" 
              value="deletion" 
              class="mr-3"
              :disabled="isSubmitting"
              checked
            >
            <span class="text-sm text-gray-700">Suppression de données (droit à l'oubli)</span>
          </label>
          <label class="flex items-center">
            <input 
              type="radio" 
              v-model="form.requestType" 
              value="access" 
              class="mr-3"
              :disabled="isSubmitting"
            >
            <span class="text-sm text-gray-700">Accès aux données</span>
          </label>
          <label class="flex items-center">
            <input 
              type="radio" 
              v-model="form.requestType" 
              value="rectification" 
              class="mr-3"
              :disabled="isSubmitting"
            >
            <span class="text-sm text-gray-700">Rectification des données</span>
          </label>
        </div>
      </div>

      <!-- Détails supplémentaires -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Détails supplémentaires (optionnel)
        </label>
        <textarea 
          v-model="form.additionalDetails"
          rows="3" 
          placeholder="Décrivez votre situation ou vos besoins spécifiques..."
          class="form-input"
          :disabled="isSubmitting"
        ></textarea>
      </div>

      <!-- Bouton de soumission -->
      <div class="pt-4">
        <button 
          type="submit" 
          :disabled="isSubmitting"
          class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
          :class="{ 'btn-loading': isSubmitting }"
        >
          <span v-if="isSubmitting" class="flex items-center justify-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Inscription en cours...
          </span>
          <span v-else>{{ submitButtonText }}</span>
        </button>
      </div>
    </form>

    <!-- Messages de succès/erreur -->
    <div v-if="message" class="mt-6" :class="messageClass">
      <div class="flex">
        <svg v-if="isSuccess" class="w-5 h-5 text-green-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2 1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <svg v-else class="w-5 h-5 text-red-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
        </svg>
        <div>
          <p class="text-sm font-medium" :class="isSuccess ? 'text-green-800' : 'text-red-800'">
            {{ message }}
          </p>
        </div>
      </div>
    </div>

    <!-- Note de confidentialité -->
    <div class="mt-6 text-center">
      <p class="text-xs text-gray-500">
        En vous inscrivant, vous acceptez de recevoir des informations sur nos services RGPD. 
        Vous pouvez vous désinscrire à tout moment.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Props personnalisables
interface Props {
  title?: string
  subtitle?: string
  submitButtonText?: string
  source?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Inscrivez-vous à la liste d\'attente RGPD',
  subtitle: 'Soyez informé en premier de nos nouvelles fonctionnalités et services RGPD',
  submitButtonText: 'S\'inscrire à la liste d\'attente',
  source: 'website'
})

// Émettre un événement lors de l'inscription réussie
const emit = defineEmits<{
  subscribed: [email: string]
}>()

// Analytics
const { trackWaitingListSignup, trackFormSubmission } = useAnalytics()

// État du formulaire
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  companyDomain: '',
  requestType: 'deletion' as 'deletion' | 'access' | 'rectification',
  additionalDetails: ''
})

// État de soumission
const isSubmitting = ref(false)
const message = ref('')
const isSuccess = ref(false)

// Classes CSS conditionnelles pour les messages
const messageClass = computed(() => {
  return isSuccess.value 
    ? 'message-success' 
    : 'message-error'
})

// Soumettre le formulaire
const submitForm = async () => {
  isSubmitting.value = true
  message.value = ''
  
  try {
    // Récupérer les informations du navigateur
    const userAgent = navigator.userAgent
    const ipAddress = await getClientIP()
    
    // Préparer les données pour Supabase
    const formData = {
      email: form.value.email,
      first_name: form.value.firstName,
      last_name: form.value.lastName,
      company_name: form.value.companyName || null,
      company_domain: form.value.companyDomain || null,
      request_type: form.value.requestType,
      additional_details: form.value.additionalDetails || null,
      source: props.source,
      user_agent: userAgent,
      ip_address: ipAddress
    }

    // Insérer dans Supabase
    const { data, error } = await $fetch('/api/waiting-list', {
      method: 'POST',
      body: formData
    })

    if (error) {
      throw new Error(error.message || 'Erreur lors de l\'inscription')
    }

    // Succès
    isSuccess.value = true
    message.value = 'Inscription réussie ! Vous recevrez bientôt nos informations RGPD.'
    
    // Analytics - Track successful signup
    trackWaitingListSignup(props.source)
    trackFormSubmission('waiting_list_form', true)
    
    // Émettre l'événement
    emit('subscribed', form.value.email)
    
    // Réinitialiser le formulaire
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      companyDomain: '',
      requestType: 'deletion',
      additionalDetails: ''
    }

  } catch (error) {
    console.error('Erreur inscription:', error)
    isSuccess.value = false
    message.value = error instanceof Error ? error.message : 'Erreur lors de l\'inscription. Veuillez réessayer.'
    
    // Analytics - Track failed signup
    trackFormSubmission('waiting_list_form', false)
  } finally {
    isSubmitting.value = false
  }
}

// Fonction pour récupérer l'IP du client (via service externe)
const getClientIP = async (): Promise<string | null> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json')
    const data = await response.json()
    return data.ip
  } catch (error) {
    console.warn('Impossible de récupérer l\'IP:', error)
    return null
  }
}
</script> 