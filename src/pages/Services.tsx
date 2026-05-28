import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageShell from '@/components/layout/PageShell';
import FaqSection from '@/components/FaqSection';
import { SERVICES } from '@/constants/business';
import { getIcon } from '@/components/layout/iconMap';

const Services = () => (
  <PageShell
    banner={{
      eyebrow: 'Services',
      title: 'Investor operations, end to end',
      description: 'Six integrated service lines. One accountable local team in Central Arkansas.',
      breadcrumb: [{ label: 'Home', to: '/' }, { label: 'Services' }],
    }}
  >
    <section className="section-pad band-paper">
      <div className="site-container max-w-3xl">
        {SERVICES.map((service, i) => {
          const Icon = getIcon(service.icon);
          return (
            <article key={service.id} className="service-row first:border-t first:border-border">
              <div className="service-index">{String(i + 1).padStart(2, '0')}</div>
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="h-5 w-5 text-accent" />
                  <h2 className="text-2xl font-semibold tracking-tight">{service.name}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  {service.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-accent">+</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}

        <div className="mt-16 pt-10 border-t border-border text-center">
          <p className="lead mb-6">Ready to put a local team on the ground?</p>
          <Link to="/contact" className="btn-primary">
            Schedule a Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

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
