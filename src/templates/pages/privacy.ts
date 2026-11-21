import { SITE_CONFIG } from '../../config/site';

export function renderPrivacyPage(): string {
  return `
    <div style="background: linear-gradient(180deg, #ecfdf5 0%, #fafaf9 100%); padding: 3.5rem 0 2.5rem; border-bottom: 1px solid #e7e5e4;">
      <div class="container" style="max-width: 820px;">
        <nav aria-label="Breadcrumb" style="margin-bottom: 1.25rem;">
          <ol style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.35rem; list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #78716c;">
            <li><a href="/" style="color: #047857;">Home</a></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li aria-current="page" style="color: #44403c; font-weight: 600;">Privacy Policy</li>
          </ol>
        </nav>

        <span class="badge-pill" style="margin-bottom: 0.75rem;">Legal & Data Protection</span>
        <h1 style="font-size: clamp(2rem, 4vw, 2.75rem); color: #064e3b; margin-bottom: 0.75rem;">
          Privacy Policy & Data Governance
        </h1>
        <p style="font-size: 1.05rem; color: #44403c; line-height: 1.6;">
          Effective Date: January 1, 2025 &bull; Last Revised: February 20, 2025
        </p>
      </div>
    </div>

    <div class="article-container" style="padding: 3.5rem 1.25rem 5rem;">
      <div class="prose" style="font-size: 1rem; color: #292524; line-height: 1.7;">
        <h2>1. Commitment to Reader Privacy</h2>
        <p>
          At ${SITE_CONFIG.name} (${SITE_CONFIG.domain}), reader privacy is an absolute pillar of our ethical standard. Because we operate on a zero-origin, server-side edge architecture via Cloudflare Workers, we do not deploy invasive third-party ad-tracking pixels, fingerprinting scripts, or cross-site tracking cookies.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We only collect personal information that you knowingly and voluntarily provide to us:
        </p>
        <ul>
          <li><strong>Direct Communications:</strong> When you submit a clinical citation inquiry or press dispatch through our Contact Form or via email to <a href="mailto:${SITE_CONFIG.adminEmail}">${SITE_CONFIG.adminEmail}</a>, we receive your name, email address, and message content.</li>
          <li><strong>Server Logs:</strong> Like all internet services, our edge infrastructure automatically receives standard technical request data (IP address, user agent, requested URI, timestamp) solely for cybersecurity defense, DDoS mitigation, and system health monitoring. These logs are retained for no longer than 30 days.</li>
        </ul>

        <h2>3. Affiliate Referrals & Outbound Links</h2>
        <p>
          ${SITE_CONFIG.name} participates in select affiliate referral programs. When you click an outbound link (routed through our <code>/out/</code> redirection paths) to purchase lab-audited aloe products, we may earn a referral fee from the retailer. Outbound partner sites operate under their own independent privacy policies. We encourage you to review their terms before completing transactions.
        </p>

        <h2>4. Cookies & Edge Storage</h2>
        <p>
          ${SITE_CONFIG.name} does not use tracking cookies or persistent advertising cookies. Any localized cookies used on this domain are strictly necessary for session security and edge caching.
        </p>

        <h2>5. CCPA / CPRA & GDPR Data Rights</h2>
        <p>
          Under California Consumer Privacy Act (CCPA) and European General Data Protection Regulation (GDPR) frameworks, you retain full rights to:
        </p>
        <ul>
          <li>Access any personal communication records we maintain regarding your inquiries.</li>
          <li>Request permanent deletion of your contact records from our editorial archive.</li>
          <li>Opt-out of any commercial communications (we do not sell or rent consumer personal data to third parties under any circumstances).</li>
        </ul>

        <h2>6. Contact Our Data Governance Team</h2>
        <p>
          To exercise your privacy rights or request data erasure, transmit a formal request to our editorial desk:
        </p>
        <p>
          <strong>Data Protection Contact:</strong> <a href="mailto:${SITE_CONFIG.adminEmail}">${SITE_CONFIG.adminEmail}</a><br />
          <strong>Entity:</strong> ${SITE_CONFIG.name} Publishing Team &bull; ${SITE_CONFIG.domain}
        </p>
      </div>
    </div>
  `;
}
