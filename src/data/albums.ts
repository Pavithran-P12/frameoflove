// Builds the Gallery page's albums from folders: every subfolder of
// src/assets/albums/ is one client album, and every photo inside it a slide.
//
//   src/assets/albums/
//     maria-and-nithin/     → "Maria & Nithin"
//       01.jpg, 02.jpg …    → shown in file-name order
//       album.json          → optional: title, location, date, cover, order, film
//
// See src/assets/albums/README.md for the details.
import type { ImageMetadata } from 'astro';

export interface AlbumInfo {
  /** Display title. Defaults to the folder name, e.g. "maria-and-nithin" → "Maria & Nithin". */
  title?: string;
  /** e.g. "Coimbatore" */
  location?: string;
  /** Shown as written, e.g. "February 2026". Also sorts albums, newest first, when written as YYYY-MM or YYYY-MM-DD. */
  date?: string;
  /** File name of the photo to show first, e.g. "07.jpg". */
  cover?: string;
  /** Lower numbers appear first on the page. Albums without one follow, newest first. */
  order?: number;
  /** Link to the couple's film (YouTube etc.). */
  film?: string;
}

export interface AlbumPhoto {
  src: ImageMetadata;
  name: string;
}

export interface Album {
  slug: string;
  title: string;
  location?: string;
  date?: string;
  film?: string;
  order?: number;
  photos: AlbumPhoto[];
}

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/albums/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);
const infoModules = import.meta.glob<{ default: AlbumInfo }>('../assets/albums/*/album.json', { eager: true });

const parts = (path: string) => path.split('/');

const titleFromFolder = (folder: string) =>
  folder
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((word) => (word.toLowerCase() === 'and' ? '&' : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(' ');

const slugify = (text: string) =>
  text
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'album';

const byFileName = (a: AlbumPhoto, b: AlbumPhoto) =>
  a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });

export function getAlbums(): Album[] {
  const folders = new Map<string, AlbumPhoto[]>();

  for (const [path, mod] of Object.entries(imageModules)) {
    const segments = parts(path);
    const folder = segments[segments.length - 2];
    const name = segments[segments.length - 1];
    if (!folders.has(folder)) folders.set(folder, []);
    folders.get(folder)!.push({ src: mod.default, name });
  }

  const albums: Album[] = [];
  const usedSlugs = new Set<string>();

  for (const [folder, photos] of folders) {
    const info = infoModules[`../assets/albums/${folder}/album.json`]?.default ?? {};
    photos.sort(byFileName);

    // The chosen cover goes first.
    const coverIndex = info.cover ? photos.findIndex((p) => p.name.toLowerCase() === info.cover!.toLowerCase()) : -1;
    if (coverIndex > 0) photos.unshift(...photos.splice(coverIndex, 1));

    const title = info.title ?? titleFromFolder(folder);
    let slug = slugify(folder);
    while (usedSlugs.has(slug)) slug += '-2';
    usedSlugs.add(slug);

    albums.push({ slug, title, location: info.location, date: info.date, film: info.film, order: info.order, photos });
  }

  return albums.sort(
    (a, b) =>
      (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER) ||
      (b.date ?? '').localeCompare(a.date ?? '') ||
      a.title.localeCompare(b.title),
  );
}
