import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, ArrowRight, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeadGenForm from '@/components/LeadGenForm';
import heroImage from '@/assets/hero-background.webp';

const Hero = () => {

  const features = [
    { text: 'Licensed & Insured', icon: CheckCircle2 },
    { text: '24/7 Emergency', icon: Award },
    { text: 'Free Estimates', icon: Sparkles },
  ];

  return (
    <section className="pt-32 md:pt-28 relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional property maintenance team"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-secondary/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 shadow-xl"
              >
                <Award className="h-5 w-5 text-accent mr-2" />
                <span className="text-white font-semibold text-sm">
                  Serving Central Arkansas Since 2025
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1] tracking-tight"
              >
                Your Property,
                <br />
                <span className="text-accent">Our Priority.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
              >
                Professional property maintenance, handyman services, and remodeling solutions for residential and commercial properties.
              </motion.p>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 hover:bg-white/20 transition-all group shadow-lg"
                  >
                    <div className="bg-accent/20 p-1.5 rounded-lg group-hover:bg-accent/30 transition-all">
                      <feature.icon className="h-4 w-4 text-accent flex-shrink-0" />
                    </div>
                    <span className="text-sm font-semibold text-white">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/services" className="group">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white text-base px-8 py-6 rounded-xl shadow-2xl hover:shadow-accent hover:scale-105 transition-all font-bold border-0"
                  >
                    View All Services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:5017370930" className="group">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:scale-105 text-base px-8 py-6 rounded-xl shadow-xl font-semibold"
                  >
                    <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    (501) 737-0930
                  </Button>
                </a>
              </motion.div>
            </div>

            {/* Right Column - Lead Gen Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:block"
            >
              <Card className="border-2 border-white/20 shadow-2xl backdrop-blur-md bg-white/95 overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  {/* Form Header */}
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full mb-4">
                      <Sparkles className="h-4 w-4" />
                      <span className="text-sm font-semibold">Get Your Free Quote</span>
                    </div>
                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2">
                      Start Your Project Today
                    </h3>
                    <p className="text-muted-foreground">
                      Fill out the form and we'll contact you within 1 hour
                    </p>
                  </div>

                  {/* Form */}
                  <LeadGenForm variant="compact" />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
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
  );
};

export default Hero;
