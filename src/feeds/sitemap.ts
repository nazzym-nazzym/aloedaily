import { ALL_ARTICLES } from '../data/articles';
import { PILLARS } from '../data/pillars';
import { SITE_CONFIG } from '../config/site';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function renderMasterSitemapXml(): string {
  // Primary unique author desks (exclude alias keys to prevent duplicate sitemap entries)
  const primaryDeskIds = ['botanical-research-desk', 'horticulture-desk', 'formulation-desk'];

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
    ...primaryDeskIds.map((id) => ({
      loc: `${SITE_CONFIG.url}/authors/${id}/`,
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

  const urlXml = allEntries.map((e) => {
    const titleVal = ('title' in e && typeof e.title === 'string' && e.title) ? e.title : SITE_CONFIG.name;
    const lastmodVal = ('lastmod' in e && typeof e.lastmod === 'string' && e.lastmod)
      ? e.lastmod
      : new Date().toISOString().split('T')[0];

    return `  <url>
    <loc>${escapeXml(e.loc)}</loc>
    <lastmod>${lastmodVal}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
    <image:image>
      <image:loc>${escapeXml(SITE_CONFIG.logoAbsolute)}</image:loc>
      <image:title>${escapeXml(titleVal)}</image:title>
    </image:image>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlXml}
</urlset>`;
}
