import { SITE_CONFIG } from '../config/site';

export interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation?: string;
  urlList: string[];
}

export interface IndexNowResult {
  success: boolean;
  status: number;
  message: string;
  submittedUrls?: string[];
}

/**
 * Dispatches an IndexNow notification to search engines (Bing, Yandex, Seznam, Naver).
 * Instant indexing protocol for new, modified, or deleted URLs.
 */
export async function submitToIndexNow(
  urls: string[],
  customKey?: string
): Promise<IndexNowResult> {
  const key = customKey || SITE_CONFIG.indexNowKey;
  const host = SITE_CONFIG.domain;
  const keyLocation = `${SITE_CONFIG.url}/${key}.txt`;

  if (!urls || urls.length === 0) {
    return {
      success: false,
      status: 400,
      message: 'No URLs provided for IndexNow submission.',
    };
  }

  const payload: IndexNowPayload = {
    host,
    key,
    keyLocation,
    urlList: urls,
  };

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'AloeDaily-IndexNow-Dispatcher/1.0',
      },
      body: JSON.stringify(payload),
    });

    if (res.status === 200 || res.status === 202) {
      return {
        success: true,
        status: res.status,
        message: `Successfully notified IndexNow of ${urls.length} URL(s) (HTTP ${res.status}).`,
        submittedUrls: urls,
      };
    } else {
      const errorText = await res.text();
      return {
        success: false,
        status: res.status,
        message: `IndexNow API returned error HTTP ${res.status}: ${errorText}`,
      };
    }
  } catch (err: any) {
    return {
      success: false,
      status: 500,
      message: `Failed to dispatch IndexNow ping: ${err.message || String(err)}`,
    };
  }
}

/**
 * Edge API handler for /api/indexnow
 */
export async function handleIndexNowApi(request: Request, env?: any): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed. Use POST to submit URLs to IndexNow.' }),
      { status: 405, headers: { 'Content-Type': 'application/json; charset=utf-8' } }
    );
  }

  const configuredKey = env?.INDEXNOW_KEY || SITE_CONFIG.indexNowKey;

  // Simple authentication: header "Authorization: Bearer <key>" or "?key=<key>"
  const url = new URL(request.url);
  const authHeader = request.headers.get('Authorization') || '';
  const token = authHeader.replace(/^Bearer\s+/i, '').trim() || url.searchParams.get('key');

  if (token !== configuredKey) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized. Provide valid IndexNow key in Authorization header or key query param.' }),
      { status: 401, headers: { 'Content-Type': 'application/json; charset=utf-8' } }
    );
  }

  try {
    const body = (await request.json()) as { urls?: string[] };
    const urls = body.urls && Array.isArray(body.urls) && body.urls.length > 0
      ? body.urls
      : [`${SITE_CONFIG.url}/`];

    const result = await submitToIndexNow(urls, configuredKey);
    return new Response(JSON.stringify(result), {
      status: result.success ? 200 : result.status,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: 'Invalid JSON request payload.' }),
      { status: 400, headers: { 'Content-Type': 'application/json; charset=utf-8' } }
    );
  }
}
