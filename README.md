# Investment Management - Next.js SaaS Template

A modern, production-ready Next.js 16 SaaS template built for Investment Management platforms and SaaS businesses. Features a complete set of pages, components, and functionality with React 19, TypeScript, Tailwind CSS 4, and cutting-edge web technologies. Perfect for building smart, fast, and reliable investment management solutions.

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-blue)
![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green)
![Lenis](https://img.shields.io/badge/Lenis-1.3.8-orange)

## 📦 What's Included

- ✅ **Complete Source Code** - Full Next.js 16 project with App Router
- ✅ **48 Pages** - Comprehensive page collection for Investment Management and SaaS businesses
- ✅ **222 Components** - Reusable React components with TypeScript
- ✅ **Markdown Support** - Blog posts, whitepapers, case studies, services, and more
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **SEO Optimized** - Built-in metadata and optimization
- ✅ **Dark/Light Mode** - Theme switching with next-themes

### ⚡ **Performance & Developer Experience**

- **Next.js 16**: Latest features with Turbopack support
- **TypeScript**: Full type safety and better developer experience
- **Component Architecture**: Reusable, modular components
- **Code Quality**: ESLint, Prettier, and Husky pre-commit hooks
- **Conventional Commits**: Structured commit messages with Commitlint
- **Markdown Content**: Easy content management with gray-matter

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.0 with App Router
- **Language**: TypeScript 5.0
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4.0
- **Animations**: GSAP 3.13.0, Lenis 1.3.8
- **Carousel**: Swiper 11.2.10
- **Maps**: Leaflet with React-Leaflet
- **Icons**: Custom icon font system

## 📋 Prerequisites

Before getting started, ensure you have:

- **Node.js** 20.0.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install
```

### 2. Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
ns-investment-management-next/
├── public/                     # Static assets
│   ├── images/                 # Images (332 files: 151 PNG, 150 SVG, 31 JPG)
│   │   ├── badge/              # Badge images
│   │   ├── icons/              # Icon images
│   │   └── shared/             # Shared logo images
│   ├── fonts/                  # Custom icon fonts (EOT, SVG, TTF, WOFF)
│   └── video/                  # Video assets (MP4)
├── src/
│   ├── app/                    # Next.js 16 App Router (48 pages)
│   │   ├── about/              # About page
│   │   ├── affiliate-policy/   # Affiliate policy page
│   │   ├── affiliates/         # Affiliates program page
│   │   ├── analytics/          # Analytics page
│   │   ├── blog/               # Blog pages
│   │   │   └── [slug]/         # Dynamic blog post pages
│   │   ├── brandkit/           # Brand kit page
│   │   ├── career/             # Career pages
│   │   │   └── [slug]/         # Dynamic job pages
│   │   ├── case-study/         # Case study pages
│   │   │   └── [slug]/         # Dynamic case study pages
│   │   ├── changelog/          # Changelog page
│   │   ├── contact-us/         # Contact page
│   │   ├── customer/           # Customer pages
│   │   │   └── [slug]/         # Dynamic customer pages
│   │   ├── documentation/      # Documentation page
│   │   ├── download/           # Download page
│   │   ├── faq/                # FAQ page
│   │   ├── features/           # Features page
│   │   ├── gdpr/               # GDPR page
│   │   ├── glossary/           # Glossary pages
│   │   │   └── [slug]/         # Dynamic glossary pages
│   │   ├── integration/        # Integration page
│   │   ├── legal/              # Legal notice page
│   │   ├── login/              # Login page
│   │   ├── our-manifesto/      # Our manifesto page
│   │   ├── press/              # Press page
│   │   ├── pricing/            # Pricing page
│   │   ├── privacy-policy/     # Privacy policy page
│   │   ├── process/            # Process page
│   │   ├── referral-program/   # Referral program page
│   │   ├── refund-policy/      # Refund policy page
│   │   ├── security/           # Security page
│   │   ├── services/           # Services pages
│   │   │   └── [slug]/         # Dynamic service pages
│   │   ├── signup/             # Signup page
│   │   ├── success-stories/    # Success stories page
│   │   ├── support/            # Support page
│   │   ├── team/               # Team pages
│   │   │   └── [slug]/         # Dynamic team member pages
│   │   ├── terms-conditions/   # Terms & conditions page
│   │   ├── testimonial/        # Testimonial page
│   │   ├── tutorial/           # Tutorial page
│   │   ├── use-case/           # Use case page
│   │   ├── whitepaper/         # Whitepaper pages
│   │   │   └── [slug]/         # Dynamic whitepaper pages
│   │   ├── why-choose-us/      # Why choose us page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout component
│   │   ├── not-found.tsx       # 404 page
│   │   └── page.tsx            # Homepage
│   ├── components/             # React components (222)
│   │   ├── about/              # About page components (6)
│   │   ├── affiliate-policy/   # Affiliate policy components (2)
│   │   ├── affiliates/         # Affiliates components (4)
│   │   ├── analytics/          # Analytics components (3)
│   │   ├── animation/          # Animation components (2)
│   │   ├── authentication/     # Auth components (4)
│   │   ├── blog/               # Blog components (4)
│   │   ├── blog-details/       # Blog detail components (3)
│   │   ├── brand-kit/          # Brand kit components (2)
│   │   ├── career/             # Career components (6)
│   │   ├── case-study/         # Case study components (6)
│   │   ├── change-log/         # Changelog components (4)
│   │   ├── contact-page/       # Contact components (2)
│   │   ├── customer/           # Customer components (6)
│   │   ├── customer-details/   # Customer detail components (2)
│   │   ├── documentation/      # Documentation components (1)
│   │   ├── download/           # Download components (2)
│   │   ├── faq/                # FAQ components (8)
│   │   ├── features/           # Features components (4)
│   │   ├── gdpr/               # GDPR components (1)
│   │   ├── glossary/           # Glossary components (5)
│   │   ├── glossary-details/   # Glossary detail components (2)
│   │   ├── home/               # Homepage components (11)
│   │   ├── integration/        # Integration components (1)
│   │   ├── legal-notice/       # Legal notice components (2)
│   │   ├── our-manifesto/      # Manifesto components (2)
│   │   ├── press/              # Press components (5)
│   │   ├── pricing/            # Pricing components (4)
│   │   ├── privacy/            # Privacy components (1)
│   │   ├── process/            # Process components (2)
│   │   ├── referral-program/   # Referral components (5)
│   │   ├── refund-policy/      # Refund policy components (1)
│   │   ├── security-compliance/# Security components (2)
│   │   ├── service-details/    # Service detail components (3)
│   │   ├── services/           # Services components (4)
│   │   ├── shared/             # Shared/reusable components (44)
│   │   │   ├── card/           # Card components
│   │   │   ├── cta/            # CTA components
│   │   │   ├── footer/         # Footer components
│   │   │   ├── mobile-menu/    # Mobile menu components
│   │   │   ├── navbar/         # Navigation components
│   │   │   ├── reviews/        # Review components
│   │   │   └── testimonial/    # Testimonial components
│   │   ├── success-stories/    # Success stories components (4)
│   │   ├── support/            # Support components (3)
│   │   ├── team/               # Team components (5)
│   │   ├── team-details/       # Team detail components (4)
│   │   ├── terms-conditions/   # Terms components (1)
│   │   ├── testimonial/        # Testimonial page components (3)
│   │   ├── tutorial/           # Tutorial components (9)
│   │   ├── ui/                 # Core UI components (12)
│   │   ├── use-case/           # Use case components (3)
│   │   ├── white-paper/        # Whitepaper components (5)
│   │   ├── whitepaper-details/ # Whitepaper detail components (4)
│   │   └── why-choose-us/      # Why choose us components (4)
│   ├── context/                # React contexts
│   │   ├── MobileMenuContext.tsx
│   │   ├── ModalContext.tsx
│   │   └── TabContext.tsx
│   ├── data/                   # Static data and content
│   │   ├── blogs/              # 28 Markdown blog posts
│   │   ├── career/             # 6 Markdown job listings
│   │   ├── case-study/         # 16 Markdown case studies
│   │   ├── customer/           # 11 Markdown customer stories
│   │   ├── services/           # 20 Markdown service descriptions
│   │   ├── team/               # 16 Markdown team member profiles
│   │   ├── whitepaper/         # 13 Markdown whitepapers
│   │   ├── json/               # JSON data files
│   │   │   ├── changelog/      # Changelog data
│   │   │   ├── faq/            # FAQ data
│   │   │   ├── glossary/       # Glossary data
│   │   │   ├── pricing/        # Pricing data
│   │   │   ├── team/           # Team data
│   │   │   └── testimonials/   # Testimonials data
│   │   ├── achievements.ts     # Achievement stats data
│   │   ├── faq.ts              # FAQ data
│   │   ├── footer-data.ts      # Footer links data
│   │   └── navbar-data.ts      # Navigation menu data
│   ├── hooks/                  # Custom React hooks
│   │   ├── useActiveSection.ts
│   │   ├── useBeforeAfterImageSlider.ts
│   │   ├── useDividerExpand.ts
│   │   ├── useLineExpandAnimation.ts
│   │   ├── useMobileMenu.ts
│   │   ├── useModal.ts
│   │   ├── useParallaxEffect.ts
│   │   ├── useProgressAnimation.ts
│   │   ├── useProgressStepsAnimation.ts
│   │   ├── useScrollHeader.ts
│   │   ├── useStackCards.ts
│   │   └── useWordAnimation.ts
│   ├── icons/                  # Icon components
│   │   ├── index.tsx
│   │   └── menu-icon/
│   ├── interface/              # TypeScript interfaces
│   │   └── index.ts
│   ├── styles/                 # CSS modules and styles
│   │   ├── badge.css
│   │   ├── base.css
│   │   ├── button.css
│   │   ├── common.css
│   │   ├── custom-swiper.css
│   │   ├── header.css
│   │   ├── icon-font.css
│   │   ├── lenis.css
│   │   ├── number-animation.css
│   │   ├── typography.css
│   │   ├── variables.css
│   │   └── vendor/             # Third-party styles
│   └── utils/                  # Utility functions
│       ├── cn.ts               # Class name utility
│       ├── font.ts             # Font configuration
│       ├── generateMetaData.ts # SEO metadata generator
│       ├── generateTOC.ts      # Table of contents generator
│       ├── getMarkDownContent.ts
│       ├── getMarkDownData.ts
│       ├── springer.ts         # Animation springs
│       └── stack-card/         # Stack card utilities
├── commitlint.config.cjs       # Commitlint configuration
├── eslint.config.mjs           # ESLint configuration
├── next.config.ts              # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### Code Quality Tools

This project uses several tools to maintain code quality:

- **ESLint 9**: JavaScript/TypeScript linting
- **Prettier 3**: Code formatting with Tailwind CSS plugin
- **Husky**: Git hooks for pre-commit checks
- **lint-staged**: Run linters on staged files only
- **Commitlint**: Enforce conventional commit messages

## 🎨 Customization

### Theme Customization

1. **Colors**: Edit `src/styles/variables.css` for color schemes
2. **Typography**: Modify font settings in `src/utils/font.ts`
3. **Components**: Customize components in `src/components/`
4. **Tailwind**: Update Tailwind configuration for design tokens

### Content Management

| Content Type    | Location                      | Count |
| --------------- | ----------------------------- | ----- |
| Blog Posts      | `src/data/blogs/`             | 28    |
| Services        | `src/data/services/`          | 20    |
| Team Members    | `src/data/team/`              | 16    |
| Case Studies    | `src/data/case-study/`        | 16    |
| Whitepapers     | `src/data/whitepaper/`        | 13    |
| Customers       | `src/data/customer/`          | 11    |
| Career Listings | `src/data/career/`            | 6     |
| Navigation      | `src/data/navbar-data.ts`     | -     |
| Footer Links    | `src/data/footer-data.ts`     | -     |
| FAQ Data        | `src/data/json/faq/`          | -     |
| Changelog       | `src/data/json/changelog/`    | -     |
| Glossary        | `src/data/json/glossary/`     | -     |
| Testimonials    | `src/data/json/testimonials/` | -     |
| Pricing         | `src/data/json/pricing/`      | -     |

### Adding New Pages

1. Create a new directory in `src/app/` (e.g., `src/app/new-page/`)
2. Add `page.tsx` file with your page component
3. Create corresponding components in `src/components/`
4. Update navigation data if needed in `src/data/navbar-data.ts`

Example:

```tsx
// src/app/new-page/page.tsx
import NewPageComponent from '@/components/new-page/NewPageComponent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'New Page - NextSaaS Investment Management',
  description: 'Description of the new page',
};

const NewPage = () => {
  return (
    <main>
      <NewPageComponent />
    </main>
  );
};

export default NewPage;
```

## 🏗️ Building for Production

### Build Process

```bash
# Create production build
npm run build

# Start production server
npm run start
```

### Build Output

- Static assets are optimized and compressed
- JavaScript is minified and tree-shaken
- CSS is purged and optimized
- Images are automatically optimized by Next.js
- Static pages are pre-rendered for better performance

### Performance Features

- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for better performance
- **SEO Optimization**: Built-in metadata and Open Graph support
- **Turbopack**: Fast development builds
- **Smooth Scrolling**: Lenis integration for smooth scroll experiences

## 🚀 Deployment

### Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js application:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The project can be deployed to:

- **Netlify**: Static site deployment with automatic builds
- **Railway**: Full-stack deployment with database support
- **DigitalOcean**: App Platform with automatic scaling
- **AWS**: Amplify or EC2 for enterprise solutions

### Deployment Steps

1. **Build the project**: Run `npm run build` locally to test
2. **Choose platform**: Select your preferred hosting provider
3. **Configure environment**: Set up any required environment variables
4. **Deploy**: Follow platform-specific deployment instructions

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Support

For support and questions:

- **Email**: [hello@pixel71.com](mailto:hello@pixel71.com)
- **Response Time**: Within 24 hours on business days

---

**Made with ❤️ by [pixel71](mailto:hello@pixel71.com)**

_Happy coding!_
