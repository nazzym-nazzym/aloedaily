import { SITE_CONFIG } from '../config/site';

export function renderRobotsTxt(): string {
  return `# Robots.txt for ${SITE_CONFIG.domain}
User-agent: *
Allow: /
Disallow: /api/
Disallow: /out/

# AI Crawlers explicitly granted full indexing access
User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

# Sitemaps & LLM Context Feeds
Sitemap: ${SITE_CONFIG.url}/sitemap.xml
LLM-Context: ${SITE_CONFIG.url}/llms.txt
`;
}
