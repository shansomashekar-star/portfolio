# Deployment Guide

## Vercel Deployment (Recommended)

### Step 1: Prepare Your Repository

1. Initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. Push to GitHub:
   ```bash
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Configure environment variables (if needed):
   - `NEXT_PUBLIC_GA_ID` (optional)
   - `GITHUB_TOKEN` (optional)
6. Click "Deploy"

### Step 3: Post-Deployment

1. **Update URLs**:
   - Update `app/layout.tsx` metadata URLs to your Vercel domain
   - Update `app/robots.ts` sitemap URL
   - Update `app/sitemap.ts` if needed

2. **Add Custom Domain** (optional):
   - Go to Vercel project settings
   - Add your custom domain
   - Update DNS records as instructed

3. **Verify**:
   - Check all links work
   - Test dark/light mode toggle
   - Verify resume download works
   - Test mobile responsiveness

## Other Deployment Options

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables if needed

### Self-Hosted

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Configure reverse proxy (nginx example):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Performance Optimization

### Before Deployment Checklist

- [ ] Optimize images (use Next.js Image component)
- [ ] Enable compression
- [ ] Set up CDN (Vercel handles this automatically)
- [ ] Configure caching headers
- [ ] Test Lighthouse score (aim for >95)

### Performance Tips

1. **Images**: Use Next.js `Image` component for automatic optimization
2. **Fonts**: Fonts are already optimized with `next/font`
3. **Code Splitting**: Automatic with Next.js App Router
4. **Static Generation**: Pages are statically generated where possible

## Monitoring

### Analytics Setup

1. **Google Analytics**:
   - Create GA4 property
   - Get Measurement ID
   - Add to `.env.local` as `NEXT_PUBLIC_GA_ID`

2. **Vercel Analytics** (if using Vercel):
   - Enable in Vercel dashboard
   - No code changes needed

### Error Monitoring

Consider adding:
- Sentry for error tracking
- LogRocket for session replay
- Vercel Analytics for performance

## Troubleshooting

### Build Errors

- Ensure all dependencies are in `package.json`
- Check Node.js version (18+ required)
- Verify TypeScript compilation passes

### Runtime Errors

- Check browser console for errors
- Verify environment variables are set
- Check API endpoints if using external services

### Performance Issues

- Run Lighthouse audit
- Check bundle size with `npm run build`
- Optimize images and assets
- Enable compression

## Support

For issues or questions:
- Check Next.js documentation
- Review Vercel deployment docs
- Open an issue on GitHub
