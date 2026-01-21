# Hosting Guide - Pune Travelers Website

## Option 1: Netlify (Recommended - Free)

### Step 1: Build Your Project
```bash
npm run build
```
This creates a `dist` folder with your production files.

### Step 2: Deploy to Netlify

**Method A: Drag & Drop (Easiest)**
1. Go to https://www.netlify.com and sign up/login
2. Click "Add new site" > "Deploy manually"
3. Drag and drop the `dist` folder
4. Your site is live!

**Method B: Connect GitHub (Auto-deploy)**
1. Push your code to GitHub
2. Go to Netlify > "Add new site" > "Import an existing project"
3. Connect your GitHub repository
4. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Step 3: Environment Variables on Netlify
1. Go to Site settings > Environment variables
2. Add your variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

### Step 4: Custom Domain (Optional)
1. Go to Domain settings > Add custom domain
2. Enter your domain (e.g., punetravelers.com)
3. Follow DNS configuration instructions

---

## Option 2: GoDaddy Hosting

### Step 1: Build Your Project
```bash
npm run build
```

### Step 2: Upload to GoDaddy

1. Login to GoDaddy > My Products > Web Hosting > Manage
2. Open File Manager or use FTP
3. Navigate to `public_html` folder
4. Delete existing files (backup if needed)
5. Upload all contents from your `dist` folder

### Step 3: FTP Upload (Alternative)
1. Download FileZilla (free FTP client)
2. Get FTP credentials from GoDaddy:
   - Host: Your domain or IP
   - Username: From GoDaddy cPanel
   - Password: Your FTP password
   - Port: 21
3. Connect and upload `dist` folder contents to `public_html`

### Step 4: Configure for Single Page App
Create a `.htaccess` file in `public_html`:
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Quick Comparison

| Feature | Netlify | GoDaddy |
|---------|---------|---------|
| Free Tier | Yes | No |
| Auto Deploy | Yes | No |
| SSL (HTTPS) | Free | Paid/Included |
| Ease of Use | Easy | Moderate |
| Speed | Fast (CDN) | Varies |

---

## Troubleshooting

### Blank Page After Deploy
- Check browser console for errors
- Verify `dist` folder was uploaded correctly
- Check base URL in `vite.config.js`

### Environment Variables Not Working
- Rebuild after adding env variables
- Prefix must be `VITE_` for Vite projects

### 404 on Page Refresh
- Add redirect rules (Netlify: `_redirects` file)
- Add `.htaccess` for Apache servers (GoDaddy)

---

## Need Help?
- Netlify Docs: https://docs.netlify.com
- GoDaddy Help: https://www.godaddy.com/help
