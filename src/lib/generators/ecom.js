import { getRandomStyle } from '../utils/style-variations';
import { trustSignals, benefitStyles, priceDisplays, ctaButtons, getRandomVariation, getElementByType } from '../utils/ecom-elements';

export function generateEcomPage(data) {
  try {
    const [gtagAccount, gtagConversion] = (data.gtagId || '').split('/');
    const styles = data.styles || getRandomStyle();

    // Get random variations with proper type selection
    const trustBadges = getRandomVariation(getElementByType('badges')) || [];
    const rating = getRandomVariation(getElementByType('rating')) || '';
    const social = getRandomVariation(getElementByType('social')) || '';
    const urgency = getRandomVariation(getElementByType('urgency')) || '';
    const benefitStyle = getRandomVariation(benefitStyles) || benefitStyles[0];
    const priceDisplay = getRandomVariation(priceDisplays) || priceDisplays[0];
    const ctaButton = getRandomVariation(ctaButtons) || ctaButtons[0];

    // Rest of the code remains the same
    const ids = {
      container: `container_${Math.random().toString(36).substr(2, 9)}`,
      product: `product_${Math.random().toString(36).substr(2, 9)}`,
      cta: `cta_${Math.random().toString(36).substr(2, 9)}`,
      footer: `footer_${Math.random().toString(36).substr(2, 9)}`
    };

    const features = (data.features || '').split('\n').filter(Boolean);
    const images = (data.productImages || '').split(',').map(url => url.trim());
    const mainImage = images[0] || '';

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
        transition: all 0.3s ease;
      }

      ${styles.buttonHover ? styles.buttonHover(styles.colors) : ''}

      .product-name {
        font-family: ${styles.fonts.heading};
        font-weight: ${styles.fonts.weights.heading};
        font-size: clamp(1.8rem, 5vw, 2.5rem);
        margin: ${styles.spacing.vertical} auto;
        line-height: 1.2;
        color: ${styles.colors.primary};
        text-align: center;
      }

      .product-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        margin: 2rem 0;
      }

      @media (min-width: 768px) {
        .product-grid {
          grid-template-columns: 1fr 1fr;
        }
      }

      .product-image {
        ${styles.image}
        aspect-ratio: 1;
        max-width: 500px;
        width: 100%;
        margin: 0 auto;
        cursor: pointer;
      }

      .product-details {
        padding: 1rem;
      }

      .benefits {
        ${benefitStyle.style}
      }

      .benefit-item {
        background: rgba(255, 255, 255, 0.05);
        padding: 1rem;
        border-radius: ${styles.borderRadius};
        margin-bottom: 1rem;
      }

      .trust-badges {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
        margin: 2rem 0;
      }

      .trust-badge {
        background: rgba(255, 255, 255, 0.05);
        padding: 0.5rem 1rem;
        border-radius: ${styles.borderRadius};
      }

      footer {
        margin-top: auto;
        text-align: center;
        padding: 2rem 0;
        background: rgba(0, 0, 0, 0.1);
      }
    `;

    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.productName || 'Product Page'}</title>
        ${styles.fonts.urls.map(url => `<link href="${url}" rel="stylesheet">`).join('\n')}
        ${data.trackingScript || ''}
        <style>${styles_css}</style>
      </head>
      <body>
        <div class="urgency-bar">${urgency}</div>
        
        <main id="${ids.container}">
          <h1 class="product-name">${data.productName}</h1>
          
          <div class="trust-rating">${rating}</div>
          <div class="social-proof">${social}</div>
          
          <div class="product-grid">
            <div class="product-image">
              <img src="${mainImage}" alt="${data.productName}">
            </div>
            
            <div class="product-details">
              <div class="price-section">
                ${priceDisplay.template(data.price)}
              </div>
              
              <div class="benefits">
                ${features.map(feature => `
                  <div class="benefit-item">
                    <span class="benefit-icon">✓</span>
                    <span>${feature}</span>
                  </div>
                `).join('')}
              </div>

              <a href="${data.offerUrl}" class="cta-button">
                ${ctaButton.text[0]}
              </a>

              <div class="trust-badges">
                ${trustBadges.map(badge => `
                  <div class="trust-badge">${badge}</div>
                `).join('')}
              </div>
            </div>
          </div>

          <a href="${data.offerUrl}" class="cta-button">
            ${ctaButton.text[1] || ctaButton.text[0]}
          </a>
        </main>

        <footer>
          <div class="footer-links">
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Service</a>
          </div>
          <div>© ${new Date().getFullYear()} All rights reserved</div>
        </footer>
      </body>
      </html>
    `;
  } catch (error) {
    console.error('Error in generateEcomPage:', error);
    throw error;
  }
}