import { config } from 'dotenv'

// Load environment variables
config()

export default defineNuxtPlugin(() => {
  // This plugin ensures environment variables are loaded
  console.log('🔧 Environment plugin loaded')
}) 