# Powerhouse Decentralized Operations Platform - Technical Documentation

This document provides a comprehensive technical overview of the Powerhouse Decentralized Operations Platform codebase for AI analysis.

## Project Architecture

### Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS with custom configuration
- **Components**: React Server Components with Client Components where needed
- **Icons**: Lucide React
- **Animations**: Custom CSS animations and Canvas-based animations
- **State Management**: React Context API + useState for local state
- **Form Handling**: React Hook Form with Zod validation
- **API Integration**: Next.js API routes with custom fetchers

### Directory Structure

```
powerhouse-platform/
├── public/               # Static assets
│   ├── images/           # Product screenshots
│   └── logos/            # Brand and partner logos
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout with metadata and providers
│   ├── page.tsx          # Main page component
│   └── globals.css       # Global styles and Tailwind directives
├── components/           # React components
│   ├── ui/               # shadcn/ui components (imported)
│   ├── header.tsx        # Navigation component
│   ├── hero.tsx          # Hero section
│   └── ...               # Other section components
├── lib/                  # Utility functions
│   ├── utils.ts          # General utilities
│   └── animations.ts     # Animation utilities
├── hooks/                # Custom React hooks
│   ├── use-intersection.ts  # Intersection Observer hook
│   └── use-scroll.ts     # Scroll tracking hook
├── styles/               # Additional styles
└── tailwind.config.ts    # Tailwind configuration
```

## Component Architecture

### Page Composition

The main page (`app/page.tsx`) is composed of section components imported and rendered sequentially:

```tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Audience />
      <CaseStudy />
      <Ecosystem />
      <Contact />
      <Footer />
    </main>
  )
}
```

### Component Types

1. **Server Components (Default)**: Most section components are Server Components for improved performance
2. **Client Components**: Components with interactivity are marked with `'use client'` directive:
   - `header.tsx` - For mobile menu toggle
   - `animated-grid.tsx` - For canvas animations
   - `contact-form.tsx` - For form handling
   - `feature-toggles.tsx` - For interactive feature selection

### Key Components Analysis

#### Header Component

- **Type**: Client Component
- **Functionality**: Responsive navigation with mobile menu toggle
- **Data Structure**: Navigation items and social links stored as arrays of objects
- **State Management**: Uses React's `useState` for mobile menu toggle
- **Accessibility**: Implements proper ARIA attributes for menu items

#### Hero Component

- **Type**: Server Component
- **Key Features**:
  - Animated grid background (imported component)
  - Responsive typography with gradient overlay
  - Call-to-action buttons
- **Visual Elements**: Custom gradient text with dynamic animations

#### AnimatedGrid Component

- **Type**: Client Component
- **Implementation**: Canvas-based animation using `useRef` and `useEffect`
- **Animation Logic**:
  - Dynamic grid rendering based on viewport size
  - Subtle pulsing effect using sine waves
  - Random connecting lines between grid points
- **Performance Optimization**: Throttled render cycles and reduced node count on mobile

#### Benefits Component

- **Type**: Server Component
- **Layout**: Two-column grid with text content and product screenshots
- **Visual Elements**: Decorative borders and icon components from Lucide
- **Responsive Behavior**: Stack columns on mobile, side-by-side on larger screens

#### Contact Form Component

- **Type**: Client Component
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: Form state and submission state
- **API Integration**: Form submission to Next.js API route
- **User Feedback**: Loading states and success/error messages

## Styling Architecture

### Tailwind Configuration

The project uses a custom Tailwind configuration with:

- Extended color palette with neon-green as primary accent
- Custom animation definitions
- Extended typography settings
- Custom component classes
- Screen size breakpoints for responsive design

```typescript
// tailwind.config.ts
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#34eb4f',
        'neon-green-light': '#61ff78',
        'neon-green-dark': '#28c23e',
        'background': '#0a0a0a',
        'background-light': '#1a1a1a',
      },
      animation: {
        'grid-pulse': 'grid-pulse 4s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      // Additional theme extensions...
    },
  },
}
```

### CSS Strategy

1. **Component-Level Styles**: Tailwind utility classes directly in components
2. **Global Styles**: Defined in `globals.css` using `@layer` directives:

```css
@layer components {
  .container-custom { /* ... */ }
  .btn-primary { /* ... */ }
  .section-title { /* ... */ }
  /* etc. */
}
```

3. **Animation Definitions**: Custom keyframes for animations:

```css
@keyframes grid-pulse {
  "0%, 100%": { opacity: "0.6" },
  "50%": { opacity: "1" },
}
```

4. **Custom Components**: Extended UI components from shadcn/ui with custom styling

## Responsive Design Implementation

The site implements a mobile-first approach with responsive breakpoints:

- Default: Mobile styles
- `md:` (768px+): Tablet styles
- `lg:` (1024px+): Desktop styles

Key responsive patterns:

1. **Layout Shifts**: Grid columns change from 1 to multiple columns

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
```

2. **Typography Scaling**: Font sizes increase at larger breakpoints

```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl">
```

3. **Component Visibility**: Different components shown/hidden based on screen size

```tsx
<div className="hidden md:flex">
```

4. **Adaptive Images**: Different image sizes and layouts for different screen sizes

## Performance Considerations

1. **Image Optimization**: Next.js Image component used for automatic optimization
2. **Component Structure**: Logical separation of components for code splitting
3. **Animation Efficiency**: Canvas-based animations with throttled updates
4. **Font Loading**: Uses `next/font` for optimized font loading with Inter font
5. **Server Components**: Leverages React Server Components to reduce client-side JavaScript
6. **Lazy Loading**: Components below the fold are lazy-loaded

## Design System

The project implements a consistent design system with:

1. **Typography Scale**:
   - Headings: text-xl through text-6xl with consistent tracking
   - Body: text-base with appropriate line heights

2. **Color System**:
   - Primary: neon-green (`#34eb4f`) with light/dark variants
   - Background: Dark theme with subtle gradients
   - Text: White/gray scale for different emphasis levels

3. **Spacing System**: Consistent spacing using Tailwind's spacing scale
4. **Component Patterns**:
   - Cards with hover effects
   - Buttons with primary/secondary variants
   - Section titles with consistent styling

5. **Interaction States**: Consistent hover, focus, and active states for interactive elements

## Implementation Notes

1. **Canvas Animation**: The animated grid uses vanilla Canvas API rather than a library for better performance and control
2. **Mobile Menu**: Implemented with React state rather than a UI library for simplicity
3. **Image Strategy**: Product screenshots are positioned with subtle overlapping and decorative elements
4. **Typography Enhancement**: Custom letter-spacing and font features for improved readability
5. **Accessibility Considerations**:
   - Semantic HTML structure
   - Proper aria-labels on interactive elements
   - Sufficient color contrast
   - Keyboard navigation support

6. **SEO Optimization**:
   - Next.js metadata API for page-level SEO
   - Structured data for rich search results
   - Optimized asset loading

## Core Utility Functions

Key utility functions in `lib/utils.ts` include:

1. **cn**: Combines class names using clsx and tailwind-merge
2. **debounce**: Limits the rate at which a function can fire
3. **formatDate**: Formats dates consistently throughout the application
4. **createAnimationFrameRunner**: Utility for managing requestAnimationFrame

## Custom Hooks

1. **useIntersectionObserver**: Tracks element visibility for animations and lazy loading
2. **useScrollPosition**: Tracks scroll position for parallax effects and sticky headers
3. **useMediaQuery**: Responsive utility for conditional rendering based on screen size
4. **useLocalStorage**: Persists state in localStorage with type safety
