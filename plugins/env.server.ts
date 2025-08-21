import { config } from 'dotenv'

// Load environment variables on server side
config()

export default defineNuxtPlugin(() => {
  // This plugin ensures environment variables are loaded on server
  console.log('🔧 Server environment plugin loaded')
}) 