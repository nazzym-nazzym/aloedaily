import { AUTHORS } from '../../data/authors';
import { SITE_CONFIG } from '../../config/site';

export function renderAboutPage(): string {
  const reviewersHtml = Object.values(AUTHORS).map(author => `
    <div class="card" style="margin-bottom: 1.5rem;">
      <div style="display: flex; gap: 1.25rem; align-items: flex-start; flex-wrap: wrap;">
        <img
          src="${author.avatarUrl}"
          alt="Portrait of ${author.name}, ${author.role}"
          loading="lazy"
          decoding="async"
          style="width: 4.5rem; height: 4.5rem; border-radius: 9999px; object-fit: cover; border: 2px solid #059669;"
        />
        <div style="flex: 1; min-width: 250px;">
          <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #059669; letter-spacing: 0.05em;">
            ${author.isMedicalReviewer ? 'Medical Reviewer' : 'Botanical Specialist'}
          </span>
          <h3 style="font-size: 1.3rem; color: #064e3b; margin: 0.15rem 0 0.25rem;">
            <a href="/authors/${author.id}/" style="color: inherit; text-decoration: none;">${author.name}</a>
          </h3>
          <div style="font-size: 0.875rem; color: #57534e; margin-bottom: 0.5rem;">${author.role} &bull; ${author.organization}</div>
          <p style="font-size: 0.9rem; color: #44403c; line-height: 1.5; margin-bottom: 0.75rem;">${author.bio}</p>
          <div style="display: flex; gap: 0.85rem; font-size: 0.825rem; flex-wrap: wrap;">
            <a href="/authors/${author.id}/" style="color: #047857; font-weight: 700;">Full Profile & Bio &rarr;</a>
            ${author.linkedInUrl ? `<a href="${author.linkedInUrl}" target="_blank" rel="noopener noreferrer" style="color: #047857; font-weight: 600;">LinkedIn &rarr;</a>` : ''}
            ${author.orcidId ? `<a href="https://orcid.org/${author.orcidId}" target="_blank" rel="noopener noreferrer" style="color: #047857; font-weight: 600;">ORCID: ${author.orcidId} &rarr;</a>` : ''}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div style="background: linear-gradient(180deg, #ecfdf5 0%, #fafaf9 100%); padding: 3.5rem 0 2.5rem; border-bottom: 1px solid #e7e5e4;">
      <div class="container" style="max-width: 820px;">
        <nav aria-label="Breadcrumb" style="margin-bottom: 1.25rem;">
          <ol style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.35rem; list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #78716c;">
            <li><a href="/" style="color: #047857;">Home</a></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li aria-current="page" style="color: #44403c; font-weight: 600;">About AloeDaily</li>
          </ol>
        </nav>

        <span class="badge-pill" style="margin-bottom: 0.75rem;">Our Mission & Manifesto</span>
        <h1 style="font-size: clamp(2rem, 4vw, 2.85rem); color: #064e3b; margin-bottom: 0.75rem;">
          Why We Founded AloeDaily: The Antidote to "Greenwashed" Botanical Misinformation
        </h1>
        <p style="font-size: 1.15rem; color: #44403c; line-height: 1.6;">
          We built AloeDaily out of sheer frustration with the modern internet. Between automated content mills publishing dangerous health advice and big-box brands selling bottles of neon-green plastic gel falsely labeled "100% Pure," consumers needed an honest, clinical sanctuary.
        </p>
      </div>
    </div>

    <div class="article-container" style="padding: 3.5rem 1.25rem 5rem;">
      <section style="margin-bottom: 3.5rem;">
        <h2 style="font-size: 1.75rem; color: #064e3b; margin-bottom: 1rem; border-bottom: 1px solid #e7e5e4; padding-bottom: 0.4rem;">
          Our Origin Story
        </h2>
        <p class="prose" style="font-size: 1.05rem; line-height: 1.7; color: #292524;">
          If you search the internet for aloe vera today, you will immediately find two extremes. On one side are generic affiliate blogs churning out regurgitated fluff telling people to swallow whole raw leaves (unaware that the yellow aloin latex inside causes violent cramping and diarrhea). On the other side are multimillion-dollar cosmetic conglomerates selling inexpensive squeeze bottles packed with carbomers, triethanolamine, and artificial dyes, boasting "100% Aloe" on the front label while containing virtually zero active acemannan.
        </p>
        <p class="prose" style="font-size: 1.05rem; line-height: 1.7; color: #292524;">
          We brought together a board-certified dermatologist (Dr. Elena Vance), an experienced botanical horticulturist (Marcus Chen), and a clinical aesthetician (Sarah Jenkins) to create the definitive, evidence-backed daily authority on <em>Aloe barbadensis Miller</em>.
        </p>
      </section>

      <section id="editorial-policy" style="margin-bottom: 3.5rem;">
        <h2 style="font-size: 1.75rem; color: #064e3b; margin-bottom: 1rem; border-bottom: 1px solid #e7e5e4; padding-bottom: 0.4rem;">
          Our 4-Pillar Editorial & Fact-Checking Standard
        </h2>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1.25rem;">
            <h3 style="font-size: 1.15rem; color: #064e3b; margin-bottom: 0.35rem;">1. Primary Medical & Botanical Literature Only</h3>
            <p style="font-size: 0.95rem; color: #44403c; margin: 0; line-height: 1.5;">
              Every health and skincare statement we publish links directly to primary peer-reviewed clinical trials, meta-analyses, or toxicological safety assessments indexed on PubMed, NCBI, or the Journal of the American Academy of Dermatology. We never cite secondary lifestyle aggregators or unverified blogs.
            </p>
          </div>

          <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1.25rem;">
            <h3 style="font-size: 1.15rem; color: #064e3b; margin-bottom: 0.35rem;">2. Mandatory YMYL Clinical Review</h3>
            <p style="font-size: 0.95rem; color: #44403c; margin: 0; line-height: 1.5;">
              Before any ingestible juice recipe, aloin draining protocol, or topical skincare guide is published, it must pass review by Dr. Elena Vance or our specialist board. We scrutinize contraindications, pregnancy warnings, and safe daily intake thresholds with clinical conservatism.
            </p>
          </div>

          <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1.25rem;">
            <h3 style="font-size: 1.15rem; color: #064e3b; margin-bottom: 0.35rem;">3. First-Hand Greenhouse & Bench Testing</h3>
            <p style="font-size: 0.95rem; color: #44403c; margin: 0; line-height: 1.5;">
              Marcus Chen grows, propagates, and dissects living aloe plants in our greenhouse. Our leaf harvesting angles, aloin gravity draining timings, and succulent gritty mix recipes come from real dirt-under-the-fingernails horticulture—not theoretical armchair musings.
            </p>
          </div>

          <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1.25rem;">
            <h3 style="font-size: 1.15rem; color: #064e3b; margin-bottom: 0.35rem;">4. Anonymous Retail Purchasing & Zero Sponsored Reviews</h3>
            <p style="font-size: 0.95rem; color: #44403c; margin: 0; line-height: 1.5;">
              We purchase every commercial product anonymously off store shelves and Amazon. Brands cannot buy placements, pay for higher scores on The AloeDaily Purity Index™ (API-100), or preview our investigative reviews before publication.
            </p>
          </div>
        </div>
      </section>

      <section id="medical-board" style="margin-bottom: 3.5rem;">
        <h2 style="font-size: 1.75rem; color: #064e3b; margin-bottom: 1.25rem; border-bottom: 1px solid #e7e5e4; padding-bottom: 0.4rem;">
          Our Medical & Botanical Advisory Board
        </h2>
        ${reviewersHtml}
      </section>

      <section id="contact" style="background: #ecfdf5; border-radius: 1rem; padding: 2rem; border: 1px solid #a7f3d0;">
        <h3 style="font-size: 1.3rem; color: #064e3b; margin-bottom: 0.5rem;">Editorial Desk & Media Inquiries</h3>
        <p style="font-size: 0.95rem; color: #065f46; line-height: 1.6; margin-bottom: 1rem;">
          For clinical research corrections, press inquiries, or reader feedback, contact our management team:
        </p>
        <div style="font-size: 0.95rem; color: #064e3b; line-height: 1.7;">
          <strong>Editorial & Research Desk:</strong> <a href="mailto:${SITE_CONFIG.adminEmail}" style="color: #047857; text-decoration: underline;">${SITE_CONFIG.adminEmail}</a><br />
          <strong>Media & Press Relations:</strong> <a href="mailto:${SITE_CONFIG.mediaEmail}" style="color: #047857; text-decoration: underline;">${SITE_CONFIG.mediaEmail}</a>
        </div>
      </section>
    </div>
  `;
}
