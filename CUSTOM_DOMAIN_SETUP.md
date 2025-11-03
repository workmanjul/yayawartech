# Custom Domain Setup Guide - yayawartech.com

This guide will help you connect your custom domain `yayawartech.com` to GitHub Pages with Cloudflare.

## Prerequisites

- ✅ GitHub repository with your code
- ✅ GitHub Pages enabled and working
- ✅ Cloudflare account with `yayawartech.com` added
- ✅ Domain DNS management access in Cloudflare

## Step 1: Configure GitHub Pages with Custom Domain

1. **Push your code to GitHub** (make sure you've pushed the latest changes including the `CNAME` file)

2. **Wait for the first deployment** to complete:
   - Go to your repository → **Actions** tab
   - Wait for the "Deploy to GitHub Pages" workflow to finish successfully

3. **Configure custom domain in GitHub**:
   - Go to your repository → **Settings** → **Pages**
   - Under **Custom domain**, enter: `yayawartech.com`
   - Check **"Enforce HTTPS"** (recommended)
   - Click **Save**
   - GitHub will create DNS records automatically (note these for reference)

## Step 2: Configure Cloudflare DNS

In your Cloudflare dashboard for `yayawartech.com`:

### Option A: Using CNAME (Recommended for root domain)

1. Go to **DNS** → **Records**
2. **Add a CNAME record**:
   - **Type**: CNAME
   - **Name**: `@` (or your root domain)
   - **Target**: `your-username.github.io` (replace with your GitHub username)
   - **Proxy status**: 🟠 Proxied (orange cloud) - Cloudflare will handle SSL
   - **TTL**: Auto
   - Click **Save**

### Option B: Using A Records (Alternative)

If CNAME doesn't work for root domain, use A records:

1. **Delete any existing** CNAME or A records for `@`
2. **Add A records** pointing to GitHub Pages IPs:
   - **Type**: A
   - **Name**: `@`
   - **IPv4 address**: `185.199.108.153`
   - **Proxy**: 🟠 Proxied
   - **TTL**: Auto
   
   Add these 4 A records with these IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

3. **Click Save** for each record

### For WWW Subdomain (Optional but Recommended)

Add a CNAME record for `www`:

1. **Type**: CNAME
2. **Name**: `www`
3. **Target**: `your-username.github.io`
4. **Proxy status**: 🟠 Proxied
5. **TTL**: Auto
6. Click **Save**

Then in GitHub Pages settings, also add `www.yayawartech.com` as a custom domain (it will redirect automatically).

## Step 3: Configure Cloudflare SSL/TLS

1. Go to **SSL/TLS** in Cloudflare dashboard
2. Set encryption mode to **"Full"** or **"Full (strict)"**
   - **Full**: Works with GitHub Pages' certificate
   - **Full (strict)**: Requires GitHub Pages to have a valid certificate (recommended)
3. Save the settings

## Step 4: Configure Cloudflare Settings (Recommended)

### Speed & Performance
- **Auto Minify**: Enable for CSS, JavaScript, and HTML
- **Brotli**: Enable for better compression

### Security
- **Always Use HTTPS**: Enable
- **HSTS**: Consider enabling for better security

### Page Rules (Optional)
Create a page rule to enforce HTTPS:
- **URL**: `yayawartech.com/*`
- **Setting**: Always Use HTTPS

## Step 5: Wait for DNS Propagation

- DNS changes can take **15 minutes to 48 hours** to propagate
- Cloudflare typically propagates within **5-15 minutes**
- You can check DNS propagation using tools like:
  - `https://dnschecker.org`
  - `https://whatsmydns.net`

## Step 6: Verify Domain

1. **Check GitHub Pages**:
   - Go to Settings → Pages
   - Verify domain shows as "Verified" with a green checkmark
   - If not verified after 24 hours, check DNS configuration

2. **Test your domain**:
   - Visit `https://yayawartech.com` in your browser
   - Should redirect to HTTPS if configured correctly
   - Test `www.yayawartech.com` as well

## Troubleshooting

### Domain Not Resolving

1. **Check DNS records** in Cloudflare:
   - Verify CNAME/A records point to correct GitHub Pages URL
   - Ensure Proxy is enabled (orange cloud)

2. **Check GitHub Pages**:
   - Verify custom domain is set correctly
   - Check for any warnings or errors
   - Domain should show as "Verified" with green checkmark

3. **Clear DNS cache**:
   ```bash
   # On Mac/Linux
   sudo dscacheutil -flushcache
   sudo killall -HUP mDNSResponder
   
   # On Windows
   ipconfig /flushdns
   ```

### SSL/HTTPS Issues

1. **In Cloudflare**:
   - Ensure SSL/TLS mode is set to "Full" or "Full (strict)"
   - Wait 15-30 minutes after enabling

2. **In GitHub Pages**:
   - Ensure "Enforce HTTPS" is checked
   - May take a few hours for SSL certificate to provision

### Mixed Content Warnings

- Ensure all resources (images, scripts, stylesheets) use HTTPS URLs
- Check browser console for mixed content warnings

### Caching Issues

If you see old content:
1. **Cloudflare**: Go to **Caching** → **Purge Everything**
2. **Browser**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## Important Notes

- ✅ The `CNAME` file in the `public` folder is automatically deployed and tells GitHub Pages your custom domain
- ✅ Base path is set to `/` which is correct for root domains
- ✅ React Router will work correctly with the custom domain
- ✅ GitHub Pages will automatically renew SSL certificates
- ⚠️ After setting up the custom domain, GitHub will serve your site from `yayawartech.com` instead of `username.github.io`

## Verification Checklist

- [ ] Code pushed to GitHub
- [ ] GitHub Pages workflow completed successfully
- [ ] Custom domain added in GitHub Pages settings
- [ ] DNS records configured in Cloudflare (CNAME or A records)
- [ ] Cloudflare SSL/TLS mode set to "Full"
- [ ] Domain verified in GitHub (green checkmark)
- [ ] Website accessible at `https://yayawartech.com`
- [ ] HTTPS redirect working correctly

## Support

If you encounter issues:
1. Check GitHub Pages status: `https://www.githubstatus.com`
2. Verify DNS propagation: `https://dnschecker.org`
3. Check Cloudflare status: `https://www.cloudflarestatus.com`
4. Review GitHub Actions logs for deployment errors

