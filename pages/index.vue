<template>
  <div>
    <!-- Header -->
    <Header />
    
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-8 text-balance leading-tight">
          Effacez vos données personnelles.
          <span class="gradient-text">Vraiment.</span>
        </h1>
        
        <p class="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
          Générez, envoyez et suivez vos demandes RGPD / Delete Act vers des centaines d'entreprises en un clic.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <a href="#get-started" class="btn-primary text-lg px-10 py-4 inline-flex items-center gap-3">
            Commencer gratuitement
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
          
          <!-- Dropdown Navigation -->
          <div class="hs-dropdown relative inline-flex">
            <button type="button" class="hs-dropdown-toggle btn-outline text-lg px-8 py-4 inline-flex items-center gap-3">
              Navigation rapide
              <svg class="hs-dropdown-open:rotate-180 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-lg rounded-lg p-2 mt-2 min-w-[15rem]">
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100" href="/generator">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Générateur RGPD
              </a>
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100" href="/directory">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                Annuaire Contacts
              </a>
              <div class="border-t border-gray-200 my-1"></div>
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100" href="#how-it-works">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                Comment ça marche
              </a>
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100" href="#features">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Fonctionnalités
              </a>
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100" href="#pricing">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
                Tarifs
              </a>
              <div class="border-t border-gray-200 my-1"></div>
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100" href="#faq">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                FAQ
              </a>
            </div>
          </div>
          
          <a href="#how-it-works" class="btn-outline text-lg px-8 py-4">
            Comment ça marche
          </a>
        </div>
        
        <!-- Trust Indicators -->
        <div class="flex flex-wrap justify-center items-center gap-8 text-gray-600">
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="font-medium">Conforme UE</span>
          </div>
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="font-medium">Suivi horodaté</span>
          </div>
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="font-medium">Relances automatiques</span>
          </div>
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="font-medium">Preuves PDF</span>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section id="how-it-works" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">Comment ça marche</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            En 3 étapes simples, supprimez vos données de centaines d'entreprises
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <span class="text-3xl font-bold text-blue-600">1</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 leading-tight">Identifiez les entreprises</h3>
            <p class="text-gray-600 leading-relaxed">
              Notre annuaire Privacy Contacts identifie automatiquement les contacts DPO, 
              privacy@ et légaux par domaine.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <span class="text-3xl font-bold text-blue-600">2</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 leading-tight">Générez les demandes</h3>
            <p class="text-gray-600 leading-relaxed">
              Créez des demandes RGPD/Delete Act personnalisées en quelques clics, 
              avec modèles légaux pré-approuvés.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <span class="text-3xl font-bold text-blue-600">3</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 leading-tight">Suivez et relancez</h3>
            <p class="text-gray-600 leading-relaxed">
              Envoi automatique, suivi des réponses, relances programmées 
              et preuves horodatées pour votre dossier.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">Fonctionnalités</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tout ce dont vous avez besoin pour exercer vos droits à la suppression des données
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div class="bg-white p-8 lg:p-10 rounded-xl shadow-sm border border-gray-200">
            <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 leading-tight">Annuaire Privacy Contacts</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Base de données des contacts DPO, privacy@ et légaux vérifiés et maintenus à jour.
            </p>
            <ul class="text-sm text-gray-600 space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Vérification continue des emails</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Sources : registres publics, scraping</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white p-8 lg:p-10 rounded-xl shadow-sm border border-gray-200">
            <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 leading-tight">Générateur de demandes</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Créez des demandes RGPD et Delete Act personnalisées avec nos modèles légaux.
            </p>
            <ul class="text-sm text-gray-600 space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Modèles pré-approuvés par des avocats</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Export PDF avec horodatage</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white p-8 lg:p-10 rounded-xl shadow-sm border border-gray-200">
            <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 leading-tight">Suivi automatique</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Suivez l'état de vos demandes et recevez des notifications automatiques.
            </p>
            <ul class="text-sm text-gray-600 space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Statuts en temps réel</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Relances programmées</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white p-8 lg:p-10 rounded-xl shadow-sm border border-gray-200">
            <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4 leading-tight">Preuves et conformité</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Gardez une trace de toutes vos actions avec des preuves horodatées.
            </p>
            <ul class="text-sm text-gray-600 space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Horodatage blockchain</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Journal d'audit complet</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Generator Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Générateur de demandes RGPD
            </h2>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Créez des demandes de suppression de données conformes au RGPD et au Delete Act 
              en quelques clics. Nos modèles légaux pré-approuvés vous garantissent une conformité parfaite.
            </p>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700">Modèles légaux validés par des avocats</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700">Personnalisation complète de vos demandes</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700">Export PDF avec horodatage blockchain</span>
              </li>
            </ul>
            <a href="/generator" class="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
              Essayer le générateur
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 lg:p-12">
            <div class="text-center">
              <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Générateur intelligent</h3>
              <p class="text-gray-600 mb-6">
                Créez des demandes professionnelles en quelques minutes. 
                Notre IA vous guide à chaque étape.
              </p>
              <div class="text-sm text-gray-500">
                ✅ RGPD • ✅ Delete Act • ✅ Conforme UE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Directory Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <div class="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 lg:p-12">
              <div class="text-center">
                <div class="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Annuaire complet</h3>
                <p class="text-gray-600 mb-6">
                  Accédez à notre base de données de contacts DPO 
                  et privacy@ vérifiés et maintenus à jour.
                </p>
                <div class="text-sm text-gray-500">
                  🔍 10k+ entreprises • ✅ Contacts vérifiés • 📧 Mise à jour continue
                </div>
              </div>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <h2 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Annuaire Privacy Contacts
            </h2>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Trouvez instantanément les contacts de protection des données de milliers d'entreprises. 
              Plus besoin de chercher sur chaque site web !
            </p>
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700">Base de données de 10 000+ entreprises</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700">Contacts DPO et privacy@ vérifiés</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-gray-700">Mise à jour automatique et continue</span>
              </li>
            </ul>
            <a href="/directory" class="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg">
              Explorer l'annuaire
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">Tarifs simples et transparents</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Commencez gratuitement, évoluez selon vos besoins
          </p>
          <button type="button" class="hs-overlay-toggle bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-3" data-hs-overlay="#pricing-modal">
            Voir tous les détails
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </button>
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
            <ul class="text-left space-y-4 mb-8">
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                3 demandes par mois
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Générateur de demandes
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Export PDF
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
            <ul class="text-left space-y-4 mb-8">
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Demandes illimitées
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Envoi automatique
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Relances automatiques
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Preuves horodatées
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
            <ul class="text-left space-y-4 mb-8">
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Tout du plan Pro
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Dashboard multi-marques
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Modèles personnalisés
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Export et rapports
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

    <!-- Pricing Modal -->
    <div id="pricing-modal" class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
      <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-300 mt-0 opacity-0 ease-out transition-all sm:max-w-4xl sm:w-full m-3 sm:mx-auto">
        <div class="flex flex-col bg-white border shadow-sm rounded-xl">
          <div class="flex justify-between items-center py-3 px-4 border-b">
            <h3 class="font-bold text-gray-800 text-xl">Détails des tarifs</h3>
            <button type="button" class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100" data-hs-overlay="#pricing-modal">
              <span class="sr-only">Fermer</span>
              <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
          <div class="p-6 overflow-y-auto">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Free Plan Details -->
              <div class="text-center p-6 border border-gray-200 rounded-lg">
                <h4 class="text-xl font-bold text-gray-900 mb-4">Gratuit</h4>
                <div class="text-3xl font-bold text-gray-900 mb-4">0€<span class="text-sm font-normal text-gray-600">/mois</span></div>
                <ul class="text-sm text-gray-600 space-y-2 text-left">
                  <li class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    3 demandes par mois
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    Générateur de demandes
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    Export PDF
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    Annuaire Privacy Contacts
                  </li>
                </ul>
              </div>
              
              <!-- Pro Plan Details -->
              <div class="text-center p-6 border-2 border-blue-600 rounded-lg relative">
                <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Populaire</span>
                </div>
                <h4 class="text-xl font-bold text-gray-900 mb-4">Pro</h4>
                <div class="text-3xl font-bold text-gray-900 mb-4">9€<span class="text-sm font-normal text-gray-600">/mois</span></div>
                <ul class="text-sm text-gray-600 space-y-2 text-left">
                  <li class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    Demandes illimitées
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    Envoi automatique
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    Relances automatiques
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    Preuves horodatées
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    Support prioritaire
                  </li>
                </ul>
              </div>
              
              <!-- Business Plan Details -->
              <div class="text-center p-6 border border-gray-200 rounded-lg">
                <h4 class="text-xl font-bold text-gray-900 mb-4">Business</h4>
                <div class="text-3xl font-bold text-gray-900 mb-4">49€<span class="text-sm font-normal text-gray-600">/mois</span></div>
                <ul class="text-sm text-gray-600 space-y-2 text-left">
                  <li class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    Tout du plan Pro
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    Dashboard multi-marques
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    Modèles personnalisés
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    Export et rapports
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    3 sièges inclus
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50" data-hs-overlay="#pricing-modal">
              Fermer
            </button>
            <a href="#get-started" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700">
              Commencer maintenant
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <section id="get-started" class="py-20 bg-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-white mb-6 leading-tight">
          Prêt à reprendre le contrôle de vos données ?
        </h2>
        <p class="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Rejoignez des milliers d'utilisateurs qui ont déjà supprimé leurs données de centaines d'entreprises.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#" class="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-3">
            Commencer gratuitement
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
          <a href="#how-it-works" class="text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
            En savoir plus
          </a>
        </div>
        <p class="text-blue-200 mt-8 text-sm">
          Aucune carte de crédit requise • Annulation à tout moment
        </p>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
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
  ],
  // Preline CSS et JavaScript
  link: [
    {
      rel: 'stylesheet',
      href: 'https://preline.co/assets/preline.css'
    }
  ],
  script: [
    {
      src: 'https://preline.co/assets/preline.js',
      onload: 'if(typeof HSStaticMethods !== "undefined") HSStaticMethods.autoInit()'
    }
  ]
})

// Import components
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script> 