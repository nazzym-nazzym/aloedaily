import { SPANISH_ARTICLES } from '../../data/spanish-articles';
import { SITE_CONFIG } from '../../config/site';

export function renderSpanishHomePage(): string {
  const articlesListHtml = SPANISH_ARTICLES.map(article => `
    <article class="card">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
        <span class="badge-pill" style="font-size: 0.7rem;">${article.pillar}</span>
        ${article.badge ? `<span style="font-size: 0.7rem; font-weight: 700; color: #0369a1; background: #e0f2fe; padding: 0.2rem 0.5rem; border-radius: 9999px;">${article.badge}</span>` : ''}
        <span style="font-size: 0.75rem; color: #78716c; margin-left: auto;">${article.readTimeMinutes} min de lectura</span>
      </div>
      <h3 style="font-size: 1.25rem; color: #064e3b; margin-bottom: 0.5rem;">
        <a href="/es/${article.pillar}/${article.slug}/" style="color: inherit; text-decoration: none;">
          ${article.title}
        </a>
      </h3>
      <p style="font-size: 0.9rem; color: #57534e; line-height: 1.5; margin-bottom: 1.25rem; flex-grow: 1;">
        ${article.metaDescription}
      </p>
      <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #f5f5f4; padding-top: 0.75rem; margin-top: auto;">
        <span style="font-size: 0.8rem; color: #78716c;">Actualizado ${article.updatedAt}</span>
        <a href="/es/${article.pillar}/${article.slug}/" style="font-size: 0.875rem; font-weight: 700; color: #047857;">Leer Protocolo &rarr;</a>
      </div>
    </article>
  `).join('');

  return `
    <div style="background: linear-gradient(180deg, #ecfdf5 0%, #fafaf9 100%); padding: 3.5rem 0 2.5rem; border-bottom: 1px solid #e7e5e4;">
      <div class="container">
        <!-- Multilingual Banner -->
        <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: #d1fae5; border: 1px solid #a7f3d0; padding: 0.35rem 0.75rem; border-radius: 9999px; margin-bottom: 1rem; font-size: 0.85rem; color: #065f46;">
          <span>🇪🇸 Edición en Español</span>
          <span>&bull;</span>
          <a href="/" style="color: #047857; font-weight: 700; text-decoration: underline;">Switch to English Edition &rarr;</a>
        </div>

        <h1 style="font-size: clamp(2rem, 4.5vw, 3.25rem); color: #064e3b; line-height: 1.15; margin-bottom: 1rem; max-width: 900px;">
          Ciencia Botánica de la Sábila: Protocolos Clínicos, Cultivo y Pureza
        </h1>
        <p style="font-size: 1.2rem; color: #44403c; max-width: 820px; line-height: 1.6; margin-bottom: 2rem;">
          Bienvenido a <strong>AloeDaily en Español</strong>. Nuestra misión es combatir la desinformación comercial con investigación médica revisada por pares sobre <em>Aloe barbadensis Miller</em> (sábila), seguridad de la aloína, dermatología natural y horticultura de suculentas.
        </p>

        <!-- 5 Pillar Jump Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
          <a href="/es/skincare/sabila-para-la-cara-toda-la-noche/" class="card" style="padding: 1rem; text-decoration: none; border-color: #a7f3d0;">
            <div style="font-size: 1.5rem; margin-bottom: 0.35rem;">💆‍♀️</div>
            <div style="font-weight: 700; color: #064e3b; font-size: 0.95rem;">Cuidado Facial</div>
            <div style="font-size: 0.8rem; color: #57534e;">Acemanano &amp; barrera</div>
          </a>
          <a href="/es/health/como-quitar-la-aloina-de-la-sabila/" class="card" style="padding: 1rem; text-decoration: none; border-color: #a7f3d0;">
            <div style="font-size: 1.5rem; margin-bottom: 0.35rem;">🧪</div>
            <div style="font-weight: 700; color: #064e3b; font-size: 0.95rem;">Salud &amp; Aloína</div>
            <div style="font-size: 0.8rem; color: #57534e;">Drenaje y digestión</div>
          </a>
          <a href="/es/cultivation/hojas-de-sabila-blandas-y-arrugadas-pudricion/" class="card" style="padding: 1rem; text-decoration: none; border-color: #a7f3d0;">
            <div style="font-size: 1.5rem; margin-bottom: 0.35rem;">🌱</div>
            <div style="font-weight: 700; color: #064e3b; font-size: 0.95rem;">Cultivo de Planta</div>
            <div style="font-size: 0.8rem; color: #57534e;">Riego y rescate</div>
          </a>
          <a href="/es/hair-care/sabila-para-el-cabello-y-caspa/" class="card" style="padding: 1rem; text-decoration: none; border-color: #a7f3d0;">
            <div style="font-size: 1.5rem; margin-bottom: 0.35rem;">✨</div>
            <div style="font-weight: 700; color: #064e3b; font-size: 0.95rem;">Cuidado Capilar</div>
            <div style="font-size: 0.8rem; color: #57534e;">Crecimiento &amp; caspa</div>
          </a>
          <a href="/es/audits/como-saber-si-el-gel-de-sabila-es-puro/" class="card" style="padding: 1rem; text-decoration: none; border-color: #a7f3d0;">
            <div style="font-size: 1.5rem; margin-bottom: 0.35rem;">🔬</div>
            <div style="font-weight: 700; color: #064e3b; font-size: 0.95rem;">Prueba de Pureza</div>
            <div style="font-size: 0.8rem; color: #57534e;">Test del yodo casero</div>
          </a>
        </div>
      </div>
    </div>

    <div class="container" style="padding: 3.5rem 0 5rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem;">
        <h2 style="font-size: 1.6rem; color: #064e3b;">Guías y Protocolos en Español (${SPANISH_ARTICLES.length})</h2>
      </div>
      <div class="grid-cols-2">
        ${articlesListHtml}
      </div>

      <!-- Trust & Masthead Summary -->
      <div style="margin-top: 4rem; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 1rem; padding: 2rem;">
        <h3 style="font-size: 1.3rem; color: #064e3b; margin-bottom: 0.5rem;">Compromiso Editorial y Rigor Científico</h3>
        <p style="font-size: 0.95rem; color: #065f46; line-height: 1.6; margin-bottom: 1rem;">
          Todos los artículos publicados en AloeDaily se basan en literatura científica indexada en PubMed, guías del Consejo Internacional Científico del Aloe (IASC) y monografías toxicológicas del NTP. No aceptamos patrocinios comerciales para alterar calificaciones de productos.
        </p>
        <div style="font-size: 0.85rem; color: #047857; display: flex; gap: 1.5rem; flex-wrap: wrap;">
          <a href="/editorial-policy/" style="color: inherit; font-weight: 700; text-decoration: underline;">Política Editorial &rarr;</a>
          <a href="/review-board/" style="color: inherit; font-weight: 700; text-decoration: underline;">Consejo de Revisión Científica &rarr;</a>
          <a href="/contact/" style="color: inherit; font-weight: 700; text-decoration: underline;">Contacto Editorial &rarr;</a>
        </div>
      </div>
    </div>
  `;
}
