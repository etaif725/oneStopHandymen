import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageShell from '@/components/layout/PageShell';
import FaqSection from '@/components/FaqSection';

const FAQ = () => (
  <PageShell
    title="FAQ | One Stop Property Solutions"
    banner={{
      eyebrow: 'FAQ',
      title: 'Answers for investors and property owners',
      description: 'Clear answers about our services, coverage, Section 8 support, and how we work with remote owners.',
      breadcrumb: [{ label: 'Home', to: '/' }, { label: 'FAQ' }],
    }}
  >
    <section className="section-pad">
      <div className="site-container max-w-3xl">
        <FaqSection
          eyebrow=""
          title=""
          description=""
          grouped
          includeJsonLd
          jsonLdId="faq-page-json-ld"
        />
      </div>
    </section>

    <section className="section-pad band-muted border-t border-border">
      <div className="site-container max-w-xl text-center">
        <p className="section-label">Still have questions?</p>
        <h2 className="display-lg mb-4">Talk to our team</h2>
        <p className="lead mb-8">
          Tell us about your properties and portfolio goals. We respond quickly with a clear operational plan.
        </p>
        <Link to="/contact" className="btn-primary">
          Schedule a Call
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  </PageShell>
);

export default FAQ;
