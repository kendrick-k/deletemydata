<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Blog <span class="gradient-text">DeleteMyData</span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Actualités, conseils et guides sur la protection des données personnelles, 
          le RGPD et vos droits numériques
        </p>
      </div>
    </section>

    <!-- Filtres et recherche -->
    <section class="py-12 bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row gap-6 items-center justify-between">
          <!-- Recherche -->
          <div class="relative flex-1 max-w-md">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Rechercher un article..."
              class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>

          <!-- Filtres par catégorie -->
          <div class="flex flex-wrap gap-3">
            <button
              v-for="category in categories"
              :key="category.id"
              @click="selectedCategory = selectedCategory === category.id ? null : category.id"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              {{ category.name }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Articles en vedette -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Articles en vedette</h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <article v-for="article in featuredArticles" :key="article.id" class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <img :src="article.image" :alt="article.title" class="w-full h-48 object-cover">
              <div class="p-6">
                <div class="flex items-center gap-2 mb-3">
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {{ article.category }}
                  </span>
                  <span class="text-sm text-gray-500">{{ article.readTime }} min de lecture</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  <a :href="`/blog/${article.slug}`" class="hover:text-blue-600 transition-colors">
                    {{ article.title }}
                  </a>
                </h3>
                <p class="text-gray-600 mb-4 leading-relaxed">{{ article.excerpt }}</p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <img :src="article.author.avatar" :alt="article.author.name" class="w-8 h-8 rounded-full">
                    <div>
                      <p class="text-sm font-medium text-gray-900">{{ article.author.name }}</p>
                      <p class="text-xs text-gray-500">{{ article.publishedAt }}</p>
                    </div>
                  </div>
                  <a :href="`/blog/${article.slug}`" class="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Lire l'article →
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>

        <!-- Tous les articles -->
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Tous les articles</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article v-for="article in filteredArticles" :key="article.id" class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <img :src="article.image" :alt="article.title" class="w-full h-48 object-cover">
              <div class="p-6">
                <div class="flex items-center gap-2 mb-3">
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {{ article.category }}
                  </span>
                  <span class="text-sm text-gray-500">{{ article.readTime }} min</span>
                </div>
                <h3 class="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  <a :href="`/blog/${article.slug}`" class="hover:text-blue-600 transition-colors">
                    {{ article.title }}
                  </a>
                </h3>
                <p class="text-gray-600 mb-4 leading-relaxed text-sm">{{ article.excerpt }}</p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <img :src="article.author.avatar" :alt="article.author.name" class="w-6 h-6 rounded-full">
                    <span class="text-sm text-gray-700">{{ article.author.name }}</span>
                  </div>
                  <span class="text-xs text-gray-500">{{ article.publishedAt }}</span>
                </div>
              </div>
            </article>
          </div>
        </div>

        <!-- Pagination -->
        <div class="mt-16 flex justify-center">
          <nav class="flex items-center gap-2">
            <button class="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed">
              Précédent
            </button>
            <button class="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
            <button class="px-3 py-2 text-gray-700 hover:text-gray-900">2</button>
            <button class="px-3 py-2 text-gray-700 hover:text-gray-900">3</button>
            <button class="px-3 py-2 text-gray-500 hover:text-gray-700">
              Suivant
            </button>
          </nav>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-20 bg-blue-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Restez informé</h2>
        <p class="text-xl text-blue-100 mb-8 leading-relaxed">
          Recevez nos derniers articles et conseils sur la protection de vos données personnelles
        </p>
        <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Votre adresse email"
            class="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
          <button class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            S'abonner
          </button>
        </div>
        <p class="text-blue-200 text-sm mt-4">
          Désabonnement à tout moment • Pas de spam
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Meta tags pour SEO
useHead({
  title: 'Blog - DeleteMyData',
  meta: [
    {
      name: 'description',
      content: 'Découvrez nos articles sur la protection des données, le RGPD et vos droits numériques. Conseils et guides pratiques pour reprendre le contrôle de vos données.'
    }
  ]
})

// État de la recherche et filtres
const searchQuery = ref('')
const selectedCategory = ref(null)

// Catégories d'articles
const categories = [
  { id: 'rgpd', name: 'RGPD' },
  { id: 'delete-act', name: 'Delete Act' },
  { id: 'conseils', name: 'Conseils' },
  { id: 'actualites', name: 'Actualités' },
  { id: 'guides', name: 'Guides' }
]

// Articles en vedette
const featuredArticles = ref([
  {
    id: 1,
    title: 'Comment exercer votre droit à l\'oubli en 2024',
    excerpt: 'Guide complet pour supprimer vos données personnelles des entreprises qui les détiennent, conformément au RGPD et au Delete Act américain.',
    category: 'RGPD',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    slug: 'droit-oubli-2024',
    publishedAt: '15 janvier 2024',
    author: {
      name: 'Sophie Dubois',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    }
  },
  {
    id: 2,
    title: 'Les entreprises qui collectent le plus de données personnelles',
    excerpt: 'Découvrez quelles entreprises collectent et utilisent vos données personnelles, et comment les faire supprimer efficacement.',
    category: 'Actualités',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
    slug: 'entreprises-collecte-donnees',
    publishedAt: '12 janvier 2024',
    author: {
      name: 'Alexandre Martin',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    }
  }
])

// Tous les articles
const allArticles = ref([
  {
    id: 3,
    title: 'RGPD vs Delete Act : Les différences expliquées',
    excerpt: 'Comparaison détaillée entre le règlement européen et la loi américaine sur la suppression des données.',
    category: 'RGPD',
    readTime: 5,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop',
    slug: 'rgpd-vs-delete-act',
    publishedAt: '10 janvier 2024',
    author: {
      name: 'Thomas Leroy',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    }
  },
  {
    id: 4,
    title: '5 erreurs à éviter lors de vos demandes de suppression',
    excerpt: 'Les pièges courants qui peuvent faire échouer vos demandes RGPD et comment les éviter.',
    category: 'Conseils',
    readTime: 4,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
    slug: 'erreurs-demandes-suppression',
    publishedAt: '8 janvier 2024',
    author: {
      name: 'Sophie Dubois',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    }
  },
  {
    id: 5,
    title: 'Comment vérifier si vos données ont été supprimées',
    excerpt: 'Méthodes et outils pour confirmer que vos demandes de suppression ont été traitées correctement.',
    category: 'Guides',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    slug: 'verifier-suppression-donnees',
    publishedAt: '5 janvier 2024',
    author: {
      name: 'Alexandre Martin',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    }
  },
  {
    id: 6,
    title: 'Les nouvelles obligations des entreprises en 2024',
    excerpt: 'Mise à jour sur les nouvelles réglementations et obligations légales pour la protection des données.',
    category: 'Actualités',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop',
    slug: 'nouvelles-obligations-2024',
    publishedAt: '3 janvier 2024',
    author: {
      name: 'Thomas Leroy',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    }
  }
])

// Articles filtrés
const filteredArticles = computed(() => {
  let articles = allArticles.value

  // Filtre par catégorie
  if (selectedCategory.value) {
    articles = articles.filter(article => 
      article.category.toLowerCase() === selectedCategory.value
    )
  }

  // Filtre par recherche
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    articles = articles.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query)
    )
  }

  return articles
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