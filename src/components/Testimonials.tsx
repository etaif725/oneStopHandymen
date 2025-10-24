import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Property Manager',
      company: 'Central AR Properties',
      rating: 5,
      text: 'One Stop Property Solutions has been our go-to for property maintenance. Their response time is incredible, and the quality of work is consistently excellent.',
    },
    {
      name: 'Michael Davis',
      role: 'Homeowner',
      company: 'Little Rock',
      rating: 5,
      text: 'From a small electrical repair to a complete deck rebuild, this team handled everything professionally. Their attention to detail and fair pricing make them stand out.',
    },
    {
      name: 'Jennifer Martinez',
      role: 'Business Owner',
      company: 'Downtown Little Rock',
      rating: 5,
      text: 'We needed emergency repairs on a weekend, and they showed up within hours. Saved our business from major downtime. True professionals who care about their clients.',
    },
    {
      name: 'Robert Thompson',
      role: 'Homeowner',
      company: 'North Little Rock',
      rating: 5,
      text: 'Had them install new locks and rekey my entire house after moving in. Fast, professional, and reasonably priced. Would definitely use them again.',
    },
    {
      name: 'Amanda Wilson',
      role: 'Real Estate Agent',
      company: 'AR Realty Group',
      rating: 5,
      text: 'I recommend them to all my clients for property staging and prep. They always deliver excellent results that help homes sell faster.',
    },
    {
      name: 'James Carter',
      role: 'Commercial Property Owner',
      company: 'Conway',
      rating: 5,
      text: 'Their commercial maintenance services are top notch. They handle our shopping center with professionalism and always stay within budget.',
    },
    {
      name: 'Lisa Anderson',
      role: 'Homeowner',
      company: 'Maumelle',
      rating: 5,
      text: 'The holiday light installation was absolutely beautiful. They designed a custom setup and handled everything from installation to removal. Worth every penny!',
    },
    {
      name: 'David Brown',
      role: 'Property Manager',
      company: 'AirBnB Host',
      rating: 5,
      text: 'Perfect for my AirBnB turnovers. Quick, thorough, and reliable. They handle repairs and maintenance between guests without any hassle.',
    },
    {
      name: 'Patricia Miller',
      role: 'Homeowner',
      company: 'Sherwood',
      rating: 5,
      text: 'They painted our entire house interior and exterior. The crew was professional, clean, and the results exceeded our expectations. Highly recommend!',
    },
    {
      name: 'Kevin Rodriguez',
      role: 'Business Owner',
      company: 'Little Rock',
      rating: 5,
      text: 'Used them for pressure washing our commercial building and parking lot. The transformation was amazing. Great service at a fair price.',
    },
    {
      name: 'Emily Taylor',
      role: 'Homeowner',
      company: 'Benton',
      rating: 5,
      text: 'Had them clean our roof and gutters before winter. They were thorough and even found some minor issues they fixed on the spot. Very professional team.',
    },
    {
      name: 'Christopher Lee',
      role: 'Commercial Client',
      company: 'Office Complex Owner',
      rating: 5,
      text: 'They handle all our building maintenance needs. From handyman work to major renovations, this company delivers quality work every single time.',
    },
  ];

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const getCurrentTestimonials = () => {
    const start = currentIndex * testimonialsPerPage;
    return testimonials.slice(start, start + testimonialsPerPage);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
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
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm flex items-center gap-2">
              <Star className="h-4 w-4 fill-primary" />
              Client Reviews
            </span>
          </motion.div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it – hear from satisfied homeowners and business owners
          </p>
          
          {/* Rating summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full shadow-md"
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 text-accent fill-accent" />
              ))}
            </div>
            <span className="text-foreground font-bold">5.0</span>
            <span className="text-muted-foreground">from 200+ reviews</span>
          </motion.div>
        </motion.div>

        {/* Enhanced Testimonials Carousel */}
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {getCurrentTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group h-full"
                >
                  <Card className="h-full glass-card border-2 border-border/50 hover:border-primary/50 hover-lift hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <CardContent className="p-8 relative z-10">
                      {/* Quote icon and rating */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="bg-accent/10 p-3 rounded-xl group-hover:scale-110 transition-transform">
                          <Quote className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial text */}
                      <p className="text-base text-foreground mb-6 leading-relaxed font-medium">
                        "{testimonial.text}"
                      </p>

                      {/* Client info */}
                      <div className="border-t border-border/50 pt-4 mt-auto">
                        <div className="flex items-center gap-3">
                          {/* Avatar placeholder */}
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-md">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-foreground">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center items-center gap-3 mt-10">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Previous testimonials"
            >
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-10' : 'bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonials page ${index + 1}`}
              />
            ))}
            
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % totalPages)}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Next testimonials"
            >
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
