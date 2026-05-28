import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Central Arkansas focus — covers all service area pins with breathing room */
const CENTRAL_BOUNDS = {
  minLat: 34.42,
  maxLat: 35.18,
  minLng: -92.78,
  maxLng: -91.88,
};

const topo = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../src/assets/maps/states-10m.json'), 'utf8')
);

const { arcs, transform } = topo;
const [sx, sy] = transform.scale;
const [tx, ty] = transform.translate;

function decodeArc(arcIndex) {
  const reverse = arcIndex < 0;
  const arc = arcs[reverse ? ~arcIndex : arcIndex];
  let x = 0;
  let y = 0;
  const coords = [];
  for (const [dx, dy] of arc) {
    x += dx;
    y += dy;
    coords.push([x * sx + tx, y * sy + ty]);
  }
  if (reverse) coords.reverse();
  return coords;
}

function decodeRing(ring) {
  const coords = [];
  for (const arcIndex of ring) {
    const arcCoords = decodeArc(arcIndex);
    if (coords.length) arcCoords.shift();
    coords.push(...arcCoords);
  }
  return coords;
}

function clipRingToBounds(ring, bounds) {
  return ring.filter(
    ([lng, lat]) =>
      lat >= bounds.minLat &&
      lat <= bounds.maxLat &&
      lng >= bounds.minLng &&
      lng <= bounds.maxLng
  );
}

function buildOutline(bounds, filename) {
  const arkansas = topo.objects.states.geometries.find((g) => g.id === '05');
  const rings = arkansas.arcs.map((ring) => decodeRing(ring));

  const width = 1000;
  const height = 1000;
  const pad = 40;

  function project(lng, lat) {
    const innerW = width - pad * 2;
    const innerH = height - pad * 2;
    const x = pad + ((lng - bounds.minLng) / (bounds.maxLng - bounds.minLng)) * innerW;
    const y = pad + ((bounds.maxLat - lat) / (bounds.maxLat - bounds.minLat)) * innerH;
    return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
  }

  // Keep full rings but clip visually via viewBox; also build clipped segments for context
  const paths = rings
    .map((ring) => {
      const clipped = clipRingToBounds(ring, bounds);
      if (clipped.length < 3) return null;
      const pts = clipped.map(([lng, lat]) => project(lng, lat));
      return `M ${pts.map(([x, y]) => `${x} ${y}`).join(' L ')} Z`;
    })
    .filter(Boolean);

  // Full state path projected into central viewBox for silhouette context
  const fullPaths = rings.map((ring) => {
    const pts = ring.map(([lng, lat]) => project(lng, lat));
    return `M ${pts.map(([x, y]) => `${x} ${y}`).join(' L ')} Z`;
  });

  const output = {
    viewBox: `0 0 ${width} ${height}`,
    paths: fullPaths,
    bounds,
    padding: pad,
  };

  fs.writeFileSync(
    path.join(__dirname, `../src/assets/maps/${filename}`),
    JSON.stringify(output, null, 2)
  );

  console.log(`Generated ${filename}`, bounds);
}

// Full state (legacy)
const fullBounds = {
  minLng: -94.61946646626465,
  maxLng: -89.65547287402873,
  minLat: 33.00413641175411,
  maxLat: 36.49965029279292,
};

buildOutline(fullBounds, 'arkansas-outline.json');
buildOutline(CENTRAL_BOUNDS, 'central-arkansas-outline.json');
