import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import FaqJsonLd from '@/components/FaqJsonLd';
import {
  getFaqs,
  getFaqsByCategory,
  type FaqCategory,
  type FaqItem,
} from '@/constants/faqs';
import { cn } from '@/lib/utils';

export interface FaqSectionProps {
  ids?: string[];
  categories?: FaqCategory[];
  limit?: number;
  variant?: 'accordion' | 'list';
  eyebrow?: string;
  title?: string;
  description?: string;
  showViewAllLink?: boolean;
  includeJsonLd?: boolean;
  grouped?: boolean;
  className?: string;
  jsonLdId?: string;
}

const FaqList = ({ items }: { items: FaqItem[] }) => (
  <dl className="space-y-6">
    {items.map((item) => (
      <div key={item.id}>
        <dt className="font-medium text-foreground mb-1">{item.question}</dt>
        <dd className="text-sm text-muted-foreground leading-relaxed">{item.answer}</dd>
      </div>
    ))}
  </dl>
);

const FaqAccordion = ({ items, defaultOpen }: { items: FaqItem[]; defaultOpen?: string }) => (
  <Accordion
    type="single"
    collapsible
    defaultValue={defaultOpen ?? items[0]?.id}
    className="faq-accordion"
  >
    {items.map((item) => (
      <AccordionItem key={item.id} value={item.id} className="faq-accordion-item">
        <AccordionTrigger className="faq-accordion-trigger text-left">
          {item.question}
        </AccordionTrigger>
        <AccordionContent className="faq-accordion-content">
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

const FaqSection = ({
  ids,
  categories,
  limit,
  variant = 'accordion',
  eyebrow = 'FAQ',
  title = 'Common questions',
  description,
  showViewAllLink = false,
  includeJsonLd = true,
  grouped = false,
  className,
  jsonLdId,
}: FaqSectionProps) => {
  const items = getFaqs({ ids, categories, limit });

  if (!items.length) return null;

  const groups = grouped ? getFaqsByCategory(items) : null;

  return (
    <section className={cn('faq-section', className)} aria-labelledby="faq-section-title">
      {includeJsonLd && <FaqJsonLd items={items} id={jsonLdId} />}

      {(eyebrow || title || description) && (
        <div className="mb-10 max-w-2xl">
          {eyebrow && <p className="section-label">{eyebrow}</p>}
          {title && (
            <h2 id="faq-section-title" className="display-lg text-balance">
              {title}
            </h2>
          )}
          {description && <p className="lead mt-4">{description}</p>}
        </div>
      )}

      {grouped && groups ? (
        <div className="space-y-12">
          {groups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
                {group.label}
              </h3>
              <FaqAccordion items={group.items} />
            </div>
          ))}
        </div>
      ) : variant === 'list' ? (
        <FaqList items={items} />
      ) : (
        <FaqAccordion items={items} />
      )}

      {showViewAllLink && (
        <div className="mt-8">
          <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors">
            View all FAQs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </section>
  );
};

export default FaqSection;
