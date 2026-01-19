import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
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
              <Shield className="h-5 w-5 text-accent mr-2" />
              <span className="text-white font-semibold text-sm">
                Your Privacy Matters
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
            >
              Privacy <span className="text-accent">Policy</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              How we collect, use, and protect your information
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

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-border/50 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-8">
                    <strong>Last Updated:</strong> January 2026
                  </p>

                  <p className="text-muted-foreground mb-8">
                    One Stop Property Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    Information We Collect
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    We may collect information about you in a variety of ways, including:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                    <li><strong>Personal Data:</strong> Name, email address, phone number, mailing address, and other contact information you voluntarily provide when requesting a quote or contacting us.</li>
                    <li><strong>Property Information:</strong> Details about your property, including address, type, and specific service needs.</li>
                    <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
                  </ul>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                    <li>Provide, operate, and maintain our services</li>
                    <li>Process and respond to your service requests and inquiries</li>
                    <li>Send you quotes, invoices, and service-related communications</li>
                    <li>Improve our website and services</li>
                    <li>Communicate with you about promotions, updates, and company news (with your consent)</li>
                    <li>Comply with legal obligations</li>
                  </ul>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    Information Sharing
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, such as payment processors, email service providers, and scheduling tools. These parties are obligated to keep your information confidential.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    Data Security
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    Cookies and Tracking
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    Your Rights
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of marketing communications</li>
                  </ul>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    Third-Party Links
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    Children's Privacy
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    Changes to This Policy
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    Contact Us
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                  </p>
                  <div className="bg-muted/50 p-6 rounded-xl">
                    <p className="text-foreground font-semibold mb-2">One Stop Property Solutions</p>
                    <p className="text-muted-foreground">Email: Info@onestoppropertyar.com</p>
                    <p className="text-muted-foreground">Phone: (501) 737-0930</p>
                    <p className="text-muted-foreground">Service Area: Little Rock, AR & Surrounding Areas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default PrivacyPolicy;
