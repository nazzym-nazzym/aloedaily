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
    bio: 'Dr. Elena Vance is a practicing dermatologist and clinical researcher who trained at Stanford. In her private clinic, she specializes in repairing compromised skin barriers and treating cosmetic contact dermatitis. She reviews all medical and ingestible content on AloeDaily to bridge the gap between ancient botanical tradition and modern clinical dermatology.',
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
    bio: 'Marcus Chen has spent over 14 years in greenhouses and field research propagating Aloe barbadensis Miller, Aloe arborescens, and arid xerophytes. A UC Davis graduate, Marcus is obsessed with gritty soil kinetics, shock-free leaf harvesting, and teaching houseplant enthusiasts how to stop accidentally drowning their succulents.',
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
    bio: 'Sarah Jenkins spent a decade in medical spa treatment rooms restoring sensitized, over-exfoliated skin before transitioning into cosmetic formulation research. At AloeDaily, she leads our laboratory product audits, testing commercial aloe brands for hidden plastics, synthetic dyes, and true acemannan bioactivity.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    isMedicalReviewer: false,
  }
};
