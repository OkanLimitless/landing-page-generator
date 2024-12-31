const generateId = () => Math.random().toString(36).substr(2, 9);

// More style variations
// More style variations
const colors = [
  { primary: '#9257A6', secondary: '#4287F5', text: '#ffffff', bg: '#18192A' },
  { primary: '#FF6B6B', secondary: '#4ECDC4', text: '#ffffff', bg: '#2D3436' },
  { primary: '#6C5CE7', secondary: '#00B894', text: '#ffffff', bg: '#1E272E' },
  { primary: '#F368E0', secondary: '#48DBFB', text: '#ffffff', bg: '#222F3E' },
  { primary: '#FF9F43', secondary: '#26C6DA', text: '#ffffff', bg: '#2C3E50' },
  { primary: '#00B0FF', secondary: '#FF5E62', text: '#ffffff', bg: '#212121' },
  { primary: '#FF5733', secondary: '#3498DB', text: '#ffffff', bg: '#263238' },
  { primary: '#4CAF50', secondary: '#FFC107', text: '#ffffff', bg: '#3E2723' },
  { primary: '#FF5733', secondary: '#FFC107', text: '#ffffff', bg: '#212121' }, // New
  { primary: '#00BCD4', secondary: '#FFEB3B', text: '#ffffff', bg: '#3E2723' }, // New
  { primary: '#9C27B0', secondary: '#FF9800', text: '#ffffff', bg: '#263238' }, // New
  { primary: '#673AB7', secondary: '#FFC107', text: '#ffffff', bg: '#1E272E' }, // New
];

const fonts = [
  { body: 'system-ui, -apple-system, sans-serif' },
  { body: 'Inter, sans-serif' },
  { body: 'Outfit, sans-serif' },
  { body: 'Roboto, sans-serif' },
  { body: 'Open Sans, sans-serif' },
  { body: 'Lato, sans-serif' },
  { body: 'Poppins, sans-serif' }, // New
  { body: 'Montserrat, sans-serif' }, // New
  { body: 'Raleway, sans-serif' }, // New
  { body: 'Source Sans Pro, sans-serif' }, // New
];

const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];

// Testimonials
const testimonials = [
  { name: 'John D.', text: 'This product changed my life! I highly recommend it.' },
  { name: 'Sarah M.', text: 'Amazing quality and fast shipping. I\'m a customer for life!' },
  { name: 'Mike L.', text: 'I was skeptical at first, but this product exceeded my expectations.' },
];

export function generateEcomPage(data) {
  try {
    const [gtagAccount] = (data.gtagId || '').split('/');
    const style = {
      colors: getRandomItem(colors),
      fonts: getRandomItem(fonts)
    };

    const ids = {
      container: `c_${generateId()}`,
      header: `h_${generateId()}`,
      content: `m_${generateId()}`,
      video: `v_${generateId()}`,
      button: `b_${generateId()}`,
      features: `ft_${generateId()}`,
      testimonials: `tm_${generateId()}`,
      footer: `f_${generateId()}`
    };

    const features = (data.features || '').split('\n').filter(Boolean);

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.productName}</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; scroll-behavior: smooth; }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          body, html {
            background: ${style.colors.bg};
            color: ${style.colors.text};
            font-family: ${style.fonts.body};
            line-height: 1.5;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            overflow-x: hidden;
          }

          .urgency-bar {
            background: ${style.colors.primary};
            color: ${style.colors.text};
            text-align: center;
            padding: 0.75rem;
            font-weight: 500;
            position: relative;
          }

          .countdown {
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            font-size: 0.9rem;
            opacity: 0.9;
          }

          .${ids.container} {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem 1rem;
            text-align: center;
          }

          .${ids.header} h1 {
            color: ${style.colors.primary};
            font-size: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 600;
          }

          .${ids.header} .trust-stats {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            opacity: 0.9;
            margin: 1.5rem 0;
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
            background: ${style.colors.secondary};
            color: ${style.colors.text};
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-weight: bold;
          }

          .${ids.features} {
            margin: 2rem auto;
            display: grid;
            gap: 1rem;
            max-width: 600px;
          }

          .${ids.features} .feature {
            background: rgba(255,255,255,0.05);
            padding: 1rem;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            text-align: left;
          }

          .${ids.features} .icon {
            color: ${style.colors.primary};
            flex-shrink: 0;
          }

          .${ids.button} {
            display: block;
            background: ${style.colors.primary};
            color: ${style.colors.text};
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
            box-shadow: 0 4px 15px ${style.colors.primary}40;
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
            background: rgba(0,0,0,0.2);
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
            .${ids.container} { padding: 1rem; }
            .${ids.header} h1 { font-size: 2rem; }
            .trust-icons { flex-direction: column; gap: 1rem; }
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

          <div class="${ids.features}">
            ${features.map(feature => `
              <div class="feature">
                <span class="icon">✓</span>
                <span>${feature}</span>
              </div>
            `).join('')}
          </div>


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
