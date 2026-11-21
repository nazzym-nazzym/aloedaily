import { Article } from '../types';
import { CLINICAL_STUDIES } from '../studies';

export const HEALTH_ARTICLES: Article[] = [
  {
    slug: 'how-to-remove-aloin-from-aloe-leaf',
    pillar: 'health',
    title: 'How to Remove Yellow Aloin from Fresh Aloe Leaves: The Step-by-Step Kitchen Safety Guide',
    metaTitle: 'How to Remove Aloin from Fresh Aloe Leaf (Kitchen Safety Guide)',
    metaDescription: 'Don\'t make yourself sick! Marcus Chen explains how to drain the bitter yellow aloin latex from fresh aloe leaves before eating or applying to skin.',
    publishedAt: '2025-01-10',
    updatedAt: '2025-02-20',
    readTimeMinutes: 8,
    authorId: 'marcus-chen',
    reviewedById: 'dr-elena-vance',
    badge: 'Toxicology & Safety',
    howToTotalTime: 'PT35M',
    howToTools: ['Chef knife', 'Cutting board', 'Tall glass', 'Strainer colander'],
    howToSupplies: ['Cold running water', 'Fresh Aloe barbadensis Miller leaf'],
    directAnswer: 'To remove bitter yellow aloin latex from a fresh aloe leaf: 1) Stand the freshly cut leaf upright in a glass for 15 minutes to let gravity bleed out the dark yellow sap; 2) Slice away the spiky leaf margins and green rind; 3) Dice the clear inner fillet into cubes; and 4) Soak the cubes in cold water for 20 minutes, rinsing until the water is completely clear and the gel tastes clean like fresh cucumber.',
    tableOfContents: [
      { id: 'the-yellow-sap-trap', title: 'The Yellow Sap Trap: Why That Bitter Resin Is Dangerous', level: 2 },
      { id: 'aloin-vs-gel', title: 'Latex vs. Clear Fillet: What You Can & Cannot Ingest', level: 2 },
      { id: 'the-kitchen-protocol', title: 'Marcus\'s 4-Step Gravity & Water Leaching Protocol', level: 2 },
      { id: 'the-taste-test', title: 'The 3-Second Taste Test: How to Know You Did It Right', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
    ],
    htmlContent: `
      <section id="the-yellow-sap-trap">
        <h2>The Yellow Sap Trap: Why That Bitter Resin Is Dangerous</h2>
        <p>The first time you slice into a thick, mature aloe vera leaf, you will notice an intense, pungent, medicinal odor, and a viscous, yellowish-brown liquid oozing from the cut base. Many well-meaning beginners assume this yellow sap is "concentrated plant medicine."</p>
        <p><strong>It is not medicine—it is the plant's chemical weapon.</strong></p>
        <p>In botany, this substance is called <strong>aloin (or aloe latex)</strong>. In the wild desert, aloe plants cannot run away from grazing goats, insects, or rodents. Instead, they evolved specialized vascular tubules right beneath their thick green rind that pump out aloin whenever the leaf is punctured. It is an intensely bitter, noxious anthraquinone designed to cause violent diarrhea and stomach cramping in any animal foolish enough to eat it.</p>
        <p>If you ingest unwashed aloin, you risk acute abdominal cramping, sudden electrolyte depletion (especially potassium), and severe diarrhea. If you smear it on your face, it causes an angry, itchy red contact dermatitis. Removing this yellow resin completely is non-negotiable.</p>
      </section>

      <section id="aloin-vs-gel">
        <h2>Latex vs. Clear Fillet: What You Can & Cannot Ingest</h2>
        <p>To safely harvest aloe, you must understand the leaf\'s anatomy like a surgeon:</p>
        <ul>
          <li><strong>The Outer Green Rind:</strong> Fibrous and tough. Great for protecting the plant; bitter and inedible for humans.</li>
          <li><strong>The Yellow Latex Layer (Aloin):</strong> Located directly between the green skin and the clear flesh. Highly laxative, pungent, and strictly avoided.</li>
          <li><strong>The Clear Inner Fillet:</strong> The crystal-clear, jelly-like core. This contains 99% pure water and bioactive acemannan polysaccharides. When washed clean of aloin, it is tasteless, odorless, soothing, and completely safe to eat or blend into smoothies.</li>
        </ul>
      </section>

      <section id="the-kitchen-protocol">
        <h2>Marcus\'s 4-Step Gravity & Water Leaching Protocol</h2>
        <p>Here is the exact method I use in our botanical laboratory to guarantee 100% aloin-free gel:</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['aloin-toxicity-safety-2022']
    ],
    howToSteps: [
      {
        name: 'Step 1: The 15-Minute Vertical Bleed',
        text: 'Trim half an inch off the leaf\'s harvested stem. Place the leaf standing upright in a clean drinking glass or measuring cup, tilted slightly. Over the next 15 minutes, watch gravity pull the dark yellow-brown sap out of the cut channels. Discard this yellow liquid down the drain.'
      },
      {
        name: 'Step 2: Remove the Spines & Tip',
        text: 'Lay the leaf flat on a clean cutting board. Slice off the top 2 inches (the tip is mostly skin with little gel) and slice away the serrated spiky thorns along both outer edges with a sharp chef\'s knife.'
      },
      {
        name: 'Step 3: Fillet the Clear Flesh',
        text: 'Slide your knife horizontally directly between the green skin and the clear flesh, removing the top skin like filleting a fish. Flip the leaf and remove the bottom skin. You should now have a translucent, slippery slab of glass-like gel.'
      },
      {
        name: 'Step 4: The 20-Minute Osmotic Water Soak',
        text: 'Dice the clear fillet into bite-sized 1-inch cubes. Drop them into a bowl of cold filtered water. Use our interactive timer below to track the 20-minute soak, gently swirling every 5 minutes. The water will draw out the microscopic remaining aloin molecules through osmotic diffusion. Rinse twice with fresh cold water.'
      }
    ],
    faqs: [
      {
        question: 'How do I know for sure that all the aloin is gone?',
        answer: 'Take a tiny nibble of one gel cube. If it tastes like crisp, slightly bland cucumber or pure water, it is 100% clean. If you detect even a faint hint of sharp, bitter medicinal bite on the back of your tongue, return the cubes to a bowl of fresh cold water for another 10 minutes.'
      },
      {
        question: 'Can I just boil the leaf to kill the aloin?',
        answer: 'No! Boiling does not destroy aloin anthraquinones; worse, heating breaks down the fragile acemannan polysaccharide chains that make aloe therapeutic in the first place. Cold-water soaking and gravity bleeding are the only scientifically proven home purification methods.'
      }
    ],
    relatedSlugs: ['what-happens-drinking-aloe-vera-daily', 'aloe-vera-juice-dosage-calculator', 'how-to-harvest-aloe-leaf-without-killing-plant']
  },
  {
    slug: 'what-happens-drinking-aloe-vera-daily',
    pillar: 'health',
    title: 'What Happens to Your Body When You Drink Aloe Vera Daily? A Clinical Gastroenterology Review',
    metaTitle: 'What Happens When You Drink Aloe Vera Daily? Doctor\'s Honest Review',
    metaDescription: 'Dr. Elena Vance explains what actually happens to your stomach acid, gut microbiome, and bowel regularity when drinking pure decolorized aloe vera juice every morning.',
    publishedAt: '2025-01-22',
    updatedAt: '2025-02-20',
    readTimeMinutes: 7,
    authorId: 'dr-elena-vance',
    reviewedById: 'dr-elena-vance',
    badge: 'Doctor Review',
    directAnswer: 'Drinking 2 to 3 ounces of certified decolorized aloe vera juice daily provides clinically proven digestive benefits. It coats the esophagus to relieve acid reflux, acts as a prebiotic substrate for beneficial Bifidobacteria in the colon, and helps soothe inflammatory bowel irritation. However, drinking unpurified juice with aloin causes electrolyte loss and cramping. Stick to certified decolorized inner-fillet juice.',
    tableOfContents: [
      { id: 'first-sip', title: 'What Pure Aloe Juice Actually Tastes Like', level: 2 },
      { id: 'esophageal-shield', title: 'The Esophageal Shield: How Aloe Soothes Acid Reflux', level: 2 },
      { id: 'gut-microbiome', title: 'What Happens to Your Gut Flora Over 30 Days', level: 2 },
      { id: 'who-should-never-drink-it', title: 'Who Should Never Drink Aloe Vera Juice', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
    ],
    htmlContent: `
      <section id="first-sip">
        <h2>What Pure Aloe Juice Actually Tastes Like</h2>
        <p>Let's dispel a common misconception right away: authentic therapeutic aloe vera juice does <em>not</em> taste like those sweet, sugary aloe drinks you buy at the convenience store with green grape flavor and chewy gelatin cubes.</p>
        <p>Pure, cold-pressed inner-fillet aloe juice tastes remarkably like crisp, slightly earthy cucumber water with a faint, clean lemon-citrus tang (naturally occurring from food-grade citric acid stabilization). It is light, refreshing, and completely sugar-free.</p>
      </section>

      <section id="esophageal-shield">
        <h2>The Esophageal Shield: How Aloe Soothes Acid Reflux</h2>
        <p>As a medical doctor, one of the most frustrating aspects of standard acid reflux treatment is the chronic over-prescription of proton pump inhibitors (PPIs). While PPIs stop acid production, long-term acid suppression impairs protein digestion, reduces B12 absorption, and disrupts the gut microbiome.</p>
        <p>Pure aloe vera works through a completely different, non-systemic mechanism: <strong>mucosal coating</strong>. When you swallow 2 ounces of aloe juice 20 minutes before a meal, the viscous polysaccharides coat the delicate esophageal lining with a protective bio-adhesive barrier. When stomach acid splashes upward, it hits this protective botanical cushion instead of burning bare epithelial tissue.</p>
      </section>

      <section id="gut-microbiome">
        <h2>What Happens to Your Gut Flora Over 30 Days</h2>
        <p>In our digestive tract, the complex long-chain sugars in aloe (acemannan and glucomannan) act as potent <strong>prebiotic substrates</strong>. Human digestive enzymes cannot break down these complex polysaccharide chains in the upper stomach. They travel intact down to your large intestine, where beneficial probiotic bacteria—specifically <em>Bifidobacterium</em> and <em>Lactobacillus</em>—ferment them into therapeutic short-chain fatty acids (SCFAs) like butyrate, which fuels the cells lining your colon.</p>
      </section>

      <section id="who-should-never-drink-it">
        <h2>Who Should Never Drink Aloe Vera Juice</h2>
        <p>While purified aloe juice is remarkably safe, clinical prudence requires clear warnings:</p>
        <ul>
          <li><strong>Pregnancy & Nursing:</strong> Strictly contraindicated. Anthraquinone residues can stimulate uterine contractions and cause pelvic congestion.</li>
          <li><strong>Diabetic Medications:</strong> Aloe has a mild, documented hypoglycemic effect. If you take metformin or insulin, monitor your blood sugar closely to avoid unexpected dips.</li>
          <li><strong>Potassium-Wasting Diuretics:</strong> If your juice contains trace aloin, excessive consumption can accelerate potassium excretion.</li>
        </ul>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['gerd-gastric-mucosa-2020'],
      CLINICAL_STUDIES['aloin-toxicity-safety-2022']
    ],
    faqs: [
      {
        question: 'Should I drink aloe juice in the morning or evening?',
        answer: 'First thing in the morning on an empty stomach (20 minutes before breakfast) is optimal for maximum gut lining absorption. If severe nighttime reflux is your primary issue, taking 1 ounce right before bedtime can provide significant nighttime relief.'
      },
      {
        question: 'Can I mix aloe juice with orange juice or coffee?',
        answer: 'You can mix it into water, herbal tea, or a green smoothie. However, avoid mixing it into acidic citrus juices (like orange or grapefruit) or piping hot coffee, as intense heat can denature the beneficial polysaccharides.'
      }
    ],
    relatedSlugs: ['how-to-remove-aloin-from-aloe-leaf', 'aloe-vera-juice-dosage-calculator']
  },
  {
    slug: 'aloe-vera-juice-dosage-calculator',
    pillar: 'health',
    title: 'Daily Aloe Vera Juice Dosage Calculator: How Much Should You Drink?',
    metaTitle: 'Aloe Vera Juice Dosage Calculator: Safe Daily Intake Guide',
    metaDescription: 'Use our doctor-designed aloe vera juice dosage calculator to find your exact daily ounces based on your body weight, health goals, and product strength.',
    publishedAt: '2025-01-30',
    updatedAt: '2025-02-20',
    readTimeMinutes: 5,
    authorId: 'dr-elena-vance',
    reviewedById: 'marcus-chen',
    badge: 'Interactive Health Tool',
    directAnswer: 'For healthy adults, the standard daily dose of certified decolorized aloe vera juice is 1.5 to 2 ounces (45–60 ml) for general wellness, or up to 4 ounces (120 ml) divided into two doses for active acid reflux management. Dosing above 6 ounces a day offers no extra benefit and may speed up gastrointestinal transit unnecessarily.',
    tableOfContents: [
      { id: 'interactive-tool', title: 'Interactive Daily Dosage Calculator', level: 2 },
      { id: 'dosage-rules', title: 'The 3 Golden Rules of Aloe Dosing', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
    ],
    htmlContent: `
      <section id="interactive-tool">
        <h2>Interactive Daily Dosage Calculator</h2>
        <p>Dial in your body weight and primary digestive goal below to calculate your personalized daily intake:</p>
        <div id="dosage-calc-container" class="my-6"></div>
      </section>

      <section id="dosage-rules">
        <h2>The 3 Golden Rules of Aloe Dosing</h2>
        <ol>
          <li><strong>Start Low and Ramp Slowly:</strong> If you are new to aloe juice, start with just 1 ounce (30 ml) for the first three days. Let your gut microbiome adapt to the prebiotic fiber.</li>
          <li><strong>Split Doses for Reflux:</strong> If taking 3 or 4 ounces for acid reflux, divide it: take 2 ounces before breakfast and 2 ounces before dinner.</li>
          <li><strong>Check the Strength:</strong> Our calculator assumes single-strength (1X) pure inner-leaf juice. If using a 10X or 20X botanical concentrate, dilute with water according to manufacturer guidelines.</li>
        </ol>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['gerd-gastric-mucosa-2020'],
      CLINICAL_STUDIES['aloin-toxicity-safety-2022']
    ],
    faqs: [
      {
        question: 'Can children drink aloe vera juice?',
        answer: 'We do not recommend giving aloe juice to children under 12 without direct pediatric supervision, as pediatric digestive tracts are much more sensitive to changes in osmotic transit.'
      }
    ],
    relatedSlugs: ['how-to-remove-aloin-from-aloe-leaf', 'what-happens-drinking-aloe-vera-daily']
  }
];
