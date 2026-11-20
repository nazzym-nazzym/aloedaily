import { Article } from '../types';
import { CLINICAL_STUDIES } from '../studies';

export const HEALTH_ARTICLES: Article[] = [
  {
    slug: 'how-to-remove-aloin-from-aloe-leaf',
    pillar: 'health',
    title: 'How to Remove Yellow Aloin from Fresh Aloe Leaves (Complete Safety Guide)',
    metaTitle: 'How to Remove Aloin from Fresh Aloe Vera Leaf (Safety Guide)',
    metaDescription: 'Step-by-step chemical safety guide for draining yellow aloin latex from fresh aloe leaves before eating or applying to skin to prevent abdominal cramps and toxic irritation.',
    publishedAt: '2025-01-10',
    updatedAt: '2025-02-17',
    readTimeMinutes: 8,
    authorId: 'marcus-chen',
    reviewedById: 'dr-elena-vance',
    badge: 'Toxicology & Safety',
    directAnswer: 'To remove yellow aloin latex from a fresh aloe leaf: 1) Trim the leaf base and stand it upright in a glass for 15 minutes to let gravity drain the bitter yellow sap; 2) Slice off the serrated spiky edges; 3) Fillet the green rind away from the clear inner gel; and 4) Submerge the clear gel cubes in cold water for 20 minutes, rinsing until the water runs 100% clear. This eliminates toxic anthraquinones and harsh laxative effects.',
    tableOfContents: [
      { id: 'what-is-aloin', title: 'What is Aloin and Why is It Toxic?', level: 2 },
      { id: 'aloin-vs-gel', title: 'Aloin (Latex) vs. Clear Inner Gel Fillet', level: 2 },
      { id: 'step-by-step-drain', title: 'The 4-Step Professional Draining Protocol', level: 2 },
      { id: 'safety-checklist', title: 'Aloin Flush Safety Checklist', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
    ],
    htmlContent: `
      <section id="what-is-aloin">
        <h2>What is Aloin and Why is It Toxic?</h2>
        <p>Directly beneath the tough green rind of an aloe vera leaf lies the pericyclic tubules containing a bitter, pungent yellow-brown liquid called <strong>aloin (aloe latex)</strong>. Chemically, aloin is a mixture of anthraquinone glycosides (primarily aloin A and aloin B).</p>
        <p>In the human body, unrefined aloin functions as a violent stimulant laxative. It triggers peristaltic contractions in the large intestine that can cause severe abdominal cramping, electrolyte depletion (especially hypokalemia), and renal distress. The FDA banned over-the-counter laxatives containing aloin in 2002 due to safety concerns. Proper removal is essential before ingestion or skin use.</p>
      </section>

      <section id="aloin-vs-gel">
        <h2>Aloin (Latex) vs. Clear Inner Gel Fillet</h2>
        <p>It is vital to distinguish between the two distinct physiological substances inside an aloe leaf:</p>
        <ul>
          <li><strong>The Yellow Latex (Aloin):</strong> Excreted from vascular bundles beneath the skin; pungent, yellow, extremely bitter, laxative, and potentially cytotoxic.</li>
          <li><strong>The Clear Inner Fillet:</strong> 99% pure water and acemannan polysaccharides; odorless, gelatinous, anti-inflammatory, and safe for consumption when aloin-free.</li>
        </ul>
      </section>

      <section id="step-by-step-drain">
        <h2>The 4-Step Professional Draining Protocol</h2>
        <p>Follow our laboratory botanical procedure to purify raw aloe leaves at home:</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['aloin-toxicity-safety-2022']
    ],
    howToSteps: [
      {
        name: 'Step 1: Vertical Gravity Drainage (15 Minutes)',
        text: 'Cut 1 inch off the bottom stem of the freshly harvested leaf. Stand the leaf upright in a tall glass or measuring cup tilted at a 45-degree angle. Allow the yellow latex to drip out naturally for 15 minutes.'
      },
      {
        name: 'Step 2: Trim Spiky Margins',
        text: 'Lay the leaf flat on a clean cutting board. Slice off the top 2 inches (the tip contains little usable gel) and slice away the serrated spines along both sides.'
      },
      {
        name: 'Step 3: Peel Green Rind',
        text: 'Slide a sharp flexible fillet knife just beneath the green skin to remove the top rind. Flip the leaf over and remove the bottom rind, leaving only the clear glass-like gel fillet.'
      },
      {
        name: 'Step 4: The 20-Minute Water Flush',
        text: 'Dice the gel fillet into 1-inch cubes. Place in a bowl of cold filtered water for 20 minutes. Swirl every 5 minutes. Drain and rinse with fresh water until the drainage water has zero yellow tint and zero bitter taste.'
      }
    ],
    faqs: [
      {
        question: 'How do I know if all the aloin is gone?',
        answer: 'Perform the taste test on a tiny corner of a gel cube. Aloin is intensely bitter and medicinal. If the gel tastes neutral and mild like cucumber or water, all aloin has been removed.'
      },
      {
        question: 'Does boiling aloe remove aloin?',
        answer: 'Boiling does not destroy aloin anthraquinones; in fact, heating degrades beneficial acemannan polysaccharides. Cold-water soaking and physical gravity draining are the only effective home removal methods.'
      }
    ],
    relatedSlugs: ['what-happens-drinking-aloe-vera-daily', 'aloe-vera-juice-dosage-calculator', 'how-to-harvest-aloe-leaf-without-killing-plant']
  },
  {
    slug: 'what-happens-drinking-aloe-vera-daily',
    pillar: 'health',
    title: 'What Happens to Your Body When You Drink Aloe Vera Daily?',
    metaTitle: 'What Happens When You Drink Aloe Vera Daily? (Doctor Review)',
    metaDescription: 'Clinical review of daily aloe vera juice consumption. Discover effects on gut microbiome, acid reflux, blood sugar, and safe long-term dosage limits.',
    publishedAt: '2025-01-22',
    updatedAt: '2025-02-18',
    readTimeMinutes: 7,
    authorId: 'dr-elena-vance',
    reviewedById: 'dr-elena-vance',
    badge: 'Clinical Review',
    directAnswer: 'Drinking 2 to 4 ounces of purified, decolorized aloe vera juice daily provides clinically documented gastrointestinal benefits. It coats the esophageal mucosa to soothe acid reflux, provides prebiotic nourishment for Bifidobacterium species in the gut, and aids mild fasting glycemic control. However, drinking unpurified whole-leaf juice with aloin can trigger severe electrolyte imbalances and is strictly contraindicated.',
    tableOfContents: [
      { id: 'gut-benefits', title: 'Day 1 to 30: Effects on Digestion & Gut Lining', level: 2 },
      { id: 'acid-reflux', title: 'Acid Reflux & GERD Mucosal Protection', level: 2 },
      { id: 'blood-sugar', title: 'Glycemic Regulation & Insulin Sensitivity', level: 2 },
      { id: 'safe-daily-limits', title: 'How Much is Safe to Drink Daily?', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
    ],
    htmlContent: `
      <section id="gut-benefits">
        <h2>Day 1 to 30: Effects on Digestion & Gut Lining</h2>
        <p>Within the gastrointestinal tract, the high molecular weight polysaccharides in purified aloe vera act as an osmotic protective shield. Unlike antacids that artificially suppress essential gastric hydrochloric acid, aloe vera polysaccharides coat inflamed mucosa, blunting peptic irritation while preserving digestive enzyme potency.</p>
      </section>

      <section id="acid-reflux">
        <h2>Acid Reflux & GERD Mucosal Protection</h2>
        <p>A landmark clinical trial published in the <em>Journal of Traditional Chinese Medicine</em> demonstrated that daily consumption of 10ml of standardized decolorized aloe vera syrup significantly reduced the frequency of heartburn, regurgitation, dysphagia, and nausea over a 4-week period without negative side effects.</p>
      </section>

      <section id="safe-daily-limits">
        <h2>How Much is Safe to Drink Daily?</h2>
        <p>The standard clinical therapeutic dose is <strong>2 to 4 fluid ounces (60–120 ml)</strong> per day of certified purified inner-leaf juice containing less than 10 ppm aloin. Always take it 20 minutes before breakfast on an empty stomach for maximum mucosal adhesion.</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['gerd-gastric-mucosa-2020'],
      CLINICAL_STUDIES['aloin-toxicity-safety-2022']
    ],
    faqs: [
      {
        question: 'Can pregnant women drink aloe vera juice?',
        answer: 'No. Aloe vera ingestion is strictly contraindicated during pregnancy due to the risk of uterine contractions and pelvic vascular congestion.'
      },
      {
        question: 'Does aloe vera juice interact with medications?',
        answer: 'Yes. Aloe can lower blood glucose levels and potassium levels, meaning it may interact with insulin, oral hypoglycemics, digoxin, and diuretic medications. Always consult your physician first.'
      }
    ],
    relatedSlugs: ['how-to-remove-aloin-from-aloe-leaf', 'aloe-vera-juice-dosage-calculator']
  },
  {
    slug: 'aloe-vera-juice-dosage-calculator',
    pillar: 'health',
    title: 'Daily Aloe Vera Juice Dosage Calculator & Safety Guidelines',
    metaTitle: 'Aloe Vera Juice Dosage Calculator: Safe Daily Intake Guide',
    metaDescription: 'Use our interactive aloe vera juice dosage calculator to determine your exact daily ounces based on weight, concentration, and health goals.',
    publishedAt: '2025-01-30',
    updatedAt: '2025-02-18',
    readTimeMinutes: 5,
    authorId: 'dr-elena-vance',
    reviewedById: 'dr-elena-vance',
    badge: 'Interactive Health Tool',
    directAnswer: 'The safe daily dosage of certified decolorized aloe vera juice for healthy adults is 1 to 2 ounces (30–60 ml) for general wellness maintenance, or up to 4 ounces (120 ml) split into two servings for acute digestive comfort. Doses exceeding 8 ounces per day provide no added benefits and increase gastric transit speed unnecessarily.',
    tableOfContents: [
      { id: 'interactive-tool', title: 'Interactive Daily Dosage Calculator', level: 2 },
      { id: 'dosage-factors', title: 'Key Factors Determining Your Dosage', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
    ],
    htmlContent: `
      <section id="interactive-tool">
        <h2>Interactive Daily Dosage Calculator</h2>
        <p>Use our clinical botanical calculator below to compute your recommended daily intake and safety limits:</p>
        <div id="dosage-calc-container" class="my-6"></div>
      </section>

      <section id="dosage-factors">
        <h2>Key Factors Determining Your Dosage</h2>
        <ul>
          <li><strong>Fillet vs. Whole Leaf:</strong> Inner fillet contains trace aloin (<10ppm) and allows up to 4 oz daily. Whole leaf requires strictly capped intake.</li>
          <li><strong>Concentration Strength:</strong> Single strength juice (1X) differs vastly from 10X or 40X reconstituted concentrates. Always check the bottle label.</li>
        </ul>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['gerd-gastric-mucosa-2020'],
      CLINICAL_STUDIES['aloin-toxicity-safety-2022']
    ],
    faqs: [
      {
        question: 'Can I take aloe vera juice in the morning and evening?',
        answer: 'Yes, splitting your dose into 2 ounces 20 minutes before breakfast and 2 ounces before dinner is the most clinically effective schedule for digestive reflux management.'
      }
    ],
    relatedSlugs: ['how-to-remove-aloin-from-aloe-leaf', 'what-happens-drinking-aloe-vera-daily']
  }
];
