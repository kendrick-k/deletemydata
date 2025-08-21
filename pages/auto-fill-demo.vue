<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Hero Section -->
    <div class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="text-center">
          <h1 class="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Démonstration <span class="gradient-text">Auto-remplissage</span>
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Testez l'auto-remplissage du générateur RGPD avec des entreprises populaires. 
            Cliquez sur une carte pour voir le formulaire pré-rempli automatiquement.
          </p>
        </div>
      </div>
    </div>

    <!-- Grille des entreprises -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Google -->
        <div class="company-card group">
          <div class="company-icon mr-4 bg-red-100 group-hover:bg-red-200 transition-colors">
            <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Google</h3>
            <p class="text-gray-600 mb-4">google.com</p>
            <div class="space-y-2 text-sm text-gray-600 mb-6">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <strong>DPO:</strong> dpo@google.com
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <strong>Privacy:</strong> privacy@google.com
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <strong>Legal:</strong> legal@google.com
              </div>
            </div>
            <a 
              href="http://localhost:3005/generator?company=Google&domain=google.com&dpo=dpo@google.com&privacy=privacy@google.com&legal=legal@google.com"
              class="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 text-center transition-colors font-semibold inline-block"
            >
              Tester Google
            </a>
          </div>
        </div>

        <!-- Facebook -->
        <div class="company-card group">
          <div class="company-icon mr-4 bg-blue-100 group-hover:bg-blue-200 transition-colors">
            <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Facebook</h3>
            <p class="text-gray-600 mb-4">facebook.com</p>
            <div class="space-y-2 text-sm text-gray-600 mb-6">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <strong>DPO:</strong> dpo@facebook.com
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <strong>Privacy:</strong> privacy@facebook.com
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <strong>Legal:</strong> legal@facebook.com
              </div>
            </div>
            <a 
              href="http://localhost:3005/generator?company=Facebook&domain=facebook.com&dpo=dpo@facebook.com&privacy=privacy@facebook.com&legal=legal@facebook.com"
              class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 text-center transition-colors font-semibold inline-block"
            >
              Tester Facebook
            </a>
          </div>
        </div>

        <!-- Amazon -->
        <div class="company-card group">
          <div class="company-icon mr-4 bg-orange-100 group-hover:bg-orange-200 transition-colors">
            <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.93 12.86c-.28-1.41-.35-2.68-.28-3.64.07-.96.35-1.63.84-2.01.49-.38 1.18-.57 2.07-.57.89 0 1.58.19 2.07.57.49.38.77 1.05.84 2.01.07.96 0 2.23-.28 3.64-.28 1.41-.84 2.71-1.68 3.89-.84 1.18-2.07 2.13-3.69 2.85-1.62.72-3.69 1.08-6.21 1.08s-4.59-.36-6.21-1.08c-1.62-.72-2.85-1.67-3.69-2.85-.84-1.18-1.4-2.48-1.68-3.89-.28-1.41-.35-2.68-.28-3.64.07-.96.35-1.63.84-2.01.49-.38 1.18-.57 2.07-.57.89 0 1.58.19 2.07.57.49.38.77 1.05.84 2.01.07.96 0 2.23-.28 3.64-.28 1.41-.84 2.71-1.68 3.89-.84 1.18-2.07 2.13-3.69 2.85-1.62.72-3.69 1.08-6.21 1.08s-4.59-.36-6.21-1.08c-1.62-.72-2.85-1.67-3.69-2.85-.84-1.18-1.4-2.48-1.68-3.89-.28-1.41-.35-2.68-.28-3.64.07-.96.35-1.63.84-2.01.49-.38 1.18-.57 2.07-.57.89 0 1.58.19 2.07.57.49.38.77 1.05.84 2.01.07.96 0 2.23-.28 3.64-.28 1.41-.84 2.71-1.68 3.89-.84 1.18-2.07 2.13-3.69 2.85-1.62.72-3.69 1.08-6.21 1.08s-4.59-.36-6.21-1.08c-1.62-.72-2.85-1.67-3.69-2.85-.84-1.18-1.4-2.48-1.68-3.89z"/>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Amazon</h3>
            <p class="text-gray-600 mb-4">amazon.com</p>
            <div class="space-y-2 text-sm text-gray-600 mb-6">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <strong>DPO:</strong> dpo@amazon.com
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <strong>Privacy:</strong> privacy@amazon.com
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <strong>Legal:</strong> legal@amazon.com
              </div>
            </div>
            <a 
              href="http://localhost:3005/generator?company=Amazon&domain=amazon.com&dpo=dpo@amazon.com&privacy=privacy@amazon.com&legal=legal@amazon.com"
              class="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 text-center transition-colors font-semibold inline-block"
            >
              Tester Amazon
            </a>
          </div>
        </div>

        <!-- Apple -->
        <div class="company-card group">
          <div class="company-icon mr-4 bg-gray-100 group-hover:bg-gray-200 transition-colors">
            <svg class="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Apple</h3>
            <p class="text-gray-600 mb-4">apple.com</p>
            <div class="space-y-2 text-sm text-gray-600 mb-6">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <strong>DPO:</strong> dpo@apple.com
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <strong>Privacy:</strong> privacy@apple.com
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <strong>Legal:</strong> legal@apple.com
              </div>
            </div>
            <a 
              href="http://localhost:3005/generator?company=Apple&domain=apple.com&dpo=dpo@apple.com&privacy=privacy@apple.com&legal=legal@apple.com"
              class="w-full bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 text-center transition-colors font-semibold inline-block"
            >
              Tester Apple
            </a>
          </div>
        </div>

        <!-- Microsoft -->
        <div class="company-card group">
          <div class="company-icon mr-4 bg-blue-100 group-hover:bg-blue-200 transition-colors">
            <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.5 2.75h-8a.75.75 0 00-.75.75v8c0 .414.336.75.75.75h8a.75.75 0 00.75-.75v-8a.75.75 0 00-.75-.75zM11.5 13.25h-8a.75.75 0 00-.75.75v8c0 .414.336.75.75.75h8a.75.75 0 00.75-.75v-8a.75.75 0 00-.75-.75zM22.5 2.75h-8a.75.75 0 00-.75.75v8c0 .414.336.75.75.75h8a.75.75 0 00.75-.75v-8a.75.75 0 00-.75-.75zM22.5 13.25h-8a.75.75 0 00-.75.75v8c0 .414.336.75.75.75h8a.75.75 0 00.75-.75v-8a.75.75 0 00-.75-.75z"/>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Microsoft</h3>
            <p class="text-gray-600 mb-4">microsoft.com</p>
            <div class="space-y-2 text-sm text-gray-600 mb-6">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <strong>DPO:</strong> dpo@microsoft.com
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <strong>Privacy:</strong> privacy@microsoft.com
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <strong>Legal:</strong> legal@microsoft.com
              </div>
            </div>
            <a 
              href="http://localhost:3005/generator?company=Microsoft&domain=microsoft.com&dpo=dpo@microsoft.com&privacy=privacy@microsoft.com&legal=legal@microsoft.com"
              class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 text-center transition-colors font-semibold inline-block"
            >
              Tester Microsoft
            </a>
          </div>
        </div>

        <!-- Netflix -->
        <div class="company-card group">
          <div class="company-icon mr-4 bg-red-100 group-hover:bg-red-200 transition-colors">
            <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5.398 0v.006c3.028 8.556 5.37 15.175 5.37 15.175L.984 8.027v-.006L5.398 0zm5.398 0v.006c3.028 8.556 5.37 15.175 5.37 15.175L6.382 8.027v-.006L10.796 0zm5.398 0v.006c3.028 8.556 5.37 15.175 5.37 15.175L11.78 8.027v-.006L16.194 0z"/>
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Netflix</h3>
            <p class="text-gray-600 mb-4">netflix.com</p>
            <div class="space-y-2 text-sm text-gray-600 mb-6">
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <strong>DPO:</strong> dpo@netflix.com
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <strong>Privacy:</strong> privacy@netflix.com
              </div>
              <div class="flex items-center">
                <svg class="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <strong>Legal:</strong> legal@netflix.com
              </div>
            </div>
            <a 
              href="http://localhost:3005/generator?company=Netflix&domain=netflix.com&dpo=dpo@netflix.com&privacy=privacy@netflix.com&legal=legal@netflix.com"
              class="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 text-center transition-colors font-semibold inline-block"
            >
              Tester Netflix
            </a>
          </div>
        </div>
      </div>

      <!-- Instructions -->
      <div class="mt-16 bg-white rounded-xl shadow-lg p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Comment ça marche ?</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 mb-3">1. Auto-remplissage automatique</h4>
            <p class="text-gray-600">
              Cliquez sur une carte d'entreprise. Le générateur RGPD s'ouvrira avec tous les champs 
              pré-remplis automatiquement grâce aux paramètres d'URL.
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-gray-900 mb-3">2. Paramètres d'URL</h4>
            <p class="text-gray-600">
              Les paramètres comme <code class="bg-gray-100 px-2 py-1 rounded">?company=Google&domain=google.com</code> 
              permettent de pré-remplir le formulaire sans saisie manuelle.
            </p>
          </div>
        </div>
      </div>

      <!-- Call to action -->
      <div class="mt-16 text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">Prêt à tester ?</h3>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="http://localhost:3005/generator"
            class="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
            Générateur RGPD (sans pré-remplissage)
          </a>
          
          <a 
            href="/waiting-list"
            class="btn-outline text-lg px-8 py-4 inline-flex items-center gap-3"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            Liste d'attente RGPD
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Meta tags pour SEO
useHead({
  title: 'Démonstration Auto-remplissage RGPD - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Testez l\'auto-remplissage du générateur RGPD avec des entreprises populaires. Voir le formulaire pré-rempli automatiquement.'
    }
  ]
})
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style> 