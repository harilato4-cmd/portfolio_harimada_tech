# Harilanto Portfolio Production 2026

Official bilingual portfolio for **Ange Harilanto Ramaroson** — Founder & CEO of **HariMada Tech**.

## Production features

- Bilingual FR / EN portfolio
- SEO meta tags, Open Graph and structured data
- robots.txt and sitemap.xml
- PWA manifest and service worker
- Optimized profile images with WebP
- Lazy loading for project images
- WhatsApp direct contact
- FormSubmit fallback contact form
- EmailJS-ready contact form configuration
- Downloadable CV in English and French

## Deploy on Vercel

1. Push all files to GitHub.
2. Import the repository in Vercel.
3. Keep framework as **Other**.
4. Deploy.

## Important after deployment

Replace `https://harilanto-portfolio.vercel.app` in these files with your real Vercel domain:

- `index.html`
- `robots.txt`
- `sitemap.xml`

## Enable EmailJS

Edit `assets/js/emailjs-config.js` and replace:

```js
publicKey: "YOUR_PUBLIC_KEY",
serviceId: "YOUR_SERVICE_ID",
templateId: "YOUR_TEMPLATE_ID"
```

Until this is configured, the form continues to work using FormSubmit fallback.
