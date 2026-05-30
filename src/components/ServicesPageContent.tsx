import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/constants/business';
import { SERVICE_GROUPS, SERVICES_PAGE } from '@/constants/copy';
import { getIcon } from '@/components/layout/iconMap';
import ContactBand from '@/components/ContactBand';

const serviceById = Object.fromEntries(SERVICES.map((service) => [service.id, service]));

function getServiceGridClass(count: number) {
  if (count === 1) return 'service-card-grid service-card-grid--single';
  if (count === 3) return 'service-card-grid service-card-grid--triple';
  return 'service-card-grid';
}

const ServicesPageContent = () => {
  return (
    <>
      <section className="section-pad band-muted border-b border-border">
        <div className="site-container">
          <p className="section-label">{SERVICES_PAGE.overviewEyebrow}</p>
          <h2 className="display-lg text-balance mb-4 max-w-2xl">{SERVICES_PAGE.overviewTitle}</h2>
          <p className="lead max-w-2xl mb-10">{SERVICES_PAGE.overviewLead}</p>
          <div className="services-overview">
            {SERVICE_GROUPS.map((group) => (
              <a key={group.id} href={`#group-${group.id}`} className="services-phase-card">
                <span className="services-phase-index">{group.index}</span>
                <h3 className="text-lg font-semibold tracking-tight mt-2 mb-2">{group.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{group.summary}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad band-paper border-b border-border">
        <div className="site-container max-w-2xl mx-auto text-center">
          <p className="section-label">{SERVICES_PAGE.integrationEyebrow}</p>
          <h2 className="display-lg text-balance mb-4">{SERVICES_PAGE.integrationTitle}</h2>
          <p className="lead text-muted-foreground">{SERVICES_PAGE.integrationBody}</p>
        </div>
      </section>

      <section className="section-pad band-paper" aria-labelledby="services-catalog-heading">
        <div className="site-container">
          <header className="services-catalog-intro">
            <p className="section-label">{SERVICES_PAGE.catalogEyebrow}</p>
            <h2 id="services-catalog-heading" className="display-lg text-balance mb-4 max-w-2xl">
              {SERVICES_PAGE.catalogTitle}
            </h2>
            <p className="lead max-w-2xl text-muted-foreground">{SERVICES_PAGE.catalogLead}</p>
          </header>

          <div className="services-catalog">
            {SERVICE_GROUPS.map((group, groupIndex) => (
              <section
                key={group.id}
                id={`group-${group.id}`}
                className={`service-phase-block scroll-mt-[calc(var(--site-top)+1.5rem)] ${
                  groupIndex > 0 ? 'service-phase-block--divided' : ''
                }`}
                aria-labelledby={`phase-${group.id}-title`}
              >
                <header className="service-phase-head">
                  <div className="service-phase-label">
                    <span className="service-phase-num" aria-hidden="true">
                      {group.index}
                    </span>
                    <h3 id={`phase-${group.id}-title`} className="service-phase-title">
                      {group.title}
                    </h3>
                  </div>
                  <p className="service-phase-summary">{group.summary}</p>
                </header>

                <div className={getServiceGridClass(group.serviceIds.length)}>
                  {group.serviceIds.map((serviceId) => {
                    const service = serviceById[serviceId];
                    if (!service) return null;

                    const Icon = getIcon(service.icon);

                    return (
                      <article key={service.id} className="service-card">
                        <div className="service-card-top">
                          <div className="service-card-head">
                            <span className="service-card-icon" aria-hidden="true">
                              <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                            </span>
                            <h4 className="service-card-title">{service.name}</h4>
                          </div>
                          <Link
                            to={`/contact?serviceId=${service.id}`}
                            className="service-card-cta"
                          >
                            {SERVICES_PAGE.serviceCardCta}
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </Link>
                        </div>
                        <p className="service-card-desc">{service.description}</p>
                        <div className="service-card-details">
                          <ul className="service-card-features">
                            {service.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
};

export default ServicesPageContent;
