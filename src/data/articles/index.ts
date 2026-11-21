import { Article, PillarId } from '../types';
import { SKINCARE_ARTICLES } from './skincare';
import { HAIR_CARE_ARTICLES } from './hair-care';
import { HEALTH_ARTICLES } from './health';
import { CULTIVATION_ARTICLES } from './cultivation';
import { AUDIT_ARTICLES } from './audits';

export const ALL_ARTICLES: Article[] = [
  ...SKINCARE_ARTICLES,
  ...HAIR_CARE_ARTICLES,
  ...HEALTH_ARTICLES,
  ...CULTIVATION_ARTICLES,
  ...AUDIT_ARTICLES,
];

// O(1) in-memory index by slug
export const ARTICLES_BY_SLUG: Record<string, Article> = {};
for (const article of ALL_ARTICLES) {
  ARTICLES_BY_SLUG[article.slug] = article;
}

// Articles grouped by pillar
export const ARTICLES_BY_PILLAR: Record<PillarId, Article[]> = {
  skincare: SKINCARE_ARTICLES,
  'hair-care': HAIR_CARE_ARTICLES,
  health: HEALTH_ARTICLES,
  cultivation: CULTIVATION_ARTICLES,
  audits: AUDIT_ARTICLES,
};

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES_BY_SLUG[slug];
}

export function getArticlesByPillar(pillar: PillarId): Article[] {
  return ARTICLES_BY_PILLAR[pillar] || [];
}

export function getLatestArticles(limit: number = 6): Article[] {
  return [...ALL_ARTICLES]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getArticlesByAuthor(authorId: string): Article[] {
  return ALL_ARTICLES.filter((a) => a.authorId === authorId);
}

export function getArticlesByReviewer(reviewerId: string): Article[] {
  return ALL_ARTICLES.filter((a) => a.reviewedById === reviewerId);
}
