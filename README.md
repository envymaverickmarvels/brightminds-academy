# 🎓 BrightMinds Academy

A modern, responsive marketing website for an educational coaching institute built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

<p align="center">
  <img src="public/preview.png" alt="BrightMinds Academy Preview" width="100%">
</p>

## ✨ Features

### Core Features
- 🎨 **Modern UI/UX** - Clean, professional design with playful elements suitable for education
- 🌓 **Dark/Light Mode** - System preference detection with manual toggle
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance** - Built with Next.js App Router and React Server Components
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and structured data
- ♿ **Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation

### Pages
- 🏠 **Home** - Hero section, benefits, grade showcase, stats, testimonials, CTA
- 📚 **Courses** - Detailed program information for Grades 1-8
- 👥 **About** - Company story, mission, faculty profiles, facilities
- 💬 **Testimonials** - Parent reviews with ratings
- ❓ **FAQ** - Accordion-based frequently asked questions
- 📞 **Contact** - Contact form, location map, multiple contact methods

### Technical Features
- 🎭 **Scroll Animations** - Intersection Observer based reveal animations
- 📝 **Contact Form** - Client-side validation with success states
- 💬 **WhatsApp Integration** - Direct chat links with pre-filled messages
- 🎨 **CSS-first Tailwind v4** - Using `@theme` directive for configuration
- 🧩 **Modular Components** - Reusable UI components following shadcn/ui patterns

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| UI Components | [Radix UI](https://www.radix-ui.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Animations | [tw-animate-css](https://github.com/tw-animate-css) |
| Class Utilities | [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) |
| Variant Management | [class-variance-authority](https://cva.style/) |

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/brightminds-academy.git
   cd brightminds-academy

2. **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install

3. **Run the development server**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev

4. **Open your browser**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev

### 📁 Project Structure
```
brightminds-academy/
├── app/
│   ├── globals.css          # Global styles & Tailwind v4 theme
│   ├── layout.js            # Root layout with providers
│   ├── page.js              # Home page
│   ├── about/
│   │   └── page.js          # About page
│   ├── courses/
│   │   └── page.js          # Courses page
│   ├── contact/
│   │   └── page.js          # Contact page
│   ├── testimonials/
│   │   └── page.js          # Testimonials page
│   └── faq/
│       └── page.js          # FAQ page
├── components/
│   ├── ui/                  # Base UI components
│   │   ├── accordion.jsx
│   │   ├── badge.jsx
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── input.jsx
│   │   └── textarea.jsx
│   ├── layout/              # Layout components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── sections/            # Page sections
│   │   ├── Hero.jsx
│   │   ├── Benefits.jsx
│   │   ├── GradeShowcase.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTASection.jsx
│   │   └── Stats.jsx
│   ├── shared/              # Shared components
│   │   ├── AnimatedSection.jsx
│   │   ├── ThemeProvider.jsx
│   │   └── ThemeToggle.jsx
│   └── forms/               # Form components
│       └── ContactForm.jsx
├── lib/
│   ├── utils.js             # Utility functions
│   └── constants.js         # Site configuration & data
├── public/
│   └── images/              # Static images
├── package.json
├── next.config.js
├── postcss.config.mjs
└── jsconfig.json
```
