import { ALL_ARTICLES } from '../data/articles';
import { AUTHORS } from '../data/authors';
import { SITE_CONFIG } from '../config/site';

export function renderRssFeed(): string {
  const sortedArticles = [...ALL_ARTICLES].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const itemsXml = sortedArticles
    .map((article) => {
      const author = AUTHORS[article.authorId];
      const authorName = author ? author.name : 'AloeDaily Editorial Board';
      const articleUrl = `${SITE_CONFIG.url}/${article.pillar}/${article.slug}/`;
      const pubDate = new Date(`${article.publishedAt}T08:00:00Z`).toUTCString();

      return `    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <description><![CDATA[${article.metaDescription}]]></description>
      <author>${SITE_CONFIG.adminEmail} (${authorName})</author>
      <category>${article.pillar}</category>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join('\n');

  const lastBuildDate = new Date().toUTCString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}</title>
    <link>${SITE_CONFIG.url}</link>
    <description>${SITE_CONFIG.description}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_CONFIG.url}/feed.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`;
}
