<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-6">
          Générateur de demandes RGPD
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Créez des demandes de suppression de données conformes au RGPD et au Delete Act en quelques clics.
        </p>
      </div>

      <!-- Generator Form -->
      <div class="max-w-3xl mx-auto">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <form @submit.prevent="generateRequest" class="space-y-6">
            <!-- Personal Information -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Informations personnelles</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                  <input 
                    v-model="form.firstName" 
                    type="text" 
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                  <input 
                    v-model="form.lastName" 
                    type="text" 
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                </div>
              </div>
              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input 
                  v-model="form.email" 
                  type="email" 
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
              </div>
            </div>

            <!-- Company Information -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Entreprise cible</h3>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nom de l'entreprise *</label>
                <input 
                  v-model="form.companyName" 
                  type="text" 
                  required
                  placeholder="Ex: Google, Facebook, Amazon..." 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
              </div>
              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Domaine de l'entreprise *</label>
                <input 
                  v-model="form.companyDomain" 
                  type="text" 
                  required
                  placeholder="Ex: google.com" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
              </div>
              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Email DPO</label>
                <input 
                  v-model="form.dpoEmail" 
                  type="email" 
                  placeholder="Email du délégué à la protection des données"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
              </div>
              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Email Privacy</label>
                <input 
                  v-model="form.privacyEmail" 
                  type="email" 
                  placeholder="Email privacy@ de l'entreprise"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
              </div>
              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Email Légal</label>
                <input 
                  v-model="form.legalEmail" 
                  type="email" 
                  placeholder="Email légal de l'entreprise"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
              </div>
            </div>

            <!-- Request Type -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Type de demande</h3>
              <div class="space-y-3">
                <label class="flex items-center">
                  <input type="radio" v-model="form.requestType" value="deletion" class="mr-3" checked>
                  <span class="text-sm text-gray-700">Demande de suppression (droit à l'oubli)</span>
                </label>
                <label class="flex items-center">
                  <input type="radio" v-model="form.requestType" value="access" class="mr-3">
                  <span class="text-sm text-gray-700">Demande d'accès aux données</span>
                </label>
                <label class="flex items-center">
                  <input type="radio" v-model="form.requestType" value="rectification" class="mr-3">
                  <span class="text-sm text-gray-700">Demande de rectification</span>
                </label>
              </div>
            </div>

            <!-- Additional Details -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Détails supplémentaires</h3>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Informations spécifiques (optionnel)</label>
                <textarea 
                  v-model="form.additionalDetails"
                  rows="4" 
                  placeholder="Décrivez les données spécifiques que vous souhaitez supprimer ou accéder..." 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="pt-4">
              <button 
                type="submit" 
                :disabled="isGenerating"
                class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
              >
                <span v-if="isGenerating" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Génération en cours...
                </span>
                <span v-else>Générer ma demande RGPD</span>
              </button>
            </div>
          </form>

          <!-- Success Message -->
          <div v-if="generatedRequest" class="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <div class="flex">
              <svg class="w-5 h-5 text-green-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2 1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <div>
                <h4 class="text-sm font-semibold text-green-900">Demande RGPD générée avec succès !</h4>
                <p class="text-sm text-green-800 mt-1">Votre demande a été créée et est prête à être envoyée.</p>
                <div class="mt-3 flex gap-3">
                  <button 
                    @click="downloadPDF" 
                    class="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    Télécharger PDF
                  </button>
                  <button 
                    @click="copyToClipboard" 
                    class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    Copier le texte
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Info Box -->
        <div class="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div class="flex items-start">
            <svg class="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
            </svg>
            <div>
              <h4 class="text-sm font-semibold text-blue-900">Vos droits RGPD</h4>
              <p class="text-sm text-blue-800 mt-1">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous avez le droit de demander la suppression de vos données personnelles. L'entreprise a 30 jours pour répondre à votre demande.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Meta tags pour SEO
useHead({
  title: 'Générateur RGPD - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Générez des demandes RGPD conformes en quelques clics. Modèles légaux pré-approuvés pour la suppression de vos données personnelles.'
    }
  ]
})

// État du formulaire
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  companyDomain: '',
  dpoEmail: '',
  privacyEmail: '',
  legalEmail: '',
  requestType: 'deletion',
  additionalDetails: ''
})

// État de l'interface
const isGenerating = ref(false)
const generatedRequest = ref('')

// Récupération des paramètres d'URL au chargement de la page
onMounted(() => {
  // Récupérer les paramètres d'URL de manière sûre
  if (process.client) {
    try {
      const urlParams = new URLSearchParams(window.location.search)
      
      // Pré-remplir avec les données de l'entreprise si disponibles
      const company = urlParams.get('company')
      const domain = urlParams.get('domain')
      const dpo = urlParams.get('dpo')
      const privacy = urlParams.get('privacy')
      const legal = urlParams.get('legal')
      
      if (company) form.value.companyName = company
      if (domain) form.value.companyDomain = domain
      if (dpo) form.value.dpoEmail = dpo
      if (privacy) form.value.privacyEmail = privacy
      if (legal) form.value.legalEmail = legal
    } catch (error) {
      console.log('Erreur lors de la récupération des paramètres:', error)
    }
  }
})

// Génération de la demande RGPD
const generateRequest = async () => {
  isGenerating.value = true
  
  try {
    // Simulation de génération (remplacer par votre logique d'API)
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Générer le texte de la demande
    const requestText = generateRequestText()
    generatedRequest.value = requestText
    
  } catch (error) {
    console.error('Erreur lors de la génération:', error)
  } finally {
    isGenerating.value = false
  }
}

// Génération du texte de la demande
const generateRequestText = () => {
  const date = new Date().toLocaleDateString('fr-FR')
  
  return `Demande de suppression de données personnelles

Date: ${date}

À l'attention du délégué à la protection des données (DPO)
${form.value.companyName}
${form.value.companyDomain}

Objet: Demande d'exercice du droit à l'effacement (Article 17 du RGPD)

Madame, Monsieur,

En vertu du Règlement Général sur la Protection des Données (RGPD) et plus précisément de l'article 17 relatif au droit à l'effacement, je vous prie de bien vouloir procéder à la suppression de toutes mes données personnelles détenues par votre entreprise.

Informations personnelles :
- Nom: ${form.value.lastName}
- Prénom: ${form.value.firstName}
- Email: ${form.value.email}

Cette demande s'applique à toutes les données me concernant, y compris mais sans s'y limiter :
- Données de profil et de compte
- Données de navigation et cookies
- Historique d'achat et préférences
- Données de localisation
- Contenu généré par l'utilisateur
- Données partagées avec des tiers

Conformément à l'article 17 du RGPD, vous disposez d'un délai d'un mois pour répondre à cette demande.

Je vous remercie de me confirmer la suppression de mes données par email à l'adresse suivante : ${form.value.email}

Cordialement,
${form.value.firstName} ${form.value.lastName}
${form.value.email}`
}

// Téléchargement du PDF
const downloadPDF = () => {
  // Implémentation du téléchargement PDF
  const blob = new Blob([generatedRequest.value], { type: 'text/plain' })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `demande-rgpd-${form.value.companyName.toLowerCase()}-${new Date().toISOString().split('T')[0]}.txt`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  window.URL.revokeObjectURL(url)
}

// Copie dans le presse-papiers
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(generatedRequest.value)
    // Optionnel : afficher une notification de succès
  } catch (err) {
    console.error('Erreur lors de la copie:', err)
  }
}
</script>
 