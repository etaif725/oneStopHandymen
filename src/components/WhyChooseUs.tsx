import { motion } from 'framer-motion';
import { Shield, Clock, Users, Award, ThumbsUp, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Full licensing and comprehensive insurance coverage for your peace of mind.',
    },
    {
      icon: Clock,
      title: '24/7 Emergency Response',
      description: 'Round-the-clock availability for urgent property maintenance needs.',
    },
    {
      icon: Users,
      title: 'Experienced Teams',
      description: 'Multiple professional crews with years of industry experience.',
    },
    {
      icon: Award,
      title: 'Quality Workmanship',
      description: 'Meticulous attention to detail and commitment to excellence.',
    },
    {
      icon: ThumbsUp,
      title: 'Satisfaction Guaranteed',
      description: 'We stand behind our work with a 100% satisfaction guarantee.',
    },
    {
      icon: Sparkles,
      title: 'Free Estimates',
      description: 'Transparent pricing with no-obligation free estimates for all projects.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
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
              Our Commitment
            </span>
          </motion.div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Why Choose <span className="text-secondary">One Stop</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're committed to delivering exceptional service and building lasting relationships
            with every client
          </p>
        </motion.div>

        {/* Enhanced Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full border-2 border-border/50 hover:border-secondary/50 hover-lift hover:shadow-2xl transition-all duration-300 bg-card/80 backdrop-blur-sm overflow-hidden relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardContent className="p-8 text-center relative z-10">
                  {/* Enhanced icon with glow effect */}
                  <div className="relative mb-6 inline-block">
                    <div className="bg-secondary/10 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <reason.icon className="h-10 w-10 text-secondary group-hover:scale-110 transition-transform" />
                    </div>
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity -z-10" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl md:text-2xl mb-4 text-foreground group-hover:text-secondary transition-colors">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Decorative bottom accent */}
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <div className="h-1 w-12 bg-gradient-to-r from-secondary to-primary rounded-full mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust badge section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 glass-card rounded-full shadow-lg">
            <Award className="h-6 w-6 text-accent" />
            <span className="font-semibold text-foreground">
              A+ Rated Business | Fully Licensed & Insured
            </span>
            <Award className="h-6 w-6 text-accent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
