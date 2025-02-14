# Calico Portfolio

A modern portfolio website built with Next.js, featuring internationalization, dynamic content, and SEO optimization. Deployed on Vercel.

## 🚀 Features

- Next.js framework
- Internationalization (i18n) with react-intl
- SEO optimization with dynamic meta tags
- Markdown-based content for projects and services
- Swiper integration for sliders/carousels
- SCSS and CSS styling support
- Continuous Integration/Deployment with Vercel

## 🛠️ Tech Stack

- React.js
- Next.js
- React-Intl
- SCSS
- Swiper
- Vercel

## 🏃‍♂️ Getting Started

### Prerequisites

Make sure you have Node.js (v14 or higher) and npm/yarn installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone git@github.com:arielabaruffaldi/calico.git
cd calico
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add your environment variables:

```bash
NEXT_PUBLIC_FORMSPREE_API_KEY=your_api_key
```

4. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🌍 Internationalization

The application supports multiple languages through react-intl. Translation files are managed through JSON files for each supported locale.

## 🔍 SEO

The application includes comprehensive SEO meta tags including:
- Dynamic title and description
- Open Graph meta tags for social sharing
- Search engine crawler directives
- Site verification tags
- Sitemap configuration

## 🚀 Deployment

The application is automatically deployed to Vercel when changes are merged into the main branch.

### Deployment Process
1. Create a Pull Request to the main branch
2. Once approved and merged, Vercel automatically:
   - Builds the application
   - Runs tests
   - Deploys to production

