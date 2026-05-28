import { BUSINESS_INFO } from '@/constants/business';

export type FaqCategory = 'general' | 'investors' | 'services' | 'section8' | 'coverage';

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}

export const FAQ_CATEGORY_LABELS: Record<FaqCategory, string> = {
  general: 'General',
  investors: 'For Investors',
  services: 'Services',
  section8: 'Section 8',
  coverage: 'Coverage & Areas',
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-is-one-stop',
    category: 'general',
    question: 'What is One Stop Property Solutions?',
    answer: `${BUSINESS_INFO.name} is a Central Arkansas property operations team built for real estate investors. We combine deal support, renovations, leasing, Section 8 coordination, and ongoing property management under one local team so remote owners have a single point of contact.`,
  },
  {
    id: 'investors-remote',
    category: 'investors',
    question: 'Do you work with out-of-state and remote real estate investors?',
    answer: 'Yes. We are built specifically as a boots-on-the-ground team for investors who do not live in Arkansas. You get real-time updates, photos from the field, group chat communication, and fast response times so you always know what is happening at your properties.',
  },
  {
    id: 'investors-portfolio-size',
    category: 'investors',
    question: 'Do you work with single-property owners and growing portfolios?',
    answer: 'Yes. We support investors evaluating their first Arkansas deal as well as owners scaling an existing portfolio. Scope and communication are tailored to your property count, goals, and level of involvement.',
  },
  {
    id: 'communication-model',
    category: 'investors',
    question: 'How does communication work if I am not local?',
    answer: 'We are not a traditional 9-to-5 management company. Expect modern communication: group chats, photo and video updates from the field, clear timelines, and direct access to the people doing the work. You stay informed without chasing multiple vendors.',
  },
  {
    id: 'deal-evaluation',
    category: 'services',
    question: 'Can you help evaluate a property before I buy?',
    answer: 'Yes. Our investment support includes property walkthroughs, condition assessments, rent-ready analysis, renovation planning, and Section 8 suitability review so you can make a clear decision before committing to a purchase.',
  },
  {
    id: 'services-offered',
    category: 'services',
    question: 'What services do you provide?',
    answer: 'We offer investment support and deal evaluation, renovation and rent-ready preparation, Section 8 property support, leasing and tenant placement, full property management and operations, and commercial property support. All services are coordinated through one team.',
  },
  {
    id: 'renovation-turnover',
    category: 'services',
    question: 'Do you handle renovations and rent-ready turnovers?',
    answer: 'Yes. We turn distressed or vacant properties into income-producing assets with durable, rental-focused upgrades, turnover services, and fast project execution designed for long-term cash flow.',
  },
  {
    id: 'property-management',
    category: 'services',
    question: 'Do you offer property management?',
    answer: 'Yes. We manage day-to-day operations including tenant communication, maintenance coordination, real-time reporting, and long-term oversight so investors can scale remotely with confidence.',
  },
  {
    id: 'section8-support',
    category: 'section8',
    question: 'Do you handle Section 8 properties?',
    answer: 'Yes. We provide hands-on Section 8 support including inspection preparation, repair coordination, tenant communication, rent-ready turnovers, and ongoing maintenance to help properties pass inspection and perform over time.',
  },
  {
    id: 'section8-inspections',
    category: 'section8',
    question: 'Can you prepare a unit for a Section 8 inspection?',
    answer: 'Yes. We assess the property against inspection requirements, coordinate repairs, communicate with relevant parties, and prepare the unit so it is ready for a successful inspection.',
  },
  {
    id: 'coverage-areas',
    category: 'coverage',
    question: 'What areas do you serve?',
    answer: `We serve ${BUSINESS_INFO.serviceAreas.join(', ')}, and surrounding communities across Central Arkansas. Contact us if you are unsure whether your property falls within our coverage area.`,
  },
  {
    id: 'response-time',
    category: 'general',
    question: 'How quickly do you respond to new inquiries?',
    answer: 'We aim to respond within one hour during active hours. For service requests and operational updates, our team prioritizes fast communication so issues do not sit unresolved.',
  },
  {
    id: 'get-started',
    category: 'general',
    question: 'How do I get started?',
    answer: `Schedule a call through our contact form or call us at ${BUSINESS_INFO.phone}. Share your property details, portfolio goals, and timeline. We will follow up with a clear plan for next steps.`,
  },
];

export interface GetFaqsOptions {
  ids?: string[];
  categories?: FaqCategory[];
  limit?: number;
}

export function getFaqs(options: GetFaqsOptions = {}): FaqItem[] {
  let items = [...FAQ_ITEMS];

  if (options.ids?.length) {
    items = options.ids
      .map((id) => FAQ_ITEMS.find((item) => item.id === id))
      .filter((item): item is FaqItem => Boolean(item));
  } else if (options.categories?.length) {
    const categorySet = new Set(options.categories);
    items = items.filter((item) => categorySet.has(item.category));
  }

  if (options.limit !== undefined) {
    items = items.slice(0, options.limit);
  }

  return items;
}

export function getFaqsByCategory(items: FaqItem[] = FAQ_ITEMS) {
  return (Object.keys(FAQ_CATEGORY_LABELS) as FaqCategory[]).map((category) => ({
    category,
    label: FAQ_CATEGORY_LABELS[category],
    items: items.filter((item) => item.category === category),
  })).filter((group) => group.items.length > 0);
}
