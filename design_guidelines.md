# Design Guidelines: Cutilagem Russa Course Landing Page

## Design Approach
**Reference-Based Strategy**: Drawing inspiration from high-converting beauty course platforms (Hotmart, Eduzz) combined with modern e-commerce aesthetics (Glossier, Sephora). Focus on trust-building through social proof, clear value communication, and urgency-driven conversion elements.

## Core Design Elements

### Typography System
- **Primary Font**: 'Montserrat' (Google Fonts) - modern, clean, perfect for beauty industry
- **Headings**: Bold (700) for H1/H2, SemiBold (600) for H3
  - H1: 3.5rem desktop / 2.25rem mobile
  - H2: 2.5rem desktop / 1.875rem mobile  
  - H3: 1.5rem desktop / 1.25rem mobile
- **Body**: Regular (400), Medium (500) for emphasis
  - Large: 1.125rem (testimonials, important info)
  - Regular: 1rem (standard content)
  - Small: 0.875rem (disclaimers, fine print)

### Spacing System
**Tailwind Units**: Consistent use of 4, 6, 8, 12, 16, 20, 24 for harmonious rhythm
- Section padding: py-20 desktop / py-12 mobile
- Card padding: p-8 desktop / p-6 mobile
- Element gaps: gap-6 or gap-8 for grids
- Container max-width: max-w-6xl for content sections

### Layout Architecture

**Hero Section** (100vh)
- Full-width hero image: Professional beauty salon setting or close-up of Russian manicure technique
- Centered content overlay with blurred background for readability
- Headline + subheadline structure
- Price badge showing original R$197.00 crossed out, new price R$19.90 prominent
- "90% OFF - Por Tempo Limitado" urgency banner
- Primary CTA button with blur background effect
- Social proof indicator: "12.847 Alunas Matriculadas" with small student avatars

**Curso Completo Section** (py-20)
- 2-column layout desktop / single-column mobile
- Left: Large feature image showing course materials/interface
- Right: Course modules breakdown
  - 8-10 module cards with checkmark icons
  - Each card: Module title + brief description + duration
  - Stacked layout with subtle borders

**11 Bônus Exclusivos Section** (py-20)
- Attention-grabbing header with badge: "BÔNUS EXCLUSIVOS"
- 3-column grid desktop / 2-column tablet / 1-column mobile
- Each bonus card:
  - Icon or small image representing the bonus
  - Bonus title (bold)
  - Value indicator: "Valor: R$XX"
  - Brief description (2-3 lines)
- Total value counter at bottom: "Valor Total dos Bônus: R$XXX"

**Depoimentos Section** (py-24)
- Header: "O Que Nossas Alunas Dizem"
- Masonry grid layout: 3 columns desktop / 2 tablet / 1 mobile
- Testimonial cards with varied heights (authentic look):
  - Student photo (circular, 64px)
  - 5-star rating (using star icons)
  - Quote text (italic, 1.125rem)
  - Student name + occupation
  - Before/after nail images for 3-4 testimonials
- 8-12 testimonials total for credibility

**Detalhes do Curso Section** (py-20)
- Split layout with subtle background treatment
- Left side: 
  - "Acesso Imediato" with clock icon
  - "Certificado Incluído" with badge icon
  - "Suporte Exclusivo" with chat icon
  - "Garantia 7 Dias" with shield icon
- Right side:
  - Course statistics grid:
    - "X Horas de Conteúdo"
    - "XX Vídeo-Aulas"
    - "Material PDF Incluso"
    - "Acesso Vitalício"

**FAQ Section** (py-20)
- "Perguntas Frequentes" header
- Accordion-style layout (max-w-3xl centered)
- 8-10 FAQ items with expand/collapse functionality indicators
- Questions addressing: payment, access, prerequisites, certification, support, refund policy

**CTA Final Section** (py-24)
- Full-width with gradient background overlay
- Centered content (max-w-4xl)
- Urgency elements:
  - Countdown timer (visual blocks for days, hours, minutes)
  - "Últimas Vagas" indicator
  - Price comparison: R$197 → R$19.90
- Multiple trust badges: Secure payment, Money-back guarantee, Instant access
- Large primary CTA button
- Payment method icons below CTA
- Small trust footer: "Compra 100% Segura e Protegida"

## Component Library

### Buttons
- **Primary CTA**: Large (py-4 px-10), bold text (font-semibold), rounded (rounded-lg), with background blur when over images
- **Secondary**: Outlined version, same sizing
- No hover animations specified - implementation handles states

### Cards
- **Bonus Cards**: p-6, rounded-xl, subtle shadow, border-2
- **Testimonial Cards**: p-6, rounded-lg, shadow-md
- **Module Cards**: p-4, rounded-lg, border, slight hover lift effect

### Icons
- **Library**: Heroicons via CDN
- Usage: Checkmarks, stars, clock, shield, badge, chat icons
- Size: w-6 h-6 for inline, w-8 h-8 for feature icons

### Badges
- **Price Badge**: Inline with strikethrough for old price, bold large for new price
- **Urgency Badge**: Small, uppercase, rounded-full, positioned top-right or above hero
- **Guarantee Badge**: Shield icon with "7 Dias de Garantia"

## Images Section

### Required Images:
1. **Hero Image**: Full-width, high-quality photo of Russian manicure procedure - hands with elegant nails, professional salon setting, bright and clean aesthetic (minimum 1920x1080)

2. **Course Interface Preview**: Screenshot or mockup of course platform showing video player and module list (approx. 800x600)

3. **Bonus Icons/Images**: 11 small representative images for each bonus (300x200 each)

4. **Student Photos**: 8-12 circular headshots for testimonials (200x200 each)

5. **Before/After Gallery**: 3-4 sets of nail transformation photos for credibility (600x400 each)

6. **Trust Badges**: Payment method logos (Visa, Mastercard, Pix, etc.), security seals

### Image Placement:
- Hero: Full-screen background with content overlay
- Course section: Large image left column
- Bonuses: Icon-style images above each card
- Testimonials: Integrated within testimonial cards
- Before/After: Grid within testimonials section

## Accessibility Standards
- Consistent focus states on all interactive elements
- Sufficient contrast maintained throughout (pink on white requires careful selection)
- Form inputs with clear labels and validation states
- Icon-only buttons include aria-labels
- Semantic HTML structure for screen readers