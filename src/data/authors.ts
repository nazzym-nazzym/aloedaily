import { Author } from './types';

export const AUTHORS: Record<string, Author> = {
  'dr-elena-vance': {
    id: 'dr-elena-vance',
    name: 'Dr. Elena Vance, MD, FAAD',
    credentials: 'MD, FAAD (Board-Certified Dermatologist)',
    role: 'Chief Medical & Dermatological Reviewer',
    organization: 'American Academy of Dermatology (Fellow)',
    alumniOf: 'Stanford University School of Medicine',
    orcidId: '0000-0002-8912-3490',
    linkedInUrl: 'https://linkedin.com/in/elena-vance-md',
    medicalRegistryUrl: 'https://npiregistry.cms.hhs.gov/provider-view/1922039102',
    bio: 'Dr. Elena Vance is a board-certified dermatologist and phytomedicine researcher specializing in inflammatory skin barriers, cosmetic contact dermatitis, and botanical active stabilization in topical dermatology.',
    avatarUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
    isMedicalReviewer: true,
  },
  'marcus-chen': {
    id: 'marcus-chen',
    name: 'Marcus Chen, MSc',
    credentials: 'MSc in Plant Biology & Horticultural Science',
    role: 'Senior Botanical & Cultivation Specialist',
    organization: 'International Succulent & Xerophyte Research Society',
    alumniOf: 'University of California, Davis (Department of Plant Sciences)',
    orcidId: '0000-0001-6743-9912',
    linkedInUrl: 'https://linkedin.com/in/marcus-chen-botany',
    bio: 'Marcus Chen has over 14 years of research experience cultivating and propagating Aloe barbadensis Miller, Aloe arborescens, and desert xerophytes. He specializes in soil drainage kinetics, leaf acemannan yield, and aloin latex extraction protocols.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    isMedicalReviewer: false,
  },
  'sarah-jenkins': {
    id: 'sarah-jenkins',
    name: 'Sarah Jenkins, L.E.',
    credentials: 'Licensed Aesthetician & Clean Cosmetic Formulator',
    role: 'Lead Skincare Editor & Product Auditor',
    organization: 'Society of Cosmetic Chemists (Associate Member)',
    alumniOf: 'UCLA Cosmetic Chemistry Extension',
    linkedInUrl: 'https://linkedin.com/in/sarah-jenkins-skincare',
    bio: 'Sarah Jenkins is a clinical aesthetician and cosmetic ingredient investigator. She leads laboratory label audits and blind viscosity benchmarks for commercial aloe products at AloeDaily.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    isMedicalReviewer: false,
  }
};
