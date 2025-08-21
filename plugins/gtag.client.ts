export default defineNuxtPlugin(() => {
  // Only run in production
  if (process.env.NODE_ENV !== 'production') {
    console.log('Google Analytics disabled in development mode')
    return
  }

  // Google Analytics ID
  const GA_ID = 'G-9FHSG87X4G'

  // Initialize gtag
  window.dataLayer = window.dataLayer || []
  function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }

  // Configure gtag
  gtag('js', new Date())
  gtag('config', GA_ID, {
    page_title: document.title,
    page_location: window.location.href
  })

  // Track page views on route changes (using window location for compatibility)
  const trackPageChange = () => {
    gtag('config', GA_ID, {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    })
  }
  
  // Listen for navigation changes
  window.addEventListener('popstate', trackPageChange)

  // Provide gtag function globally
  return {
    provide: {
      gtag: gtag,
      trackEvent: (action: string, category: string, label?: string, value?: number) => {
        gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value
        })
      },
      trackPageView: (title?: string, location?: string) => {
        gtag('config', GA_ID, {
          page_title: title || document.title,
          page_location: location || window.location.href
        })
      },
      trackConversion: (conversionId: string, conversionLabel: string) => {
        gtag('event', 'conversion', {
          send_to: `${conversionId}/${conversionLabel}`
        })
      }
    }
  }
})

// Type declarations for global gtag
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
} 