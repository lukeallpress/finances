// @ts-check
import { defineConfig } from 'astro/config';

// A GitHub *project* repo named `finances` publishes to
// https://lukeallpress.github.io/finances/ — the same URL this dashboard has
// always had, which is why it could be split out of the CV site without
// anything breaking or any link changing.
//
// No sitemap integration and no robots: this page is unlisted by design.
export default defineConfig({
  site: 'https://lukeallpress.github.io',
  base: '/finances',
  trailingSlash: 'ignore',
});
