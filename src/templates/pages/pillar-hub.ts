import { Pillar } from '../../data/types';
import { getArticlesByPillar } from '../../data/articles';

function formatDate(dateStr: string): string {
  try {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const monthIndex = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const date = new Date(Date.UTC(year, monthIndex, day));
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
    }
  } catch (e) {}
  return dateStr;
}

export function renderPillarHubPage(pillar: Pillar): string {
  const articles = getArticlesByPillar(pillar.id);

  const articlesListHtml = articles.map((article) => `
    <article class="card">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
        <span class="badge-pill" style="font-size: 0.7rem;">${article.pillar}</span>
        ${article.badge ? `<span style="font-size: 0.7rem; font-weight: 700; color: #0369a1; background: #e0f2fe; padding: 0.2rem 0.5rem; border-radius: 9999px;">${article.badge}</span>` : ''}
        <span style="font-size: 0.75rem; color: #78716c; margin-left: auto;">${article.readTimeMinutes} min read</span>
      </div>
      <h3 style="font-size: 1.25rem; color: #064e3b; margin-bottom: 0.5rem;">
        <a href="/${article.pillar}/${article.slug}/" style="color: inherit; text-decoration: none;">
          ${article.title}
        </a>
      </h3>
      <p style="font-size: 0.9rem; color: #57534e; line-height: 1.5; margin-bottom: 1.25rem; flex-grow: 1;">
        ${article.metaDescription}
      </p>
      <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #f5f5f4; padding-top: 0.75rem; margin-top: auto;">
        <span style="font-size: 0.8rem; color: #78716c;">Updated <time datetime="${article.updatedAt}">${formatDate(article.updatedAt)}</time></span>
        <a href="/${article.pillar}/${article.slug}/" style="font-size: 0.875rem; font-weight: 700; color: #047857;">Read Protocol &rarr;</a>
      </div>
    </article>
  `).join('');

  return `
    <div style="background: linear-gradient(180deg, #ecfdf5 0%, #fafaf9 100%); padding: 3.5rem 0 2.5rem; border-bottom: 1px solid #e7e5e4;">
      <div class="container">
        <!-- Semantic Accessible Breadcrumbs -->
        <nav aria-label="Breadcrumb" style="margin-bottom: 1rem;">
          <ol style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.35rem; list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #78716c;">
            <li><a href="/" style="color: #047857;">Home</a></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li aria-current="page" style="color: #44403c; font-weight: 600;">${pillar.title}</li>
          </ol>
        </nav>
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
          <span style="font-size: 1.5rem;">🌿</span>
          <span style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: #059669; letter-spacing: 0.05em;">
            Pillar Authority Hub
          </span>
        </div>
        <h1 style="font-size: clamp(2rem, 4vw, 2.85rem); color: #064e3b; margin-bottom: 0.85rem;">
          ${pillar.heroHeadline}
        </h1>
        <p style="font-size: 1.15rem; color: #44403c; max-width: 800px; line-height: 1.6;">
          ${pillar.metaDescription}
        </p>
      </div>
    </div>

    <div class="container" style="padding: 3.5rem 0 5rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem;">
        <h2 style="font-size: 1.6rem; color: #064e3b;">Spoke Articles in this Pillar (${articles.length})</h2>
      </div>
      <div class="grid-cols-2">
        ${articlesListHtml}
      </div>
    </div>
  `;
}
