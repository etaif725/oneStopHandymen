import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LeadGenForm from '@/components/LeadGenForm';
import { BUSINESS_INFO } from '@/constants/business';
import heroImage from '@/assets/hero-background.webp';

const Hero = () => {
  return (
    <section className="hero-wrap">
      <div className="hero-editorial">
        <div className="hero-copy">
          <div className="max-w-xl">
            <p className="section-label section-label-light">
              Investor Operations · Central Arkansas
            </p>
            <h1 className="display-xl text-balance text-white mb-6">
              {BUSINESS_INFO.tagline}
            </h1>
            <p className="lead lead-light text-balance mb-8 max-w-lg">
              Full operational support for Real Estate investors. Deal evaluation,
              Section 8 coordination, leasing, renovations, and property management
              under one local team.
            </p>
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
              <div>
                <div className="hero-stat-value">24/7</div>
                <div className="hero-stat-label">Communication</div>
              </div>
              <div>
                <div className="hero-stat-value">6</div>
                <div className="hero-stat-label">Years of Hand-on Experience</div>
              </div>
              <div>
                <div className="hero-stat-value">9</div>
                <div className="hero-stat-label">Service Areas</div>
              </div>
              <div>
                <div className="hero-stat-value">{BUSINESS_INFO.established}</div>
                <div className="hero-stat-label">Established</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <img src={heroImage} alt="Arkansas property operations" loading="eager" />
          <div className="hero-visual-overlay" />
        </div>
      </div>

      <div className="split-band band-muted" id="get-started">
        <div className="split-band-copy band-dark">
          <div className="max-w-md">
            <p className="section-label section-label-light">Get Started</p>
            <h2 className="display-lg text-white mb-4 text-balance">
              Tell us about your portfolio
            </h2>
            <p className="lead lead-light mb-6">
              Whether you are evaluating your first Arkansas deal or scaling an existing
              portfolio, our team responds quickly with a clear operational plan.
            </p>
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
