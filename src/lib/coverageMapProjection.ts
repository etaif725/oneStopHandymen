import { SERVICE_AREA_LOCATIONS, type ServiceAreaLocation } from '@/constants/serviceAreaMap';

export const COVERAGE_OVERLAY_SIZE = 1000;

const TILE_SIZE = 256;

/** Web Mercator world coordinates at zoom 0 (256px world width). */
function latLngToWorld(lat: number, lng: number) {
  const latRad = (lat * Math.PI) / 180;
  return {
    x: ((lng + 180) / 360) * TILE_SIZE,
    y:
      ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) *
      TILE_SIZE,
  };
}

export type CoverageEmbedViewport = {
  centerLat: number;
  centerLng: number;
  /** Must match the integer `z` in the embed URL. */
  zoom: number;
  /** Fine-tune in overlay pixel space if embed chrome shifts the map. */
  offsetX?: number;
  offsetY?: number;
};

export function buildGoogleMapsEmbedUrl(viewport: CoverageEmbedViewport): string {
  const z = Math.round(viewport.zoom);
  return `https://maps.google.com/maps?q=${viewport.centerLat},${viewport.centerLng}&hl=en&z=${z}&output=embed`;
}

/** Project lat/lng into 0–COVERAGE_OVERLAY_SIZE space for the Google Maps iframe. */
export function projectToEmbedOverlay(
  lat: number,
  lng: number,
  viewport: CoverageEmbedViewport,
  mapSize = COVERAGE_OVERLAY_SIZE,
) {
  const scale = 2 ** viewport.zoom;
  const point = latLngToWorld(lat, lng);
  const center = latLngToWorld(viewport.centerLat, viewport.centerLng);

  return {
    x:
      (point.x - center.x) * scale +
      mapSize / 2 +
      (viewport.offsetX ?? 0),
    y:
      (point.y - center.y) * scale +
      mapSize / 2 +
      (viewport.offsetY ?? 0),
  };
}

function serviceAreaBounds() {
  const lats = SERVICE_AREA_LOCATIONS.map((a) => a.lat);
  const lngs = SERVICE_AREA_LOCATIONS.map((a) => a.lng);
  return {
    minLat: Math.min(...lats),
    maxLat: Math.max(...lats),
    minLng: Math.min(...lngs),
    maxLng: Math.max(...lngs),
  };
}

/** Pick center + zoom so every pin (plus label margin) fits the square overlay. */
export function computeEmbedViewport(
  mapSize = COVERAGE_OVERLAY_SIZE,
  padding = 88,
): CoverageEmbedViewport {
  const { minLat, maxLat, minLng, maxLng } = serviceAreaBounds();
  const centerLat = (minLat + maxLat) / 2;
  const centerLng = (minLng + maxLng) / 2;
  const labelMargin = 48;

  let zoom = 9;
  for (let z = 12; z >= 6; z -= 1) {
    const xs: number[] = [];
    const ys: number[] = [];

    for (const area of SERVICE_AREA_LOCATIONS) {
      const pin = projectToEmbedOverlay(area.lat, area.lng, {
        centerLat,
        centerLng,
        zoom: z,
      });
      xs.push(pin.x - labelMargin, pin.x + labelMargin);
      ys.push(pin.y - labelMargin, pin.y + labelMargin);
    }

    if (
      Math.min(...xs) >= padding &&
      Math.max(...xs) <= mapSize - padding &&
      Math.min(...ys) >= padding &&
      Math.max(...ys) <= mapSize - padding
    ) {
      zoom = z;
      break;
    }
  }

  return {
    centerLat,
    centerLng,
    zoom,
    /** Slight upward nudge — Google embed UI (footer) shifts map content down. */
    offsetY: -14,
    offsetX: 0,
  };
}

const LABEL_OFFSETS: Record<
  NonNullable<ServiceAreaLocation['label']>,
  { x: number; y: number }
> = {
  top: { x: 0, y: -36 },
  bottom: { x: 0, y: 42 },
  left: { x: -12, y: 4 },
  right: { x: 12, y: 4 },
  'top-left': { x: -12, y: -32 },
  'top-right': { x: 12, y: -32 },
  'bottom-left': { x: -12, y: 38 },
  'bottom-right': { x: 12, y: 38 },
};

export function computeEmbedCoverageZone(
  project: (lat: number, lng: number) => { x: number; y: number },
) {
  const points = SERVICE_AREA_LOCATIONS.map((area) => project(area.lat, area.lng));
  const cx = points.reduce((sum, p) => sum + p.x, 0) / points.length;
  const cy = points.reduce((sum, p) => sum + p.y, 0) / points.length;

  let maxDist = 0;
  for (const area of SERVICE_AREA_LOCATIONS) {
    const pin = project(area.lat, area.lng);
    const pinR = area.primary ? 16 : 12;
    const label = LABEL_OFFSETS[area.label ?? 'top'];

    for (const point of [pin, { x: pin.x + label.x, y: pin.y + label.y }]) {
      maxDist = Math.max(maxDist, Math.hypot(point.x - cx, point.y - cy) + pinR);
    }
  }

  return {
    cx,
    cy,
    r: Math.ceil(maxDist + 32),
  };
}

export function createEmbedMapGeometry(viewport: CoverageEmbedViewport) {
  const project = (lat: number, lng: number) =>
    projectToEmbedOverlay(lat, lng, viewport);

  const hq = SERVICE_AREA_LOCATIONS.find((a) => a.primary)!;

  return {
    project,
    hqPoint: project(hq.lat, hq.lng),
    coverageZone: computeEmbedCoverageZone(project),
  };
}
