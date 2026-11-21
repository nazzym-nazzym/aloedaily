import { checkRedirects } from './core/redirects';
import { applySecurityHeaders } from './core/security';
import { routeRequest } from './core/router';

export interface Env {
  ENVIRONMENT?: string;
  SITE_URL?: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // 1. Check for legacy URL purges (410 Gone) and canonical normalization (301)
    const redirectCheck = checkRedirects(url);

    if (redirectCheck.isGone) {
      const headers = new Headers({
        'Content-Type': 'text/html; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow',
        'Cache-Control': 'public, max-age=86400',
      });
      applySecurityHeaders(headers);

      return new Response(
        `<!DOCTYPE html><html lang="en"><head><title>410 Gone</title><meta name="robots" content="noindex, nofollow" /></head><body style="font-family:sans-serif;text-align:center;padding:4rem;"><h1>410 Gone</h1><p>This legacy resource has been permanently purged from the domain.</p></body></html>`,
        {
          status: 410,
          headers,
        }
      );
    }

    if (redirectCheck.isRedirect && redirectCheck.location) {
      return Response.redirect(redirectCheck.location, redirectCheck.status);
    }

    // 2. Dispatch request to edge router
    try {
      const response = await routeRequest(request, url);
      const headers = new Headers(response.headers);
      applySecurityHeaders(headers);

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    } catch (err) {
      console.error('[EDGE ROUTER ERROR]', err);
      const errorHtml = `<!DOCTYPE html><html lang="en"><head><title>Edge System Notice</title></head><body style="font-family:sans-serif;padding:3rem;text-align:center;"><h1>Botanical Publication Edge Notice</h1><p>Our edge node is synchronizing editorial datasets. Please refresh in a moment.</p></body></html>`;
      const errorHeaders = new Headers({ 'Content-Type': 'text/html; charset=utf-8' });
      applySecurityHeaders(errorHeaders);
      return new Response(errorHtml, {
        status: 500,
        headers: errorHeaders,
      });
    }
  },
};
