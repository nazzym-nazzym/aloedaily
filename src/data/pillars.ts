import { Pillar, PillarId } from './types';

export const PILLARS: Record<PillarId, Pillar> = {
  skincare: {
    id: 'skincare',
    slug: 'skincare',
    title: 'Facial Skincare & Dermatological Science',
    shortTitle: 'Skincare',
    tagline: 'Evidence-based protocols for acne, barrier repair, retinol buffering, and nocturnal hydration.',
    metaDescription: 'Discover clinical dermatologist-reviewed aloe vera skincare protocols. Learn how to mix aloe with retinol, treat fungal acne, heal sunburns, and repair damaged moisture barriers.',
    heroHeadline: 'Aloe Vera for Skin: Clinical Botanical Skincare Protocols',
    headKeyword: 'aloe vera for skin',
    searchVolume: '110,000/mo',
    accentColor: '#15803d',
    iconSvg: `<svg width="24" height="24" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>`
  },
  'hair-care': {
    id: 'hair-care',
    slug: 'hair-care',
    title: 'Hair, Scalp & Follicular Health',
    shortTitle: 'Hair Care',
    tagline: 'Scientific treatments for scalp microbiome balance, Malassezia dandruff, and low-porosity hydration.',
    metaDescription: 'Explore the science of aloe vera for hair growth, seborrheic dermatitis, dandruff soothing, low-porosity curl hydration, and DIY pre-poo formulations.',
    heroHeadline: 'Aloe Vera for Hair & Scalp: Follicle Restoration & Biome Health',
    headKeyword: 'aloe vera for hair',
    searchVolume: '90,000/mo',
    accentColor: '#047857',
    iconSvg: `<svg width="24" height="24" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
  },
  health: {
    id: 'health',
    slug: 'health',
    title: 'Ingestible Wellness, Digestion & Aloin Chemistry',
    shortTitle: 'Health & Juice',
    tagline: 'Toxicology, safe aloin removal protocols, digestive mucosal support, and daily intake standards.',
    metaDescription: 'Complete scientific guide to drinking aloe vera juice safely. Understand aloin toxicity, gastric acid reflux relief, decolorization chemistry, and use our interactive dosage calculator.',
    heroHeadline: 'Aloe Vera Juice Health Science: Digestion, Safety & Ingestible Botany',
    headKeyword: 'aloe vera juice health science',
    searchVolume: '135,000/mo',
    accentColor: '#0f766e',
    iconSvg: `<svg width="24" height="24" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`
  },
  cultivation: {
    id: 'cultivation',
    slug: 'cultivation',
    title: 'Plant Botany, Cultivation & Harvesting',
    shortTitle: 'Plant Care',
    tagline: 'Indoor succulent horticulture, pup propagation, urgent root rot rescue, and shock-free harvesting.',
    metaDescription: 'Master Aloe barbadensis Miller care indoors and outdoors. Step-by-step guides for harvesting single leaves, curing root rot, repotting pups, and formulating gritty succulent soil.',
    heroHeadline: 'Aloe Vera Plant Care: Cultivate, Propagate, and Harvest with Zero Stress',
    headKeyword: 'aloe vera plant care',
    searchVolume: '165,000/mo',
    accentColor: '#166534',
    iconSvg: `<svg width="24" height="24" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>`
  },
  audits: {
    id: 'audits',
    slug: 'audits',
    title: 'Product Audits & The AloeDaily Purity Index™',
    shortTitle: 'Product Audits',
    tagline: 'Independent laboratory analysis, acemannan testing, fake gel identification, and clean buyer guides.',
    metaDescription: 'Unbiased retail aloe gel evaluations. We test acemannan concentration, synthetic thickeners, and preservatives across popular brands. Use our home iodine purity test.',
    heroHeadline: 'Best Pure Aloe Vera Gel Audits: Lab Testing & Purity Verification',
    headKeyword: 'best pure aloe vera gel',
    searchVolume: '49,500/mo',
    accentColor: '#365314',
    iconSvg: `<svg width="24" height="24" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>`
  }
};
