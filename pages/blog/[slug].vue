<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header de l'article -->
    <div class="bg-white shadow-sm border-b">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center">
          <!-- Catégorie -->
          <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4"
                :class="getCategoryClass(article.category)">
            {{ article.category }}
          </span>
          
          <!-- Titre -->
          <h1 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {{ article.title }}
          </h1>
          
          <!-- Auteur et date -->
          <div class="flex items-center justify-center mb-8">
            <img 
              :src="article.author.avatar" 
              :alt="article.author.name"
              class="w-12 h-12 rounded-full mr-4"
            />
            <div class="text-left">
              <p class="text-lg font-medium text-gray-900">{{ article.author.name }}</p>
              <p class="text-gray-600">{{ article.author.role }}</p>
              <p class="text-sm text-gray-500">{{ formatDate(article.date) }}</p>
            </div>
          </div>
          
          <!-- Image principale -->
          <img 
            :src="article.image" 
            :alt="article.title"
            class="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>

    <!-- Contenu de l'article -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <!-- Extrait -->
        <div class="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
          <p class="text-lg text-blue-800 font-medium">
            {{ article.excerpt }}
          </p>
        </div>

        <!-- Contenu de l'article -->
        <div class="prose prose-lg max-w-none">
          <div v-html="article.content"></div>
        </div>

        <!-- Call to action -->
        <div class="mt-12 p-6 bg-gray-50 rounded-lg text-center">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            Prêt à reprendre le contrôle de vos données ?
          </h3>
          <p class="text-gray-600 mb-6">
            Utilisez notre générateur gratuit pour créer vos demandes RGPD
          </p>
          <a 
            href="http://localhost:3005/generator"
            class="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
          >
            Commencer gratuitement
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Articles similaires -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
        Articles similaires
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article 
          v-for="relatedArticle in relatedArticles" 
          :key="relatedArticle.slug"
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img 
            :src="relatedArticle.image" 
            :alt="relatedArticle.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3"
                  :class="getCategoryClass(relatedArticle.category)">
              {{ relatedArticle.category }}
            </span>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">
              {{ relatedArticle.title }}
            </h3>
            <p class="text-gray-600 mb-4 text-sm">
              {{ relatedArticle.excerpt }}
            </p>
            <NuxtLink 
              :to="`/blog/${relatedArticle.slug}`"
              class="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Lire l'article →
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Récupérer le slug de l'article depuis l'URL
const route = useRoute()
const slug = route.params.slug as string

// Meta tags dynamiques
useHead(() => ({
  title: `${article.value?.title} | Blog DeleteMyData`,
  meta: [
    { name: 'description', content: article.value?.excerpt },
    { property: 'og:title', content: article.value?.title },
    { property: 'og:description', content: article.value?.excerpt },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: `https://deletemydata.online/blog/${slug}` }
  ]
}))

// Base de données des articles (en production, ceci viendrait d'une API)
const articles = ref([
  {
    slug: 'guide-rgpd-2024',
    title: 'Guide complet RGPD 2024 : Vos droits et obligations',
    excerpt: 'Découvrez tout ce que vous devez savoir sur le RGPD en 2024. Nous vous expliquons vos droits, les obligations des entreprises et comment exercer vos droits à la suppression des données.',
    image: '/images/blog/rgpd-guide-2024.jpg',
    category: 'Guide',
    date: '2024-01-15',
    content: `
      <h2>Qu'est-ce que le RGPD ?</h2>
      <p>Le Règlement Général sur la Protection des Données (RGPD) est un texte de référence européen qui encadre le traitement des données personnelles. Il s'applique à toutes les organisations, publiques et privées, qui traitent des données personnelles pour leur compte ou non.</p>
      
      <h2>Vos droits en tant qu'utilisateur</h2>
      <ul>
        <li><strong>Droit d'accès :</strong> Vous pouvez demander à une entreprise quelles données elle détient sur vous</li>
        <li><strong>Droit de rectification :</strong> Vous pouvez demander la correction de données inexactes</li>
        <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
        <li><strong>Droit à la portabilité :</strong> Vous pouvez récupérer vos données dans un format réutilisable</li>
      </ul>
      
      <h2>Comment exercer vos droits</h2>
      <p>Pour exercer vos droits RGPD, vous devez adresser une demande écrite à l'entreprise concernée. Notre générateur de demandes vous aide à créer des lettres personnalisées et conformes.</p>
      
      <h2>Les obligations des entreprises</h2>
      <p>Les entreprises ont l'obligation de :</p>
      <ul>
        <li>Traiter vos données de manière licite, loyale et transparente</li>
        <li>Collecter uniquement les données nécessaires</li>
        <li>Assurer la sécurité de vos données</li>
        <li>Vous informer de vos droits</li>
        <li>Répondre à vos demandes dans un délai d'un mois</li>
      </ul>
    `,
    author: {
      name: 'Sophie Martin',
      role: 'Experte RGPD',
      avatar: '/images/team/sophie-martin.jpg'
    }
  },
  {
    slug: 'supprimer-donnees-google',
    title: 'Comment supprimer vos données de Google en 2024',
    excerpt: 'Google collecte énormément de données sur vous. Apprenez comment identifier, demander et obtenir la suppression de vos données personnelles stockées par Google.',
    image: '/images/blog/google-data-deletion.jpg',
    category: 'Tutoriel',
    date: '2024-01-10',
    content: `
      <h2>Quelles données Google collecte-t-il ?</h2>
      <p>Google collecte une quantité impressionnante de données sur vous :</p>
      <ul>
        <li>Historique de recherche</li>
        <li>Localisation via Google Maps</li>
        <li>Emails et contacts</li>
        <li>Photos et vidéos</li>
        <li>Historique YouTube</li>
        <li>Données de navigation Chrome</li>
      </ul>
      
      <h2>Étape 1 : Identifier vos données</h2>
      <p>Commencez par visiter <a href="https://myactivity.google.com" target="_blank" class="text-blue-600 hover:underline">myactivity.google.com</a> pour voir toutes vos activités enregistrées.</p>
      
      <h2>Étape 2 : Demander la suppression</h2>
      <p>Utilisez notre générateur de demandes RGPD pour créer une lettre personnalisée demandant la suppression de vos données.</p>
      
      <h2>Étape 3 : Suivre votre demande</h2>
      <p>Google doit répondre dans un délai d'un mois. Gardez une trace de votre demande et de la réponse.</p>
    `,
    author: {
      name: 'Thomas Dubois',
      role: 'Spécialiste Tech',
      avatar: '/images/team/thomas-dubois.jpg'
    }
  }
  // Ajoutez d'autres articles ici
])

// Trouver l'article correspondant au slug
const article = computed(() => 
  articles.value.find(a => a.slug === slug)
)

// Articles similaires (exclure l'article actuel)
const relatedArticles = computed(() => 
  articles.value.filter(a => a.slug !== slug).slice(0, 3)
)

// Fonction pour obtenir la classe CSS de la catégorie
const getCategoryClass = (category: string) => {
  const classes = {
    'Guide': 'bg-blue-100 text-blue-800',
    'Tutoriel': 'bg-green-100 text-green-800',
    'Conformité': 'bg-purple-100 text-purple-800',
    'Sécurité': 'bg-red-100 text-red-800',
    'Santé': 'bg-pink-100 text-pink-800'
  }
  return classes[category as keyof typeof classes] || 'bg-gray-100 text-gray-800'
}

// Fonction pour formater la date
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Rediriger si l'article n'existe pas
if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Article non trouvé'
  })
}
</script>

<style scoped>
.prose {
  @apply text-gray-900;
}

.prose h2 {
  @apply text-2xl font-bold mt-8 mb-4 text-gray-900;
}

.prose h3 {
  @apply text-xl font-semibold mt-6 mb-3 text-gray-900;
}

.prose p {
  @apply mb-4 text-gray-700 leading-relaxed;
}

.prose ul {
  @apply mb-4 pl-6;
}

.prose li {
  @apply mb-2 text-gray-700;
}

.prose a {
  @apply text-blue-600 hover:text-blue-700 underline;
}

.prose strong {
  @apply font-semibold text-gray-900;
}
</style> 