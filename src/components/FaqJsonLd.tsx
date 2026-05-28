import { useEffect } from 'react';
import { buildFaqJsonLd } from '@/lib/faqSchema';
import type { FaqItem } from '@/constants/faqs';

interface FaqJsonLdProps {
  items: FaqItem[];
  id?: string;
}

const FaqJsonLd = ({ items, id = 'faq-json-ld' }: FaqJsonLdProps) => {
  useEffect(() => {
    if (!items.length) return;

    const scriptId = id;
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(buildFaqJsonLd(items));

    return () => {
      script?.remove();
    };
  }, [items, id]);

  return null;
};

export default FaqJsonLd;
