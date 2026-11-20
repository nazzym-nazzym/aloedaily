import { TESTED_PRODUCTS } from '../data/products';

const AFFILIATE_MAP: Record<string, string> = {
  'seven-minerals-aloe-gel': 'https://www.amazon.com/dp/B00X5OUFSQ?tag=aloedaily-20',
  'sky-organics-aloe-gel': 'https://www.amazon.com/dp/B073R5K4L7?tag=aloedaily-20',
};

export function handleAffiliateRedirect(brandSlug: string): Response {
  const targetUrl = AFFILIATE_MAP[brandSlug];

  if (!targetUrl) {
    return new Response('Product referral not found', { status: 404 });
  }

  // 307 Temporary Redirect with strict noindex/nofollow headers to safeguard SEO
  return new Response(null, {
    status: 307,
    headers: {
      Location: targetUrl,
      'X-Robots-Tag': 'noindex, nofollow, noarchive',
      'Referrer-Policy': 'no-referrer-when-downgrade',
    },
  });
}

export async function handleLeadCapture(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  try {
    const data: { email?: string } = await request.json();
    if (!data.email || !data.email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Valid email required' }), { status: 400 });
    }

    console.log(`[NEWSLETTER SIGNUP] Email: ${data.email}`);
    return new Response(JSON.stringify({ success: true, message: 'Subscribed to The Daily Leaf' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid payload' }), { status: 400 });
  }
}
