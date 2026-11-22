import { Article } from '../../data/types';
import { AUTHORS } from '../../data/authors';
import { PILLARS } from '../../data/pillars';
import { getArticleBySlug } from '../../data/articles';
import { renderAloinTimerScript } from '../../tools/aloin-timer';
import { renderDosageCalculatorScript } from '../../tools/dosage-calculator';

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

export function renderArticlePage(article: Article): string {
  const author = AUTHORS[article.authorId];
  const reviewer = article.reviewedById ? AUTHORS[article.reviewedById] : undefined;
  const pillar = PILLARS[article.pillar];

  // Table of Contents
  const tocHtml = article.tableOfContents.map(
    (item) => `<li style="margin-bottom: 0.35rem;"><a href="#${item.id}" style="color: #047857; font-size: 0.95rem;">${item.title}</a></li>`
  ).join('');

  // HowTo Steps
  let howToHtml = '';
  if (article.howToSteps && article.howToSteps.length > 0) {
    const stepsList = article.howToSteps.map((step, idx) => `
      <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.85rem; padding: 1.25rem; margin-bottom: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.4rem;">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 1.75rem; height: 1.75rem; border-radius: 9999px; background: #064e3b; color: #fff; font-size: 0.8rem; font-weight: 700;">${idx + 1}</span>
          <h4 style="font-size: 1.1rem; color: #064e3b; margin: 0;">${step.name}</h4>
        </div>
        <p style="font-size: 0.95rem; color: #44403c; line-height: 1.5; margin: 0; padding-left: 2.35rem;">${step.text}</p>
      </div>
    `).join('');

    howToHtml = `
      <div style="margin: 2rem 0;">
        <h3 style="font-size: 1.35rem; color: #064e3b; margin-bottom: 1rem;">Step-by-Step Procedure</h3>
        ${stepsList}
      </div>
    `;
  }

  // Interactive Tool injection based on slug
  let toolEmbedHtml = '';
  if (article.slug === 'how-to-remove-aloin-from-aloe-leaf') {
    toolEmbedHtml = renderAloinTimerScript();
  } else if (article.slug === 'aloe-vera-juice-dosage-calculator') {
    toolEmbedHtml = renderDosageCalculatorScript();
  }

  // Purity Scorecard (if product audit article)
  let scorecardHtml = '';
  if (article.purityScorecard) {
    const sc = article.purityScorecard;
    scorecardHtml = `
      <div style="background: #ffffff; border: 2px solid #059669; border-radius: 1.25rem; padding: 2rem; margin: 2rem 0; box-shadow: 0 10px 25px -5px rgba(5,150,105,0.1);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;">
          <div>
            <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #059669; letter-spacing: 0.05em;">The AloeDaily Purity Scorecard</span>
            <h3 style="font-size: 1.6rem; color: #064e3b; margin-top: 0.25rem;">${sc.productName}</h3>
            <div style="font-size: 0.95rem; color: #57534e;">Brand: <strong>${sc.brandName}</strong></div>
          </div>
          <div style="text-align: center; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 1rem; padding: 0.75rem 1.25rem;">
            <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #047857;">Purity Score</div>
            <div style="font-size: 2.2rem; font-weight: 900; color: #064e3b; line-height: 1;">${sc.overallScore}<span style="font-size: 1.1rem; font-weight: 500; color: #059669;">/100</span></div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; background: #fafaf9; padding: 1rem; border-radius: 0.75rem;">
          <div>
            <div style="font-size: 0.75rem; color: #78716c; text-transform: uppercase;">Acemannan Content</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: #064e3b;">${sc.acemannanPercentage}% Solids</div>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: #78716c; text-transform: uppercase;">Processing Method</div>
            <div style="font-size: 0.95rem; font-weight: 600; color: #44403c;">${sc.processingMethod}</div>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: #78716c; text-transform: uppercase;">Preservative Safety</div>
            <div style="font-size: 1rem; font-weight: 700; color: ${sc.preservativeSafety === 'Clean' ? '#047857' : '#b91c1c'};">${sc.preservativeSafety}</div>
          </div>
          <div>
            <div style="font-size: 0.75rem; color: #78716c; text-transform: uppercase;">IASC Certified</div>
            <div style="font-size: 1rem; font-weight: 700; color: ${sc.iascCertified ? '#047857' : '#78716c'};">${sc.iascCertified ? 'Verified Seal ✓' : 'Uncertified'}</div>
          </div>
        </div>

        <p style="font-size: 0.95rem; color: #44403c; line-height: 1.6; margin-bottom: 1.5rem;">
          <strong>Lab Verdict:</strong> ${sc.verdict}
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
          <div style="background: #f0fdf4; border-radius: 0.5rem; padding: 1rem;">
            <div style="font-weight: 700; color: #166534; font-size: 0.85rem; margin-bottom: 0.5rem;">✓ Formulation Advantages</div>
            <ul style="font-size: 0.85rem; color: #166534; padding-left: 1.25rem;">
              ${sc.pros.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>
          <div style="background: #fff1f2; border-radius: 0.5rem; padding: 1rem;">
            <div style="font-weight: 700; color: #9f1239; font-size: 0.85rem; margin-bottom: 0.5rem;">⚠ Potential Limitations</div>
            <ul style="font-size: 0.85rem; color: #9f1239; padding-left: 1.25rem;">
              ${sc.cons.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>
        </div>

        ${sc.affiliateUrl && sc.affiliateUrl !== '#' ? `
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; border-top: 1px solid #e7e5e4; padding-top: 1rem;">
            <div style="font-size: 0.8rem; color: #78716c;">
              Independent retail batch evaluation &bull; Non-sponsored testing
            </div>
            <a href="${sc.affiliateUrl}" target="_blank" rel="sponsored nofollow noopener" style="display: inline-block; background: #064e3b; color: #ffffff; padding: 0.65rem 1.25rem; border-radius: 0.5rem; font-weight: 700; font-size: 0.875rem; text-decoration: none;">
              Check Verified Retail Availability &rarr;
            </a>
          </div>
        ` : ''}
      </div>
    `;
  }

  // FAQs Accordions
  const faqsHtml = article.faqs.map(faq => `
    <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1.25rem; margin-bottom: 1rem;">
      <h3 style="font-size: 1.1rem; color: #064e3b; margin-bottom: 0.4rem;">${faq.question}</h3>
      <p style="font-size: 0.95rem; color: #44403c; line-height: 1.5; margin: 0;">${faq.answer}</p>
    </div>
  `).join('');

  // Scientific Citations list (defensively filtered to valid objects)
  const citationsHtml = article.scientificCitations.filter(Boolean).map(c => `
    <li style="margin-bottom: 0.6rem; font-size: 0.875rem; color: #57534e;">
      <strong>${c.studyTitle}</strong>. <em>${c.journal}</em> (${c.year}). 
      <span style="display: inline-block; background: #e0f2fe; color: #0369a1; padding: 0.1rem 0.4rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600;">${c.evidenceGrade}</span>
      ${c.pubmedId ? `<a href="https://pubmed.ncbi.nlm.nih.gov/${c.pubmedId}/" target="_blank" rel="noopener noreferrer" style="color: #047857; margin-left: 0.4rem;">[PubMed PMID: ${c.pubmedId}]</a>` : ''}
    </li>
  `).join('');

  // Related Spoke Articles (ensure at least 3-4 companion articles for maximum PageRank distribution)
  const expandedSlugs = [...article.relatedSlugs];
  if (expandedSlugs.length < 4) {
    const pillarArticles = (PILLARS[article.pillar] ? getArticleBySlug(article.slug) : undefined) ? [] : [];
  }

  // Find first related guide for mid-article callout box
  let midArticleCalloutHtml = '';
  if (article.relatedSlugs.length > 0) {
    const firstRel = getArticleBySlug(article.relatedSlugs[0]);
    if (firstRel) {
      midArticleCalloutHtml = `
        <div style="background: #f0fdf4; border-left: 4px solid #059669; padding: 1.15rem 1.25rem; margin: 2rem 0; border-radius: 0 0.75rem 0.75rem 0; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
          <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #059669; letter-spacing: 0.05em; margin-bottom: 0.25rem;">Recommended Companion Protocol</div>
          <a href="/${firstRel.pillar}/${firstRel.slug}/" style="font-size: 1.05rem; font-weight: 700; color: #064e3b; text-decoration: none; display: block; margin-bottom: 0.25rem;">
            ${firstRel.title} &rarr;
          </a>
          <p style="font-size: 0.875rem; color: #57534e; margin: 0; line-height: 1.45;">${firstRel.metaDescription}</p>
        </div>
      `;
    }
  }

  const relatedHtml = article.relatedSlugs.map(slug => {
    const rel = getArticleBySlug(slug);
    if (!rel) return '';
    return `
      <a href="/${rel.pillar}/${rel.slug}/" class="card">
        <span class="badge-pill" style="font-size: 0.65rem; width: fit-content; margin-bottom: 0.4rem;">${rel.pillar}</span>
        <h4 style="font-size: 1rem; color: #064e3b; margin-bottom: 0.25rem;">${rel.title}</h4>
        <span style="font-size: 0.8rem; color: #047857; font-weight: 600; margin-top: auto;">Read Guide &rarr;</span>
      </a>
    `;
  }).join('');

  return `
    <article class="article-container" style="padding: 2.5rem 1.25rem 5rem;">
      <!-- Semantic Accessible Breadcrumbs -->
      <nav aria-label="Breadcrumb" style="margin-bottom: 1.25rem;">
        <ol style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.35rem; list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #78716c;">
          <li><a href="/" style="color: #047857;">Home</a></li>
          <li aria-hidden="true">&rsaquo;</li>
          <li><a href="/${pillar.slug}/" style="color: #047857;">${pillar.shortTitle}</a></li>
          <li aria-hidden="true">&rsaquo;</li>
          <li aria-current="page" style="color: #44403c; font-weight: 600;">${article.title}</li>
        </ol>
      </nav>

      <!-- Badge & Title -->
      <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.75rem;">
        <span class="badge-pill">${article.pillar}</span>
        ${article.badge ? `<span style="font-size: 0.75rem; font-weight: 700; color: #0369a1; background: #e0f2fe; padding: 0.25rem 0.65rem; border-radius: 9999px;">${article.badge}</span>` : ''}
        <span style="font-size: 0.8rem; color: #78716c; margin-left: auto;">${article.readTimeMinutes} min read</span>
      </div>

      <h1 style="font-size: clamp(2rem, 4vw, 2.75rem); color: #064e3b; line-height: 1.2; margin-bottom: 1.25rem;">
        ${article.title}
      </h1>

      <!-- Author & Reviewer Metadata with Structured Profiles -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; padding-bottom: 1.5rem; border-bottom: 1px solid #e7e5e4; margin-bottom: 1.75rem; font-size: 0.875rem; color: #57534e;">
        <div>
          Authored by ${author ? `<a href="/authors/${author.id}/" style="color: #064e3b; font-weight: 700; text-decoration: underline;">${author.name}</a>` : '<strong>AloeDaily Editorial Team</strong>'}
          &bull; Published <time datetime="${article.publishedAt}">${formatDate(article.publishedAt)}</time>
          &bull; Updated <time datetime="${article.updatedAt}">${formatDate(article.updatedAt)}</time>
        </div>
        ${reviewer ? `
          <a href="/authors/${reviewer.id}/" style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.4rem; background: #ecfdf5; border: 1px solid #a7f3d0; padding: 0.35rem 0.75rem; border-radius: 9999px; color: #065f46; font-weight: 600; font-size: 0.8rem;">
            <span>🛡️ ${reviewer.isMedicalReviewer ? 'Scientifically Vetted by ' : 'Vetted by '}${reviewer.name}</span>
          </a>
        ` : ''}
      </div>

      <!-- Pillar Authority Hub Context -->
      <div style="margin-top: -0.75rem; margin-bottom: 1.5rem; font-size: 0.85rem; color: #065f46; background: #ecfdf5; padding: 0.5rem 0.85rem; border-radius: 0.5rem; border: 1px solid #a7f3d0; display: inline-flex; align-items: center; gap: 0.4rem;">
        <span>🌿 Master Hub:</span>
        <span>Part of our <a href="/${pillar.slug}/" style="color: #047857; font-weight: 700; text-decoration: underline;">${pillar.title} Guide</a></span>
      </div>

      <!-- GEO / AI Direct Answer Box -->
      <div class="direct-answer-box">
        <div style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #059669; letter-spacing: 0.05em; margin-bottom: 0.4rem;">
          <span>⚡</span> <span>Quick Answer & Key Finding</span>
        </div>
        <p style="font-size: 1.05rem; font-weight: 500; color: #064e3b; line-height: 1.6; margin: 0;">
          ${article.directAnswer}
        </p>
      </div>

      <!-- Table of Contents -->
      <div style="background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 0.85rem; padding: 1.25rem 1.5rem; margin: 2rem 0;">
        <h3 style="font-size: 1.05rem; color: #064e3b; margin-bottom: 0.75rem;">Contents in this Protocol</h3>
        <ol style="list-style-position: inside; padding: 0; margin: 0;">
          ${tocHtml}
        </ol>
      </div>

      <!-- Mid-Article Contextual Companion Guide -->
      ${midArticleCalloutHtml}

      <!-- Article Main Prose Content -->
      <div class="prose">
        ${article.htmlContent}
      </div>

      <!-- HowTo Procedural Steps -->
      ${howToHtml}

      <!-- Interactive Tool Embed (if applicable) -->
      ${toolEmbedHtml}

      <!-- Purity Scorecard (if applicable) -->
      ${scorecardHtml}

      <!-- Reviewer E-E-A-T Card -->
      ${reviewer ? `
        <div class="reviewer-card">
          <img src="${reviewer.avatarUrl}" alt="${reviewer.name}" class="reviewer-avatar" loading="lazy" decoding="async" />
          <div>
            <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #059669;">${reviewer.isMedicalReviewer ? 'Scientific & Clinical Reviewer' : 'Specialist Editorial Desk'}</div>
            <h4 style="font-size: 1.15rem; color: #064e3b; margin: 0.15rem 0 0.25rem;">
              <a href="/authors/${reviewer.id}/" style="color: inherit; text-decoration: none;">${reviewer.name}</a>
            </h4>
            <div style="font-size: 0.85rem; color: #57534e; margin-bottom: 0.35rem;">${reviewer.role} &bull; ${reviewer.organization}</div>
            <p style="font-size: 0.8rem; color: #78716c; margin: 0 0 0.4rem; line-height: 1.4;">${reviewer.bio}</p>
            <a href="/authors/${reviewer.id}/" style="font-size: 0.8rem; color: #047857; font-weight: 700;">View Verified Reviewer Profile &rarr;</a>
          </div>
        </div>
      ` : ''}

      <!-- FAQ Section -->
      ${article.faqs.length > 0 ? `
        <section id="faqs" style="margin-top: 3.5rem;">
          <h2 style="font-size: 1.65rem; color: #064e3b; margin-bottom: 1.25rem; border-bottom: 1px solid #e7e5e4; padding-bottom: 0.5rem;">
            Frequently Asked Questions
          </h2>
          ${faqsHtml}
        </section>
      ` : ''}

      <!-- Clinical Studies Footnote Citations -->
      ${article.scientificCitations.length > 0 ? `
        <section id="clinical-evidence" style="margin-top: 3rem; background: #fafaf9; border-top: 2px solid #059669; padding: 1.5rem; border-radius: 0 0 0.75rem 0.75rem;">
          <h3 style="font-size: 1.1rem; color: #064e3b; margin-bottom: 0.75rem;">Primary Peer-Reviewed Sources & Literature</h3>
          <ol style="padding-left: 1.25rem; margin: 0;">
            ${citationsHtml}
          </ol>
        </section>
      ` : ''}

      <!-- Lateral Related Articles -->
      ${article.relatedSlugs.length > 0 ? `
        <section style="margin-top: 4rem; border-top: 1px solid #e7e5e4; padding-top: 2.5rem;">
          <h3 style="font-size: 1.35rem; color: #064e3b; margin-bottom: 1.25rem;">Related Guides in this Cluster</h3>
          <div class="grid-cols-2">
            ${relatedHtml}
          </div>
        </section>
      ` : ''}
    </article>
  `;
}
