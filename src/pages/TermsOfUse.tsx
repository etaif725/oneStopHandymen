import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

const TermsOfUse = () => {
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
              <FileText className="h-5 w-5 text-accent mr-2" />
              <span className="text-white font-semibold text-sm">
                Legal Agreement
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
            >
              Terms of <span className="text-accent">Use</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              Please read these terms carefully before using our services
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
                    Welcome to One Stop Property Solutions. By accessing or using our website and services, you agree to be bound by these Terms of Use. Please read them carefully before using our services.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    By accessing our website or requesting our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    2. Description of Services
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    One Stop Property Solutions provides property maintenance, handyman services, property management, and related services in Central Arkansas. Our services include but are not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                    <li>General handyman and repair services</li>
                    <li>Property staging and preparation</li>
                    <li>Residential and commercial maintenance</li>
                    <li>Remodeling and custom projects</li>
                    <li>Roofing, painting, and pressure washing</li>
                    <li>Property management solutions</li>
                    <li>Seasonal services including holiday light installation</li>
                  </ul>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    3. Service Agreements
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    All service requests are subject to availability and our acceptance. Upon accepting your service request, we will provide you with an estimate or quote. The final scope of work, pricing, and timeline will be agreed upon before work begins. Additional charges may apply for work outside the original scope.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    4. Estimates and Pricing
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    We provide free estimates for most services. Estimates are based on the information available at the time and may be subject to change upon further inspection. We strive to provide accurate pricing, but unforeseen conditions may require adjustments. Any changes to the original estimate will be communicated and approved before additional work is performed.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    5. Payment Terms
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Payment is due upon completion of services unless otherwise agreed in writing. We accept cash, credit cards, debit cards, and checks. For larger projects, we may require deposits or progress payments. Late payments may be subject to additional fees as permitted by law.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    6. Cancellation Policy
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    You may cancel or reschedule a service appointment with at least 24 hours notice without penalty. Cancellations with less than 24 hours notice may be subject to a cancellation fee. We reserve the right to cancel or reschedule services due to weather, safety concerns, or other circumstances beyond our control.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    7. Property Access
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    You agree to provide reasonable access to your property for the performance of services. You are responsible for securing valuables, pets, and personal items. We are not responsible for items left in work areas. Please inform us of any security systems, access codes, or special instructions prior to service.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    8. Warranties and Guarantees
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    We stand behind our workmanship and will address any issues related to our work. Warranty terms may vary by service type and will be communicated at the time of service. Warranties do not cover damage caused by misuse, neglect, or normal wear and tear. Materials may be covered by manufacturer warranties.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    9. Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    To the fullest extent permitted by law, One Stop Property Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    10. Insurance and Licensing
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    We maintain appropriate business licenses and insurance coverage for the services we provide. Proof of insurance is available upon request. Our team members are trained and qualified to perform the services offered.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    11. Intellectual Property
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    All content on our website, including text, graphics, logos, and images, is the property of One Stop Property Solutions and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use our content without written permission.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    12. User Conduct
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    When using our website, you agree not to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                    <li>Submit false or misleading information</li>
                    <li>Attempt to interfere with the website's operation</li>
                    <li>Use the website for any unlawful purpose</li>
                    <li>Violate any applicable laws or regulations</li>
                  </ul>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    13. Dispute Resolution
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Any disputes arising from these Terms or our services shall first be attempted to be resolved through good-faith negotiation. If a resolution cannot be reached, disputes shall be resolved through binding arbitration in accordance with the laws of the State of Arkansas.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    14. Governing Law
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    These Terms of Use shall be governed by and construed in accordance with the laws of the State of Arkansas, without regard to its conflict of law provisions.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    15. Changes to Terms
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
                  </p>

                  <h2 className="font-heading font-bold text-2xl text-foreground mt-8 mb-4">
                    16. Contact Information
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about these Terms of Use, please contact us:
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

export default TermsOfUse;
