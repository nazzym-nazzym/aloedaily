import { MAIN_NAV } from '../../config/navigation';
import { SITE_CONFIG } from '../../config/site';

export function renderHeader(): string {
  const navHtml = MAIN_NAV.map(
    (item) => `<a href="${item.href}" class="nav-link">${item.label}</a>`
  ).join('');

  return `
    <header>
      <div class="container nav-wrap">
        <a href="/" class="brand">
          <img src="${SITE_CONFIG.logo}" alt="${SITE_CONFIG.name} Logo" width="40" height="40" fetchpriority="high" decoding="async" style="height: 2.5rem; width: 2.5rem; object-fit: contain; display: block;" />
          <span>Aloe<span style="color: #059669;">Daily</span></span>
        </a>
        <nav class="nav-links">
          ${navHtml}
          <a href="/audits/" class="nav-pill">Lab Purity Audits</a>
        </nav>
      </div>
    </header>
  `;
}
