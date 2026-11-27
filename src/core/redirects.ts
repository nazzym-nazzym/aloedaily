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
  // Legacy e-commerce store & checkout funnel URLs (WordPress/WooCommerce/CartFlows)
  /^\/product(\/|$)/i,
  /^\/products(\/|$)/i,
  /^\/product-category(\/|$)/i,
  /^\/product-tag(\/|$)/i,
  /^\/categories(\/|$)/i,
  /^\/step(\/|$)/i,
  /^\/cart(\/|$)/i,
  /^\/checkout(\/|$)/i,
  /^\/shop(\/|$)/i,
  /^\/store(\/|$)/i,
  /^\/my-account(\/|$)/i,
  /^\/order(\/|$)/i,
  /^\/orders(\/|$)/i,
  /^\/order-received(\/|$)/i,
  /^\/basket(\/|$)/i,
  /^\/wc-api(\/|$)/i,
  /^\/brand(\/|$)/i,
  /^\/brands(\/|$)/i,
  /^\/item(\/|$)/i,
  /^\/items(\/|$)/i,
];

const LEGACY_URL_REDIRECTS: Record<string, string> = {
  '/health/aloe-vera-juice-daily-intake-safety': '/health/aloe-vera-juice-dosage-calculator/',
  '/health/aloe-vera-juice-daily-intake-safety/': '/health/aloe-vera-juice-dosage-calculator/',
  '/skincare/can-you-leave-aloe-vera-on-face-overnight': '/skincare/aloe-vera-overnight-face-mask/',
  '/skincare/can-you-leave-aloe-vera-on-face-overnight/': '/skincare/aloe-vera-overnight-face-mask/',
  '/lab-standards': '/audits/',
  '/lab-standards/': '/audits/',
  '/lab-purity-standards': '/audits/',
  '/lab-purity-standards/': '/audits/',
  '/medical-board': '/review-board/',
  '/medical-board/': '/review-board/',
  // High-volume short keyword query redirects
  '/skincare/aloe-vera-for-eczema': '/skincare/aloe-vera-eczema-flareup-relief/',
  '/skincare/aloe-vera-for-eczema/': '/skincare/aloe-vera-eczema-flareup-relief/',
  '/skincare/aloe-vera-for-sunburn': '/skincare/aloe-vera-sunburn-healing-timeline/',
  '/skincare/aloe-vera-for-sunburn/': '/skincare/aloe-vera-sunburn-healing-timeline/',
  '/skincare/aloe-vera-for-rosacea': '/skincare/aloe-vera-rosacea-erythema-soothing/',
  '/skincare/aloe-vera-for-rosacea/': '/skincare/aloe-vera-rosacea-erythema-soothing/',
  '/skincare/aloe-vera-vs-hyaluronic-acid': '/skincare/aloe-vera-hyaluronic-acid-comparison/',
  '/skincare/aloe-vera-vs-hyaluronic-acid/': '/skincare/aloe-vera-hyaluronic-acid-comparison/',
  '/cultivation/aloe-vera-plant-not-growing': '/cultivation/aloe-vera-plant-not-growing-stunted-fix/',
  '/cultivation/aloe-vera-plant-not-growing/': '/cultivation/aloe-vera-plant-not-growing-stunted-fix/',
};

export function checkRedirects(url: URL): RedirectCheckResult {
  const pathname = url.pathname;

  // 1. Check for 410 Gone legacy test pages to clean Google Search Console index
  for (const pattern of GONE_URL_PATTERNS) {
    if (pattern.test(pathname)) {
      return { isRedirect: false, status: 410, isGone: true };
    }
  }

  // 1b. Check for legacy 301 URL redirects (crawled/migrated URLs)
  if (LEGACY_URL_REDIRECTS[pathname]) {
    return {
      isRedirect: true,
      status: 301,
      location: `${url.origin}${LEGACY_URL_REDIRECTS[pathname]}`,
    };
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
