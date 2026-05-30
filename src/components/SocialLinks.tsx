import { Facebook, Instagram, Linkedin, Youtube, type LucideIcon } from 'lucide-react';
import { SOCIAL_LINKS, type SocialPlatform } from '@/constants/business';
import { cn } from '@/lib/utils';

const socialIconMap: Record<SocialPlatform, LucideIcon> = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
};

type SocialLinksProps = {
  variant?: 'footer' | 'founder';
  className?: string;
  'aria-label'?: string;
};

const SocialLinks = ({
  variant = 'founder',
  className,
  'aria-label': ariaLabel = 'Social media',
}: SocialLinksProps) => {
  if (SOCIAL_LINKS.length === 0) return null;

  return (
    <div
      className={cn(
        variant === 'footer' ? 'footer-social' : 'founder-social',
        className
      )}
      aria-label={ariaLabel}
    >
      {SOCIAL_LINKS.map((social) => {
        const Icon = socialIconMap[social.id];
        return (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={variant === 'footer' ? 'footer-social-link' : 'founder-social-link'}
            aria-label={`Follow us on ${social.label}`}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
