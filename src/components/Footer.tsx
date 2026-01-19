import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import logo from '@/assets/logo.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  const services = [
    'Handyman Services',
    'Property Staging & Prep',
    'Lock Replacement',
    'Property Management',
    'Residential Maintenance',
    'Commercial Services',
    'Remodeling & Custom',
    'Roofing Services',
    'Painting Services',
    'Garage Door Painting',
    'Pressure Washing',
    'Roof Cleaning',
    'Gutter Cleaning',
    'Holiday Lights',
  ];

  return (
    <footer className="rounded-t-[50px] relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src={logo} 
              alt="One Stop Property Solutions" 
              className="h-32 w-auto mb-6 hover:scale-105 transition-transform filter brightness-0 invert"
            />
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Professional property maintenance and handyman services serving Central Arkansas since 2025
            </p>
            
            {/* Trust badges */}
            {/* <div className="mb-6 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-primary-foreground/80">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-primary-foreground/80">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-primary-foreground/80">A+ Rated Business</span>
              </div>
            </div> */}

            {/* Social Links */}
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=61581459988037"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all shadow-md group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/Onestoppropertyus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all shadow-md group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-secondary/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-accent hover:scale-110 transition-all shadow-md group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/80 hover:text-accent hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Compact 2 column layout */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6 text-primary-foreground">Our Services</h4>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {services.slice(0, 8).map((service) => (
                <li key={service} className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span className="text-primary-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6 text-primary-foreground">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3 group">
                  <div className="bg-accent/20 p-2 rounded-lg mt-0.5 group-hover:bg-accent/30 transition-all">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:5017370930"
                      className="text-primary-foreground hover:text-accent transition-colors font-semibold"
                    >
                      (501) 737-0930
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 group">
                  <div className="bg-accent/20 p-2 rounded-lg mt-0.5 group-hover:bg-accent/30 transition-all">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <a
                    href="mailto:Info@onestoppropertyar.com"
                    className="text-primary-foreground/90 hover:text-accent transition-colors text-sm break-all"
                  >
                    Info@onestoppropertyar.com
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 group">
                  <div className="bg-accent/20 p-2 rounded-lg mt-0.5 group-hover:bg-accent/30 transition-all">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-primary-foreground/90 text-sm leading-relaxed">
                    Serving Little Rock, AR & Surrounding Areas
                  </span>
                </div>
              </li>
            </ul>
            
            {/* Emergency badge */}
            <div className="mt-6 p-4 bg-accent/20 backdrop-blur-sm rounded-xl border border-accent/30">
              <p className="text-primary-foreground font-bold text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Available 24/7
              </p>
              <p className="text-primary-foreground/80 text-xs mt-1">
                Emergency Services Every Day
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} One Stop Property Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy-policy" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <span className="text-primary-foreground/30">•</span>
              <Link to="/terms-of-use" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Terms of Use
              </Link>
              <span className="text-primary-foreground/30">•</span>
              <span className="text-primary-foreground/70">
                Made with care in Arkansas
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
