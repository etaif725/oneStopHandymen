import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COMPARISON_TEASER } from '@/constants/copy';

const RegionalComparisonTeaser = () => {
  return (
    <section className="section-pad border-y border-border">
      <div className="site-container max-w-3xl">
        <p className="section-label">{COMPARISON_TEASER.eyebrow}</p>
        <h2 className="display-lg text-balance mb-4">{COMPARISON_TEASER.title}</h2>
        <p className="lead mb-8">{COMPARISON_TEASER.body}</p>
        <Link to="/compare" className="btn-outline-dark">
          {COMPARISON_TEASER.cta}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default RegionalComparisonTeaser;
