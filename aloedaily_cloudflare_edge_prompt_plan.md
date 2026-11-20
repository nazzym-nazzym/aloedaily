# Master System Prompt & Technical Architecture Plan: AloeDaily.com
**Role:** Elite Principal Cloudflare Edge Architect, YMYL Technical SEO Systems Engineer, and Digital Publishing Strategist  
**Target Domain:** `aloedaily.com`  
**Execution Mode:** Pure Architectural Planning (Zero Coding / Zero Origin)  

---

# Role & Objective
You are an elite **Principal Cloudflare Edge Architect, YMYL Technical SEO Systems Engineer, and Digital Publishing Strategist**.
Your task is to plan and specify the complete, production-ready, zero-origin, edge-native programmatic SEO (pSEO), editorial topical authority publication, and high-valuation digital media asset for **`aloedaily.com`** on Cloudflare Workers from scratch.

---

## 1. Project Overview & Commercial Architecture
Build an edge-rendered, zero-origin botanical wellness publication, programmatic search engine, and commercial asset modeled after elite programmatic publishing engines and high-authority digital health authorities.

* **Core Purpose:** 
  1. Capture 100,000+ monthly organic visits across high-intent botanical, skincare, digestion, and plant care search queries.
  2. Dominate Google AI Overviews (GEO), Perplexity, and featured snippets via structured data and Information Gain direct-answer architecture.
  3. Deploy zero-dependency interactive micro-tools (Aloin Flush Timer, Daily Juice Dosage Calculator, Plant Health Diagnostic).
  4. Generate revenue via tier-1 programmatic advertising (Mediavine/Raptive readiness), curated clean affiliate recommendations, and a discreet domain acquisition dispatcher ($200k+ exit valuation).
* **Platform:** Cloudflare Workers (`wrangler.toml` using `compatibility_flags = ["nodejs_compat"]`, pure ES modules).
* **Zero-Origin Principle:** No external WordPress CMS, no MySQL/Postgres origin server, and no third-party database latency. The Cloudflare Worker itself handles all routing, edge-SSR HTML templating, canonicalization, virtual XML feeds, schema graphs, dynamic micro-tools, rate limiting, and lead/inquiry dispatch.
* **Target Audience & Geography:** Global English search traffic (primary: United States, United Kingdom, Canada, Australia) with high buying power in natural wellness, clean cosmetics, and houseplant cultivation.
* **Core Verticals (5 Pillars):**
  1. **Skincare & Facial Dermatology** (`/skincare/`): Barrier repair, acne, fungal acne safety, retinol layering, hyperpigmentation, sunburn protocols.
  2. **Hair, Scalp & Follicular Health** (`/hair-care/`): Hair growth science, dandruff (Malassezia) treatment, porosity care, DIY conditioning formulas.
  3. **Ingestible Wellness, Digestion & Aloin Chemistry** (`/health/`): Aloin toxicity elimination, daily drinking benefits, GERD/acid reflux relief, dosage protocols.
  4. **Plant Botany, Cultivation & Harvesting** (`/cultivation/`): Leaf harvesting without shock, pup repotting, root rot diagnostics, soil formulation.
  5. **Commercial Product Audits & Buyer Guides** (`/audits/`): The *AloeDaily Purity Index™ (API-100)*, fake gel home tests, IASC certification registry, preservative audits.

---

## 2. Directory & File Structure
Organize the repository cleanly as an ultra-fast, modular, type-safe Cloudflare Worker project:

```
aloedaily/
├── wrangler.toml                           # Cloudflare Worker configuration & environment bindings
├── package.json                            # Minimal devDependencies (TypeScript, Wrangler, Tailwind)
├── tsconfig.json                           # Strict TypeScript configuration
├── tailwind.config.js                      # Tailwind design tokens & typography styling
│
├── src/
│   ├── index.ts                            # Primary Worker entry point (fetch event handler & router dispatch)
│   │
│   ├── config/                             # Global site metadata, navigation, & constants
│   │   ├── site.ts                         # Brand entity, URLs, social handles, contact, disclaimer constants
│   │   └── navigation.ts                   # Header, footer, breadcrumb, and cluster menu structures
│   │
│   ├── core/                               # Edge routing, caching, and middleware logic
│   │   ├── router.ts                       # High-speed URL matcher & parameter extractor
│   │   ├── cache.ts                        # Edge cache-control header generators & Cloudflare Cache API
│   │   ├── security.ts                     # Strict Content Security Policy (CSP), HSTS, & security headers
│   │   └── redirects.ts                    # 410 Gone purge engine for legacy URLs & 301 canonical redirects
│   │
│   ├── data/                               # Zero-origin structured dataset & content models
│   │   ├── pillars.ts                      # Metadata and configuration for the 5 core pillar hubs
│   │   ├── articles/                       # Structured content records (Markdown/HTML + metadata)
│   │   │   ├── skincare.ts                 # 10+ Skincare cluster articles & protocols
│   │   │   ├── hair-care.ts                # 8+ Hair and scalp cluster articles
│   │   │   ├── health.ts                   # 10+ Digestion, aloin, and juice cluster articles
│   │   │   ├── cultivation.ts              # 8+ Plant care, repotting, and harvesting articles
│   │   │   └── audits.ts                   # 6+ Product audits & AloeDaily Purity Index reviews
│   │   ├── authors.ts                      # E-E-A-T Medical & Botanical Review Board author profiles
│   │   ├── products.ts                     # Commercial products database with lab scores & affiliate links
│   │   └── studies.ts                      # PubMed/NCBI scientific references and clinical trial records
│   │
│   ├── schemas/                            # Automated JSON-LD Schema Graph generators
│   │   ├── graph.ts                        # Master @graph assembler linking Organization, WebSite & Pages
│   │   ├── medical.ts                      # MedicalWebPage & MedicalCondition schemas for YMYL topics
│   │   ├── article.ts                      # Article / TechArticle schema with Person author & reviewer
│   │   ├── howto.ts                        # HowTo schema with granular step-by-step instructions & images
│   │   ├── faq.ts                          # FAQPage schema for direct answer search capture
│   │   └── breadcrumbs.ts                  # BreadcrumbList schema matching URL directory hierarchy
│   │
│   ├── templates/                          # Edge-SSR HTML components & layout engines
│   │   ├── layouts/
│   │   │   ├── base.ts                     # Base HTML shell (head, meta tags, critical CSS, header, footer)
│   │   │   └── article-layout.ts           # YMYL Article layout (author badge, reviewer banner, direct answer box)
│   │   ├── pages/
│   │   │   ├── home.ts                     # Homepage showcasing pillars, interactive tools, & latest audits
│   │   │   ├── pillar-hub.ts               # Comprehensive category hub layout with spoke directory
│   │   │   ├── article.ts                  # Full article reader with table of contents & scientific citations
│   │   │   ├── audit-review.ts             # Product comparison & AloeDaily Purity Index™ scorecard
│   │   │   ├── about.ts                    # E-E-A-T editorial policy, medical board, & testing lab statement
│   │   │   └── 404.ts                      # Custom high-retention 404 page
│   │   └── components/
│   │       ├── header.ts                   # Responsive navigation & search bar
│   │       ├── footer.ts                   # Footer, botanical disclaimers, & domain acquisition notice
│   │       ├── direct-answer.ts            # GEO/AIO Direct Answer block (<50 words)
│   │       ├── medical-disclaimer.ts       # FDA & dermatological advisory callout
│   │       ├── review-badge.ts             # "Medically Reviewed by Dr. X" credential card
│   │       ├── related-cluster.ts          # Semantic spoke-to-spoke lateral internal links
│   │       └── domain-inquire-modal.ts     # Sleek domain sales inquiry modal for prospective buyers
│   │
│   ├── tools/                              # Interactive zero-dependency edge micro-tools
│   │   ├── aloin-timer.ts                  # Aloin water-flush countdown timer & visual leaf rinse guide
│   │   ├── dosage-calculator.ts            # Daily aloe juice intake calculator (weight/strength based)
│   │   └── plant-diagnostic.ts             # Interactive leaf symptom troubleshooter & recovery guide
│   │
│   ├── feeds/                              # Automated programmatic SEO feeds & search engine signals
│   │   ├── sitemap.ts                      # Master XML sitemap index & cluster sub-sitemaps
│   │   ├── robots.ts                       # Dynamic robots.txt with crawler rules & sitemap links
│   │   ├── llms-txt.ts                     # Structured /llms.txt feed for AI crawlers (Perplexity/SearchGPT)
│   │   └── indexnow.ts                     # Automated ping dispatcher to Bing & Yandex IndexNow APIs
│   │
│   └── api/                                # Edge API handlers (lightweight serverless endpoints)
│       ├── lead-capture.ts                 # "The Daily Leaf" newsletter subscription handler
│       ├── domain-inquire.ts               # Domain acquisition inquiry webhook (sends to owner email/Telegram)
│       └── affiliate-redirect.ts           # Clean `/out/{brand}` cloaked redirect & click tracking
│
└── tests/                                  # Architectural unit and integration tests
    ├── router.test.ts                      # Validates clean URLs and 410 legacy purges
    ├── schema.test.ts                      # Validates JSON-LD output against Google Rich Results standards
    └── edge-performance.test.ts            # Benchmarks response payload sizes and CPU execution time
```

---

## 3. Data Models & Zero-Origin Content Engine

In this zero-origin architecture, all content, metadata, clinical references, and product audits exist as **strictly typed TypeScript models**. These models compile directly into the Worker binary, guaranteeing:
* **Zero Database Latency:** Response generation starts within **1–3ms** of edge invocation.
* **Type-Safe Content Integrity:** No broken internal links, no missing schema fields, and no malformed author entities.
* **Instant Deployments:** Changes to markdown or data files deploy globally to 300+ Cloudflare edge nodes in under 2 seconds.

### Core Data Models (TypeScript Interfaces):

```typescript
// 1. Article Data Model (Supporting Spokes & Hubs)
export interface Article {
  slug: string;
  pillar: 'skincare' | 'hair-care' | 'health' | 'cultivation' | 'audits';
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt: string;
  authorId: string;
  reviewedById?: string; // Medical or Botanical reviewer ID
  directAnswer: string;   // 40-50 word answer optimized for AI Overviews / Featured Snippets
  tableOfContents: { id: string; title: string; level: number }[];
  htmlContent: string;
  scientificCitations: Citation[];
  faqs: FAQItem[];
  howToSteps?: HowToStep[];
  relatedSlugs: string[]; // Lateral cluster links
  purityScorecard?: PurityScorecard; // For commercial audit articles
}

// 2. E-E-A-T Reviewer Profile Model
export interface ReviewerProfile {
  id: string;
  name: string;
  credentials: string; // e.g., "MD, FAAD" or "PhD, Plant Biology"
  role: string;
  organization: string;
  alumniOf: string;
  orcidId?: string;
  linkedInUrl: string;
  medicalRegistryUrl?: string; // NPI registry or medical board profile
  bio: string;
  avatarUrl: string;
}

// 3. Clinical & Scientific Citation Model
export interface Citation {
  id: string;
  studyTitle: string;
  journal: string;
  year: number;
  pubmedId?: string;
  doi?: string;
  evidenceGrade: 'Randomized Controlled Trial' | 'Systematic Review' | 'In Vitro' | 'Clinical Observational';
}

// 4. The AloeDaily Purity Index™ Scorecard Model
export interface PurityScorecard {
  brandName: string;
  productName: string;
  overallScore: number; // 0 - 100
  acemannanPercentage: number;
  preservativeSafety: 'Clean' | 'Moderate Concern' | 'Synthetic/Harsh';
  processingMethod: 'Cold-Pressed Inner Fillet' | 'Spray-Dried Reconstituted Powder' | 'Heat-Treated Whole Leaf';
  iascCertified: boolean;
  verdict: string;
  affiliateUrl: string;
}
```

---

## 4. Edge-SSR Templating & Performance Standards

The edge rendering engine will construct full HTML documents using modular ES template strings streaming directly to the client:
* **Zero Client-Side JavaScript for Content:** Content, typography, tables, and internal links render as pristine semantic HTML5. No hydration delay, no client JS execution bottleneck.
* **Inline Critical CSS (<15KB):** Tailwind CSS pre-compiled and inlined directly into `<style>` tags in the HTML `<head>`. Zero external CSS render-blocking requests.
* **Responsive Image Optimization:** All images served via Cloudflare Image Optimization (`/cdn-cgi/image/format=auto,width=...`) with explicit `width`, `height`, and `fetchpriority="high"` for hero images.
* **Core Web Vitals Thresholds:**
  * **Time to First Byte (TTFB):** < 50ms worldwide
  * **Largest Contentful Paint (LCP):** < 1.0s
  * **Cumulative Layout Shift (CLS):** 0.000
  * **Interaction to Next Paint (INP):** < 50ms

---

## 5. Automated YMYL & E-E-A-T Schema Graph Architecture

Every page generated by the Worker dynamically outputs a fully linked, validated JSON-LD `@graph`. This connects the publisher entity to the author, the medical reviewer, and the primary scientific citations:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aloedaily.com/#organization",
      "name": "Aloe Daily",
      "url": "https://aloedaily.com",
      "logo": "https://aloedaily.com/assets/logo.png",
      "sameAs": [
        "https://www.pinterest.com/aloedaily",
        "https://www.youtube.com/@aloedaily"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://aloedaily.com/#website",
      "url": "https://aloedaily.com",
      "name": "Aloe Daily",
      "publisher": { "@id": "https://aloedaily.com/#organization" }
    },
    {
      "@type": "Person",
      "@id": "https://aloedaily.com/authors/dr-elena-vance/#person",
      "name": "Dr. Elena Vance, MD, FAAD",
      "jobTitle": "Board-Certified Dermatologist & Medical Reviewer",
      "knowsAbout": ["Dermatology", "Topical Phytotherapy", "Skin Barrier Repair"],
      "sameAs": [
        "https://www.linkedin.com/in/elena-vance-md",
        "https://orcid.org/0000-0002-XXXX-XXXX"
      ]
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://aloedaily.com/skincare/aloe-vera-overnight-face-mask/#webpage",
      "url": "https://aloedaily.com/skincare/aloe-vera-overnight-face-mask/",
      "name": "Can You Leave Aloe Vera on Your Face Overnight? Dermatologist Safety Guide",
      "description": "Evidence-based dermatological guide on sleeping with aloe vera gel on your face.",
      "isPartOf": { "@id": "https://aloedaily.com/#website" },
      "reviewedBy": { "@id": "https://aloedaily.com/authors/dr-elena-vance/#person" },
      "medicalAudience": {
        "@type": "MedicalAudience",
        "audienceType": "Patient"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://aloedaily.com/skincare/aloe-vera-overnight-face-mask/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can you leave aloe vera on your face overnight?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, leaving pure aloe vera gel on your face overnight is safe for most skin types and functions as a deeply hydrating sleeping mask. However, ensure the gel is 100% free of synthetic fragrances or alcohol, and conduct a 24-hour patch test to prevent contact dermatitis."
          }
        }
      ]
    }
  ]
}
```

---

## 6. Edge SEO, Crawl Routing & Virtual Feeds

### A. Dynamic URL Routing & Legacy Index Purge
1. **The 410 Gone Engine:**  
   The Worker immediately intercepts legacy test URLs indexed from previous ownership (e.g., `/glp1-calculator`, `/weight-loss/*`, `/test/*`, `/lorem-ipsum`) and outputs:
   * **Status:** `410 Gone`
   * **Header:** `X-Robots-Tag: noindex, nofollow`
   * **Benefit:** Rapidly signals Google and Bing to permanently remove stale, irrelevant URLs from the index, resolving topical dilution within weeks.
2. **Strict Canonicalization:**
   * Enforces lowercase paths, removes duplicate slashes, and standardizes trailing slashes.
   * Enforces `https://aloedaily.com` (redirecting `http://` and `www.aloedaily.com` at the edge with permanent 301 headers).

### B. Dynamic Virtual Feeds
* **`/sitemap.xml`:** Master sitemap index linking to pillar sub-sitemaps (`/sitemap-skincare.xml`, `/sitemap-health.xml`, `/sitemap-cultivation.xml`, `/sitemap-audits.xml`).
* **`/robots.txt`:** Dynamically rendered with explicit rules allowing AI search crawlers (*GPTBot, PerplexityBot, ClaudeBot, Google-Extended*) while referencing all sitemaps.
* **`/llms.txt`:** Plain text summary of the site's botanical expertise, core pillars, testing methodologies, and editorial board, tailored for large language model citation engines.
* **IndexNow Automated Webhook:** On content deploy or update, the Worker automatically triggers an asynchronous POST to the IndexNow API (`api.indexnow.org`) to notify Bing, Yandex, and Perplexity of updated URLs in real time.

---

## 7. Interactive Micro-Tools & Commercial Dispatch Engines

All micro-tools are designed as **zero-dependency, lightweight edge-hydrated components** (vanilla JavaScript web components under 5KB each). They create massive user dwell time, lower bounce rates, and generate natural high-authority backlinks:

1. **Aloin Flush Countdown Timer & Protocol (`/health/how-to-remove-aloin-from-aloe-leaf/`):**
   * Guides the reader through cutting the leaf, standing it vertically for 15 minutes, and soaking it in water for 20 minutes.
   * Includes audio alert, visual color chart (indicating yellow latex dissipation), and safety checklist.
2. **Daily Aloe Juice Safe Intake Calculator (`/health/aloe-vera-juice-dosage-calculator/`):**
   * Calculates safe daily consumption (in ounces and milliliters) based on user body weight, health goal (digestion vs general wellness), and product type (decolorized inner-leaf vs whole leaf).
   * Displays immediate medical warnings for pregnancy or interactions with diabetes and diuretic medications.
3. **Plant Health Diagnostic Flowchart (`/cultivation/fix-soft-mushy-aloe-leaves/`):**
   * Multi-step interactive troubleshooter asking: leaf firmness, color changes, potting soil type, and sunlight hours.
   * Outputs an instant treatment protocol (e.g., "Root Rot Emergency Repotting Protocol").
4. **Discreet Domain Sale & Acquisition Dispatcher:**
   * Sleek, high-converting banner and footer utility link: *"Inquire About Acquiring Aloedaily.com"*.
   * Clicking launches a lightweight modal form capturing buyer name, corporate entity, offer range, and message.
   * Worker edge API (`/api/domain-inquire`) validates the input, enforces rate limiting, and forwards the inquiry via encrypted webhook directly to the domain owner’s email/Telegram.

---

## 8. Step-by-Step Implementation Roadmap (Planning Phase)

```
[Phase 1] ──► Repository Setup, Wrangler Configuration & Edge Routing Architecture
[Phase 2] ──► Data Models Ingestion (Pillars, 50+ Articles, Authors, Citations, Audits)
[Phase 3] ──► Edge-SSR HTML Templating Engine & Tailwind Inlined Design System
[Phase 4] ──► Interactive Web Components (Aloin Timer, Dosage Calculator, Diagnostic Tool)
[Phase 5] ──► Automated JSON-LD Schema Graph & Virtual Feeds (Sitemaps, Robots, LLMs.txt)
[Phase 6] ──► Legacy 410 Cleanup Engine, Domain Dispatcher & Pre-Flight Edge Performance Audit
```

---

## 9. Next Steps & Confirmation

This completes the architectural planning and systems engineering blueprint based on the Cloudflare Workers edge-native model. 

*No coding has been performed yet.* When you are ready to begin, we will proceed to Phase 1 (scaffolding the `wrangler.toml`, package configuration, TypeScript types, and high-performance edge router).
