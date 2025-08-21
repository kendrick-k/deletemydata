import { shouldRedirectToMainDomain, getMainDomainUrl } from '~/utils/domain'

export default defineNuxtRouteMiddleware((to, from) => {
  // TEMPORARILY DISABLED to prevent redirect loops
  // TODO: Re-enable once domain redirects are properly configured
  return
  
  // Only run on client-side
  if (process.server) return
  
  // Wait for next tick to ensure window is available
  if (process.client) {
    nextTick(() => {
      try {
        const hostname = window.location.hostname
        const protocol = window.location.protocol
        
        // Check if we should redirect
        if (shouldRedirectToMainDomain(hostname)) {
          // Redirect to deletemydata.online
          const targetUrl = `${getMainDomainUrl(protocol)}${to.fullPath}`
          
          // Use 301 permanent redirect for SEO
          window.location.replace(targetUrl)
        }
      } catch (error) {
        console.warn('Redirect middleware error:', error)
      }
    })
  }
}) 