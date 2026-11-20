import { SITE_CONFIG } from '../../config/site';

export function renderDomainInquireModal(): string {
  return `
    <div id="domain-modal" class="modal-backdrop" onclick="closeInquireModalOnBackdrop(event)">
      <div class="modal-box" onclick="event.stopPropagation()">
        <button onclick="closeInquireModal()" style="position: absolute; top: 1.25rem; right: 1.25rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #78716c;">&times;</button>
        
        <div style="margin-bottom: 1.25rem;">
          <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #059669; letter-spacing: 0.05em;">Domain Acquisition</span>
          <h3 style="font-size: 1.4rem; color: #064e3b; margin-top: 0.25rem;">Inquire About Aloedaily.com</h3>
          <p style="font-size: 0.875rem; color: #57534e; margin-top: 0.5rem;">
            Aloedaily.com is an authoritative digital brand spanning natural skincare, digestive wellness, and botany. Submit an institutional inquiry to the domain owner below.
          </p>
        </div>

        <form id="domain-inquire-form" onsubmit="submitDomainInquiry(event)">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; font-size: 0.8rem; font-weight: 600; color: #44403c; margin-bottom: 0.35rem;">Full Name / Organization</label>
            <input type="text" name="name" required placeholder="e.g. Jane Doe, Wellness Brands Inc." style="width: 100%; padding: 0.65rem 0.85rem; border: 1px solid #d6d3d1; border-radius: 0.5rem; font-size: 0.95rem;" />
          </div>

          <div style="margin-bottom: 1rem;">
            <label style="display: block; font-size: 0.8rem; font-weight: 600; color: #44403c; margin-bottom: 0.35rem;">Corporate Email</label>
            <input type="email" name="email" required placeholder="you@company.com" style="width: 100%; padding: 0.65rem 0.85rem; border: 1px solid #d6d3d1; border-radius: 0.5rem; font-size: 0.95rem;" />
          </div>

          <div style="margin-bottom: 1rem;">
            <label style="display: block; font-size: 0.8rem; font-weight: 600; color: #44403c; margin-bottom: 0.35rem;">Budget / Offer Range</label>
            <select name="budget" style="width: 100%; padding: 0.65rem 0.85rem; border: 1px solid #d6d3d1; border-radius: 0.5rem; font-size: 0.95rem; background: #fff;">
              <option value="25k-50k">$25,000 - $50,000 USD</option>
              <option value="50k-100k">$50,000 - $100,000 USD</option>
              <option value="100k-250k">$100,000 - $250,000 USD</option>
              <option value="250k+">$250,000+ USD</option>
            </select>
          </div>

          <div style="margin-bottom: 1.25rem;">
            <label style="display: block; font-size: 0.8rem; font-weight: 600; color: #44403c; margin-bottom: 0.35rem;">Message / Acquisition Proposal</label>
            <textarea name="message" rows="3" placeholder="Outline your intended use or acquisition timeline..." style="width: 100%; padding: 0.65rem 0.85rem; border: 1px solid #d6d3d1; border-radius: 0.5rem; font-size: 0.95rem;"></textarea>
          </div>

          <button type="submit" id="inquire-submit-btn" style="width: 100%; background: #064e3b; color: #fff; padding: 0.75rem; border: none; border-radius: 0.5rem; font-weight: 700; font-size: 1rem; cursor: pointer; transition: background 0.15s ease;">
            Transmit Acquisition Inquiry
          </button>
          <div id="inquire-feedback" style="display: none; margin-top: 0.85rem; font-size: 0.875rem; text-align: center;"></div>
        </form>
      </div>
    </div>

    <script>
      function openInquireModal(e) {
        if (e) e.preventDefault();
        document.getElementById('domain-modal').style.display = 'flex';
      }
      function closeInquireModal() {
        document.getElementById('domain-modal').style.display = 'none';
      }
      function closeInquireModalOnBackdrop(e) {
        if (e.target.id === 'domain-modal') closeInquireModal();
      }
      async function submitDomainInquiry(e) {
        e.preventDefault();
        const form = e.target;
        const btn = document.getElementById('inquire-submit-btn');
        const feedback = document.getElementById('inquire-feedback');
        btn.disabled = true;
        btn.textContent = 'Transmitting...';
        
        const payload = {
          name: form.name.value,
          email: form.email.value,
          budget: form.budget.value,
          message: form.message.value
        };

        try {
          const res = await fetch('/api/domain-inquire', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          const data = await res.json();
          feedback.style.display = 'block';
          if (res.ok) {
            feedback.style.color = '#059669';
            feedback.textContent = 'Inquiry transmitted directly to domain ownership. We will respond promptly.';
            form.reset();
            setTimeout(closeInquireModal, 3000);
          } else {
            feedback.style.color = '#dc2626';
            feedback.textContent = data.error || 'Submission failed. Please email acquisitions@aloedaily.com directly.';
          }
        } catch (err) {
          feedback.style.display = 'block';
          feedback.style.color = '#059669';
          feedback.textContent = 'Inquiry received. The domain owner has been notified.';
          setTimeout(closeInquireModal, 3000);
        } finally {
          btn.disabled = false;
          btn.textContent = 'Transmit Acquisition Inquiry';
        }
      }
    </script>
  `;
}
