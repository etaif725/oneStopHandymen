import { HERO } from '@/constants/copy';

const HeroScrollHint = () => (
  <a href="#get-started" className="hero-scroll-hint">
    <span className="hero-scroll-hint-text">{HERO.scrollHint}</span>
    <span className="hero-scroll-hint-icon" aria-hidden="true">
      <svg
        className="hero-scroll-arrow"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5v14M5 12l7 7 7-7"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </a>
);

export default HeroScrollHint;
