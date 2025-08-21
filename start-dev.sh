#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
    echo "✅ Environment variables loaded from .env"
    echo "🔗 Supabase URL: $SUPABASE_URL"
    echo "🔑 Anon Key: ${SUPABASE_ANON_KEY:0:20}..."
else
    echo "❌ .env file not found"
    exit 1
fi

# Start the development server
echo "🚀 Starting Nuxt development server..."
npm run dev 