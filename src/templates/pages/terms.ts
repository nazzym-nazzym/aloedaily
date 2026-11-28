import { SITE_CONFIG } from '../../config/site';

export function renderTermsPage(): string {
  return `
    <div style="background: linear-gradient(180deg, #ecfdf5 0%, #fafaf9 100%); padding: 3.5rem 0 2.5rem; border-bottom: 1px solid #e7e5e4;">
      <div class="container" style="max-width: 820px;">
        <nav aria-label="Breadcrumb" style="margin-bottom: 1.25rem;">
          <ol style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.35rem; list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #78716c;">
            <li><a href="/" style="color: #047857;">Home</a></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li aria-current="page" style="color: #44403c; font-weight: 600;">Terms of Service</li>
          </ol>
        </nav>

        <span class="badge-pill" style="margin-bottom: 0.75rem;">Legal Framework</span>
        <h1 style="font-size: clamp(2rem, 4vw, 2.75rem); color: #064e3b; margin-bottom: 0.75rem;">
          Terms of Service & Editorial Disclaimers
        </h1>
        <p style="font-size: 1.05rem; color: #44403c; line-height: 1.6;">
          Effective Date: January 1, 2025 &bull; Last Revised: November 28, 2026
        </p>
      </div>
    </div>

    <div class="article-container" style="padding: 3.5rem 1.25rem 5rem;">
      <div class="prose" style="font-size: 1rem; color: #292524; line-height: 1.7;">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or reading ${SITE_CONFIG.name} (${SITE_CONFIG.domain}), you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
        </p>

        <h2>2. Strictly Educational & Botanical Scope (No Medical Relationship)</h2>
        <p>
          <strong>${SITE_CONFIG.disclaimer.medical}</strong>
        </p>
        <p>
          The protocols, scientific summaries, calculators, and diagnostic guides published on ${SITE_CONFIG.name} are designed for educational, botanical, and consumer information purposes only. Nothing on this website establishes a physician-patient, dermatologist-patient, or healthcare professional relationship. Always seek the advice of your physician or qualified health provider before ingesting botanical extracts or applying new substances to irritated skin.
        </p>

        <h2>3. FDA Regulatory Disclosure</h2>
        <p>
          <strong>${SITE_CONFIG.disclaimer.fda}</strong>
        </p>

        <h2>4. Independent Product Audits &amp; Affiliate Referral Disclosures</h2>
        <p>
          ${SITE_CONFIG.disclaimer.affiliate}
        </p>
        <p>
          Our evaluations on The AloeDaily Purity Index™ (API-100) are conducted independently based on INCI ingredient statement analysis, third-party certification verification (such as IASC and USDA Organic), and published scientific literature. Brands cannot purchase favorable ratings or influence editorial findings.
        </p>

        <h2>5. Intellectual Property & Botanical Content</h2>
        <p>
          All proprietary articles, diagrams, aloin removal protocols, dosage formulas, and testing methodologies published on ${SITE_CONFIG.name} are the intellectual property of ${SITE_CONFIG.name} and protected by applicable copyright and trademark law. Fair-use quotation with clear, clickable attribution to <code>https://${SITE_CONFIG.domain}</code> is welcomed.
        </p>

        <h2>6. Editorial Inquiries</h2>
        <p>
          For legal or intellectual property inquiries, contact our management desk:
        </p>
        <p>
          <strong>Editorial Management:</strong> <a href="mailto:${SITE_CONFIG.adminEmail}">${SITE_CONFIG.adminEmail}</a>
        </p>
      </div>
    </div>
  `;
}
