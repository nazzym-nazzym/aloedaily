import { MAIN_NAV } from '../../config/navigation';

export function renderHeader(): string {
  const navHtml = MAIN_NAV.map(
    (item) => `<a href="${item.href}" class="nav-link">${item.label}</a>`
  ).join('');

  return `
    <header>
      <div class="container nav-wrap">
        <a href="/" class="brand">
          <span style="font-size: 1.6rem;">🌿</span>
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
