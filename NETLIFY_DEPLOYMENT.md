# Netlify Deployment Guide

## 🚨 **Critical: Set Environment Variables in Netlify**

The build is failing because Netlify doesn't have access to your Supabase credentials. You need to set these in your Netlify dashboard.

## 📋 **Step-by-Step Setup:**

### 1. **Go to Netlify Dashboard**
- Navigate to [netlify.com](https://netlify.com)
- Select your site: `deletemydata`

### 2. **Set Environment Variables**
- Go to **Site settings** → **Environment variables**
- Click **Add a variable**
- Add these variables:

| Variable Name | Value |
|---------------|-------|
| `SUPABASE_URL` | `https://huvjfkaqszetdbbfvahw.supabase.co` |
| `SUPABASE_ANON_KEY` | `sb_publishable_9HZ1e...` (your actual anon key) |
| `SUPABASE_SERVICE_ROLE_KEY` | `sb_service_role_...` (your actual service role key) |

### 3. **Redeploy**
- Go to **Deploys** tab
- Click **Trigger deploy** → **Deploy site**

## 🔧 **Alternative: Use Netlify CLI**

If you prefer command line:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Set environment variables
netlify env:set SUPABASE_URL "https://huvjfkaqszetdbbfvahw.supabase.co"
netlify env:set SUPABASE_ANON_KEY "your_anon_key_here"
netlify env:set SUPABASE_SERVICE_ROLE_KEY "your_service_role_key_here"

# Redeploy
netlify deploy --prod
```

## 📁 **Files Created for Netlify:**

1. **`netlify.toml`** - Build configuration
2. **`SupabaseFallback.vue`** - Graceful error handling
3. **Updated `nuxt.config.ts`** - Production-ready config
4. **Updated `test-supabase.vue`** - Safe error handling

## 🧪 **Test Locally First:**

```bash
# Test the build locally
npm run generate

# If successful, push to GitHub
npm run push
```

## 🚀 **After Setting Environment Variables:**

1. **Push changes** to GitHub
2. **Netlify will auto-deploy** with the new environment variables
3. **Build should succeed** and your app will work

## 🔍 **Troubleshooting:**

### **Build still fails?**
- Check environment variable names (case-sensitive)
- Ensure no extra spaces in values
- Verify Supabase project is active

### **Environment variables not loading?**
- Check Netlify dashboard → Environment variables
- Ensure variables are set for "All scopes"
- Try redeploying after setting variables

### **Need to update variables?**
- Update in Netlify dashboard
- Redeploy manually or push new commit

## 📞 **Support:**

- **Netlify Support**: [support.netlify.com](https://support.netlify.com)
- **Supabase Support**: [supabase.com/support](https://supabase.com/support)
- **GitHub Issues**: Create issue in your repository 