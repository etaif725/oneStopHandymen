import SiteLayout from '@/components/SiteLayout';
import Hero from '@/components/Hero';
import ServicesShowcase from '@/components/ServicesShowcase';
import OperationsProcess from '@/components/OperationsProcess';
import WhyChooseUs from '@/components/WhyChooseUs';
import CoverageSection from '@/components/CoverageSection';
import Testimonials from '@/components/Testimonials';
import FaqSection from '@/components/FaqSection';
import ContactBand from '@/components/ContactBand';

const Home = () => (
  <SiteLayout>
    <Hero />
    <ServicesShowcase />
    <OperationsProcess />
    <WhyChooseUs />
    <CoverageSection />
    <Testimonials />
    <section className="section-pad band-muted border-y border-border">
      <div className="site-container max-w-3xl">
        <FaqSection
          eyebrow="FAQ"
          title="Questions investors ask us"
          description="Quick answers about working with a local team across Central Arkansas."
          limit={5}
          showViewAllLink
          includeJsonLd
          jsonLdId="home-faq-json-ld"
        />
      </div>
    </section>
    <ContactBand />
  </SiteLayout>
);

export default Home;
