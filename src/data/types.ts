export type PillarId = 'skincare' | 'hair-care' | 'health' | 'cultivation' | 'audits';

export interface Pillar {
  id: PillarId;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  metaDescription: string;
  heroHeadline: string;
  headKeyword: string;
  searchVolume: string;
  accentColor: string;
  iconSvg: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
  imageUrl?: string;
}

export interface Citation {
  id: string;
  studyTitle: string;
  journal: string;
  year: number;
  pubmedId?: string;
  doi?: string;
  evidenceGrade: 'Randomized Controlled Trial' | 'Systematic Review' | 'In Vitro' | 'Clinical Observational';
}

export interface PurityScorecard {
  brandName: string;
  productName: string;
  overallScore: number; // 0-100
  acemannanPercentage: number;
  preservativeSafety: 'Clean' | 'Moderate Concern' | 'Synthetic/Harsh';
  processingMethod: 'Cold-Pressed Inner Fillet' | 'Spray-Dried Reconstituted Powder' | 'Heat-Treated Whole Leaf';
  iascCertified: boolean;
  verdict: string;
  affiliateUrl: string;
  pros: string[];
  cons: string[];
}

export interface TableOfContentItem {
  id: string;
  title: string;
  level: number;
}

export interface Article {
  slug: string;
  pillar: PillarId;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt: string;
  readTimeMinutes: number;
  authorId: string;
  reviewedById?: string;
  directAnswer: string; // 40-50 words optimized for AI Overviews / Google Snippets
  tableOfContents: TableOfContentItem[];
  htmlContent: string;
  scientificCitations: Citation[];
  faqs: FAQItem[];
  howToSteps?: HowToStep[];
  relatedSlugs: string[];
  purityScorecard?: PurityScorecard;
  badge?: string;
}

export interface Author {
  id: string;
  name: string;
  credentials: string;
  role: string;
  organization: string;
  alumniOf: string;
  orcidId?: string;
  linkedInUrl: string;
  medicalRegistryUrl?: string;
  bio: string;
  avatarUrl: string;
  isMedicalReviewer: boolean;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}
