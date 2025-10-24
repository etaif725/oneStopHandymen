 import { motion } from 'framer-motion';
import { MapPin, Check, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ServiceAreas = () => {
  const areas = [
    {
      name: 'Little Rock',
      zipCodes: ['72201', '72202', '72204', '72205', '72206', '72207', '72209', '72211', '72212', '72223'],
    },
    {
      name: 'North Little Rock',
      zipCodes: ['72114', '72116', '72117', '72118', '72120'],
    },
    {
      name: 'Jacksonville',
      zipCodes: ['72076', '72078'],
    },
    {
      name: 'Benton',
      zipCodes: ['72015', '72019'],
    },
    {
      name: 'Sherwood',
      zipCodes: ['72120', '72117'],
    },
    {
      name: 'Maumelle',
      zipCodes: ['72113'],
    },
    {
      name: 'Conway',
      zipCodes: ['72032', '72034'],
    },
    {
      name: 'Cabot',
      zipCodes: ['72023'],
    },
    {
      name: 'Bryant',
      zipCodes: ['72022', '72019'],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              Serving Central Arkansas
            </span>
          </motion.div>

          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Service <span className="text-secondary">Areas</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proudly serving Central Arkansas with professional property maintenance services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {areas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full border-2 border-border/50 hover:border-secondary/50 hover-lift hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardContent className="p-6 relative z-10">
                  {/* Map Icon Header */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border/50">
                    <div className="bg-secondary/10 p-3 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all shadow-md">
                      <MapPin className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-secondary transition-colors">
                      {area.name}
                    </h3>
                  </div>

                  {/* Live Google Map */}
                  <div className="mb-4 h-40 rounded-xl relative overflow-hidden border-2 border-secondary/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209043.29203909266!2d-92.47713308791017!3d34.74864799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d2a134a11f569b%3A0x3405f5100df35b17!2sLittle%20Rock%2C%20AR!5e0!3m2!1sen!2sus!4v1709759234567!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${area.name} Service Area Map`}
                    />
                  </div>

                  {/* Zip Codes */}
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">
                      Zip Codes We Serve:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.zipCodes.map((zip) => (
                        <span
                          key={zip}
                          className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full hover:bg-secondary/20 transition-colors"
                        >
                          {zip}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-2 border-border/50 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            
            <CardContent className="p-8 md:p-12 text-center relative z-10">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                Don't See Your <span className="text-primary">Area?</span>
              </h3>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always expanding! Give us a call – we may still be able to help with your property needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/90 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <MapPin className="h-5 w-5" />
                  Contact Us
                </Link>
                <a 
                  href="tel:5017370930"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <Phone className="h-5 w-5" />
                  (501) 737-0930
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;
