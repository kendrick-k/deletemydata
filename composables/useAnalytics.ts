export const useAnalytics = () => {
  const { $gtag, $trackEvent, $trackPageView, $trackConversion } = useNuxtApp()

  // Track custom events
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (process.env.NODE_ENV === 'production') {
      $trackEvent(action, category, label, value)
    }
  }

  // Track page views
  const trackPageView = (title?: string, location?: string) => {
    if (process.env.NODE_ENV === 'production') {
      $trackPageView(title, location)
    }
  }

  // Track conversions
  const trackConversion = (conversionId: string, conversionLabel: string) => {
    if (process.env.NODE_ENV === 'production') {
      $trackConversion(conversionId, conversionLabel)
    }
  }

  // Track form submissions
  const trackFormSubmission = (formName: string, success: boolean = true) => {
    trackEvent(
      success ? 'form_submit_success' : 'form_submit_error',
      'form_interaction',
      formName
    )
  }

  // Track button clicks
  const trackButtonClick = (buttonName: string, location: string) => {
    trackEvent('button_click', 'user_interaction', buttonName, undefined)
  }

  // Track waiting list signups
  const trackWaitingListSignup = (source: string) => {
    trackEvent('waiting_list_signup', 'conversion', source)
  }

  // Track generator usage
  const trackGeneratorUsage = (company: string, requestType: string) => {
    trackEvent('generator_used', 'feature_usage', company, undefined)
    trackEvent('request_type_selected', 'user_preference', requestType)
  }

  // Track company card interactions
  const trackCompanyCardClick = (company: string, domain: string) => {
    trackEvent('company_card_clicked', 'content_interaction', company, undefined)
    trackEvent('company_selected', 'user_choice', domain)
  }

  // Track navigation
  const trackNavigation = (from: string, to: string) => {
    trackEvent('navigation', 'user_journey', `${from} -> ${to}`)
  }

  // Track time on page
  const trackTimeOnPage = (page: string, timeSpent: number) => {
    trackEvent('time_on_page', 'engagement', page, Math.round(timeSpent / 1000))
  }

  // Track scroll depth
  const trackScrollDepth = (page: string, depth: number) => {
    trackEvent('scroll_depth', 'engagement', page, depth)
  }

  // Track external links
  const trackExternalLink = (url: string, linkText: string) => {
    trackEvent('external_link_click', 'outbound_click', linkText, undefined)
  }

  return {
    trackEvent,
    trackPageView,
    trackConversion,
    trackFormSubmission,
    trackButtonClick,
    trackWaitingListSignup,
    trackGeneratorUsage,
    trackCompanyCardClick,
    trackNavigation,
    trackTimeOnPage,
    trackScrollDepth,
    trackExternalLink
  }
} 