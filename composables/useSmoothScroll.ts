export const useSmoothScroll = () => {
  /**
   * Scroll smooth vers un élément ou une position
   */
  const scrollTo = (target: string | HTMLElement | number, options?: ScrollToOptions) => {
    const defaultOptions: ScrollToOptions = {
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    }

    const scrollOptions = { ...defaultOptions, ...options }

    if (typeof target === 'string') {
      // Si c'est un sélecteur CSS
      const element = document.querySelector(target)
      if (element) {
        element.scrollIntoView(scrollOptions)
      }
    } else if (target instanceof HTMLElement) {
      // Si c'est un élément DOM
      target.scrollIntoView(scrollOptions)
    } else if (typeof target === 'number') {
      // Si c'est une position Y
      window.scrollTo({
        top: target,
        behavior: 'smooth'
      })
    }
  }

  /**
   * Scroll vers une section par son ID
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  /**
   * Scroll vers le haut de la page
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  /**
   * Scroll vers le bas de la page
   */
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }

  /**
   * Vérifie si le smooth scroll est supporté
   */
  const isSmoothScrollSupported = () => {
    return 'scrollBehavior' in document.documentElement.style
  }

  /**
   * Active le smooth scroll pour tous les liens d'ancres
   */
  const enableSmoothScrollForAnchors = () => {
    if (!isSmoothScrollSupported()) {
      // Fallback pour les navigateurs qui ne supportent pas le smooth scroll
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement
        const link = target.closest('a[href^="#"]') as HTMLAnchorElement
        
        if (link) {
          e.preventDefault()
          const href = link.getAttribute('href')
          if (href && href !== '#') {
            const targetElement = document.querySelector(href)
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'auto',
                block: 'start'
              })
            }
          }
        }
      })
    }
  }

  return {
    scrollTo,
    scrollToSection,
    scrollToTop,
    scrollToBottom,
    isSmoothScrollSupported,
    enableSmoothScrollForAnchors
  }
} 