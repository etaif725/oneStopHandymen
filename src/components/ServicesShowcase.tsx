import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/constants/business';
// import { getIcon } from '@/components/layout/iconMap';

const ServicesShowcase = () => {
  return (
    <section className="section-pad band-paper">
      <div className="site-container">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-16">
          <div className="lg:sticky lg:top-[calc(var(--site-top)+2rem)] lg:self-start">
            <p className="section-label">What We Do</p>
            <h2 className="display-lg text-balance mb-4">
              Operations built for Arkansas Real Estate investors
            </h2>
            <p className="lead mb-6">
              Six integrated service lines. One local team accountable for execution,
              communication, and long-term property performance.
            </p>
            <Link to="/services" className="btn-outline-dark">
              Full service details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            {SERVICES.map((service, i) => {
              return (
                <article key={service.id} className="service-row">
                  <div className="service-index">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold tracking-tight">{service.name}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1.5 lg:pt-8">
                    {service.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-accent shrink-0">+</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
