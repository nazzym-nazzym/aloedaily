import { PurityScorecard } from './types';

export const TESTED_PRODUCTS: Record<string, PurityScorecard> = {
  'seven-minerals-pure-gel': {
    brandName: 'Seven Minerals',
    productName: 'Organic Aloe Vera Gel (Unfiltered Inner Fillet)',
    overallScore: 96,
    acemannanPercentage: 99.1,
    preservativeSafety: 'Clean',
    processingMethod: 'Cold-Pressed Inner Fillet',
    iascCertified: true,
    verdict: 'Highest overall purity benchmark. Uses cold-pressed Texas aloe with food-grade citric acid and ascorbic acid preservatives. Zero synthetic carbomers or sticky thickeners.',
    affiliateUrl: '/out/seven-minerals-aloe-gel',
    pros: [
      'Cold-pressed inner fillet preserves bioactive acemannan',
      'Food-grade clean preservation (citric acid, potassium sorbate)',
      'Certified by International Aloe Science Council (IASC)',
      'Water-light absorption without pore-clogging film'
    ],
    cons: [
      'Requires refrigeration after opening (3-month shelf life)',
      'Slightly thinner consistency than drug-store synthetic gels'
    ]
  },
  'sky-organics-aloe-gel': {
    brandName: 'Sky Organics',
    productName: 'USDA Organic Aloe Vera Gel',
    overallScore: 91,
    acemannanPercentage: 98.4,
    preservativeSafety: 'Clean',
    processingMethod: 'Cold-Pressed Inner Fillet',
    iascCertified: true,
    verdict: 'Excellent clean formulation for facial use. Certified USDA Organic with minimal natural thickener (xanthan gum) for smooth topical glide.',
    affiliateUrl: '/out/sky-organics-aloe-gel',
    pros: [
      'USDA Organic certified raw material',
      'Natural food-grade xanthan gum gives optimal glide for micro-current devices',
      'Non-sticky, fragrance-free formula'
    ],
    cons: [
      'Mild natural botanical scent that fades quickly'
    ]
  },
  'generic-drugstore-blue-gel': {
    brandName: 'Commercial Drugstore Brand X',
    productName: 'After-Sun Soothing Aloe Vera Gel',
    overallScore: 42,
    acemannanPercentage: 24.3,
    preservativeSafety: 'Synthetic/Harsh',
    processingMethod: 'Spray-Dried Reconstituted Powder',
    iascCertified: false,
    verdict: 'Fails botanical purity test. Over 70% water, denatured alcohol, synthetic blue/yellow dyes, and triethanolamine thickeners. Can sting compromised sunburned skin.',
    affiliateUrl: '#',
    pros: [
      'Very cheap retail price',
      'Immediate artificial cooling effect due to alcohol evaporation'
    ],
    cons: [
      'High concentration of denatured alcohol dehydrates the skin barrier',
      'Artificial colorants (FD&C Blue #1, Yellow #5) pose dermatitis risk',
      'Reconstituted from degraded spray-dried powder lacking active acemannan'
    ]
  }
};
