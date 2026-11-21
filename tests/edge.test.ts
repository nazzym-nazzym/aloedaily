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

  // Test 5: Sitemap.xml
  {
    const req = new Request('https://aloedaily.com/sitemap.xml');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, '/sitemap.xml returns 200 OK');
    assert(body.includes('<urlset') && body.includes('/skincare/aloe-vera-overnight-face-mask/'), '/sitemap.xml contains article URLs');
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

  console.log(`\nTEST SUMMARY: ${passed} Passed, ${failed} Failed`);
  if (failed > 0) process.exit(1);
}

runTests();
