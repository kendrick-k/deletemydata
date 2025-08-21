# Preline Setup Guide

## Overview
Preline is a comprehensive UI component library built on top of Tailwind CSS that provides beautiful, accessible components for your Nuxt.js application.

## Installation
Preline has been installed in your project:

```bash
npm install preline
```

## Configuration

### Working Solution: CDN Approach
Due to build compatibility issues with the local Preline package, we're using a CDN-based approach that works reliably:

#### 1. CSS and JavaScript Loading
Preline CSS and JavaScript are loaded using Nuxt's `useHead` composable in the demo page:

```typescript
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://preline.co/assets/preline.css'
    }
  ],
  script: [
    {
      src: 'https://preline.co/assets/preline.js',
      onload: 'if(typeof HSStaticMethods !== "undefined") HSStaticMethods.autoInit()'
    }
  ]
})
```

#### 2. Automatic Initialization
Components are automatically initialized when the Preline script loads.

## Available Components

### Dropdowns
- **Basic Dropdown**: Simple dropdown with menu items
- **Split Dropdown**: Button with separate dropdown trigger
- **Profile Dropdown**: User profile dropdown with header

### Modals
- **Basic Modal**: Simple modal with content
- **Success Modal**: Success state modal with icon

### Tabs
- **Card Tabs**: Tabbed interface with content panels

### Forms
- **Input with Icons**: Form inputs with leading icons
- **Textarea**: Multi-line text input
- **Checkbox**: Form checkbox with label
- **Submit Button**: Form submission button

## Usage Examples

### Dropdown
```html
<div class="hs-dropdown relative inline-flex">
  <button type="button" class="hs-dropdown-toggle bg-blue-600 text-white px-4 py-2 rounded-lg">
    Dropdown
    <svg class="hs-dropdown-open:rotate-180 w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
    </svg>
  </button>
  <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-lg rounded-lg p-2 mt-2 min-w-[15rem]">
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100" href="#">
      Menu Item
    </a>
  </div>
</div>
```

### Modal
```html
<button type="button" class="hs-overlay-toggle bg-blue-600 text-white px-4 py-2 rounded-lg" data-hs-overlay="#my-modal">
  Open Modal
</button>

<div id="my-modal" class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
  <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-300 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
    <div class="flex flex-col bg-white border shadow-sm rounded-xl">
      <!-- Modal content -->
    </div>
  </div>
</div>
```

### Tabs
```html
<nav class="flex space-x-8 px-6" aria-label="Tabs">
  <button type="button" class="hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-2 font-medium text-sm" id="tab-1" data-hs-tab="#content-1" aria-controls="content-1" role="tab">
    Tab 1
  </button>
</nav>
<div id="content-1" role="tabpanel" aria-labelledby="tab-1">
  Tab content here
</div>
```

## Data Attributes

### Dropdown
- `data-hs-dropdown-toggle`: Marks the dropdown trigger button
- `hs-dropdown-open:rotate-180`: Rotates icon when dropdown is open

### Modal
- `data-hs-overlay-toggle`: Marks the modal trigger button
- `data-hs-overlay`: Links to the modal ID

### Tabs
- `data-hs-tab`: Links to the tab content panel
- `hs-tab-active:border-blue-600`: Styles active tab

## Styling Classes

### States
- `hs-dropdown-open:opacity-100`: Shows dropdown when open
- `hs-tab-active:text-blue-600`: Styles active tab text
- `hs-overlay-open:opacity-100`: Shows modal when open

### Transitions
- `transition-[opacity,margin] duration`: Smooth transitions
- `hs-overlay-open:duration-300`: Animation duration

## Integration with Your GDPR App

Preline components can enhance your GDPR application with:

1. **User Authentication**: Profile dropdowns, login modals
2. **Data Management**: Tabbed interfaces for different data types
3. **Form Handling**: Beautiful form components for GDPR requests
4. **Notifications**: Success/error modals for user feedback
5. **Navigation**: Enhanced dropdown navigation menus

## Testing

Visit the demo page to see all components in action:
```
http://localhost:3005/preline-demo
```

## Resources

- [Preline Documentation](https://preline.co/docs/)
- [Component Examples](https://preline.co/docs/components.html)
- [Tailwind CSS Integration](https://preline.co/docs/getting-started.html)

## Notes

- **CDN Approach**: Preline is loaded via CDN for reliability and compatibility
- **Automatic Initialization**: Components are automatically initialized when the script loads
- **No Build Issues**: This approach avoids the build compatibility problems we encountered
- **All Components**: Fully responsive and accessible components
- **Custom Styling**: Can be applied using Tailwind CSS classes

## Troubleshooting

If you encounter issues:

1. **Check Network**: Ensure the CDN links are accessible
2. **Console Errors**: Check browser console for JavaScript errors
3. **Component States**: Verify data attributes are correctly set
4. **CSS Loading**: Confirm Preline CSS is loaded in the page head

## Alternative Approaches (Not Working)

We tried these approaches but encountered build issues:
- Local CSS import: `'preline/dist/preline.css'`
- Nuxt plugin with local package imports
- Direct ES module imports

The CDN approach provides the most reliable solution for this project. 