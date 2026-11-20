import { PILLARS } from '../../data/pillars';
import { getLatestArticles } from '../../data/articles';
import { TESTED_PRODUCTS } from '../../data/products';
import { SITE_CONFIG } from '../../config/site';

export function renderHomePage(): string {
  const latest = getLatestArticles(6);

  const pillarsHtml = Object.values(PILLARS).map((pillar) => `
    <a href="/${pillar.slug}/" class="card">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.85rem;">
        <span style="display: inline-flex; align-items: center; justify-content: center; width: 2.75rem; height: 2.75rem; border-radius: 0.75rem; background: #ecfdf5; color: ${pillar.accentColor}; font-size: 1.25rem;">
          ${pillar.iconSvg}
        </span>
        <span style="font-size: 0.75rem; font-weight: 700; color: #059669; background: #d1fae5; padding: 0.2rem 0.6rem; border-radius: 9999px;">
          ${pillar.searchVolume}
        </span>
      </div>
      <h3 style="font-size: 1.2rem; color: #064e3b; margin-bottom: 0.4rem;">${pillar.title}</h3>
      <p style="font-size: 0.9rem; color: #57534e; line-height: 1.5; margin-bottom: 1rem; flex-grow: 1;">
        ${pillar.tagline}
      </p>
      <div style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; font-weight: 700; color: #047857;">
        Explore Hub &rarr;
      </div>
    </a>
  `).join('');

  const articlesHtml = latest.map((article) => `
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
        <span style="font-size: 0.8rem; color: #78716c;">Updated ${article.updatedAt}</span>
        <a href="/${article.pillar}/${article.slug}/" style="font-size: 0.85rem; font-weight: 700; color: #047857;">Read Protocol &rarr;</a>
      </div>
    </article>
  `).join('');

  return `
    <!-- Hero Section -->
    <section style="background: linear-gradient(180deg, #ecfdf5 0%, #fafaf9 100%); padding: 4.5rem 0 3rem; border-bottom: 1px solid #e7e5e4;">
      <div class="container" style="text-align: center; max-width: 880px;">
        <span class="badge-pill" style="margin-bottom: 1rem;">Clinical Botanical Dermatology & Greenhouse Horticulture</span>
        <h1 style="font-size: clamp(2.2rem, 5vw, 3.5rem); color: #064e3b; font-weight: 800; letter-spacing: -0.025em; line-height: 1.15; margin-bottom: 1.25rem;">
          The Definitive Daily Authority on Pure Aloe Vera & Botanical Science
        </h1>
        <p style="font-size: 1.2rem; color: #44403c; line-height: 1.6; margin-bottom: 2rem;">
          Cut through the noise of drugstore greenwashing and viral internet myths. We combine board-certified dermatology, clinical aesthetics, and greenhouse horticulture to show you how to safely use, harvest, and audit pure <em>Aloe barbadensis Miller</em>.
        </p>
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <a href="/skincare/" style="background: #064e3b; color: #fff; padding: 0.85rem 1.75rem; border-radius: 9999px; font-weight: 700; text-decoration: none; box-shadow: 0 4px 14px rgba(6,78,59,0.25);">
            Explore Skincare Protocols
          </a>
          <a href="/health/how-to-remove-aloin-from-aloe-leaf/" style="background: #ffffff; color: #064e3b; border: 1px solid #059669; padding: 0.85rem 1.75rem; border-radius: 9999px; font-weight: 700; text-decoration: none;">
            Aloin Flush Guide
          </a>
          <a href="/audits/how-to-spot-fake-aloe-vera-gel/" style="background: #ffffff; color: #064e3b; border: 1px solid #059669; padding: 0.85rem 1.75rem; border-radius: 9999px; font-weight: 700; text-decoration: none;">
            Kitchen Iodine Purity Test
          </a>
        </div>
      </div>
    </section>

    <!-- Core Pillars Grid -->
    <section style="padding: 4rem 0;">
      <div class="container">
        <div style="text-align: center; max-width: 650px; margin: 0 auto 3rem;">
          <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #059669; letter-spacing: 0.05em;">Evidence-Based Verticals</span>
          <h2 style="font-size: 2.2rem; color: #064e3b; margin-top: 0.25rem;">Explore the 5 Pillars of Botanical Authority</h2>
        </div>
        <div class="grid-cols-3">
          ${pillarsHtml}
        </div>
      </div>
    </section>

    <!-- Interactive Tools Banner -->
    <section style="background: #064e3b; color: #fff; padding: 4rem 0;">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center;">
          <div>
            <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #6ee7b7; letter-spacing: 0.05em;">Interactive Utilities</span>
            <h2 style="color: #fff; font-size: 2.2rem; margin: 0.5rem 0 1rem;">Zero-Origin Botanical Tools</h2>
            <p style="color: #d1fae5; font-size: 1.05rem; line-height: 1.6; margin-bottom: 1.5rem;">
              We build specialized, zero-dependency interactive tools to help you safely drain bitter aloin from fresh leaves, compute exact weight-based daily juice limits, and diagnose mushy houseplant roots in seconds.
            </p>
            <div style="display: flex; flex-direction: column; gap: 0.85rem;">
              <a href="/health/how-to-remove-aloin-from-aloe-leaf/" style="color: #a7f3d0; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                <span>⏳</span> <span>20-Minute Aloin Flush Countdown Timer &rarr;</span>
              </a>
              <a href="/health/aloe-vera-juice-dosage-calculator/" style="color: #a7f3d0; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                <span>🧮</span> <span>Clinical Weight-Based Juice Dosage Calculator &rarr;</span>
              </a>
              <a href="/cultivation/fix-soft-mushy-aloe-leaves/" style="color: #a7f3d0; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                <span>🌱</span> <span>Plant Root Rot Diagnostic & Cinnamon Surgery &rarr;</span>
              </a>
            </div>
          </div>
          <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); border-radius: 1.5rem; padding: 2rem;">
            <div style="font-size: 0.85rem; color: #6ee7b7; font-weight: 700; text-transform: uppercase; margin-bottom: 0.5rem;">Consumer Protection Benchmark</div>
            <h3 style="color: #fff; font-size: 1.35rem; margin-bottom: 0.75rem;">The AloeDaily Purity Index™ (API-100)</h3>
            <p style="color: #d1fae5; font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.25rem;">
              Over 60% of commercial "100% Pure Aloe" products on Amazon are cut with synthetic carbomers and contain zero active acemannan. We purchase products anonymously at retail and publish independent lab scorecards.
            </p>
            <a href="/audits/best-pure-aloe-vera-gels-reviewed/" style="display: inline-block; background: #10b981; color: #064e3b; font-weight: 800; padding: 0.65rem 1.25rem; border-radius: 0.5rem; text-decoration: none;">
              Explore Commercial Gel Audits
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Articles Grid -->
    <section style="padding: 4.5rem 0;">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2.5rem;">
          <div>
            <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #059669; letter-spacing: 0.05em;">Clinical Protocols</span>
            <h2 style="font-size: 2.2rem; color: #064e3b; margin-top: 0.25rem;">Latest Evidence-Based Guides</h2>
          </div>
        </div>
        <div class="grid-cols-3">
          ${articlesHtml}
        </div>
      </div>
    </section>
  `;
}
