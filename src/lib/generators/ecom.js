import { getRandomStyle } from '../utils/style-variations';
import { trustSignals, benefitStyles, priceDisplays, ctaButtons, getRandomVariation, getElementByType } from '../utils/ecom-elements';

export function generateEcomPage(data) {
  try {
    const [gtagAccount] = (data.gtagId || '').split('/');
    const styles = data.styles || getRandomStyle();

    if (!styles) {
      throw new Error('Failed to generate styles');
    }

    const ids = {
      container: `container_${Math.random().toString(36).substr(2, 9)}`,
      product: `product_${Math.random().toString(36).substr(2, 9)}`,
      footer: `footer_${Math.random().toString(36).substr(2, 9)}`
    };

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.productName}</title>
        ${styles.fonts.urls.map(url => `<link href="${url}" rel="stylesheet">`).join('\n')}
        ${data.trackingScript || ''}
        <style>
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
            padding: 1rem;
            font-weight: 600;
            font-size: clamp(0.9rem, 2.5vw, 1.1rem);
            position: sticky;
            top: 0;
            z-index: 100;
          }

          .discount-badge {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: ${styles.colors.primary};
            color: ${styles.colors.text};
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-weight: bold;
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
          }

          .product-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .product-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            position: relative;
          }

          @media (min-width: 768px) {
            .product-grid {
              grid-template-columns: 1fr 1fr;
              align-items: start;
            }
          }

          .product-name {
            font-family: ${styles.fonts.heading};
            font-size: clamp(2rem, 5vw, 3rem);
            margin-bottom: 1rem;
            color: ${styles.colors.primary};
          }

          .trust-stats {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;
            margin: 1.5rem 0;
            font-size: clamp(0.9rem, 2vw, 1rem);
          }

          .stat {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .product-image {
            width: 100%;
            border-radius: 1rem;
            overflow: hidden;
            position: relative;
            aspect-ratio: 1;
            background: rgba(255,255,255,0.1);
          }

          .product-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .features {
            display: grid;
            gap: 1rem;
            margin: 2rem 0;
          }

          .feature {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: rgba(255,255,255,0.05);
            border-radius: 0.5rem;
          }

          .feature-icon {
            color: ${styles.colors.primary};
            font-size: 1.5rem;
          }

          .cta-button {
            ${styles.button(styles.colors)}
            display: block;
            width: 100%;
            max-width: 400px;
            margin: 2rem auto;
            padding: 1.25rem 2rem;
            text-align: center;
            text-decoration: none;
            font-size: clamp(1.1rem, 3vw, 1.3rem);
            font-weight: 600;
            border-radius: 0.5rem;
            transition: all 0.3s ease;
          }

          ${styles.buttonHover ? styles.buttonHover(styles.colors) : ''}

          footer {
            margin-top: auto;
            text-align: center;
            padding: 2rem;
            background: rgba(0,0,0,0.2);
          }

          .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 1rem;
          }

          .footer-links a {
            color: rgba(255,255,255,0.7);
            text-decoration: none;
          }

          @media (max-width: 640px) {
            .container { width: 95%; padding: 1rem; }
            .product-grid { gap: 1.5rem; }
            .trust-stats { flex-direction: column; align-items: center; }
          }
        </style>
      </head>
      <body>
        <div class="urgency-bar">
          ⚡ Limited Time Offer - Up to 70% OFF Today Only!
        </div>

        <div class="container">
          <header class="product-header">
            <h1 class="product-name">${data.productName}</h1>
            <div class="trust-stats">
              <div class="stat">⭐️ 4.9/5 Based on 2,347+ Reviews</div>
              <div class="stat">✨ Trusted by 2,500+ Customers</div>
              <div class="stat">🔥 Limited Stock Available</div>
            </div>
          </header>

          <main class="product-grid">
            <div class="product-image">
              <img src="${data.productImages.split(',')[0]}" alt="${data.productName}" />
              <div class="discount-badge">SAVE 70%</div>
            </div>

            <div class="product-details">
              <div class="features">
                ${data.features.split('\n').map(feature => `
                  <div class="feature">
                    <span class="feature-icon">✓</span>
                    <span>${feature}</span>
                  </div>
                `).join('')}
              </div>

              <a href="${data.offerUrl}" class="cta-button" onclick="${gtagAccount ? 'gtag_report_conversion();' : ''}">Claim Your Discount Now</a>

              <div class="trust-features">
                <div class="feature">🔒 Secure Checkout</div>
                <div class="feature">🚚 Fast & Free Shipping</div>
                <div class="feature">💯 100% Money Back Guarantee</div>
              </div>
            </div>
          </main>
        </div>

        <footer>
          <div class="footer-links">
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Service</a>
          </div>
          <div>© ${new Date().getFullYear()} All rights reserved</div>
        </footer>

        ${gtagAccount ? `
          <script async src="https://www.googletagmanager.com/gtag/js?id=${gtagAccount}"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtagAccount}');
            function gtag_report_conversion() {
              gtag('event', 'conversion', { 'send_to': '${data.gtagId}' });
              return false;
            }
          </script>
        ` : ''}
      </body>
      </html>`;
  } catch (error) {
    console.error('Error generating ecom page:', error);
    throw error;
  }
}