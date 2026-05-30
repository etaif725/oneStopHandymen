import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LeadGenForm from '@/components/LeadGenForm';
import HeroReviewStrip from '@/components/HeroReviewStrip';
import HeroScrollHint from '@/components/HeroScrollHint';
import { BUSINESS_INFO } from '@/constants/business';
import { HERO } from '@/constants/copy';
import heroImage from '@/assets/hero-background.webp';

const Hero = () => {
  return (
    <section className="hero-wrap">
      <div className="hero-editorial">
        <div className="hero-copy">
          <div className="hero-copy-inner">
            <p className="section-label section-label-light">{HERO.eyebrow}</p>
            <p className="hero-methodology-line">{HERO.methodologyLine}</p>
            <h1 className="display-xl text-balance text-white hero-title">
              {BUSINESS_INFO.tagline}
            </h1>
            <div className="hero-copy-body">
              {HERO.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="lead lead-light">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#get-started" className="btn-primary">
                Schedule a Call
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/services" className="btn-outline-light">
                View Services
              </Link>
            </div>

            <div className="hero-stat-grid">
              {HERO.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="hero-stat-value">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <HeroReviewStrip />
          </div>
        </div>

        <div className="hero-visual">
          <img src={heroImage} alt="Arkansas property operations" loading="eager" />
          <div className="hero-visual-overlay" />
        </div>

        <HeroScrollHint />
      </div>

      <div className="split-band band-muted" id="get-started">
        <div className="split-band-copy band-dark">
          <div className="max-w-md">
            <p className="section-label section-label-light">Get Started</p>
            <h2 className="display-lg text-white mb-4 text-balance">
              {HERO.getStartedTitle}
            </h2>
            <p className="lead lead-light mb-6">{HERO.getStartedLead}</p>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2">
                <span className="text-accent">+</span> Response within one hour
              </li>
              <li className="flex gap-2">
                <span className="text-accent">+</span> No obligation consultation
              </li>
              <li className="flex gap-2">
                <span className="text-accent">+</span> Call us at {BUSINESS_INFO.phone}
              </li>
            </ul>
          </div>
        </div>
        <div className="split-band-form">
          <LeadGenForm variant="compact" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
