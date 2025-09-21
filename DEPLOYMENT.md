# Deployment Guide

## Quick Deployment Options

### 1. Vercel (Recommended - Zero Config)

1. **Push to GitHub**:
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy" (no configuration needed)

### 2. Netlify

1. **Build the project**:
   \`\`\`bash
   npm run build
   \`\`\`

2. **Deploy**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder
   - Or connect your GitHub repository

### 3. GitHub Pages

1. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Select "GitHub Actions" as source

2. **Add GitHub Action** (`.github/workflows/deploy.yml`):
   \`\`\`yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   \`\`\`

### 4. Manual Hosting

1. **Build**:
   \`\`\`bash
   npm run build
   \`\`\`

2. **Upload**: Upload the `out` folder to any web hosting service

## Environment Setup

### Node.js Version
- Minimum: Node.js 18+
- Recommended: Node.js 20+

### Package Manager
- npm 8+
- yarn 1.22+
- pnpm 8+

## Build Commands

\`\`\`bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
\`\`\`

## Troubleshooting

### Build Errors
1. Clear cache: `rm -rf .next node_modules package-lock.json`
2. Reinstall: `npm install`
3. Rebuild: `npm run build`

### Image Issues
- Ensure images are in `public/images/`
- Check file paths are correct
- Verify image formats (jpg, png, webp)

### Deployment Issues
- Check Node.js version compatibility
- Verify all dependencies are installed
- Ensure build completes without errors

## Performance Optimization

The project is already optimized with:
- Static export for fast loading
- Image optimization
- CSS minification
- Tree shaking
- Gzip compression (on most hosts)

## Custom Domain

### Vercel
1. Go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS records

### Netlify
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Configure DNS records

## SSL Certificate

Both Vercel and Netlify provide free SSL certificates automatically.
