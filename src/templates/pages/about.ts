import { AUTHORS } from '../../data/authors';
import { SITE_CONFIG } from '../../config/site';

export function renderAboutPage(): string {
  const reviewersHtml = Object.values(AUTHORS).map(author => `
    <div class="card" style="margin-bottom: 1.5rem;">
      <div style="display: flex; gap: 1.25rem; align-items: flex-start;">
        <img src="${author.avatarUrl}" alt="${author.name}" style="width: 4.5rem; height: 4.5rem; border-radius: 9999px; object-fit: cover; border: 2px solid #059669;" />
        <div>
          <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #059669; letter-spacing: 0.05em;">
            ${author.isMedicalReviewer ? 'Medical Reviewer' : 'Botanical Specialist'}
          </span>
          <h3 style="font-size: 1.3rem; color: #064e3b; margin: 0.15rem 0 0.25rem;">${author.name}</h3>
          <div style="font-size: 0.875rem; color: #57534e; margin-bottom: 0.5rem;">${author.role} &bull; ${author.organization}</div>
          <p style="font-size: 0.9rem; color: #44403c; line-height: 1.5; margin-bottom: 0.75rem;">${author.bio}</p>
          <div style="display: flex; gap: 0.85rem; font-size: 0.825rem;">
            ${author.linkedInUrl ? `<a href="${author.linkedInUrl}" target="_blank" rel="noopener noreferrer" style="color: #047857; font-weight: 600;">LinkedIn Profile &rarr;</a>` : ''}
            ${author.orcidId ? `<a href="https://orcid.org/${author.orcidId}" target="_blank" rel="noopener noreferrer" style="color: #047857; font-weight: 600;">ORCID ID: ${author.orcidId} &rarr;</a>` : ''}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div style="background: linear-gradient(180deg, #ecfdf5 0%, #fafaf9 100%); padding: 3.5rem 0 2.5rem; border-bottom: 1px solid #e7e5e4;">
      <div class="container" style="max-width: 820px;">
        <span class="badge-pill" style="margin-bottom: 0.75rem;">Standards & Governance</span>
        <h1 style="font-size: clamp(2rem, 4vw, 2.85rem); color: #064e3b; margin-bottom: 0.75rem;">
          About AloeDaily: Editorial Integrity & Scientific Rigor
        </h1>
        <p style="font-size: 1.15rem; color: #44403c; line-height: 1.6;">
          AloeDaily is dedicated to eliminating botanical misinformation, debunking commercial cosmetic claims, and establishing evidence-based standards for pure aloe vera applications.
        </p>
      </div>
    </div>

    <div class="article-container" style="padding: 3.5rem 1.25rem 5rem;">
      <section id="editorial-policy" style="margin-bottom: 3.5rem;">
        <h2 style="font-size: 1.75rem; color: #064e3b; margin-bottom: 1rem; border-bottom: 1px solid #e7e5e4; padding-bottom: 0.4rem;">
          Our 4-Pillar Editorial & Fact-Checking Policy
        </h2>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1.25rem;">
            <h3 style="font-size: 1.15rem; color: #064e3b; margin-bottom: 0.35rem;">1. Primary Scientific Literature Only</h3>
            <p style="font-size: 0.95rem; color: #44403c; margin: 0; line-height: 1.5;">
              Every health and skincare protocol published on AloeDaily must cite peer-reviewed randomized controlled trials (RCTs), systematic reviews, or toxicological studies indexed on PubMed, NCBI, or the Journal of the American Academy of Dermatology. We do not cite secondary content farms.
            </p>
          </div>

          <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1.25rem;">
            <h3 style="font-size: 1.15rem; color: #064e3b; margin-bottom: 0.35rem;">2. Mandatory YMYL Medical & Botanical Review</h3>
            <p style="font-size: 0.95rem; color: #44403c; margin: 0; line-height: 1.5;">
              All ingestible wellness and clinical skincare guides undergo scrutiny by our board-certified dermatological and horticultural review board prior to publication. Reviewers cross-examine dosage safety thresholds, aloin toxicological bounds, and drug-nutrient contraindications.
            </p>
          </div>

          <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1.25rem;">
            <h3 style="font-size: 1.15rem; color: #064e3b; margin-bottom: 0.35rem;">3. First-Hand Horticultural & Laboratory Testing</h3>
            <p style="font-size: 0.95rem; color: #44403c; margin: 0; line-height: 1.5;">
              We cultivate true <em>Aloe barbadensis Miller</em> plants in-house. Our harvesting angles, aloin draining timings, and propagation protocols reflect real greenhouse trial measurements, macro photography, and viscosity evaluations—not generic AI summaries.
            </p>
          </div>

          <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1.25rem;">
            <h3 style="font-size: 1.15rem; color: #064e3b; margin-bottom: 0.35rem;">4. Unbiased Product Benchmarks</h3>
            <p style="font-size: 0.95rem; color: #44403c; margin: 0; line-height: 1.5;">
              Our commercial gel audits adhere strictly to <strong>The AloeDaily Purity Index™ (API-100)</strong>. Brands cannot pay for favorable scores or placements. We perform independent iodine starch tests and verify third-party IASC accreditation certificates directly with regulatory registries.
            </p>
          </div>
        </div>
      </section>

      <section id="medical-board" style="margin-bottom: 3.5rem;">
        <h2 style="font-size: 1.75rem; color: #064e3b; margin-bottom: 1.25rem; border-bottom: 1px solid #e7e5e4; padding-bottom: 0.4rem;">
          Medical & Botanical Advisory Board
        </h2>
        ${reviewersHtml}
      </section>

      <section style="background: #ecfdf5; border-radius: 1rem; padding: 2rem; border: 1px solid #a7f3d0;">
        <h3 style="font-size: 1.3rem; color: #064e3b; margin-bottom: 0.5rem;">Corporate & Editorial Contact</h3>
        <p style="font-size: 0.95rem; color: #065f46; line-height: 1.6; margin-bottom: 1rem;">
          For clinical corrections, research submissions, or institutional domain acquisition inquiries, contact our management team:
        </p>
        <div style="font-size: 0.95rem; color: #064e3b;">
          <strong>Editorial:</strong> <a href="mailto:${SITE_CONFIG.adminEmail}" style="color: #047857;">${SITE_CONFIG.adminEmail}</a><br />
          <strong>Acquisitions:</strong> <a href="mailto:${SITE_CONFIG.inquiryEmail}" style="color: #047857;">${SITE_CONFIG.inquiryEmail}</a>
        </div>
      </section>
    </div>
  `;
}
