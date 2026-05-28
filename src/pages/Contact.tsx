import PageShell from '@/components/layout/PageShell';
import LeadGenForm from '@/components/LeadGenForm';
import FaqSection from '@/components/FaqSection';
import { BUSINESS_INFO } from '@/constants/business';

const Contact = () => (
  <PageShell
    banner={{
      eyebrow: 'Contact',
      title: 'Start the conversation',
      description: 'Tell us about your properties and portfolio goals. We respond quickly.',
      breadcrumb: [{ label: 'Home', to: '/' }, { label: 'Contact' }],
    }}
  >
    <section className="section-pad">
      <div className="site-container">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16">
          <div>
            <h2 className="display-lg mb-8">Reach us directly</h2>
            <dl className="space-y-6 text-sm">
              <div>
                <dt className="section-label mb-1">Phone</dt>
                <dd>
                  <a href="tel:+15017370930" className="text-lg font-semibold hover:text-accent">
                    {BUSINESS_INFO.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="section-label mb-1">Email</dt>
                <dd>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-accent">
                    {BUSINESS_INFO.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="section-label mb-1">Service area</dt>
                <dd className="text-muted-foreground">{BUSINESS_INFO.address} and surrounding markets</dd>
              </div>
              <div>
                <dt className="section-label mb-1">Hours</dt>
                <dd className="text-muted-foreground">{BUSINESS_INFO.hours.weekdays}</dd>
              </div>
            </dl>

            <hr className="rule my-10" />

            <FaqSection
              variant="list"
              ids={['investors-remote', 'coverage-areas', 'section8-support']}
              eyebrow=""
              title="Common questions"
              includeJsonLd
              jsonLdId="contact-faq-json-ld"
              showViewAllLink
            />
          </div>
          <div className="band-paper border border-border p-8 md:p-10">
            <LeadGenForm />
          </div>
        </div>
      </div>
    </section>
  </PageShell>
);

export default Contact;
