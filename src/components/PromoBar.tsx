import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Percent, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * PromoBar - A sticky top promotional banner with FOMO elements
 * 
 * Features:
 * - Auto-cycles through promotional offers every 3.5 seconds
 * - Smooth fade-in-out animations with ease-in-out timing
 * - Temporarily dismissible (reappears on page refresh)
 * - Progress indicator dots showing current promo
 * - Responsive design with mobile-optimized layout
 * - CTA button linking to contact page with promo code
 * - Dynamic expiration dates - automatically hides expired promos
 * - Relative time display ("3 days left", "Ends today", etc.)
 * - Supports both time-limited and evergreen promotions
 */
const PromoBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  // Helper function to calculate relative time
  const getRelativeTime = (expiryDate: Date | null) => {
    if (!expiryDate) return null;
    
    const now = new Date();
    const diff = expiryDate.getTime() - now.getTime();
    
    if (diff < 0) return 'expired';
    
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Ends today!';
    if (days === 1) return 'Ends tomorrow!';
    if (days <= 7) return `${days} days left`;
    if (days <= 14) return 'Ends in 2 weeks';
    if (days <= 30) return 'Ends this month';
    return `Ends in ${Math.ceil(days / 30)} months`;
  };

  // Helper function to create a date (null means no expiry)
  const createExpiryDate = (year: number, month: number, day: number) => {
    return new Date(year, month - 1, day, 23, 59, 59);
  };

  const allPromos = [
    {
      service: 'Handyman Services',
      type: 'discount',
      message: '15% OFF Handyman Services',
      detail: 'Book this week & save',
      expiryDate: null, // No expiry - always active
      cta: 'Claim',
      icon: Percent,
      bgGradient: 'from-primary to-primary/80',
      promoCode: 'HANDYMAN15',
    },
    {
      service: 'Property Staging & Prep',
      type: 'limited',
      message: '5 Spots Left - Property Staging',
      detail: 'Until December 31st',
      expiryDate: createExpiryDate(2025, 12, 31), // December 31, 2025
      cta: 'Reserve',
      icon: Users,
      bgGradient: 'from-primary to-primary/80',
      promoCode: 'STAGING5',
    },
    {
      service: 'Lock Replacement & Installation',
      type: 'discount',
      message: '20% OFF Lock Installation',
      detail: 'Secure your property today',
      expiryDate: null, // No expiry - always active
      cta: 'Quote',
      icon: Percent,
      bgGradient: 'from-primary to-primary/80',
      promoCode: 'LOCKS20',
    },
    {
      service: 'Property Management Solutions',
      type: 'limited',
      message: '3 Property Management Slots',
      detail: '1st month free - Ends Jan 15th',
      expiryDate: createExpiryDate(2026, 1, 15), // January 15, 2026
      cta: 'Sign Up',
      icon: Users,
      bgGradient: 'from-primary to-primary/80',
      promoCode: 'PROPMGMT3',
    },
    {
      service: 'Residential Maintenance',
      type: 'discount',
      message: '10% OFF Annual Maintenance',
      detail: 'Year-round protection',
      expiryDate: null, // No expiry - always active
      cta: 'Details',
      icon: Percent,
      bgGradient: 'from-primary to-primary/80',
      promoCode: 'RESMAINT10',
    },
    {
      service: 'Commercial Property Care',
      type: 'limited',
      message: '4 Commercial Contracts Left',
      detail: 'Priority until Jan 20th',
      expiryDate: createExpiryDate(2026, 1, 20), // January 20, 2026
      cta: 'Contact',
      icon: Clock,
      bgGradient: 'from-primary to-primary/80',
      promoCode: 'COMMERCIAL4',
    },
    {
      service: 'Remodeling & Custom Projects',
      type: 'discount',
      message: '25% OFF Custom Deck Building',
      detail: 'Limited winter special',
      expiryDate: createExpiryDate(2026, 3, 31), // March 31, 2026 - end of winter
      cta: 'Start',
      icon: Percent,
      bgGradient: 'from-primary to-primary/80',
      promoCode: 'DECK25',
    },
    {
      service: 'Roofing Services',
      type: 'limited',
      message: '6 Roof Inspection Slots Left',
      detail: 'Free with repair - Dec 28th',
      expiryDate: createExpiryDate(2025, 12, 28), // December 28, 2025
      cta: 'Book',
      icon: Users,
      bgGradient: 'from-primary to-primary/80',
      promoCode: 'ROOF6FREE',
    },
    {
      service: 'Painting Services',
      type: 'discount',
      message: '18% OFF Painting Services',
      detail: 'Interior & exterior',
      expiryDate: null, // No expiry - always active
      cta: 'View',
      icon: Percent,
      bgGradient: 'from-primary to-primary/80',
      promoCode: 'PAINT18',
    },
    {
      service: 'Pressure Washing',
      type: 'limited',
      message: '8 Pressure Washing Spots Left',
      detail: 'Book before Jan 5th',
      expiryDate: createExpiryDate(2026, 1, 5), // January 5, 2026
      cta: 'Schedule',
      icon: Clock,
      bgGradient: 'from-primary to-primary/80',
      promoCode: 'PRESSURE8',
    },
    {
      service: 'Pre-Winter Roof Cleaning',
      type: 'discount',
      message: '30% OFF Roof Cleaning',
      detail: 'Prepare now, save big',
      expiryDate: createExpiryDate(2026, 2, 28), // February 28, 2026
      cta: 'Quote',
      icon: Percent,
      bgGradient: 'from-primary to-primary/80',
      promoCode: 'ROOFCLEAN30',
    },
    {
      service: 'Gutter Cleaning Before Winter',
      type: 'discount',
      message: '25% OFF Gutter Cleaning',
      detail: 'Winter prep special',
      expiryDate: createExpiryDate(2026, 2, 15), // February 15, 2026
      cta: 'Quote',
      icon: Percent,
      bgGradient: 'from-primary to-primary/80',
      promoCode: 'GUTTER25',
    },
    {
      service: 'Garage Door Painting',
      type: 'discount',
      message: '20% OFF Garage Door Painting',
      detail: 'Transform your curb appeal',
      expiryDate: null, // No expiry - always active
      cta: 'Start',
      icon: Percent,
      bgGradient: 'from-primary to-primary/80',
      promoCode: 'GARAGE20',
    },
    {
      service: 'Holiday Light Installation',
      type: 'limited',
      message: '5 Holiday Light Slots Left',
      detail: 'Until December 15th',
      expiryDate: createExpiryDate(2025, 12, 15), // December 15, 2025
      cta: 'Reserve',
      icon: Users,
      bgGradient: 'from-primary to-primary/80',
      promoCode: 'HOLIDAY5',
    },
    {
      service: 'Other',
      type: 'discount',
      message: 'FREE Virtual Consultation',
      detail: 'First 10 clients - No obligation',
      expiryDate: null, // No expiry - always active
      cta: 'Book',
      icon: Percent,
      bgGradient: 'from-primary to-primary/80',
      promoCode: 'VIRTUALFREE',
    },
  ];

  // Filter out expired promos
  const promos = allPromos.filter(promo => {
    if (!promo.expiryDate) return true; // Keep promos with no expiry
    return promo.expiryDate.getTime() > new Date().getTime();
  }).map(promo => ({
    ...promo,
    dynamicDetail: promo.expiryDate ? getRelativeTime(promo.expiryDate) || promo.detail : promo.detail,
  }));

  // Cycle through promos
  useEffect(() => {
    if (isDismissed || promos.length === 0) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % promos.length);
        setIsVisible(true);
      }, 500); // Half second for fade out before changing content
    }, 3500); // Show each promo for 3.5 seconds total

    return () => clearInterval(interval);
  }, [isDismissed, promos.length]);

  // Dismiss temporarily - will reappear on page refresh
  const handleDismissTemporarily = () => {
    setIsDismissed(true);
  };

  useEffect(() => {
    const root = document.documentElement;

    const syncPromoHeight = () => {
      if (isDismissed || promos.length === 0) {
        root.style.setProperty('--promo-h', '0px');
        return;
      }
      requestAnimationFrame(() => {
        const height = barRef.current?.offsetHeight ?? 0;
        root.style.setProperty('--promo-h', `${height}px`);
      });
    };

    syncPromoHeight();
    window.addEventListener('resize', syncPromoHeight);
    return () => {
      window.removeEventListener('resize', syncPromoHeight);
      root.style.setProperty('--promo-h', '0px');
    };
  }, [isDismissed, promos.length, currentIndex]);

  // Don't show if dismissed or no active promos
  if (isDismissed || promos.length === 0) return null;

  const currentPromo = promos[currentIndex];
  const Icon = currentPromo.icon;

  return (
    <div ref={barRef} className="promo-bar">
      <div className="text-white">
        <div className="site-container py-2 md:py-1.5">
          {/* Mobile-First Layout */}
          <div className="flex items-center justify-between gap-2 md:gap-6">
            {/* Left side - Icon and Message */}
            <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
              {/* Icon - Hidden on mobile, smaller on desktop */}
              <div className="hidden md:flex bg-white/15 p-1.5 rounded-md flex-shrink-0">
                <Icon className="h-4 w-4" />
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="flex-1 min-w-0"
                >
                  {/* Desktop: Single line layout */}
                  <div className="hidden md:flex items-center gap-3">
                    <span className="font-bold text-sm leading-tight whitespace-nowrap">
                      {currentPromo.message}
                    </span>
                    <span className="text-xs text-white/85 flex items-center gap-1.5 leading-tight">
                      <Clock className="h-3 w-3 inline flex-shrink-0" />
                      <span className="truncate">{currentPromo.dynamicDetail}</span>
                    </span>
                  </div>
                  
                  {/* Mobile: Stacked layout */}
                  <div className="flex flex-col gap-0.5 md:hidden">
                    <span className="font-bold text-sm leading-tight">
                      {currentPromo.message}
                    </span>
                    <span className="text-xs text-white/90 flex items-center gap-1 leading-tight">
                      <Clock className="h-3 w-3 inline flex-shrink-0" />
                      <span className="truncate">{currentPromo.dynamicDetail}</span>
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side - CTA and Close */}
            <div className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
              <Link to={`/contact?promo=${currentPromo.promoCode}&service=${encodeURIComponent(currentPromo.service)}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-xs px-3 py-2 md:py-1.5 min-h-[44px] md:min-h-[32px] whitespace-nowrap"
                >
                  <span>{currentPromo.cta}</span>
                  <ArrowRight className="h-3.5 w-3.5 md:h-3.5 md:w-3.5" />
                </motion.button>
              </Link>

              <button
                onClick={handleDismissTemporarily}
                className="p-2 md:p-1 hover:bg-white/15 rounded-md transition-colors min-h-[44px] md:min-h-[32px] flex items-center justify-center"
                aria-label="Dismiss promotion temporarily"
                title="Dismiss until refresh"
              >
                <X className="h-4 w-4 md:h-4 md:w-4" />
              </button>
            </div>
          </div>

          {/* Progress indicator dots - Smaller and more subtle on desktop */}
          <div className="flex justify-center gap-1 md:gap-1 mt-2 md:mt-1.5">
            {promos.map((_, index) => (
              <div
                key={index}
                className={`h-1 md:h-0.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-5 md:w-4 bg-white'
                    : 'w-1 md:w-1 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBar;

