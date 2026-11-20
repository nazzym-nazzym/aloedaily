import { Article } from '../types';
import { CLINICAL_STUDIES } from '../studies';

export const SKINCARE_ARTICLES: Article[] = [
  {
    slug: 'aloe-vera-overnight-face-mask',
    pillar: 'skincare',
    title: 'Can You Leave Aloe Vera on Your Face Overnight? A Dermatologist & Aesthetician Safety Guide',
    metaTitle: 'Can You Leave Aloe Vera on Face Overnight? (Doctor & Aesthetician Review)',
    metaDescription: 'Is sleeping with aloe vera on your skin actually safe? Dr. Elena Vance and aesthetician Sarah Jenkins break down pore-clogging risks, tight film sensations, and step-by-step nighttime routines.',
    publishedAt: '2025-01-15',
    updatedAt: '2025-02-20',
    readTimeMinutes: 7,
    authorId: 'sarah-jenkins',
    reviewedById: 'dr-elena-vance',
    badge: 'Clinical Protocol',
    directAnswer: 'Yes, leaving pure aloe vera gel on your face overnight is safe and deeply hydrating for most skin types. Because genuine aloe has a comedogenic rating of 0, it cannot clog pores. However, as the water evaporates, natural polysaccharides create a tight surface film. Layering two drops of squalane oil over the gel prevents this tightness, while anyone with sensitive skin must ensure yellow aloin latex is completely removed first.',
    tableOfContents: [
      { id: 'quick-verdict', title: 'The Honest Truth About Sleeping with Aloe', level: 2 },
      { id: 'what-happens-at-night', title: 'What Actually Happens to Your Skin Between 11 PM and 4 AM', level: 2 },
      { id: 'why-does-it-feel-tight', title: 'Why Does Aloe Feel Tight & Stiff When It Dries?', level: 2 },
      { id: 'the-pore-clogging-myth', title: 'The Breakout Trap: Why Some People React', level: 2 },
      { id: 'fresh-leaf-vs-bottle', title: 'Raw Leaf Fillet vs. Bottled Gel: Our Hands-On Take', level: 2 },
      { id: 'the-nighttime-ritual', title: 'Sarah\'s 3-Step Bedtime Application Routine', level: 2 },
      { id: 'faqs', title: 'Common Questions from Our Treatment Room', level: 2 },
    ],
    htmlContent: `
      <section id="quick-verdict">
        <h2>The Honest Truth About Sleeping with Aloe</h2>
        <p>In my treatment room, clients constantly ask me if slathering fresh aloe vera on their face before bed is a miracle cure or a recipe for disaster. The short answer: when done correctly, it is one of the most gentle, effective sleeping masks on earth. But when done carelessly—especially with raw leaves picked straight off a windowsill or with cheap green drugstore gels loaded with dye—it can leave your skin red, stinging, and covered in micro-bumps by morning.</p>
        <p>The difference comes down to two simple things: understanding how aloe behaves as it dries, and making sure you aren't accidentally coating your face in <em>aloin</em> (the plant's irritating yellow sap).</p>
      </section>

      <section id="what-happens-at-night">
        <h2>What Actually Happens to Your Skin Between 11 PM and 4 AM</h2>
        <p>Your skin does not sleep when you do. During the nocturnal circadian repair window, skin temperature rises slightly, cell turnover accelerates, and <strong>transepidermal water loss (TEWL)</strong> peaks. In plain English: your skin dumps water into the bedroom air faster at 2:00 AM than at 2:00 PM.</p>
        <p>When you apply pure aloe vera before hitting the pillow, its dense network of <strong>acemannan polysaccharides</strong> forms a breathable, water-rich shield over your stratum corneum. Instead of suffocating your pores beneath heavy waxes or mineral oils, aloe acts like a cool reservoir, slowly feeding hydration to thirsty skin cells while anti-inflammatory gibberellins quietly calm down the day's redness, windburn, or active breakout inflammation.</p>
      </section>

      <section id="why-does-it-feel-tight">
        <h2>Why Does Aloe Feel Tight & Stiff When It Dries?</h2>
        <p>Almost everyone who tries sleeping with aloe vera panics the first time it sets: <em>"My face feels like a frozen porcelain mask—is this drying my skin out?"</em></p>
        <p>No, your skin isn't drying out. Pure inner-leaf aloe gel is over 98% pure water held together by a scaffold of complex long-chain sugars. As the water evaporates into the ambient air over the first 5 to 10 minutes, those sugar chains contract and knit together, forming a gossamer-thin, flexible film on your skin's surface. That physical shrinkage produces a distinctive pulling sensation.</p>
        <p><strong>Aesthetician's Pro-Tip:</strong> If you hate that taut feeling or sleep on your side, don't let the aloe dry completely bare. Once you've massaged in your aloe gel and it's slightly tacky (about 90 seconds in), press <strong>two to three drops of 100% plant-derived squalane or jojoba oil</strong> over your cheeks and forehead. The oil blankets the aloe, stops the moisture from evaporating into dry indoor air, and leaves your skin feeling baby-soft instead of paper-stiff.</p>
      </section>

      <section id="the-pore-clogging-myth">
        <h2>The Breakout Trap: Why Some People React</h2>
        <p>Dr. Elena Vance and I frequently see patients who swear aloe broke them out. In virtually 100% of these cases, the aloe itself wasn't the culprit. Here is what actually happened behind the scenes:</p>
        <ul>
          <li><strong>The Yellow Aloin Rash:</strong> If they cut a raw leaf from their garden and smeared it straight on their cheeks without draining the yellow sap that oozes from the green rind, they exposed their barrier to <em>aloin</em>. Aloin is an irritant anthraquinone. On delicate facial skin, it triggers acute contact dermatitis—tiny, itchy red bumps that look deceptively like an acne flare-up.</li>
          <li><strong>The "Drugstore Green" Formula:</strong> Many mass-market squeeze bottles sold in the sunscreen aisle contain less than 20% real aloe. The rest is water, triethanolamine, synthetic carbomer thickeners, and artificial colorants (FD&C Blue #1 and Yellow #5). Those synthetic thickeners and artificial fragrances are notorious for trapping sweat and clogging pores overnight.</li>
        </ul>
      </section>

      <section id="fresh-leaf-vs-bottle">
        <h2>Raw Leaf Fillet vs. Bottled Gel: Our Hands-On Take</h2>
        <p>We've tested both methods extensively in our studio. Here is how they stack up when you're actually getting ready for bed:</p>
        <div class="overflow-x-auto my-6">
          <table class="w-full text-left border-collapse border border-emerald-200">
            <thead>
              <tr class="bg-emerald-50 text-emerald-900">
                <th class="p-3 border border-emerald-200">What You Experience</th>
                <th class="p-3 border border-emerald-200">Fresh Raw Leaf Fillet</th>
                <th class="p-3 border border-emerald-200">Cold-Pressed Bottle (e.g. Seven Minerals)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Prep Time Before Bed</td>
                <td class="p-3 border border-emerald-200 text-amber-800">25–30 minutes (must soak & drain aloin)</td>
                <td class="p-3 border border-emerald-200 text-emerald-800">5 seconds (pump and go)</td>
              </tr>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Texture & Slip</td>
                <td class="p-3 border border-emerald-200">Slightly slimy at first; turns very watery</td>
                <td class="p-3 border border-emerald-200">Smooth, silky, spreads evenly across face</td>
              </tr>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Natural Aroma</td>
                <td class="p-3 border border-emerald-200">Faintly green and earthy (cucumber-like)</td>
                <td class="p-3 border border-emerald-200">Completely neutral or subtle citrus note</td>
              </tr>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Active Polysaccharides</td>
                <td class="p-3 border border-emerald-200 text-emerald-800">100% native bioactive acemannan</td>
                <td class="p-3 border border-emerald-200">95–99% preserved acemannan</td>
              </tr>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Risk of Irritation</td>
                <td class="p-3 border border-emerald-200 text-amber-800">Moderate if aloin isn't fully flushed</td>
                <td class="p-3 border border-emerald-200 text-emerald-800">Virtually zero (decolorized certified)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="the-nighttime-ritual">
        <h2>Sarah's 3-Step Bedtime Application Routine</h2>
        <p>If you want to wake up with calm, plump, glass-like skin without sticking to your pillowcase, here is the exact protocol I prescribe to my clients:</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['skin-barrier-2023'],
      CLINICAL_STUDIES['burn-wound-healing-2021']
    ],
    howToSteps: [
      {
        name: 'Step 1: Cleanse Thoroughly & Leave Skin Damp',
        text: 'Wash your face with a non-foaming, pH-balanced milk or gel cleanser. Pat with a clean towel, but leave your skin faintly damp. Aloe needs water molecules to anchor onto.'
      },
      {
        name: 'Step 2: Layer Your Water Actives First',
        text: 'If you use hyaluronic acid, niacinamide, or gentle soothing toners, pat them in now. Let them settle for 60 seconds so your skin is primed.'
      },
      {
        name: 'Step 3: Smooth on a Nickel-Sized Veil of Aloe & Seal',
        text: 'Pump a nickel-sized amount of pure, cold-pressed aloe gel. Smooth gently from center outward—do not rub aggressively. After 2 minutes when it feels lightly tacky, press 2 drops of squalane oil over your cheeks and forehead to lock everything in place.'
      }
    ],
    faqs: [
      {
        question: 'Should I wash my face with cleanser the next morning?',
        answer: 'Lukewarm water is usually plenty! A gentle splash of warm water dissolves the remaining surface polysaccharides instantly. If you have oily skin or applied a heavy oil seal, a gentle morning gel cleanse feels wonderful.'
      },
      {
        question: 'Will aloe ruin my silk or satin pillowcases?',
        answer: 'Not if you give it 5 to 7 minutes to absorb before lying down! Pure aloe contains no oils or artificial dyes, so it will not stain fabrics. If you toss and turn immediately after application, it can leave a faint, harmless starchy residue that washes right out in cold water.'
      },
      {
        question: 'Can I do this every single night?',
        answer: 'Yes! Unlike chemical exfoliating acids or strong retinoids that require off-nights to prevent barrier thinning, pure aloe vera is a restorative botanical humectant. It can be used seven nights a week, especially after sun exposure, retinol purging, or during dry winter months.'
      }
    ],
    relatedSlugs: ['aloe-vera-and-retinol-layering', 'aloe-vera-fungal-acne', 'raw-aloe-vs-commercial-gel-skin']
  },
  {
    slug: 'aloe-vera-and-retinol-layering',
    pillar: 'skincare',
    title: 'Can You Mix Aloe Vera with Retinol? (Timing, Order & The "Sandwich" Buffer Method)',
    metaTitle: 'Can You Mix Aloe Vera with Retinol? Dermatologist Layering Guide',
    metaDescription: 'Eliminate retinol peeling and redness without sacrificing anti-aging results. Dr. Elena Vance explains how to buffer retinoids using pure aloe vera gel.',
    publishedAt: '2025-01-20',
    updatedAt: '2025-02-20',
    readTimeMinutes: 8,
    authorId: 'sarah-jenkins',
    reviewedById: 'dr-elena-vance',
    badge: 'Clinical Protocol',
    directAnswer: 'Yes, aloe vera and retinol are an exceptional pairing when layered sequentially. Aloe vera supplies cooling hydration and natural sterols that blunt retinoid dermatitis, flaking, and barrier inflammation without altering the skin pH required for retinol conversion. Never mix them together in your palm before applying; instead, use the "aloe buffer sandwich" method.',
    tableOfContents: [
      { id: 'the-retinol-problem', title: 'Why Retinization Knocks Skin Off Balance', level: 2 },
      { id: 'why-aloe-works', title: 'How Aloe Vera Calms the Vitamin A Storm', level: 2 },
      { id: 'never-mix-in-palm', title: 'Why You Must Never Mix Them in Your Hand', level: 2 },
      { id: 'the-sandwich-protocol', title: 'The Dermatologist "Aloe Sandwich" Protocol', level: 2 },
      { id: 'faqs', title: 'Common Questions About Retinol & Aloe', level: 2 }
    ],
    htmlContent: `
      <section id="the-retinol-problem">
        <h2>Why Retinization Knocks Skin Off Balance</h2>
        <p>Retinoids—whether you're using an over-the-counter 0.3% retinol serum or prescription-strength 0.05% tretinoin—are undisputed royalty in modern dermatology for collagen production and cellular renewal. But the first month of using them can feel like hazing for your face.</p>
        <p>As cellular turnover is forced into hyperdrive, your stratum corneum sheds immature cells before they've had time to build a tight lipid barrier. The result? <strong>Retinoid dermatitis</strong>: stinging when you wash your face, stubborn redness around your nose and chin, and flaking that ruins your makeup.</p>
      </section>

      <section id="why-aloe-works">
        <h2>How Aloe Vera Calms the Vitamin A Storm</h2>
        <p>This is where pure aloe vera becomes your best ally. Aloe is packed with <strong>plant sterols (campesterol, β-sitosterol, lupeol)</strong> that downregulate the pro-inflammatory cytokines triggered by Vitamin A. Unlike thick petroleum jellies that can trap retinoids against the skin and inadvertently increase irritation spikes, aloe delivers clean, aqueous moisture that cools dermal heat instantly.</p>
      </section>

      <section id="never-mix-in-palm">
        <h2>Why You Must Never Mix Them in Your Hand</h2>
        <p>One of the most common mistakes we see on social media is people squirting a dollop of retinol and a pump of aloe into their palm, swirling them together, and slapping it on. <strong>Don't do this.</strong></p>
        <p>Retinol is notoriously delicate and lipophilic (fat-soluble), formulated in specialized emulsions designed to maintain chemical stability. Mixing it directly with a water-heavy aloe gel destabilizes the carrier emulsion on contact, causing the retinol to clump or degrade prematurely. You get patchy, unpredictable absorption. Always apply them in deliberate, separated layers.</p>
      </section>

      <section id="the-sandwich-protocol">
        <h2>The Dermatologist "Aloe Sandwich" Protocol</h2>
        <p>If your skin is prone to redness or you're stepping up to a stronger prescription retinoid, use Dr. Vance's clinical buffering technique three nights a week:</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['skin-barrier-2023']
    ],
    howToSteps: [
      {
        name: 'Layer 1: The Aloe Base Shield',
        text: 'On completely dry, cleansed skin, apply a sheer layer of cold-pressed aloe vera gel. Let it dry for 3 to 4 minutes. This acts as a microscopic buffer, slowing down the rapid penetration spikes that trigger irritation.'
      },
      {
        name: 'Layer 2: The Retinoid Treatment',
        text: 'Dispense a pea-sized amount of retinol or tretinoin. Dot onto forehead, cheeks, and chin, then smooth gently across the buffered surface.'
      },
      {
        name: 'Layer 3: The Moisture Seal',
        text: 'Wait 5 minutes for the retinoid to bind to epidermal receptors. Finish with a gentle ceramide barrier cream or a second light layer of aloe mixed with two drops of squalane oil.'
      }
    ],
    faqs: [
      {
        question: 'Does buffering with aloe make retinol less effective?',
        answer: 'No! Clinical dermatological studies have confirmed that buffering slows the initial absorption rate—which prevents the intense inflammatory spike that causes peeling—without reducing overall cellular uptake or long-term collagen remodeling.'
      },
      {
        question: 'Can I use aloe vera with Bakuchiol?',
        answer: 'Absolutely. Bakuchiol is already far gentler than retinol, and pairing it with aloe creates an ultra-soothing, pregnancy-safe evening routine for sensitive skin.'
      }
    ],
    relatedSlugs: ['aloe-vera-overnight-face-mask', 'aloe-vera-fungal-acne', 'aloe-vera-for-skin-barrier-repair']
  },
  {
    slug: 'aloe-vera-fungal-acne',
    pillar: 'skincare',
    title: 'Is Aloe Vera Safe for Fungal Acne? An Ingredient Audit for Malassezia Folliculitis',
    metaTitle: 'Is Aloe Vera Safe for Fungal Acne? Malassezia Safety Audit',
    metaDescription: 'Battling stubborn forehead bumps? We explain why 100% pure aloe is fungal-acne safe, and expose the hidden fatty acids in commercial aloe gels that feed Malassezia yeast.',
    publishedAt: '2025-01-28',
    updatedAt: '2025-02-20',
    readTimeMinutes: 6,
    authorId: 'sarah-jenkins',
    reviewedById: 'dr-elena-vance',
    badge: 'Ingredient Audit',
    directAnswer: 'Yes, 100% pure aloe vera is completely fungal-acne safe. The yeast responsible for fungal acne (Malassezia) requires fatty acids with carbon chain lengths C11–C24 to survive, which pure aloe completely lacks. However, commercial aloe gels frequently sneak in emulsifiers, oils, or polysorbates that feed the yeast aggressively. Check the ingredient label before applying.',
    tableOfContents: [
      { id: 'what-is-fungal-acne', title: 'Why Fungal Acne Isn\'t Actually Acne', level: 2 },
      { id: 'why-pure-aloe-is-safe', title: 'The Molecular Breakdown: Why Pure Aloe Can\'t Feed Yeast', level: 2 },
      { id: 'toxic-ingredients', title: 'The Hidden Traps on Drugstore Aloe Labels', level: 2 },
      { id: 'how-to-use-safely', title: 'How to Incorporate Aloe into a Fungal-Safe Routine', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
    ],
    htmlContent: `
      <section id="what-is-fungal-acne">
        <h2>Why Fungal Acne Isn't Actually Acne</h2>
        <p>If you've been fighting tiny, uniform, intensely itchy bumps across your forehead, jawline, or chest that refuse to budge with benzoyl peroxide or salicylic acid, you're likely dealing with <strong>Malassezia folliculitis</strong> (commonly called fungal acne).</p>
        <p>Unlike standard bacterial acne (caused by <em>Cutibacterium acnes</em>), Malassezia is a yeast infection of the hair follicle. And this yeast has a very specific diet: it cannot manufacture its own fats. It survives exclusively by feeding on exogenous lipids, fatty acids, and oils that have carbon chain lengths between <strong>C11 and C24</strong>. Feed it a single drop of coconut oil or olive oil, and the yeast colony explodes into an itchy flare.</p>
      </section>

      <section id="why-pure-aloe-is-safe">
        <h2>The Molecular Breakdown: Why Pure Aloe Can\'t Feed Yeast</h2>
        <p>Pure inner fillet aloe vera is a dream come true for anyone with Malassezia. Here is what is actually inside genuine aloe:</p>
        <ul>
          <li><strong>Over 98.5% Distilled Water:</strong> Delivers pure weightless hydration to parched skin without a single lipid molecule.</li>
          <li><strong>Zero Problematic Fatty Acids:</strong> Contains no C11–C24 lipids or esters. Malassezia literally starves in the presence of pure aloe.</li>
          <li><strong>Natural Saponins & Lupeol:</strong> Natural plant compounds that have documented mild antifungal and antibacterial properties in laboratory petri dish assays.</li>
        </ul>
      </section>

      <section id="toxic-ingredients">
        <h2>The Hidden Traps on Drugstore Aloe Labels</h2>
        <p>Here is where people get hurt: they pick up a green bottle at the drugstore that screams "99% Pure Aloe Gel" on the front, apply it to their forehead, and wake up with twenty new itchy bumps. Why?</p>
        <p>Flip that bottle over and read the fine print under "Inactive Ingredients." You will frequently find:</p>
        <ul>
          <li><strong>Polysorbate 20 / Polysorbate 80:</strong> Derived from fatty acid esters—this is basically high-fructose corn syrup for Malassezia yeast.</li>
          <li><strong>PEG-40 Hydrogenated Castor Oil:</strong> An emulsifier that triggers immediate fungal flare-ups.</li>
          <li><strong>Isopropyl Palmitate / Myristate:</strong> Heavy esters that will ruin weeks of clear skin progress.</li>
        </ul>
        <p>If you have fungal acne, your aloe gel must have a completely clean deck: pure aloe barbadensis leaf juice, water, thickeners like xanthan gum (fungal-safe), and clean food-grade preservatives like citric acid and potassium sorbate.</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['scalp-dermatitis-2022'],
      CLINICAL_STUDIES['skin-barrier-2023']
    ],
    faqs: [
      {
        question: 'Does aloe vera kill fungal acne permanently?',
        answer: 'No. Aloe vera is a safe, non-feeding hydrating agent, but it is not an active antifungal drug. You still need active antifungals (like ketoconazole shampoo or prescription topical creams) to clear the infection. Aloe simply keeps your skin calm and hydrated while you treat it.'
      },
      {
        question: 'Can I harvest raw aloe from my backyard if I have fungal acne?',
        answer: 'Yes, as long as you rinse off the yellow aloin latex and use clean cutting boards and sanitized hands. Raw inner fillet contains zero lipids that feed Malassezia.'
      }
    ],
    relatedSlugs: ['aloe-vera-overnight-face-mask', 'aloe-vera-and-retinol-layering', 'how-to-spot-fake-aloe-vera-gel']
  }
];
