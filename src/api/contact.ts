import { SITE_CONFIG } from '../config/site';

export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function handleContactSubmission(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const data: ContactPayload = await request.json();

    if (!data.name || !data.email || !data.message) {
      return new Response(JSON.stringify({ error: 'Name, email, and message are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    console.log(`[EDITORIAL CONTACT] From: ${data.name} <${data.email}> | Subject: ${data.subject || 'General'}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Your message has been received by the AloeDaily editorial desk. Thank you.',
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
