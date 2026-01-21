export default defineNuxtPlugin(() => {
  if (process.server) return

  // 🔒 Only allow on textilecolorswatch.com (including www subdomain)
  const allowedHost = 'deletemydata.online'
  const currentHostname = window.location.hostname

  // ✅ Only allow top-level (no iframe)
  const isTopLevel = (() => {
    try {
      return window.top === window.self
    } catch {
      return false
    }
  })()

  // Allow exact match or www subdomain
  const isAllowed = (currentHostname === allowedHost || currentHostname === `www.${allowedHost}`) && isTopLevel
  if (!isAllowed) return

  useHead({
    script: [
      {
        src: 'https://signalskit.com/widget.js',
        defer: true,
        'data-api-key':
          'signalskit_2811fe2ff40cac05681bc6817e8891c36f903701edaba1661c2863cd82b48111',
        'data-api-url': 'https://signalskit.com',
        'data-consent-required': 'false',
        'data-datalayer': 'true',
      },
    ],
  })
})
