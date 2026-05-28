import { ReactNode } from 'react';
import SiteChrome from '@/components/SiteChrome';
import SiteFooter from '@/components/SiteFooter';
import BackToTop from '@/components/BackToTop';

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => (
  <>
    <SiteChrome />
    <main className="site-main">{children}</main>
    <SiteFooter />
    <BackToTop />
  </>
);

export default SiteLayout;
