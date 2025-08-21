/**
 * Composable pour utiliser Preline UI dans Nuxt 3
 */
export const usePreline = () => {
  /**
   * Initialise manuellement Preline UI
   * Utile après des changements dynamiques du DOM
   */
  const initPreline = () => {
    if (process.client && typeof window !== 'undefined') {
      if ((window as any).HSStaticMethods) {
        (window as any).HSStaticMethods.autoInit()
      }
    }
  }

  /**
   * Nettoyage des composants Preline
   * Utile avant de supprimer des éléments du DOM
   */
  const cleanupPreline = (components: string[] = ['all']) => {
    if (process.client && typeof window !== 'undefined') {
      if ((window as any).HSStaticMethods) {
        (window as any).HSStaticMethods.cleanCollection(components)
      }
    }
  }

  /**
   * Vérifie si Preline est disponible
   */
  const isPrelineAvailable = () => {
    return process.client && 
           typeof window !== 'undefined' && 
           (window as any).HSStaticMethods
  }

  /**
   * Initialise Preline après un délai
   * Utile pour les composants chargés dynamiquement
   */
  const initPrelineDelayed = (delay: number = 100) => {
    if (process.client) {
      setTimeout(() => {
        initPreline()
      }, delay)
    }
  }

  /**
   * Obtient une instance de composant Preline
   */
  const getPrelineInstance = (componentName: string, selector: string) => {
    if (process.client && typeof window !== 'undefined') {
      const component = (window as any)[componentName]
      if (component && component.getInstance) {
        return component.getInstance(selector)
      }
    }
    return null
  }

  return {
    initPreline,
    cleanupPreline,
    isPrelineAvailable,
    initPrelineDelayed,
    getPrelineInstance
  }
}