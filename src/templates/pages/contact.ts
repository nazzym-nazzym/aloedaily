import { SITE_CONFIG } from '../../config/site';
import { AUTHORS } from '../../data/authors';

export function renderContactPage(): string {
  const boardHtml = Object.values(AUTHORS).map(
    (author) => `
      <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 0.75rem; padding: 1.25rem; display: flex; align-items: center; gap: 1rem;">
        <img src="${author.avatarUrl}" alt="${author.name}" style="width: 3.5rem; height: 3.5rem; border-radius: 9999px; object-fit: cover; border: 2px solid #059669;" />
        <div>
          <h4 style="margin: 0 0 0.2rem; font-size: 1.05rem; color: #064e3b;">
            <a href="/authors/${author.id}/" style="color: inherit; text-decoration: none;">${author.name}</a>
          </h4>
          <div style="font-size: 0.85rem; color: #57534e;">${author.role}</div>
          <a href="/authors/${author.id}/" style="font-size: 0.8rem; color: #047857; font-weight: 600;">View Profile & Verified Credentials &rarr;</a>
        </div>
      </div>
    `
  ).join('');

  return `
    <div style="background: linear-gradient(180deg, #ecfdf5 0%, #fafaf9 100%); padding: 3.5rem 0 2.5rem; border-bottom: 1px solid #e7e5e4;">
      <div class="container" style="max-width: 820px;">
        <nav aria-label="Breadcrumb" style="margin-bottom: 1.25rem;">
          <ol style="display: flex; flex-wrap: wrap; align-items: center; gap: 0.35rem; list-style: none; padding: 0; margin: 0; font-size: 0.85rem; color: #78716c;">
            <li><a href="/" style="color: #047857;">Home</a></li>
            <li aria-hidden="true">&rsaquo;</li>
            <li aria-current="page" style="color: #44403c; font-weight: 600;">Editorial & Media Contact</li>
          </ol>
        </nav>

        <span class="badge-pill" style="margin-bottom: 0.75rem;">Direct Communications</span>
        <h1 style="font-size: clamp(2rem, 4vw, 2.75rem); color: #064e3b; margin-bottom: 0.75rem;">
          Contact AloeDaily Editorial & Advisory Board
        </h1>
        <p style="font-size: 1.15rem; color: #44403c; line-height: 1.6;">
          Have a scientific inquiry, clinical citation correction, or press interview request? Our editorial desk responds directly within 1 to 2 business days.
        </p>
      </div>
    </div>

    <div class="article-container" style="padding: 3.5rem 1.25rem 5rem;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
        <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 1rem; padding: 1.5rem;">
          <h3 style="font-size: 1.2rem; color: #064e3b; margin-bottom: 0.5rem;">Editorial & Corrections Desk</h3>
          <p style="font-size: 0.9rem; color: #57534e; line-height: 1.5; margin-bottom: 1rem;">
            For peer-reviewed literature citations, ingredient audit disputes, or factual feedback on clinical protocols.
          </p>
          <a href="mailto:${SITE_CONFIG.adminEmail}" style="font-weight: 700; color: #047857;">${SITE_CONFIG.adminEmail}</a>
        </div>

        <div style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 1rem; padding: 1.5rem;">
          <h3 style="font-size: 1.2rem; color: #064e3b; margin-bottom: 0.5rem;">Press & Media Relations</h3>
          <p style="font-size: 0.9rem; color: #57534e; line-height: 1.5; margin-bottom: 1rem;">
            Interviews with Dr. Elena Vance or Marcus Chen regarding botanical research, aloin regulations, or consumer market findings.
          </p>
          <a href="mailto:${SITE_CONFIG.mediaEmail}" style="font-weight: 700; color: #047857;">${SITE_CONFIG.mediaEmail}</a>
        </div>
      </div>

      <section style="background: #ffffff; border: 1px solid #e7e5e4; border-radius: 1.25rem; padding: 2rem; margin-bottom: 3.5rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <h2 style="font-size: 1.5rem; color: #064e3b; margin-bottom: 1.25rem;">
          Send an Encrypted Dispatch to Our Editors
        </h2>
        
        <form id="contact-form" action="/api/contact" method="POST" style="display: flex; flex-direction: column; gap: 1.25rem;">
          <div>
            <label for="name" style="display: block; font-size: 0.9rem; font-weight: 600; color: #374151; margin-bottom: 0.4rem;">Full Name</label>
            <input type="text" id="name" name="name" required style="width: 100%; padding: 0.75rem 1rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem;" />
          </div>

          <div>
            <label for="email" style="display: block; font-size: 0.9rem; font-weight: 600; color: #374151; margin-bottom: 0.4rem;">Professional or Personal Email</label>
            <input type="email" id="email" name="email" required style="width: 100%; padding: 0.75rem 1rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem;" />
          </div>

          <div>
            <label for="subject" style="display: block; font-size: 0.9rem; font-weight: 600; color: #374151; margin-bottom: 0.4rem;">Subject / Protocol in Question</label>
            <input type="text" id="subject" name="subject" required style="width: 100%; padding: 0.75rem 1rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem;" />
          </div>

          <div>
            <label for="message" style="display: block; font-size: 0.9rem; font-weight: 600; color: #374151; margin-bottom: 0.4rem;">Message or Clinical Citation Details</label>
            <textarea id="message" name="message" rows="5" required style="width: 100%; padding: 0.75rem 1rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; font-family: inherit;"></textarea>
          </div>

          <button type="submit" style="background: #064e3b; color: #ffffff; padding: 0.85rem 1.75rem; border: none; border-radius: 9999px; font-weight: 700; font-size: 1rem; cursor: pointer; align-self: flex-start; transition: background 0.15s ease;">
            Transmit Editorial Inquiry &rarr;
          </button>
        </form>
      </section>

      <section>
        <h3 style="font-size: 1.35rem; color: #064e3b; margin-bottom: 1rem;">
          Medical & Botanical Advisory Board Roster
        </h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${boardHtml}
        </div>
      </section>
    </div>
  `;
}
