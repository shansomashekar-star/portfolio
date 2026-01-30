# Shanmuganathan Somashekar - Portfolio Website

A premium, job-winning personal portfolio website showcasing expertise in Data Science, Machine Learning, and Applied AI.

## 🚀 Features

- **Modern Design**: YC/OpenAI/Stripe-inspired clean, high-trust design
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Performance**: Optimized for >95 Lighthouse score
- **SEO Optimized**: Complete meta tags, OpenGraph, and sitemap
- **Interactive Sections**:
  - Hero with compelling CTAs
  - Impact Dashboard with animated metrics
  - Detailed Case Studies (5 projects)
  - Filterable Technical Skills Matrix
  - Experience Timeline
  - Research & Thought Leadership
  - Resume & Recruiter Tools

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd shan-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Update Personal Information

1. **Hero Section**: Edit `components/sections/hero-section.tsx`
2. **About Section**: Edit `components/sections/about-section.tsx`
3. **Experience**: Edit `components/sections/experience-timeline.tsx`
4. **Case Studies**: Edit `components/sections/case-studies-section.tsx`
5. **Skills**: Edit `components/sections/skills-matrix.tsx`

### Update Metadata & SEO

Edit `app/layout.tsx` to update:
- Title
- Description
- OpenGraph tags
- Twitter cards

### Add Your Resume

1. **Important**: Replace the placeholder `public/resume.pdf` with your actual resume PDF file
2. The resume will be accessible at `/resume.pdf` and downloadable via the "Download Resume" button
3. For ATS-friendly export, the component generates a plain text version automatically

### Social Links

Update social links in:
- `components/footer.tsx`
- `components/sections/resume-tools.tsx`

### Analytics

To add Google Analytics:

1. Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   ```

2. Add the Google Analytics script to `app/layout.tsx`:
   ```tsx
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
     strategy="afterInteractive"
   />
   ```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live!

### Environment Variables

If using analytics or GitHub API:
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID
- `GITHUB_TOKEN`: GitHub personal access token (optional, for private repos)

## 📁 Project Structure

```
shan-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # SEO sitemap
│   └── robots.ts           # SEO robots.txt
├── components/
│   ├── sections/           # Page sections
│   │   ├── hero-section.tsx
│   │   ├── impact-dashboard.tsx
│   │   ├── about-section.tsx
│   │   ├── case-studies-section.tsx
│   │   ├── skills-matrix.tsx
│   │   ├── experience-timeline.tsx
│   │   ├── research-section.tsx
│   │   └── resume-tools.tsx
│   ├── header.tsx          # Navigation header
│   ├── footer.tsx          # Footer
│   ├── theme-provider.tsx  # Dark/light mode
│   └── analytics.tsx       # Analytics component
├── lib/
│   ├── utils.ts            # Utility functions
│   └── github.ts           # GitHub API integration
├── public/
│   └── resume.pdf          # Resume file
└── package.json
```

## 🎯 Performance Optimization

- Images are optimized with Next.js Image component
- Code splitting with dynamic imports
- Static generation where possible
- Minimal JavaScript bundle size
- CSS optimization with Tailwind

## 📝 Content Guidelines

### Case Studies

Each case study should include:
- **Problem**: Clear problem statement
- **Data Scale**: Volume and complexity
- **Technical Approach**: Step-by-step methodology
- **Tools**: Technologies used
- **Business Outcome**: Measurable results
- **Learnings**: Key takeaways

### Skills

Organize skills by category:
- ML & AI
- Data Engineering
- Cloud
- Analytics
- Programming

## 🔧 Development

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome!

## 📧 Contact

- **Email**: shan.somashekar@gmail.com
- **LinkedIn**: [linkedin.com/in/shanmuganathansomashekar](https://linkedin.com/in/shanmuganathansomashekar)
- **GitHub**: [github.com/shanmuganathansomashekar](https://github.com/shanmuganathansomashekar)

---

Built with ❤️ using Next.js and TypeScript
# portfolio
# portfolio
# portfolio
# portfolio
