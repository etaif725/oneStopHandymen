import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Gallery = () => {
  // Placeholder for project images
  const projects = [
    {
      category: 'Remodeling',
      title: 'Kitchen Renovation',
      description: 'Complete kitchen remodel with custom cabinetry',
    },
    {
      category: 'Electrical',
      title: 'Commercial Lighting',
      description: 'Retail space lighting upgrade and installation',
    },
    {
      category: 'Deck Building',
      title: 'Custom Deck',
      description: 'Cedar deck with built-in seating and lighting',
    },
    {
      category: 'Property Maintenance',
      title: 'Multi-Unit Complex',
      description: 'Ongoing maintenance for 20-unit property',
    },
    {
      category: 'Roof Maintenance',
      title: 'Pre-Winter Roof Cleaning',
      description: 'Complete roof and gutter cleaning service',
    },
    {
      category: 'Commercial',
      title: 'Office Renovation',
      description: 'Professional office space transformation',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
              Our <span className="text-accent">Work</span>
            </h1>
            <p className="text-xl text-white/90">
              Explore our portfolio of completed projects showcasing quality craftsmanship and
              attention to detail
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group cursor-pointer hover:shadow-primary transition-all duration-300">
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="text-6xl mb-4">📷</div>
                        <p className="text-sm text-muted-foreground">Project Photo</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-secondary/10 rounded-full text-sm text-secondary font-medium mb-3">
                      {project.category}
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your property vision to life with quality craftsmanship
              and professional service.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-primary text-lg px-10">
                Get Your Free Estimate
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Gallery;
