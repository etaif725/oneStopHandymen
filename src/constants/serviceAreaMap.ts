import outline from '@/assets/maps/central-arkansas-outline.json';

export interface ServiceAreaLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  zipCodes: string[];
  primary?: boolean;
  /** Label placement relative to pin */
  label?: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const MAP_VIEWBOX = outline.viewBox;
export const ARKANSAS_PATHS = outline.paths;
export const ARKANSAS_BOUNDS = outline.bounds;
export const MAP_PADDING = outline.padding ?? 40;

export const HQ = { lat: 34.7465, lng: -92.2896 };

/** Central Arkansas service area coordinates */
export const SERVICE_AREA_LOCATIONS: ServiceAreaLocation[] = [
  {
    id: 'little-rock',
    name: 'Little Rock',
    lat: 34.7465,
    lng: -92.2896,
    zipCodes: ['72201', '72202', '72204', '72205', '72206', '72207', '72209', '72211', '72212', '72223'],
    primary: true,
    label: 'bottom',
  },
  {
    id: 'north-little-rock',
    name: 'North Little Rock',
    lat: 34.7695,
    lng: -92.2671,
    zipCodes: ['72114', '72116', '72117', '72118', '72120'],
    label: 'top-right',
  },
  {
    id: 'jacksonville',
    name: 'Jacksonville',
    lat: 34.8662,
    lng: -92.1101,
    zipCodes: ['72076', '72078'],
    label: 'right',
  },
  {
    id: 'sherwood',
    name: 'Sherwood',
    lat: 34.8151,
    lng: -92.2243,
    zipCodes: ['72120', '72117'],
    label: 'top',
  },
  {
    id: 'maumelle',
    name: 'Maumelle',
    lat: 34.8667,
    lng: -92.4043,
    zipCodes: ['72113'],
    label: 'left',
  },
  {
    id: 'benton',
    name: 'Benton',
    lat: 34.5645,
    lng: -92.5868,
    zipCodes: ['72015', '72019'],
    label: 'bottom-left',
  },
  {
    id: 'bryant',
    name: 'Bryant',
    lat: 34.5959,
    lng: -92.4890,
    zipCodes: ['72022', '72019'],
    label: 'bottom',
  },
  {
    id: 'conway',
    name: 'Conway',
    lat: 35.0887,
    lng: -92.4421,
    zipCodes: ['72032', '72034'],
    label: 'top',
  },
  {
    id: 'cabot',
    name: 'Cabot',
    lat: 34.9745,
    lng: -92.0165,
    zipCodes: ['72023'],
    label: 'right',
  },
];

const MAP_SIZE = 1000;

export function projectToMap(lat: number, lng: number) {
  const { minLat, maxLat, minLng, maxLng } = ARKANSAS_BOUNDS;
  const innerW = MAP_SIZE - MAP_PADDING * 2;
  const innerH = MAP_SIZE - MAP_PADDING * 2;
  const x = MAP_PADDING + ((lng - minLng) / (maxLng - minLng)) * innerW;
  const y = MAP_PADDING + ((maxLat - lat) / (maxLat - minLat)) * innerH;
  return { x, y };
}

export const HQ_POINT = projectToMap(HQ.lat, HQ.lng);

const LABEL_OFFSETS: Record<NonNullable<ServiceAreaLocation['label']>, { x: number; y: number }> = {
  top: { x: 0, y: -36 },
  bottom: { x: 0, y: 42 },
  left: { x: -12, y: 4 },
  right: { x: 12, y: 4 },
  'top-left': { x: -12, y: -32 },
  'top-right': { x: 12, y: -32 },
  'bottom-left': { x: -12, y: 38 },
  'bottom-right': { x: 12, y: 38 },
};

function computeCoverageCenter() {
  const points = SERVICE_AREA_LOCATIONS.map((area) => projectToMap(area.lat, area.lng));
  return {
    cx: points.reduce((sum, p) => sum + p.x, 0) / points.length,
    cy: points.reduce((sum, p) => sum + p.y, 0) / points.length,
  };
}

/** Radius from cluster center that bounds every pin and label */
function computeCoverageRadius(cx: number, cy: number) {
  let maxDist = 0;

  for (const area of SERVICE_AREA_LOCATIONS) {
    const pin = projectToMap(area.lat, area.lng);
    const pinR = area.primary ? 16 : 12;
    const label = LABEL_OFFSETS[area.label ?? 'top'];

    for (const point of [pin, { x: pin.x + label.x, y: pin.y + label.y }]) {
      const dist = Math.hypot(point.x - cx, point.y - cy);
      maxDist = Math.max(maxDist, dist + pinR);
    }
  }

  return Math.ceil(maxDist + 32);
}

const center = computeCoverageCenter();

/** Coverage zone centered on the service area cluster */
export const COVERAGE_ZONE = {
  cx: center.cx,
  cy: center.cy,
  r: computeCoverageRadius(center.cx, center.cy),
};

export function getLabelOffset(label: ServiceAreaLocation['label'] = 'top') {
  const offsets: Record<NonNullable<ServiceAreaLocation['label']>, { x: number; y: number; anchor: string }> = {
    top: { x: 0, y: -36, anchor: 'middle' },
    bottom: { x: 0, y: 42, anchor: 'middle' },
    left: { x: -12, y: 4, anchor: 'end' },
    right: { x: 12, y: 4, anchor: 'start' },
    'top-left': { x: -12, y: -32, anchor: 'end' },
    'top-right': { x: 12, y: -32, anchor: 'start' },
    'bottom-left': { x: -12, y: 38, anchor: 'end' },
    'bottom-right': { x: 12, y: 38, anchor: 'start' },
  };
  return offsets[label];
}

export function getAreaById(id: string) {
  return SERVICE_AREA_LOCATIONS.find((area) => area.id === id);
}
