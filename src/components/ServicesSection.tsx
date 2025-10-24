import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Wrench,
  Building2,
  Home,
  Zap,
  Hammer,
  ArrowRight,
  Triangle,
  Paintbrush,
  Sparkles,
  Key,
  KeyRound,
  Droplets,
  Video,
  Wind,
  PaintBucket,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Handyman Services',
      description:
        'From small home repairs to fixture installations and drywall patching, our skilled professionals handle every task with precision and care.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Key,
      title: 'Property Staging & Prep',
      description:
        'Transform your space into a warm, welcoming environment. We declutter, clean, and style to highlight your property\'s strongest features.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: KeyRound,
      title: 'Lock Replacement & Installation',
      description:
        'Professional lock installation, replacement, and rekeying services delivered through our trusted external partner.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Building2,
      title: 'Property Management',
      description:
        'Complete property management from tenant screening to maintenance scheduling, inspections, and rent collection.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Home,
      title: 'Residential Maintenance',
      description:
        'Preventive maintenance, seasonal inspections, and general repairs that preserve your property\'s value year-round.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Building2,
      title: 'Commercial Services',
      description:
        'Ongoing maintenance and facility repairs designed to minimize downtime and maintain a professional appearance.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Hammer,
      title: 'Remodeling & Custom Work',
      description:
        'Bring your vision to life with room remodels, deck construction, built-in cabinetry, and custom carpentry.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Triangle,
      title: 'Roofing Services',
      description:
        'Complete roofing solutions including inspections, repairs, and replacements using durable materials for Arkansas weather.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Paintbrush,
      title: 'Painting Services',
      description:
        'Interior and exterior painting with premium materials ensuring long-lasting results and a flawless finish.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Droplets,
      title: 'Pressure Washing',
      description:
        'Professional-grade equipment safely restores driveways, sidewalks, siding, and decks to their original look.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Zap,
      title: 'Pre-Winter Roof Cleaning',
      description:
        'Remove leaves, branches, and debris to prevent clogs, leaks, and ice buildup before winter arrives.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Wind,
      title: 'Gutter Cleaning Before Winter',
      description:
        'Prevent leaks, water damage, and costly repairs. Complete gutter cleaning and flushing to keep water flowing freely and protect your property before the rainy season.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: PaintBucket,
      title: 'Garage Door Painting',
      description:
        'Give your home a fresh, modern look with a professionally painted garage door using durable, weather-resistant paints that protect against sun, rain, and rust.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Sparkles,
      title: 'Holiday Light Installation',
      description:
        'Professional design, installation, and removal of festive lighting displays, including post-season storage.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Video,
      title: 'Virtual Consultation & Project Packages',
      description:
        'For local or out-of-state clients: detailed video consultations, custom packages, and transparent updates throughout your project.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
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
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              What We Offer
            </span>
          </motion.div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Our <span className="text-primary">Expert Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From small repairs to complete renovations, we handle all your property needs with
            expertise and professionalism
          </p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link to="/services" key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5) }}
                className="group"
              >
                <Card className="h-full border-2 border-border/50 hover:border-primary/50 hover-lift hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <CardContent className="p-6 relative z-10">
                    {/* Icon with enhanced styling */}
                    <div className="relative mb-6">
                      <div
                        className={`${service.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md`}
                      >
                        <service.icon className={`h-8 w-8 ${service.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      {/* Decorative corner accent */}
                      <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${service.color.replace('text-', 'bg-')} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Arrow indicator on hover */}
                    <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all">
                      <span className="text-sm font-semibold mr-1">Learn more</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Link to="/services" className="group inline-block">
            <Button size="lg" className="gradient-primary hover:scale-105 text-white text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all font-semibold">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
