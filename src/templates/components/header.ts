import { MAIN_NAV } from '../../config/navigation';
import { SITE_CONFIG } from '../../config/site';

export function renderHeader(): string {
  const navHtml = MAIN_NAV.map(
    (item) => `<a href="${item.href}" class="nav-link">${item.label}</a>`
  ).join('');

  return `
    <header role="banner">
      <div class="container nav-wrap">
        <a href="/" class="brand" aria-label="${SITE_CONFIG.name} Homepage">
          <img src="${SITE_CONFIG.logo}" alt="${SITE_CONFIG.name} Logo" width="40" height="40" fetchpriority="high" decoding="async" style="height: 2.5rem; width: 2.5rem; object-fit: contain; display: block;" />
          <span>Aloe<span style="color: #059669;">Daily</span></span>
        </a>

        <input type="checkbox" id="nav-toggle" class="nav-toggle" aria-label="Toggle navigation menu" />
        <label for="nav-toggle" class="nav-toggle-btn" aria-label="Open navigation menu" tabindex="0">
          <span class="nav-toggle-bar"></span>
          <span class="nav-toggle-bar"></span>
          <span class="nav-toggle-bar"></span>
        </label>

        <nav class="nav-links" id="main-navigation" aria-label="Main navigation">
          ${navHtml}
          <a href="/about/" class="nav-link">About</a>
          <a href="/contact/" class="nav-link">Contact</a>
          <a href="/audits/" class="nav-pill">Lab Purity Audits</a>
        </nav>
      </div>
    </header>
  `;
}
