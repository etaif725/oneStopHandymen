import ArkansasCoverageMap from '@/components/ArkansasCoverageMap';
import { GOOGLE_MAPS_EMBED } from '@/constants/business';
import type { ServiceAreaLocation } from '@/constants/serviceAreaMap';

interface CoverageInteractiveMapProps {
  activeId?: string | null;
  onAreaHover?: (area: ServiceAreaLocation | null) => void;
  onAreaSelect?: (area: ServiceAreaLocation) => void;
}

const CoverageInteractiveMap = ({
  activeId,
  onAreaHover,
  onAreaSelect,
}: CoverageInteractiveMapProps) => (
  <div className="coverage-map-stack">
    <iframe
      className="coverage-map-stack__iframe"
      src={GOOGLE_MAPS_EMBED.url}
      title={GOOGLE_MAPS_EMBED.title}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      tabIndex={-1}
    />
    <div className="coverage-map-stack__veil" aria-hidden="true" />
    <ArkansasCoverageMap
      overlay
      activeId={activeId}
      onAreaHover={onAreaHover}
      onAreaSelect={onAreaSelect}
    />
  </div>
);

export default CoverageInteractiveMap;
