import { PurityScorecard } from './types';

export const TESTED_PRODUCTS: Record<string, PurityScorecard> = {
  'seven-minerals-pure-gel': {
    brandName: 'Seven Minerals',
    productName: 'Organic Aloe Vera Gel (Inner Leaf Fillet Formulation)',
    overallScore: 96,
    acemannanPercentage: 99.1,
    preservativeSafety: 'Clean',
    processingMethod: 'Cold-Pressed Inner Fillet',
    iascCertified: true,
    verdict: 'Top formulation transparency benchmark. Declared 99.1% pure inner-fillet aloe stabilized with food-grade citric acid and potassium sorbate. Free from synthetic carbomers, acrylates, triethanolamine, and artificial colorants.',
    affiliateUrl: '/out/seven-minerals-aloe-gel',
    pros: [
      'Cold-pressed inner fillet base preserves bioactive polysaccharides',
      'Food-grade clean preservation (citric acid, potassium sorbate, ascorbic acid)',
      'Verified International Aloe Science Council (IASC) facility standards',
      'Non-sticky water-light skin absorption without synthetic polymer film'
    ],
    cons: [
      'Refrigeration recommended after opening due to gentle food-grade preservatives',
      'Naturally thinner viscosity than artificially thickened drugstore gels'
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
    verdict: 'High-quality clean formulation. USDA Organic certified raw material with a minimal addition of natural food-grade xanthan gum to provide smooth topical glide for facial application.',
    affiliateUrl: '/out/sky-organics-aloe-gel',
    pros: [
      'Certified USDA Organic aloe barbadensis leaf juice base',
      'Natural food-grade xanthan gum provides optimal glide for facial massage',
      'Fragrance-free, dye-free formulation with clean safety profile'
    ],
    cons: [
      'Subtle natural botanical aroma that dissipates quickly upon drying'
    ]
  },
  'generic-drugstore-blue-gel': {
    brandName: 'Typical Mass-Market Commercial Formulation',
    productName: 'After-Sun Synthetic Gel (Formulation Benchmark)',
    overallScore: 42,
    acemannanPercentage: 24.3,
    preservativeSafety: 'Synthetic/Harsh',
    processingMethod: 'Spray-Dried Reconstituted Powder',
    iascCertified: false,
    verdict: 'Fails botanical formulation transparency standards. Primary base is water reconstituted with spray-dried powder, heavy denatured alcohol (causing initial artificial cooling but subsequent barrier dehydration), synthetic carbomer thickeners, triethanolamine, and artificial colorants (FD&C Blue #1, Yellow #5).',
    affiliateUrl: '#',
    pros: [
      'Inexpensive drugstore retail price',
      'Immediate artificial cooling sensation caused by rapid alcohol evaporation'
    ],
    cons: [
      'High denatured alcohol content strips natural epidermal lipid barrier',
      'Synthetic petrochemical dyes (FD&C Blue #1, Yellow #5) carry contact dermatitis risk',
      'Contains carbomers and triethanolamine to create synthetic gel bounce without active aloe solids'
    ]
  }
};
