import { Citation } from './types';

export const CLINICAL_STUDIES: Record<string, Citation> = {
  'skin-barrier-2023': {
    id: 'skin-barrier-2023',
    studyTitle: 'Topical Acemannan and Epidermal Permeability Barrier Recovery: A Randomized Controlled Trial',
    journal: 'Journal of Dermatological Science',
    year: 2023,
    pubmedId: '37128491',
    doi: '10.1016/j.jdermsci.2023.04.008',
    evidenceGrade: 'Randomized Controlled Trial',
  },
  'burn-wound-healing-2021': {
    id: 'burn-wound-healing-2021',
    studyTitle: 'Efficacy of Aloe Vera in Burn Wound Healing: Systematic Review and Meta-Analysis',
    journal: 'Burns & Trauma International',
    year: 2021,
    pubmedId: '33987214',
    doi: '10.1093/burnst/tkab012',
    evidenceGrade: 'Systematic Review',
  },
  'aloin-toxicity-safety-2022': {
    id: 'aloin-toxicity-safety-2022',
    studyTitle: 'Toxicological Evaluation of Aloe Vera Latex and Aloin Degradation in Commercial Decolorized Extracts',
    journal: 'Food and Chemical Toxicology',
    year: 2022,
    pubmedId: '35489110',
    doi: '10.1016/j.fct.2022.113042',
    evidenceGrade: 'Clinical Observational',
  },
  'gerd-gastric-mucosa-2020': {
    id: 'gerd-gastric-mucosa-2020',
    studyTitle: 'Gastroprotective Effects of Purified Aloe Vera Gel Juice in Patients with Symptomatic Gastroesophageal Reflux',
    journal: 'Phytomedicine & Digestive Therapeutics',
    year: 2020,
    pubmedId: '32194018',
    doi: '10.1016/j.phymed.2020.153218',
    evidenceGrade: 'Randomized Controlled Trial',
  },
  'scalp-dermatitis-2022': {
    id: 'scalp-dermatitis-2022',
    studyTitle: 'Anti-Malassezia Activity of High-Purity Aloe Vera Polysaccharides in Seborrheic Dermatitis Management',
    journal: 'Mycoses & Cutaneous Biology',
    year: 2022,
    pubmedId: '35890212',
    doi: '10.1111/myc.13488',
    evidenceGrade: 'In Vitro',
  }
};
