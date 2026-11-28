import { SITE_CONFIG } from '../config/site';
import { renderBaseLayout } from '../templates/layouts/base';
import { buildPageSchemaGraph } from '../schemas/graph';

export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function renderContactHtmlResponse(options: {
  success: boolean;
  heading: string;
  body: string;
  status: number;
}): Response {
  const canonical = `${SITE_CONFIG.url}/contact/`;
  const schema = buildPageSchemaGraph({
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact/' },
    ],
    canonicalUrl: canonical,
    pageTitle: options.heading,
    pageDescription: options.body,
    pageType: 'ContactPage',
  });

  const accentBg = options.success ? '#ecfdf5' : '#fef2f2';
  const accentBorder = options.success ? '#a7f3d0' : '#fecaca';
  const accentColor = options.success ? '#064e3b' : '#991b1b';

  const html = renderBaseLayout({
    title: `${options.heading} | ${SITE_CONFIG.name}`,
    metaDescription: options.body,
    canonicalUrl: canonical,
    noindex: true,
    schemaJson: schema,
    contentHtml: `
      <div class="article-container" style="padding: 4.5rem 1.25rem 5.5rem;">
        <div style="background: ${accentBg}; border: 1px solid ${accentBorder}; border-radius: 1.25rem; padding: 2.25rem; text-align: center;">
          <h1 style="font-size: 1.85rem; color: ${accentColor}; margin-bottom: 0.75rem;">${escapeHtml(options.heading)}</h1>
          <p style="font-size: 1.05rem; color: #292524; line-height: 1.6; margin-bottom: 1.75rem;">${escapeHtml(options.body)}</p>
          <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <a href="/contact/" style="background: #064e3b; color: #ffffff; padding: 0.75rem 1.5rem; border-radius: 9999px; font-weight: 700; text-decoration: none;">&larr; Back to Contact Page</a>
            <a href="/" style="background: #ffffff; color: #064e3b; border: 1px solid #059669; padding: 0.75rem 1.5rem; border-radius: 9999px; font-weight: 700; text-decoration: none;">Return Home</a>
          </div>
        </div>
      </div>
    `,
  });

  return new Response(html, {
    status: options.status,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'no-store',
    },
  });
}

export async function handleContactSubmission(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const contentType = (request.headers.get('content-type') || '').toLowerCase();
  const accept = (request.headers.get('accept') || '').toLowerCase();
  const wantsJson = contentType.includes('application/json') || accept.includes('application/json');

  try {
    let data: Partial<ContactPayload> = {};

    if (contentType.includes('application/json')) {
      data = await request.json();
    } else if (
      contentType.includes('application/x-www-form-urlencoded') ||
      contentType.includes('multipart/form-data')
    ) {
      const formData = await request.formData();
      data = {
        name: String(formData.get('name') || ''),
        email: String(formData.get('email') || ''),
        subject: String(formData.get('subject') || ''),
        message: String(formData.get('message') || ''),
      };
    } else {
      const rawText = await request.text();
      try {
        data = JSON.parse(rawText);
      } catch {
        const params = new URLSearchParams(rawText);
        data = {
          name: params.get('name') || '',
          email: params.get('email') || '',
          subject: params.get('subject') || '',
          message: params.get('message') || '',
        };
      }
    }

    const name = (data.name || '').trim();
    const email = (data.email || '').trim();
    const subject = (data.subject || '').trim();
    const message = (data.message || '').trim();

    if (!name || !email || !message) {
      const errMsg = 'Name, email, and message are required.';
      if (!wantsJson) {
        return renderContactHtmlResponse({
          success: false,
          heading: 'Missing Required Information',
          body: errMsg,
          status: 400,
        });
      }
      return new Response(JSON.stringify({ error: errMsg }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!isValidEmail(email)) {
      const errMsg = 'Please provide a valid email address.';
      if (!wantsJson) {
        return renderContactHtmlResponse({
          success: false,
          heading: 'Invalid Email Address',
          body: errMsg,
          status: 400,
        });
      }
      return new Response(JSON.stringify({ error: errMsg }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log(`[EDITORIAL CONTACT] From: ${name} <${email}> | Subject: ${subject || 'General'}`);

    const successMsg = 'Your inquiry has been received by the AloeDaily editorial desk. We typically reply within 1 to 2 business days.';

    if (!wantsJson) {
      return renderContactHtmlResponse({
        success: true,
        heading: 'Editorial Inquiry Received',
        body: successMsg,
        status: 200,
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: successMsg,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    const errMsg = 'Unable to process your inquiry. Please verify your inputs or email contact@aloedaily.com directly.';
    if (!wantsJson) {
      return renderContactHtmlResponse({
        success: false,
        heading: 'Submission Error',
        body: errMsg,
        status: 400,
      });
    }
    return new Response(JSON.stringify({ error: errMsg }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
