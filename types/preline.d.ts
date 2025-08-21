/**
 * Types TypeScript pour Preline UI
 */

declare global {
  interface Window {
    HSStaticMethods: {
      autoInit: (components?: string[] | 'all') => void
      cleanCollection: (components?: string[] | 'all') => void
    }
    
    // Composants Preline individuels
    HSAccordion: any
    HSCarousel: any
    HSCollapse: any
    HSComboBox: any
    HSCopyMarkup: any
    HSDataTable: any
    HSDatepicker: any
    HSDropdown: any
    HSFileUpload: any
    HSInputNumber: any
    HSLayoutSplitter: any
    HSOverlay: any
    HSPinInput: any
    HSRangeSlider: any
    HSRemoveElement: any
    HSScrollNav: any
    HSScrollspy: any
    HSSelect: any
    HSStepper: any
    HSStrongPassword: any
    HSTabs: any
    HSTextareaAutoHeight: any
    HSThemeSwitch: any
    HSToggleCount: any
    HSTogglePassword: any
    HSTooltip: any
    HSTreeView: any
  }
}

export {}