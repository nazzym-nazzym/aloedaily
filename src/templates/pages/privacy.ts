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
          Effective Date: January 1, 2025 &bull; Last Revised: November 28, 2026
        </p>
      </div>
    </div>

    <div class="article-container" style="padding: 3.5rem 1.25rem 5rem;">
      <div class="prose" style="font-size: 1rem; color: #292524; line-height: 1.7;">
        <h2>1. Commitment to Reader Privacy</h2>
        <p>
          At ${SITE_CONFIG.name} (${SITE_CONFIG.domain}), we respect reader privacy and maintain transparent data practices. We operate on a serverless edge architecture via Cloudflare Workers and limit first-party data collection strictly to what is necessary for site security, editorial correspondence, and transparent monetization.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We collect information in the following ways:
        </p>
        <ul>
          <li><strong>Direct Communications:</strong> When you submit a clinical citation inquiry or press dispatch through our <a href="/contact/">Contact Form</a> or via email to <a href="mailto:${SITE_CONFIG.adminEmail}">${SITE_CONFIG.adminEmail}</a>, we receive your name, email address, subject, and message content solely to respond to your inquiry.</li>
          <li><strong>Server &amp; Edge Security Logs:</strong> Like standard internet infrastructure, our edge network automatically processes technical request metadata (IP address, user agent, requested URI, timestamp) for DDoS mitigation, cybersecurity defense, and system reliability.</li>
          <li><strong>Advertising &amp; Cookie Data:</strong> When advertising partners (such as Google AdSense) are active on this site, cookies or device identifiers may be used by third-party vendors as described in Section 3 below.</li>
        </ul>

        <h2>3. Advertising, Google AdSense &amp; Third-Party Cookies</h2>
        <p>
          ${SITE_CONFIG.name} uses or may use third-party advertising networks, including <strong>Google AdSense</strong>, to support independent botanical research and free public access to our guides.
        </p>
        <ul>
          <li>Third-party vendors, including Google, use cookies (and similar local storage or device identifiers) to serve ads based on a user's prior visits to ${SITE_CONFIG.domain} or other websites on the Internet.</li>
          <li>Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to ${SITE_CONFIG.domain} and/or other sites on the Internet.</li>
          <li>You may opt out of personalized advertising at any time by visiting <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">YourAdChoices (aboutads.info)</a> or <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">Your Online Choices</a>.</li>
        </ul>
        <p>
          You may also control or disable cookies through your browser settings at any time; however, disabling cookies may affect certain site preferences or consent choices.
        </p>

        <h2>4. Affiliate Referrals &amp; Outbound Links</h2>
        <p>
          ${SITE_CONFIG.name} participates in select affiliate referral programs. When you click an outbound link (routed through our <code>/out/</code> redirection paths) to purchase reviewed aloe products, we may earn a referral commission from the retailer at no additional cost to you. Outbound partner sites operate under their own independent privacy policies, and we encourage you to review their terms before completing transactions.
        </p>

        <h2>5. Consent Management (EEA / UK / Switzerland) &amp; CCPA / CPRA Rights</h2>
        <p>
          Visitors from the European Economic Area (EEA), the United Kingdom, and Switzerland are presented with consent choices regarding personalized advertising and non-essential cookies in compliance with the General Data Protection Regulation (GDPR) and Google EU User Consent Policy.
        </p>
        <p>
          Under the California Consumer Privacy Act (CCPA / CPRA) and GDPR frameworks, you retain the right to:
        </p>
        <ul>
          <li>Access any personal communication records we maintain regarding your inquiries.</li>
          <li>Request correction or permanent deletion of your contact records from our editorial archive.</li>
          <li>Withdraw or modify your advertising consent preferences, or opt out of personalized advertising via the links in Section 3.</li>
        </ul>
        <p>
          ${SITE_CONFIG.name} does not directly sell personal contact records collected through our editorial forms.
        </p>

        <h2>6. Contact Our Data Governance Team</h2>
        <p>
          To exercise your privacy rights, inquire about cookie disclosures, or request data erasure, transmit a formal request to our editorial desk:
        </p>
        <p>
          <strong>Data Protection Contact:</strong> <a href="mailto:${SITE_CONFIG.adminEmail}">${SITE_CONFIG.adminEmail}</a><br />
          <strong>Entity:</strong> ${SITE_CONFIG.name} Publishing Team &bull; ${SITE_CONFIG.domain}
        </p>
      </div>
    </div>
  `;
}
