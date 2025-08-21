<template>
  <div>
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="container-custom text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
          Effacez vos données personnelles.
          <span class="gradient-text">Vraiment.</span>
        </h1>
        
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-balance">
          Générez, envoyez et suivez vos demandes RGPD / Delete Act vers des centaines d'entreprises en un clic.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#get-started" class="btn-primary text-lg px-8 py-4">
            Commencer gratuitement
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
          <a href="#how-it-works" class="btn-outline text-lg px-8 py-4">
            Comment ça marche
          </a>
        </div>
        
        <!-- Trust Indicators -->
        <div class="flex flex-wrap justify-center items-center gap-8 text-gray-600">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Conforme UE</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Suivi horodaté</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Relances automatiques</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Preuves PDF</span>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section id="how-it-works" class="py-20 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Comment ça marche</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            En 3 étapes simples, supprimez vos données de centaines d'entreprises
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Identifiez les entreprises</h3>
            <p class="text-gray-600">
              Notre annuaire Privacy Contacts identifie automatiquement les contacts DPO, 
              privacy@ et légaux par domaine.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Générez les demandes</h3>
            <p class="text-gray-600">
              Créez des demandes RGPD/Delete Act personnalisées en quelques clics, 
              avec modèles légaux pré-approuvés.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Suivez et relancez</h3>
            <p class="text-gray-600">
              Envoi automatique, suivi des réponses, relances programmées 
              et preuves horodatées pour votre dossier.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="py-20 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Fonctionnalités</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour exercer vos droits à la suppression des données
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Annuaire Privacy Contacts</h3>
            <p class="text-gray-600 mb-4">
              Base de données des contacts DPO, privacy@ et légaux vérifiés et maintenus à jour.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Vérification continue des emails
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Sources : registres publics, scraping
              </li>
            </ul>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Générateur de demandes</h3>
            <p class="text-gray-600 mb-4">
              Créez des demandes RGPD et Delete Act personnalisées avec nos modèles légaux.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Modèles pré-approuvés par des avocats
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Export PDF avec horodatage
              </li>
            </ul>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Suivi automatique</h3>
            <p class="text-gray-600 mb-4">
              Suivez l'état de vos demandes et recevez des notifications automatiques.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Statuts en temps réel
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Relances programmées
              </li>
            </ul>
          </div>
          
          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Preuves et conformité</h3>
            <p class="text-gray-600 mb-4">
              Gardez une trace de toutes vos actions avec des preuves horodatées.
            </p>
            <ul class="text-sm text-gray-600 space-y-2">
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Horodatage blockchain
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Journal d'audit complet
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="py-20 bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Tarifs simples et transparents</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Commencez gratuitement, évoluez selon vos besoins
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- Free Plan -->
          <div class="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Gratuit</h3>
            <p class="text-gray-600 mb-6">Pour commencer</p>
            <div class="text-4xl font-bold text-gray-900 mb-8">
              0€
              <span class="text-lg font-normal text-gray-600">/mois</span>
            </div>
            <ul class="text-left space-y-3 mb-8">
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                3 demandes par mois
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Générateur de demandes
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Export PDF
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Annuaire Privacy Contacts
              </li>
            </ul>
            <a href="#get-started" class="btn-outline w-full">Commencer gratuitement</a>
          </div>
          
          <!-- Pro Plan -->
          <div class="bg-white border-2 border-blue-600 rounded-xl p-8 text-center relative">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Populaire</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
            <p class="text-gray-600 mb-6">Pour les particuliers</p>
            <div class="text-4xl font-bold text-gray-900 mb-8">
              9€
              <span class="text-lg font-normal text-gray-600">/mois</span>
            </div>
            <ul class="text-left space-y-3 mb-8">
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Demandes illimitées
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Envoi automatique
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Relances automatiques
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Preuves horodatées
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Support prioritaire
              </li>
            </ul>
            <a href="#get-started" class="btn-primary w-full">Commencer Pro</a>
          </div>
          
          <!-- Business Plan -->
          <div class="bg-white border-2 border-gray-200 rounded-xl p-8 text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Business</h3>
            <p class="text-gray-600 mb-6">Pour les PME</p>
            <div class="text-4xl font-bold text-gray-900 mb-8">
              49€
              <span class="text-lg font-normal text-gray-600">/mois</span>
            </div>
            <ul class="text-left space-y-3 mb-8">
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Tout du plan Pro
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Dashboard multi-marques
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Modèles personnalisés
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Export et rapports
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                3 sièges inclus
              </li>
            </ul>
            <a href="#get-started" class="btn-outline w-full">Commencer Business</a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="py-20 bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur DeleteMyData.online
          </p>
        </div>
        
        <div class="max-w-3xl mx-auto space-y-6">
          <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              Comment trouvez-vous les bons emails de contact ?
            </h3>
            <p class="text-gray-600">
              Notre annuaire Privacy Contacts identifie automatiquement les contacts dpo@, privacy@ et légaux par domaine. 
              Nous utilisons une combinaison de scraping, registres publics (CPPA pour les data brokers US) et vérification continue 
              pour maintenir une base de données à jour et fiable.
            </p>
          </div>
          
          <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              Mes demandes sont-elles garanties d'être traitées ?
            </h3>
            <p class="text-gray-600">
              Nous garantissons l'exécution de vos droits (envoi des demandes, suivi, relances), 
              mais pas la suppression elle-même qui dépend de la réponse de chaque entreprise. 
              Nous fournissons des preuves horodatées et un suivi complet pour votre dossier.
            </p>
          </div>
          
          <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              Combien de temps les entreprises ont-elles pour répondre ?
            </h3>
            <p class="text-gray-600">
              Selon le RGPD (UE), les entreprises ont 30 jours pour répondre à votre demande. 
              Aux États-Unis, le Delete Act donne 45 jours. Nous programmons des relances automatiques 
              si aucune réponse n'est reçue dans ces délais.
            </p>
          </div>
          
          <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              Puis-je personnaliser mes demandes ?
            </h3>
            <p class="text-gray-600">
              Absolument ! Nos modèles légaux pré-approuvés peuvent être personnalisés selon vos besoins. 
              Vous pouvez ajouter des détails spécifiques, modifier le ton, ou créer vos propres modèles 
              pour les réutiliser facilement.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="get-started" class="py-20 bg-blue-600">
      <div class="container-custom text-center">
        <h2 class="text-4xl font-bold text-white mb-6">
          Prêt à reprendre le contrôle de vos données ?
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Rejoignez des milliers d'utilisateurs qui ont déjà supprimé leurs données 
          de centaines d'entreprises en quelques clics.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href="/signup" class="btn-secondary text-lg px-8 py-4">
            Créer un compte gratuit
          </a>
          <a href="/demo" class="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600">
            Voir la démo
          </a>
        </div>
        
        <p class="text-blue-200 text-sm">
          Aucune carte de crédit requise • Commencez en 2 minutes • Support en français
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags pour SEO
useHead({
  title: 'DeleteMyData.online - Effacez vos données. Vraiment.',
  meta: [
    {
      name: 'description',
      content: 'Générez, envoyez et suivez vos demandes RGPD / Delete Act vers des centaines d\'entreprises en un clic. Conforme UE, suivi horodaté, relances automatiques.'
    }
  ]
})
</script> 