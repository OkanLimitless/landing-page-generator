import { getRandomStyle } from '../utils/style-variations';

export function generateEcomPage(data) {
  try {
    const [gtagAccount] = (data.gtagId || '').split('/');
    const styles = data.styles || getRandomStyle();

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.productName}</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }

          body {
            background: rgb(24, 26, 42);
            color: #fff;
            font-family: system, -apple-system, sans-serif;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }

          .urgency-bar {
            background: rgb(146, 87, 166);
            color: white;
            text-align: center;
            padding: 0.75rem;
            font-weight: 500;
          }

          .content {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem 1rem;
            text-align: center;
          }

          h1 {
            font-size: 2.5rem;
            color: rgb(146, 87, 166);
            margin: 2rem 0;
            font-weight: 600;
          }

          .trust-stats {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin: 1rem 0 2rem;
            opacity: 0.9;
          }

          .video-container {
            position: relative;
            border-radius: 1rem;
            overflow: hidden;
            margin: 2rem auto;
            max-width: 600px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          }

          .video-container img {
            width: 100%;
            height: auto;
            display: block;
          }

          .play-button {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80px;
            height: 80px;
            background: #e74c3c;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .discount-badge {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgb(66, 135, 245);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-weight: bold;
          }

          .cta-button {
            display: block;
            background: rgb(146, 87, 166);
            color: white;
            text-decoration: none;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            font-size: 1.2rem;
            font-weight: 600;
            margin: 2rem auto;
            max-width: 400px;
            transition: all 0.3s ease;
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(146, 87, 166, 0.4);
          }

          .trust-icons {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin: 2rem 0;
            opacity: 0.8;
          }

          footer {
            margin-top: auto;
            text-align: center;
            padding: 2rem;
            opacity: 0.7;
            font-size: 0.9rem;
          }

          .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 1rem;
          }

          .footer-links a {
            color: white;
            text-decoration: none;
            opacity: 0.7;
          }

          @media (max-width: 640px) {
            .content { padding: 1rem; }
            h1 { font-size: 2rem; }
          }
        </style>
      </head>
      <body>
        <div class="urgency-bar">
          ⚡ Limited Time Offer - Up to 70% OFF Today Only!
        </div>

        <div class="content">
          <h1>${data.productName}</h1>
          
          <div class="trust-stats">
            <div>★★★★★ 4.9 Based on 2,347+ Reviews</div>
            <div>✨ Trusted by 2,500+ Customers</div>
          </div>

          <div class="video-container">
            <img src="${data.productImages.split(',')[0]}" alt="${data.productName}" />
            <div class="play-button">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div class="discount-badge">SAVE 70%</div>
          </div>

          <a href="${data.offerUrl}" class="cta-button">
            Buy Now - Special Offer
          </a>

          <div class="trust-icons">
            <div>💳 Safe Payment</div>
            <div>✨ Premium Quality</div>
            <div>🎁 Special Offer</div>
          </div>

          <a href="${data.offerUrl}" class="cta-button">
            Claim Your Discount
          </a>
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