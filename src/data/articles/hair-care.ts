import { Article } from '../types';
import { CLINICAL_STUDIES } from '../studies';

export const HAIR_CARE_ARTICLES: Article[] = [
  {
    slug: 'aloe-vera-for-hair-growth-science',
    pillar: 'hair-care',
    title: 'Does Aloe Vera Grow Hair? Follicular Science vs. Natural Myths',
    metaTitle: 'Does Aloe Vera Grow Hair? (Trichologist Scientific Review)',
    metaDescription: 'Can aloe vera stimulate hair follicles and reverse thinning? Discover the scientific truth behind proteolytic enzymes, scalp microcirculation, and follicular health.',
    publishedAt: '2025-01-18',
    updatedAt: '2025-02-14',
    readTimeMinutes: 7,
    authorId: 'sarah-jenkins',
    reviewedById: 'dr-elena-vance',
    badge: 'Trichology Review',
    directAnswer: 'Aloe vera does not directly trigger new anagen hair follicle growth the way minoxidil does. However, clinical trichology shows aloe significantly promotes hair retention and optimal growth conditions by breaking down dead keratinocyte buildup (via proteolytic enzymes), clearing follicular plugs, balancing scalp pH to 4.5–5.5, and calming perifollicular micro-inflammation.',
    tableOfContents: [
      { id: 'follicle-science', title: 'How Aloe Vera Affects the Hair Follicle', level: 2 },
      { id: 'proteolytic-enzymes', title: 'The Role of Proteolytic Enzymes on the Scalp', level: 2 },
      { id: 'sebum-and-dht', title: 'Aloe Vera, Sebum Build-Up, and DHT', level: 2 },
      { id: 'diy-scalp-protocol', title: 'The 30-Minute Scalp Pre-Wash Protocol', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
    ],
    htmlContent: `
      <section id="follicle-science">
        <h2>How Aloe Vera Affects the Hair Follicle</h2>
        <p>Healthy hair growth relies on an uncompromised follicular microenvironment. When hair follicles become constricted by oxidized sebum, Malassezia overgrowth, and follicular keratosis, hair shafts miniaturize prematurely. Aloe vera supplies over 75 active nutrients directly to the scalp stratum corneum, including inositol, choline, and essential amino acids.</p>
      </section>

      <section id="proteolytic-enzymes">
        <h2>The Role of Proteolytic Enzymes on the Scalp</h2>
        <p>The primary therapeutic agent in fresh aloe vera is <strong>proteolytic enzymes</strong>. These specialized enzymes digest dead protein matrices and desquamated corneocytes on the scalp surface without disrupting living cutaneous tissue. This gentle enzymatic exfoliation clears hair ostia, facilitating healthy shaft emergence.</p>
      </section>

      <section id="sebum-and-dht">
        <h2>Aloe Vera, Sebum Build-Up, and DHT</h2>
        <p>While aloe vera does not systemically inhibit 5-alpha reductase (the enzyme converting testosterone to DHT), topical application regulates scalp hyperseborrhea. By neutralizing excess sebum containing concentrated DHT residues around follicular openings, aloe preserves follicular longevity.</p>
      </section>

      <section id="diy-scalp-protocol">
        <h2>The 30-Minute Scalp Pre-Wash Protocol</h2>
        <p>Perform this scalp clarifying ritual twice weekly before your regular shampoo:</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['scalp-dermatitis-2022'],
      CLINICAL_STUDIES['skin-barrier-2023']
    ],
    howToSteps: [
      {
        name: 'Step 1: Section Dry Hair',
        text: 'Part hair into 4 quadrants using a wide-tooth comb to expose the scalp.'
      },
      {
        name: 'Step 2: Massage Fresh Gel',
        text: 'Apply 2 tablespoons of pure inner fillet gel directly to the scalp lines using fingertips, working in gentle circular motions for 3 minutes.'
      },
      {
        name: 'Step 3: 20-Minute Enzyme Dwell Time',
        text: 'Cover with a shower cap and allow the natural enzymes to break down buildup for 20 minutes before shampooing thoroughly.'
      }
    ],
    faqs: [
      {
        question: 'Can aloe vera regrow receding hairlines?',
        answer: 'Aloe vera cannot regenerate completely dormant or fibrosed hair follicles caused by advanced androgenetic alopecia. However, it can revive thinning hair compromised by scalp inflammation, traction, or chronic dandruff.'
      },
      {
        question: 'Can I leave aloe vera in my hair without washing?',
        answer: 'Yes, pure aloe vera mixed with water makes an excellent natural leave-in curl definer and detangler that adds shine without weighing hair down.'
      }
    ],
    relatedSlugs: ['aloe-vera-scalp-dandruff-treatment', 'aloe-vera-hair-porosity-guide', 'aloe-vera-overnight-face-mask']
  },
  {
    slug: 'aloe-vera-scalp-dandruff-treatment',
    pillar: 'hair-care',
    title: 'How to Use Aloe Vera for Dandruff & Itchy Scalp Relief',
    metaTitle: 'Aloe Vera for Dandruff & Itchy Scalp: Step-by-Step Treatment Guide',
    metaDescription: 'Eliminate scalp flaking and itchiness naturally. Learn how aloe vera combats Malassezia yeast, restores scalp pH, and calms chronic inflammation.',
    publishedAt: '2025-01-24',
    updatedAt: '2025-02-16',
    readTimeMinutes: 6,
    authorId: 'sarah-jenkins',
    reviewedById: 'dr-elena-vance',
    badge: 'Clinical Protocol',
    directAnswer: 'Aloe vera effectively treats dandruff and itchy scalp through a dual clinical mechanism: its natural saponins and cinnamic acid inhibit Malassezia yeast proliferation, while its natural pH of 4.5–5.5 re-acidifies the scalp acid mantle. Studies show aloe reduces scalp erythema and flaking by up to 58% when used as a 30-minute pre-shampoo mask.',
    tableOfContents: [
      { id: 'dandruff-cause', title: 'Why Scalps Flake: Dry Scalp vs. True Dandruff', level: 2 },
      { id: 'aloe-antimicrobial', title: 'Antifungal & Anti-Inflammatory Action', level: 2 },
      { id: 'treatment-guide', title: 'Step-by-Step Dandruff Treatment', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
    ],
    htmlContent: `
      <section id="dandruff-cause">
        <h2>Why Scalps Flake: Dry Scalp vs. True Dandruff</h2>
        <p>True dandruff (seborrheic dermatitis) is caused by an overpopulation of the lipophilic yeast <em>Malassezia globosa</em>. This microbe feeds on scalp sebum, producing irritating oleic acid as a byproduct. In sensitive scalps, oleic acid triggers accelerated epidermal turnover, causing clusters of immature, oily yellowish flakes.</p>
      </section>

      <section id="aloe-antimicrobial">
        <h2>Antifungal & Anti-Inflammatory Action</h2>
        <p>Aloe vera contains natural salicylic acid and anthraquinones that act as mild keratolytics. Unlike harsh chemical shampoos that strip the scalp barrier, aloe cools intense pruritus (itching) instantaneously through its bradykinase enzyme content.</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['scalp-dermatitis-2022']
    ],
    faqs: [
      {
        question: 'How fast does aloe vera relieve scalp itching?',
        answer: 'Aloe vera provides near-instantaneous relief from scalp itching upon contact due to its natural cooling evaporative effect and bradykinase anti-inflammatory enzymes.'
      },
      {
        question: 'Can I mix tea tree oil with aloe for dandruff?',
        answer: 'Yes! Mixing 3 drops of pure tea tree oil into 2 tablespoons of aloe vera gel creates a potent, dermatologist-favored synergistic antifungal treatment.'
      }
    ],
    relatedSlugs: ['aloe-vera-for-hair-growth-science', 'aloe-vera-fungal-acne']
  }
];
