import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo-full.webp';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-[70px] md:top-[48px] left-0 right-0 z-40 pointer-events-none">
      <div className="flex justify-center px-4 py-4">
        <motion.div
          initial={false}
          animate={{
            width: isScrolled ? 'auto' : '100%',
            maxWidth: isScrolled ? '1200px' : '1400px',
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="pointer-events-auto"
        >
          <div className={`transition-all duration-500 bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/20`}>
            <div className="px-4 md:px-6 lg:px-8">
              <div className={`flex items-center justify-between transition-all duration-300 ${
                isScrolled ? 'h-16' : 'h-20'
              }`}>
                {/* Logo */}
                <Link to="/" className="flex items-center group flex-shrink-0">
                  <img 
                    src={logo} 
                    alt="One Stop Property Solutions" 
                    className={`w-auto transition-all duration-300 group-hover:scale-105 ${
                      isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'
                    }`}
                  />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1 mx-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`relative px-4 py-2 font-semibold text-sm rounded-xl transition-all whitespace-nowrap ${
                        location.pathname === link.to 
                          ? 'text-white bg-gradient-to-r from-primary to-secondary shadow-md' 
                          : 'text-foreground hover:text-primary hover:bg-primary/10'
                      }`}
                    >
                      {link.label}
                      {location.pathname === link.to && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl -z-10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  ))}
                </div>

                {/* Desktop CTA Button */}
                <div className="hidden lg:block flex-shrink-0">
                  <a href="tel:+15017370930" className="group">
                    <Button 
                      size={isScrolled ? "default" : "lg"}
                      className="gradient-accent hover:scale-105 shadow-lg hover:shadow-accent/50 transition-all font-semibold rounded-xl"
                    >
                      <Phone className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                      <span className="hidden xl:inline">(501) 737-0930</span>
                      <span className="xl:hidden">Call Now</span>
                    </Button>
                  </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden p-2.5 rounded-xl text-foreground hover:text-primary hover:bg-primary/10 transition-all flex-shrink-0"
                  aria-label="Toggle menu"
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </motion.div>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="lg:hidden flex justify-center px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-md pointer-events-auto"
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                <div className="px-5 py-5">
                  <div className="space-y-1.5">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.to}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                      >
                        <Link
                          to={link.to}
                          className={`block py-3 px-4 font-semibold text-sm rounded-xl transition-all ${
                            location.pathname === link.to 
                              ? 'text-white bg-gradient-to-r from-primary to-secondary shadow-md' 
                              : 'text-foreground hover:text-primary hover:bg-primary/10'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-5 pt-5 border-t border-border/20"
                  >
                    <a href="tel:+15017370930" className="block">
                      <Button 
                        size="lg" 
                        className="w-full gradient-accent shadow-lg hover:shadow-accent/50 font-semibold rounded-xl"
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        (501) 737-0930
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
