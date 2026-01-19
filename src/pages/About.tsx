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
      name: 'Jonathan Azbel',
      role: 'Founder',
      bio: 'Jonathan is involved in the operational side of the company, focusing on planning, oversight, and long term property performance. He works closely on daily execution while maintaining a broader view of priorities, costs, and future needs, ensuring properties are managed efficiently and sustainably over time.',
      specialties: ['Operations', 'Project Oversight', 'Property Performance'],
      imageUrl: '/040a33_Yonatan1.webp',
    },
    {
      name: 'David Vilhovezky',
      role: 'Founder',
      bio: 'David is involved in day to day coordination, communication, and execution across projects. He works closely with clients and on site teams to ensure maintenance and operational needs are handled clearly, consistently, and with attention to detail.',
      specialties: ['Client Communication', 'Day to Day Operations', 'Maintenance Coordination'],
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
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8"
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
                Our Story
              </span>
            </motion.div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              About <span className="text-primary">Us</span>
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
                      One Stop Property Solutions was founded by Jonathan Azbel and David Vilhovezky with a clear mission to bring structure, reliability, and clarity to property services.
                    </p>
                    
                    <div className="space-y-6">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Through years of working with private owners, commercial properties, and investors managing assets remotely, they identified recurring challenges caused by fragmented service models, scattered responsibility, and a lack of clear oversight.
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Rather than relying on multiple vendors and short term solutions, the company was built around a centralized approach where communication, execution, and day to day property needs are handled in one place. This structure allows property owners to stay informed, make better decisions, and avoid unnecessary expenses while maintaining consistent performance over time.
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        With a strong focus on clear communication and long term planning, Jonathan and David ensure that each client feels involved and confident, as if managing the property themselves. The result is a service model that combines hands on maintenance with structured management, designed to reduce friction, support growth, and protect the value of every property over the long term.
                      </p>
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
              Meet the <span className="text-secondary">Founders</span>
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
