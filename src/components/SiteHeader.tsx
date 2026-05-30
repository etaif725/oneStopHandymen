import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo-main.webp';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/compare', label: 'Compare' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="site-header">
      <div className="site-container site-header-inner">
        <Link to="/" className="min-w-0 shrink" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="One Stop Property Solutions"
            className="site-logo"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="site-nav-link"
              data-active={pathname === link.to ? 'true' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary">
            Schedule a Call
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden band-dark border-t border-white/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block site-nav-link"
              data-active={pathname === link.to ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary w-full text-center mt-4" onClick={() => setOpen(false)}>
            Schedule a Call
          </Link>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
