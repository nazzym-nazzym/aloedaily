import { Article, PillarId } from '../data/types';
import { PILLARS } from '../data/pillars';
import { AUTHORS } from '../data/authors';
import { SITE_CONFIG } from '../config/site';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapText(text: string, maxCharsPerLine: number = 38): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length <= maxCharsPerLine) {
      currentLine = (currentLine + ' ' + word).trim();
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines.slice(0, 3); // Max 3 lines
}

const PILLAR_GRADIENTS: Record<PillarId, { start: string; mid: string; end: string; accent: string }> = {
  skincare: { start: '#064e3b', mid: '#022c22', end: '#011a14', accent: '#34d399' },
  'hair-care': { start: '#047857', mid: '#064e3b', end: '#022c22', accent: '#6ee7b7' },
  health: { start: '#0f766e', mid: '#134e4a', end: '#042f2e', accent: '#2dd4bf' },
  cultivation: { start: '#166534', mid: '#14532d', end: '#052e16', accent: '#4ade80' },
  audits: { start: '#365314', mid: '#1a2e05', end: '#0c1a02', accent: '#a3e635' },
};

export function generateOpenGraphSvg(article: Article): string {
  const pillar = PILLARS[article.pillar];
  const colors = PILLAR_GRADIENTS[article.pillar] || PILLAR_GRADIENTS.skincare;
  const author = AUTHORS[article.authorId];
  const deskName = author ? author.name : 'AloeDaily Botanical Research Desk';

  const titleLines = wrapText(article.title, 36);
  const titleTspans = titleLines
    .map((line, idx) => `<tspan x="80" dy="${idx === 0 ? 0 : 56}">${escapeXml(line)}</tspan>`)
    .join('');

  const badgeText = article.badge
    ? `${pillar.shortTitle.toUpperCase()} &bull; ${article.badge.toUpperCase()}`
    : `${pillar.shortTitle.toUpperCase()} AUTHORITY PROTOCOL`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${colors.start}" />
      <stop offset="60%" stop-color="${colors.mid}" />
      <stop offset="100%" stop-color="${colors.end}" />
    </linearGradient>
    <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${colors.accent}" />
      <stop offset="100%" stop-color="#ffffff" />
    </linearGradient>
    <filter id="cardShadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.45" />
    </filter>
  </defs>

  <!-- Background Base with Botanical Glow -->
  <rect width="1200" height="630" fill="url(#bgGradient)" />

  <!-- Botanical Radial Ambient Highlights -->
  <circle cx="1080" cy="120" r="380" fill="${colors.accent}" opacity="0.08" />
  <circle cx="120" cy="540" r="280" fill="${colors.accent}" opacity="0.05" />

  <!-- Geometric Grid & Precision Watermark -->
  <g opacity="0.04" stroke="#ffffff" stroke-width="1">
    <line x1="0" y1="105" x2="1200" y2="105" />
    <line x1="0" y1="525" x2="1200" y2="525" />
    <line x1="80" y1="0" x2="80" y2="630" />
    <line x1="1120" y1="0" x2="1120" y2="630" />
  </g>

  <!-- Top Header / Masthead -->
  <g transform="translate(80, 75)">
    <!-- Logo Badge Circle -->
    <rect x="0" y="0" width="46" height="46" rx="10" fill="#059669" />
    <text x="23" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="24" text-anchor="middle" fill="#ffffff">🌿</text>
    
    <!-- Brand Title -->
    <text x="60" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="800" fill="#ffffff" letter-spacing="0.02em">AloeDaily</text>
    <text x="60" y="44" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="${colors.accent}" letter-spacing="0.08em">BOTANICAL SCIENCE &amp; PROTOCOLS</text>

    <!-- Pillar Pill Badge -->
    <rect x="740" y="6" width="300" height="34" rx="17" fill="rgba(255,255,255,0.12)" stroke="${colors.accent}" stroke-width="1.5" />
    <text x="890" y="28" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="800" fill="#ffffff" text-anchor="middle" letter-spacing="0.06em">
      ${badgeText}
    </text>
  </g>

  <!-- Article Headline -->
  <g transform="translate(0, 230)">
    <text x="80" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="900" fill="#ffffff" letter-spacing="-0.02em" line-height="1.25">
      ${titleTspans}
    </text>
  </g>

  <!-- Bottom Authority Bar -->
  <g transform="translate(80, 520)">
    <!-- Top divider line -->
    <line x1="0" y1="-25" x2="1040" y2="-25" stroke="rgba(255,255,255,0.15)" stroke-width="1" />

    <!-- Left: Author / Desk Credential -->
    <text x="0" y="10" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#ffffff">
      🛡️ Vetted by ${escapeXml(deskName)}
    </text>
    <text x="0" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.7)">
      Peer-Reviewed Clinical Literature &bull; PubMed Verified Evidence
    </text>

    <!-- Right: Read Time & Domain -->
    <text x="1040" y="10" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="${colors.accent}" text-anchor="end">
      ${article.readTimeMinutes} MIN CLINICAL PROTOCOL
    </text>
    <text x="1040" y="32" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="rgba(255,255,255,0.8)" text-anchor="end">
      ${SITE_CONFIG.domain}
    </text>
  </g>
</svg>`;
}
