import { getRandomStyle } from '../utils/style-variations';
import { trustSignals, benefitStyles, priceDisplays, ctaButtons, getRandomVariation, getElementByType } from '../utils/ecom-elements';

export function generateEcomPage(data) {
  try {
    const [gtagAccount, gtagConversion] = (data.gtagId || '').split('/');
    const styles = data.styles || getRandomStyle();
    
    // Get random variations with error handling
    const trustBadges = getRandomVariation(getElementByType('badges').content) || [];
    const rating = getRandomVariation(getElementByType('rating').content) || '';
    const social = getRandomVariation(getElementByType('social').content) || '';
    const urgency = getRandomVariation(getElementByType('urgency').content) || '';
    const benefitStyle = getRandomVariation(benefitStyles) || benefitStyles[0];
    const priceDisplay = getRandomVariation(priceDisplays) || priceDisplays[0];
    const ctaButton = getRandomVariation(ctaButtons) || ctaButtons[0];

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
      * { margin: 0; padding: 0; box-sizing: border-box; }

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
      }

      ${styles.buttonHover ? styles.buttonHover(styles.colors) : ''}
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
            <!-- Content here ... -->
          </main>

          <footer id="${ids.footer}">
              <div class="container">
                  <div class="footer-links">
                      <a href="privacy.html">Privacy Policy</a>
                      <a href="terms.html">Terms of Service</a>
                  </div>
                  <div class="footer-disclaimer">
                      ${data.disclaimer || 'All rights reserved.'}
                  </div>
                  <div>&copy; ${new Date().getFullYear()}</div>
              </div>
          </footer>
      </body>
      </html>
    `;
  } catch (error) {
    console.error('Error generating ecom page:', error);
    throw error;
  }
}