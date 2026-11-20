import { Article } from '../types';

export const CULTIVATION_ARTICLES: Article[] = [
  {
    slug: 'how-to-harvest-aloe-leaf-without-killing-plant',
    pillar: 'cultivation',
    title: 'How to Harvest Aloe Leaves Without Killing the Plant (Horticulturist Guide)',
    metaTitle: 'How to Harvest Aloe Vera Leaves Without Killing the Plant',
    metaDescription: 'Step-by-step horticultural guide for cutting a fresh aloe vera leaf without damaging the plant or inviting fungal infection. Best tools, angle, and healing times.',
    publishedAt: '2025-01-12',
    updatedAt: '2025-02-14',
    readTimeMinutes: 6,
    authorId: 'marcus-chen',
    reviewedById: 'marcus-chen',
    badge: 'Horticulture Guide',
    directAnswer: 'To harvest an aloe vera leaf safely without harming the plant: Select only the lowest, mature outer leaves closest to the soil base. Using a sterilized razor or sharp kitchen knife, make a clean, horizontal incision at the very base of the leaf stem where it attaches to the main central rosette. Never tear or rip the leaf, and leave the central young upright leaves untouched. The cut wound will callus naturally within 48 to 72 hours.',
    tableOfContents: [
      { id: 'leaf-selection', title: 'Which Leaves to Pick (And Which to Never Touch)', level: 2 },
      { id: 'harvesting-tools', title: 'Essential Harvesting Tools & Sterilization', level: 2 },
      { id: 'step-by-step', title: 'Step-by-Step Harvesting Technique', level: 2 },
      { id: 'plant-recovery', title: 'Post-Harvest Plant Care & Callus Formation', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
    ],
    htmlContent: `
      <section id="leaf-selection">
        <h2>Which Leaves to Pick (And Which to Never Touch)</h2>
        <p>An Aloe barbadensis Miller plant grows from an apical meristem at the center of its spiral rosette. The central, upright, tender green spears are the newest juvenile growth. <strong>Never cut central leaves</strong>, as damaging the apical meristem halts all new leaf production permanently.</p>
        <p>Always harvest from the <strong>bottom tier of mature outer leaves</strong>. These leaves are the thickest, contain the highest concentration of therapeutic acemannan polysaccharides, and are physiologically prepared to be naturally shed by the plant.</p>
      </section>

      <section id="harvesting-tools">
        <h2>Essential Harvesting Tools & Sterilization</h2>
        <p>Succulent plant tissue is prone to bacterial soft rot (<em>Erwinia chrysanthemi</em>) and fungal stem rot when unsterilized blades are used. Always wipe a clean, razor-sharp utility knife with 70% isopropyl alcohol and allow it to air dry for 60 seconds before making incisions.</p>
      </section>

      <section id="step-by-step">
        <h2>Step-by-Step Harvesting Technique</h2>
        <p>Follow our greenhouse-tested protocol to ensure zero plant stress:</p>
      </section>
    `,
    scientificCitations: [],
    howToSteps: [
      {
        name: 'Step 1: Inspect and Select the Lowest Leaf',
        text: 'Choose a thick, plump outer leaf at least 8 to 10 inches long showing deep green coloration and firm skin.'
      },
      {
        name: 'Step 2: Position Blade at Rosette Base',
        text: 'Gently push the leaf outward with your non-dominant hand. Place your sterilized blade flat against the base where the leaf sheath attaches to the main trunk.'
      },
      {
        name: 'Step 3: Make a Clean Horizontal Slice',
        text: 'Slice smoothly through the white fibrous base without cutting into adjacent leaf sheaths. Remove the leaf in one fluid motion.'
      },
      {
        name: 'Step 4: Allow Wound to Dry',
        text: 'Do not water the plant for 3 days post-harvest. The plant will exude sap that oxidizes into a firm waterproof callus, preventing pathogen invasion.'
      }
    ],
    faqs: [
      {
        question: 'Will the harvested leaf grow back?',
        answer: 'No. Individual harvested leaves do not regenerate. However, harvesting mature outer leaves redirects vegetative energy to the center, prompting the plant to rapidly produce new central leaves.'
      },
      {
        question: 'How often can I harvest from one aloe plant?',
        answer: 'For an indoor potted aloe plant, harvest no more than 1 or 2 outer leaves every 4 to 6 weeks to maintain plant vigor.'
      }
    ],
    relatedSlugs: ['how-to-remove-aloin-from-aloe-leaf', 'fix-soft-mushy-aloe-leaves']
  },
  {
    slug: 'fix-soft-mushy-aloe-leaves',
    pillar: 'cultivation',
    title: 'Why Are My Aloe Leaves Soft and Squishy? (Root Rot Diagnostic & Fix)',
    metaTitle: 'Why Are Aloe Leaves Soft & Squishy? How to Fix Root Rot Fast',
    metaDescription: 'Is your aloe vera plant turning soft, translucent, or brown? Diagnose overwatering vs underwatering and follow our emergency root rot repotting surgery.',
    publishedAt: '2025-01-26',
    updatedAt: '2025-02-18',
    readTimeMinutes: 7,
    authorId: 'marcus-chen',
    reviewedById: 'marcus-chen',
    badge: 'Plant Doctor Diagnostic',
    directAnswer: 'Aloe vera leaves turn soft, mushy, and translucent because of cellular rupture caused by overwatering and fungal root rot (Pythium or Phytophthora). When roots sit in dense, waterlogged soil, oxygen deprivation causes root death, preventing the plant from regulating water intake. To save the plant: unpot immediately, prune all black mushy roots, dust wounds with ground cinnamon, and repot into dry gritty succulent soil.',
    tableOfContents: [
      { id: 'diagnostic', title: 'Diagnostic: Overwatering vs. Underwatering', level: 2 },
      { id: 'root-rot-surgery', title: 'Emergency Root Rot Surgery Protocol', level: 2 },
      { id: 'soil-recipe', title: 'The 3:2:1 Gritty Soil Mix Recipe', level: 2 },
      { id: 'faqs', title: 'Frequently Asked Questions', level: 2 }
    ],
    htmlContent: `
      <section id="diagnostic">
        <h2>Diagnostic: Overwatering vs. Underwatering</h2>
        <div class="overflow-x-auto my-6">
          <table class="w-full text-left border-collapse border border-emerald-200">
            <thead>
              <tr class="bg-emerald-50 text-emerald-900">
                <th class="p-3 border border-emerald-200">Symptom</th>
                <th class="p-3 border border-emerald-200">Overwatering (Root Rot)</th>
                <th class="p-3 border border-emerald-200">Underwatering (Drying)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Leaf Texture</td>
                <td class="p-3 border border-emerald-200 text-rose-700 font-medium">Soft, squishy, jelly-like, waterlogged</td>
                <td class="p-3 border border-emerald-200 text-amber-700 font-medium">Thin, deflated, puckered, leathery</td>
              </tr>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Leaf Color</td>
                <td class="p-3 border border-emerald-200">Translucent pale green, brown or black spots</td>
                <td class="p-3 border border-emerald-200">Dull grayish green or bronze</td>
              </tr>
              <tr>
                <td class="p-3 border border-emerald-200 font-medium">Soil Moisture</td>
                <td class="p-3 border border-emerald-200">Wet or damp 2 inches below surface</td>
                <td class="p-3 border border-emerald-200">Bone dry and pulling away from pot rim</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="root-rot-surgery">
        <h2>Emergency Root Rot Surgery Protocol</h2>
        <p>If your aloe has mushy leaves, execute this 4-step emergency recovery within 24 hours:</p>
      </section>
    `,
    scientificCitations: [],
    howToSteps: [
      {
        name: 'Step 1: Unpot and Wash Root Ball',
        text: 'Carefully slide the aloe from its pot. Shake away damp soil and rinse roots gently under room-temperature water to expose root health.'
      },
      {
        name: 'Step 2: Amputate Necrotic Roots',
        text: 'Healthy roots are plump and white/pale yellow. Using sterilized shears, cut away all black, brown, slimy, or hollow roots back to healthy white tissue.'
      },
      {
        name: 'Step 3: Antifungal Dusting & Callus Cure',
        text: 'Dust all cut root surfaces with organic ground cinnamon (a natural antifungal agent). Lay the bare-root plant on newspaper in a shaded room for 48 hours to callus.'
      },
      {
        name: 'Step 4: Repot into Dry Terracotta',
        text: 'Repot into an unglazed terracotta pot with a drainage hole using gritty succulent soil. Do not water for 10 full days to encourage new root growth.'
      }
    ],
    faqs: [
      {
        question: 'Can mushy leaves turn firm again?',
        answer: 'No. Once a leaf turns translucent and mushy, its internal cell walls have ruptured irreparably. Cut off mushy leaves at the base to prevent rot spreading to the central crown.'
      },
      {
        question: 'What is the best pot material for aloe vera?',
        answer: 'Unglazed terracotta is vastly superior to plastic or glazed ceramic. Terracotta is porous, allowing moisture to evaporate through the pot walls and preventing root suffocation.'
      }
    ],
    relatedSlugs: ['how-to-harvest-aloe-leaf-without-killing-plant']
  }
];
