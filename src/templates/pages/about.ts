import { AUTHORS } from '../../data/authors';
import { SITE_CONFIG } from '../../config/site';

export function renderAboutPage(): string {
  // Only render the primary 3 desks (filter out legacy alias keys)
  const primaryDeskIds = ['botanical-research-desk', 'horticulture-desk', 'formulation-desk'];
  const reviewersHtml = primaryDeskIds.map(id => {
    const author = AUTHORS[id];
    if (!author) return '';
    return `
      <div class="card" style="margin-bottom: 1.5rem;">
        <div style="display: flex; gap: 1.25rem; align-items: flex-start; flex-wrap: wrap;">
          <img
            src="${author.avatarUrl}"
            alt="Emblem of ${author.name}, ${author.role}"
            loading="lazy"
            decoding="async"
            style="width: 4.5rem; height: 4.5rem; border-radius: 9999px; object-fit: cover; border: 2px solid #059669;"
          />
          <div style="flex: 1; min-width: 250px;">
            <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #059669; letter-spacing: 0.05em;">
              ${author.isMedicalReviewer ? 'Scientific Review Desk' : 'Specialist Editorial Desk'}
            </span>
            <h3 style="font-size: 1.3rem; color: #064e3b; margin: 0.15rem 0 0.25rem;">
              <a href="/authors/${author.id}/" style="color: inherit; text-decoration: none;">${author.name}</a>
            </h3>
            <div style="font-size: 0.875rem; color: #57534e; margin-bottom: 0.5rem;">${author.role} &bull; ${author.organization}</div>
            <p style="font-size: 0.9rem; color: #44403c; line-height: 1.5; margin-bottom: 0.75rem;">${author.bio}</p>
            <div style="display: flex; gap: 0.85rem; font-size: 0.825rem; flex-wrap: wrap;">
              <a href="/authors/${author.id}/" style="color: #047857; font-weight: 700;">Full Profile & Standards &rarr;</a>
              ${author.linkedInUrl ? `<a href="${author.linkedInUrl}" target="_blank" rel="noopener noreferrer" style="color: #047857; font-weight: 600;">LinkedIn &rarr;</a>` : ''}
              ${author.orcidId ? `<a href="https://orcid.org/${author.orcidId}" target="_blank" rel="noopener noreferrer" style="color: #047857; font-weight: 600;">ORCID: ${author.orcidId} &rarr;</a>` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div style="background: linear-gradient(180deg, #ecfdf5 0%, #fafaf9 100%); padding: 3.5rem 0 2.5rem; border-bottom: 1px solid #e7e5e4;">
      <div class="container" style="max-width: 820px;">
        <nav aria-label="Breadcrumb" style="margin-bottom: 1.25rem;">
          <ol style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.35rem; list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #78716c;">
            <li><a href="/" style="color: #047857;">Home</a></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li aria-current="page" style="color: #44403c; font-weight: 600;">About AloeDaily</li>
          </ol>
        </nav>

        <span class="badge-pill" style="margin-bottom: 0.75rem;">Our Mission & Manifesto</span>
        <h1 style="font-size: clamp(2rem, 4vw, 2.85rem); color: #064e3b; margin-bottom: 0.75rem;">
          Why We Founded AloeDaily: The Antidote to "Greenwashed" Botanical Misinformation
        </h1>
        <p style="font-size: 1.15rem; color: #44403c; line-height: 1.6;">
          We built AloeDaily out of a critical need for verified botanical science. In an ecosystem flooded by automated content mills publishing hazardous DIY advice and commercial brands marketing synthetic polymer gels falsely labeled "100% Pure," consumers deserve an authentic, evidence-based publication.
        </p>
      </div>
    </div>

    <div class="article-container" style="padding: 3.5rem 1.25rem 5rem;">
      <section style="margin-bottom: 3.5rem;">
        <h2 style="font-size: 1.75rem; color: #064e3b; margin-bottom: 1rem; border-bottom: 1px solid #e7e5e4; padding-bottom: 0.4rem;">
          Our Scientific & Editorial Manifesto
        </h2>
        <p class="prose" style="font-size: 1.05rem; line-height: 1.7; color: #292524;">
          A search for aloe vera guidance online immediately reveals two problematic extremes. On one side are unregulated lifestyle blogs advocating dangerous practices—such as ingesting whole unpurified leaves without removing noxious aloin anthraquinones that trigger severe gastrointestinal toxicity and electrolyte depletion. On the other side are mass-market cosmetic formulations loaded with carbomers, triethanolamine, and artificial dyes, bearing "100% Aloe" claims on the front while offering negligible bioactive acemannan content.
        </p>
        <p class="prose" style="font-size: 1.05rem; line-height: 1.7; color: #292524;">
          AloeDaily is structured as an independent botanical sciences publication organized into specialized editorial desks. Our mission is singular: to synthesize peer-reviewed clinical research, pharmacological monographs, and rigorous horticultural data to provide transparent, verified education on <em>Aloe barbadensis Miller</em>.
        </p>
      </section>

      <section id="editorial-policy" style="margin-bottom: 3.5rem;">
        <h2 style="font-size: 1.75rem; color: #064e3b; margin-bottom: 1rem; border-bottom: 1px solid #e7e5e4; padding-bottom: 0.4rem;">
          Our 4-Pillar Editorial & Fact-Checking Standard
        </h2>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1.25rem;">
            <h3 style="font-size: 1.15rem; color: #064e3b; margin-bottom: 0.35rem;">1. Primary Peer-Reviewed Literature Only</h3>
            <p style="font-size: 0.95rem; color: #44403c; margin: 0; line-height: 1.5;">
              Every health, dermatological, and toxicological statement we publish links directly to primary clinical trials, systematic reviews, and monographs indexed on PubMed, NCBI, the National Toxicology Program (NTP), or specialized dermatological journals. We never rely on unverified secondary aggregators.
            </p>
          </div>

          <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1.25rem;">
            <h3 style="font-size: 1.15rem; color: #064e3b; margin-bottom: 0.35rem;">2. Rigorous Toxicology & Safety Screening</h3>
            <p style="font-size: 0.95rem; color: #44403c; margin: 0; line-height: 1.5;">
              Ingestible protocols, juice recipes, and extraction techniques are evaluated against strict botanical toxicology standards. We enforce clear warnings regarding pregnancy contraindications, diuretic interactions, and strict aloin limits conforming to the International Aloe Science Council (IASC) standard of under 10 parts per million (ppm) for oral products.
            </p>
          </div>

          <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1.25rem;">
            <h3 style="font-size: 1.15rem; color: #064e3b; margin-bottom: 0.35rem;">3. Evidence-Based Xerophyte Horticulture</h3>
            <p style="font-size: 0.95rem; color: #44403c; margin: 0; line-height: 1.5;">
              Our cultivation and harvesting guidelines adhere to established plant biology and university extension research. Leaf harvesting protocols emphasize preservation of the apical meristem, clean suberized callus formation, and root aeration mechanics rather than anecdotal home remedies.
            </p>
          </div>

          <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1.25rem;">
            <h3 style="font-size: 1.15rem; color: #064e3b; margin-bottom: 0.35rem;">4. Transparent INCI Formulation Auditing & Zero Sponsored Ratings</h3>
            <p style="font-size: 0.95rem; color: #44403c; margin: 0; line-height: 1.5;">
              Commercial product evaluations rely on rigorous International Nomenclature of Cosmetic Ingredients (INCI) statement auditing and verified third-party certifications. Manufacturers cannot purchase placements, alter scores on The AloeDaily Purity & Formulation Index™, or preview reviews prior to publication.
            </p>
          </div>
        </div>
      </section>

      <section id="medical-board" style="margin-bottom: 3.5rem;">
        <h2 style="font-size: 1.75rem; color: #064e3b; margin-bottom: 1.25rem; border-bottom: 1px solid #e7e5e4; padding-bottom: 0.4rem;">
          Our Editorial Desks & Research Contributor Board
        </h2>
        ${reviewersHtml}
      </section>

      <section id="contact" style="background: #ecfdf5; border-radius: 1rem; padding: 2rem; border: 1px solid #a7f3d0;">
        <h3 style="font-size: 1.3rem; color: #064e3b; margin-bottom: 0.5rem;">Editorial Desk & Media Inquiries</h3>
        <p style="font-size: 0.95rem; color: #065f46; line-height: 1.6; margin-bottom: 1rem;">
          For scientific citation inquiries, research corrections, or editorial feedback, contact our publication desks:
        </p>
        <div style="font-size: 0.95rem; color: #064e3b; line-height: 1.7;">
          <strong>Editorial & Research Desk:</strong> <a href="mailto:${SITE_CONFIG.adminEmail}" style="color: #047857; text-decoration: underline;">${SITE_CONFIG.adminEmail}</a><br />
          <strong>Media & Press Relations:</strong> <a href="mailto:${SITE_CONFIG.mediaEmail}" style="color: #047857; text-decoration: underline;">${SITE_CONFIG.mediaEmail}</a>
        </div>
      </section>
    </div>
  `;
}
