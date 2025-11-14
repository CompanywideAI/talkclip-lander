# Deployment Guide for TalkClip Landing Page

## 📋 Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager
- Git configured on your machine

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your landing page in action!

### 3. Build for Production

```bash
npm run build
```

This will create an optimized static export in the `out` directory.

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended for Static Sites)

1. **Push to GitHub:**
   ```bash
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

3. **Add GitHub Actions Workflow:**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v2
        id: deployment
```

4. **Access Your Site:**
   Your site will be available at `https://companywideai.github.io/talkclip-lander/`

### Option 2: Vercel (Recommended for Next.js)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **For Production:**
   ```bash
   vercel --prod
   ```

Vercel automatically detects Next.js projects and configures everything for you.

### Option 3: Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   netlify deploy --dir=out --prod
   ```

Or connect your GitHub repository directly in the Netlify dashboard.

### Option 4: Custom Server

If you have your own server:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload the `out` directory** to your web server

3. **Configure your web server** to serve the static files

## 🔧 Configuration

### Custom Domain

To use a custom domain (e.g., `talkclip.com`):

1. **Update `next.config.js`:**
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '', // Remove if using root domain
     images: {
       unoptimized: true,
     },
   }
   ```

2. **Configure DNS:**
   - For GitHub Pages: Add CNAME record pointing to `companywideai.github.io`
   - For Vercel/Netlify: Follow their custom domain setup guides

3. **Add CNAME file** (for GitHub Pages):
   Create `public/CNAME` with your domain:
   ```
   talkclip.com
   ```

### Environment Variables

If you need environment variables:

1. Create `.env.local` (already in `.gitignore`)
2. Add your variables:
   ```
   NEXT_PUBLIC_API_URL=https://api.talkclip.com
   ```
3. Access in code:
   ```typescript
   const apiUrl = process.env.NEXT_PUBLIC_API_URL
   ```

## 📊 Performance Tips

1. **Image Optimization:**
   - Add actual app screenshots to `public/` directory
   - Use Next.js `Image` component (requires server for optimization)
   - For static export, optimize images before adding

2. **Analytics:**
   Add Google Analytics or similar in `app/layout.tsx`

3. **SEO:**
   - Update metadata in `app/layout.tsx`
   - Add sitemap.xml to `public/`
   - Verify in Google Search Console

## 🔍 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Static Export Issues

Make sure you're not using:
- Dynamic routes without `generateStaticParams`
- Server actions
- API routes (use external API instead)

## 📝 Checklist Before Deployment

- [ ] Update metadata (title, description) in `app/layout.tsx`
- [ ] Add real app screenshots to replace placeholders
- [ ] Test responsive design on mobile/tablet/desktop
- [ ] Verify all links work correctly
- [ ] Add custom domain (if applicable)
- [ ] Set up analytics
- [ ] Test build locally: `npm run build && npx serve out`
- [ ] Add robots.txt and sitemap.xml
- [ ] Set up SSL certificate (auto with Vercel/Netlify)

## 🎯 Post-Deployment

1. **Test the deployed site** thoroughly
2. **Submit to Google Search Console**
3. **Share on social media** (links in footer)
4. **Monitor analytics**
5. **Update App Store link** when app is published

---

Need help? Check the [Next.js deployment documentation](https://nextjs.org/docs/deployment) or open an issue on GitHub.

