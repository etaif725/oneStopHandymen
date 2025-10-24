import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServiceAreas from '@/components/ServiceAreas';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <StatsSection />
        <ServicesSection />
        <WhyChooseUs />
        <ServiceAreas />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
