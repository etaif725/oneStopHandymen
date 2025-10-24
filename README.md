# Property Fixer Kit - Professional Handyman Services

A modern, production-ready website for a professional handyman and property maintenance service company. Built with cutting-edge technologies and designed with award-winning UI/UX principles.

## Overview

Property Fixer Kit is a comprehensive web application showcasing handyman services, property management, and residential/commercial maintenance solutions. The platform features a modern design with glass morphism effects, smooth animations, and an intuitive user experience optimized for lead generation and customer engagement.

## Key Features

### 🎨 Modern Design System
- Award-winning UI with glass morphism and gradient effects
- Fully responsive design optimized for all devices
- Smooth animations powered by Framer Motion
- Custom color system with primary, secondary, and accent themes
- Floating navigation with dynamic scroll effects

### 🛠️ Core Functionality
- **Dynamic Lead Generation Forms** - Smart forms with validation and real-time feedback
- **Service Catalog** - Comprehensive showcase of all services offered
- **Interactive Service Areas** - Visual map-based coverage area display with zip codes
- **Contact Management** - Multi-channel contact options (phone, email, form)
- **Testimonials Carousel** - Animated customer reviews
- **FAQ System** - Accordion-based frequently asked questions
- **Google Maps Integration** - Location finder with embedded maps

### 📱 Pages & Components
- **Home** - Hero section with lead-gen form, stats, services overview, testimonials
- **About** - Company story, team profiles, mission & values
- **Services** - Detailed service descriptions with individual CTAs
- **Contact** - Comprehensive contact form with FAQ and map
- **Gallery** - Portfolio showcase (ready for implementation)
- **404** - Custom not-found page

### 🔧 Advanced Features
- **Promotional Bar** - Sticky top banner with rotating FOMO promotions
- **Promo Code System** - Auto-population of forms with promo tracking
- Date and time picker for appointment scheduling
- Multi-select service options with visual feedback
- Real-time form validation with Zod schemas
- Toast notifications for user feedback
- Floating contact button for quick access
- Animated statistics counters
- Parallax scroll effects
- Wave separators between sections
- Webhook integration for form submissions

## Technology Stack

### Frontend
- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Professional animations
- **shadcn/ui** - High-quality component library

### UI Components
- Accordion, Alerts, Avatars
- Buttons, Cards, Carousels
- Dialogs, Dropdowns, Forms
- Input fields (text, textarea, select, date)
- Radio groups, Checkboxes, Switches
- Tables, Tabs, Tooltips
- Toast notifications
- And more...

### Backend Integration
- **Webhook Integration** - Form submissions sent to configurable webhook URL
- Supports Zapier, Make.com, n8n, and custom endpoints
- Form data handling and validation with Zod
- Promotional code tracking

## Project Structure

```
property-fixer-kit-main/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Hero.tsx        # Landing hero with lead-gen form
│   │   ├── Navigation.tsx  # Floating nav with scroll effects
│   │   ├── Footer.tsx      # Modern footer design
│   │   ├── PromoBar.tsx    # Sticky promotional banner with FOMO
│   │   ├── LeadGenForm.tsx # Reusable lead generation form
│   │   ├── ServicesSection.tsx
│   │   ├── Testimonials.tsx
│   │   ├── ServiceAreas.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── CTASection.tsx
│   │   ├── StatsSection.tsx
│   │   └── FloatingContactButton.tsx
│   ├── pages/              # Main application pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   ├── Gallery.tsx
│   │   └── NotFound.tsx
│   ├── schemas/            # Zod validation schemas
│   │   └── contactFormSchema.ts
│   ├── integrations/       # External service integrations
│   │   └── supabase/
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── assets/             # Images and static files
├── supabase/               # Supabase configuration
│   └── functions/          # Edge functions
├── public/                 # Public assets
├── WEBHOOK_SETUP.md        # Webhook integration guide
├── .env.local.example      # Environment variables template
└── ...config files
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm (preferred) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd property-fixer-kit-main
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_FORM_WEBHOOK=https://your-webhook-url.com/webhook
   VITE_FORM_API_KEY=your-api-key-here
   ```
   
   **Note:** The `VITE_FORM_API_KEY` is optional and will be sent as `x-make-apikey` header for webhook authentication.

4. **Start the development server**
   ```bash
   pnpm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run lint` - Run ESLint

## Development Guidelines

### Component Architecture
- All UI components follow atomic design principles
- Reusable components are stored in `src/components/`
- Page-specific components can be co-located with pages
- shadcn/ui components are in `src/components/ui/`

### Styling Conventions
- Tailwind CSS utility classes for styling
- Custom design tokens defined in `src/index.css`
- Glass morphism: `bg-white/10 backdrop-blur-md`
- Gradients: Use `gradient-accent` and `gradient-glass` utilities
- Animations: Framer Motion for complex animations, Tailwind for simple ones

### Form Handling
- All forms use Zod for validation
- Toast notifications for user feedback
- `LeadGenForm` component has two variants:
  - `compact` - For hero sections and sidebars
  - `default` - For full contact pages

### Color System
- **Primary**: Blue tones for trust and professionalism
- **Secondary**: Complementary accent color
- **Accent**: Call-to-action and highlights
- **Muted**: Background and subtle elements

## Design Features

### Glass Morphism
Modern translucent design with backdrop blur effects creating depth and hierarchy.

### Smooth Animations
- Scroll-triggered animations
- Hover effects with scale and lift
- Floating elements
- Parallax effects
- Page transitions

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Touch-friendly interface elements

## Performance Optimizations

- Lazy loading for images and components
- Optimized animations with `pointer-events-none` on decorative elements
- Minimal re-renders with proper React hooks usage
- Tree-shaking with Vite
- Code splitting for route-based chunks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Build for Production
```bash
pnpm run build
```

The optimized build will be in the `dist/` directory.

### Deploy to Hosting
This project can be deployed to:
- Vercel
- Netlify
- AWS Amplify
- Any static hosting service

## Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - shadcn/ui configuration
- `supabase/config.toml` - Supabase local development

## Contributing

When contributing to this project:
1. Follow the existing code style
2. Use TypeScript for type safety
3. Test on multiple screen sizes
4. Ensure all forms validate properly
5. Maintain accessibility standards

## License

This project is proprietary and confidential.

## Contact

For questions or support regarding this project, please contact the development team.

---

**Built with ❤️ using modern web technologies**
