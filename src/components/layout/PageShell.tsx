import { ReactNode, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '@/components/SiteLayout';

interface PageBannerProps {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; to?: string }[];
}

export const PageBanner = ({ eyebrow, title, description, breadcrumb }: PageBannerProps) => (
  <header className="page-banner">
    <div className="site-container">
      {breadcrumb && (
        <nav className="breadcrumb" aria-label="Breadcrumb">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.label}>
              {i > 0 && ' / '}
              {crumb.to ? (
                <Link to={crumb.to} className="hover:text-accent">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/70">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      <p className="section-label section-label-light">{eyebrow}</p>
      <h1 className="display-xl text-white text-balance max-w-3xl">{title}</h1>
      {description && (
        <p className="lead lead-light max-w-2xl mt-4">{description}</p>
      )}
    </div>
  </header>
);

interface PageShellProps {
  children: ReactNode;
  banner: PageBannerProps;
  title?: string;
}

const PageShell = ({ children, banner, title }: PageShellProps) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <SiteLayout>
      <PageBanner {...banner} />
      {children}
    </SiteLayout>
  );
};

export default PageShell;
