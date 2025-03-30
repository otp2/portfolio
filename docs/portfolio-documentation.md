# Neofolio Portfolio Documentation

This document provides an overview of the design system, page structure, and component architecture used in the Neofolio portfolio application.

## Table of Contents

- [Pages](#pages)
- [Color Scheme](#color-scheme)
- [Typography](#typography)
- [Components](#components)
- [Layout](#layout)
- [Responsive Design](#responsive-design)

## Pages

The application consists of the following pages:

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with overview of services, selected projects, testimonials, blog posts, and contact section |
| Projects | `/projects` | Portfolio showcase with grid layout of all projects |
| About | `/about` | Detailed biography, services offered, and animated testimonials |
| Blog | `/blog` | Collection of articles and posts |
| Blog Post | `/blog/:slug` | Individual blog post page |
| Contact | `/contact` | Contact form and details |
| Demo | `/demo` | Demo/showcase page for specific features |

## Color Scheme

The application uses a carefully selected color palette that adapts between light and dark modes:

### Base Colors

| Color | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| Background | `#f5f5f5` | `#000000` (black) | Main application background |
| Content Background | `#ffffff` (white) | `#151515` | Main content area background |
| Border | `#e5e5e5` (neutral-200) | `#222222` | Dividers, borders, and separators |
| Dark Border | - | `#333333` | Secondary borders in dark mode |

### Brand Colors

| Color | Value | Usage |
|-------|-------|-------|
| Primary | `#ad9c5f` (teak) | Main accent color, buttons, highlights |
| Primary Hover | `#9d8d50` | Hover state for primary buttons |
| Teak 15% | `rgba(173, 156, 95, 0.15)` | Background for subtle accents |
| Teak 30% | `rgba(173, 156, 95, 0.3)` | Background for medium accents |
| Teak 90% | `rgba(173, 156, 95, 0.9)` | Background for strong accents |

### Text Colors

| Color | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| Primary Text | `#0f172a` (neutral-950) | `#ffffff` (white) | Headings and primary text |
| Secondary Text | `#71717a` (neutral-500) | `#a1a1aa` (neutral-400) | Subheadings and secondary text |
| Tertiary Text | `#4b5563` (neutral-600) | `#a1a1aa` (neutral-400) | Paragraph text |

### Component Colors

| Component | Light Mode | Dark Mode |
|-----------|------------|-----------|
| Service Icon Background | `#f9f6ec` | `#222222` |
| Contact Icon Background | `#f9f6ec` | `#000000` (black) |
| Testimonial Background | `#f9f9f9` | `#222222` |
| Contact Card | `#ffffff` (white) | `#222222` |

## Typography

The application uses the Nunito font family throughout, with defined styles for different text elements:

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text, paragraphs |
| Medium | 500 | Buttons, navigation |
| Semi-bold | 600 | Section headings |
| Bold | 700 | Main headings, emphasis |

### Text Styles

| Style | Font Size | Line Height | Font Weight | Usage |
|-------|-----------|-------------|------------|-------|
| Heading 1 | 2.5rem (40px) | 1.2 | 600 | Main page headings |
| Heading 2 | 1.5rem (24px) | 1.33 | 600 | Section headings |
| Heading 3 | 1.25rem (20px) | 1.4 | 600 | Subsection headings |
| Body | 1rem (16px) | 1.5 | 400 | Regular paragraph text |
| Small | 0.875rem (14px) | 1.43 | 400 | Secondary information |
| XS | 0.75rem (12px) | 1.33 | 400 | Meta information, captions |

## Components

Key reusable components in the application:

### UI Components

| Component | Description | Location |
|-----------|-------------|----------|
| Button | Primary and outline variants | `/components/ui/button.tsx` |
| Badge | Small labels with icons | `/components/ui/badge.tsx` |
| Avatar | User profile images | `/components/ui/avatar.tsx` |
| Card | Content containers | `/components/ui/card.tsx` |
| Separator | Horizontal dividers | `/components/ui/separator.tsx` |
| ThemeToggle | Light/dark mode switch component | `/components/ui/theme-toggle.tsx` |
| AnimatedTestimonials | Interactive testimonial display | `/components/ui/animated-testimonials.tsx` |
| Carousel | Image/content carousel | `/components/ui/carousel.tsx` |
| ProgressiveBlur | Progressive blurring effect | `/components/ui/progressive-blur.tsx` |

### Layout Components

| Component | Description | Location |
|-----------|-------------|----------|
| Sidebar | Main navigation sidebar | `/components/Sidebar.tsx` |
| MobileHeader | Header for mobile devices | `/components/MobileHeader.tsx` |
| GetTemplateButton | CTA button | `/components/GetTemplateButton.tsx` |
| ThemeToggle | Wrapper for the UI ThemeToggle | `/components/ThemeToggle.tsx` |

## Layout

The application uses a consistent layout structure:

- Fixed sidebar navigation (left side, 16rem/64px wide) on desktop
- Full-width mobile layout with hamburger menu
- Main content area with rounded corners and padding
- Fixed position elements:
  - Theme toggle (bottom left)
  - Template button (bottom right)

## Responsive Design

The application adapts to different screen sizes:

| Breakpoint | Size | Layout Changes |
|------------|------|----------------|
| Mobile | < 768px | Sidebar hidden, hamburger menu appears |
| Tablet/Desktop | ≥ 768px | Sidebar visible, main content area adjusted |

### Mobile Adjustments

- Single column layouts instead of multi-column
- Stacked elements instead of side-by-side
- Adjusted spacing and padding
- Hamburger menu for navigation
- Simplified header with profile information

### Desktop Optimizations

- Multi-column layouts for content
- Side-by-side elements where appropriate
- Persistent sidebar navigation
- Optimized spacing and layout