// Different ways to structure the main content
const contentLayouts = [
  // Layout 1: Standard vertical flow
  (content) => `
    <header>
      ${content.header}
    </header>
    <main>
      ${content.main}
    </main>
    <footer>
      ${content.footer}
    </footer>
  `,
  
  // Layout 2: Main wrapped in article
  (content) => `
    <header>
      ${content.header}
    </header>
    <article>
      <main>
        ${content.main}
      </main>
    </article>
    <footer>
      ${content.footer}
    </footer>
  `,
  
  // Layout 3: Sections based
  (content) => `
    <header>
      ${content.header}
    </header>
    <section class="content-area">
      <main>
        ${content.main}
      </main>
    </section>
    <footer>
      ${content.footer}
    </footer>
  `
];

// Different ways to structure the video/image section
const mediaLayouts = [
  // Layout 1: Simple container
  (media) => `
    <div class="${media.containerClass}">
      <img src="${media.src}" alt="${media.alt}" class="${media.imageClass}">
    </div>
  `,
  
  // Layout 2: Figure with caption
  (media) => `
    <figure class="${media.containerClass}">
      <img src="${media.src}" alt="${media.alt}" class="${media.imageClass}">
      <figcaption class="visually-hidden">${media.alt}</figcaption>
    </figure>
  `,
  
  // Layout 3: Background image container
  (media) => `
    <div class="${media.containerClass}" role="img" aria-label="${media.alt}"
      style="background-image: url('${media.src}'); background-size: cover;">
    </div>
  `
];

// Different CTA button layouts
const ctaLayouts = [
  // Layout 1: Simple button
  (cta) => `
    <a href="${cta.url}" class="${cta.class}" onclick="${cta.onClick}">
      ${cta.text}
    </a>
  `,
  
  // Layout 2: Button with icon
  (cta) => `
    <a href="${cta.url}" class="${cta.class}" onclick="${cta.onClick}">
      <span class="icon">▶</span>
      <span>${cta.text}</span>
    </a>
  `,
  
  // Layout 3: Button with wrapper
  (cta) => `
    <div class="cta-wrapper">
      <a href="${cta.url}" class="${cta.class}" onclick="${cta.onClick}">
        ${cta.text}
      </a>
    </div>
  `
];

// Different trust signal layouts
const trustSignalLayouts = [
  // Layout 1: Simple icons row
  () => `
    <div class="trust-signals">
      <span>🔒 Secure Access</span>
      <span>✓ Verified Content</span>
      <span>⚡ Instant Access</span>
    </div>
  `,
  
  // Layout 2: Detailed cards
  () => `
    <div class="trust-signals">
      <div class="trust-card">
        <div class="icon">🔒</div>
        <div class="text">Secure Access</div>
      </div>
      <div class="trust-card">
        <div class="icon">✓</div>
        <div class="text">Verified Content</div>
      </div>
      <div class="trust-card">
        <div class="icon">⚡</div>
        <div class="text">Instant Access</div>
      </div>
    </div>
  `,
  
  // Layout 3: Inline badges
  () => `
    <div class="trust-signals">
      <span class="badge">🔒 Secure</span>
      <span class="badge">✓ Verified</span>
      <span class="badge">⚡ Instant</span>
    </div>
  `
];

// Different footer layouts
const footerLayouts = [
  // Layout 1: Simple stack
  (content) => `
    <div class="footer-content">
      <div class="footer-links">${content.links}</div>
      <div class="footer-disclaimer">${content.disclaimer}</div>
      <div class="copyright">${content.copyright}</div>
    </div>
  `,
  
  // Layout 2: Two columns
  (content) => `
    <div class="footer-content">
      <div class="footer-left">
        <div class="footer-links">${content.links}</div>
      </div>
      <div class="footer-right">
        <div class="footer-disclaimer">${content.disclaimer}</div>
        <div class="copyright">${content.copyright}</div>
      </div>
    </div>
  `,
  
  // Layout 3: Compact
  (content) => `
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-links">${content.links}</div>
        <div class="copyright">${content.copyright}</div>
      </div>
      <div class="footer-disclaimer">${content.disclaimer}</div>
    </div>
  `
];

// Generate random HTML attributes order
function randomizeAttributes(attributes) {
  const attrs = Object.entries(attributes);
  for (let i = attrs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [attrs[i], attrs[j]] = [attrs[j], attrs[i]];
  }
  return attrs.map(([key, value]) => `${key}="${value}"`).join(' ');
}

export {
  contentLayouts,
  mediaLayouts,
  ctaLayouts,
  trustSignalLayouts,
  footerLayouts,
  randomizeAttributes
};