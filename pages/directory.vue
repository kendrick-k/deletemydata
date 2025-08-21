<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-6">
          Annuaire Privacy Contacts
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Trouvez instantanément les contacts de protection des données de milliers d'entreprises.
        </p>
      </div>

      <!-- Search Section -->
      <div class="max-w-2xl mx-auto mb-12">
        <div class="relative">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Rechercher une entreprise (ex: Google, Facebook, Amazon...)" 
            class="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          >
          <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
      </div>

      <!-- Directory Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Left Column: Company List -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-lg">
            <div class="p-6 border-b border-gray-200">
              <h2 class="text-xl font-semibold text-gray-900">Entreprises trouvées</h2>
              <p class="text-sm text-gray-600 mt-1">{{ filteredCompanies.length }} résultats</p>
            </div>
            
            <div class="divide-y divide-gray-200">
              <div 
                v-for="company in filteredCompanies" 
                :key="company.id"
                @click="selectCompany(company)"
                class="p-6 hover:bg-gray-50 cursor-pointer transition-colors"
                :class="{ 'bg-blue-50 border-r-4 border-blue-500': selectedCompany?.id === company.id }"
              >
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ company.name }}</h3>
                    <p class="text-gray-600 mb-3">{{ company.domain }}</p>
                    
                    <!-- Contact Info -->
                    <div class="space-y-2">
                      <div v-if="company.dpo" class="flex items-center text-sm">
                        <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-gray-700">DPO: {{ company.dpo }}</span>
                      </div>
                      <div v-if="company.privacyEmail" class="flex items-center text-sm">
                        <svg class="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                        <span class="text-gray-700">{{ company.privacyEmail }}</span>
                      </div>
                      <div v-if="company.legalEmail" class="flex items-center text-sm">
                        <svg class="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-gray-700">Légal: {{ company.legalEmail }}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="ml-4">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Vérifié
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Company Details -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-lg p-6 sticky top-24">
            <div v-if="selectedCompany" class="space-y-6">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ selectedCompany.name }}</h3>
                <p class="text-gray-600">{{ selectedCompany.domain }}</p>
              </div>

              <!-- Contact Information -->
              <div>
                <h4 class="text-lg font-medium text-gray-900 mb-3">Contacts</h4>
                <div class="space-y-3">
                  <div v-if="selectedCompany.dpo" class="p-3 bg-gray-50 rounded-lg">
                    <div class="text-sm font-medium text-gray-700">DPO</div>
                    <div class="text-sm text-gray-600">{{ selectedCompany.dpo }}</div>
                  </div>
                  <div v-if="selectedCompany.privacyEmail" class="p-3 bg-gray-50 rounded-lg">
                    <div class="text-sm font-medium text-gray-700">Email Privacy</div>
                    <div class="text-sm text-gray-600">{{ selectedCompany.privacyEmail }}</div>
                  </div>
                  <div v-if="selectedCompany.legalEmail" class="p-3 bg-gray-50 rounded-lg">
                    <div class="text-sm font-medium text-gray-700">Email Légal</div>
                    <div class="text-sm text-gray-600">{{ selectedCompany.legalEmail }}</div>
                  </div>
                </div>
              </div>

              <!-- Actions -->
              <div class="space-y-3">
                <a 
                  :href="`/generator?company=${encodeURIComponent(selectedCompany.name)}&domain=${encodeURIComponent(selectedCompany.domain)}&dpo=${encodeURIComponent(selectedCompany.dpo)}&privacy=${encodeURIComponent(selectedCompany.privacyEmail)}&legal=${encodeURIComponent(selectedCompany.legalEmail)}`"
                  class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold text-lg shadow-sm hover:shadow-md"
                >
                  Créer une demande RGPD
                </a>
                <button 
                  @click="copyContacts"
                  class="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Copier les contacts
                </button>
              </div>
            </div>

            <div v-else class="text-center text-gray-500">
              <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              <p class="text-sm">Sélectionnez une entreprise pour voir les détails</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const searchQuery = ref('')
const selectedCompany = ref(null)

// Sample data - in real app this would come from API
const companies = ref([
  {
    id: 1,
    name: 'Google',
    domain: 'google.com',
    dpo: 'dpo@google.com',
    privacyEmail: 'privacy@google.com',
    legalEmail: 'legal@google.com'
  },
  {
    id: 2,
    name: 'Facebook',
    domain: 'facebook.com',
    dpo: 'dpo@facebook.com',
    privacyEmail: 'privacy@facebook.com',
    legalEmail: 'legal@facebook.com'
  },
  {
    id: 3,
    name: 'Amazon',
    domain: 'amazon.com',
    dpo: 'dpo@amazon.com',
    privacyEmail: 'privacy@amazon.com',
    legalEmail: 'legal@amazon.com'
  },
  {
    id: 4,
    name: 'Microsoft',
    domain: 'microsoft.com',
    dpo: 'dpo@microsoft.com',
    privacyEmail: 'privacy@microsoft.com',
    legalEmail: 'legal@microsoft.com'
  },
  {
    id: 5,
    name: 'Apple',
    domain: 'apple.com',
    dpo: 'dpo@apple.com',
    privacyEmail: 'privacy@apple.com',
    legalEmail: 'legal@apple.com'
  }
])

// Computed properties
const filteredCompanies = computed(() => {
  if (!searchQuery.value) return companies.value
  const query = searchQuery.value.toLowerCase()
  return companies.value.filter(company => 
    company.name.toLowerCase().includes(query) || 
    company.domain.toLowerCase().includes(query)
  )
})

// Methods
const selectCompany = (company) => {
  selectedCompany.value = company
}

const copyContacts = async () => {
  if (!selectedCompany.value) return
  
  const contacts = `
${selectedCompany.value.name} (${selectedCompany.value.domain})

Contacts RGPD:
${selectedCompany.value.dpo ? `DPO: ${selectedCompany.value.dpo}` : ''}
${selectedCompany.value.privacyEmail ? `Privacy: ${selectedCompany.value.privacyEmail}` : ''}
${selectedCompany.value.legalEmail ? `Légal: ${selectedCompany.value.legalEmail}` : ''}
  `.trim()
  
  try {
    await navigator.clipboard.writeText(contacts)
    alert('Contacts copiés dans le presse-papiers !')
  } catch (err) {
    console.error('Erreur lors de la copie:', err)
    alert('Erreur lors de la copie')
  }
}

// SEO
useHead({
  title: 'Annuaire Privacy Contacts - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Trouvez les contacts DPO et privacy@ de milliers d\'entreprises. Base de données vérifiée et maintenue à jour.'
    }
  ]
})
</script> 