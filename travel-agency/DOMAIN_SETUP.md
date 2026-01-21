# Connect GoDaddy Domain to Netlify

## Step 1: Add Domain in Netlify

1. Go to your Netlify site dashboard
2. Click **Domain settings** (or Site settings > Domain management)
3. Click **Add custom domain**
4. Enter your domain: `yourdomain.com`
5. Click **Verify** > **Add domain**

## Step 2: Get Netlify DNS Records

After adding, Netlify will show you DNS settings. Note down:
- **A Record**: `75.2.60.5` (Netlify's load balancer IP)
- **CNAME**: `your-site-name.netlify.app`

## Step 3: Configure DNS in GoDaddy

1. Login to **GoDaddy** > **My Products**
2. Find your domain > Click **DNS** (or Manage DNS)
3. Update/Add these records:

### For Root Domain (yourdomain.com):
| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 75.2.60.5 | 600 |

### For WWW (www.yourdomain.com):
| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | your-site-name.netlify.app | 600 |

## Step 4: How to Edit DNS in GoDaddy

1. **Delete** existing A record pointing to GoDaddy parking
2. Click **Add** > Select **A**
   - Name: `@`
   - Value: `75.2.60.5`
   - TTL: 600
   - Save

3. **Edit** or **Add** CNAME for www:
   - Name: `www`
   - Value: `your-site-name.netlify.app`
   - TTL: 600
   - Save

## Step 5: Enable HTTPS on Netlify

1. Go back to Netlify > Domain settings
2. Scroll to **HTTPS**
3. Click **Verify DNS configuration**
4. Click **Provision certificate**
5. Wait for SSL certificate (may take a few minutes)

## Step 6: Wait for Propagation

- DNS changes take **10 minutes to 48 hours**
- Usually works within **1-2 hours**
- Check status: https://dnschecker.org

## Troubleshooting

### "DNS verification failed"
- Wait 10-30 minutes and try again
- Double-check A record value

### Site not loading
- Clear browser cache
- Try incognito mode
- Check DNS propagation

### Certificate error
- Wait for DNS to fully propagate
- Re-verify in Netlify

## Quick Reference

```
GoDaddy DNS Settings:

Type    Name    Value                         TTL
----    ----    -----                         ---
A       @       75.2.60.5                     600
CNAME   www     your-site-name.netlify.app   600
```

Replace `your-site-name.netlify.app` with your actual Netlify URL.
