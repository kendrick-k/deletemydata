// URLs directes Unsplash pour le blog
// Basé sur https://unsplash.com/ - La source internet pour les visuels

// URLs fixes pour chaque catégorie de blog
export const BLOG_IMAGES = {
  'Guide': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&crop=center&q=80&auto=format&ixlib=rb-4.0.3',
  'Tutoriel': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center&q=80&auto=format&ixlib=rb-4.0.3',
  'Conformité': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center&q=80&auto=format&ixlib=rb-4.0.3',
  'Sécurité': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&crop=center&q=80&auto=format&ixlib=rb-4.0.3',
  'Santé': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center&q=80&auto=format&ixlib=rb-4.0.3'
}

// URLs pour les miniatures (400x300)
export const BLOG_THUMBNAILS = {
  'Guide': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center&q=80&auto=format&ixlib=rb-4.0.3',
  'Tutoriel': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center&q=80&auto=format&ixlib=rb-4.0.3',
  'Conformité': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center&q=80&auto=format&ixlib=rb-4.0.3',
  'Sécurité': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center&q=80&auto=format&ixlib=rb-4.0.3',
  'Santé': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center&q=80&auto=format&ixlib=rb-4.0.3'
}

// URLs pour les images hero (1200x600)
export const BLOG_HERO_IMAGES = {
  'Guide': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop&crop=center&q=80&auto=format&ixlib=rb-4.0.3',
  'Tutoriel': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop&crop=center&q=80&auto=format&ixlib=rb-4.0.3',
  'Conformité': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&crop=center&q=80&auto=format&ixlib=rb-4.0.3',
  'Sécurité': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop&crop=center&q=80&auto=format&ixlib=rb-4.0.3',
  'Santé': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&crop=center&q=80&auto=format&ixlib=rb-4.0.3'
}

// Fonctions simples pour récupérer les images
export function getBlogThumbnailUrl(category: string): string {
  return BLOG_THUMBNAILS[category as keyof typeof BLOG_THUMBNAILS] || BLOG_THUMBNAILS['Guide']
}

export function getBlogHeroUrl(category: string): string {
  return BLOG_HERO_IMAGES[category as keyof typeof BLOG_HERO_IMAGES] || BLOG_HERO_IMAGES['Guide']
}

// Attribution Unsplash
export const UNSPLASH_ATTRIBUTION = {
  'Guide': 'https://unsplash.com/photos/1557804506-669a67965ba0?utm_source=deletemydata&utm_medium=referral',
  'Tutoriel': 'https://unsplash.com/photos/1563013544-824ae1b704d3?utm_source=deletemydata&utm_medium=referral',
  'Conformité': 'https://unsplash.com/photos/1558618666-fcd25c85cd64?utm_source=deletemydata&utm_medium=referral',
  'Sécurité': 'https://images.unsplash.com/photos/1557804506-669a67965ba0?utm_source=deletemydata&utm_medium=referral',
  'Santé': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?utm_source=deletemydata&utm_medium=referral'
}

// Avatars d'équipe depuis Unsplash (URLs simples et fiables)
export const TEAM_AVATARS = {
  'sophie-martin': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop&q=80',
  'thomas-dubois': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=150&h=150&fit=crop&q=80',
  'marie-leroy': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop&q=80',
  'pierre-moreau': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop&q=80',
  'claire-bernard': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=150&h=150&fit=crop&q=80'
}

// Fonction pour récupérer l'avatar d'un membre de l'équipe
export function getTeamAvatar(memberName: string): string {
  const key = memberName.toLowerCase().replace(' ', '-')
  return TEAM_AVATARS[key as keyof typeof TEAM_AVATARS] || TEAM_AVATARS['sophie-martin']
} 