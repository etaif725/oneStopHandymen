import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Wrench,
  Building2,
  Home,
  Zap,
  Hammer,
  CheckCircle2,
  Triangle,
  Paintbrush,
  Sparkles,
  Key,
  KeyRound,
  Droplets,
  ArrowRight,
  Phone,
  HelpCircle,
  Video,
  Wind,
  PaintBucket,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Handyman Services',
      description:
        'Our Handyman Services are designed to make property upkeep effortless. Whether you need small home repairs, fixture installations, drywall patching, or larger improvement projects, our skilled professionals handle every task with precision and care.',
      features: [
        'Small home repairs',
        'Fixture installations',
        'Drywall patching',
        'Leak and door repairs',
        'Furniture assembly',
        'Flooring repairs',
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Key,
      title: 'Property Staging & Prep',
      description:
        'First impressions matter. Our Property Staging & Prep service transforms any space into a warm, welcoming, and visually appealing environment. We declutter, clean, rearrange, and style your interiors to highlight the property\'s strongest features.',
      features: [
        'Professional decluttering',
        'Deep cleaning and styling',
        'Furniture rearrangement',
        'Design sense and staging techniques',
        'Quick touch-ups to full transformations',
        'Maximize visual appeal',
      ],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: KeyRound,
      title: 'Lock Replacement & Installation',
      description:
        'Your safety and peace of mind are our top priorities. Delivered in collaboration with a trusted external partner we\'ve worked with for years, we provide professional lock installation, replacement, and rekeying for residential and commercial properties.',
      features: [
        'Professional lock installation',
        'Lock replacement services',
        'Rekeying services',
        'Full lock upgrades',
        'Seamless coordination',
        'Secure solutions guaranteed',
      ],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Building2,
      title: 'Property Management',
      description:
        'Managing a property requires time, organization, and constant attention to detail. Our Property Management service covers everything from tenant screening and lease management to rent collection, maintenance scheduling, and regular inspections.',
      features: [
        'Tenant screening',
        'Lease management',
        'Rent collection',
        'Maintenance scheduling',
        'Regular inspections',
        'On-site representation',
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Home,
      title: 'Residential Maintenance',
      description:
        'Your home deserves consistent care to stay in great condition year-round. Our Residential Maintenance service includes preventive maintenance, seasonal inspections, and general repairs that preserve your property\'s value and functionality.',
      features: [
        'Preventive maintenance',
        'Seasonal inspections',
        'General repairs',
        'Appliance checks',
        'HVAC system maintenance',
        'One-time or recurring plans',
      ],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Building2,
      title: 'Commercial Services',
      description:
        'Tailored for businesses, property owners, and managers who need dependable support. We provide ongoing maintenance, facility repairs, and improvement projects designed to minimize downtime and maintain a professional appearance.',
      features: [
        'Office building maintenance',
        'Retail store services',
        'Warehouse support',
        'Restaurant maintenance',
        'Minimize business downtime',
        'Code-compliant work',
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Hammer,
      title: 'Remodeling & Custom Work',
      description:
        'Looking to upgrade or personalize your space? Our Remodeling & Custom service brings your vision to life with room remodels, deck and fence construction, built-in cabinetry, and other custom carpentry work.',
      features: [
        'Room remodels',
        'Deck and fence construction',
        'Built-in cabinetry',
        'Custom carpentry',
        'Design consultation',
        'Kitchen modernization',
      ],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Triangle,
      title: 'Roofing Services',
      description:
        'Your roof is your property\'s first line of defense. Our Roofing Services include inspections, repairs, replacements, and preventive maintenance using durable materials that stand up to Arkansas weather.',
      features: [
        'Roof inspections',
        'Repairs and replacements',
        'Shingle work',
        'Gutter maintenance',
        'Flashing and ventilation',
        'Long-lasting protection',
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Paintbrush,
      title: 'Painting Services',
      description:
        'Fresh paint can completely transform a space. Our Painting Services cover both interior and exterior projects using premium paints and materials to ensure long-lasting results with a smooth, flawless finish.',
      features: [
        'Interior painting',
        'Exterior painting',
        'Surface preparation',
        'Professional priming',
        'Premium materials',
        'Flawless finish',
      ],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Droplets,
      title: 'Pressure Washing',
      description:
        'Over time, dirt, mold, and grime build up on outdoor surfaces. Our Pressure Washing service uses professional-grade equipment to safely restore driveways, sidewalks, siding, decks, and patios to their original look.',
      features: [
        'Driveway cleaning',
        'Sidewalk washing',
        'Siding restoration',
        'Deck and patio cleaning',
        'Professional-grade equipment',
        'Eco-friendly solutions',
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Zap,
      title: 'Pre-Winter Roof Cleaning',
      description:
        'Before the colder months arrive, it\'s essential to prepare your roof and gutters. Our Pre-Winter Roof Cleaning service removes leaves, branches, and debris that can cause clogs, leaks, or ice buildup during winter.',
      features: [
        'Complete roof cleaning',
        'Gutter debris removal',
        'Branch clearing',
        'Pre-winter inspection',
        'Prevent clogs and leaks',
        'Ice buildup prevention',
      ],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Wind,
      title: 'Gutter Cleaning Before Winter',
      description:
        'Prevent leaks, water damage, and costly repairs. Our team provides complete gutter cleaning and flushing to keep water flowing freely and protect your property before the rainy season. Schedule your service today and make sure your property is ready for winter.',
      features: [
        'Complete gutter cleaning',
        'Downspout flushing',
        'Debris removal',
        'Water flow testing',
        'Leak prevention',
        'Pre-winter preparation',
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: PaintBucket,
      title: 'Garage Door Painting',
      description:
        'Give your home a fresh, modern look with a professionally painted garage door. We use durable, weather-resistant paints that protect against sun, rain, and rust – keeping your home looking new and well-maintained. You can choose any color or finish you like to perfectly match your home\'s style.',
      features: [
        'Professional surface preparation',
        'Weather-resistant paints',
        'UV and rust protection',
        'Custom color matching',
        'Multiple finish options',
        'Quick turnaround time',
      ],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Sparkles,
      title: 'Holiday Light Installation',
      description:
        'Bring joy and holiday spirit to your property. We design, install, and remove festive lighting displays that match your style and budget, handling everything from setup and wiring to safety checks and post-season removal.',
      features: [
        'Custom lighting design',
        'Professional installation',
        'Complete wiring and setup',
        'Safety checks included',
        'Post-season removal',
        'Storage services available',
      ],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Video,
      title: 'Virtual Consultation & Personalized Project Packages',
      description:
        'Not every client can be on-site — and that\'s perfectly fine. Our Virtual Consultation service allows clients, whether local or out-of-state, to receive the same dedicated support and project oversight as if they were right here with us.',
      features: [
        'Detailed video consultations',
        'Custom service packages',
        'Perfect for investors and remote owners',
        'Live updates and photo/video reports',
        'Regular communication',
        'Complete transparency and accountability',
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Header Section */}
      <section className="relative min-h-[60vh] pt-32 md:pt-28 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 shadow-xl"
            >
              <Sparkles className="h-5 w-5 text-accent mr-2" />
              <span className="text-white font-semibold text-sm">
                Professional Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
            >
              Our <span className="text-accent">Services</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              From small repairs to complete renovations, we provide comprehensive property maintenance solutions tailored to your needs
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-30 pointer-events-none">
          <svg 
            className="absolute bottom-0 w-full h-full" 
            preserveAspectRatio="none" 
            viewBox="0 0 1440 100"
            fill="none"
          >
            <path 
              d="M0,50 C240,80 480,20 720,50 C960,80 1200,20 1440,50 L1440,100 L0,100 Z" 
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
              What We Do
            </span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Complete Service Coverage
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional solutions for every property maintenance need
            </p>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden border-2 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className={`grid ${index % 2 === 0 ? 'md:grid-cols-[1fr,1.2fr]' : 'md:grid-cols-[1.2fr,1fr]'} gap-0`}>
                      {/* Content Side */}
                      <div className={`p-8 md:p-10 flex flex-col justify-center ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                        {/* Icon Badge */}
                        <div className={`${service.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all`}>
                          <service.icon className={`h-10 w-10 ${service.color}`} />
                        </div>

                        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                        <Link to="/contact">
                          <Button
                            size="lg"
                              className="gradient-accent hover:scale-105 shadow-lg hover:shadow-accent/50 transition-all font-semibold rounded-xl"
                          >
                            Request Quote
                              <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                          <a href="tel:5017370930">
                            <Button
                              size="lg"
                              variant="outline"
                              className="hover:bg-primary/5 hover:text-black hover:scale-105 transition-all font-semibold rounded-xl border-2"
                            >
                              <Phone className="mr-2 h-4 w-4" />
                              Call Now
                            </Button>
                          </a>
                        </div>
                      </div>

                      {/* Features Side */}
                      <div className={`p-8 md:p-10 bg-gradient-to-br from-muted/30 to-muted/10 flex flex-col justify-center ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                        <h3 className="font-bold text-lg text-foreground mb-6">
                          What's Included
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-3 group/item"
                            >
                              <div className="bg-accent/20 p-1 rounded-full mt-0.5 flex-shrink-0">
                                <CheckCircle2 className={`h-5 w-5 ${service.color} group-hover/item:scale-110 transition-transform`} />
                              </div>
                              <span className="text-foreground/80 group-hover/item:text-foreground transition-colors leading-relaxed">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm flex items-center gap-2 inline-flex">
                <HelpCircle className="h-4 w-4" />
                Frequently Asked Questions
              </span>
            </motion.div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Got <span className="text-primary">Questions?</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services, pricing, and process
            </p>
          </motion.div>

          {/* FAQ Grid - 2 Columns */}
          <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border-2 border-border/50 rounded-xl px-6 hover:border-primary/50 transition-all bg-card">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                    What services do you provide?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    We offer comprehensive property maintenance services including handyman work, property staging & prep, lock replacement, property management solutions, residential and commercial maintenance, remodeling, roofing, painting, pressure washing, and seasonal services like holiday lights installation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-2 border-border/50 rounded-xl px-6 hover:border-primary/50 transition-all bg-card">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                    How much do your services cost?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    Pricing varies based on the scope of work, materials needed, and project complexity. We provide free, no-obligation estimates for all services. Contact us with your project details and we'll provide a transparent, detailed quote within 24 hours.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-2 border-border/50 rounded-xl px-6 hover:border-primary/50 transition-all bg-card">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                    Are you licensed and insured?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    Yes! We are fully licensed and carry comprehensive insurance coverage for all our services. This protects both you and our team, giving you complete peace of mind when we work on your property.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-2 border-border/50 rounded-xl px-6 hover:border-primary/50 transition-all bg-card">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                    What areas do you service?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    We proudly serve Central Arkansas including Little Rock, North Little Rock, Jacksonville, Benton, Sherwood, Maumelle, Conway, Cabot, Bryant, and all surrounding areas. If you're not sure if we service your area, give us a call – we may still be able to help!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-2 border-border/50 rounded-xl px-6 hover:border-primary/50 transition-all bg-card">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                    Do you offer emergency services?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    Absolutely! We're available 24/7 for emergency property maintenance needs. Whether it's a plumbing issue, electrical problem, security concern, or any urgent repair, just give us a call at (501) 737-0930 and we'll respond as quickly as possible.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-2 border-border/50 rounded-xl px-6 hover:border-primary/50 transition-all bg-card">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                    How quickly can you start a project?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    For most projects, we can provide an estimate within 24 hours and begin work within 2-3 days. For emergencies, we offer same-day service. Larger projects may require more scheduling coordination, but we work efficiently to accommodate your timeline.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-7" className="border-2 border-border/50 rounded-xl px-6 hover:border-primary/50 transition-all bg-card">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                    Do you provide free estimates?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    Yes! We provide free, no-obligation estimates for all services. We'll assess your project, discuss your needs, and provide a detailed quote with no hidden fees. You'll know exactly what to expect before any work begins.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border-2 border-border/50 rounded-xl px-6 hover:border-primary/50 transition-all bg-card">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    We accept cash, all major credit cards, debit cards, and checks. Payment is typically due upon completion of work. For larger projects, we can discuss payment plans and milestone billing options to make your project more manageable.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="border-2 border-border/50 rounded-xl px-6 hover:border-primary/50 transition-all bg-card">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                    Do you guarantee your work?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    Yes! We stand behind our work with a satisfaction guarantee. If there are any issues with our workmanship, we'll come back and make it right at no additional cost. Your satisfaction is our top priority, and we don't consider a job complete until you're 100% happy.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="border-2 border-border/50 rounded-xl px-6 hover:border-primary/50 transition-all bg-card">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                    Can you handle both residential and commercial properties?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    Absolutely! We have experience with both residential homes and commercial properties including office buildings, retail spaces, shopping centers, multi-unit properties, and more. Our crews are equipped to handle projects of all sizes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className="border-2 border-border/50 rounded-xl px-6 hover:border-primary/50 transition-all bg-card">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                    Do I need to provide materials?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    Not at all! We can source and provide all necessary materials for your project. We work with quality suppliers to get the best materials at competitive prices. Of course, if you prefer to provide your own materials, we're happy to work with that too.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12" className="border-2 border-border/50 rounded-xl px-6 hover:border-primary/50 transition-all bg-card">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors">
                    How do I get started?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    Getting started is easy! Simply give us a call at (501) 737-0930, fill out our contact form, or send us an email at Info@onestoppropertyar.com. We'll discuss your project, schedule a free estimate, and get you on our calendar. It's that simple!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>

          {/* CTA at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We're here to help! Contact us today for personalized answers and a free estimate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
                    <Button
                      size="lg"
                      className="gradient-accent hover:scale-105 shadow-xl hover:shadow-accent/50 transition-all font-semibold rounded-xl text-base px-8"
                    >
                      Get Free Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
                  <a href="tel:5017370930">
                    <Button
                      size="lg"
                      variant="outline"
                      className="hover:bg-primary/5 hover:text-black hover:scale-105 transition-all font-semibold rounded-xl border-2 px-8"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      (501) 737-0930
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Services;
