import { PILLARS } from '../data/pillars';
import { PillarId } from '../data/types';
import { getArticleBySlug, getArticlesByAuthor, getArticlesByReviewer } from '../data/articles';
import { AUTHORS } from '../data/authors';
import { renderBaseLayout } from '../templates/layouts/base';
import { renderHomePage } from '../templates/pages/home';
import { renderPillarHubPage } from '../templates/pages/pillar-hub';
import { renderArticlePage } from '../templates/pages/article';
import { renderAboutPage } from '../templates/pages/about';
import { renderAuthorPage } from '../templates/pages/author';
import { renderContactPage } from '../templates/pages/contact';
import { renderPrivacyPage } from '../templates/pages/privacy';
import { renderTermsPage } from '../templates/pages/terms';
import { renderNotFoundPage } from '../templates/pages/not-found';
import { buildPageSchemaGraph } from '../schemas/graph';
import { renderMasterSitemapXml } from '../feeds/sitemap';
import { renderRobotsTxt } from '../feeds/robots';
import { renderLlmsTxt } from '../feeds/llms-txt';
import { renderRssFeed } from '../feeds/rss';
import { handleContactSubmission } from '../api/contact';
import { handleAffiliateRedirect, handleLeadCapture } from '../api/affiliate-redirect';
import { LOGO_WEBP_BYTES, LOGO_WEBP_96_BYTES, FAVICON_PNG_BYTES } from '../assets/logo-helper';
import { getCacheHeaders } from './cache';
import { SITE_CONFIG } from '../config/site';

export async function routeRequest(request: Request, url: URL): Promise<Response> {
  const pathname = url.pathname;

  // 1. Direct Edge-Native In-Memory Logo & Favicon Assets (Zero Outbound Latency)
  if (pathname === '/assets/logo.webp' || pathname === '/assets/logo.png') {
    return new Response(LOGO_WEBP_BYTES, {
      status: 200,
      headers: {
        'Content-Type': 'image/webp',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  if (pathname === '/assets/logo-96.webp') {
    return new Response(LOGO_WEBP_96_BYTES, {
      status: 200,
      headers: {
        'Content-Type': 'image/webp',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  if (pathname === '/favicon.ico' || pathname === '/favicon.png') {
    return new Response(FAVICON_PNG_BYTES, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  // 2. Virtual Feeds, RSS & Robots
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

  if (pathname === '/feed.xml' || pathname === '/rss.xml') {
    return new Response(renderRssFeed(), {
      status: 200,
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=43200, stale-while-revalidate=86400',
      },
    });
  }

  // 3. Edge API Endpoints
  if (pathname === '/api/contact') {
    return handleContactSubmission(request);
  }

  if (pathname === '/api/lead-capture') {
    return handleLeadCapture(request);
  }

  // 4. Outbound Affiliate Referral Redirects (/out/{brand})
  if (pathname.startsWith('/out/')) {
    const brandSlug = pathname.replace('/out/', '').replace(/\/$/, '');
    return handleAffiliateRedirect(brandSlug);
  }

  // 5. Homepage (/)
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

  // 6. About & Editorial Standards (/about/)
  if (pathname === '/about/' || pathname === '/about') {
    const canonical = `${SITE_CONFIG.url}/about/`;
    const schema = buildPageSchemaGraph({
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'About AloeDaily', url: '/about/' }],
      canonicalUrl: canonical,
      pageTitle: `About AloeDaily: Editorial Standards & Research Desks`,
      pageDescription: 'Meet the botanical science, horticulture, and cosmetic formulation desks behind AloeDaily. Review our editorial fact-checking and purity testing standards.',
      pageType: 'AboutPage',
    });

    const html = renderBaseLayout({
      title: `About AloeDaily: Editorial Desks & Scientific Standards`,
      metaDescription: 'Meet our botanical science, horticulture, and cosmetic formulation desks. Review our editorial fact-checking and purity testing standards.',
      canonicalUrl: canonical,
      schemaJson: schema,
      contentHtml: renderAboutPage(),
    });

    return new Response(html, { status: 200, headers: getCacheHeaders('html') });
  }

  // 7. Editorial & Media Contact (/contact/)
  if (pathname === '/contact/' || pathname === '/contact') {
    const canonical = `${SITE_CONFIG.url}/contact/`;
    const schema = buildPageSchemaGraph({
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Contact & Editorial Desks', url: '/contact/' }],
      canonicalUrl: canonical,
      pageTitle: `Contact AloeDaily Editorial & Research Desks`,
      pageDescription: 'Submit clinical citation corrections, peer-reviewed study feedback, or press interview requests directly to the AloeDaily editorial desk.',
      pageType: 'ContactPage',
    });

    const html = renderBaseLayout({
      title: `Editorial & Press Contact | ${SITE_CONFIG.name}`,
      metaDescription: 'Submit clinical citation inquiries, press interviews, or protocol corrections to the AloeDaily editorial desk.',
      canonicalUrl: canonical,
      schemaJson: schema,
      contentHtml: renderContactPage(),
    });

    return new Response(html, { status: 200, headers: getCacheHeaders('html') });
  }

  // 8. Privacy Policy (/privacy/)
  if (pathname === '/privacy/' || pathname === '/privacy') {
    const canonical = `${SITE_CONFIG.url}/privacy/`;
    const schema = buildPageSchemaGraph({
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy/' }],
      canonicalUrl: canonical,
      pageTitle: `Privacy Policy & Data Governance | ${SITE_CONFIG.name}`,
      pageDescription: 'AloeDaily data protection, zero third-party tracking cookies policy, CCPA/GDPR compliance, and affiliate disclosure.',
      pageType: 'WebPage',
    });

    const html = renderBaseLayout({
      title: `Privacy Policy & Data Governance | ${SITE_CONFIG.name}`,
      metaDescription: 'AloeDaily data protection, zero third-party tracking cookies policy, CCPA/GDPR compliance, and affiliate disclosure.',
      canonicalUrl: canonical,
      schemaJson: schema,
      contentHtml: renderPrivacyPage(),
    });

    return new Response(html, { status: 200, headers: getCacheHeaders('html') });
  }

  // 9. Terms of Service (/terms/)
  if (pathname === '/terms/' || pathname === '/terms') {
    const canonical = `${SITE_CONFIG.url}/terms/`;
    const schema = buildPageSchemaGraph({
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Terms of Service', url: '/terms/' }],
      canonicalUrl: canonical,
      pageTitle: `Terms of Service & Editorial Disclaimers | ${SITE_CONFIG.name}`,
      pageDescription: 'Terms of service, educational medical disclaimer, FDA compliance notice, and independent testing guidelines for AloeDaily.com.',
      pageType: 'WebPage',
    });

    const html = renderBaseLayout({
      title: `Terms of Service & Disclaimers | ${SITE_CONFIG.name}`,
      metaDescription: 'Terms of service, educational medical disclaimer, FDA compliance notice, and independent testing guidelines for AloeDaily.com.',
      canonicalUrl: canonical,
      schemaJson: schema,
      contentHtml: renderTermsPage(),
    });

    return new Response(html, { status: 200, headers: getCacheHeaders('html') });
  }

  // 10. Author Profile Pages (/authors/:authorId/)
  if (pathname.startsWith('/authors/')) {
    const authorId = pathname.replace('/authors/', '').replace(/\/$/, '');
    const author = AUTHORS[authorId];

    if (author) {
      const canonical = `${SITE_CONFIG.url}/authors/${author.id}/`;
      const authoredArticles = getArticlesByAuthor(author.id);
      const reviewedArticles = getArticlesByReviewer(author.id);

      const schema = buildPageSchemaGraph({
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'Editorial Desks', url: '/about/' },
          { name: author.name, url: `/authors/${author.id}/` },
        ],
        canonicalUrl: canonical,
        pageTitle: `${author.name} (${author.credentials}) - Profile & Clinical Articles`,
        pageDescription: author.bio,
        pageType: 'ProfilePage',
      });

      const html = renderBaseLayout({
        title: `${author.name} - Profile & Articles | ${SITE_CONFIG.name}`,
        metaDescription: author.bio,
        canonicalUrl: canonical,
        schemaJson: schema,
        contentHtml: renderAuthorPage(author, authoredArticles, reviewedArticles),
      });

      return new Response(html, { status: 200, headers: getCacheHeaders('html') });
    }
  }

  // 11. Pillar Hub Routes (/:pillar/)
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

  // 12. Article Spoke Routes (/:pillar/:slug/)
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

  // 13. 404 Fallback with explicit noindex and no self-canonical
  const notFoundHtml = renderBaseLayout({
    title: 'Page Not Found (404)',
    metaDescription: 'The requested botanical protocol was not found on AloeDaily.',
    canonicalUrl: `${SITE_CONFIG.url}/`,
    noindex: true,
    schemaJson: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: '404 Page Not Found',
      description: 'The requested botanical protocol was not found on AloeDaily.',
    },
    contentHtml: renderNotFoundPage(),
  });

  const notFoundHeaders = getCacheHeaders('html');
  notFoundHeaders.set('X-Robots-Tag', 'noindex, nofollow');
  return new Response(notFoundHtml, { status: 404, headers: notFoundHeaders });
}
