// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // The live address. Served from the custom domain in public/CNAME, so no `base` path is needed.
  site: 'https://frameoflove.co.in',
  // Keep the classic HTML minifier: Astro 7's default ('jsx') can drop spaces between inline elements.
  compressHTML: true,
});
