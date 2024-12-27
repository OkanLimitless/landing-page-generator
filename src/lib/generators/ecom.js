import { getRandomStyle } from '../utils/style-variations';

const generateId = () => Math.random().toString(36).substr(2, 9);

export function generateEcomPage(data) {
  try {
    const [gtagAccount] = (data.gtagId || '').split('/');
    const styles = data.styles || getRandomStyle();
    
    const ids = {
      container: `c_${generateId()}`,
      header: `h_${generateId()}`,
      content: `m_${generateId()}`,
      video: `v_${generateId()}`,
      button: `b_${generateId()}`,
      footer: `f_${generateId()}`
    };

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
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.5;
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

          .${ids.container} {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem 1rem;
            text-align: center;
          }

          .${ids.header} {
            margin: 2rem 0;
          }

          .${ids.header} h1 {
            color: rgb(146, 87, 166);
            font-size: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 600;
          }

          .${ids.header} .trust-stats {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            opacity: 0.9;
          }

          .${ids.video} {
            position: relative;
            margin: 2rem auto;
            max-width: 600px;
            border-radius: 1rem;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            cursor: pointer;
            transition: transform 0.3s ease;
          }

          .${ids.video}:hover {
            transform: translateY(-2px);
          }

          .${ids.video} img {
            width: 100%;
            height: auto;
            display: block;
          }

          .${ids.video} .badge {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgb(66, 135, 245);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-weight: bold;
          }

          .${ids.button} {
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

          .${ids.button}:hover {
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

          .${ids.footer} {
            margin-top: auto;
            text-align: center;
            padding: 2rem;
          }

          .${ids.footer} .links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 1rem;
          }

          .${ids.footer} a {
            color: rgba(255,255,255,0.7);
            text-decoration: none;
          }

          .${ids.footer} .copyright {
            opacity: 0.7;
            font-size: 0.9rem;
          }

          @media (max-width: 640px) {
            .${ids.container} {
              padding: 1rem;
            }
            .${ids.header} h1 {
              font-size: 2rem;
            }
            .trust-icons {
              flex-direction: column;
              gap: 1rem;
            }
          }
        </style>
      </head>
      <body>
        <div class="urgency-bar">
          ⚡ Limited Time Offer - Up to 70% OFF Today Only!
        </div>

        <div class="${ids.container}">
          <div class="${ids.header}">
            <h1>${data.productName}</h1>
            <div class="trust-stats">
              <div>★★★★★ 4.9 Based on 2,347+ Reviews</div>
              <div>✨ Trusted by 2,500+ Customers</div>
            </div>
          </div>

          <div class="${ids.video}" onclick="window.location.href='${data.offerUrl}'; ${gtagAccount ? 'gtag_report_conversion();' : ''}">
            <img src="${data.productImages.split(',')[0]}" alt="${data.productName}" />
            <div class="badge">SAVE 70%</div>
          </div>

          <a href="${data.offerUrl}" class="${ids.button}" onclick="${gtagAccount ? 'gtag_report_conversion();' : ''}">
            Buy Now - Special Offer
          </a>

          <div class="trust-icons">
            <div>💳 Safe Payment</div>
            <div>✨ Premium Quality</div>
            <div>🎁 Special Offer</div>
          </div>

          <a href="${data.offerUrl}" class="${ids.button}" onclick="${gtagAccount ? 'gtag_report_conversion();' : ''}">
            Claim Your Discount
          </a>
        </div>

        <footer class="${ids.footer}">
          <div class="links">
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Service</a>
          </div>
          <div class="copyright">
            © ${new Date().getFullYear()} All rights reserved
          </div>
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