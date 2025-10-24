import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Users, Award, Heart, CheckCircle2, Sparkles, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We show up on time, every time, and deliver on our promises.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Exceptional workmanship and attention to detail in every project.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest communication and transparent pricing you can trust.',
    },
    {
      icon: Users,
      title: 'Customer Service',
      description: 'Your satisfaction is our top priority from start to finish.',
    },
  ];

  const stats = [
    { number: '2025', label: 'Established' },
    { number: '24/7', label: 'Availability' },
    { number: '98%', label: 'Satisfaction' },
    { number: '3+', label: 'Pro Teams' },
  ];

  const owners = [
    {
      name: 'Yonatan Azbel',
      role: 'Co-Founder',
      bio: 'With years of experience in property management and renovation, Yonatan brings expertise in transforming properties and delivering exceptional results. His attention to detail and commitment to quality ensures every project exceeds expectations.',
      specialties: ['Property Staging', 'Renovations', 'Project Management'],
      imageUrl: '/040a33_Yonatan1.webp',
    },
    {
      name: 'David Vilhovezky',
      role: 'Co-Founder',
      bio: 'David\'s background in commercial maintenance and customer service drives our company\'s dedication to reliability and professionalism. He ensures every client receives prompt, courteous service and complete satisfaction.',
      specialties: ['Commercial Services', 'Client Relations', 'Operations'],
      imageUrl: '/c63f62_5.webp',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
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
                Established 2025
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
            >
              About <span className="text-accent">Us</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto"
            >
              Your trusted partner for professional property maintenance and handyman services in Central Arkansas
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

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
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
                Our Journey
              </span>
            </motion.div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              How We <span className="text-primary">Started</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-2 border-border/50 shadow-2xl">
                <CardContent className="p-8 md:p-12 lg:p-16">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-xl md:text-2xl font-semibold text-foreground mb-8 leading-relaxed">
                      One Stop Property Solutions was founded by Yonatan Azbel and David Vilhovezky with one clear mission: to bring reliability, organization, and trust back to property services.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8 my-10">
                      <div>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                          After years of managing properties and leading renovation crews in Florida, they kept seeing the same frustrations everywhere. Homeowners and investors struggled to find reliable professionals for different jobs, bouncing between multiple companies, wasting time and money. They wanted to change that.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                          Their idea was simple: Create one trusted place where every property service, from repairs to management, could be handled professionally, efficiently, and under one roof.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          In 2025 they brought that vision to Central Arkansas. They arrived with solid experience in residential and commercial building maintenance, strong communication skills, and hands-on management expertise. No flashy marketing, just real dedication to honest work and client satisfaction.
                        </p>
                      </div>
                      <div>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                          Today One Stop Property Solutions runs multiple teams across the region, offering everything from handyman services and remodeling to property management and seasonal maintenance. With extensive experience in commercial properties and direct coordination with building owners and managers, they know how to deliver results that last.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                          Despite the growth, Yonatan and David stay personally involved. They still answer the phone, visit job sites, and make sure every client gets the level of service they built their reputation on.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          It's not complicated. Show up when you say you will, do the job right, and treat people fairly.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl border-l-4 border-primary mt-10">
                      <p className="text-xl text-foreground font-semibold italic leading-relaxed m-0">
                        "That's how One Stop Property Solutions became the one place Arkansas locals can truly rely on for all their property needs."
                      </p>
                      <p className="text-muted-foreground mt-4 text-sm m-0">— Yonatan Azbel & David Vilhovezky, Co-Founders</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Owners Section */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
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
              <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary font-semibold text-sm">
                Leadership Team
              </span>
            </motion.div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Meet the <span className="text-secondary">Owners</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The dedicated founders bringing expertise and passion to every project
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {owners.map((owner, index) => (
              <motion.div
                key={owner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <Card className="h-full border-2 border-border/50 hover:border-secondary/50 hover-lift hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardContent className="p-8 md:p-10 relative z-10">
                    {/* Profile Photo / Avatar */}
                    <div className="mb-6">
                      {owner.imageUrl ? (
                        <img 
                          src={owner.imageUrl} 
                          alt={owner.name}
                          className="w-24 h-24 rounded-full object-cover shadow-xl group-hover:scale-110 transition-transform mx-auto border-4 border-secondary/20"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-4xl shadow-xl group-hover:scale-110 transition-transform mx-auto">
                          {owner.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>

                    <div className="text-center mb-6">
                      <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2 group-hover:text-secondary transition-colors">
                        {owner.name}
                      </h3>
                      <p className="text-secondary font-semibold text-lg uppercase tracking-wide">
                        {owner.role}
                      </p>
                    </div>

                    <p className="text-muted-foreground text-base leading-relaxed mb-6 text-center">
                      {owner.bio}
                    </p>

                    <div className="pt-6 border-t border-border/50">
                      <p className="text-sm font-bold text-foreground mb-3 text-center">Areas of Expertise:</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {owner.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold hover:bg-secondary/20 transition-colors"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
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
              <span className="px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm">
                Core Principles
              </span>
            </motion.div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Our <span className="text-accent">Values</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The principles that guide every project we undertake
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full text-center border-2 border-border/50 hover:border-accent/50 hover-lift hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <value.icon className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-accent transition-colors">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Stats Bar */}
      <section className="py-16 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="shadow-2xl border-2 border-border/50 overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-lg hover:scale-105 transition-all group"
                    >
                      <div className="font-heading font-black text-4xl md:text-5xl mb-2 text-primary group-hover:scale-110 transition-transform">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground font-bold uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>


      {/* Licensed & Professional - CTA Style */}
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
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-white font-bold text-sm">
                  Certified & Protected
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
                Licensed, Insured & <span className="text-accent">Professional</span>
              </motion.h2>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                We maintain all necessary licenses and comprehensive insurance coverage to protect you and your property
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

              {/* Additional info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-6 text-white/90"
              >
                <div className="flex items-center gap-2">
                  <div className="bg-accent/20 p-1 rounded-full">
                    <Shield className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium">Fully Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-accent/20 p-1 rounded-full">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium">Insured Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-accent/20 p-1 rounded-full">
                    <Award className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium">Professional Service</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default About;
