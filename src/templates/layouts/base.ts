import { INLINE_CSS } from '../styles';
import { renderHeader } from '../components/header';
import { renderFooter } from '../components/footer';
import { SITE_CONFIG } from '../../config/site';

export interface BaseLayoutOptions {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  schemaJson: object;
  contentHtml: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  ogImageAlt?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  lang?: 'en' | 'es';
  hreflangs?: { lang: string; url: string }[];
  switchUrl?: string;
}

export function renderBaseLayout(options: BaseLayoutOptions): string {
  const {
    title,
    metaDescription,
    canonicalUrl,
    schemaJson,
    contentHtml,
    ogType = 'website',
    ogImage = SITE_CONFIG.logoAbsolute,
    ogImageAlt = `${SITE_CONFIG.name} — Pure Aloe Vera & Botanical Science`,
    publishedTime,
    modifiedTime,
    noindex = false,
    lang = 'en',
    hreflangs,
    switchUrl,
  } = options;

  const displayTitle = title.toLowerCase().includes(SITE_CONFIG.name.toLowerCase())
    ? title
    : `${title} | ${SITE_CONFIG.name}`;

  const hreflangTags = hreflangs && hreflangs.length > 0
    ? hreflangs.map(h => `<link rel="alternate" hreflang="${h.lang}" href="${h.url}" />`).join('\n  ')
    : `<link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />\n  <link rel="alternate" hreflang="en" href="${canonicalUrl}" />`;

  const ogLocale = lang === 'es' ? 'es_ES' : 'en_US';

  return `<!DOCTYPE html>
<html lang="${lang}" class="scroll-smooth">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${displayTitle}</title>
  <meta name="description" content="${metaDescription}" />
  ${noindex ? '<meta name="robots" content="noindex, nofollow" />\n  <meta name="googlebot" content="noindex, nofollow" />' : `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <link rel="canonical" href="${canonicalUrl}" />
  ${hreflangTags}`}

  <!-- Critical Edge Asset Preload for Sub-Millisecond LCP -->
  <link rel="preload" as="image" href="/assets/logo.webp" fetchpriority="high" type="image/webp" />

  <!-- Favicon & Brand Icons -->
  <link rel="icon" type="image/png" href="/favicon.png" sizes="48x48" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/assets/logo.webp" />

  <!-- RSS Feed Auto-Discovery -->
  <link rel="alternate" type="application/rss+xml" title="${SITE_CONFIG.name} RSS Feed" href="/feed.xml" />

  <!-- Open Graph & Social Cards -->
  <meta property="og:site_name" content="${SITE_CONFIG.name}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${metaDescription}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:type" content="${ogType}" />
  <meta property="og:locale" content="${ogLocale}" />
  <meta property="og:image" content="${ogImage}" />
  <meta property="og:image:secure_url" content="${ogImage}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${ogImageAlt}" />
  <meta property="og:image:type" content="image/webp" />
  ${publishedTime ? `<meta property="article:published_time" content="${publishedTime}" />` : ''}
  ${modifiedTime ? `<meta property="article:modified_time" content="${modifiedTime}" />` : ''}

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@aloedaily" />
  <meta name="twitter:creator" content="@aloedaily" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${metaDescription}" />
  <meta name="twitter:image" content="${ogImage}" />
  <meta name="twitter:image:alt" content="${ogImageAlt}" />

  <!-- Inlined Critical Styles -->
  <style>${INLINE_CSS}</style>

  <!-- Structured JSON-LD Schema Graph -->
  <script type="application/ld+json">
${JSON.stringify(schemaJson, null, 2)}
  </script>
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  ${renderHeader(lang, switchUrl)}
  <main id="main-content">
    ${contentHtml}
  </main>
  ${renderFooter(lang)}
</body>
</html>`;
}
