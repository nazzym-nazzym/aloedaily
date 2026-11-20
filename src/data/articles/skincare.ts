import { Article } from '../types';
import { CLINICAL_STUDIES } from '../studies';

export const SKINCARE_ARTICLES: Article[] = [
  {
    slug: 'aloe-vera-overnight-face-mask',
    pillar: 'skincare',
    title: 'Can You Leave Aloe Vera on Your Face Overnight? Dermatologist Safety Guide',
    metaTitle: 'Can You Leave Aloe Vera on Face Overnight? (Dermatologist Review)',
    metaDescription: 'Is sleeping with aloe vera on your face safe? Our board-certified dermatologist explains overnight benefits, pore-clogging risks, patch-testing, and application steps.',
    publishedAt: '2025-01-15',
    updatedAt: '2025-02-10',
    readTimeMinutes: 6,
    authorId: 'sarah-jenkins',
    reviewedById: 'dr-elena-vance',
    badge: 'Dermatologist Reviewed',
    directAnswer: 'Yes, leaving pure aloe vera gel on your face overnight is safe and effective for normal, oily, and dry skin types. Aloe is non-comedogenic (rating 0) and creates a hydrating protective film. However, individuals with latex allergies or reactive eczema must patch test first, and commercial gels containing synthetic thickeners or alcohol should be avoided.',
    tableOfContents: [
      { id: 'direct-answer', title: 'Quick Verdict: Is Overnight Aloe Safe?', level: 2 },
      { id: 'dermatologist-benefits', title: 'What Happens to Your Skin Overnight', level: 2 },
      { id: 'pores-and-breakouts', title: 'Will Aloe Vera Clog Your Pores?', level: 2 },
      { id: 'fresh-vs-bottled', title: 'Fresh Leaf vs. Store-Bought Gel Overnight', level: 2 },
      { id: 'step-by-step', title: 'Step-by-Step Overnight Mask Protocol', level: 2 },
      { id: 'clinical-evidence', title: 'Clinical Dermatological Evidence', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 },
    ],
    htmlContent: `
      <section id="direct-answer">
        <h2>Quick Verdict: Is Overnight Aloe Safe?</h2>
        <p>Leaving pure aloe vera gel on your skin overnight works as a natural sleeping pack. During the nocturnal circadian repair window (between 11:00 PM and 4:00 AM), epidermal cell division peaks, and transepidermal water loss (TEWL) accelerates. Aloe vera acts as an organic humectant, pulling ambient moisture into the stratum corneum without suffocating skin pores.</p>
      </section>

      <section id="dermatologist-benefits">
        <h2>What Happens to Your Skin Overnight</h2>
        <p>When left on the face for 6 to 8 hours, pure aloe vera delivers sustained doses of <strong>acemannan</strong> (a complex polysaccharide), zinc, and antioxidant vitamins C and E. Clinical research shows this prolonged contact allows anti-inflammatory gibberellins to downregulate erythema and support keratinocyte migration.</p>
        <ul>
          <li><strong>Intensive Transepidermal Hydration:</strong> Binds water into dehydrated skin cells without heavy, occlusive lipids.</li>
          <li><strong>Erythema & Redness Reduction:</strong> Inhibits the cyclooxygenase pathway to soothe active inflammatory acne and rosacea flares.</li>
          <li><strong>Accelerated Collagen Synthesis:</strong> Stimulates dermal fibroblasts to produce procollagen type I.</li>
        </ul>
      </section>

      <section id="pores-and-breakouts">
        <h2>Will Aloe Vera Clog Your Pores?</h2>
        <p>Pure aloe vera has a <strong>comedogenic rating of 0</strong>, meaning it cannot physically block sebaceous ducts or cause comedones. However, people frequently experience breakouts from "aloe vera" products due to two critical pitfalls:</p>
        <ol>
          <li><strong>Commercial Additives:</strong> Cheap commercial gels are frequently formulated with synthetic polymers (carbomers), triethanolamine, or heavy film-formers that trap dirt and dead cells.</li>
          <li><strong>Unrefined Aloin Contamination:</strong> Using raw leaf gel without draining the yellow latex (aloin) causes contact dermatitis and irritant micro-pustules that are mistaken for acne breakouts.</li>
        </ol>
      </section>

      <section id="fresh-vs-bottled">
        <h2>Fresh Leaf vs. Store-Bought Gel Overnight</h2>
        <div class="overflow-x-auto my-6">
          <table class="w-full text-left border-collapse border border-emerald-200">
            <thead>
              <tr class="bg-emerald-50 text-emerald-900">
                <th class="p-3 border border-emerald-200">Attribute</th>
                <th class="p-3 border border-emerald-200">Fresh Raw Leaf Fillet</th>
                <th class="p-3 border border-emerald-200">Certified Pure Store Gel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Acemannan Bioactivity</td>
                <td class="p-3 border border-emerald-200 text-emerald-700">100% (Native State)</td>
                <td class="p-3 border border-emerald-200">90–98% (If cold-pressed)</td>
              </tr>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Aloin Risk</td>
                <td class="p-3 border border-emerald-200 text-amber-700">Requires 20-min aloin drain</td>
                <td class="p-3 border border-emerald-200 text-emerald-700">Zero (Decolorized)</td>
              </tr>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Overnight Texture</td>
                <td class="p-3 border border-emerald-200">Slightly watery; tightens as it dries</td>
                <td class="p-3 border border-emerald-200">Silky slip; absorbs cleanly</td>
              </tr>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Preservative Risk</td>
                <td class="p-3 border border-emerald-200 text-emerald-700">Zero chemicals (Use within 24h)</td>
                <td class="p-3 border border-emerald-200">Citric acid / potassium sorbate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="step-by-step">
        <h2>Step-by-Step Overnight Mask Protocol</h2>
        <p>Follow this exact 3-step dermatologist application sequence before bedtime:</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['skin-barrier-2023'],
      CLINICAL_STUDIES['burn-wound-healing-2021']
    ],
    howToSteps: [
      {
        name: 'Step 1: Double Cleanse and Tone',
        text: 'Wash your face with a gentle, non-stripping pH-balanced cleanser to remove sebum, pollutants, and sunscreen. Pat gently with a clean towel, leaving skin slightly damp.'
      },
      {
        name: 'Step 2: Apply Active Serums (Optional Buffer)',
        text: 'If using hyaluronic acid or niacinamide, apply them now. If using prescription retinol, apply a pea-sized amount and wait 10 minutes before aloe application.'
      },
      {
        name: 'Step 3: Smooth Thin Uniform Aloe Veil',
        text: 'Dispense a nickel-sized amount of pure, decolorized aloe gel. Smooth across the face and neck in upward strokes, avoiding direct contact with eyelid margins. Allow 5 minutes to set before resting on your pillow.'
      }
    ],
    faqs: [
      {
        question: 'Should I wash off aloe vera in the morning?',
        answer: 'Yes. In the morning, rinse your face with lukewarm water to remove any dry surface film and metabolic toxins excreted by the skin overnight, then follow with your standard SPF moisturizer.'
      },
      {
        question: 'Can I sleep with aloe vera if I have cystic acne?',
        answer: 'Yes. Pure aloe vera contains salicylic acid compounds and anti-inflammatory bradykinase that reduce swelling and redness around cystic lesions without drying out surrounding tissue.'
      },
      {
        question: 'Why does my face feel tight when aloe dries?',
        answer: 'Aloe gel consists of over 98% water. As the water evaporates, the natural polysaccharides form a light, protective microfilm on the stratum corneum that contracts slightly. If tightness feels uncomfortable, mist with pure rosewater or layer a light squalane oil over the gel.'
      }
    ],
    relatedSlugs: ['aloe-vera-and-retinol-layering', 'aloe-vera-fungal-acne', 'raw-aloe-vs-commercial-gel-skin']
  },
  {
    slug: 'aloe-vera-and-retinol-layering',
    pillar: 'skincare',
    title: 'Can You Mix Aloe Vera with Retinol? (Timing, Order & Buffer Method)',
    metaTitle: 'Aloe Vera and Retinol: Layering Order & Dermatologist Buffer Guide',
    metaDescription: 'Learn how to buffer retinol with pure aloe vera to eliminate peeling, redness, and retinoid dermatitis without reducing Vitamin A cellular efficacy.',
    publishedAt: '2025-01-20',
    updatedAt: '2025-02-12',
    readTimeMinutes: 7,
    authorId: 'sarah-jenkins',
    reviewedById: 'dr-elena-vance',
    badge: 'Clinical Protocol',
    directAnswer: 'Yes, aloe vera can be combined with retinol and is one of the most effective natural buffers against retinoid dermatitis. Applying aloe vera before or after retinol soothes transepidermal moisture loss and counteracts inflammation without interfering with retinoic acid receptor binding. For sensitive skin, the "sandwich method" (aloe-retinol-aloe) is recommended.',
    tableOfContents: [
      { id: 'the-science', title: 'Why Aloe Vera and Retinol Are Synergistic', level: 2 },
      { id: 'layering-rules', title: 'Application Order: Before, After, or Mixed?', level: 2 },
      { id: 'sandwich-method', title: 'The Dermatologist Aloe-Retinol Sandwich Method', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
    ],
    htmlContent: `
      <section id="the-science">
        <h2>Why Aloe Vera and Retinol Are Synergistic</h2>
        <p>Retinoids (retinol, retinaldehyde, and prescription tretinoin) are the gold standard in cosmetic dermatology for cellular turnover and collagen synthesis. However, up to 70% of new users experience <strong>retinoid dermatitis</strong>—characterized by peeling, erythema, and barrier disruption caused by temporary upregulation of pro-inflammatory cytokines.</p>
        <p>Pure aloe vera counteracts this specific reaction through high concentrations of <strong>sterols (campesterol, β-sitosterol)</strong> and polysaccharides. When applied in conjunction with Vitamin A, aloe soothes micro-inflammation without altering the pH required for retinol enzymatic conversion.</p>
      </section>

      <section id="layering-rules">
        <h2>Application Order: Before, After, or Mixed?</h2>
        <p>Never mix retinol and aloe vera directly in the palm of your hand before application. Doing so can destabilize the retinol emulsion and cause uneven drug dispersion across facial zones. Instead, follow sequential layering:</p>
        <ul>
          <li><strong>For Oily / Resilient Skin:</strong> Cleanse &rarr; Retinol &rarr; Wait 10 minutes &rarr; Pure Aloe Vera Gel &rarr; Night Cream.</li>
          <li><strong>For Sensitive / Dry Skin:</strong> Cleanse &rarr; Thin Aloe Vera Layer &rarr; Retinol &rarr; Barrier Cream.</li>
        </ul>
      </section>

      <section id="sandwich-method">
        <h2>The Dermatologist Aloe-Retinol Sandwich Method</h2>
        <p>If you are initiating prescription tretinoin (0.025% or 0.05%), dermatologists recommend the "Aloe Sandwich Technique" during the first 4 weeks of retinization:</p>
        <ol>
          <li>Apply a sheer layer of cold-pressed aloe vera gel to clean skin.</li>
          <li>Allow 3 minutes to dry completely (dry skin minimizes deep retinoid irritation spikes).</li>
          <li>Apply a pea-sized amount of retinol across forehead, cheeks, and chin.</li>
          <li>Seal with a second light layer of aloe vera mixed with two drops of squalane oil.</li>
        </ol>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['skin-barrier-2023']
    ],
    faqs: [
      {
        question: 'Does aloe vera make retinol less effective?',
        answer: 'No. Retinol penetrates the lipophilic stratum corneum to reach epidermal receptors. Aloe vera is a water-soluble humectant that hydrates surface cells and reduces barrier irritation without inhibiting cellular uptake.'
      },
      {
        question: 'Can I use aloe vera with Tretinoin?',
        answer: 'Yes, pure decolorized aloe gel is highly recommended by dermatologists for patients starting prescription tretinoin to minimize flaking and redness during the retinization phase.'
      }
    ],
    relatedSlugs: ['aloe-vera-overnight-face-mask', 'aloe-vera-fungal-acne', 'aloe-vera-for-skin-barrier-repair']
  },
  {
    slug: 'aloe-vera-fungal-acne',
    pillar: 'skincare',
    title: 'Is Aloe Vera Safe for Fungal Acne (Malassezia Folliculitis)?',
    metaTitle: 'Is Aloe Vera Safe for Fungal Acne? Malassezia Ingredient Breakdown',
    metaDescription: 'Discover why pure aloe vera is 100% fungal-acne safe. Learn which commercial aloe gels trigger Malassezia folliculitis and how to choose safe formulas.',
    publishedAt: '2025-01-28',
    updatedAt: '2025-02-15',
    readTimeMinutes: 5,
    authorId: 'sarah-jenkins',
    reviewedById: 'dr-elena-vance',
    badge: 'YMYL Scientific Review',
    directAnswer: 'Yes, 100% pure aloe vera is completely safe for fungal acne (Malassezia folliculitis). Pure aloe gel contains zero lipids, fatty acids, or esters with carbon chain lengths C11–C24, which feed Malassezia yeast. Furthermore, aloe contains natural saponins and cinnamic acid that exhibit mild antifungal properties. However, commercial gels formulated with polysorbates, oils, or fatty acids must be strictly avoided.',
    tableOfContents: [
      { id: 'malassezia-science', title: 'The Biology of Fungal Acne & Lipids', level: 2 },
      { id: 'pure-aloe-audit', title: 'Why Pure Aloe Vera Does Not Feed Yeast', level: 2 },
      { id: 'commercial-triggers', title: 'Hidden Fungal Acne Triggers in Store Aloe', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
    ],
    htmlContent: `
      <section id="malassezia-science">
        <h2>The Biology of Fungal Acne & Lipids</h2>
        <p><strong>Malassezia folliculitis</strong> (frequently misdiagnosed as bacterial acne) is an opportunistic fungal infection of the hair follicle caused by Malassezia yeasts. Unlike bacterial acne (Cutibacterium acnes), Malassezia is lipid-dependent: it lacks the enzymes required to synthesize its own fatty acids and must consume exogenous lipids with carbon chain lengths between <strong>C11 and C24</strong>.</p>
      </section>

      <section id="pure-aloe-audit">
        <h2>Why Pure Aloe Vera Does Not Feed Yeast</h2>
        <p>Pure aloe vera inner leaf fillet is virtually lipid-free. Its molecular structure is composed of:</p>
        <ul>
          <li><strong>Water (98.5–99%):</strong> Provides pure hydration without lipids.</li>
          <li><strong>Acemannan & Polysaccharides:</strong> Carbohydrates that Malassezia cannot utilize as a metabolic lipid energy source.</li>
          <li><strong>Natural Antifungal Phytochemicals:</strong> Lupeol, salicylic acid, urea nitrogen, cinnamonic acid, and sulfur, which naturally inhibit fungal spore colonization.</li>
        </ul>
      </section>

      <section id="commercial-triggers">
        <h2>Hidden Fungal Acne Triggers in Store Aloe</h2>
        <p>While fresh aloe gel is safe, up to 60% of commercial drugstore aloe gels contain fungal-acne triggers added for consistency or fragrance. Inspect product ingredient lists for:</p>
        <ul>
          <li><strong>Polysorbate 20 / Polysorbate 80:</strong> Severe Malassezia triggers.</li>
          <li><strong>Hydrogenated Castor Oil (PEG-40):</strong> Esters that feed fungal flares.</li>
          <li><strong>Isopropyl Myristate / Palmitate:</strong> Rapid fungal exacerbators.</li>
        </ul>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['scalp-dermatitis-2022'],
      CLINICAL_STUDIES['skin-barrier-2023']
    ],
    faqs: [
      {
        question: 'Can aloe vera cure fungal acne on its own?',
        answer: 'Aloe vera will not eradicate an established Malassezia infection on its own; antifungal treatments (such as ketoconazole or zinc pyrithione) are required. However, pure aloe provides safe, soothing hydration without feeding the fungal colony.'
      },
      {
        question: 'Does fresh raw aloe vera cause fungal acne?',
        answer: 'No, pure inner gel from a raw leaf contains no lipids that feed yeast. However, be sure to wash your hands and sterilize cutting knives to prevent introducing airborne yeasts or bacteria into the raw fillet.'
      }
    ],
    relatedSlugs: ['aloe-vera-overnight-face-mask', 'aloe-vera-and-retinol-layering', 'how-to-spot-fake-aloe-vera-gel']
  }
];
