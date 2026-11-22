import { Article } from '../types';
import { CLINICAL_STUDIES } from '../studies';
import { SKINCARE_ACNE_ARTICLES } from './skincare-acne';
import { SKINCARE_BARRIER_ARTICLES } from './skincare-barrier';
import { SKINCARE_SUN_ARTICLES } from './skincare-sun';
import { SKINCARE_ADVANCED_ARTICLES } from './skincare-advanced';

const CORE_SKINCARE_ARTICLES: Article[] = [
  {
    slug: 'aloe-vera-overnight-face-mask',
    pillar: 'skincare',
    title: 'Can You Leave Aloe Vera on Your Face Overnight? Dermatological Evidence & Safety Protocol',
    metaTitle: 'Can You Leave Aloe Vera on Face Overnight? Dermatological Safety Guide',
    metaDescription: 'Is sleeping with aloe vera on your face safe? We examine nocturnal transepidermal water loss (TEWL), pore-clogging ratings, tightening films, and application routines.',
    publishedAt: '2025-01-15',
    updatedAt: '2025-02-20',
    readTimeMinutes: 7,
    authorId: 'botanical-research-desk',
    reviewedById: 'formulation-desk',
    badge: 'Clinical Protocol',
    directAnswer: 'Yes, leaving pure aloe vera gel on your face overnight is safe and deeply hydrating for most skin types. Because genuine aloe has a comedogenic rating of 0, it cannot clog pores. However, as the water evaporates, natural polysaccharides create a tight surface film. Layering two drops of squalane oil over the gel prevents this tightness, while anyone with sensitive skin must ensure yellow aloin latex is completely removed first.',
    tableOfContents: [
      { id: 'quick-verdict', title: 'The Scientific Verdict on Sleeping with Aloe', level: 2 },
      { id: 'what-happens-at-night', title: 'Nocturnal Skin Physiology & Moisture Retention', level: 2 },
      { id: 'why-does-it-feel-tight', title: 'Why Does Aloe Feel Tight & Stiff When It Dries?', level: 2 },
      { id: 'the-pore-clogging-myth', title: 'The Breakout Trap: Why Some Skin Reacts', level: 2 },
      { id: 'fresh-leaf-vs-bottle', title: 'Raw Leaf Fillet vs. Decolorized Commercial Gel', level: 2 },
      { id: 'the-nighttime-ritual', title: 'The 3-Step Bedtime Application Protocol', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 },
    ],
    htmlContent: `
      <section id="quick-verdict">
        <h2>The Scientific Verdict on Sleeping with Aloe</h2>
        <p>In dermatological skincare research, leaving pure aloe vera gel on the skin overnight functions as an effective, biocompatible humectant compress. When formulated correctly, pure inner-fillet aloe provides sustained hydration without pore-clogging lipids or occlusive waxes. However, improper application—particularly using raw leaves containing unremoved <em>aloin</em> latex or commercial formulas adulterated with synthetic dyes and triethanolamine—can cause acute skin irritation.</p>
        <p>Understanding the physiological mechanism of aloe requires analyzing how its polysaccharide matrix behaves as moisture evaporates during sleep.</p>
      </section>

      <section id="what-happens-at-night">
        <h2>Nocturnal Skin Physiology & Moisture Retention</h2>
        <p>During the nocturnal circadian cycle, epidermal skin temperature elevates, cell turnover accelerates, and <strong>transepidermal water loss (TEWL)</strong> reaches its peak. In clinical terms, the skin barrier loses moisture into the surrounding air at a significantly higher rate during nocturnal hours than during the daytime.</p>
        <p>When pure inner-fillet aloe vera is applied prior to sleep, its network of <strong>acemannan polysaccharides</strong> establishes a breathable, water-rich hydrogel barrier across the stratum corneum. Clinical bioengineering studies (such as Dal'Belo et al., 2006) demonstrate that aloe vera formulations significantly improve stratum corneum water content after continuous application without disrupting baseline barrier integrity.</p>
      </section>

      <section id="why-does-it-feel-tight">
        <h2>Why Does Aloe Feel Tight & Stiff When It Dries?</h2>
        <p>A frequent consumer observation when applying pure aloe vera gel is a sudden sensation of tightness as the product dries: <em>"My face feels tight and stiff—is this dehydrating my skin?"</em></p>
        <p>No, the skin is not drying out. Pure inner-leaf aloe gel consists of approximately 98.5% water held within a lattice of high-molecular-weight polysaccharides. As the water phase evaporates over the initial 5 to 10 minutes, these polysaccharide chains contract and form an ultra-thin, flexible film on the skin's surface. This physical contraction creates the distinct tightening sensation.</p>
        <p><strong>Formulation Tip:</strong> To mitigate surface tightening, apply pure aloe onto slightly damp skin. Once the aloe has settled into a slightly tacky layer (approximately 90 seconds after application), seal the humectant base with <strong>two drops of squalane or jojoba oil</strong>. The lipid layer prevents rapid ambient evaporation and softens the dried polysaccharide film.</p>
      </section>

      <section id="the-pore-clogging-myth">
        <h2>The Breakout Trap: Why Some Skin Reacts</h2>
        <p>When individuals report sudden breakouts or micro-bumps after using aloe vera, clinical evaluation typically reveals one of two non-aloe culprits:</p>
        <ul>
          <li><strong>The Aloin Anthraquinone Reaction:</strong> Cutting a raw leaf and applying it directly to the face without flushing out the yellow exudate introduces <em>aloin</em> onto the skin. Aloin is an irritating anthraquinone that causes acute irritant contact dermatitis—producing pruritic red papules that mimic an acne flare.</li>
          <li><strong>Synthetic Gelling Polymers & Fragrances:</strong> Mass-market after-sun gels frequently contain less than 25% aloe solids, relying instead on synthetic acrylic polymers (carbomers), neutralizing amines (triethanolamine), and synthetic fragrances that can trap sweat and induce follicular irritation.</li>
        </ul>
      </section>

      <section id="fresh-leaf-vs-bottle">
        <h2>Raw Leaf Fillet vs. Decolorized Commercial Gel</h2>
        <p>Comparing fresh raw harvesting to certified commercial inner-fillet products reveals distinct practical and safety considerations:</p>
        <div class="overflow-x-auto my-6">
          <table class="w-full text-left border-collapse border border-emerald-200">
            <thead>
              <tr class="bg-emerald-50 text-emerald-900">
                <th class="p-3 border border-emerald-200">Parameter</th>
                <th class="p-3 border border-emerald-200">Fresh Raw Leaf Fillet</th>
                <th class="p-3 border border-emerald-200">Certified Decolorized Bottle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Preparation Time</td>
                <td class="p-3 border border-emerald-200 text-amber-800">25–30 minutes (requires water flush of aloin)</td>
                <td class="p-3 border border-emerald-200 text-emerald-800">Immediate pump application</td>
              </tr>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Texture Profile</td>
                <td class="p-3 border border-emerald-200">Viscous mucilaginous liquid; breaks to water</td>
                <td class="p-3 border border-emerald-200">Even, smooth spread with consistent slip</td>
              </tr>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Aromatic Quality</td>
                <td class="p-3 border border-emerald-200">Faintly earthy and botanical (cucumber-like)</td>
                <td class="p-3 border border-emerald-200">Neutral with clean food-grade acid note</td>
              </tr>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Native Polysaccharides</td>
                <td class="p-3 border border-emerald-200 text-emerald-800">100% native unheated acemannan</td>
                <td class="p-3 border border-emerald-200">Preserved cold-processed acemannan</td>
              </tr>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Aloin Dermatitis Risk</td>
                <td class="p-3 border border-emerald-200 text-amber-800">Moderate if latex draining is incomplete</td>
                <td class="p-3 border border-emerald-200 text-emerald-800">Negligible (&lt; 10 ppm certified decolorized)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="the-nighttime-ritual">
        <h2>The 3-Step Bedtime Application Protocol</h2>
        <p>To optimize epidermal hydration while preventing surface tightness, follow this evidence-based nighttime protocol:</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['skin-hydration-dalbelo-2006'],
      CLINICAL_STUDIES['burn-wound-healing-maenthaisong-2007'],
      CLINICAL_STUDIES['dermatology-review-surjushe-2008']
    ],
    howToSteps: [
      {
        name: 'Step 1: Cleanse Thoroughly & Leave Skin Damp',
        text: 'Cleanse with a mild, non-stripping, pH-balanced cleanser (pH 5.0–5.5). Pat gently with a clean towel, leaving the stratum corneum slightly damp so humectant polysaccharides can bind ambient moisture.'
      },
      {
        name: 'Step 2: Apply Water-Based Serums First',
        text: 'If your regimen includes low-molecular hyaluronic acid, niacinamide, or soothing toners, apply them first and allow 60 seconds to absorb.'
      },
      {
        name: 'Step 3: Smooth on an Even Layer of Pure Aloe & Seal',
        text: 'Dispense a nickel-sized portion of cold-pressed aloe gel. Smooth gently across the face without aggressive friction. After 2 minutes, when the surface feels tacky, press 2 drops of squalane oil over the cheeks to lock in hydration.'
      }
    ],
    faqs: [
      {
        question: 'Should I wash my face with cleanser the next morning?',
        answer: 'Rinsing with lukewarm water is generally sufficient to dissolve any dried surface polysaccharide matrix. If an occlusive oil seal was layered on top, a gentle morning cleanser effectively clears any residual surface lipids.'
      },
      {
        question: 'Will pure aloe vera stain silk or linen pillowcases?',
        answer: 'Pure, dye-free aloe gel does not contain oils or staining petrochemical colorants. Allowing 5 minutes for the gel to settle before lying down prevents any physical transfer to bedding.'
      },
      {
        question: 'Can aloe vera face masks be used nightly?',
        answer: 'Yes. Pure aloe vera is a non-exfoliating botanical humectant with a comedogenic rating of 0. It can be utilized nightly as a restorative hydration layer, especially after environmental sun exposure or during seasonal dry conditions.'
      }
    ],
    relatedSlugs: ['aloe-vera-and-retinol-layering', 'aloe-vera-fungal-acne', 'best-pure-aloe-vera-gels-reviewed']
  },
  {
    slug: 'aloe-vera-and-retinol-layering',
    pillar: 'skincare',
    title: 'Can You Mix Aloe Vera with Retinol? The "Sandwich" Buffering Method & Application Timing',
    metaTitle: 'Can You Mix Aloe Vera with Retinol? Layering Protocol',
    metaDescription: 'Learn how to buffer retinoids using pure aloe vera gel. Reduce retinol erythema and peeling without compromising vitamin A absorption and collagen synthesis.',
    publishedAt: '2025-01-20',
    updatedAt: '2025-02-20',
    readTimeMinutes: 8,
    authorId: 'botanical-research-desk',
    reviewedById: 'formulation-desk',
    badge: 'Clinical Protocol',
    directAnswer: 'Yes, aloe vera and retinol are an exceptional pairing when layered sequentially. Aloe vera supplies cooling hydration and natural sterols that blunt retinoid dermatitis, flaking, and barrier inflammation without altering the skin pH required for retinol conversion. Never mix them together in your palm before applying; instead, use the "aloe buffer sandwich" method.',
    tableOfContents: [
      { id: 'the-retinol-problem', title: 'Why Retinization Knocks Skin Off Balance', level: 2 },
      { id: 'why-aloe-works', title: 'How Aloe Vera Calms the Vitamin A Storm', level: 2 },
      { id: 'never-mix-in-palm', title: 'Why You Must Never Mix Them in Your Hand', level: 2 },
      { id: 'the-sandwich-protocol', title: 'The "Aloe Buffer Sandwich" Protocol', level: 2 },
      { id: 'faqs', title: 'Common Questions About Retinol & Aloe', level: 2 }
    ],
    htmlContent: `
      <section id="the-retinol-problem">
        <h2>Why Retinization Knocks Skin Off Balance</h2>
        <p>Topical retinoids (including OTC retinol, retinaldehyde, and prescription tretinoin) represent the dermatological gold standard for cellular turnover and collagen synthesis. However, the initial 4 to 8 weeks—known clinically as <strong>retinization</strong>—frequently triggers severe barrier disruption: erythema, peeling, stinging, and micro-fissuring.</p>
        <p>This irritation occurs because retinoids accelerate corneocyte shedding faster than the skin can synthesize replacement intercellular lipids (ceramides, cholesterol, and free fatty acids). The resulting barrier compromise causes high patient abandonment rates.</p>
      </section>

      <section id="why-aloe-works">
        <h2>How Aloe Vera Calms the Vitamin A Storm</h2>
        <p>Pure inner-fillet aloe vera addresses retinoid irritation via multiple biological pathways:</p>
        <ul>
          <li><strong>Enzymatic Inflammation Modulation:</strong> Aloe provides <em>bradykinase</em>, an enzyme that hydrolyzes bradykinin (a key peptide driver of inflammatory vascular dilation). This calms retinoid-induced facial erythema.</li>
          <li><strong>Sterol-Mediated Barrier Soothing:</strong> Natural plant sterols (lupeol, campesterol, and beta-sitosterol) deliver soothing effects comparable to mild topical hydrocortisone, without the risk of cutaneous atrophy.</li>
          <li><strong>Zero Comedogenic Interference:</strong> Unlike heavy petrolatum-based ointments that can trap retinol and increase penetration unpredictably, aloe provides pure water-phase humectancy with a comedogenic rating of 0.</li>
        </ul>
      </section>

      <section id="never-mix-in-palm">
        <h2>Why You Must Never Mix Them in Your Hand</h2>
        <p>A widespread skincare mistake is pumping retinol and aloe vera into the palm simultaneously and blending them together. This is problematic for two formulation reasons:</p>
        <ol>
          <li><strong>Emulsion Destabilization:</strong> Most retinol serums are stabilized oil-in-water emulsions with specialized encapsulation systems. Introducing water-heavy aloe gel directly destabilizes the preservative system and compromises retinol potency.</li>
          <li><strong>Uneven Penetration:</strong> Premixing creates an uneven suspension, causing unpredictable hotspot delivery across the face.</li>
        </ol>
      </section>

      <section id="the-sandwich-protocol">
        <h2>The "Aloe Buffer Sandwich" Protocol</h2>
        <p>Acclimating sensitive or reactive skin to prescription tretinoin or over-the-counter retinol without experiencing retinoid dermatitis requires sequential barrier buffering. Rather than applying vitamin A directly to naked skin, deploy the clinical "aloe sandwich" technique. Begin by smoothing a sheer layer of pure aloe vera gel over freshly cleansed skin and letting it dry completely for three to five minutes; this baseline polysaccharide film slows retinoic acid trans-epidermal flux without inhibiting cellular receptor uptake. Next, dispense a pea-sized dose of retinoid evenly across the face. Finally, seal the treatment with your favorite barrier cream or another layer of aloe vera, preventing transepidermal water loss and completely eliminating flaking and peeling.</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['skin-hydration-dalbelo-2006'],
      CLINICAL_STUDIES['dermatology-review-surjushe-2008']
    ],
    howToSteps: [
      {
        name: 'Step 1: Cleanse & Apply Thin Aloe Layer (First Buffer)',
        text: 'Cleanse face gently with a non-stripping cleanser. Apply a nickel-sized amount of pure, cold-pressed aloe vera gel. Allow 3 to 5 minutes to dry completely; applying retinoids to damp skin increases irritation.'
      },
      {
        name: 'Step 2: Apply Pea-Sized Retinoid Dose',
        text: 'Dispense a strict pea-sized amount of retinol or tretinoin. Dot evenly across forehead, cheeks, and chin, then smooth outward, avoiding the immediate eyelid margin and nasolabial creases.'
      },
      {
        name: 'Step 3: Seal with Ceramide Moisturizer (Top Buffer)',
        text: 'Wait 3 minutes for the retinoid to bind to cellular receptors, then apply a lipid-rich ceramide moisturizer or 2 drops of pure squalane to seal the barrier.'
      }
    ],
    faqs: [
      {
        question: 'Does buffering with aloe reduce retinol efficacy?',
        answer: 'Clinical literature indicates that buffering moderates the peak rate of absorption—mitigating acute inflammatory irritation—without diminishing long-term cellular conversion or collagen remodeling.'
      },
      {
        question: 'Can aloe vera be combined with bakuchiol?',
        answer: 'Yes. Bakuchiol is a plant-derived meroterpene that acts through similar cellular pathways as retinol without triggering significant retinoid dermatitis. Pairing bakuchiol with aloe vera provides a gentle, well-tolerated evening routine.'
      }
    ],
    relatedSlugs: ['aloe-vera-overnight-face-mask', 'aloe-vera-fungal-acne', 'best-pure-aloe-vera-gels-reviewed']
  },
  {
    slug: 'aloe-vera-fungal-acne',
    pillar: 'skincare',
    title: 'Is Aloe Vera Safe for Fungal Acne? Malassezia Folliculitis Ingredient Analysis',
    metaTitle: 'Is Aloe Vera Safe for Fungal Acne? Malassezia Ingredient Audit',
    metaDescription: 'Evaluating pure aloe vera for Malassezia folliculitis (fungal acne). Discover why pure inner fillet is fungal-safe, and how to spot hidden ester traps on labels.',
    publishedAt: '2025-01-28',
    updatedAt: '2025-02-20',
    readTimeMinutes: 6,
    authorId: 'botanical-research-desk',
    reviewedById: 'formulation-desk',
    badge: 'Ingredient Audit',
    directAnswer: 'Yes, 100% pure aloe vera is completely fungal-acne safe. The yeast responsible for fungal acne (Malassezia) requires fatty acids with carbon chain lengths C11–C24 to survive, which pure aloe completely lacks. However, commercial aloe gels frequently sneak in emulsifiers, oils, or polysorbates that feed the yeast aggressively. Check the ingredient label before applying.',
    tableOfContents: [
      { id: 'what-is-fungal-acne', title: 'Understanding Malassezia Folliculitis', level: 2 },
      { id: 'why-pure-aloe-is-safe', title: 'Why Pure Inner-Fillet Aloe Cannot Feed Yeast', level: 2 },
      { id: 'toxic-ingredients', title: 'Hidden Formulation Traps on Commercial Labels', level: 2 },
      { id: 'how-to-use-safely', title: 'Incorporating Aloe into a Fungal-Safe Routine', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
    ],
    htmlContent: `
      <section id="what-is-fungal-acne">
        <h2>Understanding Malassezia Folliculitis</h2>
        <p>When persistent, monomorphic, pruritic papules appear across the forehead, hairline, or upper chest without responding to typical antibacterial acne agents (such as benzoyl peroxide), the underlying etiology is often <strong>Malassezia folliculitis</strong> (commonly referred to as fungal acne).</p>
        <p>Unlike standard acne vulgaris caused by <em>Cutibacterium acnes</em> bacteria, this condition represents a fungal overgrowth within the hair follicle. <em>Malassezia</em> species are lipid-dependent yeasts that lack the enzymatic machinery to synthesize their own fatty acids. They rely on external lipids with carbon chain lengths between <strong>C11 and C24</strong>. When exposed to oils, esters, or polysorbates, the yeast colony proliferates rapidly.</p>
      </section>

      <section id="why-pure-aloe-is-safe">
        <h2>Why Pure Inner-Fillet Aloe Cannot Feed Yeast</h2>
        <p>Pure inner-fillet aloe vera is inherently compatible with fungal-acne protocols because of its chemical composition:</p>
        <ul>
          <li><strong>Over 98.5% Water Matrix:</strong> Provides lightweight, humectant hydration without lipid content.</li>
          <li><strong>Zero C11–C24 Fatty Acids:</strong> Contains no problematic lipids, triglycerides, or esters capable of nourishing <em>Malassezia</em>.</li>
          <li><strong>Natural Saponins & Lupeol:</strong> Contains natural phytocompounds documented to possess mild antimicrobial and antifungal properties in laboratory assays.</li>
        </ul>
      </section>

      <section id="toxic-ingredients">
        <h2>Hidden Formulation Traps on Commercial Labels</h2>
        <p>While unadulterated aloe is safe for fungal acne, commercial bottled products frequently introduce problematic additives. Scrutinize the ingredient declaration for these common additions:</p>
        <ul>
          <li><strong>Polysorbate 20 and Polysorbate 80:</strong> Fatty acid esters that serve as direct nutritional substrates for <em>Malassezia</em> yeasts.</li>
          <li><strong>PEG-40 Hydrogenated Castor Oil:</strong> An emulsifying agent that can trigger fungal flare-ups in reactive individuals.</li>
          <li><strong>Isopropyl Palmitate / Isopropyl Myristate:</strong> Known comedogenic and yeast-feeding synthetic esters.</li>
        </ul>
        <p>For fungal-acne-prone skin, ensure the formula contains pure aloe barbadensis leaf juice, water, safe thickeners (such as xanthan gum), and clean food-grade preservatives (citric acid, potassium sorbate, sodium benzoate).</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['seborrheic-dermatitis-vardy-1999'],
      CLINICAL_STUDIES['dermatology-review-surjushe-2008']
    ],
    faqs: [
      {
        question: 'Does aloe vera act as an active antifungal treatment for Malassezia?',
        answer: 'No. Aloe vera is a non-feeding, soothing humectant, but it does not replace active targeted antifungal treatments (such as ketoconazole or zinc pyrithione). It supports the epidermal barrier while active antifungals address yeast overgrowth.'
      },
      {
        question: 'Can fresh leaf aloe be used if someone has fungal acne?',
        answer: 'Yes, provided the yellow aloin latex is thoroughly flushed. The clear inner parenchyma gel contains zero lipid fractions that could nourish Malassezia yeast.'
      }
    ],
    relatedSlugs: ['aloe-vera-overnight-face-mask', 'aloe-vera-and-retinol-layering', 'best-pure-aloe-vera-gels-reviewed']
  }
];

export const SKINCARE_ARTICLES: Article[] = [
  ...CORE_SKINCARE_ARTICLES,
  ...SKINCARE_ACNE_ARTICLES,
  ...SKINCARE_BARRIER_ARTICLES,
  ...SKINCARE_SUN_ARTICLES,
  ...SKINCARE_ADVANCED_ARTICLES,
];
