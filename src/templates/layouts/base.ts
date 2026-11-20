import { INLINE_CSS } from '../styles';
import { renderHeader } from '../components/header';
import { renderFooter } from '../components/footer';
import { renderDomainInquireModal } from '../components/domain-inquire-modal';
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

  <!-- Open Graph -->
  <meta property="og:site_name" content="${SITE_CONFIG.name}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${metaDescription}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:type" content="${ogType}" />
  ${publishedTime ? `<meta property="article:published_time" content="${publishedTime}" />` : ''}
  ${modifiedTime ? `<meta property="article:modified_time" content="${modifiedTime}" />` : ''}

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${metaDescription}" />

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
  ${renderDomainInquireModal()}
</body>
</html>`;
}
