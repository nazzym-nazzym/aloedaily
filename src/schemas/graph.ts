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
  pageType?: 'WebPage' | 'AboutPage' | 'CollectionPage' | 'ProfilePage' | 'ContactPage';
  itemListElements?: { name: string; url: string; description?: string }[];
}) {
  const { article, breadcrumbs, canonicalUrl, pageTitle, pageDescription, pageType = 'WebPage', itemListElements } = options;

  const organization = {
    '@type': 'Organization',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    publishingPrinciples: `${SITE_CONFIG.url}/editorial-policy/`,
    correctionsPolicy: `${SITE_CONFIG.url}/editorial-policy/#corrections`,
    logo: {
      '@type': 'ImageObject',
      url: SITE_CONFIG.logoAbsolute,
      width: 1200,
      height: 630,
    },
    foundingDate: `${SITE_CONFIG.foundedYear}`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: SITE_CONFIG.adminEmail,
        contactType: 'editorial',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        email: SITE_CONFIG.mediaEmail,
        contactType: 'press inquiry',
        availableLanguage: 'English',
      },
    ],
    knowsAbout: [
      'Aloe barbadensis Miller',
      'Botanical Dermatology',
      'Aloin Toxicology & Decolorization',
      'Succulent Horticulture & Cultivation',
      'Cosmetic Ingredient Auditing',
    ],
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
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const graph: any[] = [organization, website];

  // Add Breadcrumb
  if (breadcrumbs.length > 0) {
    graph.push(generateBreadcrumbSchema(breadcrumbs, canonicalUrl));
  }

  // If this is an article page, build rich YMYL / E-E-A-T entity graph
  if (article) {
    const author = AUTHORS[article.authorId];
    const reviewer = article.reviewedById ? AUTHORS[article.reviewedById] : undefined;

    if (author) {
      graph.push({
        '@type': 'Person',
        '@id': `${SITE_CONFIG.url}/authors/${author.id}/#person`,
        url: `${SITE_CONFIG.url}/authors/${author.id}/`,
        name: author.name,
        jobTitle: author.role,
        image: author.avatarUrl,
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
        url: `${SITE_CONFIG.url}/authors/${reviewer.id}/`,
        name: reviewer.name,
        jobTitle: reviewer.role,
        image: reviewer.avatarUrl,
        worksFor: { '@id': `${SITE_CONFIG.url}/#organization` },
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

    // 1. WebPage entity
    const webPageEntity: any = {
      '@type': isYMYL ? 'MedicalWebPage' : 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: pageTitle,
      description: pageDescription,
      isPartOf: { '@id': `${SITE_CONFIG.url}/#website` },
      publisher: { '@id': `${SITE_CONFIG.url}/#organization` },
      breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
      inLanguage: 'en-US',
    };

    if (isYMYL) {
      webPageEntity.medicalAudience = {
        '@type': 'MedicalAudience',
        audienceType: 'Patient',
      };
      webPageEntity.about = {
        '@type': 'MedicalEntity',
        name: 'Aloe Vera Clinical Dermatology and Topical Therapeutics',
      };
    }
    graph.push(webPageEntity);

    // 2. Article / MedicalWebPage Article Entity
    const articleEntity: any = {
      '@type': isYMYL ? 'MedicalWebPage' : 'Article',
      '@id': `${canonicalUrl}#article`,
      url: canonicalUrl,
      name: article.title,
      headline: article.title,
      description: article.metaDescription,
      datePublished: `${article.publishedAt}T08:00:00+00:00`,
      dateModified: `${article.updatedAt}T10:00:00+00:00`,
      mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
      isPartOf: { '@id': `${SITE_CONFIG.url}/#website` },
      publisher: { '@id': `${SITE_CONFIG.url}/#organization` },
      image: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/assets/cards/${article.slug}.svg`,
        width: 1200,
        height: 630,
      },
      author: author ? { '@id': `${SITE_CONFIG.url}/authors/${author.id}/#person` } : undefined,
      inLanguage: 'en-US',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.direct-answer-box', 'h1'],
      },
    };

    if (reviewer && reviewer.id !== author?.id) {
      articleEntity.reviewedBy = { '@id': `${SITE_CONFIG.url}/authors/${reviewer.id}/#person` };
    }

    if (isYMYL) {
      articleEntity.medicalAudience = {
        '@type': 'MedicalAudience',
        audienceType: 'Patient',
      };
      articleEntity.about = {
        '@type': 'MedicalEntity',
        name: 'Aloe Vera Clinical Dermatology and Topical Therapeutics',
      };
    }

    graph.push(articleEntity);

    // HowTo schema
    if (article.howToSteps && article.howToSteps.length > 0) {
      graph.push(
        generateHowToSchema(
          article.title,
          article.howToSteps,
          article.howToTotalTime,
          article.howToTools,
          article.howToSupplies
        )
      );
    }

    // FAQ schema
    if (article.faqs && article.faqs.length > 0) {
      graph.push(generateFAQSchema(article.faqs));
    }

    // Product schema for commercial reviews with full rich-snippet compliance
    if (article.purityScorecard) {
      const sc = article.purityScorecard;
      const targetOfferUrl = sc.affiliateUrl.startsWith('http')
        ? sc.affiliateUrl
        : `${SITE_CONFIG.url}${sc.affiliateUrl}`;

      graph.push({
        '@type': 'Product',
        '@id': `${canonicalUrl}#product`,
        name: sc.productName,
        image: SITE_CONFIG.logoAbsolute,
        description: `${sc.productName} by ${sc.brandName} - Laboratory purity audit and acemannan bioactivity testing by AloeDaily.`,
        brand: {
          '@type': 'Brand',
          name: sc.brandName,
        },
        offers: {
          '@type': 'Offer',
          url: targetOfferUrl,
          priceCurrency: 'USD',
          price: '19.99',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: sc.brandName,
          },
        },
        review: {
          '@type': 'Review',
          name: `${sc.productName} Lab Purity Audit & Verdict`,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: (sc.overallScore / 20).toFixed(1),
            bestRating: '5',
            worstRating: '1',
          },
          author: { '@id': `${SITE_CONFIG.url}/authors/${author?.id || 'sarah-jenkins'}/#person` },
          publisher: { '@id': `${SITE_CONFIG.url}/#organization` },
          datePublished: `${article.publishedAt}T08:00:00+00:00`,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: (sc.overallScore / 20).toFixed(1),
          reviewCount: 1,
          bestRating: '5',
          worstRating: '1',
        },
      });
    }
  } else {
    // Non-article page (Home, Hub, About, Profile, Contact, Legal)
    graph.push({
      '@type': pageType,
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: pageTitle,
      description: pageDescription,
      isPartOf: { '@id': `${SITE_CONFIG.url}/#website` },
      publisher: { '@id': `${SITE_CONFIG.url}/#organization` },
      breadcrumb: breadcrumbs.length > 0 ? { '@id': `${canonicalUrl}#breadcrumb` } : undefined,
      inLanguage: 'en-US',
    });
    // ItemList schema on CollectionPage (pillar hub pages) for rich cluster indexing
    if (pageType === 'CollectionPage' && itemListElements && itemListElements.length > 0) {
      graph.push({
        '@type': 'ItemList',
        '@id': `${canonicalUrl}#itemlist`,
        name: pageTitle,
        description: pageDescription,
        numberOfItems: itemListElements.length,
        itemListElement: itemListElements.map((item, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: item.name,
          url: item.url,
          description: item.description,
        })),
      });
    }
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
