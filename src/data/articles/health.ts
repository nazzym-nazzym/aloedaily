import { Article } from '../types';
import { CLINICAL_STUDIES } from '../studies';
import { HEALTH_DIGESTION_ARTICLES } from './health-digestion';
import { HEALTH_SAFETY_ARTICLES } from './health-safety';
import { HEALTH_RECIPES_ARTICLES } from './health-recipes';
import { HEALTH_SYSTEMIC_ARTICLES } from './health-systemic';

const CORE_HEALTH_ARTICLES: Article[] = [
  {
    slug: 'how-to-remove-aloin-from-aloe-leaf',
    pillar: 'health',
    title: 'How to Remove Toxic Aloin Latex from Fresh Aloe Leaf: The 20-Minute Water Flush Guide',
    metaTitle: 'How to Remove Aloin from Fresh Aloe Leaf: Safety Protocol',
    metaDescription: 'Step-by-step tutorial on purging irritating yellow aloin latex from fresh aloe leaves before eating or applying to skin. Avoid stomach cramps and contact dermatitis.',
    publishedAt: '2025-01-12',
    updatedAt: '2025-02-20',
    readTimeMinutes: 8,
    authorId: 'botanical-research-desk',
    reviewedById: 'formulation-desk',
    badge: 'Botanical Safety',
    directAnswer: 'To remove toxic aloin from a freshly cut aloe leaf, stand the leaf upright at a 45-degree angle in a glass of water for 15 to 20 minutes to allow the bitter yellow latex to drain completely. Next, trim off the bottom inch, slice off the spiky margins, and fillet away the green rind. Finally, submerge the clear gel fillet in fresh running water for 5 minutes until completely clear and odorless.',
    tableOfContents: [
      { id: 'what-is-aloin', title: 'What is Aloin & Why is it Toxic?', level: 2 },
      { id: 'aloe-anatomy', title: 'Anatomy of an Aloe Leaf: Gel vs. Latex', level: 2 },
      { id: 'the-draining-protocol', title: 'The 20-Minute Vertical Water Flush Protocol', level: 2 },
      { id: 'testing-for-cleanliness', title: 'The Cleanliness Test: How to Know Aloin is 100% Gone', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
    ],
    htmlContent: `
      <section id="what-is-aloin">
        <h2>What is Aloin & Why is it Toxic?</h2>
        <p>Aloin (also known as barbaloin) is a bitter, yellowish anthraquinone C-glycoside found in the latex fluid of the pericyclic tubules immediately beneath the green rind of the <em>Aloe vera</em> leaf. In botanical physiology, aloin acts as the plant's chemical defense system to deter herbivores from consuming the moisture-rich gel.</p>
        <p>When ingested by humans, aloin acts as a potent, irritating stimulant laxative. It causes intense peristaltic contractions of the colon, severe abdominal cramping, and watery diarrhea. Chronic ingestion has been evaluated by the National Toxicology Program (NTP TR 577), demonstrating clear evidence of carcinogenic activity in the large intestines of rodents when non-decolorized whole-leaf extracts were administered over two years.</p>
        <p>Topically, aloin is a well-documented cause of irritant contact dermatitis, producing itchy red papules that are frequently mistaken for acne breakouts or an allergic reaction to aloe vera.</p>
      </section>

      <section id="aloe-anatomy">
        <h2>Anatomy of an Aloe Leaf: Gel vs. Latex</h2>
        <p>Understanding leaf cross-section anatomy is essential for safe home preparation:</p>
        <ul>
          <li><strong>Outer Green Rind (Epidermis):</strong> Thick, waxy, protective outer structural layer containing chlorophyll and stomata. Not intended for consumption.</li>
          <li><strong>Pericyclic Vascular Bundles (Latex Layer):</strong> Located immediately beneath the rind. This is where yellow, bitter, foul-smelling aloin sap is produced and stored.</li>
          <li><strong>Inner Parenchyma Tissue (Clear Gel Fillet):</strong> The transparent, mucilaginous, nutrient-dense core containing 98.5% water, bioactive acemannan polysaccharides, vitamins, and minerals. <em>This is the only part of the leaf that should be consumed or applied.</em></li>
        </ul>
      </section>

      <section id="the-draining-protocol">
        <h2>The 20-Minute Vertical Water Flush Protocol</h2>
        <p>In our botanical testing laboratory, standard horizontal slicing invariably cross-contaminates clear inner gel with yellow aloin sap leaking from severed vascular bundles. Removing aloin safely requires gravity and water immersion before filleting.</p>
        <p>Immediately after harvesting a mature bottom leaf at a 45-degree angle, place the leaf upright with its cut base submerged in 2 inches of cold water in a tall glass or measuring cup. Over the next 15 to 20 minutes, atmospheric hydrostatic pressure inside the leaf pushes the bitter yellow exudate downward, tinting the water a cloudy amber-orange. Discard this water, slice off the bottom 1 inch of leaf where residue concentrated, and trim off the serrated lateral margins before filleting out the pristine, clear inner gel.</p>
      </section>

      <section id="testing-for-cleanliness">
        <h2>The Cleanliness Test: How to Know Aloin is 100% Gone</h2>
        <p>A properly purged aloe fillet should satisfy three sensory criteria:</p>
        <ol>
          <li><strong>Visual Transparency:</strong> The fillet must be completely crystal clear, with zero yellow, amber, or orange tints.</li>
          <li><strong>Olfactory Neutrality:</strong> Pure aloe gel smells faintly like fresh cucumber or green melon. If it carries a sharp, pungent, medicinal, or sulfurous odor, aloin remains present.</li>
          <li><strong>Taste Neutrality:</strong> Place a tiny crumb of the gel on the tip of your tongue. Pure gel is mildly tart or completely neutral. If you detect an intensely bitter, chemical taste, spit it out and rinse the fillet again under running water for another 3 minutes.</li>
        </ol>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['aloin-toxicology-boudreau-2017'],
      CLINICAL_STUDIES['ntp-toxicology-tr577-2013'],
      CLINICAL_STUDIES['iasc-standards-monograph-2020']
    ],
    howToSteps: [
      {
        name: 'Step 1: Harvest Low & Slice at the Base',
        text: 'Select an outer, mature bottom leaf at least 12 inches in length. Cut cleanly near the stem using a sharp, sanitized chef knife at a 45-degree angle.'
      },
      {
        name: 'Step 2: Stand Vertically in Water for 15–20 Minutes',
        text: 'Place the cut leaf upright in a tall glass or measuring cup with 2 inches of water, cut side facing down. Allow the yellow aloin sap to drain naturally into the water. The water will turn yellow-orange as aloin drains.'
      },
      {
        name: 'Step 3: Trim Off the Base and Serrated Spines',
        text: 'Remove the leaf from the water and discard the yellow liquid. Slice off the bottom 1 inch of the cut base where aloin concentrated. Then carefully slice off the prickly serrated margins along both edges.'
      },
      {
        name: 'Step 4: Fillet Away the Green Rind',
        text: 'Lay the leaf flat on a clean cutting board. Slide a flexible filleting knife just beneath the green skin to remove the top rind, then flip and remove the bottom skin, exposing the clear gelatinous fillet.'
      },
      {
        name: 'Step 5: Submerge and Rinse in Running Water',
        text: 'Submerge the clear fillet in a bowl of fresh, clean running water for 5 minutes, gently washing away any residual yellow slime until the gel is crystal clear and odorless.'
      }
    ],
    howToTotalTime: 'PT25M',
    howToTools: ['Sharp Chef Knife', 'Tall Glass or Measuring Cup', 'Cutting Board', 'Timer'],
    howToSupplies: ['Fresh Mature Aloe Vera Leaf', 'Clean Cold Water'],
    faqs: [
      {
        question: 'Can I eat the green skin of the aloe vera leaf?',
        answer: 'While thin young leaves can technically be consumed if thoroughly boiled, we strongly advise against eating the rind. The rind contains high concentrations of aloin in its vascular bundles, which poses gastrointestinal and toxicological risks.'
      },
      {
        question: 'Does boiling the aloe leaf remove the aloin?',
        answer: 'No. Aloin is heat-stable and does not break down at boiling temperatures. In fact, boiling unwashed leaves can concentrate the anthraquinones into the water. Physical vertical draining and cold-water washing is the only reliable home removal method.'
      },
      {
        question: 'How long can I store the purged clear gel?',
        answer: 'Pure, preservative-free fresh aloe gel oxidizes rapidly. Store it in an airtight glass container in the refrigerator for up to 5 days, or freeze it into ice cubes for up to 6 months.'
      }
    ],
    relatedSlugs: ['what-happens-drinking-aloe-vera-daily', 'aloe-vera-overnight-face-mask', 'fix-soft-mushy-aloe-leaves']
  },
  {
    slug: 'what-happens-drinking-aloe-vera-daily',
    pillar: 'health',
    title: 'What Happens to Your Body When You Drink Aloe Vera Juice Daily? 30-Day Observational Science',
    metaTitle: 'Drinking Aloe Vera Juice Daily: 30-Day Health Science',
    metaDescription: 'Discover the physiological effects of drinking purified aloe vera juice daily. Learn about gastric mucosal coating, blood glucose modulation, and safety limits.',
    publishedAt: '2025-01-22',
    updatedAt: '2025-02-20',
    readTimeMinutes: 7,
    authorId: 'botanical-research-desk',
    reviewedById: 'formulation-desk',
    badge: 'Clinical Review',
    directAnswer: 'Drinking 1 to 2 ounces (30–60 ml) of certified decolorized aloe vera juice daily coats the esophagus and stomach lining, significantly reducing symptoms of acid reflux and gastritis. Within 14 to 30 days, clinical trials note improvements in bowel regularity, systemic inflammation markers, and fasting blood sugar in pre-diabetic individuals. However, daily juice MUST be certified decolorized (<10 ppm aloin) to prevent toxic colon irritation.',
    tableOfContents: [
      { id: 'first-7-days', title: 'Days 1–7: Gastrointestinal Mucosal Coating & Motility', level: 2 },
      { id: 'days-8-14', title: 'Days 8–14: Microbiome Shifts & Bowel Regularity', level: 2 },
      { id: 'days-15-30', title: 'Days 15–30: Glycemic Sensitivity & Systemic Biomarkers', level: 2 },
      { id: 'the-decolorization-rule', title: 'The Mandatory Safety Rule: Decolorized Only', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
    ],
    htmlContent: `
      <section id="first-7-days">
        <h2>Days 1–7: Gastrointestinal Mucosal Coating & Motility</h2>
        <p>During the initial week of daily consumption, the primary physiological action occurs in the upper gastrointestinal tract. High-molecular-weight <strong>acemannan polysaccharides</strong> in purified aloe vera behave as bioadhesive polymers. When swallowed on an empty stomach, they form a protective, hydrogel-like barrier across the esophageal mucosa and gastric lining.</p>
        <p>In patients suffering from gastroesophageal reflux disease (GERD) or mild gastritis, randomized clinical trials (such as Panahi et al., 2015) demonstrate significant reductions in heartburn frequency, flatulence, and regurgitation within the first 7 to 10 days of standardized aloe vera consumption.</p>
      </section>

      <section id="days-8-14">
        <h2>Days 8–14: Microbiome Shifts & Bowel Regularity</h2>
        <p>By the second week, unabsorbed glucomannan fractions travel through the small intestine and reach the cecum and colon intact. In the large intestine, these complex plant carbohydrates act as <strong>prebiotics</strong>, serving as an energy source for beneficial anaerobic bacteria, particularly <em>Bifidobacterium</em> species.</p>
        <p>Fermentation of aloe polysaccharides stimulates the endogenous synthesis of short-chain fatty acids (SCFAs)—most notably <strong>butyrate</strong>, which is the primary metabolic fuel for colonocytes. Stool consistency becomes softer and bowel transit times normalize naturally, provided the juice is strictly free of laxative aloin latex.</p>
      </section>

      <section id="days-15-30">
        <h2>Days 15–30: Glycemic Sensitivity & Systemic Biomarkers</h2>
        <p>Over a full month of daily intake, physiological changes expand to metabolic and systemic parameters. In double-blind clinical trials involving pre-diabetic and metabolic syndrome cohorts, daily consumption of purified aloe gel demonstrated statistically significant reductions in fasting plasma glucose and total serum cholesterol.</p>
        <p>Specific plant sterols (lophenol and cycloartanol) isolated from aloe inner gel appear to upregulate glucose transporter expression (GLUT4) in muscle tissue and improve peripheral insulin sensitivity.</p>
      </section>

      <section id="the-decolorization-rule">
        <h2>The Mandatory Safety Rule: Decolorized Only</h2>
        <p>A critical safety warning applies to daily consumption: <strong>never consume unpurified, non-decolorized whole-leaf aloe products on a daily basis</strong>. Daily consumption must strictly be <em>certified decolorized inner-fillet juice</em> meeting International Aloe Science Council (IASC) standards of less than 10 ppm total aloin. Consuming unpurified aloe latex daily leads to chronic hypokalemia (potassium depletion), severe cramping, and mucosal hyperplasia.</p>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['gerd-panahi-2015'],
      CLINICAL_STUDIES['diabetes-glycemic-huseini-2012'],
      CLINICAL_STUDIES['iasc-standards-monograph-2020']
    ],
    faqs: [
      {
        question: 'What is the recommended daily dosage of aloe vera juice?',
        answer: 'The evidence-based therapeutic dosage for gastrointestinal and metabolic support is 1 to 2 ounces (30 to 60 ml) once daily, taken on an empty stomach approximately 20 minutes before breakfast. Doses exceeding 4 ounces daily provide no additional benefit and increase the risk of loose stools.'
      },
      {
        question: 'Can pregnant or nursing women drink aloe vera juice?',
        answer: 'No. Oral aloe vera is strictly contraindicated during pregnancy and breastfeeding. Aloe anthraquinones stimulate uterine contractions (posing miscarriage risks) and pass into breast milk, potentially causing severe colic and diarrhea in nursing infants.'
      },
      {
        question: 'Does daily aloe vera juice interact with prescription medications?', answer: 'Yes. Aloe vera can enhance the hypoglycemic effect of diabetes medications (like metformin and insulin) and lower potassium levels when combined with loop or thiazide diuretics. Consult your physician before starting a daily regimen.'
      }
    ],
    relatedSlugs: ['how-to-remove-aloin-from-aloe-leaf', 'aloe-vera-juice-dosage-calculator', 'best-pure-aloe-vera-gels-reviewed']
  },
  {
    slug: 'aloe-vera-juice-dosage-calculator',
    pillar: 'health',
    title: 'Daily Aloe Vera Juice Dosage Calculator: Safe Ounce Limits by Body Weight',
    metaTitle: 'Aloe Vera Juice Dosage Calculator | Safe Daily Limits by Weight',
    metaDescription: 'Calculate your exact safe daily intake of aloe vera juice based on body weight, health goals, and product concentration. Avoid aloin overdose and cramping.',
    publishedAt: '2025-01-26',
    updatedAt: '2025-02-20',
    readTimeMinutes: 5,
    authorId: 'formulation-desk',
    reviewedById: 'botanical-research-desk',
    badge: 'Interactive Micro-Tool',
    directAnswer: 'For general gastrointestinal and digestive health, the standard clinical dosage of single-strength decolorized aloe vera juice is 1 to 2 fluid ounces (30 to 60 ml) daily, taken on an empty stomach. For therapeutic acid reflux (GERD) support, clinical trials utilized 10 to 30 ml twice daily before meals. Never exceed 4 ounces (120 ml) in a 24-hour period.',
    tableOfContents: [
      { id: 'dosage-factors', title: 'Key Variables Determining Your Safe Daily Dose', level: 2 },
      { id: 'clinical-dosing-table', title: 'Clinical Dosing Guidelines by Health Objective', level: 2 },
      { id: 'calculator-tool', title: 'Interactive Daily Intake Estimator', level: 2 },
      { id: 'overdose-symptoms', title: 'Warning Signs of Excessive Aloe Juice Intake', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
    ],
    htmlContent: `
      <section id="dosage-factors">
        <h2>Key Variables Determining Your Safe Daily Dose</h2>
        <p>Finding the ideal daily intake of oral aloe vera requires balancing therapeutic efficacy with physiological safety. Three critical factors dictate your safe dosage ceiling:</p>
        <ol>
          <li><strong>Product Concentration:</strong> Standard single-strength inner-fillet juice (1x) vs. concentrated extracts (10x or 40x). Concentrates must be diluted in water proportionally.</li>
          <li><strong>Body Mass Index & Weight:</strong> Smaller individuals require lower fluid volume to achieve the same systemic saturation of bioactive polysaccharides.</li>
          <li><strong>Target Clinical Objective:</strong> Soothing mild esophageal heartburn requires a small pre-meal coating (10–20 ml), whereas systemic metabolic glycemic modulation utilizes 30–60 ml twice daily.</li>
        </ol>
      </section>

      <section id="clinical-dosing-table">
        <h2>Clinical Dosing Guidelines by Health Objective</h2>
        <div class="overflow-x-auto my-6">
          <table class="w-full text-left border-collapse border border-emerald-200">
            <thead>
              <tr class="bg-emerald-50 text-emerald-900">
                <th class="p-3 border border-emerald-200">Health Objective</th>
                <th class="p-3 border border-emerald-200">Daily Intake (Single Strength)</th>
                <th class="p-3 border border-emerald-200">Timing Strategy</th>
                <th class="p-3 border border-emerald-200">Clinical Evidence Base</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Acid Reflux & GERD Soothing</td>
                <td class="p-3 border border-emerald-200">10–30 ml (0.3–1.0 fl oz)</td>
                <td class="p-3 border border-emerald-200">20 minutes before meals</td>
                <td class="p-3 border border-emerald-200">Panahi et al., 2015 (RCT)</td>
              </tr>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Daily Digestive Maintenance</td>
                <td class="p-3 border border-emerald-200">30–60 ml (1.0–2.0 fl oz)</td>
                <td class="p-3 border border-emerald-200">Morning on an empty stomach</td>
                <td class="p-3 border border-emerald-200">Langmead et al., 2004</td>
              </tr>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Pre-Diabetic Glycemic Support</td>
                <td class="p-3 border border-emerald-200">60 ml (2.0 fl oz) twice daily</td>
                <td class="p-3 border border-emerald-200">Morning and evening before meals</td>
                <td class="p-3 border border-emerald-200">Huseini et al., 2012 (RCT)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="calculator-tool">
        <h2>Interactive Daily Intake Estimator</h2>
        <p>Finding the optimal balance between therapeutic mucosal coating and digestive tolerance depends on your body weight, product concentration, and primary health goal. Because aloe vera contains natural polysaccharides that draw water into the digestive tract, starting with a conservative titration prevents sudden loose stools while allowing your gut microbiome to adapt.</p>
        <p>Use our interactive dosage calculator below to calculate your customized daily volume in both milliliters and fluid ounces. As a general clinical rule: begin at the lowest recommended dose for 3 consecutive days. Once gastrointestinal tolerance is confirmed, gradually titrate upward to the target therapeutic amount, always dividing larger daily intakes into two equal morning and evening servings.</p>
      </section>

      <section id="overdose-symptoms">
        <h2>Warning Signs of Excessive Aloe Juice Intake</h2>
        <p>If you consume too much aloe vera juice or inadvertently ingest unpurified whole-leaf products, monitor for these toxicity symptoms:</p>
        <ul>
          <li><strong>Abdominal Colic & Cramping:</strong> Indicates unremoved anthraquinone aloin stimulating intestinal smooth muscles.</li>
          <li><strong>Watery Diarrhea:</strong> Excess unabsorbed polysaccharides exerting an osmotic effect in the bowel lumen.</li>
          <li><strong>Electrolyte Imbalance (Hypokalemia):</strong> Muscle weakness, heart palpitations, or lightheadedness caused by excessive potassium excretion.</li>
        </ul>
      </section>
    `,
    scientificCitations: [
      CLINICAL_STUDIES['gerd-panahi-2015'],
      CLINICAL_STUDIES['diabetes-glycemic-huseini-2012'],
      CLINICAL_STUDIES['iasc-standards-monograph-2020']
    ],
    faqs: [
      {
        question: 'Can I drink aloe vera juice straight or should it be diluted?',
        answer: 'Pure decolorized inner-fillet aloe has a mild, slightly tart taste and can be drunk straight. Many people prefer diluting it in 4 to 8 ounces of cold water or mixing it into morning green smoothies.'
      },
      {
        question: 'Should I drink aloe vera juice cold or room temperature?',
        answer: 'For acute heartburn or acid reflux flares, chilled aloe vera juice provides immediate thermal soothing to the irritated esophageal tract. For general digestion, room temperature is gentler on stomach enzymes.'
      }
    ],
    relatedSlugs: ['what-happens-drinking-aloe-vera-daily', 'how-to-remove-aloin-from-aloe-leaf', 'best-pure-aloe-vera-gels-reviewed']
  }
];

export const HEALTH_ARTICLES: Article[] = [
  ...CORE_HEALTH_ARTICLES,
  ...HEALTH_DIGESTION_ARTICLES,
  ...HEALTH_SAFETY_ARTICLES,
  ...HEALTH_RECIPES_ARTICLES,
  ...HEALTH_SYSTEMIC_ARTICLES,
];
