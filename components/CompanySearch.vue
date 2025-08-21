<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Recherche d'entreprises</h2>
        <p class="text-gray-600">
          Trouvez les contacts de confidentialité de n'importe quelle entreprise
        </p>
      </div>

      <!-- Barre de recherche -->
      <div class="mb-8">
        <div class="relative">
          <input
            v-model="searchQuery"
            @input="searchCompanies"
            @keyup.enter="performSearch"
            type="text"
            placeholder="Rechercher par nom d'entreprise ou domaine..."
            class="w-full px-4 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <button
            @click="performSearch"
            class="absolute inset-y-0 right-0 px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
          >
            Rechercher
          </button>
        </div>
      </div>

      <!-- Résultats de recherche -->
      <div v-if="searchResults.length > 0" class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">
          {{ searchResults.length }} entreprise(s) trouvée(s)
        </h3>
        
        <div v-for="company in searchResults" :key="company.id" class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h4 class="text-xl font-semibold text-gray-900 mb-2">{{ company.company_name }}</h4>
              <p class="text-gray-600">{{ company.domain }}</p>
            </div>
            <div class="flex items-center gap-2">
              <span 
                :class="getStatusClass(company.verification_status)"
                class="px-3 py-1 rounded-full text-xs font-medium"
              >
                {{ getStatusText(company.verification_status) }}
              </span>
            </div>
          </div>
          
          <!-- Contacts -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-if="company.dpo_email" class="bg-gray-50 p-4 rounded-lg">
              <h5 class="font-medium text-gray-900 mb-2">DPO</h5>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <a :href="`mailto:${company.dpo_email}`" class="text-blue-600 hover:underline">
                  {{ company.dpo_email }}
                </a>
              </div>
            </div>
            
            <div v-if="company.privacy_email" class="bg-gray-50 p-4 rounded-lg">
              <h5 class="font-medium text-gray-900 mb-2">Privacy</h5>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <a :href="`mailto:${company.privacy_email}`" class="text-blue-600 hover:underline">
                  {{ company.privacy_email }}
                </a>
              </div>
            </div>
            
            <div v-if="company.legal_email" class="bg-gray-50 p-4 rounded-lg">
              <h5 class="font-medium text-gray-900 mb-2">Legal</h5>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <a :href="`mailto:${company.legal_email}`" class="text-blue-600 hover:underline">
                  {{ company.legal_email }}
                </a>
              </div>
            </div>
          </div>
          
          <!-- Actions -->
          <div class="mt-4 flex gap-3">
            <button
              @click="createRequest(company)"
              class="btn-primary text-sm px-4 py-2"
            >
              Créer une demande
            </button>
            <button
              @click="copyContacts(company)"
              class="btn-outline text-sm px-4 py-2"
            >
              Copier les contacts
            </button>
          </div>
        </div>
      </div>

      <!-- Aucun résultat -->
      <div v-else-if="hasSearched && searchResults.length === 0" class="text-center py-12">
        <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 mb-2">Aucune entreprise trouvée</h3>
        <p class="text-gray-600 mb-4">
          Aucune entreprise ne correspond à votre recherche.
        </p>
        <button
          @click="suggestCompany"
          class="btn-outline"
        >
          Suggérer cette entreprise
        </button>
      </div>

      <!-- État de chargement -->
      <div v-if="isLoading" class="text-center py-12">
        <div class="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p class="text-gray-600">Recherche en cours...</p>
      </div>

      <!-- Statistiques -->
      <div v-if="!isLoading && !hasSearched" class="mt-12 text-center">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div class="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div class="text-gray-600">Entreprises référencées</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-green-600 mb-2">1000+</div>
            <div class="text-gray-600">Contacts vérifiés</div>
          </div>
          <div>
            <div class="text-3xl font-bold text-purple-600 mb-2">24h</div>
            <div class="text-gray-600">Mise à jour quotidienne</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const searchQuery = ref('')
const searchResults = ref([])
const isLoading = ref(false)
const hasSearched = ref(false)

// Recherche en temps réel
const searchCompanies = () => {
  if (searchQuery.value.length < 2) {
    searchResults.value = []
    hasSearched.value = false
    return
  }
  
  // Simulation de recherche en temps réel
  // Ici, on appellera l'API Supabase
  const mockResults = [
    {
      id: '1',
      company_name: 'Google LLC',
      domain: 'google.com',
      dpo_email: 'dpo@google.com',
      privacy_email: 'privacy@google.com',
      legal_email: 'legal@google.com',
      verification_status: 'verified'
    },
    {
      id: '2',
      company_name: 'Facebook Inc.',
      domain: 'facebook.com',
      dpo_email: 'dpo@facebook.com',
      privacy_email: 'privacy@facebook.com',
      legal_email: null,
      verification_status: 'verified'
    }
  ].filter(company => 
    company.company_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    company.domain.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
  
  searchResults.value = mockResults
}

// Recherche complète
const performSearch = async () => {
  if (!searchQuery.value.trim()) return
  
  isLoading.value = true
  hasSearched.value = true
  
  try {
    // Simulation d'une recherche API
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Ici, on appellera l'API Supabase
    const mockResults = [
      {
        id: '1',
        company_name: 'Google LLC',
        domain: 'google.com',
        dpo_email: 'dpo@google.com',
        privacy_email: 'privacy@google.com',
        legal_email: 'legal@google.com',
        verification_status: 'verified'
      },
      {
        id: '2',
        company_name: 'Facebook Inc.',
        domain: 'facebook.com',
        dpo_email: 'dpo@facebook.com',
        privacy_email: 'privacy@facebook.com',
        legal_email: null,
        verification_status: 'verified'
      },
      {
        id: '3',
        company_name: 'Amazon.com Inc.',
        domain: 'amazon.com',
        dpo_email: 'dpo@amazon.com',
        privacy_email: 'privacy@amazon.com',
        legal_email: 'legal@amazon.com',
        verification_status: 'pending'
      }
    ].filter(company => 
      company.company_name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      company.domain.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
    
    searchResults.value = mockResults
  } catch (error) {
    console.error('Erreur lors de la recherche:', error)
    searchResults.value = []
  } finally {
    isLoading.value = false
  }
}

// Créer une demande pour cette entreprise
const createRequest = (company) => {
  // Rediriger vers le générateur avec l'entreprise pré-remplie
  navigateTo(`/generator?company=${encodeURIComponent(company.company_name)}&domain=${encodeURIComponent(company.domain)}`)
}

// Copier les contacts
const copyContacts = async (company) => {
  const contacts = [
    company.dpo_email,
    company.privacy_email,
    company.legal_email
  ].filter(Boolean).join('\n')
  
  try {
    await navigator.clipboard.writeText(contacts)
    alert('Contacts copiés dans le presse-papiers !')
  } catch (error) {
    console.error('Erreur lors de la copie:', error)
    alert('Erreur lors de la copie des contacts')
  }
}

// Suggérer une entreprise
const suggestCompany = () => {
  // Ici, on ouvrira un formulaire de suggestion
  alert('Fonctionnalité de suggestion à implémenter')
}

// Obtenir la classe CSS du statut
const getStatusClass = (status) => {
  const classes = {
    verified: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    unverified: 'bg-red-100 text-red-800'
  }
  return classes[status] || classes.pending
}

// Obtenir le texte du statut
const getStatusText = (status) => {
  const texts = {
    verified: 'Vérifié',
    pending: 'En attente',
    unverified: 'Non vérifié'
  }
  return texts[status] || 'En attente'
}
</script> 