import { shouldRedirectToMainDomain, getMainDomainUrl } from '~/utils/domain'

export default defineNuxtRouteMiddleware((to, from) => {
  // Only run on client-side
  if (process.server) return
  
  // Wait for next tick to ensure window is available
  if (process.client) {
    nextTick(() => {
      try {
        const hostname = window.location.hostname
        const currentUrl = window.location.href
        const targetDomain = 'deletemydata.online'
        
        // Prevent infinite loops - check if we're already on the target domain
        if (hostname === targetDomain || hostname.endsWith(`.${targetDomain}`)) {
          return
        }
        
        // Check if we should redirect
        if (shouldRedirectToMainDomain(hostname)) {
          // Build the target URL with proper protocol
          const targetUrl = `https://${targetDomain}${to.fullPath}`
          
          // Prevent redirect loops by checking if we're not already redirecting
          if (currentUrl !== targetUrl) {
            console.log(`Redirecting from ${currentUrl} to ${targetUrl}`)
            // Use 301 permanent redirect for SEO
            window.location.replace(targetUrl)
          }
        }
      } catch (error) {
        console.warn('Redirect middleware error:', error)
      }
    })
  }
}) 