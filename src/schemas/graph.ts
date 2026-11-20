import { Article, BreadcrumbItem } from '../data/types';
import { AUTHORS } from '../data/authors';
import { SITE_CONFIG } from '../config/site';
import { generateBreadcrumbSchema } from './breadcrumbs';
import { generateHowToSchema, generateFAQSchema } from './howto';

export function buildPageSchemaGraph(options: {
  article?: Article;
  breadcrumbs: BreadcrumbItem[];
  canonicalUrl: string;
  pageTitle: string;
  pageDescription: string;
  pageType?: 'WebPage' | 'AboutPage' | 'CollectionPage';
}) {
  const { article, breadcrumbs, canonicalUrl, pageTitle, pageDescription, pageType = 'WebPage' } = options;

  const organization = {
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      url: SITE_CONFIG.logoAbsolute,
    },
    sameAs: [
      SITE_CONFIG.social.pinterest,
      SITE_CONFIG.social.youtube,
      SITE_CONFIG.social.twitter,
    ],
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.url}/#website`,
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: { '@id': `${SITE_CONFIG.url}/#organization` },
  };

  const graph: any[] = [organization, website];

  // Add Breadcrumb
  if (breadcrumbs.length > 0) {
    graph.push(generateBreadcrumbSchema(breadcrumbs));
  }

  // If this is an article page, build rich YMYL / E-E-A-T entity graph
  if (article) {
    const author = AUTHORS[article.authorId];
    const reviewer = article.reviewedById ? AUTHORS[article.reviewedById] : undefined;

    if (author) {
      graph.push({
        '@type': 'Person',
        '@id': `${SITE_CONFIG.url}/authors/${author.id}/#person`,
        name: author.name,
        jobTitle: author.role,
        worksFor: { '@id': `${SITE_CONFIG.url}/#organization` },
        alumniOf: author.alumniOf,
        description: author.bio,
        sameAs: [
          author.linkedInUrl,
          ...(author.orcidId ? [`https://orcid.org/${author.orcidId}`] : []),
        ],
      });
    }

    if (reviewer && reviewer.id !== author?.id) {
      graph.push({
        '@type': 'Person',
        '@id': `${SITE_CONFIG.url}/authors/${reviewer.id}/#person`,
        name: reviewer.name,
        jobTitle: reviewer.role,
        alumniOf: reviewer.alumniOf,
        description: reviewer.bio,
        sameAs: [
          reviewer.linkedInUrl,
          ...(reviewer.orcidId ? [`https://orcid.org/${reviewer.orcidId}`] : []),
          ...(reviewer.medicalRegistryUrl ? [reviewer.medicalRegistryUrl] : []),
        ],
      });
    }

    // Determine if topic is YMYL (Skincare, Health, Hair) -> use MedicalWebPage
    const isYMYL = ['skincare', 'health', 'hair-care'].includes(article.pillar);

    const articleEntity: any = {
      '@type': isYMYL ? 'MedicalWebPage' : 'Article',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: article.title,
      headline: article.title,
      description: article.metaDescription,
      datePublished: `${article.publishedAt}T08:00:00+00:00`,
      dateModified: `${article.updatedAt}T10:00:00+00:00`,
      isPartOf: { '@id': `${SITE_CONFIG.url}/#website` },
      publisher: { '@id': `${SITE_CONFIG.url}/#organization` },
      author: author ? { '@id': `${SITE_CONFIG.url}/authors/${author.id}/#person` } : undefined,
      inLanguage: 'en-US',
      mainEntityOfPage: canonicalUrl,
    };

    if (reviewer) {
      articleEntity.reviewedBy = { '@id': `${SITE_CONFIG.url}/authors/${reviewer.id}/#person` };
    }

    if (isYMYL) {
      articleEntity.medicalAudience = {
        '@type': 'MedicalAudience',
        audienceType: 'Patient',
      };
      articleEntity.aspect = 'Treatment';
    }

    graph.push(articleEntity);

    // HowTo schema
    if (article.howToSteps && article.howToSteps.length > 0) {
      graph.push(generateHowToSchema(article.title, article.howToSteps));
    }

    // FAQ schema
    if (article.faqs && article.faqs.length > 0) {
      graph.push(generateFAQSchema(article.faqs));
    }

    // Product schema for commercial reviews
    if (article.purityScorecard) {
      graph.push({
        '@type': 'Product',
        name: article.purityScorecard.productName,
        brand: {
          '@type': 'Brand',
          name: article.purityScorecard.brandName,
        },
        review: {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: (article.purityScorecard.overallScore / 20).toFixed(1),
            bestRating: '5',
          },
          author: { '@id': `${SITE_CONFIG.url}/authors/${author?.id || 'sarah-jenkins'}/#person` },
        },
      });
    }
  } else {
    // Non-article page (Home, Hub, About)
    graph.push({
      '@type': pageType,
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: pageTitle,
      description: pageDescription,
      isPartOf: { '@id': `${SITE_CONFIG.url}/#website` },
      publisher: { '@id': `${SITE_CONFIG.url}/#organization` },
      inLanguage: 'en-US',
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
