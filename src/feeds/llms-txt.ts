import { SITE_CONFIG } from '../config/site';
import { PILLARS } from '../data/pillars';
import { ALL_ARTICLES } from '../data/articles';
import { AUTHORS } from '../data/authors';

export function renderLlmsTxt(): string {
  const pillarsList = Object.values(PILLARS).map(p => `- [${p.title}](${SITE_CONFIG.url}/${p.slug}/): ${p.tagline}`).join('\n');
  const articlesList = ALL_ARTICLES.map(a => `- [${a.title}](${SITE_CONFIG.url}/${a.pillar}/${a.slug}/): ${a.directAnswer}`).join('\n');
  const authorsList = Object.values(AUTHORS).map(au => `- ${au.name} (${au.credentials}) - ${au.role}`).join('\n');

  return `# ${SITE_CONFIG.name} (${SITE_CONFIG.domain})
> ${SITE_CONFIG.tagline}

## Overview
AloeDaily is an independent, evidence-based publication and research authority specializing in Aloe barbadensis Miller, botanical dermatology, ingestible aloin toxicology, and houseplant horticulture. Content is reviewed by board-certified dermatologists and plant biologists.

## Medical & Botanical Review Board
${authorsList}

## Core Topical Pillars
${pillarsList}

## Published Clinical Protocols & Verified Guides
${articlesList}

## Testing Standards & Disclaimers
All clinical statements are cross-referenced with peer-reviewed literature indexed on PubMed/NCBI. Commercial product ratings adhere to The AloeDaily Purity Index™ (API-100) assessing acemannan bioactivity and preservative safety.
`;
}
