import worker from '../src/index';

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
    assert(body.includes('AloeDaily') && body.includes('Medical & Botanical Review Board'), '/llms.txt contains publisher authority data');
  }

  // Test 5: Sitemap.xml
  {
    const req = new Request('https://aloedaily.com/sitemap.xml');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, '/sitemap.xml returns 200 OK');
    assert(body.includes('<urlset') && body.includes('/skincare/aloe-vera-overnight-face-mask/'), '/sitemap.xml contains article URLs');
  }

  // Test 6: Homepage & Inlined Critical CSS
  {
    const req = new Request('https://aloedaily.com/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, 'Homepage returns 200 OK');
    assert(body.includes('AloeDaily') && body.includes('<style>'), 'Homepage renders brand & inlined styles');
    assert(body.includes('application/ld+json'), 'Homepage contains schema markup');
  }

  // Test 7: Pillar Hub Page (/skincare/)
  {
    const req = new Request('https://aloedaily.com/skincare/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, '/skincare/ pillar hub returns 200 OK');
    assert(body.includes('Facial Skincare & Dermatological Science'), 'Pillar hub renders headline');
  }

  // Test 8: Article Spoke Page with Direct Answer & Schema
  {
    const req = new Request('https://aloedaily.com/skincare/aloe-vera-overnight-face-mask/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, 'Article spoke returns 200 OK');
    assert(body.includes('Quick Answer & Key Finding'), 'Article contains GEO Direct Answer block');
    assert(body.includes('Dr. Elena Vance'), 'Article contains medical reviewer credentials');
    assert(body.includes('MedicalWebPage'), 'Article JSON-LD schema includes MedicalWebPage');
  }

  // Test 9: Aloin Removal Article contains Aloin Timer Tool
  {
    const req = new Request('https://aloedaily.com/health/how-to-remove-aloin-from-aloe-leaf/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, 'Aloin guide returns 200 OK');
    assert(body.includes('Aloin Water Flush Countdown Timer'), 'Aloin guide embeds interactive countdown timer tool');
  }

  // Test 10: Juice Dosage Calculator Article contains Dosage Calculator Tool
  {
    const req = new Request('https://aloedaily.com/health/aloe-vera-juice-dosage-calculator/');
    const res = await worker.fetch(req, env, mockCtx);
    const body = await res.text();
    assert(res.status === 200, 'Dosage calculator article returns 200 OK');
    assert(body.includes('Daily Aloe Vera Juice Dosage Calculator'), 'Dosage calculator article embeds interactive dosage calculator');
  }

  // Test 11: Outbound Cloaked Affiliate Redirect
  {
    const req = new Request('https://aloedaily.com/out/seven-minerals-aloe-gel');
    const res = await worker.fetch(req, env, mockCtx);
    assert(res.status === 307, 'Affiliate /out/ link returns 307 redirect');
    assert(res.headers.get('X-Robots-Tag')?.includes('noindex') === true, 'Affiliate redirect contains noindex header');
    assert(res.headers.get('Location')?.includes('amazon.com') === true, 'Affiliate redirect target is correct');
  }

  // Test 12: Domain Acquisition API
  {
    const req = new Request('https://aloedaily.com/api/domain-inquire', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'John Investor',
        email: 'john@investor.com',
        budget: '100k-250k',
        message: 'Interested in acquiring aloedaily.com for a botanical brand.'
      }),
    });
    const res = await worker.fetch(req, env, mockCtx);
    const data: any = await res.json();
    assert(res.status === 200, '/api/domain-inquire returns 200 OK');
    assert(data.success === true, 'Inquiry processed successfully');
  }

  // Test 13: 404 Not Found Page
  {
    const req = new Request('https://aloedaily.com/non-existent-page-xyz/');
    const res = await worker.fetch(req, env, mockCtx);
    assert(res.status === 404, 'Unknown path returns 404');
  }

  console.log(`\nTEST SUMMARY: ${passed} Passed, ${failed} Failed`);
  if (failed > 0) process.exit(1);
}

runTests();
