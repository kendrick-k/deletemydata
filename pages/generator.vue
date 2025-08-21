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
        
        <!-- Demo Data Banner -->
        <div class="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
          <div class="flex items-center justify-center gap-3">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span class="text-sm text-blue-800">
              <strong>Mode démonstration activé</strong> - Les champs sont pré-remplis avec des données d'exemple
            </span>
            <button 
              @click="clearDemoData" 
              class="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
            >
              Effacer
            </button>
          </div>
        </div>
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
                    class="form-input"
                    placeholder="Ex: Jean"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                  <input 
                    v-model="form.lastName" 
                    type="text" 
                    required
                    class="form-input"
                    placeholder="Ex: Dupont"
                  >
                </div>
              </div>
              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input 
                  v-model="form.email" 
                  type="email" 
                  required
                  class="form-input"
                  placeholder="Ex: jean.dupont@email.com"
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
                  class="form-input"
                >
              </div>
              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Domaine de l'entreprise *</label>
                <input 
                  v-model="form.companyDomain" 
                  type="text" 
                  required
                  placeholder="Ex: google.com" 
                  class="form-input"
                >
              </div>
              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Email DPO</label>
                <input 
                  v-model="form.dpoEmail" 
                  type="email" 
                  placeholder="Email du délégué à la protection des données"
                  class="form-input"
                >
              </div>
              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Email Privacy</label>
                <input 
                  v-model="form.privacyEmail" 
                  type="email" 
                  placeholder="Email privacy@ de l'entreprise"
                  class="form-input"
                >
              </div>
              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700 mb-2">Email Légal</label>
                <input 
                  v-model="form.legalEmail" 
                  type="email" 
                  placeholder="Email légal de l'entreprise"
                  class="form-input"
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
                  class="form-input"
                ></textarea>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="pt-4">
              <button 
                type="submit" 
                :disabled="isGenerating"
                class="btn-primary w-full text-lg py-4 px-6 disabled:opacity-50 disabled:cursor-not-allowed"
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
                    📄 Télécharger PDF
                  </button>
                  <button 
                    @click="sendByEmail" 
                    class="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                  >
                    📧 Envoyer par email
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

// Données de démonstration par défaut
const demoData = {
  firstName: 'Jean',
  lastName: 'Dupont',
  email: 'jean.dupont@email.com',
  companyName: 'Google',
  companyDomain: 'google.com',
  dpoEmail: 'dpo@google.com',
  privacyEmail: 'privacy@google.com',
  legalEmail: 'legal@google.com',
  requestType: 'deletion',
  additionalDetails: 'Je souhaite supprimer toutes mes données personnelles, y compris mon historique de recherche, mes préférences publicitaires et mes données de localisation.'
}

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
const isDemoMode = ref(true)

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
      
      if (company || domain || dpo || privacy || legal) {
        // Mode avec paramètres d'URL
        if (company) form.value.companyName = company
        if (domain) form.value.companyDomain = domain
        if (dpo) form.value.dpoEmail = dpo
        if (privacy) form.value.privacyEmail = privacy
        if (legal) form.value.legalEmail = legal
        isDemoMode.value = false
      } else {
        // Mode démonstration par défaut
        loadDemoData()
      }
    } catch (error) {
      console.log('Erreur lors de la récupération des paramètres:', error)
      // En cas d'erreur, charger les données de démonstration
      loadDemoData()
    }
  }
})

// Charger les données de démonstration
const loadDemoData = () => {
  Object.assign(form.value, demoData)
  isDemoMode.value = true
}

// Effacer les données de démonstration
const clearDemoData = () => {
  Object.keys(form.value).forEach(key => {
    if (key !== 'requestType') {
      (form.value as any)[key] = ''
    }
  })
  form.value.requestType = 'deletion'
  isDemoMode.value = false
}

// Génération de la demande RGPD
const generateRequest = async () => {
  isGenerating.value = true
  
  // Track Google Analytics event
  const { trackGeneratorUsage } = useAnalytics()
  trackGeneratorUsage(form.value.companyName || 'Unknown Company', form.value.requestType)
  
  try {
    // Enregistrer l'utilisation dans Supabase
    try {
      await $fetch('/api/generator-usage', {
        method: 'POST',
        body: {
          companyName: form.value.companyName,
          companyDomain: form.value.companyDomain,
          requestType: form.value.requestType,
          userEmail: form.value.email,
          additionalDetails: form.value.additionalDetails
        }
      })
      console.log('✅ Usage enregistré dans Supabase')
    } catch (error) {
      console.warn('⚠️ Erreur enregistrement Supabase:', error)
      // Continuer même si l'enregistrement échoue
    }
    
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

${form.value.additionalDetails ? `Détails spécifiques : ${form.value.additionalDetails}` : ''}

Conformément à l'article 17 du RGPD, vous disposez d'un délai d'un mois pour répondre à cette demande.

Je vous remercie de me confirmer la suppression de mes données par email à l'adresse suivante : ${form.value.email}

Cordialement,
${form.value.firstName} ${form.value.lastName}
${form.value.email}`
}

// Fonction pour ajouter du texte avec retours à la ligne automatiques
const addWrappedText = (doc: any, text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
  const words = text.split(' ')
  let line = ''
  let currentY = y
  
  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' '
    const testWidth = doc.getTextWidth(testLine)
    
    if (testWidth > maxWidth && i > 0) {
      doc.text(line.trim(), x, currentY)
      line = words[i] + ' '
      currentY += lineHeight
    } else {
      line = testLine
    }
  }
  
  // Ajouter la dernière ligne
  if (line.trim()) {
    doc.text(line.trim(), x, currentY)
    currentY += lineHeight
  }
  
  return currentY
}

// Fonction pour ajouter le footer sur une page
const addFooter = (doc: any, pageWidth: number, margin: number) => {
  const footerY = 280 // Position Y du footer (près du bas de la page)
  
  // Ligne de séparation
  doc.setDrawColor(200, 200, 200)
  doc.line(margin, footerY, pageWidth - margin, footerY)
  
  // Footer centré avec texte cliquable
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  
  const footerText = 'Généré par deletemydata.online'
  const footerWidth = doc.getTextWidth(footerText)
  const footerX = (pageWidth - footerWidth) / 2
  
  // Texte du footer en bleu et cliquable
  doc.setTextColor(0, 102, 204) // Bleu
  doc.text(footerText, footerX, footerY + 8)
  
  // Rendre le texte "Généré par deletemydata.online" cliquable
  doc.link(footerX, footerY + 2, footerWidth, 12, { 
    url: 'https://deletemydata.online',
    color: [0, 102, 204] // Couleur bleue pour le lien
  })
  
  // Ajouter un petit indicateur visuel (soulignement)
  doc.setDrawColor(0, 102, 204)
  doc.line(footerX, footerY + 10, footerX + footerWidth, footerY + 10)
}

// Téléchargement du PDF
const downloadPDF = async () => {
  try {
    // Import dynamique de jsPDF
    const { jsPDF } = await import('jspdf')
    
    // Créer un nouveau document PDF
    const doc = new jsPDF()
    
    // Configuration des styles
    const titleFontSize = 14
    const subtitleFontSize = 12
    const bodyFontSize = 10
    const margin = 20
    const pageWidth = 210 // Largeur A4 en mm
    const maxTextWidth = pageWidth - (2 * margin) // Largeur disponible pour le texte
    let yPosition = margin
    
    // Titre principal
    doc.setFontSize(titleFontSize)
    doc.setFont('helvetica', 'bold')
    doc.text('Demande de suppression de données personnelles', margin, yPosition)
    yPosition += 12
    
    // Date
    doc.setFontSize(bodyFontSize)
    doc.setFont('helvetica', 'normal')
    const date = new Date().toLocaleDateString('fr-FR')
    doc.text(`Date: ${date}`, margin, yPosition)
    yPosition += 15
    
    // Destinataire
    doc.setFontSize(subtitleFontSize)
    doc.setFont('helvetica', 'bold')
    yPosition = addWrappedText(doc, 'À l\'attention du délégué à la protection des données (DPO)', margin, yPosition, maxTextWidth, 8)
    yPosition += 3
    
    doc.setFontSize(bodyFontSize)
    doc.setFont('helvetica', 'normal')
    doc.text(form.value.companyName, margin, yPosition)
    yPosition += 6
    doc.text(form.value.companyDomain, margin, yPosition)
    yPosition += 15
    
    // Objet
    doc.setFontSize(subtitleFontSize)
    doc.setFont('helvetica', 'bold')
    yPosition = addWrappedText(doc, 'Objet: Demande d\'exercice du droit à l\'effacement (Article 17 du RGPD)', margin, yPosition, maxTextWidth, 8)
    yPosition += 8
    
    // Salutation
    doc.setFontSize(bodyFontSize)
    doc.setFont('helvetica', 'normal')
    doc.text('Madame, Monsieur,', margin, yPosition)
    yPosition += 12
    
    // Corps du texte avec gestion des retours à la ligne
    const bodyText = [
      'En vertu du Règlement Général sur la Protection des Données (RGPD) et plus précisément de l\'article 17 relatif au droit à l\'effacement, je vous prie de bien vouloir procéder à la suppression de toutes mes données personnelles détenues par votre entreprise.',
      '',
      'Informations personnelles :',
      `- Nom: ${form.value.lastName}`,
      `- Prénom: ${form.value.firstName}`,
      `- Email: ${form.value.email}`,
      '',
      'Cette demande s\'applique à toutes les données me concernant, y compris mais sans s\'y limiter :',
      '- Données de profil et de compte',
      '- Données de navigation et cookies',
      '- Historique d\'achat et préférences',
      '- Données de localisation',
      '- Contenu généré par l\'utilisateur',
      '- Données partagées avec des tiers'
    ]
    
    // Ajouter le texte du corps avec gestion des retours à la ligne
    bodyText.forEach(line => {
      if (line === '') {
        yPosition += 6
      } else if (line.startsWith('-')) {
        // Les puces sont courtes, pas besoin de wrapper
        if (yPosition > 250) {
          // Ajouter le footer avant de changer de page
          addFooter(doc, pageWidth, margin)
          doc.addPage()
          yPosition = margin
        }
        doc.text(line, margin, yPosition)
        yPosition += 6
      } else {
        // Vérifier si on doit passer à la page suivante
        if (yPosition > 250) {
          // Ajouter le footer avant de changer de page
          addFooter(doc, pageWidth, margin)
          doc.addPage()
          yPosition = margin
        }
        // Utiliser la fonction de wrapper pour les longues lignes
        yPosition = addWrappedText(doc, line, margin, yPosition, maxTextWidth, 6)
      }
    })
    
    // Détails supplémentaires si fournis
    if (form.value.additionalDetails) {
      yPosition += 6
      if (yPosition > 250) {
        // Ajouter le footer avant de changer de page
        addFooter(doc, pageWidth, margin)
        doc.addPage()
        yPosition = margin
      }
      const detailsText = `Détails spécifiques : ${form.value.additionalDetails}`
      yPosition = addWrappedText(doc, detailsText, margin, yPosition, maxTextWidth, 6)
      yPosition += 6
    }
    
    // Conclusion
    if (yPosition > 250) {
      // Ajouter le footer avant de changer de page
      addFooter(doc, pageWidth, margin)
      doc.addPage()
      yPosition = margin
    }
    yPosition = addWrappedText(doc, 'Conformément à l\'article 17 du RGPD, vous disposez d\'un délai d\'un mois pour répondre à cette demande.', margin, yPosition, maxTextWidth, 6)
    yPosition += 6
    
    const confirmationText = `Je vous remercie de me confirmer la suppression de mes données par email à l'adresse suivante : ${form.value.email}`
    yPosition = addWrappedText(doc, confirmationText, margin, yPosition, maxTextWidth, 6)
    yPosition += 15
    
    // Signature
    doc.text('Cordialement,', margin, yPosition)
    yPosition += 6
    doc.text(`${form.value.firstName} ${form.value.lastName}`, margin, yPosition)
    yPosition += 6
    doc.text(form.value.email, margin, yPosition)
    
    // Ajouter le footer sur la page française
    addFooter(doc, pageWidth, margin)
    
    // Ajouter une nouvelle page pour la version anglaise
    doc.addPage()
    yPosition = margin
    
    // Titre principal en anglais
    doc.setFontSize(titleFontSize)
    doc.setFont('helvetica', 'bold')
    doc.text('Personal Data Deletion Request', margin, yPosition)
    yPosition += 12
    
    // Date en anglais
    doc.setFontSize(bodyFontSize)
    doc.setFont('helvetica', 'normal')
    const dateEn = new Date().toLocaleDateString('en-GB')
    doc.text(`Date: ${dateEn}`, margin, yPosition)
    yPosition += 15
    
    // Destinataire en anglais
    doc.setFontSize(subtitleFontSize)
    doc.setFont('helvetica', 'bold')
    yPosition = addWrappedText(doc, 'To the attention of the Data Protection Officer (DPO)', margin, yPosition, maxTextWidth, 8)
    yPosition += 3
    
    doc.setFontSize(bodyFontSize)
    doc.setFont('helvetica', 'normal')
    doc.text(form.value.companyName, margin, yPosition)
    yPosition += 6
    doc.text(form.value.companyDomain, margin, yPosition)
    yPosition += 15
    
    // Objet en anglais
    doc.setFontSize(subtitleFontSize)
    doc.setFont('helvetica', 'bold')
    yPosition = addWrappedText(doc, 'Subject: Request for exercise of the right to erasure (Article 17 GDPR)', margin, yPosition, maxTextWidth, 8)
    yPosition += 8
    
    // Salutation en anglais
    doc.setFontSize(bodyFontSize)
    doc.setFont('helvetica', 'normal')
    doc.text('Dear Sir/Madam,', margin, yPosition)
    yPosition += 12
    
    // Corps du texte en anglais
    const bodyTextEn = [
      'Under the General Data Protection Regulation (GDPR) and more specifically Article 17 regarding the right to erasure, I kindly request you to proceed with the deletion of all my personal data held by your company.',
      '',
      'Personal Information:',
      `- Last Name: ${form.value.lastName}`,
      `- First Name: ${form.value.firstName}`,
      `- Email: ${form.value.email}`,
      '',
      'This request applies to all data concerning me, including but not limited to:',
      '- Profile and account data',
      '- Navigation data and cookies',
      '- Purchase history and preferences',
      '- Location data',
      '- User-generated content',
      '- Data shared with third parties'
    ]
    
    // Ajouter le texte du corps en anglais
    bodyTextEn.forEach(line => {
      if (line === '') {
        yPosition += 6
      } else if (line.startsWith('-')) {
        if (yPosition > 250) {
          // Ajouter le footer avant de changer de page
          addFooter(doc, pageWidth, margin)
          doc.addPage()
          yPosition = margin
        }
        doc.text(line, margin, yPosition)
        yPosition += 6
      } else {
        if (yPosition > 250) {
          addFooter(doc, pageWidth, margin)
          doc.addPage()
          yPosition = margin
        }
        yPosition = addWrappedText(doc, line, margin, yPosition, maxTextWidth, 6)
      }
    })
    
    // Détails supplémentaires en anglais
    if (form.value.additionalDetails) {
      yPosition += 6
      if (yPosition > 250) {
        addFooter(doc, pageWidth, margin)
        doc.addPage()
        yPosition = margin
      }
      const detailsTextEn = `Specific Details: ${form.value.additionalDetails}`
      yPosition = addWrappedText(doc, detailsTextEn, margin, yPosition, maxTextWidth, 6)
      yPosition += 6
    }
    
    // Conclusion en anglais
    if (yPosition > 250) {
      addFooter(doc, pageWidth, margin)
      doc.addPage()
      yPosition = margin
    }
    yPosition = addWrappedText(doc, 'In accordance with Article 17 of the GDPR, you have one month to respond to this request.', margin, yPosition, maxTextWidth, 6)
    yPosition += 6
    
    const confirmationTextEn = `I kindly ask you to confirm the deletion of my data by email at the following address: ${form.value.email}`
    yPosition = addWrappedText(doc, confirmationTextEn, margin, yPosition, maxTextWidth, 6)
    yPosition += 15
    
    // Signature en anglais
    doc.text('Sincerely,', margin, yPosition)
    yPosition += 6
    doc.text(`${form.value.firstName} ${form.value.lastName}`, margin, yPosition)
    yPosition += 6
    doc.text(form.value.email, margin, yPosition)
    
    // Ajouter le footer sur la page anglaise
    addFooter(doc, pageWidth, margin)
    
    // Générer le nom du fichier
    const fileName = `demande-rgpd-${form.value.companyName.toLowerCase().replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.pdf`
    
    // Télécharger le PDF
    doc.save(fileName)
    
  } catch (error) {
    console.error('Erreur lors de la génération du PDF:', error)
    // Fallback vers le téléchargement texte si le PDF échoue
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
}

// Envoi par email
const sendByEmail = async () => {
  try {
    // Créer un corps d'email court et compatible
    const emailBody = `Bonjour,

Je souhaite exercer mon droit à l'effacement (Article 17 RGPD) pour toutes mes données personnelles détenues par ${form.value.companyName}.

Nom: ${form.value.lastName}
Prénom: ${form.value.firstName}
Email: ${form.value.email}

${form.value.additionalDetails ? `Détails: ${form.value.additionalDetails}` : ''}

Merci de confirmer la suppression par email à ${form.value.email}.

Cordialement,
${form.value.firstName} ${form.value.lastName}

---
Généré par deletemydata.online`

    // Créer le lien mailto avec un corps d'email optimisé
    const subject = encodeURIComponent(`Demande de suppression RGPD - ${form.value.companyName}`)
    const body = encodeURIComponent(emailBody)
    
    // Construire le lien mailto
    const mailtoLink = `mailto:${form.value.dpoEmail || 'dpo@' + form.value.companyDomain}?subject=${subject}&body=${body}`
    
    // Ouvrir le client email
    window.open(mailtoLink)
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi par email:', error)
    
    // Fallback vers un mailto simple en cas d'erreur
    const simpleBody = `Bonjour,

Veuillez trouver ci-dessous ma demande de suppression de données personnelles conformément à l'article 17 du RGPD.

Nom: ${form.value.lastName}
Prénom: ${form.value.firstName}
Email: ${form.value.email}

Je souhaite exercer mon droit à l'effacement de toutes mes données personnelles détenues par votre entreprise.

Cordialement,
${form.value.firstName} ${form.value.lastName}
${form.value.email}`

    const subject = encodeURIComponent(`Demande de suppression RGPD - ${form.value.companyName}`)
    const body = encodeURIComponent(simpleBody)
    
    const mailtoLink = `mailto:${form.value.dpoEmail || 'dpo@' + form.value.companyDomain}?subject=${subject}&body=${body}`
    window.open(mailtoLink)
  }
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