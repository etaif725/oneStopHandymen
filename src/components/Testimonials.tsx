import { useState } from 'react';
import { TESTIMONIALS } from '@/constants/business';

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const featured = TESTIMONIALS[active];

  return (
    <section className="section-pad band-paper">
      <div className="site-container">
        <p className="section-label">Client Stories</p>
        <div className="testimonial-feature">
          <div>
            <div className="quote-mark" aria-hidden="true">
              "
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium leading-snug tracking-tight text-foreground text-balance -mt-4 mb-8">
              {featured.content}
            </blockquote>
            <footer>
              <cite className="not-italic">
                <span className="font-semibold text-foreground">{featured.name}</span>
                <span className="text-muted-foreground text-sm block mt-1">
                  {featured.role} · {featured.location}
                </span>
              </cite>
            </footer>
          </div>

          <div className="space-y-0 border border-border">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(i)}
                className={`w-full text-left px-5 py-4 border-b border-border last:border-b-0 transition-colors ${
                  i === active
                    ? 'bg-foreground text-background'
                    : 'bg-background hover:bg-muted text-foreground'
                }`}
              >
                <span className="font-semibold text-sm block">{t.name}</span>
                <span className={`text-xs ${i === active ? 'text-background/70' : 'text-muted-foreground'}`}>
                  {t.role}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
