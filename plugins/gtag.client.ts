export default defineNuxtPlugin(() => {
  // Google Analytics ID
  const GA_ID = 'G-9FHSG87X4G'

  // Only run in production
  if (process.env.NODE_ENV !== 'production') {
    console.log('Google Analytics disabled in development mode')
    return
  }

  // Load Google Analytics script dynamically
  const loadGA = () => {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script)

    // Initialize gtag after script loads
    script.onload = () => {
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

      // Make gtag globally available
      window.gtag = gtag
    }
  }

  // Track page views on route changes (using window location for compatibility)
  const trackPageChange = () => {
    if (window.gtag) {
      window.gtag('config', GA_ID, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      })
    }
  }
  
  // Listen for navigation changes
  window.addEventListener('popstate', trackPageChange)

  // Load Google Analytics
  loadGA()

  // Provide gtag function globally
  return {
    provide: {
      gtag: () => window.gtag,
      trackEvent: (action: string, category: string, label?: string, value?: number) => {
        if (window.gtag) {
          window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value
          })
        }
      },
      trackPageView: (title?: string, location?: string) => {
        if (window.gtag) {
          window.gtag('config', GA_ID, {
            page_title: title || document.title,
            page_location: location || window.location.href
          })
        }
      },
      trackConversion: (conversionId: string, conversionLabel: string) => {
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: `${conversionId}/${conversionLabel}`
          })
        }
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