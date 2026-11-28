import worker from '../src/index';
import { SITE_CONFIG } from '../src/config/site';

async function runTests() {
  console.log('--- RUNNING ALOEDAILY EDGE WORKER TESTS ---');
  let passed = 0;
  let failed = 0;

  function assert(condition: boolean, testName: string) {
    if (condition) {
      console.log(`[PASS] ${testName}`);
      passed++;
    } else {
      console.error(`[FAIL] ${testName}`);
      failed++;
    }
  }

  const mockCtx: any = { waitUntil: () => {}, passThroughOnException: () => {} };
  const env: any = { SITE_URL: 'https://aloedaily.com' };

  // Test 1: 410 Gone for legacy non-aloe test pages
  {
    const req = new Request('https://aloedaily.com/glp1-calculator');
    const res = await worker.fetch(req, env, mockCtx);
    assert(res.status === 410, 'Legacy test URL /glp1-calculator returns 410 Gone');
    assert(res.headers.get('X-Robots-Tag')?.includes('noindex') === true, '410 returns noindex header');
  }

  // Test 2: 301 Trailing Slash Normalization
  {
    const req = new Request('https://aloedaily.com/skincare');
    const res = await worker.fetch(req, env, mockCtx);
    assert(res.status === 301, 'Directory path /skincare redirects with 301');
    assert(res.headers.get('Location') === 'https://aloedaily.com/skincare/', 'Redirect location has absolute canonical trailing slash');
  }

  // Test 3: Robots.txt
  {
    const req = new Request('https://aloedaily.com/robots.txt');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, '/robots.txt returns 200 OK');
    assert(body.includes('GPTBot') && body.includes('Sitemap:'), '/robots.txt contains AI crawlers and sitemap');
  }

  // Test 4: LLMS.txt
  {
    const req = new Request('https://aloedaily.com/llms.txt');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, '/llms.txt returns 200 OK');
    assert(body.includes('AloeDaily') && body.includes('Editorial & Research Desks'), '/llms.txt contains publisher authority data');
  }

  // Test 5: Sitemap.xml & XML Well-Formedness
  {
    const req = new Request('https://aloedaily.com/sitemap.xml');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, '/sitemap.xml returns 200 OK');
    assert(res.headers.get('Content-Type')?.includes('xml') === true, '/sitemap.xml served with xml Content-Type');
    assert(body.includes('<urlset') && body.includes('/skincare/aloe-vera-overnight-face-mask/'), '/sitemap.xml contains article URLs');
    
    // Check for XML entity escaping (no bare &)
    const unescapedAmp = body.match(/&(?!(amp|lt|gt|quot|apos);)/);
    assert(!unescapedAmp, '/sitemap.xml has ZERO unescaped ampersands (valid XML for Google Search Console)');
    
    // Check for duplicate URLs
    const locMatches = [...body.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
    const duplicateLocs = locMatches.filter((item, index) => locMatches.indexOf(item) !== index);
    assert(duplicateLocs.length === 0, '/sitemap.xml contains ZERO duplicate URLs');
  }

  // Test 6: Homepage & Inlined Critical CSS & Preloaded Logo
  {
    const req = new Request('https://aloedaily.com/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, 'Homepage returns 200 OK');
    assert(body.includes('AloeDaily') && body.includes('<style>'), 'Homepage renders brand & inlined styles');
    assert(body.includes('application/ld+json'), 'Homepage contains schema markup');
    assert(body.includes('rel="preload" as="image" href="/assets/logo.webp"'), 'Homepage contains high-priority preload link for logo');
    assert(body.includes('width="40" height="40"'), 'Logo contains explicit width and height to prevent CLS');
    assert(body.includes('fetchpriority="high"'), 'Logo contains fetchpriority="high"');
    assert(!body.includes('domain-modal') && !body.includes('Acquisition Inquiries'), 'Homepage has ZERO domain-for-sale banners (passes MarketCall compliance)');
  }

  // Test 7: Direct Zero-Latency Edge WebP Logo Route
  {
    const req = new Request('https://aloedaily.com/assets/logo.webp');
    const res = await worker.fetch(req, env, mockCtx);
    const buf = await res.arrayBuffer();
    assert(res.status === 200, '/assets/logo.webp returns 200 OK');
    assert(res.headers.get('Content-Type') === 'image/webp', 'Logo served as modern image/webp');
    assert(res.headers.get('Cache-Control')?.includes('immutable') === true, 'Logo has immutable cache header');
    assert(buf.byteLength > 1000, `Logo binary payload delivered (${buf.byteLength} bytes)`);
  }

  // Test 8: Direct Zero-Latency Edge Favicon Route
  {
    const req = new Request('https://aloedaily.com/favicon.ico');
    const res = await worker.fetch(req, env, mockCtx);
    const buf = await res.arrayBuffer();
    assert(res.status === 200, '/favicon.ico returns 200 OK');
    assert(res.headers.get('Content-Type') === 'image/png', 'Favicon served as image/png');
    assert(buf.byteLength > 1000, `Favicon binary payload delivered (${buf.byteLength} bytes)`);
  }

  // Test 9: Pillar Hub Page (/skincare/)
  {
    const req = new Request('https://aloedaily.com/skincare/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, '/skincare/ pillar hub returns 200 OK');
    assert(body.includes('Facial Skincare & Dermatological Science'), 'Pillar hub renders headline');
  }

  // Test 10: Article Spoke Page with Direct Answer & Schema
  {
    const req = new Request('https://aloedaily.com/skincare/aloe-vera-overnight-face-mask/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, 'Article spoke returns 200 OK');
    assert(body.includes('Quick Answer & Key Finding'), 'Article contains GEO Direct Answer block');
    assert(body.includes('AloeDaily Botanical Research Desk'), 'Article contains scientific desk credentials');
    assert(body.includes('MedicalWebPage'), 'Article JSON-LD schema includes MedicalWebPage');
  }

  // Test 11: Aloin Removal Article contains Aloin Timer Tool
  {
    const req = new Request('https://aloedaily.com/health/how-to-remove-aloin-from-aloe-leaf/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, 'Aloin guide returns 200 OK');
    assert(body.includes('Aloin Water Flush Countdown Timer'), 'Aloin guide embeds interactive countdown timer tool');
  }

  // Test 12: Juice Dosage Calculator Article contains Dosage Calculator Tool
  {
    const req = new Request('https://aloedaily.com/health/aloe-vera-juice-dosage-calculator/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, 'Dosage calculator article returns 200 OK');
    assert(body.includes('Daily Aloe Vera Juice Intake Estimator'), 'Dosage calculator article embeds interactive dosage estimator');
  }

  // Test 13: Outbound Cloaked Affiliate Redirect
  {
    const req = new Request('https://aloedaily.com/out/seven-minerals-aloe-gel');
    const res = await worker.fetch(req, env, mockCtx);
    assert(res.status === 307, 'Affiliate /out/ link returns 307 redirect');
    assert(res.headers.get('X-Robots-Tag')?.includes('noindex') === true, 'Affiliate redirect contains noindex header');
    assert(res.headers.get('Location')?.includes('amazon.com') === true, 'Affiliate redirect target is correct');
  }

  // Test 14: Editorial & Media Contact API
  {
    const req = new Request('https://aloedaily.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Dr. Jane Smith',
        email: 'jane@university.edu',
        subject: 'Clinical trial citation inquiry',
        message: 'Revisiting the acemannan molecular weight parameters.'
      }),
    });
    const res = await worker.fetch(req, env, mockCtx);
    const data: any = await res.json();
    assert(res.status === 200, '/api/contact returns 200 OK');
    assert(data.success === true, 'Editorial contact processed successfully');
  }

  // Test 15: 404 Not Found Page with SEO Compliance
  {
    const req = new Request('https://aloedaily.com/non-existent-page-xyz/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 404, 'Unknown path returns 404');
    assert(res.headers.get('X-Robots-Tag')?.includes('noindex') === true, '404 contains X-Robots-Tag noindex');
    assert(body.includes('name="robots" content="noindex, nofollow"'), '404 HTML body contains noindex, nofollow meta tag');
  }

  // Test 16: Security Headers Enforced on Responses
  {
    const req = new Request('https://aloedaily.com/');
    const res = await worker.fetch(req, env, mockCtx);
    assert(res.headers.get('X-Content-Type-Options') === 'nosniff', 'Security header X-Content-Type-Options: nosniff present');
    assert(res.headers.get('X-Frame-Options') === 'SAMEORIGIN', 'Security header X-Frame-Options: SAMEORIGIN present');
    assert(res.headers.get('Referrer-Policy') === 'strict-origin-when-cross-origin', 'Security header Referrer-Policy present');
    assert(res.headers.get('Strict-Transport-Security')?.includes('max-age=') === true, 'HSTS header present');
    assert(res.headers.get('Content-Security-Policy')?.includes("default-src 'self'") === true, 'Content-Security-Policy header present');
  }

  // Test 17: Author Profile Pages & Authentic Desks (/authors/:id/)
  {
    const req = new Request('https://aloedaily.com/authors/dr-elena-vance/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, '/authors/dr-elena-vance/ legacy alias returns 200 OK');
    assert(body.includes('AloeDaily Botanical Research Desk') && body.includes('ProfilePage'), 'Author profile includes desk name and ProfilePage schema');
    assert(body.includes('PubMed, JAAD, Burns & NTP Peer-Reviewed Literature Standards'), 'Author profile renders academic literature standards');
  }

  // Test 17b: Authentic Desks (/authors/horticulture-desk/ and /authors/formulation-desk/)
  {
    const reqHort = new Request('https://aloedaily.com/authors/horticulture-desk/');
    const resHort = await worker.fetch(reqHort, env, mockCtx);
    const bodyHort = await resHort.text();
    assert(resHort.status === 200, '/authors/horticulture-desk/ returns 200 OK');
    assert(bodyHort.includes('AloeDaily Horticulture & Cultivation Desk'), 'Horticulture desk renders proper title');

    const reqForm = new Request('https://aloedaily.com/authors/formulation-desk/');
    const resForm = await worker.fetch(reqForm, env, mockCtx);
    const bodyForm = await resForm.text();
    assert(resForm.status === 200, '/authors/formulation-desk/ returns 200 OK');
    assert(bodyForm.includes('AloeDaily Ingredient & Formulation Audit Desk'), 'Formulation desk renders proper title');
  }

  // Test 18: Privacy Policy Page (/privacy/)
  {
    const req = new Request('https://aloedaily.com/privacy/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, '/privacy/ returns 200 OK');
    assert(body.includes('Privacy Policy & Data Governance'), 'Privacy page renders correct heading');
  }

  // Test 19: Terms of Service Page (/terms/)
  {
    const req = new Request('https://aloedaily.com/terms/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, '/terms/ returns 200 OK');
    assert(body.includes('Terms of Service & Editorial Disclaimers'), 'Terms page renders correct heading');
  }

  // Test 20: Editorial Contact Page (/contact/)
  {
    const req = new Request('https://aloedaily.com/contact/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, '/contact/ returns 200 OK');
    assert(body.includes('Contact AloeDaily Editorial & Research Desks'), 'Contact page renders correct heading and form');
  }

  // Test 21: RSS 2.0 Feed (/feed.xml)
  {
    const req = new Request('https://aloedaily.com/feed.xml');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, '/feed.xml returns 200 OK');
    assert(res.headers.get('Content-Type')?.includes('application/rss+xml') === true, 'RSS served with application/rss+xml');
    assert(body.includes('<rss version="2.0"') && body.includes('<item>'), 'RSS XML contains valid 2.0 structure and items');
  }

  // Test 22: Schema Rich Snippet Compliance (Speakable, Product Offers, AggregateRating)
  {
    const req = new Request('https://aloedaily.com/audits/best-pure-aloe-vera-gels-reviewed/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(body.includes('SpeakableSpecification'), 'Article schema includes speakable specification for AI overviews');
    assert(body.includes('"@type": "Product"'), 'Scorecard article includes Product schema');
    assert(body.includes('"@type": "Offer"'), 'Product schema contains valid Offer node for Google Rich Results');
    assert(body.includes('"@type": "AggregateRating"'), 'Product schema contains AggregateRating');
  }

  // Test 23: Accessible Mobile Navigation & Semantic Breadcrumbs
  {
    const req = new Request('https://aloedaily.com/skincare/aloe-vera-overnight-face-mask/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(body.includes('aria-label="Main navigation"'), 'Header navigation has accessible aria-label');
    assert(body.includes('id="nav-toggle"'), 'Responsive mobile menu hamburger toggle present');
    assert(body.includes('aria-label="Breadcrumb"'), 'Breadcrumbs wrapped in semantic nav with aria-label');
    assert(body.includes('<ol') && body.includes('aria-current="page"'), 'Breadcrumb uses semantic ol with aria-current="page"');
  }

  // Test 24: Legacy URL 301 Redirects (Fixing 404s identified in SEO audit)
  {
    const req1 = new Request('https://aloedaily.com/health/aloe-vera-juice-daily-intake-safety/');
    const res1 = await worker.fetch(req1, env, mockCtx);
    assert(res1.status === 301, 'Legacy URL /health/aloe-vera-juice-daily-intake-safety/ redirects 301');
    assert(res1.headers.get('Location') === 'https://aloedaily.com/health/aloe-vera-juice-dosage-calculator/', 'Redirect points to dosage calculator');

    const req2 = new Request('https://aloedaily.com/skincare/can-you-leave-aloe-vera-on-face-overnight/');
    const res2 = await worker.fetch(req2, env, mockCtx);
    assert(res2.status === 301, 'Legacy URL /skincare/can-you-leave-aloe-vera-on-face-overnight/ redirects 301');
    assert(res2.headers.get('Location') === 'https://aloedaily.com/skincare/aloe-vera-overnight-face-mask/', 'Redirect points to overnight face mask');
  }

  // Test 25: Dedicated Editorial & Fact-Checking Policy Route (/editorial-policy/)
  {
    const req = new Request('https://aloedaily.com/editorial-policy/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, '/editorial-policy/ returns 200 OK');
    assert(body.includes('Editorial & Fact-Checking Policy'), 'Editorial policy page renders correct heading');
    assert(body.includes('Primary Scientific Literature Requirement'), 'Editorial policy contains PubMed literature standards');
  }

  // Test 26: Dedicated Medical & Botanical Review Board Route (/review-board/)
  {
    const req = new Request('https://aloedaily.com/review-board/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, '/review-board/ returns 200 OK');
    assert(body.includes('Medical & Botanical Review Board'), 'Review board page renders correct heading');
    assert(body.includes('Clinical Review Protocol for YMYL Content'), 'Review board renders YMYL clinical framework');
  }

  // Test 27: Homepage Schema includes SearchAction & Organization Publishing Principles
  {
    const req = new Request('https://aloedaily.com/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(body.includes('"@type": "SearchAction"'), 'Homepage schema includes SearchAction sitelinks query input');
    assert(body.includes('publishingPrinciples'), 'Organization schema references publishingPrinciples URL');
  }

  // Test 28: Pillar Hub Schema includes ItemList & Optimized SEO Titles
  {
    const req = new Request('https://aloedaily.com/skincare/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(body.includes('"@type": "ItemList"'), 'Pillar hub schema contains ItemList for child article spokes');
    assert(body.includes('Aloe Vera Skincare Guide: Clinical Protocols for Acne, Barrier Repair & Anti-Aging'), 'Pillar hub title uses intent-focused search queries');
  }

  // Test 29: Dynamic Edge OpenGraph Visual Asset Cards (/assets/cards/:slug.svg)
  {
    const req = new Request('https://aloedaily.com/assets/cards/aloe-vera-overnight-face-mask.svg');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, '/assets/cards/:slug.svg returns 200 OK');
    assert(res.headers.get('Content-Type')?.includes('image/svg+xml') === true, 'Card served as modern image/svg+xml');
    assert(res.headers.get('Cache-Control')?.includes('immutable') === true, 'Card has immutable edge cache header');
    assert(body.includes('<svg') && body.includes('AloeDaily') && body.includes('Can You Leave Aloe Vera'), 'Card SVG renders branded title and graphics');
  }

  // Test 30: Article Spoke renders Unique OG Card & Mid-Article Companion Callout
  {
    const req = new Request('https://aloedaily.com/skincare/aloe-vera-overnight-face-mask/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(body.includes('content="https://aloedaily.com/assets/cards/aloe-vera-overnight-face-mask.svg"'), 'Article renders unique dynamic OG card URL in meta');
    assert(body.includes('Recommended Companion Protocol'), 'Article contains mid-article companion guide callout');
    assert(body.includes('Master Hub:'), 'Article contains master hub authority link');
  }

  // Test 31: Newly Added High-Volume Keyword Gap Articles Return 200 OK
  {
    const req1 = new Request('https://aloedaily.com/skincare/aloe-vera-for-stretch-marks/');
    const res1 = await worker.fetch(req1, env, mockCtx);
    const body1 = await res1.text();
    assert(res1.status === 200, '/skincare/aloe-vera-for-stretch-marks/ returns 200 OK');
    assert(body1.includes('The Dermal Histology of Stretch Marks'), 'Stretch marks article renders clinical histology section');

    const req2 = new Request('https://aloedaily.com/cultivation/aloe-vera-plant-not-growing-stunted-fix/');
    const res2 = await worker.fetch(req2, env, mockCtx);
    const body2 = await res2.text();
    assert(res2.status === 200, '/cultivation/aloe-vera-plant-not-growing-stunted-fix/ returns 200 OK');
    assert(body2.includes('The 4 Primary Culprits Behind Stalled Growth'), 'Stunted growth article renders horticultural diagnostic section');
  }

  // Test 32: Short High-Volume Keyword Query 301 Redirects
  {
    const reqEczema = new Request('https://aloedaily.com/skincare/aloe-vera-for-eczema/');
    const resEczema = await worker.fetch(reqEczema, env, mockCtx);
    assert(resEczema.status === 301, '/skincare/aloe-vera-for-eczema/ redirects 301');
    assert(resEczema.headers.get('Location') === 'https://aloedaily.com/skincare/aloe-vera-eczema-flareup-relief/', 'Eczema query redirects to dedicated flareup guide');

    const reqSunburn = new Request('https://aloedaily.com/skincare/aloe-vera-for-sunburn/');
    const resSunburn = await worker.fetch(reqSunburn, env, mockCtx);
    assert(resSunburn.status === 301, '/skincare/aloe-vera-for-sunburn/ redirects 301');
    assert(resSunburn.headers.get('Location') === 'https://aloedaily.com/skincare/aloe-vera-sunburn-healing-timeline/', 'Sunburn query redirects to dedicated timeline guide');

    const reqHA = new Request('https://aloedaily.com/skincare/aloe-vera-vs-hyaluronic-acid/');
    const resHA = await worker.fetch(reqHA, env, mockCtx);
    assert(resHA.status === 301, '/skincare/aloe-vera-vs-hyaluronic-acid/ redirects 301');
    assert(resHA.headers.get('Location') === 'https://aloedaily.com/skincare/aloe-vera-hyaluronic-acid-comparison/', 'HA query redirects to comparison guide');

    const reqStunted = new Request('https://aloedaily.com/cultivation/aloe-vera-plant-not-growing/');
    const resStunted = await worker.fetch(reqStunted, env, mockCtx);
    assert(resStunted.status === 301, '/cultivation/aloe-vera-plant-not-growing/ redirects 301');
    assert(resStunted.headers.get('Location') === 'https://aloedaily.com/cultivation/aloe-vera-plant-not-growing-stunted-fix/', 'Stunted plant query redirects to revival guide');
  }

  // Test 33: Sitemap contains Unique SVG Image Nodes for Articles
  {
    const req = new Request('https://aloedaily.com/sitemap.xml');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(body.includes('/assets/cards/aloe-vera-overnight-face-mask.svg'), 'Sitemap contains unique dynamic SVG image URL for articles');
  }

  // Test 34: Spanish Edition Homepage (/es/) & Multilingual Hreflang Tags
  {
    const req = new Request('https://aloedaily.com/es/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, '/es/ returns 200 OK');
    assert(body.includes('<html lang="es"'), 'Spanish page sets html lang="es"');
    assert(body.includes('Ciencia Botánica de la Sábila'), 'Spanish homepage renders Spanish hero headline');
    assert(body.includes('hreflang="es" href="https://aloedaily.com/es/"'), 'Spanish homepage contains self-hreflang');
    assert(body.includes('hreflang="en" href="https://aloedaily.com/"'), 'Spanish homepage contains English hreflang');
    assert(body.includes('hreflang="x-default" href="https://aloedaily.com/"'), 'Spanish homepage contains x-default hreflang');
  }

  // Test 35: Bidirectional Hreflang on English & Spanish Article Spoke Pairs
  {
    // English Article
    const reqEn = new Request('https://aloedaily.com/skincare/aloe-vera-overnight-face-mask/');
    const resEn = await worker.fetch(reqEn, env, mockCtx);
    const bodyEn = await resEn.text();
    assert(bodyEn.includes('hreflang="es" href="https://aloedaily.com/es/skincare/sabila-para-la-cara-toda-la-noche/"'), 'English article links to Spanish partner via hreflang');

    // Spanish Article
    const reqEs = new Request('https://aloedaily.com/es/skincare/sabila-para-la-cara-toda-la-noche/');
    const resEs = await worker.fetch(reqEs, env, mockCtx);
    const bodyEs = await resEs.text();
    assert(resEs.status === 200, '/es/skincare/sabila-para-la-cara-toda-la-noche/ returns 200 OK');
    assert(bodyEs.includes('<html lang="es"'), 'Spanish article has html lang="es"');
    assert(bodyEs.includes('hreflang="en" href="https://aloedaily.com/skincare/aloe-vera-overnight-face-mask/"'), 'Spanish article links back to English partner via hreflang');
    assert(bodyEs.includes('hreflang="es" href="https://aloedaily.com/es/skincare/sabila-para-la-cara-toda-la-noche/"'), 'Spanish article has self-hreflang');
  }

  // Test 36: Accessible Multilingual Header Toggle
  {
    const reqEn = new Request('https://aloedaily.com/');
    const resEn = await worker.fetch(reqEn, env, mockCtx);
    const bodyEn = await resEn.text();
    assert(bodyEn.includes('href="/es/"') && bodyEn.includes('🇪🇸 ES'), 'English page header includes Spanish switcher link');

    const reqEs = new Request('https://aloedaily.com/es/');
    const resEs = await worker.fetch(reqEs, env, mockCtx);
    const bodyEs = await resEs.text();
    assert(bodyEs.includes('href="/"') && bodyEs.includes('🇺🇸 EN'), 'Spanish page header includes English switcher link');
  }

  // Test 37: Semantic Entity Building in Organization Schema
  {
    const req = new Request('https://aloedaily.com/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(body.includes('Sábila Diario') && body.includes('AloeDaily en Español'), 'Organization schema includes multilingual alternate names for Entity Graph');
    assert(body.includes('"knowsLanguage"') && body.includes('"es"'), 'Organization schema defines multilingual competence');
  }

  // Test 38: Spanish Articles & Hub in Master Sitemap.xml
  {
    const req = new Request('https://aloedaily.com/sitemap.xml');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(body.includes('<loc>https://aloedaily.com/es/</loc>'), 'Sitemap contains Spanish homepage URL');
    assert(body.includes('<loc>https://aloedaily.com/es/skincare/sabila-para-la-cara-toda-la-noche/</loc>'), 'Sitemap contains Spanish spoke article URLs');
  }

  // Test 39: Google Search Console - Legacy Store URLs return 410 Gone (no redirect)
  {
    const legacyUrls = [
      'https://aloedaily.com/step/organic-store-checkout/',
      'https://aloedaily.com/product-category/personalcare/',
      'https://aloedaily.com/product/aloe-jojoba-shampoo/',
      'https://aloedaily.com/product/aloe-jojoba-shampoo', // without trailing slash MUST NOT 301 redirect
      'https://aloedaily.com/product/forever-alofa-fine-fragrance/',
      'https://aloedaily.com/product/forever-absorbent-c/',
      'https://aloedaily.com/product/c9-aloe-peaches-chocolate-nl/',
      'https://aloedaily.com/product/aloe-body-lotion/',
      'https://aloedaily.com/product/vital5-box-aloe-berry-nectar-nl/',
      'https://aloedaily.com/product/forever-freedom/',
      'https://aloedaily.com/product/forever-bee-propolis/',
      'https://aloedaily.com/cart/',
      'https://aloedaily.com/checkout/',
      'https://aloedaily.com/shop/',
    ];

    for (const url of legacyUrls) {
      const req = new Request(url);
      const res = await worker.fetch(req, env, mockCtx);
      assert(res.status === 410, `Legacy store URL ${url} returns 410 Gone directly (no 301 redirect)`);
      assert(res.headers.get('X-Robots-Tag')?.includes('noindex, nofollow') === true, `410 header contains noindex, nofollow for ${url}`);
    }
  }

  // Test 40: IndexNow Key Verification Route for Bing & Search Engines
  {
    const expectedKey = SITE_CONFIG.indexNowKey;
    assert(typeof expectedKey === 'string' && expectedKey.length === 32, 'SITE_CONFIG has valid 32-char hex IndexNow key');

    // Canonical key file route: /<key>.txt
    const canonicalReq = new Request(`https://aloedaily.com/${expectedKey}.txt`);
    const canonicalRes = await worker.fetch(canonicalReq, env, mockCtx);
    const canonicalBody = await canonicalRes.text();
    assert(canonicalRes.status === 200, `/${expectedKey}.txt returns 200 OK`);
    assert(canonicalBody === expectedKey, `/${expectedKey}.txt returns exact key text`);
    assert(canonicalRes.headers.get('Content-Type')?.includes('text/plain') === true, `Key served as text/plain`);
    assert(canonicalRes.headers.get('X-Robots-Tag')?.includes('noindex') === true, `Key has noindex robots tag`);

    // Friendly fallback key file routes
    const friendlyUrls = [
      'https://aloedaily.com/indexnow.txt',
      'https://aloedaily.com/indexnow-key.txt',
      'https://aloedaily.com/.well-known/indexnow-key.txt',
    ];

    for (const url of friendlyUrls) {
      const req = new Request(url);
      const res = await worker.fetch(req, env, mockCtx);
      const body = await res.text();
      assert(res.status === 200, `${url} returns 200 OK`);
      assert(body === expectedKey, `${url} returns exact key text`);
    }
  }

  // Test 41: IndexNow Edge API Auth & Method Guard
  {
    // GET should be rejected (405)
    const getReq = new Request('https://aloedaily.com/api/indexnow');
    const getRes = await worker.fetch(getReq, env, mockCtx);
    assert(getRes.status === 405, '/api/indexnow rejects GET with 405 Method Not Allowed');

    // Unauthorized POST should be rejected (401)
    const unauthReq = new Request('https://aloedaily.com/api/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ urls: ['https://aloedaily.com/'] }),
    });
    const unauthRes = await worker.fetch(unauthReq, env, mockCtx);
    assert(unauthRes.status === 401, '/api/indexnow rejects unauthenticated POST with 401');
  }

  // Test 42: AdSense CSP Readiness, /ads.txt & Head Script Injection
  {
    const req = new Request('https://aloedaily.com/');
    const res = await worker.fetch(req, env, mockCtx);
    const csp = res.headers.get('Content-Security-Policy') || '';
    const body = await res.text();
    assert(csp.includes('https://pagead2.googlesyndication.com'), 'CSP permits Google AdSense scripts');
    assert(csp.includes('https://fundingchoicesmessages.google.com'), 'CSP permits Google CMP (Funding Choices)');
    assert(!body.includes('110,000/mo'), 'Homepage does not leak internal SEO search volume metrics');

    const envWithAds = { ...env, ADSENSE_PUB_ID: 'ca-pub-1234567890123456' };
    const adsTxtRes = await worker.fetch(new Request('https://aloedaily.com/ads.txt'), envWithAds, mockCtx);
    const adsTxtBody = await adsTxtRes.text();
    assert(adsTxtRes.status === 200, '/ads.txt returns 200 OK when ADSENSE_PUB_ID is configured');
    assert(adsTxtBody.includes('google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0'), '/ads.txt contains valid Google publisher record');

    const homeWithAdsRes = await worker.fetch(new Request('https://aloedaily.com/'), envWithAds, mockCtx);
    const homeWithAdsBody = await homeWithAdsRes.text();
    assert(homeWithAdsBody.includes('adsbygoogle.js?client=ca-pub-1234567890123456'), 'AdSense verification script renders when ADSENSE_PUB_ID is configured');
  }

  // Test 43: Privacy Policy Discloses Google AdSense & Third-Party Cookies
  {
    const res = await worker.fetch(new Request('https://aloedaily.com/privacy/'), env, mockCtx);
    const body = await res.text();
    assert(body.includes('Google AdSense') && body.includes('adssettings.google.com'), 'Privacy policy discloses Google AdSense and personalized ad opt-out');
    assert(!body.includes('does not use tracking cookies or persistent advertising cookies'), 'Privacy policy no longer contradicts AdSense cookie usage');
  }

  // Test 44: Contact Form Supports Standard HTML Form POST (x-www-form-urlencoded)
  {
    const formReq = new Request('https://aloedaily.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: 'name=Alice+Tester&email=alice@example.com&subject=Audit&message=Testing+contact+form',
    });
    const formRes = await worker.fetch(formReq, env, mockCtx);
    const formBody = await formRes.text();
    assert(formRes.status === 200, '/api/contact accepts standard HTML form POST');
    assert(formBody.includes('Editorial Inquiry Received'), '/api/contact renders HTML confirmation for browser form POST');
  }

  // Test 45: Homepage Search (?s=...) Works & Returns Noindex
  {
    const searchReq = new Request('https://aloedaily.com/?s=aloin');
    const searchRes = await worker.fetch(searchReq, env, mockCtx);
    const searchBody = await searchRes.text();
    assert(searchRes.status === 200, '/?s=aloin returns 200 OK');
    assert(searchRes.headers.get('X-Robots-Tag')?.includes('noindex') === true, 'Search result page sets X-Robots-Tag noindex');
    assert(searchBody.includes('Site Search') && searchBody.includes('Aloin'), 'Search results render matching articles');
  }

  // Test 46: Article Visual Figure & Valid Citations (No Empty Citation Lists)
  {
    const artRes = await worker.fetch(new Request('https://aloedaily.com/audits/seven-minerals-aloe-vera-gel-lab-audit-review/'), env, mockCtx);
    const artBody = await artRes.text();
    assert(artBody.includes('class="article-figure"') && artBody.includes('/assets/cards/seven-minerals-aloe-vera-gel-lab-audit-review.svg'), 'Article renders visual header figure');
    assert(artBody.includes('Primary Peer-Reviewed Sources') && artBody.includes('International Aloe Science Council'), 'Audit article resolves previously broken IASC citation key');
  }

  console.log(`\nTEST SUMMARY: ${passed} Passed, ${failed} Failed`);
  if (failed > 0) process.exit(1);
}

runTests();
