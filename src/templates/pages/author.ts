import { Author, Article } from '../../data/types';
import { SITE_CONFIG } from '../../config/site';

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

export function renderAuthorPage(
  author: Author,
  authoredArticles: Article[],
  reviewedArticles: Article[]
): string {
  const authoredHtml = authoredArticles.map(
    (article) => `
      <article class="card">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
          <span class="badge-pill" style="font-size: 0.7rem;">${article.pillar}</span>
          ${article.badge ? `<span style="font-size: 0.7rem; font-weight: 700; color: #0369a1; background: #e0f2fe; padding: 0.2rem 0.5rem; border-radius: 9999px;">${article.badge}</span>` : ''}
          <span style="font-size: 0.75rem; color: #78716c; margin-left: auto;">${article.readTimeMinutes} min read</span>
        </div>
        <h3 style="font-size: 1.15rem; color: #064e3b; margin-bottom: 0.5rem;">
          <a href="/${article.pillar}/${article.slug}/" style="color: inherit; text-decoration: none;">
            ${article.title}
          </a>
        </h3>
        <p style="font-size: 0.875rem; color: #57534e; line-height: 1.5; margin-bottom: 1rem; flex-grow: 1;">
          ${article.metaDescription}
        </p>
        <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #f5f5f4; padding-top: 0.75rem; margin-top: auto;">
          <span style="font-size: 0.8rem; color: #78716c;">Updated ${formatDate(article.updatedAt)}</span>
          <a href="/${article.pillar}/${article.slug}/" style="font-size: 0.85rem; font-weight: 700; color: #047857;">Read Protocol &rarr;</a>
        </div>
      </article>
    `
  ).join('');

  const reviewedHtml = reviewedArticles.map(
    (article) => `
      <article class="card">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
          <span class="badge-pill" style="font-size: 0.7rem;">${article.pillar}</span>
          <span style="font-size: 0.7rem; font-weight: 700; color: #065f46; background: #ecfdf5; padding: 0.2rem 0.5rem; border-radius: 9999px; border: 1px solid #a7f3d0;">🛡️ Medically Reviewed</span>
          <span style="font-size: 0.75rem; color: #78716c; margin-left: auto;">${article.readTimeMinutes} min read</span>
        </div>
        <h3 style="font-size: 1.15rem; color: #064e3b; margin-bottom: 0.5rem;">
          <a href="/${article.pillar}/${article.slug}/" style="color: inherit; text-decoration: none;">
            ${article.title}
          </a>
        </h3>
        <p style="font-size: 0.875rem; color: #57534e; line-height: 1.5; margin-bottom: 1rem; flex-grow: 1;">
          ${article.metaDescription}
        </p>
        <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #f5f5f4; padding-top: 0.75rem; margin-top: auto;">
          <span style="font-size: 0.8rem; color: #78716c;">Updated ${formatDate(article.updatedAt)}</span>
          <a href="/${article.pillar}/${article.slug}/" style="font-size: 0.85rem; font-weight: 700; color: #047857;">Read Protocol &rarr;</a>
        </div>
      </article>
    `
  ).join('');

  return `
    <div style="background: linear-gradient(180deg, #ecfdf5 0%, #fafaf9 100%); padding: 3.5rem 0 2.5rem; border-bottom: 1px solid #e7e5e4;">
      <div class="container" style="max-width: 900px;">
        <nav aria-label="Breadcrumb" style="margin-bottom: 1.25rem;">
          <ol style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.35rem; list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #78716c;">
            <li><a href="/" style="color: #047857;">Home</a></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li><a href="/about/" style="color: #047857;">Medical & Botanical Board</a></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li aria-current="page" style="color: #44403c; font-weight: 600;">${author.name}</li>
          </ol>
        </nav>

        <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
          <img
            src="${author.avatarUrl}"
            alt="Portrait of ${author.name}, ${author.role}"
            width="120"
            height="120"
            fetchpriority="high"
            decoding="async"
            style="width: 7.5rem; height: 7.5rem; border-radius: 9999px; object-fit: cover; border: 3px solid #059669; box-shadow: 0 4px 14px rgba(5,150,105,0.2);"
          />
          <div style="flex: 1; min-width: 280px;">
            <span class="badge-pill" style="margin-bottom: 0.5rem;">
              ${author.isMedicalReviewer ? 'Board-Certified Medical Reviewer' : 'Botanical Subject Specialist'}
            </span>
            <h1 style="font-size: clamp(2rem, 4vw, 2.75rem); color: #064e3b; margin: 0.25rem 0 0.4rem; line-height: 1.2;">
              ${author.name}
            </h1>
            <div style="font-size: 1.05rem; font-weight: 600; color: #047857; margin-bottom: 0.25rem;">
              ${author.role}
            </div>
            <div style="font-size: 0.9rem; color: #57534e;">
              ${author.organization} &bull; ${author.alumniOf}
            </div>

            <div style="display: flex; gap: 1rem; margin-top: 1rem; flex-wrap: wrap; font-size: 0.85rem;">
              ${author.linkedInUrl ? `<a href="${author.linkedInUrl}" target="_blank" rel="noopener noreferrer" style="color: #047857; font-weight: 700; text-decoration: underline;">LinkedIn Profile &rarr;</a>` : ''}
              ${author.orcidId ? `<a href="https://orcid.org/${author.orcidId}" target="_blank" rel="noopener noreferrer" style="color: #047857; font-weight: 700; text-decoration: underline;">ORCID: ${author.orcidId} &rarr;</a>` : ''}
              ${author.medicalRegistryUrl ? `<a href="${author.medicalRegistryUrl}" target="_blank" rel="noopener noreferrer" style="color: #047857; font-weight: 700; text-decoration: underline;">NPI Registry &rarr;</a>` : ''}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container" style="max-width: 900px; padding: 3rem 1.25rem 5rem;">
      <section style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 1.25rem; padding: 2rem; margin-bottom: 3.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <h2 style="font-size: 1.4rem; color: #064e3b; margin-bottom: 1rem; border-bottom: 1px solid #e7e5e4; padding-bottom: 0.5rem;">
          Biography & Clinical Credentials
        </h2>
        <p style="font-size: 1.05rem; color: #292524; line-height: 1.7; margin-bottom: 1.25rem;">
          ${author.bio}
        </p>
        <div style="background: #ecfdf5; border-left: 4px solid #059669; border-radius: 0 0.5rem 0.5rem 0; padding: 1rem 1.25rem;">
          <div style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #059669; letter-spacing: 0.05em; margin-bottom: 0.25rem;">
            E-E-A-T Editorial Commitment
          </div>
          <p style="font-size: 0.9rem; color: #065f46; margin: 0; line-height: 1.5;">
            All articles authored or reviewed by ${author.name} undergo rigorous primary-literature verification against studies indexed on PubMed, NCBI, and JAAD, adhering strictly to AloeDaily's 4-Pillar Clinical Fact-Checking Standard.
          </p>
        </div>
      </section>

      ${authoredArticles.length > 0 ? `
        <section style="margin-bottom: 3.5rem;">
          <h2 style="font-size: 1.6rem; color: #064e3b; margin-bottom: 1.5rem;">
            Articles Authored (${authoredArticles.length})
          </h2>
          <div class="grid-cols-2">
            ${authoredHtml}
          </div>
        </section>
      ` : ''}

      ${reviewedArticles.length > 0 ? `
        <section style="margin-bottom: 3.5rem;">
          <h2 style="font-size: 1.6rem; color: #064e3b; margin-bottom: 1.5rem;">
            Clinical & Botanical Protocols Reviewed (${reviewedArticles.length})
          </h2>
          <div class="grid-cols-2">
            ${reviewedHtml}
          </div>
        </section>
      ` : ''}
    </div>
  `;
}
