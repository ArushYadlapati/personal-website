# Arush's Portfolio Website

A modern, responsive portfolio website built with Next.js 14.

## 🌐 Live Site
- [arush.dev](https://arush.dev)

## 🚀 Deployment

### Vercel (Recommended)
This site is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables (see `.env.example`)
3. Deploy with automatic builds on every commit

### Environment Variables
Copy `.env.example` to `.env.local` and configure:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` 
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_GTM`
- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_RECAPTCHA_SECRET_KEY`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`

## 🛠 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📦 Tech Stack
- Next.js 14
- React 18
- Tailwind CSS
- EmailJS
- React Icons
- Lottie React
