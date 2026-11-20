export function getCacheHeaders(type: 'html' | 'static' | 'api' | 'sitemap'): Headers {
  const headers = new Headers();
  
  switch (type) {
    case 'html':
      // Edge caching: 1 hour in browser, 24 hours at Cloudflare edge, stale-while-revalidate for 7 days
      headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800');
      headers.set('Content-Type', 'text/html; charset=utf-8');
      break;

    case 'sitemap':
      headers.set('Cache-Control', 'public, max-age=3600, s-maxage=43200, stale-while-revalidate=86400');
      headers.set('Content-Type', 'application/xml; charset=utf-8');
      break;

    case 'static':
      // CSS, SVG, JS: 1 year immutable
      headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      break;

    case 'api':
      headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');
      headers.set('Content-Type', 'application/json; charset=utf-8');
      break;
  }

  return headers;
}
