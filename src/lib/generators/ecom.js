import { getRandomStyle } from '../utils/style-variations';
import { trustSignals, benefitStyles, priceDisplays, ctaButtons, getRandomVariation } from '../utils/ecom-elements';

export function generateEcomPage(data) {
  console.log('Ecom ', data);
  const [gtagAccount, gtagConversion] = (data.gtagId || '').split('/');
  const generatedStyles = getRandomStyle();
  console.log('Ecom generatedStyles:', generatedStyles);
  const styles = generatedStyles;
  console.log('Ecom styles:', styles);
  
  // Get random variations
  console.log('Ecom trustSignals.badges.content:', trustSignals.badges.content);
  const trustBadges = getRandomVariation(trustSignals.badges.content);
  console.log('Ecom trustBadges:', trustBadges);
  console.log('Ecom trustSignals.rating.content:', trustSignals.rating.content);
  const rating = getRandomVariation(trustSignals.rating.content);
  console.log('Ecom rating:', rating);
  console.log('Ecom trustSignals.social.content:', trustSignals.social.content);
  const social = getRandomVariation(trustSignals.social.content);
  console.log('Ecom social:', social);
  console.log('Ecom trustSignals.urgency.content:', trustSignals.urgency.content);
  const urgency = getRandomVariation(trustSignals.urgency.content);
  console.log('Ecom urgency:', urgency);
  console.log('Ecom benefitStyles:', benefitStyles);
  const benefitStyle = getRandomVariation(benefitStyles);
  console.log('Ecom benefitStyle:', benefitStyle);
  console.log('Ecom priceDisplays:', priceDisplays);
  const priceDisplay = getRandomVariation(priceDisplays);
  console.log('Ecom priceDisplay:', priceDisplay);
  console.log('Ecom ctaButtons:', ctaButtons);
  const ctaButton = getRandomVariation(ctaButtons);
  console.log('Ecom ctaButton:', ctaButton);

  console.log('Ecom trustBadges (after getRandomVariation):', trustBadges);
  console.log('Ecom rating (after getRandomVariation):', rating);
  console.log('Ecom social (after getRandomVariation):', social);
  console.log('Ecom urgency (after getRandomVariation):', urgency);
  console.log('Ecom benefitStyle (after getRandomVariation):', benefitStyle);
  console.log('Ecom priceDisplay (after getRandomVariation):', priceDisplay);
  console.log('Ecom ctaButton (after getRandomVariation):', ctaButton);

  // Generate random IDs
  const ids = {
    container: `container_${Math.random().toString(36).substr(2, 9)}`,
    product: `product_${Math.random().toString(36).substr(2, 9)}`,
    cta: `cta_${Math.random().toString(36).substr(2, 9)}`,
    footer: `footer_${Math.random().toString(36).substr(2, 9)}`
  };

  const features = data.features.split('\n').filter(Boolean);
  const images = data.productImages.split(',').map(url => url.trim());
  const mainImage = images[0] || '';

  // Generate the CSS styles (moved out to keep code organized)
  const styles_css = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: ${styles.fonts.body};
      line-height: 1.6;
      color: #fff;
      background: ${styles.background.main};
      background-image: ${styles.background.overlay};
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .urgency-bar {
      background: ${styles.colors.primary};
      color: ${styles.colors.text};
      text-align: center;
      padding: ${styles.spacing.vertical};
      font-weight: 600;
      font-size: clamp(0.9rem, 2.5vw, 1.1rem);
    }

    #${ids.container} {
      width: 90%;
      max-width: ${styles.container.maxWidth};
      margin: 0 auto;
      padding: ${styles.container.padding};
    }

    .product-header {
      text-align: center;
      margin: 2rem auto;
      max-width: 800px;
    }

    .product-name {
      font-family: ${styles.fonts.heading};
      font-weight: ${styles.fonts.weights.heading};
      font-size: clamp(1.8rem, 5vw, 2.5rem);
      margin: ${styles.spacing.vertical} auto;
      line-height: 1.2;
      color: ${styles.colors.primary};
    }

    .trust-rating {
      font-size: clamp(1rem, 3vw, 1.2rem);
      color: ${styles.colors.primary};
      margin: 1rem 0;
    }

    .social-proof {
      font-size: clamp(0.9rem, 2.5vw, 1.1rem);
      color: rgba(255, 255, 255, 0.9);
      margin: 0.5rem 0;
    }

    .product-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      margin: 2rem 0;
      align-items: start;
    }

    @media (min-width: 768px) {
      .product-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    .product-image-section {
      position: relative;
    }

    .product-image {
      ${styles.image}
      aspect-ratio: 1;
      max-width: 500px;
      width: 100%;
      margin: 0 auto;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .product-image:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
    }

    .product-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }

    .product-details {
      display: flex;
      flex-direction: column;
      gap: ${styles.spacing.vertical};
    }

    .price-section {
      text-align: center;
      margin: 1.5rem 0;
    }

    .price-display {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    }

    .original-price {
      color: rgba(255, 255, 255, 0.6);
      text-decoration: line-through;
      font-size: clamp(1rem, 3vw, 1.2rem);
    }

    .price {
      font-size: clamp(2rem, 6vw, 2.5rem);
      font-weight: bold;
      color: ${styles.colors.primary};
    }

    .savings {
      color: ${styles.colors.accent};
      font-weight: 500;
      font-size: clamp(0.9rem, 2.5vw, 1.1rem);
    }

    .benefits {
      ${benefitStyle.style}
    }

    .benefit-item {
      background: rgba(255, 255, 255, 0.05);
      padding: 1rem;
      border-radius: ${styles.borderRadius};
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .benefit-icon {
      color: ${styles.colors.primary};
      font-size: 1.2rem;
    }

    .cta-button {
      ${styles.button(styles.colors)}
      display: block;
      padding: ${styles.spacing.vertical} ${styles.spacing.horizontal};
      font-size: clamp(1.2rem, 4vw, 1.5rem);
      font-weight: ${styles.fonts.weights.heading};
      text-decoration: none;
      border-radius: ${styles.borderRadius};
      margin: ${styles.spacing.vertical} auto;
      text-align: center;
      width: 90%;
      max-width: 500px;
    }

    .trust-badges {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1.5rem;
      margin: 1.5rem 0;
      text-align: center;
    }

    .trust-badge {
      color: ${styles.colors.accent};
      font-size: clamp(0.8rem, 2vw, 0.9rem);
    }

    #${ids.footer} {
      background: rgba(255, 255, 255, 0.05);
      padding: ${styles.spacing.vertical} 0;
      margin-top: auto;
      text-align: center;
      font-size: clamp(0.75rem, 2vw, 0.875rem);
      color: rgba(255, 255, 255, 0.7);
    }

    .footer-links {
      margin: 1rem 0;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .footer-links a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      padding: 0.5rem;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: ${styles.colors.primary};
    }

    .footer-disclaimer {
      max-width: 600px;
      margin: 1rem auto;
      padding: 0 20px;
      font-size: clamp(0.7rem, 2vw, 0.75rem);
      line-height: 1.5;
      color: rgba(255, 255, 255, 0.5);
    }

    @media (max-width: 768px) {
      #${ids.container} {
        width: 95%;
        padding: 15px;
      }

      .product-image {
        max-width: 100%;
      }

      .cta-button {
        width: 95%;
        padding: 0.875rem;
        margin: 1.5rem auto;
      }

      .benefits {
        padding: 0;
      }

      .benefit-item {
        padding: 0.875rem;
      }
    }
  `;

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.productName}</title>
        
        ${styles.fonts.urls.map(url => `<link href="${url}" rel="stylesheet">`).join('\n        ')}
        ${data.trackingScript || ''}
        
        ${gtagAccount ? `
        <script async src="https://www.googletagmanager.com/gtag/js?id=${gtagAccount}"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtagAccount}');
            
            function gtag_report_conversion() {
                gtag('event', 'conversion', {
                    'send_to': '${data.gtagId}'
                });
                return false;
            }
        </script>
        ` : ''}
        
        <style>${styles_css}</style>
    </head>
    <body>
        <div class="urgency-bar">
            ${urgency}
        </div>

        <main id="${ids.container}">
            <div class="product-header">
                <h1 class="product-name">${data.productName}</h1>
                <div class="trust-rating">
                    ${rating}
                </div>
                <div class="social-proof">
                    ${social}
                </div>
            </div>

            <div class="product-grid">
                <div class="product-image-section">
                    <div 
                        class="product-image"
                        onclick="window.location.href='${data.offerUrl}'; gtag_report_conversion();"
                        role="button"
                        tabindex="0"
                    >
                        <img src="${mainImage}" alt="${data.productName}">
                    </div>
                </div>

                <div class="product-details">
                    <div class="price-section">
                        ${priceDisplay.template(data.price)}
                    </div>

                    <div class="benefits">
                        ${features.map(feature => `
                            <div class="benefit-item">
                                <span class="benefit-icon">✔</span>
                                <span>${feature}</span>
                            </div>
                        `).join('')}
                    </div>

                    <a 
                        href="${data.offerUrl}" 
                        class="cta-button"
                        onclick="gtag_report_conversion();"
                    >
                        ${ctaButton.text[0]}
                    </a>

                    <div class="trust-badges">
                        ${trustBadges.map(badge => `
                            <div class="trust-badge">${badge}</div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <a 
                href="${data.offerUrl}" 
                class="cta-button"
                onclick="gtag_report_conversion();"
            >
                ${ctaButton.text[1] || ctaButton.text[0]}
            </a>
        </main>

        <footer id="${ids.footer}">
            <div class="container">
                <div class="footer-links">
                    <a href="privacy.html">Privacy Policy</a>
                    <a href="terms.html">Terms of Service</a>
                </div>
                <div class="footer-disclaimer">
                    This site is not a part of Google, Inc. or Google.com, nor is it sponsored or endorsed by Google. 
                    YouTube is a trademark of Google Inc.
                </div>
                <div>&copy; ${new Date().getFullYear()} All rights reserved</div>
            </div>
        </footer>
    </body>
    </html>
  `;
}
