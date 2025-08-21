# Domain Redirect System

## 🎯 **Purpose**

This system automatically redirects all traffic that's NOT on:
- `localhost` (development)
- `127.0.0.1` (development)
- `deletemydata.online` (production)
- `*.deletemydata.online` (subdomains)

**TO:** `https://deletemydata.online`

## 🏗️ **How It Works**

### 1. **Client-Side Middleware** (`middleware/redirect.global.ts`)
- Runs on every page navigation
- Checks current hostname
- Redirects if not on allowed domains
- Uses 301 permanent redirect for SEO

### 2. **Server-Side Redirects** (`netlify.toml`)
- Handles redirects at the CDN level
- More efficient than client-side redirects
- Ensures redirects work even if JavaScript is disabled

### 3. **Utility Functions** (`utils/domain.ts`)
- Centralized logic for domain checking
- Easy to maintain and test
- Reusable across the application

## 📁 **Files Created/Modified**

1. **`middleware/redirect.global.ts`** - Global redirect middleware
2. **`utils/domain.ts`** - Domain utility functions
3. **`netlify.toml`** - Netlify redirect configuration
4. **`pages/test-redirect.vue`** - Test page for redirect logic

## 🔄 **Redirect Flow**

```
User visits: example.com/page
↓
Middleware checks: Is this localhost or deletemydata.online?
↓
If NO → Redirect to: https://deletemydata.online/page
If YES → Allow access
```

## 🧪 **Testing**

### **Local Development:**
```bash
# Start dev server
npm run dev:env

# Visit test page
http://localhost:3000/test-redirect
```

### **Production Testing:**
1. Deploy to Netlify
2. Visit from different domains
3. Verify redirects work correctly

## ⚙️ **Configuration**

### **Allowed Domains:**
- `localhost`
- `127.0.0.1`
- `deletemydata.online`
- `*.deletemydata.online` (any subdomain)

### **Redirect Behavior:**
- **Status Code:** 301 (Permanent Redirect)
- **Preserves:** Path and query parameters
- **Protocol:** Maintains HTTPS preference

## 🚀 **Deployment**

### **Netlify:**
The `netlify.toml` file automatically configures:
- Domain redirects
- HTTP to HTTPS redirects
- SPA routing
- Security headers

### **Other Platforms:**
Copy the redirect logic from `netlify.toml` to your platform's configuration.

## 🔍 **Monitoring**

### **Check Redirects:**
1. Visit `https://deletemydata.online/test-redirect`
2. Use browser dev tools to see redirects
3. Check Netlify function logs

### **Common Issues:**
- **Infinite redirects:** Check domain conditions
- **Missing redirects:** Verify middleware is loaded
- **SEO issues:** Ensure 301 status codes

## 📱 **Mobile & SEO**

### **Mobile Compatibility:**
- Redirects work on all devices
- Preserves mobile-specific paths
- Maintains responsive design

### **SEO Benefits:**
- 301 redirects preserve link equity
- Search engines understand the redirect
- No duplicate content issues

## 🔧 **Customization**

### **Add More Allowed Domains:**
```typescript
// In utils/domain.ts
export const shouldRedirectToMainDomain = (hostname: string): boolean => {
  if (hostname === 'localhost' || 
      hostname === '127.0.0.1' || 
      hostname === 'deletemydata.online' ||
      hostname.endsWith('.deletemydata.online') ||
      hostname === 'your-other-domain.com') { // Add here
    return false
  }
  return true
}
```

### **Change Redirect Target:**
```typescript
// In utils/domain.ts
export const getMainDomainUrl = (protocol: string = 'https'): string => {
  return `${protocol}://your-new-domain.com` // Change here
}
```

## 🚨 **Important Notes**

1. **Always test locally first** before deploying
2. **Check Netlify logs** for redirect issues
3. **Monitor analytics** to ensure redirects work
4. **Update DNS** if changing main domain
5. **Consider caching** for better performance

## 📞 **Support**

If redirects aren't working:
1. Check browser console for errors
2. Verify middleware is loaded
3. Test with different domains
4. Check Netlify function logs
5. Verify environment variables are set 