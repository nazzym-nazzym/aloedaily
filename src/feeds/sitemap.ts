import { ALL_ARTICLES } from '../data/articles';
import { PILLARS } from '../data/pillars';
import { AUTHORS } from '../data/authors';
import { SITE_CONFIG } from '../config/site';

export function renderMasterSitemapXml(): string {
  const staticUrls = [
    { loc: `${SITE_CONFIG.url}/`, changefreq: 'daily', priority: '1.0' },
    { loc: `${SITE_CONFIG.url}/about/`, changefreq: 'monthly', priority: '0.85' },
    { loc: `${SITE_CONFIG.url}/contact/`, changefreq: 'monthly', priority: '0.8' },
    { loc: `${SITE_CONFIG.url}/privacy/`, changefreq: 'yearly', priority: '0.5' },
    { loc: `${SITE_CONFIG.url}/terms/`, changefreq: 'yearly', priority: '0.5' },
    ...Object.values(PILLARS).map((p) => ({
      loc: `${SITE_CONFIG.url}/${p.slug}/`,
      changefreq: 'weekly',
      priority: '0.9',
    })),
    ...Object.values(AUTHORS).map((author) => ({
      loc: `${SITE_CONFIG.url}/authors/${author.id}/`,
      changefreq: 'monthly',
      priority: '0.75',
    })),
  ];

  const articleUrls = ALL_ARTICLES.map((article) => ({
    loc: `${SITE_CONFIG.url}/${article.pillar}/${article.slug}/`,
    lastmod: article.updatedAt,
    changefreq: 'weekly',
    priority: '0.85',
    title: article.title,
  }));

  const allEntries = [...staticUrls, ...articleUrls];

  const urlXml = allEntries.map((e) => `
  <url>
    <loc>${e.loc}</loc>
    ${'lastmod' in e && e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : `<lastmod>${new Date().toISOString().split('T')[0]}</lastmod>`}
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
    <image:image>
      <image:loc>${SITE_CONFIG.logoAbsolute}</image:loc>
      <image:title>${'title' in e && e.title ? e.title : SITE_CONFIG.name}</image:title>
    </image:image>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlXml}
</urlset>`;
}
