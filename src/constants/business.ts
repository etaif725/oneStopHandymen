import {
  buildGoogleMapsEmbedUrl,
  computeEmbedViewport,
  type CoverageEmbedViewport,
} from '@/lib/coverageMapProjection';

export const BUSINESS_INFO = {
  name: "One Stop Property Solutions",
  methodologyName: "Boots on Ground Ops",
  tagline: "Your Boots on the Ground in Arkansas",
  methodologyLine: "",
  phone: "(501) 737-0930",
  email: "info@onestoppropertyar.com",
  address: "Little Rock, AR",
  established: "2025",
  serviceAreas: [
    "Little Rock",
    "Jacksonville",
    "Benton",
    "Sherwood",
    "North Little Rock",
    "Maumelle",
    "Conway",
    "Cabot",
    "Bryant"
  ],
  hours: {
    weekdays: "Available 7 Days a Week",
    weekends: "Weekend Support Available",
    emergency: "Modern communication. Not a 9-to-5 company."
  }
};

/**
 * Google Maps embed — `viewport` drives overlay pin alignment (Web Mercator).
 * After changing center/zoom, keep `url` in sync (generated from viewport).
 * Replace with Share → Embed from GMB only if you copy matching center + zoom here.
 */
const COVERAGE_EMBED_VIEWPORT: CoverageEmbedViewport = computeEmbedViewport();

export const GOOGLE_MAPS_EMBED = {
  url: buildGoogleMapsEmbedUrl(COVERAGE_EMBED_VIEWPORT),
  title: 'One Stop Property Solutions — Central Arkansas service area',
  viewport: COVERAGE_EMBED_VIEWPORT,
};

export type SocialPlatform = 'instagram' | 'facebook' | 'linkedin' | 'youtube';

export const SOCIAL_LINKS: ReadonlyArray<{
  id: SocialPlatform;
  label: string;
  href: string;
}> = [
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/Onestoppropertyus',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/people/One-Stop-Property-Solutions/61581459988037/',
  }
];

export const SERVICES = [
  {
    id: 'investment-support',
    name: 'Investment Support & Deal Evaluation',
    description:
      'You are looking at a Little Rock address from another time zone. We walk the property, photograph what matters, and tell you what it will take to perform before you wire earnest money.',
    icon: 'Search',
    features: [
      'Property walkthroughs',
      'Deal evaluation support',
      'Renovation planning',
      'Rent-ready analysis',
      'Section 8 suitability review',
      'Operational planning'
    ],
    category: 'investor'
  },
  {
    id: 'renovation-rent-ready',
    name: 'Renovation & Rent Ready',
    description:
      'Vacant and tired units become rent-ready assets with durable upgrades chosen for cash flow, not showroom photos. You watch progress in the thread instead of wondering if anyone showed up.',
    icon: 'Hammer',
    features: [
      'Full property renovations',
      'Rent-ready preparation',
      'Turnover services',
      'Maintenance coordination',
      'Durable rental-focused upgrades',
      'Fast project execution'
    ],
    category: 'renovation'
  },
  {
    id: 'section-8-support',
    name: 'Section 8 Property Support',
    description:
      'Section 8 owners live and die by inspections and local process. We prepare units, coordinate repairs, and work through Little Rock Housing Authority and Arkansas Development Finance Authority requirements so you are not guessing from out of state.',
    icon: 'ClipboardCheck',
    features: [
      'Inspection preparation',
      'Repair coordination',
      'Tenant communication',
      'Rent-ready turnovers',
      'Long-term property maintenance',
      'Operational support'
    ],
    category: 'section8'
  },
  {
    id: 'leasing-tenant-placement',
    name: 'Leasing & Tenant Placement',
    description:
      'We market on Zillow and major rental platforms, run showings, and fill vacancies faster because the same team that knows the renovation story also handles the lease.',
    icon: 'Users',
    features: [
      'Zillow marketing',
      'Rental listing management',
      'Tenant communication',
      'Property showings',
      'Section 8 tenant coordination',
      'Vacancy reduction support'
    ],
    category: 'leasing'
  },
  {
    id: 'property-management',
    name: 'Property Management & Operations',
    description:
      'Day-to-day ops live in one group chat. Maintenance, tenants, documented walkthroughs with photo and video, and reporting you can read without opening five tabs.',
    icon: 'Building2',
    features: [
      'Tenant communication',
      'Maintenance coordination',
      'Real-time updates',
      'Group chats and reporting',
      'Ongoing property oversight',
      'Long-term operational support'
    ],
    category: 'management'
  },
  {
    id: 'commercial-property-support',
    name: 'Commercial Property Support',
    description:
      'Small commercial owners get the same visibility model as residential investors. Maintenance, tenant issues, and upkeep coordination with one Arkansas team accountable for follow-through.',
    icon: 'Store',
    features: [
      'Commercial property oversight',
      'Maintenance coordination',
      'Tenant issue coordination',
      'Property operations support',
      'Long-term property upkeep'
    ],
    category: 'commercial'
  },
  {
    id: 'airbnb-str',
    name: 'Airbnb & Short-Term Rental Operations',
    description:
      'Your STR needs turnovers, guest-ready standards, and fast issue response between bookings. We coordinate cleaning, restocking, maintenance, and owner updates in the same group chat you use for your long-term rentals.',
    icon: 'Home',
    features: [
      'Guest turnover coordination',
      'Listing readiness checks',
      'Between-stay maintenance',
      'Supply and restock coordination',
      'Owner communication and reporting',
      'Local vendor management'
    ],
    category: 'str'
  },
  {
    id: 'hospitality-hotels',
    name: 'Hospitality & Hotel Operations',
    description:
      'Boutique hotels and hospitality assets need facility care, vendor coordination, and steady oversight, not a residential manager learning on the job. We support operational needs with the same visible communication model we use for investors.',
    icon: 'Hotel',
    features: [
      'Facility and grounds coordination',
      'Vendor and contractor management',
      'Preventative maintenance planning',
      'Guest-area issue response',
      'Operational reporting',
      'Long-term asset upkeep'
    ],
    category: 'hospitality'
  },
  {
    id: 'long-term-maintenance',
    name: 'Long-Term Maintenance & Property Care',
    description:
      'Owners who self-manage or use another manager still need a reliable Arkansas crew for ongoing repairs, seasonal work, and property care. We handle the maintenance lane with photos from the field and clear approval paths.',
    icon: 'Wrench',
    features: [
      'Ongoing repair coordination',
      'Preventative maintenance visits',
      'Seasonal property care',
      'Vendor scheduling and oversight',
      'Photo and video job updates',
      'Portfolio maintenance planning'
    ],
    category: 'maintenance'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Marcus T.",
    role: "Real Estate Investor",
    location: "Dallas, TX",
    content: "I own four rental properties in Little Rock and managing them remotely was a nightmare before finding One Stop. They handle everything: tenant communication, repairs, inspections. I finally feel like I have a real team on the ground.",
    rating: 5
  },
  {
    id: 2,
    name: "Jennifer R.",
    role: "Section 8 Property Owner",
    location: "Chicago, IL",
    content: "They prepared two of my units for Section 8 inspection and coordinated all the repairs. Communication was excellent throughout the entire process. My properties passed on the first inspection.",
    rating: 5
  },
  {
    id: 3,
    name: "David K.",
    role: "Rental Portfolio Owner",
    location: "Atlanta, GA",
    content: "What sets them apart is the communication. I get real-time updates, photos from the field, and they respond fast. I've worked with other property managers and none of them operated like this.",
    rating: 5
  },
  {
    id: 4,
    name: "Robert S.",
    role: "Commercial Property Investor",
    location: "Memphis, TN",
    content: "One Stop handles the operational side of two of my commercial properties in Central Arkansas. Reliable, responsive, and they actually follow through. Exactly what a remote investor needs.",
    rating: 5
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: 'MapPin',
    title: 'Local boots on the ground',
    description: 'Operators physically on Arkansas properties, not a distant call center queue.'
  },
  {
    icon: 'MessageSquare',
    title: '24/7 communication',
    description: 'Group chats and fast replies so you are never waiting until Monday for a photo from the job site.'
  },
  {
    icon: 'Camera',
    title: 'Real-time field updates',
    description: 'Photos and video from walkthroughs and repairs land in your thread. No guessing what happened last week.'
  },
  {
    icon: 'ClipboardCheck',
    title: 'Section 8 experience',
    description: 'Inspection prep and local housing coordination for owners who run vouchers in Central Arkansas.'
  },
  {
    icon: 'Layers',
    title: 'Full operational support',
    description: 'Acquisition support through renovation, leasing, and management with one team accountable for the handoffs.'
  },
  {
    icon: 'TrendingUp',
    title: 'Investor-focused execution',
    description: 'Every decision ties back to rental performance, asset durability, and clarity for owners who invest from afar.'
  }
];

export const FOUNDERS = [
  {
    name: 'Jonathan Azbel',
    role: 'Founder',
    bio: 'Jonathan plans and oversees long-term property performance. He keeps sight of costs, priorities, and what the asset needs next quarter, not just this week. Investors work with him when they want a steady operator view on the portfolio.',
  },
  {
    name: 'David Vilhovezky',
    role: 'Founder',
    bio: 'David runs on-the-ground operations, tenant coordination, and project delivery. He is the person in the group chat with photos from the hallway. Investors work with him when they want the job site in their pocket.',
  },
];
