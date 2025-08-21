# Supabase Setup Guide

This guide will help you set up Supabase with your Nuxt.js application.

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/sign in
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - Name: `deletemydata` (or your preferred name)
   - Database Password: Choose a strong password
   - Region: Choose closest to your users
5. Click "Create new project"

## 2. Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (e.g., `https://your-project.supabase.co`)
   - **Anon/public key** (starts with `eyJ...`)
   - **Service role key** (starts with `eyJ...`)

## 3. Set Up Environment Variables

1. Create a `.env` file in your project root (copy from `env.example`)
2. Add your Supabase credentials:

```bash
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

3. Add `.env` to your `.gitignore` file if not already there

## 4. Set Up Your Database

1. In Supabase dashboard, go to **SQL Editor**
2. Copy the contents of `database/schema.sql`
3. Paste and run the SQL to create your database schema
4. Verify tables are created in **Table Editor**

## 5. Configure Authentication

1. In Supabase dashboard, go to **Authentication** → **Settings**
2. Configure your site URL (e.g., `http://localhost:3000` for development)
3. Add redirect URLs:
   - `http://localhost:3000/auth/callback`
   - `http://localhost:3000/auth/confirm`
4. Configure email templates if desired

## 6. Test Your Setup

1. Start your development server: `npm run dev`
2. Navigate to a page with the `SupabaseAuth` component
3. Try signing up with a test email
4. Check Supabase dashboard to see if user was created

## 7. Usage Examples

### In Components
```vue
<script setup>
const { $supabase } = useNuxtApp()

// Sign in
const { data, error } = await $supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password'
})

// Query database
const { data: users } = await $supabase
  .from('profiles')
  .select('*')
</script>
```

### In Server Routes
```typescript
// server/api/users.get.ts
export default defineEventHandler(async (event) => {
  const { $supabase } = event.context
  
  const { data, error } = await $supabase
    .from('profiles')
    .select('*')
    
  return { users: data }
})
```

### Using Composables
```vue
<script setup>
const supabase = useSupabase()
const auth = useSupabaseAuth()
const db = useSupabaseDatabase()

// Use the composables
const user = await auth.getUser()
const profiles = await db('profiles').select('*')
</script>
```

## 8. Row Level Security (RLS)

Your schema includes RLS policies for:
- Users can only access their own workspaces
- Multi-tenant data isolation
- Public read access to privacy contacts (authenticated users only)

## 9. Production Deployment

1. Update environment variables with production Supabase project
2. Update site URL in Supabase dashboard
3. Add production redirect URLs
4. Test authentication flow in production

## 10. Troubleshooting

### Common Issues

1. **"Invalid API key" error**
   - Check your environment variables
   - Ensure keys are copied correctly

2. **CORS errors**
   - Verify site URL in Supabase dashboard
   - Check redirect URLs configuration

3. **RLS policy errors**
   - Ensure user is authenticated
   - Check RLS policies in database

4. **Database connection issues**
   - Verify database password
   - Check if database is paused (free tier)

### Getting Help

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord](https://discord.supabase.com)
- [GitHub Issues](https://github.com/supabase/supabase/issues)

## 11. Next Steps

1. Customize authentication UI
2. Add more database tables as needed
3. Implement real-time subscriptions
4. Add file storage capabilities
5. Set up edge functions for custom logic 