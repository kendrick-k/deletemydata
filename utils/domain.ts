/**
 * Check if the current domain should be redirected to deletemydata.online
 */
export const shouldRedirectToMainDomain = (hostname: string): boolean => {
  // Allow localhost and deletemydata.online
  if (hostname === 'localhost' || 
      hostname === '127.0.0.1' || 
      hostname === 'deletemydata.online' ||
      hostname.endsWith('.deletemydata.online')) {
    return false
  }
  
  // Redirect from Netlify domains to main domain
  if (hostname.endsWith('.netlify.app') || 
      hostname.endsWith('.netlify.com')) {
    return true
  }
  
  // Don't redirect from other domains to avoid loops
  return false
}

/**
 * Get the main domain URL with proper protocol
 */
export const getMainDomainUrl = (protocol: string = 'https'): string => {
  // Ensure we always use https for production
  const finalProtocol = protocol === 'https:' ? 'https' : 'https'
  return `${finalProtocol}://deletemydata.online`
}

/**
 * Check if we're in development mode
 */
export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development' || 
         process.client && (window.location.hostname === 'localhost' || 
                           window.location.hostname === '127.0.0.1')
} 