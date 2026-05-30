import PageShell from '@/components/layout/PageShell';
import LeadGenForm from '@/components/LeadGenForm';
import FaqSection from '@/components/FaqSection';
import { BUSINESS_INFO } from '@/constants/business';
import { CONTACT_COPY } from '@/constants/copy';

type ContactDetailItem =
  | { label: string; href: string; value: string }
  | { label: string; value: string };

const CONTACT_DETAILS: ContactDetailItem[] = [
  { label: 'Phone', href: 'tel:+15017370930', value: BUSINESS_INFO.phone },
  { label: 'Email', href: `mailto:${BUSINESS_INFO.email}`, value: BUSINESS_INFO.email },
  { label: 'Service area', value: `${BUSINESS_INFO.address} and surrounding markets` },
  { label: 'Hours', value: BUSINESS_INFO.hours.weekdays },
];

const Contact = () => (
  <PageShell
    banner={{
      eyebrow: 'Contact',
      title: 'Start the conversation',
      description: CONTACT_COPY.contactBanner,
      breadcrumb: [{ label: 'Home', to: '/' }, { label: 'Contact' }],
    }}
  >
    <section className="section-pad contact-page">
      <div className="site-container">
        <div className="contact-layout">
          <aside className="contact-aside">
            <header className="contact-aside-head">
              <p className="section-label">{CONTACT_COPY.asideEyebrow}</p>
              <h2 className="contact-aside-title">{CONTACT_COPY.contactReachTitle}</h2>
              <p className="contact-aside-lead">{CONTACT_COPY.asideLead}</p>
            </header>

            <dl className="contact-info-grid">
              {CONTACT_DETAILS.map((item) => (
                <div key={item.label} className="contact-info-item">
                  <dt className="contact-info-label">{item.label}</dt>
                  <dd className="contact-info-value">
                    {'href' in item ? (
                      <a href={item.href} className="contact-info-link">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <hr className="rule contact-divider" />

            <FaqSection
              variant="list"
              ids={['investors-remote', 'coverage-areas', 'section8-support']}
              eyebrow=""
              title={CONTACT_COPY.contactFaqTitle}
              headingSize="section"
              includeJsonLd
              jsonLdId="contact-faq-json-ld"
              showViewAllLink
              className="contact-faq"
            />
          </aside>

          <div className="contact-form-panel">
            <header className="contact-form-head">
              <h2 className="contact-form-title">{CONTACT_COPY.formTitle}</h2>
              <p className="contact-form-lead">{CONTACT_COPY.formLead}</p>
            </header>
            <LeadGenForm variant="contact" />
          </div>
        </div>
      </div>
    </section>
  </PageShell>
);

export default Contact;
