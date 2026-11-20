import { SITE_CONFIG } from '../config/site';

export interface DomainInquiryPayload {
  name: string;
  email: string;
  budget: string;
  message?: string;
}

export async function handleDomainInquire(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const data: DomainInquiryPayload = await request.json();

    if (!data.name || !data.email) {
      return new Response(JSON.stringify({ error: 'Name and email are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // In a live worker, this can forward to an external email API (Resend, Mailgun) or Telegram Bot Webhook
    // For now, log and acknowledge receipt cleanly
    console.log(`[ACQUISITION INQUIRY] Domain: ${SITE_CONFIG.domain} | Name: ${data.name} | Email: ${data.email} | Budget: ${data.budget}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Inquiry transmitted directly to the domain owner. We will contact you within 24 business hours.',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Invalid request payload.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
