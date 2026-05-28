export const BUSINESS_INFO = {
  name: "One Stop Property Solutions",
  tagline: "Your Boots on the Ground in Arkansas",
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
    emergency: "Modern Communication - Not a 9-to-5 Company"
  }
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
    description: 'We help investors evaluate properties, walk homes, assess conditions, and build a clear operational plan before committing to a purchase.',
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
    description: 'We turn distressed properties into income-producing assets, built for durability, long-term cash flow, and rental performance.',
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
    description: 'Hands-on support for investors operating Section 8 rental properties, from inspection preparation to ongoing tenant communication and maintenance.',
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
    description: 'We market properties through Zillow and major rental platforms, coordinate showings, and help investors fill vacancies faster.',
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
    description: 'From tenant communication to maintenance coordination and real-time updates, we manage day-to-day operations so investors can scale remotely with confidence.',
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
    description: 'Operational support for commercial property owners and investors: maintenance coordination, tenant issue management, and long-term property upkeep.',
    icon: 'Store',
    features: [
      'Commercial property oversight',
      'Maintenance coordination',
      'Tenant issue coordination',
      'Property operations support',
      'Long-term property upkeep'
    ],
    category: 'commercial'
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
    title: 'Local Boots on the Ground',
    description: 'A team physically operating properties across Arkansas, not a remote call center.'
  },
  {
    icon: 'MessageSquare',
    title: '24/7 Communication',
    description: 'Fast response times, group chats, and real-time updates so you always know what is happening.'
  },
  {
    icon: 'Camera',
    title: 'Real-Time Updates',
    description: 'Photos, videos, and active project communication from the field. No guessing required.'
  },
  {
    icon: 'ClipboardCheck',
    title: 'Section 8 Experience',
    description: 'Hands-on experience preparing, coordinating, and maintaining Section 8 rental properties.'
  },
  {
    icon: 'Layers',
    title: 'Full Operational Support',
    description: 'From renovation and leasing to tenant communication and long-term management, all under one roof.'
  },
  {
    icon: 'TrendingUp',
    title: 'Investor-Focused Execution',
    description: 'Every decision is made with rental performance, property value, and investor peace of mind in mind.'
  }
];
