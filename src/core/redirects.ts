export interface RedirectCheckResult {
  isRedirect: boolean;
  status: number;
  location?: string;
  isGone?: boolean;
}

const GONE_URL_PATTERNS = [
  /^\/glp1/i,
  /^\/weight-loss/i,
  /^\/calculator/i,
  /^\/lorem/i,
  /^\/ipsum/i,
  /^\/test/i,
  /^\/demo/i,
  /^\/sample/i,
  /^\/wp-admin/i,
  /^\/wp-content/i,
  /^\/wp-includes/i,
  /^\/xmlrpc\.php/i,
  /\.php$/i,
];

export function checkRedirects(url: URL): RedirectCheckResult {
  const pathname = url.pathname;

  // 1. Check for 410 Gone legacy test pages to clean Google Search Console index
  for (const pattern of GONE_URL_PATTERNS) {
    if (pattern.test(pathname)) {
      return { isRedirect: false, status: 410, isGone: true };
    }
  }

  // 2. Canonical hostname normalization: www.aloedaily.com -> aloedaily.com
  if (url.hostname.startsWith('www.')) {
    const canonicalHostname = url.hostname.replace(/^www\./, '');
    return {
      isRedirect: true,
      status: 301,
      location: `https://${canonicalHostname}${pathname}${url.search}`,
    };
  }

  // 3. Lowercase normalization (skip query string and assets)
  if (pathname !== pathname.toLowerCase() && !pathname.includes('.')) {
    return {
      isRedirect: true,
      status: 301,
      location: `${url.origin}${pathname.toLowerCase()}${url.search}`,
    };
  }

  // 4. Trailing slash normalization for content directories
  // (Exempt: root, files with extensions, /api/ endpoints, and /out/ redirects)
  if (
    pathname !== '/' &&
    !pathname.endsWith('/') &&
    !pathname.includes('.') &&
    !pathname.startsWith('/api') &&
    !pathname.startsWith('/out')
  ) {
    return {
      isRedirect: true,
      status: 301,
      location: `${url.origin}${pathname}/${url.search}`,
    };
  }

  return { isRedirect: false, status: 200 };
}
