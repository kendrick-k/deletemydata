<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Générateur de demande RGPD</h2>
        <p class="text-gray-600">
          Créez votre demande de suppression de données personnalisée en quelques étapes
        </p>
      </div>

      <form @submit.prevent="generateRequest" class="space-y-6">
        <!-- Informations personnelles -->
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
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre prénom"
            />
          </div>
          
          <div>
            <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
              Nom de famille *
            </label>
            <input
              id="lastName"
              v-model="form.lastName"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre nom"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="votre@email.com"
            />
          </div>
          
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
              Téléphone
            </label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="+33 6 12 34 56 78"
            />
          </div>
        </div>

        <!-- Adresse -->
        <div>
          <label for="address" class="block text-sm font-medium text-gray-700 mb-2">
            Adresse complète *
          </label>
          <textarea
            id="address"
            v-model="form.address"
            rows="3"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Votre adresse complète (nécessaire pour l'identification)"
          ></textarea>
        </div>

        <!-- Informations sur l'entreprise -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="companyName" class="block text-sm font-medium text-gray-700 mb-2">
              Nom de l'entreprise *
            </label>
            <input
              id="companyName"
              v-model="form.companyName"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nom de l'entreprise"
            />
          </div>
          
          <div>
            <label for="companyDomain" class="block text-sm font-medium text-gray-700 mb-2">
              Domaine de l'entreprise
            </label>
            <input
              id="companyDomain"
              v-model="form.companyDomain"
              type="text"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="exemple.com"
            />
          </div>
        </div>

        <!-- Type de demande -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-4">
            Type de demande *
          </label>
          <div class="space-y-3">
            <label class="flex items-center">
              <input
                v-model="form.requestType"
                type="radio"
                value="deletion"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span class="ml-3 text-gray-700">Suppression complète de mes données</span>
            </label>
            
            <label class="flex items-center">
              <input
                v-model="form.requestType"
                type="radio"
                value="access"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span class="ml-3 text-gray-700">Accès à mes données (copie)</span>
            </label>
            
            <label class="flex items-center">
              <input
                v-model="form.requestType"
                type="radio"
                value="rectification"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span class="ml-3 text-gray-700">Rectification de mes données</span>
            </label>
            
            <label class="flex items-center">
              <input
                v-model="form.requestType"
                type="radio"
                value="portability"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span class="ml-3 text-gray-700">Portabilité de mes données</span>
            </label>
          </div>
        </div>

        <!-- Informations supplémentaires -->
        <div>
          <label for="additionalInfo" class="block text-sm font-medium text-gray-700 mb-2">
            Informations supplémentaires
          </label>
          <textarea
            id="additionalInfo"
            v-model="form.additionalInfo"
            rows="4"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Détails spécifiques, identifiants de compte, etc. (optionnel)"
          ></textarea>
        </div>

        <!-- Options de la demande -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-4">
            Options de la demande
          </label>
          <div class="space-y-3">
            <label class="flex items-center">
              <input
                v-model="form.urgent"
                type="checkbox"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span class="ml-3 text-gray-700">Demande urgente (justification requise)</span>
            </label>
            
            <label class="flex items-center">
              <input
                v-model="form.includeProof"
                type="checkbox"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span class="ml-3 text-gray-700">Inclure des preuves d'identité</span>
            </label>
          </div>
        </div>

        <!-- Boutons d'action -->
        <div class="flex flex-col sm:flex-row gap-4 pt-6">
          <button
            type="submit"
            class="btn-primary flex-1"
            :disabled="isGenerating"
          >
            <svg v-if="isGenerating" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ isGenerating ? 'Génération...' : 'Générer la demande' }}
          </button>
          
          <button
            type="button"
            @click="previewRequest"
            class="btn-outline flex-1"
          >
            Aperçu
          </button>
        </div>
      </form>
    </div>

    <!-- Modal d'aperçu -->
    <div v-if="showPreview" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div class="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
        <div class="mt-3">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Aperçu de votre demande RGPD</h3>
          
          <div class="bg-gray-50 p-6 rounded-lg max-h-96 overflow-y-auto">
            <div class="prose prose-sm max-w-none">
              <div v-html="previewContent"></div>
            </div>
          </div>
          
          <div class="flex justify-end space-x-3 mt-6">
            <button
              @click="showPreview = false"
              class="btn-secondary"
            >
              Fermer
            </button>
            <button
              @click="generateRequest"
              class="btn-primary"
              :disabled="isGenerating"
            >
              {{ isGenerating ? 'Génération...' : 'Générer et envoyer' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  companyName: '',
  companyDomain: '',
  requestType: 'deletion',
  additionalInfo: '',
  urgent: false,
  includeProof: false
})

const isGenerating = ref(false)
const showPreview = ref(false)
const previewContent = ref('')

// Générer l'aperçu de la demande
const previewRequest = () => {
  const requestText = generateRequestText()
  previewContent.value = requestText
  showPreview.value = true
}

// Générer le texte de la demande
const generateRequestText = () => {
  const today = new Date().toLocaleDateString('fr-FR')
  const requestTypeText = {
    deletion: 'suppression complète de mes données personnelles',
    access: 'accès à mes données personnelles (copie)',
    rectification: 'rectification de mes données personnelles',
    portability: 'portabilité de mes données personnelles'
  }

  return `
    <div class="text-sm leading-relaxed">
      <p><strong>Date :</strong> ${today}</p>
      <br>
      <p><strong>À :</strong> ${form.value.companyName}</p>
      <p><strong>Objet :</strong> Demande d'exercice de mes droits RGPD - ${requestTypeText[form.value.requestType]}</p>
      <br>
      <p>Madame, Monsieur,</p>
      <br>
      <p>En vertu du Règlement Général sur la Protection des Données (RGPD) et de la loi Informatique et Libertés, je vous prie de bien vouloir traiter ma demande d'exercice de mes droits à la ${requestTypeText[form.value.requestType]}.</p>
      <br>
      <p><strong>Mes informations personnelles :</strong></p>
      <ul>
        <li>Nom : ${form.value.lastName}</li>
        <li>Prénom : ${form.value.firstName}</li>
        <li>Email : ${form.value.email}</li>
        ${form.value.phone ? `<li>Téléphone : ${form.value.phone}</li>` : ''}
        <li>Adresse : ${form.value.address}</li>
      </ul>
      <br>
      ${form.value.additionalInfo ? `<p><strong>Informations supplémentaires :</strong> ${form.value.additionalInfo}</p><br>` : ''}
      <p>Conformément à l'article 12 du RGPD, vous disposez d'un délai d'un mois à compter de la réception de cette demande pour me répondre. En cas de complexité ou de nombre élevé de demandes, ce délai peut être prolongé de deux mois supplémentaires.</p>
      <br>
      <p>Je vous remercie de me confirmer la bonne réception de cette demande et de m'informer des suites qui y seront données.</p>
      <br>
      <p>Je reste à votre disposition pour tout complément d'information que vous pourriez nécessiter.</p>
      <br>
      <p>Cordialement,</p>
      <p>${form.value.firstName} ${form.value.lastName}</p>
    </div>
  `
}

// Générer et envoyer la demande
const generateRequest = async () => {
  isGenerating.value = true
  
  try {
    // Ici, on ajoutera la logique pour sauvegarder en base et envoyer
    const requestData = {
      ...form.value,
      generatedAt: new Date().toISOString(),
      requestText: generateRequestText()
    }
    
    console.log('Demande générée:', requestData)
    
    // Simuler un délai
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Succès
    alert('Votre demande RGPD a été générée avec succès !')
    
    // Reset du formulaire
    Object.keys(form.value).forEach(key => {
      if (typeof form.value[key] === 'boolean') {
        form.value[key] = false
      } else if (key === 'requestType') {
        form.value[key] = 'deletion'
      } else {
        form.value[key] = ''
      }
    })
    
  } catch (error) {
    console.error('Erreur lors de la génération:', error)
    alert('Une erreur est survenue lors de la génération de votre demande.')
  } finally {
    isGenerating.value = false
    showPreview.value = false
  }
}
</script> 