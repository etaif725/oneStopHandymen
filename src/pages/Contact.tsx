import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import LeadGenForm from '@/components/LeadGenForm';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const formSectionRef = useRef<HTMLDivElement>(null);
  
  // Scroll to form when coming from promo
  useEffect(() => {
    const promoCode = searchParams.get('promo');
    if (promoCode && formSectionRef.current) {
      setTimeout(() => {
        formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  }, [searchParams]);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['(501) 737-0930'],
      link: 'tel:+15017370930',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'Info@onestoppropertyar.com',
      link: 'mailto:Info@onestoppropertyar.com',
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Little Rock, AR & Surrounding Areas',
      link: null,
    },
    {
      icon: Clock,
      title: 'Hours',
      details: '24/7 - Every Day of the Week',
      link: null,
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
              <Phone className="h-5 w-5 text-accent mr-2" />
              <span className="text-white font-semibold text-sm">
                Available 24/7 for Emergencies
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
            >
              Get in <span className="text-accent">Touch</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto"
            >
              Ready to start your project? Fill out the form below or give us a call for a free estimate
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

      {/* Contact Form */}
      <section ref={formSectionRef} className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden scroll-mt-20">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Form
                </span>
              </motion.div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Request a <span className="text-primary">Free Estimate</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Form */}
              <LeadGenForm variant="default" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ & Map Section */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="inline-block mb-4"
                >
                  <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm">
                    Frequently Asked Questions
                  </span>
                </motion.div>
                <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
                  Got <span className="text-secondary">Questions?</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Find answers to common questions about our services
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border-2 border-border/50 rounded-xl px-6 hover:border-secondary/50 transition-all">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-secondary transition-colors">
                    What areas do you service?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    We proudly serve Central Arkansas including Little Rock, North Little Rock, Jacksonville, Benton, Sherwood, Maumelle, Conway, Cabot, Bryant, and surrounding areas. Don't see your location? Give us a call – we may still be able to help!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-2 border-border/50 rounded-xl px-6 hover:border-secondary/50 transition-all">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-secondary transition-colors">
                    Do you offer emergency services?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    Yes! We're available 24/7 for emergency property maintenance needs. Whether it's a plumbing issue, electrical problem, or any urgent repair, just give us a call and we'll respond as quickly as possible.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-2 border-border/50 rounded-xl px-6 hover:border-secondary/50 transition-all">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-secondary transition-colors">
                    Are you licensed and insured?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    Absolutely! We are fully licensed and carry comprehensive insurance coverage for all our services. This protects both you and our team, giving you complete peace of mind when we work on your property.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-2 border-border/50 rounded-xl px-6 hover:border-secondary/50 transition-all">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-secondary transition-colors">
                    How quickly can you provide an estimate?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    We typically respond to estimate requests within 1 hour during business hours. For most projects, we can provide a free on-site estimate within 24 hours. Same-day service is also available for urgent needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-2 border-border/50 rounded-xl px-6 hover:border-secondary/50 transition-all">
                  <AccordionTrigger className="text-left font-bold text-lg hover:text-secondary transition-colors">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    We accept cash, all major credit cards, debit cards, and checks. Payment is typically due upon completion of work. For larger projects, we can discuss payment plans and milestone billing options.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>

            {/* Google Maps Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24 h-fit"
            >
              <div className="mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="inline-block mb-4"
                >
                  <span className="px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Service Area
                  </span>
                </motion.div>
                <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
                  Find <span className="text-accent">Us</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Serving Central Arkansas and surrounding communities
                </p>
              </div>

              <Card className="overflow-hidden border-2 border-border/50 shadow-2xl">
                <CardContent className="p-0">
                  <div className="relative w-full h-[500px] lg:h-[600px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209043.29203909266!2d-92.47713308791017!3d34.74864799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d2a134a11f569b%3A0x3405f5100df35b17!2sLittle%20Rock%2C%20AR!5e0!3m2!1sen!2sus!4v1709759234567!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="One Stop Property Solutions Service Area"
                    />
                  </div>
                  <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-lg mb-2">Central Arkansas</h3>
                        <p className="text-muted-foreground">
                          Based in Little Rock, serving all surrounding communities within a 50-mile radius
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
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
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                Contact Information
              </span>
            </motion.div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Multiple ways to reach us for your convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <Card className="text-center hover-lift hover:shadow-2xl transition-all duration-300 h-full border-2 border-border/50 hover:border-primary/50 overflow-hidden relative">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <info.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-bold text-xs uppercase tracking-wider text-muted-foreground mb-3">
                      {info.title}
                    </h3>
                    {info.link ? (
                      Array.isArray(info.details) ? (
                        <div className="flex flex-col gap-2">
                          {info.details.map((detail, idx) => (
                            <a
                              key={idx}
                              href={idx === 0 ? info.link : (idx === 1 ? `tel:7724537842` : `tel:7722697827`)}
                              className="text-foreground hover:text-primary transition-smooth font-bold text-base group-hover:scale-105 inline-block"
                            >
                              {detail}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <a
                          href={info.link}
                          className="text-foreground hover:text-primary transition-smooth font-bold text-base group-hover:scale-105 inline-block break-all"
                        >
                          {info.details}
                        </a>
                      )
                    ) : (
                      <p className="text-foreground font-semibold text-base leading-relaxed">
                        {info.details}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Contact;
