export interface NavItem {
  label: string;
  href: string;
  description?: string;
  isPillar?: boolean;
}

export const MAIN_NAV: NavItem[] = [
  { label: 'Skincare', href: '/skincare/', description: 'Clinical & botanical facial skincare protocols' },
  { label: 'Hair & Scalp', href: '/hair-care/', description: 'Follicular restoration & scalp microbiome health' },
  { label: 'Health & Juice', href: '/health/', description: 'Digestion, gut lining & aloin removal chemistry' },
  { label: 'Plant Care', href: '/cultivation/', description: 'Aloe harvesting, repotting & botanical cultivation' },
  { label: 'Product Audits', href: '/audits/', description: 'The AloeDaily Purity Index™ & retail gel lab testing' },
];

export const TOOL_NAV: NavItem[] = [
  { label: 'Aloin Flush Timer', href: '/health/how-to-remove-aloin-from-aloe-leaf/' },
  { label: 'Juice Dosage Calculator', href: '/health/aloe-vera-juice-dosage-calculator/' },
  { label: 'Plant Diagnostic Wizard', href: '/cultivation/fix-soft-mushy-aloe-leaves/' },
  { label: 'Retail Gel Iodine Test', href: '/audits/how-to-spot-fake-aloe-vera-gel/' },
];

export const FOOTER_NAV = {
  pillars: MAIN_NAV,
  tools: TOOL_NAV,
  company: [
    { label: 'About AloeDaily', href: '/about/' },
    { label: 'Editorial & Media Contact', href: '/contact/' },
    { label: 'Editorial & Fact-Checking Policy', href: '/editorial-policy/' },
    { label: 'Medical & Botanical Review Board', href: '/review-board/' },
    { label: 'Lab Purity Standards', href: '/audits/' },
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Terms of Service', href: '/terms/' },
    { label: 'RSS Context Feed', href: '/feed.xml' },
  ]
};
