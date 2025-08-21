<template>
  <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-yellow-800">
          Supabase Configuration Required
        </h3>
        <div class="mt-2 text-sm text-yellow-700">
          <p>
            This application requires Supabase configuration to function properly. 
            Please ensure the following environment variables are set:
          </p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li><code class="bg-yellow-100 px-1 rounded">SUPABASE_URL</code></li>
            <li><code class="bg-yellow-100 px-1 rounded">SUPABASE_ANON_KEY</code></li>
          </ul>
          <p class="mt-2">
            For local development, create a <code class="bg-yellow-100 px-1 rounded">.env</code> file. 
            For production deployment, set these as environment variables in your hosting platform.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// This component displays when Supabase is not properly configured
</script> 