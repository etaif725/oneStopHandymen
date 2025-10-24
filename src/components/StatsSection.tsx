import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Briefcase, Award, Clock } from 'lucide-react';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Users,
      end: 56,
      suffix: '+',
      label: 'Happy Clients',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Briefcase,
      end: 78,
      suffix: '+',
      label: 'Projects Completed',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Award,
      end: 6,
      suffix: '+',
      label: 'Years Collective Experience',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Clock,
      end: 24,
      suffix: '/7',
      label: 'Available',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-20 bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">
            Trusted by <span className="text-primary">Arkansas Locals</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence has earned us the trust of hundreds of satisfied clients
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              {...stat}
              isInView={isInView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ElementType;
  end: number;
  suffix: string;
  label: string;
  color: string;
  bgColor: string;
  isInView: boolean;
  index: number;
}

const StatCard = ({ icon: Icon, end, suffix, label, color, bgColor, isInView, index }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepValue = end / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.min(Math.floor(stepValue * currentStep), end));
      } else {
        clearInterval(timer);
        setCount(end);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="glass-card rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2 border border-border/50">
        {/* Icon */}
        <div className={`${bgColor} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
          <Icon className={`h-8 w-8 ${color}`} />
        </div>

        {/* Number */}
        <div className="mb-2 min-h-[3.5rem] md:min-h-[4rem] flex items-center justify-center">
          <span className={`font-heading font-black text-4xl md:text-5xl ${color}`}>
            {count}{suffix}
          </span>
        </div>

        {/* Label */}
        <p className="font-medium text-sm md:text-base text-muted-foreground">
          {label}
        </p>

        {/* Hover effect decoration */}
        <div className={`absolute inset-0 ${bgColor} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity -z-10`} />
      </div>
    </motion.div>
  );
};

export default StatsSection;

