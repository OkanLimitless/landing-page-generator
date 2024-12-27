import { getRandomStyle } from '../utils/style-variations';
import { trustSignals, benefitStyles, priceDisplays, ctaButtons, getRandomVariation } from '../utils/ecom-elements';

export function generateEcomPage(data) {
  const [gtagAccount, gtagConversion] = (data.gtagId || '').split('/');
  const styles = getRandomStyle();
  
  // Get random variations
  const badges = getRandomVariation(trustSignals.badges.content);
  const rating = getRandomVariation(trustSignals.rating.content);
  const social = getRandomVariation(trustSignals.social.content);
  const urgency = getRandomVariation(trustSignals.urgency.content);
  const benefitStyle = getRandomVariation(benefitStyles);
  const priceDisplay = getRandomVariation(priceDisplays);
  const ctaButton = getRandomVariation(ctaButtons);

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
        
        <style>
            /* [Previous styles remain the same...] */
        </style>
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
                        ${badges.map(badge => `
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