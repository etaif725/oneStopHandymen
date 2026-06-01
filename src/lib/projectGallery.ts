const projectImageModules = import.meta.glob<string>('@/assets/projects/*.webp', {
  eager: true,
  import: 'default',
});

export type ProjectImagePair = {
  id: number;
  before: string;
  after: string;
};

function filenameFromPath(path: string): string {
  return path.split('/').pop() ?? path;
}

function projectNumber(filename: string): number | null {
  const match = filename.match(/^(\d+)/);
  return match ? Number(match[1]) : null;
}

function imageKind(filename: string): 'before' | 'after' | null {
  const upper = filename.toUpperCase();
  if (upper.includes('BEFORE') || upper.includes('BEFO')) return 'before';
  if ((upper.includes('AFTER') || upper.includes('AFTE')) && !upper.includes('BEFORE')) return 'after';
  return null;
}

function buildProjectGallery(): ProjectImagePair[] {
  const byId = new Map<number, Partial<ProjectImagePair>>();

  for (const [path, url] of Object.entries(projectImageModules)) {
    const filename = filenameFromPath(path);
    const id = projectNumber(filename);
    const kind = imageKind(filename);
    if (id === null || kind === null) continue;

    const entry = byId.get(id) ?? { id };
    entry[kind] = url;
    byId.set(id, entry);
  }

  return [...byId.values()]
    .filter((entry): entry is ProjectImagePair => Boolean(entry.before && entry.after))
    .sort((a, b) => a.id - b.id);
}

export const PROJECT_GALLERY = buildProjectGallery();

export function getProjectPair(id: number): ProjectImagePair | undefined {
  return PROJECT_GALLERY.find((pair) => pair.id === id);
}
