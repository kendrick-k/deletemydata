declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: {
        event_category?: string
        event_label?: string
        value?: number
        page_title?: string
        page_location?: string
        send_to?: string
        currency?: string
        [key: string]: any
      }
    ) => void
    dataLayer: any[]
  }
}

export {} 