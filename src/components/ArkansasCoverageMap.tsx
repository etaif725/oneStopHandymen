import { useState } from 'react';
import {
  ARKANSAS_PATHS,
  COVERAGE_ZONE,
  HQ_POINT,
  MAP_VIEWBOX,
  SERVICE_AREA_LOCATIONS,
  getLabelOffset,
  projectToMap,
  type ServiceAreaLocation,
} from '@/constants/serviceAreaMap';

interface ArkansasCoverageMapProps {
  activeId?: string | null;
  onAreaHover?: (area: ServiceAreaLocation | null) => void;
  onAreaSelect?: (area: ServiceAreaLocation) => void;
}

const ArkansasCoverageMap = ({
  activeId,
  onAreaHover,
  onAreaSelect,
}: ArkansasCoverageMapProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const highlightedId = activeId ?? hoveredId;

  const handleHover = (area: ServiceAreaLocation | null) => {
    setHoveredId(area?.id ?? null);
    onAreaHover?.(area);
  };

  return (
    <div className="coverage-map-wrap">
      <svg
        viewBox={MAP_VIEWBOX}
        className="coverage-map-svg"
        role="img"
        aria-label="Central Arkansas map showing One Stop Property Solutions service areas"
      >
        <defs>
          <clipPath id="coverage-map-frame">
            <rect x="0" y="0" width="1000" height="1000" />
          </clipPath>
          <radialGradient id="coverage-zone-fill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(42 76% 48% / 0.18)" />
            <stop offset="75%" stopColor="hsl(42 76% 48% / 0.05)" />
            <stop offset="100%" stopColor="hsl(42 76% 48% / 0)" />
          </radialGradient>
          <filter id="pin-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* Arkansas state silhouette — clipped to Central AR viewport */}
        <g clipPath="url(#coverage-map-frame)">
          {ARKANSAS_PATHS.map((path, i) => (
            <path key={i} d={path} className="coverage-map-state" />
          ))}
        </g>

        {/* Coverage zone — centered on the service cluster */}
        <g transform={`translate(${COVERAGE_ZONE.cx}, ${COVERAGE_ZONE.cy})`} className="coverage-zone">
          <circle r={COVERAGE_ZONE.r} fill="url(#coverage-zone-fill)" />
          <circle r={COVERAGE_ZONE.r} className="coverage-zone-pulse" />
          <circle r={COVERAGE_ZONE.r} className="coverage-zone-boundary" />
        </g>

        {/* Connection lines from HQ */}
        {SERVICE_AREA_LOCATIONS.filter((a) => !a.primary).map((area) => {
          const to = projectToMap(area.lat, area.lng);
          const isActive = highlightedId === area.id || highlightedId === 'little-rock';
          return (
            <line
              key={`line-${area.id}`}
              x1={HQ_POINT.x}
              y1={HQ_POINT.y}
              x2={to.x}
              y2={to.y}
              className="coverage-map-line"
              data-active={isActive ? 'true' : undefined}
            />
          );
        })}

        {/* Area pins + labels */}
        {SERVICE_AREA_LOCATIONS.map((area) => {
          const { x, y } = projectToMap(area.lat, area.lng);
          const isActive = highlightedId === area.id;
          const isPrimary = area.primary;
          const isDimmed = highlightedId !== null && !isActive && !isPrimary;
          const label = getLabelOffset(area.label);

          return (
            <g
              key={area.id}
              className="coverage-map-pin"
              data-active={isActive ? 'true' : undefined}
              data-primary={isPrimary ? 'true' : undefined}
              data-dimmed={isDimmed ? 'true' : undefined}
              transform={`translate(${x}, ${y})`}
              onMouseEnter={() => handleHover(area)}
              onMouseLeave={() => handleHover(null)}
              onFocus={() => handleHover(area)}
              onBlur={() => handleHover(null)}
              onClick={() => onAreaSelect?.(area)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onAreaSelect?.(area);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`${area.name}${isPrimary ? ', headquarters' : ', service area'}`}
            >
              {isPrimary && (
                <circle r="18" className="coverage-map-pin-pulse" />
              )}
              <circle
                r={isPrimary ? 16 : 12}
                className="coverage-map-pin-ring"
                filter="url(#pin-shadow)"
              />
              <circle r={isPrimary ? 7 : 5} className="coverage-map-pin-dot" />

              <text
                x={label.x}
                y={label.y}
                textAnchor={label.anchor as 'start' | 'middle' | 'end'}
                className="coverage-map-label-text"
              >
                {area.name}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="coverage-map-legend">
        <span className="coverage-map-legend-item">
          <span className="coverage-map-legend-dot coverage-map-legend-dot-primary" />
          Headquarters
        </span>
        <span className="coverage-map-legend-item">
          <span className="coverage-map-legend-dot" />
          Service area
        </span>
        <span className="coverage-map-legend-item">
          <span className="coverage-map-legend-zone" />
          Active coverage zone
        </span>
      </div>
    </div>
  );
};

export default ArkansasCoverageMap;
