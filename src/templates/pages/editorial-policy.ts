import { SITE_CONFIG } from '../../config/site';

export function renderEditorialPolicyPage(): string {
  return `
    <div style="background: linear-gradient(180deg, #ecfdf5 0%, #fafaf9 100%); padding: 3.5rem 0 2.5rem; border-bottom: 1px solid #e7e5e4;">
      <div class="container" style="max-width: 820px;">
        <nav aria-label="Breadcrumb" style="margin-bottom: 1.25rem;">
          <ol style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.35rem; list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #78716c;">
            <li><a href="/" style="color: #047857;">Home</a></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li><a href="/about/" style="color: #047857;">About</a></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li aria-current="page" style="color: #44403c; font-weight: 600;">Editorial Policy</li>
          </ol>
        </nav>

        <span class="badge-pill" style="margin-bottom: 0.75rem;">Quality & Standards</span>
        <h1 style="font-size: clamp(2rem, 4vw, 2.85rem); color: #064e3b; margin-bottom: 0.75rem;">
          Editorial & Fact-Checking Policy
        </h1>
        <p style="font-size: 1.15rem; color: #44403c; line-height: 1.6;">
          Our uncompromising scientific standard for botanical medicine, horticultural biology, and consumer safety.
        </p>
      </div>
    </div>

    <div class="article-container" style="padding: 3.5rem 1.25rem 5rem;">
      <section style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; color: #064e3b; margin-bottom: 1rem; border-bottom: 1px solid #e7e5e4; padding-bottom: 0.4rem;">
          1. Primary Scientific Literature Requirement
        </h2>
        <p class="prose" style="font-size: 1.05rem; line-height: 1.7; color: #292524;">
          AloeDaily enforces a zero-tolerance policy against unverified anecdotal claims, content-mill regurgitation, and secondary aggregators. Every medical, physiological, and toxicological claim published on this site must be directly supported by peer-reviewed literature indexed on PubMed, NCBI, or published in recognized academic journals (such as the <em>Journal of the American Academy of Dermatology</em>, <em>Burns</em>, or <em>Phytomedicine</em>).
        </p>
        <p class="prose" style="font-size: 1.05rem; line-height: 1.7; color: #292524;">
          When clinical trials or systematic reviews are cited, we prioritize randomized controlled trials (RCTs) on human subjects, followed by meta-analyses and established toxicological monographs from the National Toxicology Program (NTP) and the International Aloe Science Council (IASC). All citations include primary PubMed IDs (PMIDs) or DOIs.
        </p>
      </section>

      <section style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; color: #064e3b; margin-bottom: 1rem; border-bottom: 1px solid #e7e5e4; padding-bottom: 0.4rem;">
          2. Specialized Editorial Desks & Peer Review
        </h2>
        <p class="prose" style="font-size: 1.05rem; line-height: 1.7; color: #292524;">
          Every article published on AloeDaily undergoes rigorous two-tier review by specialized editorial desks:
        </p>
        <ul style="font-size: 1.05rem; line-height: 1.7; color: #292524; padding-left: 1.5rem; margin-bottom: 1.5rem;">
          <li><strong>The Botanical Research Desk:</strong> Leads systematic evidence synthesis across clinical dermatology, gastrointestinal mucosal physiology, and phytochemistry.</li>
          <li><strong>The Horticulture & Cultivation Desk:</strong> Evaluates houseplant physiology, sterile propagation techniques, and shock-free harvesting protocols.</li>
          <li><strong>The Ingredient & Formulation Audit Desk:</strong> Conducts independent INCI statement auditing, detection of hidden synthetic thickeners (carbomers, polyacrylates), and aloin filtration verification.</li>
        </ul>
      </section>

      <section style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; color: #064e3b; margin-bottom: 1rem; border-bottom: 1px solid #e7e5e4; padding-bottom: 0.4rem;">
          3. Independent Product Auditing & Zero Sponsored Ratings
        </h2>
        <p class="prose" style="font-size: 1.05rem; line-height: 1.7; color: #292524;">
          Commercial products evaluated under <em>The AloeDaily Purity Index™</em> are assessed independently using public INCI ingredient statements, published regulatory filings, and verifiable third-party certification registries. Brands and manufacturers are never permitted to:
        </p>
        <ul style="font-size: 1.05rem; line-height: 1.7; color: #292524; padding-left: 1.5rem; margin-bottom: 1.5rem;">
          <li>Pay for guaranteed inclusion in reviews or scorecards</li>
          <li>Preview, edit, or influence editorial copy or scores</li>
          <li>Submit curated or non-retail sample batches for testing</li>
        </ul>
        <p class="prose" style="font-size: 1.05rem; line-height: 1.7; color: #292524;">
          Where affiliate links are included to help readers purchase vetted products, commissions do not influence product selection, rankings, or purity scores. Our disclaimers comply fully with FTC guidelines.
        </p>
      </section>

      <section id="corrections" style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; color: #064e3b; margin-bottom: 1rem; border-bottom: 1px solid #e7e5e4; padding-bottom: 0.4rem;">
          4. Corrections Policy & Review Schedule
        </h2>
        <p class="prose" style="font-size: 1.05rem; line-height: 1.7; color: #292524;">
          Botanical medicine and dermatological research evolve continuously. We conduct bi-annual re-evaluations of clinical dosage calculators, aloin toxicology thresholds, and product audit rankings. When new clinical trials contradict previous findings, articles are updated and tagged with a revised timestamp and explanatory note.
        </p>
        <p class="prose" style="font-size: 1.05rem; line-height: 1.7; color: #292524;">
          If you identify a scientific error, misquoted PMID, or outdated regulatory standard, please notify our editorial desk at <a href="mailto:${SITE_CONFIG.adminEmail}" style="color: #047857; font-weight: 600;">${SITE_CONFIG.adminEmail}</a>. Factual corrections are implemented within 48 hours of verification.
        </p>
      </section>
    </div>
  `;
}
