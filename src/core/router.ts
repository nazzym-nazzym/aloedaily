import { PILLARS } from '../data/pillars';
import { PillarId } from '../data/types';
import { getArticleBySlug } from '../data/articles';
import { renderBaseLayout } from '../templates/layouts/base';
import { renderHomePage } from '../templates/pages/home';
import { renderPillarHubPage } from '../templates/pages/pillar-hub';
import { renderArticlePage } from '../templates/pages/article';
import { renderAboutPage } from '../templates/pages/about';
import { renderNotFoundPage } from '../templates/pages/not-found';
import { buildPageSchemaGraph } from '../schemas/graph';
import { renderMasterSitemapXml } from '../feeds/sitemap';
import { renderRobotsTxt } from '../feeds/robots';
import { renderLlmsTxt } from '../feeds/llms-txt';
import { handleContactSubmission } from '../api/contact';
import { handleAffiliateRedirect, handleLeadCapture } from '../api/affiliate-redirect';
import { getCacheHeaders } from './cache';
import { SITE_CONFIG } from '../config/site';

export async function routeRequest(request: Request, url: URL): Promise<Response> {
  const pathname = url.pathname;

  // 1. Virtual Feeds & Robots
  if (pathname === '/robots.txt') {
    return new Response(renderRobotsTxt(), {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=86400' },
    });
  }

  if (pathname === '/llms.txt') {
    return new Response(renderLlmsTxt(), {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=86400' },
    });
  }

  if (pathname === '/sitemap.xml') {
    return new Response(renderMasterSitemapXml(), {
      status: 200,
      headers: getCacheHeaders('sitemap'),
    });
  }

  // 2. Edge API Endpoints
  if (pathname === '/api/contact') {
    return handleContactSubmission(request);
  }

  if (pathname === '/api/lead-capture') {
    return handleLeadCapture(request);
  }

  // 3. Outbound Affiliate Referral Redirects (/out/{brand})
  if (pathname.startsWith('/out/')) {
    const brandSlug = pathname.replace('/out/', '').replace(/\/$/, '');
    return handleAffiliateRedirect(brandSlug);
  }

  // 4. Homepage (/)
  if (pathname === '/' || pathname === '') {
    const canonical = `${SITE_CONFIG.url}/`;
    const schema = buildPageSchemaGraph({
      breadcrumbs: [],
      canonicalUrl: canonical,
      pageTitle: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
      pageDescription: SITE_CONFIG.description,
      pageType: 'WebPage',
    });

    const html = renderBaseLayout({
      title: `${SITE_CONFIG.name} - Botanical Skincare & Aloe Vera Science`,
      metaDescription: SITE_CONFIG.description,
      canonicalUrl: canonical,
      schemaJson: schema,
      contentHtml: renderHomePage(),
    });

    return new Response(html, { status: 200, headers: getCacheHeaders('html') });
  }

  // 5. About & Editorial Standards (/about/)
  if (pathname === '/about/' || pathname === '/about') {
    const canonical = `${SITE_CONFIG.url}/about/`;
    const schema = buildPageSchemaGraph({
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'About AloeDaily', url: '/about/' }],
      canonicalUrl: canonical,
      pageTitle: `About AloeDaily: Editorial Integrity & Medical Board`,
      pageDescription: 'Meet the board-certified dermatologists, horticulturalists, and cosmetic formulators behind AloeDaily. Review our editorial fact-checking and purity testing policies.',
      pageType: 'AboutPage',
    });

    const html = renderBaseLayout({
      title: `About AloeDaily: Medical & Botanical Review Board`,
      metaDescription: 'Meet our board-certified dermatologists, horticulturalists, and cosmetic formulators. Review our editorial fact-checking and purity testing policies.',
      canonicalUrl: canonical,
      schemaJson: schema,
      contentHtml: renderAboutPage(),
    });

    return new Response(html, { status: 200, headers: getCacheHeaders('html') });
  }

  // 6. Pillar Hub Routes (/:pillar/)
  const segments = pathname.replace(/^\/+|\/+$/g, '').split('/');
  
  if (segments.length === 1) {
    const pillarId = segments[0] as PillarId;
    const pillar = PILLARS[pillarId];

    if (pillar) {
      const canonical = `${SITE_CONFIG.url}/${pillar.slug}/`;
      const schema = buildPageSchemaGraph({
        breadcrumbs: [{ name: 'Home', url: '/' }, { name: pillar.shortTitle, url: `/${pillar.slug}/` }],
        canonicalUrl: canonical,
        pageTitle: `${pillar.title} | ${SITE_CONFIG.name}`,
        pageDescription: pillar.metaDescription,
        pageType: 'CollectionPage',
      });

      const html = renderBaseLayout({
        title: `${pillar.title} - Definitive Pillar Guide`,
        metaDescription: pillar.metaDescription,
        canonicalUrl: canonical,
        schemaJson: schema,
        contentHtml: renderPillarHubPage(pillar),
      });

      return new Response(html, { status: 200, headers: getCacheHeaders('html') });
    }
  }

  // 7. Article Spoke Routes (/:pillar/:slug/)
  if (segments.length === 2) {
    const [pillarSegment, slugSegment] = segments;
    const article = getArticleBySlug(slugSegment);

    if (article && article.pillar === pillarSegment) {
      const canonical = `${SITE_CONFIG.url}/${article.pillar}/${article.slug}/`;
      const pillar = PILLARS[article.pillar];

      const schema = buildPageSchemaGraph({
        article,
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: pillar.shortTitle, url: `/${pillar.slug}/` },
          { name: article.title, url: `/${article.pillar}/${article.slug}/` },
        ],
        canonicalUrl: canonical,
        pageTitle: article.metaTitle,
        pageDescription: article.metaDescription,
      });

      const html = renderBaseLayout({
        title: article.metaTitle,
        metaDescription: article.metaDescription,
        canonicalUrl: canonical,
        schemaJson: schema,
        contentHtml: renderArticlePage(article),
        ogType: 'article',
        publishedTime: `${article.publishedAt}T08:00:00Z`,
        modifiedTime: `${article.updatedAt}T10:00:00Z`,
      });

      return new Response(html, { status: 200, headers: getCacheHeaders('html') });
    }
  }

  // 8. 404 Fallback
  const notFoundHtml = renderBaseLayout({
    title: 'Page Not Found (404)',
    metaDescription: 'The requested botanical protocol was not found on AloeDaily.',
    canonicalUrl: `${SITE_CONFIG.url}${pathname}`,
    schemaJson: { '@context': 'https://schema.org', '@type': 'WebPage', name: '404 Not Found' },
    contentHtml: renderNotFoundPage(),
  });

  return new Response(notFoundHtml, { status: 404, headers: getCacheHeaders('html') });
}
