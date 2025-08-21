<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-semibold text-gray-900">Preline Demo</h1>
          </div>
          <div class="flex items-center space-x-4">
            <button type="button" class="hs-dropdown-toggle bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Dropdown
              <svg class="hs-dropdown-open:rotate-180 w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Preline Components Demo</h1>
        <p class="text-xl text-gray-600">Explore beautiful UI components for your GDPR application</p>
      </div>

      <!-- Dropdown Demo -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Dropdown Components</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Basic Dropdown -->
          <div class="hs-dropdown relative inline-flex">
            <button type="button" class="hs-dropdown-toggle bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
              Basic Dropdown
              <svg class="hs-dropdown-open:rotate-180 w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-lg rounded-lg p-2 mt-2 min-w-[15rem]">
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100" href="#">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 012.5 13.5.75.75 0 01-1.5 0A5.5 5.5 0 0011 9H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Refresh
              </a>
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100" href="#">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
                Settings
              </a>
              <div class="border-t border-gray-200 my-1"></div>
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100" href="#">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm7 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm3 0a1 1 0 10-2 0v4a1 1 0 102 0V7z" clip-rule="evenodd"></path>
                </svg>
                Analytics
              </a>
            </div>
          </div>

          <!-- Split Dropdown -->
          <div class="hs-dropdown relative inline-flex">
            <button type="button" class="hs-dropdown-toggle bg-blue-600 text-white px-4 py-2 rounded-l-lg hover:bg-blue-700">
              Split Dropdown
            </button>
            <button type="button" class="hs-dropdown-toggle bg-blue-600 text-white px-2 py-2 rounded-r-lg hover:bg-blue-700">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-lg rounded-lg p-2 mt-2 min-w-[15rem]">
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100" href="#">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 012.5 13.5.75.75 0 01-1.5 0A5.5 5.5 0 0011 9H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Refresh
              </a>
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100" href="#">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
                Settings
              </a>
            </div>
          </div>

          <!-- Dropdown with Icons -->
          <div class="hs-dropdown relative inline-flex">
            <button type="button" class="hs-dropdown-toggle bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
              Profile
              <svg class="hs-dropdown-open:rotate-180 w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden bg-white shadow-lg rounded-lg p-2 mt-2 min-w-[15rem]">
              <div class="px-4 py-3 border-b border-gray-200">
                <p class="text-sm text-gray-900">Signed in as</p>
                <p class="text-sm font-medium text-gray-900 truncate">user@example.com</p>
              </div>
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100" href="#">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                </svg>
                Your profile
              </a>
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100" href="#">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                </svg>
                Settings
              </a>
              <div class="border-t border-gray-200 my-1"></div>
              <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100" href="#">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm7 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm3 0a1 1 0 10-2 0v4a1 1 0 102 0V7z" clip-rule="evenodd"></path>
                </svg>
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Demo -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Modal Components</h2>
        <div class="flex space-x-4">
          <button type="button" class="hs-overlay-toggle bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" data-hs-overlay="#hs-basic-modal">
            Basic Modal
          </button>
          <button type="button" class="hs-overlay-toggle bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700" data-hs-overlay="#hs-success-modal">
            Success Modal
          </button>
        </div>
      </div>

      <!-- Tabs Demo -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Tab Components</h2>
        <div class="border border-gray-200 rounded-lg">
          <div class="border-b border-gray-200">
            <nav class="flex space-x-8 px-6" aria-label="Tabs">
              <button type="button" class="hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-2 font-medium text-sm whitespace-nowrap hover:text-blue-600 hover:border-gray-300" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                </svg>
                Profile
              </button>
              <button type="button" class="hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-2 font-medium text-sm whitespace-nowrap hover:text-blue-600 hover:border-gray-300" id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                </svg>
                Settings
              </button>
              <button type="button" class="hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-2 font-medium text-sm whitespace-nowrap hover:text-blue-600 hover:border-gray-300" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm7 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm3 0a1 1 0 10-2 0v4a1 1 0 102 0V7z" clip-rule="evenodd"></path>
                </svg>
                Analytics
              </button>
            </nav>
          </div>
          <div class="p-6">
            <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
              <p class="text-gray-600">This is the profile tab content. Here you can manage your personal information and preferences.</p>
            </div>
            <div id="tabs-with-card-2" class="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
              <p class="text-gray-600">This is the settings tab content. Configure your application preferences and account settings here.</p>
            </div>
            <div id="tabs-with-card-3" class="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
              <p class="text-gray-600">This is the analytics tab content. View your usage statistics and performance metrics.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Form Components Demo -->
      <div class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Form Components</h2>
        <div class="max-w-2xl">
          <form>
            <div class="grid grid-cols-1 gap-6">
              <div>
                <label for="hs-leading-icon" class="block text-sm font-medium text-gray-700 mb-2">Full name</label>
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                    <svg class="flex-shrink-0 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <input type="text" id="hs-leading-icon" name="hs-leading-icon" class="py-3 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter your full name">
                </div>
              </div>

              <div>
                <label for="hs-leading-icon-email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                    <svg class="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M16 4H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/>
                      <path d="m22 2-7 20-4-9-9-4 20-7Z"/>
                    </svg>
                  </div>
                  <input type="email" id="hs-leading-icon-email" name="hs-leading-icon-email" class="py-3 px-4 ps-11 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter your email">
                </div>
              </div>

              <div>
                <label for="hs-textarea" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="hs-textarea" name="hs-textarea" rows="4" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter your message"></textarea>
              </div>

              <div class="flex items-center">
                <input type="checkbox" id="hs-checkbox" name="hs-checkbox" class="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500">
                <label for="hs-checkbox" class="text-sm text-gray-600 ms-3">I agree to the <a class="text-blue-600 decoration-2 hover:underline font-medium" href="#">terms and conditions</a></label>
              </div>

              <button type="submit" class="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Basic Modal -->
    <div id="hs-basic-modal" class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
      <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-300 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div class="flex flex-col bg-white border shadow-sm rounded-xl">
          <div class="flex justify-between items-center py-3 px-4 border-b">
            <h3 class="font-bold text-gray-800">Basic Modal</h3>
            <button type="button" class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-basic-modal">
              <span class="sr-only">Close</span>
              <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
          <div class="p-4 overflow-y-auto">
            <p class="text-gray-800">This is a basic modal example. You can put any content here.</p>
          </div>
          <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-basic-modal">
              Close
            </button>
            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div id="hs-success-modal" class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
      <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-300 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div class="flex flex-col bg-white border shadow-sm rounded-xl">
          <div class="flex justify-between items-center py-3 px-4 border-b">
            <h3 class="font-bold text-gray-800">Success!</h3>
            <button type="button" class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-success-modal">
              <span class="sr-only">Close</span>
              <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
          <div class="p-4 overflow-y-auto">
            <div class="text-center">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Operation completed successfully!</h3>
              <p class="text-gray-600">Your action has been completed. You can now proceed with the next steps.</p>
            </div>
          </div>
          <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
            <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-success-modal">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// This page demonstrates various Preline components
// The components are automatically initialized by the Preline script

// Add Preline CSS and JS to the head
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
</script> 