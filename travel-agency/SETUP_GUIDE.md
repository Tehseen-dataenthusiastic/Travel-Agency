# Pune Travelers - Setup Guide

## 📋 Prerequisites
- Node.js (v16 or higher)
- npm or yarn

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables

#### Get Your Web3Forms API Key (FREE)
1. Visit **https://web3forms.com**
2. Enter your email address
3. Click "Get Your Access Key"
4. Check your email for the access key
5. Copy the access key

#### Setup .env File
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` file and update the values:
   ```env
   # Web3Forms API Key (Required for contact form)
   VITE_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here

   # Contact Information
   VITE_PHONE_NUMBER=+919822234911
   VITE_WHATSAPP_NUMBER=+919822234911
   VITE_EMAIL=manojtravels592@gmail.com
   ```

3. Replace placeholder values with your actual information

### 3. Add Images

Download and place images in the `public/images/` folder:

#### Required Images:
- `public/images/hero-bg.jpg` - Pune landmark (2000x1000px)
- `public/images/vehicles/innova-crysta.jpg` (600x400px)
- `public/images/vehicles/swift-dzire.jpg` (600x400px)
- `public/images/vehicles/tempo-traveller.jpg` (600x400px)
- `public/images/testimonials/client-1.jpg` (150x150px)
- `public/images/testimonials/client-2.jpg` (150x150px)
- `public/images/testimonials/client-3.jpg` (150x150px)
- `public/images/packages/mahabaleshwar.jpg` (800x600px)
- `public/images/packages/lonavala.jpg` (800x600px)
- `public/images/packages/sinhagad.jpg` (800x600px)
- `public/images/packages/lavasa.jpg` (800x600px)
- `public/images/packages/alibaug.jpg` (800x600px)
- `public/images/packages/shirdi.jpg` (800x600px)

See `public/images/IMAGE_SOURCES.md` for download links and recommendations.

### 4. Run Development Server
```bash
npm run dev
```

Your site will be available at: **http://localhost:5173**

### 5. Build for Production
```bash
npm run build
```

The production build will be in the `dist/` folder.

## 🔧 Configuration Details

### Environment Variables Explained

| Variable | Purpose | Example |
|----------|---------|---------|
| `VITE_WEB3FORMS_ACCESS_KEY` | Contact form submissions | `abc123...` |
| `VITE_PHONE_NUMBER` | Display phone number | `+919822234911` |
| `VITE_WHATSAPP_NUMBER` | WhatsApp chat link | `+919822234911` (no +) |
| `VITE_EMAIL` | Display email address | `manojtravels592@gmail.com` |

### Where Are These Used?

- **Contact Form** (`ContactForm.jsx`)
  - Uses `VITE_WEB3FORMS_ACCESS_KEY` to submit form data
  - Displays `VITE_PHONE_NUMBER` and `VITE_EMAIL` in contact cards

- **Floating Action Buttons** (`FloatingActionButtons.jsx`)
  - Uses `VITE_PHONE_NUMBER` for call button
  - Uses `VITE_WHATSAPP_NUMBER` for WhatsApp button

- **Navbar** (`Navbar.jsx`)
  - Uses `VITE_PHONE_NUMBER` for "Call Now" button

## 🔒 Security Notes

- ✅ `.env` file is gitignored (won't be committed to Git)
- ✅ Environment variables are only accessible in the browser (client-side)
- ✅ Web3Forms API key is safe to expose (it's designed for client-side use)
- ⚠️ Never put sensitive backend keys in `.env` (database passwords, etc.)

## 📧 Testing Contact Form

### Before Adding API Key:
The form will show an error message after submission.

### After Adding API Key:
1. Fill out the contact form
2. Click "Send Inquiry"
3. Check the email you registered with Web3Forms
4. You'll receive form submissions there

### Form Fields Submitted:
- Name
- Phone Number
- Pickup Location
- Vehicle Type
- Message
- Subject: "New Booking Inquiry from Pune Travelers Website"

## 🎨 Customization

### Update Company Information:
Edit the following files:
- `src/components/Footer.jsx` - Footer content
- `src/components/About.jsx` - About section details
- `src/components/Packages.jsx` - Tour package prices and details

### Update Colors:
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: { ... },  // Blue colors
  accent: { ... },   // Yellow/Orange colors
}
```

## 🐛 Troubleshooting

### Contact form not working?
1. Check `.env` file has correct `VITE_WEB3FORMS_ACCESS_KEY`
2. Restart dev server after changing `.env`
3. Check browser console for errors
4. Verify email is correct in Web3Forms dashboard

### Images not showing?
1. Check file names match exactly (case-sensitive)
2. Verify images are in correct folders
3. Check browser console for 404 errors

### Environment variables not loading?
1. Variables must start with `VITE_`
2. Restart dev server after changing `.env`
3. Use `import.meta.env.VITE_YOUR_VAR` to access

## 📞 Support

If you need help:
1. Check this guide first
2. Read the error messages in browser console
3. Verify all environment variables are set correctly

## 🚀 Deployment

### Deploy to Vercel/Netlify:
1. Build the project: `npm run build`
2. Upload `dist/` folder OR connect Git repository
3. Add environment variables in hosting platform's dashboard
4. Deploy!

**Important:** Add the same environment variables from `.env` to your hosting platform's environment variables section.
