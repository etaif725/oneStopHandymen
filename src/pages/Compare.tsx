import PageShell from '@/components/layout/PageShell';
import RegionalComparison from '@/components/RegionalComparison';
import ContactBand from '@/components/ContactBand';

const Compare = () => (
  <PageShell
    banner={{
      eyebrow: 'Compare',
      title: 'Property management in Little Rock',
      description:
        'A fair look at national, franchise, and local operators in Central Arkansas, and where our boots-on-the-ground model fits.',
      breadcrumb: [{ label: 'Home', to: '/' }, { label: 'Compare' }],
    }}
  >
    <RegionalComparison />
    <ContactBand />
  </PageShell>
);

export default Compare;
