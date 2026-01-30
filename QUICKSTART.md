# Quick Start Guide

## Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

## Setup Steps

1. **Navigate to project directory**:
   ```bash
   cd shan-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Before Deployment

1. **Add your resume**:
   - Replace `public/resume.pdf` with your actual resume PDF

2. **Update personal information**:
   - Edit sections in `components/sections/` to reflect your experience
   - Update social links in `components/footer.tsx` and `components/sections/resume-tools.tsx`
   - Update metadata in `app/layout.tsx`

3. **Configure analytics** (optional):
   - Copy `.env.example` to `.env.local`
   - Add your Google Analytics ID if desired

4. **Update URLs**:
   - Change the URL in `app/layout.tsx` metadata from `shan-portfolio.vercel.app` to your domain
   - Update sitemap URL in `app/robots.ts`

## Deploy to Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy!

That's it! Your portfolio is ready.
