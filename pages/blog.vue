<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header du blog -->
    <div class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            Blog RGPD & Protection des données
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos articles sur la conformité RGPD, les droits des utilisateurs, 
            et les meilleures pratiques pour protéger vos données personnelles.
          </p>
        </div>
      </div>
    </div>

    <!-- Liste des articles -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="article in articles" 
          :key="article.slug"
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <!-- Image de l'article -->
          <div class="aspect-w-16 aspect-h-9">
            <img 
              :src="article.image" 
              :alt="article.title"
              class="w-full h-48 object-cover"
            />
          </div>
          
          <!-- Contenu de l'article -->
          <div class="p-6">
            <!-- Catégorie -->
            <div class="flex items-center mb-3">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                    :class="getCategoryClass(article.category)">
                {{ article.category }}
              </span>
              <span class="text-sm text-gray-500 ml-3">
                {{ formatDate(article.date) }}
              </span>
            </div>
            
            <!-- Titre -->
            <h2 class="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
              {{ article.title }}
            </h2>
            
            <!-- Extrait -->
            <p class="text-gray-600 mb-4 line-clamp-3">
              {{ article.excerpt }}
            </p>
            
            <!-- Auteur -->
            <div class="flex items-center mb-4">
              <img 
                :src="article.author.avatar" 
                :alt="article.author.name"
                class="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <p class="text-sm font-medium text-gray-900">{{ article.author.name }}</p>
                <p class="text-xs text-gray-500">{{ article.author.role }}</p>
              </div>
            </div>
            
            <!-- Bouton lire plus -->
            <NuxtLink 
              :to="`/blog/${article.slug}`"
              class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
            >
              Lire l'article complet
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>

    <!-- Newsletter -->
    <div class="bg-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-4">
            Restez informé des dernières actualités RGPD
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Recevez nos articles et conseils directement dans votre boîte mail
          </p>
          <WaitingListButton 
            button-text="S'abonner au blog"
            button-classes="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            :show-icon="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Meta tags
useHead({
  title: 'Blog RGPD - Protection des données et conformité | DeleteMyData',
  meta: [
    { name: 'description', content: 'Découvrez nos articles sur la conformité RGPD, les droits des utilisateurs et les meilleures pratiques pour protéger vos données personnelles.' },
    { property: 'og:title', content: 'Blog RGPD - Protection des données et conformité' },
    { property: 'og:description', content: 'Articles et conseils sur la conformité RGPD et la protection des données personnelles.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://deletemydata.online/blog' }
  ]
})

// Articles du blog
const articles = ref([
  {
    slug: 'guide-rgpd-2024',
    title: 'Guide complet RGPD 2024 : Vos droits et obligations',
    excerpt: 'Découvrez tout ce que vous devez savoir sur le RGPD en 2024. Nous vous expliquons vos droits, les obligations des entreprises et comment exercer vos droits à la suppression des données.',
    image: '/images/blog/rgpd-guide-2024.jpg',
    category: 'Guide',
    date: '2024-01-15',
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
    author: {
      name: 'Thomas Dubois',
      role: 'Spécialiste Tech',
      avatar: '/images/team/thomas-dubois.jpg'
    }
  },
  {
    slug: 'droit-oubli-facebook',
    title: 'Le droit à l\'oubli sur Facebook : Guide pratique',
    excerpt: 'Facebook garde une trace de tout ce que vous faites. Découvrez comment exercer votre droit à l\'oubli et faire supprimer vos données personnelles du réseau social.',
    image: '/images/blog/facebook-right-to-be-forgotten.jpg',
    category: 'Tutoriel',
    date: '2024-01-05',
    author: {
      name: 'Marie Leroy',
      role: 'Avocate en droit numérique',
      avatar: '/images/team/marie-leroy.jpg'
    }
  },
  {
    slug: 'protection-donnees-entreprises',
    title: 'RGPD pour les entreprises : Comment se mettre en conformité',
    excerpt: 'Vous dirigez une entreprise ? Découvrez les étapes essentielles pour vous mettre en conformité RGPD et éviter les sanctions qui peuvent aller jusqu\'à 4% du CA.',
    image: '/images/blog/rgpd-entreprises.jpg',
    category: 'Conformité',
    date: '2024-01-01',
    author: {
      name: 'Pierre Moreau',
      role: 'Consultant RGPD',
      avatar: '/images/team/pierre-moreau.jpg'
    }
  },
  {
    slug: 'cookies-tracking',
    title: 'Cookies et tracking : Comment reprendre le contrôle',
    excerpt: 'Les cookies et le tracking en ligne vous inquiètent ? Apprenez à comprendre, gérer et limiter le suivi de votre activité sur internet.',
    image: '/images/blog/cookies-tracking.jpg',
    category: 'Sécurité',
    date: '2023-12-28',
    author: {
      name: 'Sophie Martin',
      role: 'Experte RGPD',
      avatar: '/images/team/sophie-martin.jpg'
    }
  },
  {
    slug: 'donnees-sante-privacy',
    title: 'Protection des données de santé : Les règles spécifiques',
    excerpt: 'Les données de santé sont particulièrement sensibles et protégées. Découvrez les règles spécifiques et comment les entreprises doivent les traiter.',
    image: '/images/blog/health-data-privacy.jpg',
    category: 'Santé',
    date: '2023-12-20',
    author: {
      name: 'Dr. Claire Bernard',
      role: 'Médecin et juriste',
      avatar: '/images/team/claire-bernard.jpg'
    }
  }
])

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
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 