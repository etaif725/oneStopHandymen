import { useMemo } from 'react';
import HeroReviewCard, { type HeroReviewItem, type HeroReviewPlatform } from '@/components/HeroReviewCard';
import type { PlatformReviewId } from '@/components/PlatformReviewIcon';
import { HERO } from '@/constants/copy';

type MarqueeEntry = {
  platformId: PlatformReviewId;
  platformName: string;
  item: HeroReviewItem;
};

/** Interleave platforms so the stream alternates Google / Yelp / Facebook. */
function buildMarqueeEntries(platforms: HeroReviewPlatform[]): MarqueeEntry[] {
  const queues = platforms.map((platform) =>
    platform.items.map((item) => ({
      platformId: platform.id,
      platformName: platform.platform,
      item,
    })),
  );

  const entries: MarqueeEntry[] = [];
  let hasMore = true;

  while (hasMore) {
    hasMore = false;
    for (const queue of queues) {
      const next = queue.shift();
      if (next) {
        entries.push(next);
        hasMore = true;
      }
    }
  }

  return entries;
}

const HeroReviewStrip = () => {
  const platforms = HERO.reviews as HeroReviewPlatform[];
  const entries = useMemo(() => buildMarqueeEntries(platforms), [platforms]);
  const loop = useMemo(() => [...entries, ...entries], [entries]);

  return (
    <div className="hero-reviews" aria-label="Client reviews from third-party platforms">
      <p className="hero-reviews-eyebrow">{HERO.reviewsEyebrow}</p>

      <div className="hero-review-marquee">
        <div className="hero-review-marquee-track">
          {loop.map((entry, index) => (
            <div
              key={`${entry.platformId}-${entry.item.excerpt.slice(0, 24)}-${index}`}
              className="hero-review-marquee-item"
              aria-hidden={index >= entries.length}
            >
              <HeroReviewCard
                platformId={entry.platformId}
                platformName={entry.platformName}
                item={entry.item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroReviewStrip;
