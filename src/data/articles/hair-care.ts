import { Article } from '../types';
import { CLINICAL_STUDIES } from '../studies';
import { HAIR_CARE_SCALP_ARTICLES } from './hair-care-scalp';
import { HAIR_CARE_GROWTH_ARTICLES } from './hair-care-growth';
import { HAIR_CARE_TYPES_ARTICLES } from './hair-care-types';
import { HAIR_CARE_TREATMENTS_ARTICLES } from './hair-care-treatments';

const CORE_HAIR_CARE_ARTICLES: Article[] = [
  {
    slug: 'aloe-vera-for-hair-growth-science',
    pillar: 'hair-care',
    title: 'Does Aloe Vera Actually Grow Hair? An Honest Trichology & Scalp Health Breakdown',
    metaTitle: 'Does Aloe Vera Grow Hair? An Honest Trichology Breakdown',
    metaDescription: 'Can aloe vera reverse hair thinning or is it just another viral myth? Our editorial research desk breaks down the real science of scalp enzyme exfoliation.',
    publishedAt: '2025-01-18',
    updatedAt: '2025-02-20',
    readTimeMinutes: 7,
    authorId: 'formulation-desk',
    reviewedById: 'botanical-research-desk',
    badge: 'Trichology Review',
    directAnswer: 'Aloe vera does not directly awaken dead or dormant follicles like pharmaceutical minoxidil does. However, it dramatically improves hair retention and follicular health by acting as a gentle enzymatic scalp peel. Its proteolytic enzymes dissolve dead skin cell buildup and hardened sebum plugs that suffocate hair roots, while its natural 4.5–5.5 pH restores the scalp\'s protective acid mantle.',
    tableOfContents: [
      { id: 'viral-myths', title: 'The Viral Internet Myths vs. Biological Reality', level: 2 },
      { id: 'how-it-helps-follicles', title: 'What Aloe Actually Does for Your Scalp Environment', level: 2 },
      { id: 'proteolytic-enzymes', title: 'The Secret Weapon: Nature\'s Proteolytic Enzymes', level: 2 },
      { id: 'curly-hair-advantage', title: 'Why Textured & Low-Porosity Hair Loves Aloe', level: 2 },
      { id: 'the-pre-poo-ritual', title: 'Our 20-Minute Pre-Shampoo Scalp Ritual', level: 2 },
      { id: 'faqs', title: 'Common Questions About Hair Growth & Aloe', level: 2 }
    ],
    htmlContent: `
      <section id="viral-myths">
        <h2>The Viral Internet Myths vs. Biological Reality</h2>
        <p>A persistent claim across social media suggests that topical application of raw aloe leaves can stimulate rapid new hair growth within days. In clinical trichology, however, <strong>botanical topicals cannot reawaken fully fibrosed or genetically miniaturized hair follicles</strong>.</p>
        <p>If a follicle has permanently ceased functioning due to advanced androgenetic alopecia, pharmaceutical intervention is required. However, when excessive shedding and hair thinning stem from chronic scalp inflammation, perifollicular erythema, or heavy sebum and silicone buildup, aloe vera provides biologically validated benefits for optimizing the scalp microenvironment.</p>
      </section>

      <section id="how-it-helps-follicles">
        <h2>What Aloe Actually Does for Your Scalp Environment</h2>
        <p>Hair fiber emergence and shaft integrity depend directly on the health of the follicular ostia. When the scalp is dry, inflamed, or occluded by oxidized sebum and insoluble styling polymers, emerging fibers are compromised.</p>
        <p>Aloe vera addresses this through three specific mechanisms:</p>
        <ul>
          <li><strong>Non-Lipidic Hydration:</strong> Unlike heavy oils (such as castor or coconut oil) that occlude follicles, require aggressive surfactant cleansing to remove, and feed lipophilic Malassezia yeasts, aloe is completely water-soluble and rinses away without residue.</li>
          <li><strong>Acid Mantle Realignment:</strong> Healthy scalp epidermis maintains an acidic surface pH between 4.5 and 5.5. Alkaline cleansers disrupt this barrier, swelling cuticle scales. Pure aloe inherently matches this physiological pH, promoting cuticle alignment and reducing microbial vulnerability.</li>
          <li><strong>Anti-Inflammatory Calming:</strong> Bradykinase enzymes and natural acemannan polysaccharides modulate localized cutaneous irritation and soothe burning or pruritic scalp sensations without stinging.</li>
        </ul>
      </section>

      <section id="proteolytic-enzymes">
        <h2>The Secret Weapon: Nature's Proteolytic Enzymes</h2>
        <p>A primary therapeutic component of fresh inner-leaf aloe is its concentration of <strong>proteolytic enzymes</strong>. These enzymes hydrolyze dead, desquamated proteinaceous keratin debris on the scalp surface without damaging viable stratum corneum cells.</p>
        <p>Rather than using harsh physical salt or walnut scrubs that risk micro-lacerations and hair shaft breakage, enzymatic exfoliation dissolves sebum-keratin plugs around the follicular infundibulum gently and evenly.</p>
      </section>

      <section id="curly-hair-advantage">
        <h2>Why Textured & Low-Porosity Hair Loves Aloe</h2>
        <p>For textured, coily, and low-porosity hair types, heavy conditioning butters often accumulate on tight, compact cuticles, causing stiffness and hygral fatigue.</p>
        <p>Aloe vera's polysaccharide chains provide lightweight, slip-enhancing film-forming properties that seal hydration inside the fiber cortex without causing protein buildup or flaking.</p>
      </section>

      <section id="the-pre-poo-ritual">
        <h2>Our 20-Minute Pre-Shampoo Scalp Ritual</h2>
        <p>In clinical trichology, successful hair retention starts with a clear follicular ostium. Traditional heavy pre-poo oils (like castor or coconut oil) often suffocate the scalp and demand harsh clarifying sulfates to remove, leaving fragile lengths brittle. A pure aloe pre-wash ritual provides water-phase enzymatic exfoliation without lipid residue.</p>
        <p>Divide dry, unwashed hair into four clean quadrants using a tail comb. Dispense 2 to 3 tablespoons of cold-pressed, <a href="/audits/seven-minerals-aloe-vera-gel-lab-audit-review/">unthickened aloe vera gel</a> directly along the exposed scalp partings. Massage for 3 full minutes using the fleshy pads of your fingertips in small circular motions to stimulate perifollicular microcirculation. Cover your hair with a reusable shower cap for 20 minutes; trapped scalp body heat activates aloe's natural proteolytic enzymes, dissolving stubborn sebum plugs and desquamated dandruff flakes before you rinse clean with a sulfate-free shampoo.</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['seborrheic-dermatitis-vardy-1999'],
      CLINICAL_STUDIES['dermatology-review-surjushe-2008']
    ],
    howToSteps: [
      {
        name: 'Step 1: Section Dry Hair',
        text: 'Part dry, unwashed hair into four clean quadrants using fingertips or a wide-tooth tail comb.'
      },
      {
        name: 'Step 2: Massage Clear Aloe Gel Direct to Roots',
        text: 'Dispense 2 tablespoons of pure, cold-pressed aloe vera gel (or fresh, drained inner fillet). Apply directly along the exposed scalp partings and massage in gentle circular motions for 3 minutes using the pads of your fingers, never your fingernails.'
      },
      {
        name: 'Step 3: Cover & Let Enzymes Work for 20 Minutes',
        text: 'Cover with a clean shower cap. Trapped body heat optimizes enzymatic breakdown of sebum buildup. After 20 minutes, wash and rinse thoroughly with a gentle sulfate-free cleanser.'
      }
    ],
    faqs: [
      {
        question: 'Can I leave aloe vera in my hair as a leave-in conditioner?',
        answer: 'Yes. Combining 2 tablespoons of pure aloe gel with half a cup of distilled water in a spray mister provides lightweight curl definition and moisture retention without crunchiness or heavy residue.'
      },
      {
        question: 'Can aloe vera cause protein overload in hair?',
        answer: 'No. Aloe vera consists of over 98% water and complex polysaccharide carbohydrates (glucomannans), containing only trace amino acids. It functions purely as a humectant and will not cause brittle protein buildup.'
      }
    ],
    relatedSlugs: ['aloe-vera-scalp-dandruff-treatment', 'aloe-vera-fungal-acne', 'aloe-vera-overnight-face-mask']
  },
  {
    slug: 'aloe-vera-scalp-dandruff-treatment',
    pillar: 'hair-care',
    title: 'How to Use Aloe Vera for Dandruff & Itchy Scalp Relief (Without Harsh Chemicals)',
    metaTitle: 'Aloe Vera for Dandruff & Itchy Scalp: Evidence-Based Treatment Protocol',
    metaDescription: 'Discover how purified aloe vera gel calms scalp pruritus and inhibits Malassezia yeast proliferation, backed by double-blind clinical dermatology trials.',
    publishedAt: '2025-01-24',
    updatedAt: '2025-02-20',
    readTimeMinutes: 6,
    authorId: 'formulation-desk',
    reviewedById: 'botanical-research-desk',
    badge: 'Clinical Protocol',
    directAnswer: 'In double-blind clinical trials (Vardy et al.), an aloe vera emulsion significantly reduced scalp flaking, pruritus, and erythema in patients suffering from seborrheic dermatitis. Aloe works because it supplies natural anti-inflammatory sterols and proteolytic enzymes that loosen adherent scales, while starving lipophilic Malassezia yeast of the heavy plant oils they require to multiply.',
    tableOfContents: [
      { id: 'dandruff-vs-dry-scalp', title: 'Dandruff vs. Dry Scalp: Diagnosing Your Flakes', level: 2 },
      { id: 'malassezia-mechanism', title: 'The Malassezia Mechanism: Why Oils Make It Worse', level: 2 },
      { id: 'clinical-proof', title: 'The Clinical Evidence Behind Aloe for Flaking', level: 2 },
      { id: 'the-soothing-scalp-soak', title: 'The Soothing Scalp Soak Protocol', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
    ],
    htmlContent: `
      <section id="dandruff-vs-dry-scalp">
        <h2>Dandruff vs. Dry Scalp: Diagnosing Your Flakes</h2>
        <p>Before treating your scalp, you must distinguish between simple xerosis (dry scalp) and true pityriasis capitis (dandruff/seborrheic dermatitis):</p>
        <ul>
          <li><strong>Dry Scalp:</strong> Characterized by small, white, powdery flakes that shed easily onto dark clothing. Caused by dry indoor air, dehydration, or harsh alkaline detergents. Responds readily to simple humectants.</li>
          <li><strong>Dandruff / Seborrheic Dermatitis:</strong> Characterized by larger, oily, yellowish scales that cling tenaciously to the hair roots and are accompanied by intense pruritus (itching) and perifollicular erythema (redness). Driven by an inflammatory reaction to the metabolic byproducts of <em>Malassezia</em> yeast.</li>
        </ul>
      </section>

      <section id="malassezia-mechanism">
        <h2>The Malassezia Mechanism: Why Oils Make It Worse</h2>
        <p>A widespread and damaging home remedy is massaging warm olive, coconut, or castor oil into an itchy, flaking scalp. While this temporarily conceals flakes by plastering them down, it exacerbates the underlying pathology.</p>
        <p><em>Malassezia</em> yeasts are lipid-dependent organisms that lack fatty acid synthase. They feed directly on medium-to-long chain fatty acids (C11–C24). Applying plant oils gives the fungal colony an abundant food source, prompting rapid yeast proliferation and an intensified inflammatory response.</p>
        <p>Pure aloe vera provides the exact opposite profile: high-volume water-phase humectancy with zero C11–C24 lipids. It delivers intense cooling hydration and loosens adherent scales without feeding the microbial drivers of dandruff.</p>
      </section>

      <section id="clinical-proof">
        <h2>The Clinical Evidence Behind Aloe for Flaking</h2>
        <p>In a landmark double-blind, placebo-controlled study conducted by Vardy et al. (1999), 44 patients with seborrheic dermatitis applied either a topical aloe vera emulsion or a placebo vehicle twice daily. Patients using the aloe vera treatment demonstrated statistically significant improvements in flaking, redness, and scalp surface area affected, with zero reported contact dermatitis reactions.</p>
      </section>

      <section id="the-soothing-scalp-soak">
        <h2>The Soothing Scalp Soak Protocol</h2>
        <p>When an acute seborrheic flare-up strikes, aggressive mechanical scrubbing with fingernails or salt scrubs only damages the fragile scalp barrier, causing micro-lacerations that bleed and trigger worse secondary inflammation. The secret to breaking the itch-scratch cycle is chemical loosening and thermal cooling.</p>
        <p>Part your hair into narrow 1-inch rows across the entire head and apply chilled, pure decolorized aloe vera gel directly to the affected plaques. The cooling sensation is immediate, providing neurosensory relief from burning pruritus within 60 seconds. Let the gel dwell for 30 minutes under a shower cap while natural plant sterols and bradykinase calm microvascular erythema. Rinse thoroughly with lukewarm water, and follow with our <a href="/hair-care/aloe-vera-tea-tree-oil-dandruff-rinse/">antifungal tea tree rinse</a> for stubborn Malassezia overgrowth.</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['seborrheic-dermatitis-vardy-1999'],
      CLINICAL_STUDIES['dermatology-review-surjushe-2008']
    ],
    howToSteps: [
      {
        name: 'Step 1: Section Dry Hair Thoroughly',
        text: 'Part dry, unwashed hair into narrow 1-inch rows across the entire scalp using a tail comb.'
      },
      {
        name: 'Step 2: Apply Pure Aloe Directly to the Scalp Surface',
        text: 'Apply 3 tablespoons of cold-pressed, decolorized aloe vera gel directly to exposed scalp skin using a nozzle applicator or clean fingertips. Gently press into the scalp without aggressive fingernail scratching.'
      },
      {
        name: 'Step 3: Allow 30 Minutes Dwell Time & Cleanse',
        text: 'Allow the gel to dwell on the scalp for 30 minutes to permit proteolytic enzymes to loosen scaling. Rinse thoroughly with lukewarm water, then wash with a gentle, sulfate-free balancing shampoo.'
      }
    ],
    faqs: [
      {
        question: 'Can I leave aloe vera on my dandruff overnight?',
        answer: 'Yes. Allowing pure aloe vera gel to dry on the scalp overnight before washing in the morning is safe and provides extended soothing contact time. Ensure no synthetic fragrances or drying alcohols are present in the formula.'
      },
      {
        question: 'Can I add tea tree oil to aloe vera for stubborn dandruff?',
        answer: 'Yes. Adding 2 to 3 drops of pure tea tree essential oil per 2 tablespoons of aloe gel provides synergistic antifungal support against Malassezia. Always patch test first, as essential oils can irritate sensitized scalps.'
      }
    ],
    relatedSlugs: ['aloe-vera-for-hair-growth-science', 'aloe-vera-fungal-acne', 'best-pure-aloe-vera-gels-reviewed']
  }
];

export const HAIR_CARE_ARTICLES: Article[] = [
  ...CORE_HAIR_CARE_ARTICLES,
  ...HAIR_CARE_SCALP_ARTICLES,
  ...HAIR_CARE_GROWTH_ARTICLES,
  ...HAIR_CARE_TYPES_ARTICLES,
  ...HAIR_CARE_TREATMENTS_ARTICLES,
];
