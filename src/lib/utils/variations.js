export const variations = {
  contentStructures: [
    (content) => `
      <main class="${content.mainClass}">
        <header class="${content.headerClass}">${content.header}</header>
        <div class="${content.contentClass}">${content.body}</div>
        <footer class="${content.footerClass}">${content.footer}</footer>
      </main>
    `,
    (content) => `
      <div class="${content.mainClass}">
        <section class="${content.headerClass}">${content.header}</section>
        <article class="${content.contentClass}">${content.body}</article>
        <section class="${content.footerClass}">${content.footer}</section>
      </div>
    `,
    (content) => `
      <div class="${content.mainClass}">
        <div class="${content.headerClass}">${content.header}</div>
        <main class="${content.contentClass}">${content.body}</main>
        <div class="${content.footerClass}">${content.footer}</div>
      </div>
    `
  ],
  mediaContainers: [
    (media) => `
      <div class="${media.containerClass}" onclick="${media.onClick}">
        <img src="${media.src}" alt="${media.alt}" class="${media.imageClass}">
      </div>
    `,
    (media) => `
      <figure class="${media.containerClass}" onclick="${media.onClick}">
        <img src="${media.src}" alt="${media.alt}" class="${media.imageClass}">
        <figcaption class="sr-only">${media.alt}</figcaption>
      </figure>
    `
  ],
  ctaButtons: [
    (cta) => `
      <a href="${cta.url}" class="${cta.class}" onclick="${cta.onClick}">${cta.text}</a>
    `,
    (cta) => `
      <a href="${cta.url}" class="${cta.class}" onclick="${cta.onClick}">
        <span class="cta-text">${cta.text}</span>
      </a>
    `
  ],
  footers: [
    (footer) => `
      <div class="footer-content">
        <div class="footer-links">${footer.links}</div>
        <div class="footer-legal">${footer.disclaimer}</div>
      </div>
    `,
    (footer) => `
      <div class="footer-content">
        <nav class="footer-links">${footer.links}</nav>
        <small class="footer-legal">${footer.disclaimer}</small>
      </div>
    `
  ],
  getRandomVariation: (variations) => variations[Math.floor(Math.random() * variations.length)]
};