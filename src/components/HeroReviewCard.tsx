import PlatformReviewIcon, { type PlatformReviewId } from '@/components/PlatformReviewIcon';

export type HeroReviewItem = {
  rating: number;
  reviewCount: number;
  excerpt: string;
};

export type HeroReviewPlatform = {
  id: PlatformReviewId;
  platform: string;
  items: HeroReviewItem[];
};

const StarRow = ({ rating }: { rating: number }) => (
  <div className="hero-review-stars" aria-hidden="true">
    {Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < Math.round(rating) ? 'hero-review-star hero-review-star--filled' : 'hero-review-star'}
      >
        ★
      </span>
    ))}
  </div>
);

interface HeroReviewCardProps {
  platformId: PlatformReviewId;
  platformName: string;
  item: HeroReviewItem;
}

const HeroReviewCard = ({ platformId, platformName, item }: HeroReviewCardProps) => (
  <article className={`hero-review-card hero-review-card--${platformId}`}>
    <div className="hero-review-card-brand">
      <PlatformReviewIcon platform={platformId} />
      <span className="hero-review-platform-name">{platformName}</span>
    </div>
    <div className="hero-review-card-body">
      <div className="hero-review-card-head">
        <div className="hero-review-rating">
          <span className="hero-review-rating-value">{item.rating.toFixed(1)}</span>
          <StarRow rating={item.rating} />
        </div>
      </div>
      <p className="hero-review-count">{item.reviewCount} reviews</p>
      <p className="hero-review-excerpt">&ldquo;{item.excerpt}&rdquo;</p>
    </div>
  </article>
);

export default HeroReviewCard;
