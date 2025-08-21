# Supabase Keys Guide

## Understanding Supabase Keys

Supabase provides two types of API keys, each with different security implications:

## 1. Publishable Key (Anon Key) 🔓

**What it is:** The public key that's safe to expose in client-side code
**Where to find it:** Supabase Dashboard → Settings → API → `anon` `public`
**Security level:** Safe for browser/client-side use
**Capabilities:** Limited by Row Level Security (RLS) policies

### Usage Examples:
```typescript
// ✅ SAFE - Use in components, pages, client-side code
const { $supabase } = useNuxtApp()

// User authentication
const { data, error } = await $supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password'
})

// Database queries (respects RLS)
const { data } = await $supabase
  .from('profiles')
  .select('*')
  .eq('id', user.id) // Only returns user's own data
```

## 2. Secret Key (Service Role Key) 🔒

**What it is:** The admin key with full database access
**Where to find it:** Supabase Dashboard → Settings → API → `service_role` `secret`
**Security level:** NEVER expose to client-side code
**Capabilities:** Bypasses RLS, full admin access

### Usage Examples:
```typescript
// ✅ SAFE - Use only in server routes, API endpoints
// server/api/admin/users.get.ts
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  const supabase = createClient(
    config.public.supabaseUrl,
    config.supabaseServiceRoleKey // Service role key
  )
  
  // Can access all data, bypass RLS
  const { data } = await supabase
    .from('profiles')
    .select('*')
    
  return { users: data }
})
```

## 3. Environment Variables Setup

### Create `.env` file:
```bash
# PUBLISHABLE (Client-side safe)
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# SECRET (Server-side only)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Nuxt Configuration:
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    // Private (server-side only)
    supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
    
    // Public (client-side available)
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY
    }
  }
})
```

## 4. Security Best Practices

### ✅ DO:
- Use **anon key** for user authentication and regular queries
- Use **service role key** only in server routes for admin operations
- Keep service role key in environment variables
- Use Row Level Security (RLS) policies to control data access

### ❌ DON'T:
- Never expose service role key in client-side code
- Never commit `.env` files to version control
- Never use service role key for regular user operations
- Don't disable RLS without understanding the implications

## 5. Key Usage Patterns

### Client-Side (Components, Pages):
```vue
<template>
  <div>
    <button @click="signIn">Sign In</button>
    <div v-if="user">Welcome {{ user.email }}</div>
  </div>
</template>

<script setup>
const { $supabase } = useNuxtApp() // Uses anon key automatically

const signIn = async () => {
  const { data, error } = await $supabase.auth.signInWithPassword({
    email: 'user@example.com',
    password: 'password'
  })
}
</script>
```

### Server-Side (API Routes):
```typescript
// server/api/admin/users.get.ts
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  // Create admin client with service role key
  const supabase = createClient(
    config.public.supabaseUrl,
    config.supabaseServiceRoleKey
  )
  
  // Admin operations that bypass RLS
  const { data } = await supabase
    .from('profiles')
    .select('*')
    
  return { users: data }
})
```

## 6. Testing Your Setup

### 1. Check Environment Variables:
```bash
# In your terminal
echo $SUPABASE_URL
echo $SUPABASE_ANON_KEY
echo $SUPABASE_SERVICE_ROLE_KEY
```

### 2. Test Client-Side:
- Navigate to a page with SupabaseAuth component
- Try signing up/signing in
- Check browser console for errors

### 3. Test Server-Side:
- Call your `/api/users` endpoint
- Check server logs for errors
- Verify data is returned correctly

## 7. Troubleshooting

### Common Issues:

1. **"Invalid API key" error**
   - Check environment variables are set correctly
   - Ensure keys are copied without extra spaces

2. **"JWT expired" error**
   - Check if your Supabase project is paused (free tier)
   - Verify project is active in dashboard

3. **"RLS policy violation" error**
   - This is expected with anon key - it means RLS is working
   - Use service role key in server routes for admin access

4. **"CORS error"**
   - Check site URL in Supabase dashboard
   - Verify redirect URLs are configured

## 8. Production Considerations

1. **Environment Variables:**
   - Set production keys in your hosting platform
   - Never commit `.env` files

2. **URL Configuration:**
   - Update site URL in Supabase dashboard
   - Add production redirect URLs

3. **Monitoring:**
   - Check Supabase dashboard for usage metrics
   - Monitor for unusual API calls

## 9. Key Rotation

If you need to rotate your keys:
1. Generate new keys in Supabase dashboard
2. Update environment variables
3. Deploy with new keys
4. Old keys will continue working for a short time
5. Monitor for any errors during transition

## 10. Additional Resources

- [Supabase Security Documentation](https://supabase.com/docs/guides/security)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [API Reference](https://supabase.com/docs/reference/javascript)
- [Community Discord](https://discord.supabase.com) 