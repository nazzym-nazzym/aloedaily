export function renderNotFoundPage(): string {
  return `
    <div class="container" style="padding: 6rem 1.25rem; text-align: center; max-width: 600px;">
      <div style="font-size: 3.5rem; margin-bottom: 1rem;">🌿</div>
      <h1 style="font-size: 2.5rem; color: #064e3b; margin-bottom: 0.75rem;">Page Not Found (404)</h1>
      <p style="font-size: 1.1rem; color: #57534e; line-height: 1.6; margin-bottom: 2rem;">
        The botanical protocol or guide you are looking for has been relocated or retired to maintain our strict clinical standards.
      </p>
      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
        <a href="/" style="background: #064e3b; color: #fff; padding: 0.75rem 1.5rem; border-radius: 9999px; font-weight: 700; text-decoration: none;">
          Return to Homepage
        </a>
        <a href="/skincare/" style="background: #ffffff; color: #064e3b; border: 1px solid #059669; padding: 0.75rem 1.5rem; border-radius: 9999px; font-weight: 700; text-decoration: none;">
          Browse Skincare Protocols
        </a>
      </div>
    </div>
  `;
}
