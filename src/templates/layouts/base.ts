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
  publishedTime?: string;
  modifiedTime?: string;
}

export function renderBaseLayout(options: BaseLayoutOptions): string {
  const {
    title,
    metaDescription,
    canonicalUrl,
    schemaJson,
    contentHtml,
    ogType = 'website',
    publishedTime,
    modifiedTime,
  } = options;

  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | ${SITE_CONFIG.name}</title>
  <meta name="description" content="${metaDescription}" />
  <link rel="canonical" href="${canonicalUrl}" />

  <!-- Critical Edge Asset Preload for Sub-Millisecond LCP -->
  <link rel="preload" as="image" href="/assets/logo.webp" fetchpriority="high" type="image/webp" />

  <!-- Favicon & Brand Icons -->
  <link rel="icon" type="image/png" href="/favicon.png" sizes="48x48" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/assets/logo.webp" />

  <!-- Open Graph & Social Cards -->
  <meta property="og:site_name" content="${SITE_CONFIG.name}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${metaDescription}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:type" content="${ogType}" />
  <meta property="og:image" content="${SITE_CONFIG.logoAbsolute}" />
  ${publishedTime ? `<meta property="article:published_time" content="${publishedTime}" />` : ''}
  ${modifiedTime ? `<meta property="article:modified_time" content="${modifiedTime}" />` : ''}

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${metaDescription}" />
  <meta name="twitter:image" content="${SITE_CONFIG.logoAbsolute}" />

  <!-- Performance Preconnect & Styles -->
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <style>${INLINE_CSS}</style>

  <!-- Structured JSON-LD Schema Graph -->
  <script type="application/ld+json">
${JSON.stringify(schemaJson, null, 2)}
  </script>
</head>
<body>
  ${renderHeader()}
  <main>
    ${contentHtml}
  </main>
  ${renderFooter()}
</body>
</html>`;
}
