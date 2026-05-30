import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/constants/business';
import { COMPARISON } from '@/constants/copy';

const RegionalComparison = () => {
  return (
    <section className="section-pad band-paper border-y border-border">
      <div className="site-container">
        <p className="section-label">{COMPARISON.eyebrow}</p>
        <h2 className="display-lg text-balance mb-6 max-w-3xl">{COMPARISON.title}</h2>
        <p className="lead max-w-3xl mb-12">{COMPARISON.intro}</p>

        <div className="overflow-x-auto border border-border">
          <table className="w-full min-w-[640px] text-sm text-left">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-5 py-4 font-semibold text-foreground w-[28%]">Company</th>
                <th className="px-5 py-4 font-semibold text-foreground w-[36%]">Known for</th>
                <th className="px-5 py-4 font-semibold text-foreground w-[36%]">Best if you want</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.rows.map((row) => (
                <tr
                  key={row.name}
                  className={`border-b border-border last:border-b-0 ${
                    row.isUs ? 'bg-accent/5' : ''
                  }`}
                >
                  <td className="px-5 py-4 font-semibold text-foreground align-top">
                    {row.name}
                    {row.isUs && (
                      <span className="block text-xs font-medium text-accent mt-1 uppercase tracking-wide">
                        You are here
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-muted-foreground leading-relaxed align-top">
                    {row.knownFor}
                  </td>
                  <td className="px-5 py-4 text-muted-foreground leading-relaxed align-top">
                    {row.bestFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 max-w-3xl space-y-4">
          <p className="text-muted-foreground leading-relaxed">{COMPARISON.outro}</p>
          <p className="text-sm">
            <span className="font-semibold text-foreground">{BUSINESS_INFO.name} fits when: </span>
            <span className="text-muted-foreground">{COMPARISON.oneStopFit}</span>
          </p>
          <Link to="/contact" className="btn-primary inline-flex mt-4">
            Schedule a Call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegionalComparison;
