<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="text-center">
          <!-- Catégorie -->
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            Tutoriel
          </div>
          
          <!-- Titre -->
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Comment supprimer vos données Google en 2024
          </h1>
          
          <!-- Extrait -->
          <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Guide complet pour reprendre le contrôle de vos données personnelles stockées par Google. 
            Découvrez comment supprimer votre historique, localisation, et autres informations sensibles.
          </p>
          
          <!-- Métadonnées -->
          <div class="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div class="flex items-center">
              <img 
                :src="article.author.avatar" 
                :alt="article.author.name"
                class="w-8 h-8 rounded-full mr-3"
              />
              <span>{{ article.author.name }}</span>
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              {{ formatDate(article.date) }}
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              8 min de lecture
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contenu de l'article -->
    <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-gray-600 mb-8 leading-relaxed">
          Google collecte une quantité impressionnante de données sur ses utilisateurs. 
          De votre historique de recherche à votre localisation en passant par vos emails, 
          l'entreprise américaine sait presque tout de vous. Voici comment reprendre le contrôle.
        </p>

        <h2>Pourquoi supprimer vos données Google ?</h2>
        <p>
          Google utilise vos données pour personnaliser la publicité, améliorer ses services 
          et parfois les partager avec des tiers. Voici les principales raisons de supprimer 
          ces informations :
        </p>
        <ul>
          <li><strong>Protection de la vie privée :</strong> Éviter le profilage publicitaire</li>
          <li><strong>Sécurité :</strong> Réduire les risques en cas de fuite de données</li>
          <li><strong>Contrôle :</strong> Reprendre la maîtrise de vos informations personnelles</li>
          <li><strong>Conformité RGPD :</strong> Exercer votre droit à l'effacement</li>
        </ul>

        <h2>1. Supprimer l'historique de recherche</h2>
        <p>
          Votre historique de recherche Google contient toutes vos requêtes, 
          les sites visités et même les vidéos regardées sur YouTube.
        </p>
        <ol>
          <li>Allez sur <a href="https://myactivity.google.com" target="_blank" class="text-blue-600 hover:text-blue-700 underline">myactivity.google.com</a></li>
          <li>Connectez-vous à votre compte Google</li>
          <li>Cliquez sur "Supprimer l'activité"</li>
          <li>Choisissez la période (dernière heure, jour, semaine, mois, tout)</li>
          <li>Confirmez la suppression</li>
        </ol>

        <h2>2. Effacer l'historique de localisation</h2>
        <p>
          Google Maps enregistre tous vos déplacements si vous avez activé l'historique des positions.
        </p>
        <ol>
          <li>Rendez-vous sur <a href="https://myactivity.google.com/activitycontrols" target="_blank" class="text-blue-600 hover:text-blue-700 underline">myactivity.google.com/activitycontrols</a></li>
          <li>Désactivez "Historique des positions"</li>
          <li>Cliquez sur "Supprimer tout l'historique des positions"</li>
          <li>Confirmez en tapant "SUPPRIMER"</li>
        </ol>

        <h2>3. Nettoyer Gmail et Drive</h2>
        <p>
          Vos emails et documents stockés dans le cloud Google contiennent souvent 
          des informations sensibles.
        </p>
        <ul>
          <li><strong>Gmail :</strong> Supprimez les emails anciens et inutiles</li>
          <li><strong>Drive :</strong> Videz la corbeille et supprimez les fichiers obsolètes</li>
          <li><strong>Photos :</strong> Supprimez les photos non désirées</li>
        </ul>

        <h2>4. Désactiver la collecte automatique</h2>
        <p>
          Pour éviter que Google continue de collecter vos données à l'avenir :
        </p>
        <ol>
          <li>Allez dans les <a href="https://myaccount.google.com/privacy" target="_blank" class="text-blue-600 hover:text-blue-700 underline">paramètres de confidentialité</a></li>
          <li>Désactivez "Personnalisation des annonces"</li>
          <li>Désactivez "Historique des applications et du Web"</li>
          <li>Désactivez "Historique des positions"</li>
          <li>Désactivez "Historique YouTube"</li>
        </ol>

        <h2>5. Utiliser des alternatives respectueuses de la vie privée</h2>
        <p>
          Remplacer Google par des alternatives plus respectueuses de la vie privée :
        </p>
        <ul>
          <li><strong>Recherche :</strong> DuckDuckGo, Qwant, Startpage</li>
          <li><strong>Email :</strong> ProtonMail, Tutanota, Posteo</li>
          <li><strong>Stockage :</strong> Nextcloud, Synology, pCloud</li>
          <li><strong>Maps :</strong> OpenStreetMap, Here WeGo</li>
        </ul>

        <h2>6. Exercer vos droits RGPD</h2>
        <p>
          En tant que citoyen européen, vous avez le droit de demander la suppression 
          complète de vos données personnelles.
        </p>
        <ol>
          <li>Utilisez notre <a href="/generator" class="text-blue-600 hover:text-blue-700 underline">générateur de demandes RGPD</a></li>
          <li>Choisissez "Google" dans la liste des entreprises</li>
          <li>Personnalisez votre demande</li>
          <li>Générez et envoyez votre demande</li>
        </ol>

        <h2>Précautions importantes</h2>
        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h3 class="text-yellow-800 font-semibold mb-3">⚠️ Attention</h3>
          <ul class="text-yellow-700 space-y-2">
            <li>La suppression est irréversible</li>
            <li>Sauvegardez les données importantes avant suppression</li>
            <li>Certaines données peuvent être conservées pour des raisons légales</li>
            <li>La suppression peut affecter le fonctionnement de certains services</li>
          </ul>
        </div>

        <h2>Conclusion</h2>
        <p>
          Reprendre le contrôle de vos données Google est un processus qui demande du temps 
          et de la vigilance. En combinant suppression manuelle, désactivation des collectes 
          automatiques et exercice de vos droits RGPD, vous pouvez considérablement 
          réduire l'empreinte numérique que vous laissez derrière vous.
        </p>

        <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 class="text-blue-800 font-semibold mb-3">🚀 Prêt à agir ?</h3>
          <p class="text-blue-700 mb-4">
            Utilisez notre générateur de demandes RGPD pour exercer vos droits 
            de manière professionnelle et efficace.
          </p>
          <a href="/generator" class="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Commencer maintenant
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </article>

    <!-- Articles connexes -->
    <section class="bg-gray-100 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Articles connexes</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              :src="relatedArticles[0].image" 
              :alt="relatedArticles[0].title"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                <NuxtLink :to="`/blog/${relatedArticles[0].slug}`" class="hover:text-blue-600 transition-colors">
                  {{ relatedArticles[0].title }}
                </NuxtLink>
              </h3>
              <p class="text-gray-600 mb-4">{{ relatedArticles[0].excerpt }}</p>
            </div>
          </article>
          
          <article class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              :src="relatedArticles[1].image" 
              :alt="relatedArticles[1].title"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                <NuxtLink :to="`/blog/${relatedArticles[1].slug}`" class="hover:text-blue-600 transition-colors">
                  {{ relatedArticles[1].title }}
                </NuxtLink>
              </h3>
              <p class="text-gray-600 mb-4">{{ relatedArticles[1].excerpt }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Meta tags pour SEO
useHead({
  title: 'Comment supprimer vos données Google en 2024 - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Guide complet pour supprimer vos données Google : historique de recherche, localisation, Gmail, Drive. Reprenez le contrôle de votre vie privée numérique.'
    },
    {
      name: 'keywords',
      content: 'supprimer données Google, RGPD, vie privée, historique recherche, localisation, Gmail, Drive, protection données'
    }
  ]
})

// Données de l'article
const article = {
  title: 'Comment supprimer vos données Google en 2024',
  slug: 'supprimer-donnees-google',
  excerpt: 'Guide complet pour reprendre le contrôle de vos données personnelles stockées par Google. Découvrez comment supprimer votre historique, localisation, et autres informations sensibles.',
  content: '',
  category: 'Tutoriel',
  author: {
    name: 'Thomas Dubois',
    role: 'Expert RGPD',
    avatar: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=150&h=150&fit=crop&q=80'
  },
  date: '2024-01-15',
  image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=400&fit=crop&q=80'
}

// Articles connexes
const relatedArticles = [
  {
    slug: 'guide-rgpd-2024',
    title: 'Guide complet RGPD 2024 : Vos droits et obligations',
    excerpt: 'Tout ce que vous devez savoir sur le Règlement Général sur la Protection des Données en 2024.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop&q=80'
  },
  {
    slug: 'comment-rediger-demande-suppression-rgpd',
    title: 'Comment rédiger une demande de suppression RGPD efficace',
    excerpt: 'Apprenez à rédiger des demandes de suppression de données personnelles qui obtiennent des résultats.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop&q=80'
  }
]

// Fonction de formatage de date
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script> 