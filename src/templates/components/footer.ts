import { FOOTER_NAV } from '../../config/navigation';
import { SITE_CONFIG } from '../../config/site';

export function renderFooter(): string {
  const pillarsHtml = FOOTER_NAV.pillars.map(
    (item) => `<li><a href="${item.href}">${item.label}</a></li>`
  ).join('');

  const toolsHtml = FOOTER_NAV.tools.map(
    (item) => `<li><a href="${item.href}">${item.label}</a></li>`
  ).join('');

  const companyHtml = FOOTER_NAV.company.map(
    (item) => `<li><a href="${item.href}">${item.label}</a></li>`
  ).join('');

  return `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 1.4rem; font-weight: 800; color: #fff; margin-bottom: 0.75rem;">
              <span>🌿</span>
              <span>AloeDaily</span>
            </div>
            <p style="font-size: 0.875rem; color: #a7f3d0; line-height: 1.6; margin-bottom: 1.25rem;">
              The definitive daily authority for botanical skincare protocols, pure aloe vera applications, aloin safety, cultivation, and independent retail product purity audits.
            </p>
            <div style="font-size: 0.8rem; color: #6ee7b7; border-left: 2px solid #059669; padding-left: 0.75rem;">
              Reviewed by Board-Certified Dermatology & Horticultural Specialists.
            </div>
          </div>

          <div>
            <h4 style="color: #fff; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1rem;">Core Verticals</h4>
            <ul style="list-style: none; font-size: 0.875rem; display: flex; flex-direction: column; gap: 0.6rem;">
              ${pillarsHtml}
            </ul>
          </div>

          <div>
            <h4 style="color: #fff; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1rem;">Interactive Utilities</h4>
            <ul style="list-style: none; font-size: 0.875rem; display: flex; flex-direction: column; gap: 0.6rem;">
              ${toolsHtml}
            </ul>
          </div>

          <div>
            <h4 style="color: #fff; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1rem;">Standards & Contact</h4>
            <ul style="list-style: none; font-size: 0.875rem; display: flex; flex-direction: column; gap: 0.6rem;">
              ${companyHtml}
            </ul>
          </div>
        </div>

        <!-- Compliance & Regulatory Disclosure Matrix -->
        <div style="border-top: 1px solid #047857; padding-top: 1.5rem; margin-top: 1.5rem; font-size: 0.75rem; color: #6ee7b7; line-height: 1.65;">
          <p style="margin-bottom: 0.5rem;"><strong>Editorial Independence:</strong> ${SITE_CONFIG.disclaimer.editorial}</p>
          <p style="margin-bottom: 0.5rem;"><strong>Medical Disclosure:</strong> ${SITE_CONFIG.disclaimer.medical}</p>
          <p style="margin-bottom: 0.5rem;"><strong>FDA Notice:</strong> ${SITE_CONFIG.disclaimer.fda}</p>
          <p style="margin-bottom: 0.5rem;"><strong>Affiliate & Advertising Disclosure:</strong> ${SITE_CONFIG.disclaimer.affiliate}</p>
          <p style="margin-bottom: 0.75rem;"><strong>Imagery & Depictions:</strong> ${SITE_CONFIG.disclaimer.model}</p>
          
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; color: #a7f3d0; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 0.75rem; margin-top: 0.75rem;">
            <span>&copy; ${new Date().getFullYear()} ${SITE_CONFIG.name} (${SITE_CONFIG.domain}). All rights reserved.</span>
            <span>Independent Research Publication &bull; Edge-SSR Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
