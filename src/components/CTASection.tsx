import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl md:rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-2xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 gradient-hero" />
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/90" />
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/30 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 shadow-lg"
            >
              <Calendar className="h-5 w-5 text-accent" />
              <span className="text-white font-bold text-sm">
                Available 24/7 for Emergencies
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-heading font-black text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight"
            >
              Ready to Get <span className="text-accent">Started?</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Contact us today for a free estimate. Whether it's a small repair or a major project,
              we're here to help
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Link to="/contact" className="group">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white text-lg md:text-xl px-12 py-8 rounded-xl shadow-2xl hover:shadow-accent hover:scale-105 transition-all font-bold border-0"
                >
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:5017370930" className="group">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:scale-105 text-lg md:text-xl px-12 py-8 rounded-xl shadow-xl font-bold"
                >
                  <Phone className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  (501) 737-0930
                </Button>
              </a>
            </motion.div>

            {/* Additional contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 text-white/90"
            >
              <div className="flex items-center gap-2">
                <div className="bg-accent/20 p-1 rounded-full">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-medium">Response within 1 hour</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-accent/20 p-1 rounded-full">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-medium">Free on-site estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-accent/20 p-1 rounded-full">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-medium">Same-day service available</span>
              </div>
            </motion.div>

            {/* Email link */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-8 text-white/70 text-sm"
            >
              Or email us at{' '}
              <a
                href="mailto:Info@onestoppropertyar.com"
                className="text-accent hover:text-accent/80 hover:underline font-bold transition-colors"
              >
                Info@onestoppropertyar.com
              </a>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
