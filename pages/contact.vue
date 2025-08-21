<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Contactez <span class="gradient-text">DeleteMyData</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Nous sommes là pour vous aider. N'hésitez pas à nous contacter pour toute question 
          sur nos services ou la protection de vos données.
        </p>
      </div>
    </section>

    <!-- Informations de contact -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Informations principales -->
          <div class="lg:col-span-2">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Envoyez-nous un message</h2>
            
            <!-- Formulaire de contact -->
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Votre prénom"
                  >
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Votre nom"
                  >
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Adresse email *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="votre@email.com"
                >
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="support">Support technique</option>
                  <option value="billing">Facturation</option>
                  <option value="partnership">Partenariat</option>
                  <option value="press">Presse et médias</option>
                  <option value="legal">Questions légales</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Décrivez votre demande en détail..."
                ></textarea>
              </div>

              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="privacy"
                    v-model="form.acceptPrivacy"
                    type="checkbox"
                    required
                    class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  >
                </div>
                <div class="ml-3 text-sm">
                  <label for="privacy" class="text-gray-700">
                    J'accepte que mes données soient traitées conformément à la 
                    <a href="/privacy" class="text-blue-600 hover:text-blue-500 underline">politique de confidentialité</a>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                :disabled="isLoading"
                class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isLoading" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Envoi en cours...
                </span>
                <span v-else>Envoyer le message</span>
              </button>

              <!-- Messages d'erreur et de succès -->
              <div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4">
                <div class="flex">
                  <svg class="w-5 h-5 text-red-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                  </svg>
                  <div class="text-sm text-red-800">{{ error }}</div>
                </div>
              </div>

              <div v-if="success" class="bg-green-50 border border-green-200 rounded-lg p-4">
                <div class="flex">
                  <svg class="w-5 h-5 text-green-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2 1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <div class="text-sm text-green-800">{{ success }}</div>
                </div>
              </div>
            </form>
          </div>

          <!-- Informations de contact -->
          <div class="space-y-8">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-6">Informations de contact</h3>
              
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900">Email</h4>
                    <p class="text-gray-600">contact@deletemydata.online</p>
                    <p class="text-sm text-gray-500">Réponse sous 24h</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900">Temps de réponse</h4>
                    <p class="text-gray-600">24-48 heures</p>
                    <p class="text-sm text-gray-500">Lundi - Vendredi</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900">Adresse</h4>
                    <p class="text-gray-600">Paris, France</p>
                    <p class="text-sm text-gray-500">Siège social</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- FAQ rapide -->
            <div class="bg-gray-50 rounded-lg p-6">
              <h4 class="font-semibold text-gray-900 mb-4">Questions fréquentes</h4>
              <div class="space-y-3">
                <a href="/support" class="block text-sm text-blue-600 hover:text-blue-700">
                  Comment fonctionne DeleteMyData ?
                </a>
                <a href="/support" class="block text-sm text-blue-600 hover:text-blue-700">
                  Quels sont les délais de réponse ?
                </a>
                <a href="/support" class="block text-sm text-blue-600 hover:text-blue-700">
                  Comment annuler mon abonnement ?
                </a>
              </div>
            </div>

            <!-- Support en ligne -->
            <div class="bg-blue-50 rounded-lg p-6">
              <h4 class="font-semibold text-blue-900 mb-3">Besoin d'aide rapide ?</h4>
              <p class="text-blue-800 text-sm mb-4">
                Consultez notre centre d'aide pour des réponses immédiates
              </p>
              <a href="/support" class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                Centre d'aide
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-blue-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">
          Prêt à reprendre le contrôle de vos données ?
        </h2>
        <p class="text-xl text-blue-100 mb-8 leading-relaxed">
          Commencez dès aujourd'hui avec notre plateforme gratuite
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="/signup" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Commencer gratuitement
          </a>
          <a href="/#how-it-works" class="text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
            Comment ça marche
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Meta tags pour SEO
useHead({
  title: 'Contact - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Contactez l\'équipe DeleteMyData pour toute question sur nos services de suppression de données personnelles. Support technique et commercial disponible.'
    }
  ]
})

// État du formulaire
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
  acceptPrivacy: false
})

// État de l'interface
const isLoading = ref(false)
const error = ref('')
const success = ref('')

// Gestion de la soumission
const handleSubmit = async () => {
  if (!form.value.acceptPrivacy) {
    error.value = 'Veuillez accepter la politique de confidentialité'
    return
  }

  isLoading.value = true
  error.value = ''
  success.value = ''

  try {
    // Simulation d'envoi (remplacer par votre logique d'API)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    success.value = 'Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
    
    // Réinitialiser le formulaire
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      acceptPrivacy: false
    }
    
  } catch (err) {
    error.value = 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
  } finally {
    isLoading.value = false
  }
}

// Réinitialiser les erreurs quand l'utilisateur tape
watch(form, () => {
  if (error.value) error.value = ''
  if (success.value) success.value = ''
}, { deep: true })
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style> 