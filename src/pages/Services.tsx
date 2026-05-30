import PageShell from '@/components/layout/PageShell';
import FaqSection from '@/components/FaqSection';
import ServicesPageContent from '@/components/ServicesPageContent';
import { SERVICES_PAGE } from '@/constants/copy';

const Services = () => (
  <PageShell
    banner={{
      eyebrow: SERVICES_PAGE.bannerEyebrow,
      title: SERVICES_PAGE.bannerTitle,
      description: SERVICES_PAGE.bannerDescription,
      breadcrumb: [{ label: 'Home', to: '/' }, { label: 'Services' }],
    }}
  >
    <ServicesPageContent />

    <section className="section-pad band-muted border-t border-border">
      <div className="site-container max-w-3xl">
        <FaqSection
          categories={['services', 'section8']}
          eyebrow="FAQ"
          title="Service questions"
          description="Answers about renovations, management, and Section 8 support."
          showViewAllLink
          includeJsonLd
          jsonLdId="services-faq-json-ld"
        />
      </div>
    </section>
  </PageShell>
);

export default Services;
