import { AUTHORS } from '../../data/authors';
import { SITE_CONFIG } from '../../config/site';

export function renderReviewBoardPage(): string {
  const primaryDeskIds = ['botanical-research-desk', 'horticulture-desk', 'formulation-desk'];
  const desksHtml = primaryDeskIds.map(id => {
    const author = AUTHORS[id];
    if (!author) return '';
    return `
      <div class="card" style="margin-bottom: 2rem;">
        <div style="display: flex; gap: 1.5rem; align-items: flex-start; flex-wrap: wrap;">
          <img
            src="${author.avatarUrl}"
            alt="Emblem of ${author.name}"
            loading="lazy"
            decoding="async"
            style="width: 5rem; height: 5rem; border-radius: 9999px; object-fit: cover; border: 2px solid #059669; padding: 2px;"
          />
          <div style="flex: 1; min-width: 260px;">
            <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #059669; letter-spacing: 0.05em;">
              ${author.isMedicalReviewer ? 'Medical & Clinical Review Lead' : 'Specialist Board Desk'}
            </span>
            <h3 style="font-size: 1.35rem; color: #064e3b; margin: 0.25rem 0 0.35rem;">
              <a href="/authors/${author.id}/" style="color: inherit; text-decoration: none;">${author.name}</a>
            </h3>
            <div style="font-size: 0.9rem; color: #57534e; margin-bottom: 0.5rem; font-weight: 600;">
              ${author.role} &bull; ${author.credentials}
            </div>
            <p style="font-size: 0.925rem; color: #44403c; line-height: 1.55; margin-bottom: 0.75rem;">
              ${author.bio}
            </p>
            <div style="display: flex; gap: 1rem; font-size: 0.85rem; flex-wrap: wrap;">
              <a href="/authors/${author.id}/" style="color: #047857; font-weight: 700;">View Desk Profile & Vetted Protocols &rarr;</a>
              <span style="color: #a8a29e;">&bull;</span>
              <span style="color: #065f46; font-weight: 500;">Standards: ${author.alumniOf}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div style="background: linear-gradient(180deg, #ecfdf5 0%, #fafaf9 100%); padding: 3.5rem 0 2.5rem; border-bottom: 1px solid #e7e5e4;">
      <div class="container" style="max-width: 820px;">
        <nav aria-label="Breadcrumb" style="margin-bottom: 1.25rem;">
          <ol style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.35rem; list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #78716c;">
            <li><a href="/" style="color: #047857;">Home</a></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li><a href="/about/" style="color: #047857;">About</a></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li aria-current="page" style="color: #44403c; font-weight: 600;">Review Board</li>
          </ol>
        </nav>

        <span class="badge-pill" style="margin-bottom: 0.75rem;">E-E-A-T Editorial Masthead</span>
        <h1 style="font-size: clamp(2rem, 4vw, 2.85rem); color: #064e3b; margin-bottom: 0.75rem;">
          Medical & Botanical Review Board
        </h1>
        <p style="font-size: 1.15rem; color: #44403c; line-height: 1.6;">
          The multidisciplinary research desks, scientific vetting procedures, and evidence standards behind every AloeDaily clinical protocol.
        </p>
      </div>
    </div>

    <div class="article-container" style="padding: 3.5rem 1.25rem 5rem;">
      <section style="margin-bottom: 3.5rem;">
        <h2 style="font-size: 1.75rem; color: #064e3b; margin-bottom: 1rem; border-bottom: 1px solid #e7e5e4; padding-bottom: 0.4rem;">
          Clinical Review Protocol for YMYL Content
        </h2>
        <p class="prose" style="font-size: 1.05rem; line-height: 1.7; color: #292524;">
          Because aloe vera encompasses both topical dermatological care and internal ingestible use, our content directly touches Your Money or Your Life (YMYL) health categories. To ensure maximum accuracy, safety, and regulatory compliance, all medical, dermatological, and ingestible content is vetted against our strict three-tier clinical framework:
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; margin: 1.5rem 0;">
          <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1.25rem;">
            <div style="font-size: 1.2rem; margin-bottom: 0.4rem;">🔬</div>
            <h4 style="font-size: 1.05rem; color: #064e3b; margin: 0 0 0.35rem;">Toxicological Safety</h4>
            <p style="font-size: 0.875rem; color: #57534e; margin: 0; line-height: 1.5;">Verification of aloin anthraquinone limits (&lt;10 ppm IASC oral standard), hepatotoxicity contraindications, and electrolyte interactions.</p>
          </div>
          <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1.25rem;">
            <div style="font-size: 1.2rem; margin-bottom: 0.4rem;">🧪</div>
            <h4 style="font-size: 1.05rem; color: #064e3b; margin: 0 0 0.35rem;">Dermatological Evidence</h4>
            <p style="font-size: 0.875rem; color: #57534e; margin: 0; line-height: 1.5;">Evaluation of stratum corneum barrier repair, humectant acemannan mechanics, trans-epidermal water loss (TEWL), and fungal acne safety.</p>
          </div>
          <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1.25rem;">
            <div style="font-size: 1.2rem; margin-bottom: 0.4rem;">🌱</div>
            <h4 style="font-size: 1.05rem; color: #064e3b; margin: 0 0 0.35rem;">Botanical Horticulture</h4>
            <p style="font-size: 0.875rem; color: #57534e; margin: 0; line-height: 1.5;">Arid xerophyte soil kinetics, fungal pathogen prevention (<em>Pythium</em> and <em>Phytophthora</em>), and sustainable harvest protocols.</p>
          </div>
        </div>
      </section>

      <section style="margin-bottom: 3.5rem;">
        <h2 style="font-size: 1.75rem; color: #064e3b; margin-bottom: 1.5rem; border-bottom: 1px solid #e7e5e4; padding-bottom: 0.4rem;">
          Specialized Editorial & Review Desks
        </h2>
        ${desksHtml}
      </section>

      <section style="background: #ecfdf5; border-radius: 1rem; padding: 2rem; border: 1px solid #a7f3d0;">
        <h3 style="font-size: 1.3rem; color: #064e3b; margin-bottom: 0.5rem;">Clinical Review Board Inquiries</h3>
        <p style="font-size: 0.95rem; color: #065f46; line-height: 1.6; margin-bottom: 1rem;">
          Are you a licensed dermatologist, academic botanist, or cosmetic chemist interested in contributing clinical review oversight or submitting trial data? Contact our scientific desk:
        </p>
        <div style="font-size: 0.95rem; color: #064e3b;">
          <strong>Direct Scientific Board Contact:</strong> <a href="mailto:${SITE_CONFIG.adminEmail}" style="color: #047857; text-decoration: underline;">${SITE_CONFIG.adminEmail}</a>
        </div>
      </section>
    </div>
  `;
}
