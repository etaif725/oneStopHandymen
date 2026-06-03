import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import PageShell from '@/components/layout/PageShell';
import { BUSINESS_INFO, FOUNDERS } from '@/constants/business';
import { ABOUT_COPY } from '@/constants/copy';
import SocialLinks from '@/components/SocialLinks';
import yonatan from '@/assets/yonatan-2.webp';
import david from '@/assets/david-2.webp';

const founderImages: Record<string, string> = {
  'Jonathan Azbel': yonatan,
  'David Vilhovezky': david,
};

const About = () => (
  <PageShell
    banner={{
      eyebrow: ABOUT_COPY.bannerEyebrow,
      title: ABOUT_COPY.bannerTitle,
      description: ABOUT_COPY.bannerIntro,
      breadcrumb: [{ label: 'Home', to: '/' }, { label: 'About' }],
    }}
  >
    <section className="section-pad border-b border-border">
      <div className="site-container max-w-3xl">
        <h2 className="display-lg text-balance mb-8">{ABOUT_COPY.problemTitle}</h2>
        <div className="content-prose max-w-none space-y-6">
          {ABOUT_COPY.problemParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>

    <section className="section-pad band-muted border-y border-border">
      <div className="site-container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl">
          <div className="border-l-2 border-accent pl-6">
            <p className="section-label">Mission</p>
            <h2 className="display-lg mb-4 text-balance">{ABOUT_COPY.missionTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{ABOUT_COPY.missionText}</p>
          </div>
          <div className="border-l-2 border-accent pl-6">
            <p className="section-label">Vision</p>
            <h2 className="display-lg mb-4 text-balance">{ABOUT_COPY.visionTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{ABOUT_COPY.visionText}</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-pad">
      <div className="site-container">
        <p className="section-label">{ABOUT_COPY.foundersEyebrow}</p>
        <h2 className="display-lg mb-12">{ABOUT_COPY.foundersTitle}</h2>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl">
          {FOUNDERS.map((f) => (
            <div key={f.name} className="founder-card">
              <div className="founder-media">
                <img
                  src={founderImages[f.name]}
                  alt={f.name}
                  className="founder-photo"
                />
                <hr className="founder-social-divider" aria-hidden="true" />
                <SocialLinks variant="founder" />
              </div>
              <h3 className="text-xl font-semibold">{f.name}</h3>
              <p className="text-sm text-accent font-medium uppercase tracking-wider mt-1 mb-4">
                {f.role}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <section className="section-pad border-b border-border">
      <div className="site-container max-w-3xl text-center">
        <h2 className="display-lg text-balance mb-6">{ABOUT_COPY.breadthTitle}</h2>
        <p className="lead">{ABOUT_COPY.breadthSubtitle}</p>
      </div>
    </section>

    <section className="section-pad band-muted border-y border-border">
      <div className="site-container">
        <p className="section-label">{ABOUT_COPY.principlesEyebrow}</p>
        <h2 className="display-lg text-balance mb-12 max-w-3xl">{ABOUT_COPY.principlesTitle}</h2>
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 max-w-5xl">
          {ABOUT_COPY.principles.map((principle) => (
            <article key={principle.title} className="border-l-2 border-accent pl-6">
              <h3 className="text-xl font-semibold tracking-tight mb-3">{principle.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{principle.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section-pad band-dark">
      <div className="site-container max-w-2xl text-center">
        <p className="section-label section-label-light">{ABOUT_COPY.ctaEyebrow}</p>
        <h2 className="display-lg text-white text-balance mb-4">{ABOUT_COPY.ctaTitle}</h2>
        <p className="lead lead-light mb-8">{ABOUT_COPY.ctaLead}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/contact" className="btn-primary">
            {ABOUT_COPY.ctaPrimary}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="tel:+15017370930" className="btn-outline-light justify-center">
            <Phone className="h-4 w-4" />
            {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  </PageShell>
);

export default About;
