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
const testimonials = {
  en: [
    { name: 'John D.', text: 'This product changed my life! I highly recommend it.' },
    { name: 'Sarah M.', text: 'Amazing quality and fast shipping. I\'m a customer for life!' },
    { name: 'Mike L.', text: 'I was skeptical at first, but this product exceeded my expectations.' },
  ],
  de: [
    { name: 'Hans M.', text: 'Dieses Produkt hat mein Leben verändert! Ich kann es nur empfehlen.' },
    { name: 'Sabine K.', text: 'Erstaunliche Qualität und schneller Versand. Ich bin ein Kunde fürs Leben!' },
    { name: 'Peter S.', text: 'Ich war zunächst skeptisch, aber dieses Produkt hat meine Erwartungen übertroffen.' },
  ]
};

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
            padding: 0.75rem;
            font-weight: 500;
            position: relative;
            animation: pulse 2s infinite;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
          }

          .urgency-text {
            flex: 1;
            text-align: center;
          }

          .countdown {
            font-size: 0.9rem;
            opacity: 0.9;
            white-space: nowrap;
          }

          @media (max-width: 480px) {
            .urgency-bar {
              flex-direction: column;
              gap: 0.5rem;
              padding: 0.5rem;
            }
            
            .urgency-text {
              font-size: 0.9rem;
            }
            
            .countdown {
              font-size: 0.8rem;
            }
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
            animation: fadeInUp 0.5s ease-out;
          }

          .${ids.features} .icon {
            color: ${style.colors.primary};
            flex-shrink: 0;
          }

          .floating-cta {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            animation: float 3s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .sticky-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: ${style.colors.bg};
            box-shadow: 0 -4px 20px rgba(0,0,0,0.2);
            z-index: 999;
            padding: 1rem;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            animation: slideUp 0.5s ease-out;
          }

          .sticky-bar .cta-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem;
            border-radius: 0.5rem;
            background: rgba(255,255,255,0.05);
            text-align: center;
            transition: all 0.3s ease;
          }

          .sticky-bar .cta-item:hover {
            transform: translateY(-2px);
            background: rgba(255,255,255,0.1);
          }

          @keyframes slideUp {
            from {
              transform: translateY(100%);
            }
            to {
              transform: translateY(0);
            }
          }

          @media (max-width: 640px) {
            .floating-cta {
              bottom: 80px;
              right: 10px;
            }
            
            .sticky-bar {
              grid-template-columns: repeat(3, 1fr);
              padding: 0.5rem;
              gap: 0.5rem;
            }
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
            animation: pulse 2s infinite;
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


          .${ids.testimonials} .testimonial {
            background: rgba(255,255,255,0.05);
            padding: 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            text-align: left;
            animation: fadeInUp 0.5s ease-out;
          }

          .${ids.testimonials} .author {
            font-weight: bold;
            color: ${style.colors.primary};
            margin-bottom: 0.5rem;
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
            .sticky-cta { position: relative; }
          }
        </style>
      </head>
      <body>
        <div class="urgency-bar">
          <div class="urgency-text">
            ${data.language === 'de' ? 
              '⚡ Zeitbegrenztes Angebot - Bis zu 70% Rabatt!' : 
              '⚡ Limited Time Offer - Up to 70% OFF!'}
          </div>
          <span class="countdown" id="countdown"></span>
        </div>

        <div class="${ids.container}">
          <div class="${ids.header}">
            <h1>${data.productName}</h1>
            <div class="trust-stats">
              <div>★★★★★ ${data.language === 'de' ? '4.9 basierend auf 2.347+ Bewertungen' : '4.9 Based on 2,347+ Reviews'}</div>
              <div>✨ ${data.language === 'de' ? 'Vertrauen von 2.500+ Kunden' : 'Trusted by 2,500+ Customers'}</div>
            </div>
          </div>

          <div class="${ids.video}" onclick="window.location.href='${data.offerUrl}'; ${gtagAccount ? 'gtag_report_conversion();' : ''}">
            <img src="${data.productImages.split(',')[0]}" alt="${data.productName}" />
            <div class="badge">SAVE 70%</div>
          </div>

          <a href="${data.offerUrl}" class="${ids.button}" onclick="${gtagAccount ? 'gtag_report_conversion();' : ''}">
            ${data.buttonText || (data.language === 'de' ? 'Jetzt kaufen' : 'Buy Now')}
          </a>

          <div class="${ids.features}">
            ${features.map(feature => `
              <div class="feature">
                <span class="icon">✓</span>
                <span>${feature}</span>
              </div>
            `).join('')}
          </div>


          <div class="${ids.testimonials}">
            ${testimonials[data.language || 'en'].map(testimonial => `
              <div class="testimonial">
                <p class="text">"${testimonial.text}"</p>
                <p class="author">- ${testimonial.name}</p>
              </div>
            `).join('')}
          </div>

          <!-- Floating CTA -->
          <div class="floating-cta" aria-label="Floating Call to Action">
            <a href="${data.offerUrl}" 
               class="${ids.button}" 
               onclick="${gtagAccount ? 'gtag_report_conversion();' : ''}"
               aria-label="Buy Now Button">
              ${data.language === 'de' ? 'Jetzt kaufen' : 'Buy Now'}
            </a>
          </div>

          <!-- Sticky Bottom Bar -->
          <div class="sticky-bar" role="navigation" aria-label="Main Navigation">
            <div class="cta-item" onclick="window.location.href='${data.offerUrl}'" role="button" tabindex="0" aria-label="Special Offer">
              <span>🔥</span>
              <span>${data.language === 'de' ? 'Angebot' : 'Special Offer'}</span>
            </div>
            <div class="cta-item" onclick="window.location.href='${data.offerUrl}'" role="button" tabindex="0" aria-label="Customer Reviews">
              <span>⭐</span>
              <span>${data.language === 'de' ? 'Bewertungen' : 'Reviews'}</span>
            </div>
            <div class="cta-item" onclick="window.location.href='${data.offerUrl}'" role="button" tabindex="0" aria-label="Secure Checkout">
              <span>🔒</span>
              <span>${data.language === 'de' ? 'Sicher' : 'Secure'}</span>
            </div>
          </div>

          <div class="trust-icons">
            <div>💳 ${data.language === 'de' ? 'Sichere Zahlung' : 'Safe Payment'}</div>
            <div>✨ ${data.language === 'de' ? 'Premium Qualität' : 'Premium Quality'}</div>
            <div>🎁 ${data.language === 'de' ? 'Sonderangebot' : 'Special Offer'}</div>
          </div>

          <a href="${data.offerUrl}" class="${ids.button}" onclick="${gtagAccount ? 'gtag_report_conversion();' : ''}">
            Claim Your Discount
          </a>
        </div>

        <footer class="${ids.footer}">
          <div class="links">
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Service</a>
            <a href="contact.html">Contact</a>
            <a href="affiliate.html">Affiliate Disclosure</a>
          </div>
          <div class="copyright">
            © ${new Date().getFullYear()} ${data.productName || 'Company Name'}. All rights reserved.<br>
            This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way.<br>
            FACEBOOK is a trademark of FACEBOOK, Inc.
          </div>
        </footer>

        <script>
          function startCountdown(targetDate) {
            const countdownEl = document.getElementById('countdown');
            if (!countdownEl) return;

            const interval = setInterval(() => {
              const now = new Date();
              const diff = targetDate - now;

              if (diff <= 0) {
                clearInterval(interval);
                countdownEl.textContent = 'Offer Expired!';
                return;
              }

              const days = Math.floor(diff / (1000 * 60 * 60 * 24));
              const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
              const seconds = Math.floor((diff % (1000 * 60)) / 1000);

              countdownEl.textContent = \`\${days}d \${hours}h \${minutes}m \${seconds}s\`;
            }, 1000);
          }

          const offerEndDate = new Date();
          offerEndDate.setHours(offerEndDate.getHours() + 24); // Offer ends in 24 hours
          startCountdown(offerEndDate);
        </script>

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
