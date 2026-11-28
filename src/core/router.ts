import { PILLARS } from '../data/pillars';
import { PillarId } from '../data/types';
import { getArticleBySlug, getArticlesByAuthor, getArticlesByReviewer, getArticlesByPillar } from '../data/articles';
import { AUTHORS } from '../data/authors';
import { renderBaseLayout, BaseLayoutOptions } from '../templates/layouts/base';
import { renderHomePage } from '../templates/pages/home';
import { renderPillarHubPage } from '../templates/pages/pillar-hub';
import { renderArticlePage } from '../templates/pages/article';
import { renderAboutPage } from '../templates/pages/about';
import { renderSpanishHomePage } from '../templates/pages/spanish-home';
import { renderEditorialPolicyPage } from '../templates/pages/editorial-policy';
import { renderReviewBoardPage } from '../templates/pages/review-board';
import { renderAuthorPage } from '../templates/pages/author';
import { renderContactPage } from '../templates/pages/contact';
import { renderPrivacyPage } from '../templates/pages/privacy';
import { renderTermsPage } from '../templates/pages/terms';
import { renderNotFoundPage } from '../templates/pages/not-found';
import { buildPageSchemaGraph } from '../schemas/graph';
import { SPANISH_ARTICLES, getSpanishArticleBySlug, ENGLISH_TO_SPANISH_MAP, SPANISH_TO_ENGLISH_MAP } from '../data/spanish-articles';
import { renderMasterSitemapXml } from '../feeds/sitemap';
import { renderRobotsTxt } from '../feeds/robots';
import { renderLlmsTxt } from '../feeds/llms-txt';
import { renderRssFeed } from '../feeds/rss';
import { handleContactSubmission } from '../api/contact';
import { handleAffiliateRedirect, handleLeadCapture } from '../api/affiliate-redirect';
import { LOGO_WEBP_BYTES, LOGO_WEBP_96_BYTES, FAVICON_PNG_BYTES } from '../assets/logo-helper';
import { generateOpenGraphSvg } from '../assets/og-card';
import { getCacheHeaders } from './cache';
import { handleIndexNowApi } from './indexnow';
import { SITE_CONFIG } from '../config/site';

export async function routeRequest(request: Request, url: URL, env?: any): Promise<Response> {
  const pathname = url.pathname;
  const adsenseClient = (env?.ADSENSE_PUB_ID || SITE_CONFIG.adsensePublisherId || '').trim();
  const renderPage = (opts: BaseLayoutOptions) => renderBaseLayout({ ...opts, adsenseClient });

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

  // 1b. Dynamic Edge OpenGraph Visual Asset Cards (/assets/cards/:slug.svg)
  if (pathname.startsWith('/assets/cards/') && pathname.endsWith('.svg')) {
    const slug = pathname.replace('/assets/cards/', '').replace('.svg', '');
    const article = getArticleBySlug(slug) || getSpanishArticleBySlug(slug);
    if (article) {
      const svg = generateOpenGraphSvg(article);
      return new Response(svg, {
        status: 200,
        headers: {
          'Content-Type': 'image/svg+xml; charset=utf-8',
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      });
    }
  }

  // 2. Virtual Feeds, RSS, Ads.txt & Robots
  if (pathname === '/robots.txt') {
    return new Response(renderRobotsTxt(), {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=86400' },
    });
  }

  if (pathname === '/ads.txt' && adsenseClient) {
    const pubId = adsenseClient.startsWith('ca-pub-') ? adsenseClient.slice(3) : adsenseClient.startsWith('pub-') ? adsenseClient : `pub-${adsenseClient}`;
    return new Response(`google.com, ${pubId}, DIRECT, f08c47fec0942fa0\n`, {
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

  // 2b. IndexNow Key Verification Route for Bing & Search Engines
  const indexNowKey = env?.INDEXNOW_KEY || SITE_CONFIG.indexNowKey;
  if (
    pathname === `/${indexNowKey}.txt` ||
    pathname === '/indexnow.txt' ||
    pathname === '/indexnow-key.txt' ||
    pathname === '/.well-known/indexnow-key.txt'
  ) {
    return new Response(indexNowKey, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400',
        'X-Robots-Tag': 'noindex',
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

  if (pathname === '/api/indexnow') {
    return handleIndexNowApi(request, env);
  }

  // 4. Outbound Affiliate Referral Redirects (/out/{brand})
  if (pathname.startsWith('/out/')) {
    const brandSlug = pathname.replace('/out/', '').replace(/\/$/, '');
    return handleAffiliateRedirect(brandSlug);
  }

  // 5. English Homepage (/) & Site Search (/?s=...)
  if (pathname === '/' || pathname === '') {
    const searchQuery = (url.searchParams.get('s') || '').trim();
    const canonical = `${SITE_CONFIG.url}/`;
    const homeTitle = searchQuery
      ? `Search Results for "${searchQuery}" | ${SITE_CONFIG.name}`
      : 'Aloe Daily: Pure Aloe Vera Science, Skincare Protocols & Plant Care Guides';
    const homeDesc = 'Evidence-based protocols for pure aloe vera skincare, ingestible safety, plant cultivation, and independent product audits. Backed by peer-reviewed clinical science.';

    const schema = buildPageSchemaGraph({
      breadcrumbs: [],
      canonicalUrl: canonical,
      pageTitle: homeTitle,
      pageDescription: homeDesc,
      pageType: 'WebPage',
      inLanguage: 'en-US',
    });

    const html = renderPage({
      title: homeTitle,
      metaDescription: homeDesc,
      canonicalUrl: canonical,
      schemaJson: schema,
      contentHtml: renderHomePage(searchQuery),
      noindex: Boolean(searchQuery),
      lang: 'en',
      hreflangs: [
        { lang: 'x-default', url: `${SITE_CONFIG.url}/` },
        { lang: 'en', url: `${SITE_CONFIG.url}/` },
        { lang: 'es', url: `${SITE_CONFIG.url}/es/` },
      ],
      switchUrl: '/es/',
    });

    const headers = getCacheHeaders('html');
    if (searchQuery) {
      headers.set('X-Robots-Tag', 'noindex, follow');
    }
    return new Response(html, { status: 200, headers });
  }

  // 5b. Spanish Edition Homepage (/es/ or /es)
  if (pathname === '/es/' || pathname === '/es') {
    const canonical = `${SITE_CONFIG.url}/es/`;
    const homeTitle = 'AloeDaily en Español: Ciencia Botánica de la Sábila, Protocolos y Cuidado';
    const homeDesc = 'Guías clínicas basadas en evidencia sobre la sábila (aloe vera), eliminación segura de aloína, cuidado de la planta, y pruebas caseras de pureza.';

    const schema = buildPageSchemaGraph({
      breadcrumbs: [{ name: 'Inicio', url: '/es/' }],
      canonicalUrl: canonical,
      pageTitle: homeTitle,
      pageDescription: homeDesc,
      pageType: 'WebPage',
      inLanguage: 'es-ES',
    });

    const html = renderPage({
      title: homeTitle,
      metaDescription: homeDesc,
      canonicalUrl: canonical,
      schemaJson: schema,
      contentHtml: renderSpanishHomePage(),
      lang: 'es',
      hreflangs: [
        { lang: 'x-default', url: `${SITE_CONFIG.url}/` },
        { lang: 'en', url: `${SITE_CONFIG.url}/` },
        { lang: 'es', url: `${SITE_CONFIG.url}/es/` },
      ],
      switchUrl: '/',
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

    const html = renderPage({
      title: `About AloeDaily: Editorial Desks & Scientific Standards`,
      metaDescription: 'Meet our botanical science, horticulture, and cosmetic formulation desks. Review our editorial fact-checking and purity testing standards.',
      canonicalUrl: canonical,
      schemaJson: schema,
      contentHtml: renderAboutPage(),
    });

    return new Response(html, { status: 200, headers: getCacheHeaders('html') });
  }

  // 6b. Dedicated Editorial & Fact-Checking Policy (/editorial-policy/)
  if (pathname === '/editorial-policy/' || pathname === '/editorial-policy') {
    const canonical = `${SITE_CONFIG.url}/editorial-policy/`;
    const schema = buildPageSchemaGraph({
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'About AloeDaily', url: '/about/' },
        { name: 'Editorial & Fact-Checking Policy', url: '/editorial-policy/' },
      ],
      canonicalUrl: canonical,
      pageTitle: `Editorial & Fact-Checking Policy | ${SITE_CONFIG.name}`,
      pageDescription: 'Our rigorous scientific standard for botanical medicine, clinical citations, and zero-sponsored product reviews.',
      pageType: 'AboutPage',
    });

    const html = renderPage({
      title: `Editorial & Fact-Checking Policy | ${SITE_CONFIG.name}`,
      metaDescription: 'Our rigorous scientific standard for botanical medicine, clinical citations, and zero-sponsored product reviews.',
      canonicalUrl: canonical,
      schemaJson: schema,
      contentHtml: renderEditorialPolicyPage(),
    });

    return new Response(html, { status: 200, headers: getCacheHeaders('html') });
  }

  // 6c. Dedicated Medical & Botanical Review Board (/review-board/)
  if (pathname === '/review-board/' || pathname === '/review-board') {
    const canonical = `${SITE_CONFIG.url}/review-board/`;
    const schema = buildPageSchemaGraph({
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'About AloeDaily', url: '/about/' },
        { name: 'Review Board', url: '/review-board/' },
      ],
      canonicalUrl: canonical,
      pageTitle: `Medical & Botanical Review Board | ${SITE_CONFIG.name}`,
      pageDescription: 'Meet the clinical and botanical research desks that peer-review all medical, skincare, and horticultural protocols on AloeDaily.',
      pageType: 'AboutPage',
    });

    const html = renderPage({
      title: `Medical & Botanical Review Board | ${SITE_CONFIG.name}`,
      metaDescription: 'Meet the clinical and botanical research desks that peer-review all medical, skincare, and horticultural protocols on AloeDaily.',
      canonicalUrl: canonical,
      schemaJson: schema,
      contentHtml: renderReviewBoardPage(),
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

    const html = renderPage({
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
      pageDescription: 'AloeDaily data protection, Google AdSense advertising cookies disclosure, CCPA/GDPR compliance, and affiliate disclosure.',
      pageType: 'WebPage',
    });

    const html = renderPage({
      title: `Privacy Policy & Data Governance | ${SITE_CONFIG.name}`,
      metaDescription: 'AloeDaily data protection, Google AdSense advertising cookies disclosure, CCPA/GDPR compliance, and affiliate disclosure.',
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

    const html = renderPage({
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

      const html = renderPage({
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
  const PILLAR_SEO_TITLES: Record<PillarId, string> = {
    skincare: 'Aloe Vera Skincare Guide: Clinical Protocols for Acne, Barrier Repair & Anti-Aging',
    'hair-care': 'Aloe Vera for Hair & Scalp: Follicle Restoration & Biome Protocols',
    health: 'Aloe Vera Juice Health Science: Aloin Safety Limits, Digestion & Dosage',
    cultivation: 'Aloe Vera Plant Care & Cultivation: Harvesting, Soil & Emergency Rot Rescue',
    audits: 'Best Pure Aloe Vera Gel Audits & Lab Tests: Purity Index™ Reviews',
  };

  const segments = pathname.replace(/^\/+|\/+$/g, '').split('/');
  
  if (segments.length === 1) {
    const pillarId = segments[0] as PillarId;
    const pillar = PILLARS[pillarId];

    if (pillar) {
      const canonical = `${SITE_CONFIG.url}/${pillar.slug}/`;
      const articles = getArticlesByPillar(pillar.id);
      const itemListElements = articles.map(a => ({
        name: a.title,
        url: `${SITE_CONFIG.url}/${a.pillar}/${a.slug}/`,
        description: a.metaDescription,
      }));

      const pageSeoTitle = PILLAR_SEO_TITLES[pillar.id] || pillar.title;

      const schema = buildPageSchemaGraph({
        breadcrumbs: [{ name: 'Home', url: '/' }, { name: pillar.shortTitle, url: `/${pillar.slug}/` }],
        canonicalUrl: canonical,
        pageTitle: `${pageSeoTitle} | ${SITE_CONFIG.name}`,
        pageDescription: pillar.metaDescription,
        pageType: 'CollectionPage',
        itemListElements,
      });

      const html = renderPage({
        title: pageSeoTitle,
        metaDescription: pillar.metaDescription,
        canonicalUrl: canonical,
        schemaJson: schema,
        contentHtml: renderPillarHubPage(pillar),
      });

      return new Response(html, { status: 200, headers: getCacheHeaders('html') });
    }
  }

  // 11b. Spanish Article Spoke Routes (/es/:pillar/:slug/)
  if (segments.length === 3 && segments[0] === 'es') {
    const [, pillarSegment, slugSegment] = segments;
    const article = getSpanishArticleBySlug(slugSegment);

    if (article && article.pillar === pillarSegment) {
      const canonical = `${SITE_CONFIG.url}/es/${article.pillar}/${article.slug}/`;
      const enPartner = SPANISH_TO_ENGLISH_MAP[article.slug];
      const partnerUrl = enPartner ? `${SITE_CONFIG.url}/${enPartner.pillar}/${enPartner.slug}/` : undefined;

      const hreflangs = partnerUrl ? [
        { lang: 'x-default', url: partnerUrl },
        { lang: 'en', url: partnerUrl },
        { lang: 'es', url: canonical },
      ] : [
        { lang: 'x-default', url: canonical },
        { lang: 'es', url: canonical },
      ];

      const schema = buildPageSchemaGraph({
        article,
        breadcrumbs: [
          { name: 'Inicio', url: '/es/' },
          { name: article.pillar, url: `/es/` },
          { name: article.title, url: canonical },
        ],
        canonicalUrl: canonical,
        pageTitle: article.metaTitle,
        pageDescription: article.metaDescription,
        inLanguage: 'es-ES',
      });

      const cardUrl = `${SITE_CONFIG.url}/assets/cards/${article.slug}.svg`;
      const html = renderPage({
        title: article.metaTitle,
        metaDescription: article.metaDescription,
        canonicalUrl: canonical,
        schemaJson: schema,
        contentHtml: renderArticlePage(article),
        ogType: 'article',
        ogImage: cardUrl,
        ogImageAlt: `${article.title} — ${SITE_CONFIG.name}`,
        publishedTime: `${article.publishedAt}T08:00:00Z`,
        modifiedTime: `${article.updatedAt}T10:00:00Z`,
        lang: 'es',
        hreflangs,
        switchUrl: partnerUrl || '/',
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
      const esPartner = ENGLISH_TO_SPANISH_MAP[article.slug];
      const esUrl = esPartner ? `${SITE_CONFIG.url}/es/${esPartner.pillar}/${esPartner.slug}/` : undefined;

      const hreflangs = esUrl ? [
        { lang: 'x-default', url: canonical },
        { lang: 'en', url: canonical },
        { lang: 'es', url: esUrl },
      ] : [
        { lang: 'x-default', url: canonical },
        { lang: 'en', url: canonical },
      ];

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

      const cardUrl = `${SITE_CONFIG.url}/assets/cards/${article.slug}.svg`;
      const html = renderPage({
        title: article.metaTitle,
        metaDescription: article.metaDescription,
        canonicalUrl: canonical,
        schemaJson: schema,
        contentHtml: renderArticlePage(article),
        ogType: 'article',
        ogImage: cardUrl,
        ogImageAlt: `${article.title} — ${SITE_CONFIG.name}`,
        publishedTime: `${article.publishedAt}T08:00:00Z`,
        modifiedTime: `${article.updatedAt}T10:00:00Z`,
        lang: 'en',
        hreflangs,
        switchUrl: esUrl || '/es/',
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
