# AloeDaily.com: Zero-Origin Cloudflare Edge Publication

**Domain:** `aloedaily.com`  
**Platform:** Cloudflare Workers (`compatibility_flags = ["nodejs_compat"]`, ES Modules)  
**Architecture:** Zero-Origin Edge-Native SSR, Programmatic Topical Clusters, Interactive Botanical Micro-Tools & High-Ticket Domain Acquisition Dispatcher.

---

## 🚀 Key Architectural Capabilities

1. **Sub-50ms Global TTFB (Zero Origin):**
   - Zero database roundtrips. Content, clinical citations, and product reviews compile directly into the edge worker binary (167 KiB raw / 43.8 KiB gzip).
   - Inlined critical CSS (<15 KiB) with zero render-blocking stylesheet requests.

2. **Topical Authority & Semantic Clusters:**
   - **5 Core Pillars:** Skincare (`/skincare/`), Hair Care (`/hair-care/`), Health & Aloin Chemistry (`/health/`), Cultivation (`/cultivation/`), and Product Audits (`/audits/`).
   - Bidirectional internal linking, breadcrumbs, and parent-spoke hierarchy.

3. **E-E-A-T & YMYL Medical Validation:**
   - Medical Review Board profiles (Dr. Elena Vance, MD, FAAD; Marcus Chen, MSc Botany).
   - Dynamic JSON-LD `@graph` linking `Organization`, `WebSite`, `Person`, `MedicalWebPage`, `HowTo`, `FAQPage`, and `Product`.
   - Primary peer-reviewed citations referencing PubMed PMIDs.

4. **Information Gain & Interactive Micro-Tools:**
   - **GEO Direct Answer Blocks:** First 50 words structured for Google AI Overviews and Featured Snippets.
   - **20-Minute Aloin Water Flush Countdown Timer:** Interactive client tool guiding safe aloin removal.
   - **Daily Juice Dosage Calculator:** Interactive weight-based and concentration-based dosage calculator.
   - **Kitchen Iodine Starch Test:** Investigative purity test for fake aloe gels.

5. **Technical SEO & Edge Routing:**
   - **410 Gone Purge Engine:** Automatically intercepts legacy non-aloe test URLs (e.g. `/glp1-calculator`, `/weight-loss*`) with `X-Robots-Tag: noindex, nofollow` to purge old indexation.
   - Canonical trailing slash enforcement and 301 normalizers.
   - Dynamic `/sitemap.xml`, `/robots.txt` (with explicit AI crawler directives), and `/llms.txt`.
   - Outbound cloaked affiliate redirects (`/out/{brand}`) with 307 temporary status and `noindex, nofollow`.
   - Domain Acquisition modal and `/api/domain-inquire` endpoint.

---

## 🛠️ CLI Commands

```bash
# 1. Typecheck the codebase
npm run build

# 2. Run unit & edge integration test suite (29 tests)
npm run test:unit

# 3. Full verification (Typecheck + Unit Tests + Wrangler Bundle Dry-Run)
npm test

# 4. Start local development server
npm run dev

# 5. Deploy to Cloudflare Workers (Production)
npm run deploy
```
