export const INLINE_CSS = `
/* Modern CSS Reset & Botanical Design Tokens */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; line-height: 1.6; color: #1c1917; background-color: #fafaf9; -webkit-font-smoothing: antialiased; }
body { min-height: 100vh; display: flex; flex-direction: column; overflow-x: hidden; }

/* Container & Typography */
.container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 1.25rem; }
.article-container { width: 100%; max-width: 820px; margin: 0 auto; padding: 0 1.25rem; }
h1, h2, h3, h4 { color: #064e3b; line-height: 1.25; font-weight: 700; }
a { color: #047857; text-decoration: none; transition: color 0.15s ease; }
a:hover { color: #065f46; text-decoration: underline; }

/* Header & Nav */
header { background: #ffffff; border-bottom: 1px solid #e7e5e4; position: sticky; top: 0; z-index: 40; }
.nav-wrap { display: flex; align-items: center; justify-content: space-between; height: 4.25rem; }
.brand { display: flex; align-items: center; gap: 0.65rem; font-size: 1.35rem; font-weight: 800; color: #064e3b; text-decoration: none; }
/* Nav Links & Mobile Toggle */
.nav-links { display: flex; align-items: center; gap: 1.5rem; }
.nav-link { color: #44403c; font-size: 0.925rem; font-weight: 600; text-decoration: none; }
.nav-link:hover { color: #047857; text-decoration: none; }
.nav-pill { background: #064e3b; color: #ffffff !important; padding: 0.45rem 1rem; border-radius: 9999px; font-size: 0.825rem; font-weight: 600; transition: background 0.15s ease; text-decoration: none; }
.nav-pill:hover { background: #047857; }

/* CSS-Only Accessible Responsive Hamburger */
.nav-toggle { display: none; }
.nav-toggle-btn { display: none; flex-direction: column; justify-content: center; align-items: center; gap: 5px; width: 2.75rem; height: 2.75rem; border-radius: 0.5rem; border: 1px solid #d6d3d1; background: #ffffff; cursor: pointer; padding: 0.5rem; }
.nav-toggle-bar { display: block; width: 1.25rem; height: 2px; background-color: #064e3b; transition: all 0.2s ease-in-out; border-radius: 2px; }

/* Skip Link for Accessibility */
.skip-link { position: absolute; top: -40px; left: 0; background: #064e3b; color: white; padding: 8px 16px; z-index: 100; font-weight: 700; text-decoration: none; border-radius: 0 0 4px 0; }
.skip-link:focus { top: 0; }

/* Article Hero & Typography */
.badge-pill { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; background: #dcfce7; color: #166534; }
.direct-answer-box { background: #ecfdf5; border-left: 4px solid #059669; border-radius: 0 0.75rem 0.75rem 0; padding: 1.25rem 1.5rem; margin: 1.5rem 0; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
.article-figure { margin: 1.25rem 0 1.75rem; border-radius: 1rem; overflow: hidden; border: 1px solid #e7e5e4; background: #064e3b; box-shadow: 0 6px 20px -4px rgba(6,78,59,0.12); }
.article-figure img { width: 100%; height: auto; display: block; }
.prose h2 { font-size: 1.65rem; margin-top: 2.25rem; margin-bottom: 0.85rem; padding-bottom: 0.4rem; border-bottom: 1px solid #e7e5e4; }
.prose h3 { font-size: 1.25rem; margin-top: 1.5rem; margin-bottom: 0.5rem; }
.prose p { margin-bottom: 1.15rem; color: #292524; font-size: 1.05rem; }
.prose ul, .prose ol { margin-left: 1.5rem; margin-bottom: 1.25rem; }
.prose li { margin-bottom: 0.4rem; }
.prose strong { color: #0f172a; }

/* Tables & Table Utilities */
.overflow-x-auto { width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; }
.my-6 { margin-top: 1.5rem; margin-bottom: 1.5rem; }
.w-full { width: 100%; }
.text-left { text-align: left; }
.border-collapse { border-collapse: collapse; }
.border { border: 1px solid #e2e8f0; }
.border-emerald-200 { border-color: #a7f3d0; }
.bg-emerald-50 { background-color: #ecfdf5; }
.p-3 { padding: 0.75rem; }
.font-medium { font-weight: 500; }
.font-bold { font-weight: 700; }
.text-emerald-900 { color: #064e3b; }
.text-emerald-800 { color: #065f46; }
.text-amber-800 { color: #92400e; }
.text-rose-800, .text-red-800 { color: #9f1239; }
.text-stone-500 { color: #78716c; }
.text-stone-600 { color: #57534e; }
table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.95rem; background: #ffffff; }
th { background: #f0fdf4; color: #166534; text-align: left; padding: 0.75rem 1rem; border: 1px solid #bbf7d0; font-weight: 700; }
td { padding: 0.75rem 1rem; border: 1px solid #e2e8f0; vertical-align: top; }

/* Cards & Grid */
.grid-cols-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
.grid-cols-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; }
.card { background: #ffffff; border: 1px solid #e7e5e4; border-radius: 1rem; padding: 1.5rem; transition: transform 0.15s ease, box-shadow 0.15s ease; text-decoration: none; color: inherit; display: flex; flex-direction: column; }
.card:hover { transform: translateY(-3px); box-shadow: 0 10px 25px -5px rgba(0,0,0,0.08); text-decoration: none; border-color: #86efac; }

/* Interactive Micro-Tools */
.tool-card { background: linear-gradient(135deg, #064e3b 0%, #042f2e 100%); color: #ffffff; border-radius: 1.25rem; padding: 1.75rem; margin: 2rem 0; border: 1px solid #047857; box-shadow: 0 12px 28px -6px rgba(6,78,59,0.28); }
.tool-card h3 { color: #ffffff; font-size: 1.45rem; margin: 0; }
.tool-header { display: flex; align-items: center; justify-content: space-between; gap: 1rem; border-bottom: 1px solid rgba(167,243,208,0.2); padding-bottom: 1rem; margin-bottom: 1.25rem; }
.tool-badge { display: inline-block; padding: 0.2rem 0.7rem; background: rgba(16,185,129,0.22); color: #6ee7b7; font-size: 0.72rem; font-weight: 700; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.35rem; }
.tool-subtitle { color: #d1fae5; font-size: 0.92rem; line-height: 1.55; margin-bottom: 1.25rem; }
.tool-panel { background: rgba(2,44,34,0.55); border: 1px solid rgba(110,231,183,0.2); border-radius: 0.85rem; padding: 1.25rem; margin-bottom: 1.25rem; }
.tool-row { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; }
.tool-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin-bottom: 1.25rem; }
.tool-grid-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; text-align: center; }
.tool-label { display: block; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.06em; color: #6ee7b7; font-weight: 700; margin-bottom: 0.45rem; }
.tool-input, .tool-select { width: 100%; background: #022c22; border: 1px solid #047857; border-radius: 0.5rem; padding: 0.6rem 0.85rem; color: #ffffff; font-size: 0.98rem; font-family: inherit; }
.tool-input:focus, .tool-select:focus { outline: 2px solid #34d399; border-color: #34d399; }
.tool-btn-primary { padding: 0.65rem 1.25rem; background: #10b981; color: #022c22; font-weight: 800; font-size: 0.95rem; border: none; border-radius: 0.5rem; cursor: pointer; transition: background 0.15s ease; }
.tool-btn-primary:hover { background: #34d399; }
.tool-btn-primary.is-running { background: #fbbf24; color: #451a03; }
.tool-btn-primary:disabled { opacity: 0.65; cursor: not-allowed; }
.tool-btn-secondary { padding: 0.65rem 1.1rem; background: #065f46; color: #d1fae5; font-weight: 600; font-size: 0.95rem; border: 1px solid #059669; border-radius: 0.5rem; cursor: pointer; }
.tool-btn-secondary:hover { background: #047857; }
.tool-notice { background: rgba(120,53,15,0.45); border: 1px solid rgba(251,191,36,0.35); border-radius: 0.75rem; padding: 0.9rem 1rem; font-size: 0.82rem; color: #fde68a; line-height: 1.5; }

/* Search Bar */
.search-form { display: flex; gap: 0.5rem; max-width: 560px; margin: 1.75rem auto 0; }
.search-input { flex: 1; min-width: 0; padding: 0.75rem 1.1rem; border: 1px solid #a7f3d0; border-radius: 9999px; font-size: 0.95rem; background: #ffffff; color: #1c1917; }
.search-input:focus { outline: 2px solid #059669; border-color: #059669; }
.search-btn { background: #047857; color: #ffffff; border: none; padding: 0.75rem 1.35rem; border-radius: 9999px; font-weight: 700; font-size: 0.925rem; cursor: pointer; white-space: nowrap; }
.search-btn:hover { background: #064e3b; }

/* Reviewer Card */
.reviewer-card { background: #f5f5f4; border-radius: 0.85rem; padding: 1rem 1.25rem; display: flex; align-items: center; gap: 1rem; margin: 1.5rem 0; border: 1px solid #e7e5e4; }
.reviewer-avatar { width: 3.5rem; height: 3.5rem; border-radius: 9999px; object-fit: cover; border: 2px solid #059669; }

/* Footer */
footer { background: #064e3b; color: #d1fae5; padding: 4rem 0 2rem; margin-top: auto; }
footer a { color: #a7f3d0; text-decoration: none; }
footer a:hover { color: #ffffff; text-decoration: underline; }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 2.5rem; margin-bottom: 3rem; }

/* Mobile Responsive Navigation & Grids */
@media (max-width: 860px) {
  .nav-toggle-btn { display: flex; }
  .nav-links {
    display: none;
    position: absolute;
    top: 4.25rem;
    left: 0;
    right: 0;
    background: #ffffff;
    border-bottom: 2px solid #059669;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
    gap: 1.15rem;
    box-shadow: 0 15px 25px -5px rgba(0,0,0,0.15);
    z-index: 50;
  }
  .nav-toggle:checked ~ .nav-links { display: flex; }
  .nav-toggle:checked ~ .nav-toggle-btn .nav-toggle-bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .nav-toggle:checked ~ .nav-toggle-btn .nav-toggle-bar:nth-child(2) { opacity: 0; }
  .nav-toggle:checked ~ .nav-toggle-btn .nav-toggle-bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  .grid-cols-2, .grid-cols-3, .footer-grid, .tool-grid-2, .tool-grid-3 { grid-template-columns: 1fr; gap: 1.25rem; }
  .search-form { flex-direction: column; }
  .reviewer-card { flex-direction: column; align-items: flex-start; }
}

/* Modal */
.modal-backdrop { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.65); z-index: 50; align-items: center; justify-content: center; padding: 1rem; backdrop-filter: blur(4px); }
.modal-box { background: #ffffff; border-radius: 1.25rem; width: 100%; max-width: 520px; padding: 2rem; position: relative; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
`;
