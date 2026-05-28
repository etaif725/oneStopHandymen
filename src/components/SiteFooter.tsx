import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, type LucideIcon } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, SOCIAL_LINKS, type SocialPlatform } from '@/constants/business';
import logo from '@/assets/logo-full.webp';

const socialIconMap: Record<SocialPlatform, LucideIcon> = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
};

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer section-pad pb-8">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt={BUSINESS_INFO.name}
              className="site-footer-logo mb-6"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              {BUSINESS_INFO.tagline}. Full operational support for Real Estate
              investors across Central Arkansas.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/about', label: 'About' },
                { to: '/projects', label: 'Projects' },
                { to: '/faq', label: 'FAQ' },
                { to: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>{s.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+15017370930">{BUSINESS_INFO.phone}</a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a>
              </li>
              <li>{BUSINESS_INFO.address}</li>
            </ul>
            {SOCIAL_LINKS.length > 0 && (
              <div className="footer-social" aria-label="Social media">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = socialIconMap[social.id];
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social-link"
                      aria-label={`Follow us on ${social.label}`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <hr className="rule-light mb-6" />
        <div className="flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/45">
          <p>© {year} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
