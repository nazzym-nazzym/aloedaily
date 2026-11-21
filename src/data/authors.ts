import { Author } from './types';

export const AUTHORS: Record<string, Author> = {
  'botanical-research-desk': {
    id: 'botanical-research-desk',
    name: 'AloeDaily Botanical Research Desk',
    credentials: 'Evidence-Based Phytotherapy & Botanical Dermatology Synthesis',
    role: 'Lead Scientific & Clinical Research Desk',
    organization: 'AloeDaily Botanical Sciences Publication',
    alumniOf: 'PubMed, JAAD, Burns & NTP Peer-Reviewed Literature Standards',
    bio: 'The AloeDaily Botanical Research Desk conducts systematic literature reviews and evidence synthesis across clinical dermatology, gastrointestinal health, and botanical phytochemistry. Our protocols are grounded exclusively in published, peer-reviewed clinical trials and toxicological safety monographs, including evaluations from the National Toxicology Program (NTP) and the International Aloe Science Council (IASC).',
    avatarUrl: '/assets/logo-96.webp',
    isMedicalReviewer: true,
  },
  'horticulture-desk': {
    id: 'horticulture-desk',
    name: 'AloeDaily Horticulture & Cultivation Desk',
    credentials: 'Arid Xerophyte Physiology & Botanical Cultivation Standards',
    role: 'Senior Botanical Horticulture & Cultivation Desk',
    organization: 'AloeDaily Botanical Horticulture Division',
    alumniOf: 'University Agricultural Extension & Succulent Biology Standards',
    bio: 'The AloeDaily Horticulture Desk specializes in xerophyte physiology, Aloe barbadensis Miller propagation, soil particle drainage kinetics, and shock-free leaf harvesting methods. Our guidelines translate university agricultural extension data and botanical literature into practical, non-destructive home cultivation and harvesting protocols.',
    avatarUrl: '/assets/logo-96.webp',
    isMedicalReviewer: false,
  },
  'formulation-desk': {
    id: 'formulation-desk',
    name: 'AloeDaily Ingredient & Formulation Audit Desk',
    credentials: 'Cosmetic Chemistry Evaluation & INCI Transparency Auditing',
    role: 'Cosmetic Ingredient & Formulation Evaluation Desk',
    organization: 'AloeDaily Consumer Safety & Ingredient Auditing Division',
    alumniOf: 'International Aloe Science Council (IASC) & CIR Safety Standards',
    bio: 'The AloeDaily Formulation Audit Desk evaluates retail aloe vera products through comprehensive INCI ingredient statement auditing, IASC certification verification, and cosmetic chemistry analysis. We scrutinize commercial formulations to detect synthetic carbomers, harsh preservatives, and artificial dyes, providing consumers with 100% independent formulation transparency.',
    avatarUrl: '/assets/logo-96.webp',
    isMedicalReviewer: false,
  },
};

// Aliases ensuring legacy author IDs resolve to authentic editorial desks
AUTHORS['dr-elena-vance'] = AUTHORS['botanical-research-desk'];
AUTHORS['marcus-chen'] = AUTHORS['horticulture-desk'];
AUTHORS['sarah-jenkins'] = AUTHORS['formulation-desk'];
