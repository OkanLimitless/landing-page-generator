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
    { 
      name: 'John D.', 
      text: 'This product changed my life! I highly recommend it.',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      location: 'New York, USA',
      verified: true
    },
    { 
      name: 'Sarah M.', 
      text: 'Amazing quality and fast shipping. I\'m a customer for life!',
      photo: 'https://randomuser.me/api/portraits/women/2.jpg',
      location: 'London, UK',
      verified: true
    },
    { 
      name: 'Mike L.', 
      text: 'I was skeptical at first, but this product exceeded my expectations.',
      photo: 'https://randomuser.me/api/portraits/men/3.jpg',
      location: 'Sydney, Australia',
      verified: true
    },
  ],
  de: [
    { 
      name: 'Hans M.', 
      text: 'Dieses Produkt hat mein Leben verändert! Ich kann es nur empfehlen.',
      photo: 'https://randomuser.me/api/portraits/men/4.jpg',
      location: 'Berlin, Deutschland',
      verified: true
    },
    { 
      name: 'Sabine K.', 
      text: 'Erstaunliche Qualität und schneller Versand. Ich bin ein Kunde fürs Leben!',
      photo: 'https://randomuser.me/api/portraits/women/5.jpg',
      location: 'München, Deutschland',
      verified: true
    },
    { 
      name: 'Peter S.', 
      text: 'Ich war zunächst skeptisch, aber dieses Produkt hat meine Erwartungen übertroffen.',
      photo: 'https://randomuser.me/api/portraits/men/6.jpg',
      location: 'Hamburg, Deutschland',
      verified: true
    },
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
          /* App-like base styles */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
          }

          body, html {
            background: ${style.colors.bg};
            color: ${style.colors.text};
            font-family: ${style.fonts.body};
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
          }

          /* App Header */
          .app-header {
            position: sticky;
            top: 0;
            z-index: 1000;
            background: ${style.colors.bg};
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid ${style.colors.primary}20;
          }

          .app-header .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: ${style.colors.primary};
          }

          .app-header .cta-btn {
            background: ${style.colors.primary};
            color: ${style.colors.text};
            padding: 0.75rem 1.5rem;
            border-radius: 2rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s ease;
          }

          .app-header .cta-btn:hover {
            transform: scale(1.05);
          }

          /* Hero Section */
          .hero-section {
            padding: 2rem 1rem;
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .hero-section .product-image {
            width: 100%;
            max-width: 400px;
            margin: 0 auto;
            border-radius: 2rem;
            overflow: hidden;
            box-shadow: 0 4px 30px rgba(0,0,0,0.2);
          }

          .hero-section h1 {
            color: ${style.colors.primary};
            font-size: 2rem;
            margin: 1.5rem 0;
            line-height: 1.2;
          }

          .hero-section .price {
            font-size: 1.5rem;
            margin: 1rem 0;
            color: ${style.colors.secondary};
          }

          .hero-section .price .old-price {
            text-decoration: line-through;
            opacity: 0.7;
            margin-right: 0.5rem;
          }

          /* Features Grid */
          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
            padding: 1rem;
            max-width: 800px;
            margin: 0 auto;
          }

          .feature-card {
            background: rgba(255,255,255,0.03);
            padding: 1.5rem;
            border-radius: 1rem;
            text-align: center;
            border: 1px solid ${style.colors.primary}10;
            transition: all 0.2s ease;
          }

          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          }

          .feature-card .icon {
            font-size: 2rem;
            color: ${style.colors.primary};
            margin-bottom: 1rem;
          }

          /* Floating CTA */
          .floating-cta {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: ${style.colors.primary};
            padding: 1rem;
            text-align: center;
            z-index: 1000;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.2);
          }

          .floating-cta .cta-btn {
            display: block;
            background: ${style.colors.text};
            color: ${style.colors.primary};
            padding: 1.25rem;
            border-radius: 1rem;
            font-size: 1.2rem;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.2s ease;
          }

          .floating-cta .cta-btn:hover {
            transform: scale(1.05);
          }

          /* Countdown Timer */
          .countdown-timer {
            background: rgba(255,255,255,0.05);
            padding: 1rem;
            border-radius: 1rem;
            margin: 2rem auto;
            max-width: 400px;
            text-align: center;
          }

          .countdown-timer .label {
            font-size: 0.9rem;
            opacity: 0.8;
            margin-bottom: 0.5rem;
          }

          .countdown-timer .timer {
            font-size: 1.5rem;
            font-weight: 700;
            color: ${style.colors.secondary};
          }

          /* Mobile Optimization */
          @media (max-width: 768px) {
            .hero-section h1 {
              font-size: 1.8rem;
            }

            .features-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .floating-cta .cta-btn {
              padding: 1rem;
              font-size: 1rem;
            }
          }
        </style>
      </head>
      <body>
        <!-- App Header -->
        <div class="app-header">
          <div class="logo">${data.productName}</div>
          <a href="${data.offerUrl}" class="cta-btn">
            ${data.language === 'de' ? 'Jetzt kaufen' : 'Buy Now'}
          </a>
        </div>

        <!-- Hero Section -->
        <div class="hero-section">
          <img src="${data.productImages.split(',')[0]}" alt="${data.productName}" class="product-image">
          <h1>${data.productName}</h1>
          <div class="price">
            <span class="old-price">$199</span>
            <span class="new-price">$99</span>
          </div>
        </div>

        <!-- Features Grid -->
        <div class="features-grid">
          ${features.slice(0, 4).map(feature => `
            <div class="feature-card">
              <div class="icon">✓</div>
              <div>${feature}</div>
            </div>
          `).join('')}
        </div>

        <!-- Countdown Timer -->
        <div class="countdown-timer">
          <div class="label">${data.language === 'de' ? 'Angebot endet in:' : 'Offer ends in:'}</div>
          <div class="timer" id="countdown-timer">00:00:00</div>
        </div>

        <!-- Floating CTA -->
        <div class="floating-cta">
          <a href="${data.offerUrl}" class="cta-btn">
            ${data.language === 'de' ? 'Jetzt kaufen & sparen' : 'Buy Now & Save'}
          </a>
        </div>

        <script>
          // Countdown Timer
          const offerEndDate = new Date();
          offerEndDate.setMinutes(offerEndDate.getMinutes() + 40);

          function updateCountdown() {
            const now = new Date();
            const diff = offerEndDate - now;

            if (diff <= 0) {
              clearInterval(interval);
              document.getElementById('countdown-timer').textContent = '00:00:00';
              return;
            }

            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('countdown-timer').textContent = 
              String(hours).padStart(2, '0') + ':' + 
              String(minutes).padStart(2, '0') + ':' + 
              String(seconds).padStart(2, '0');
          }

          const interval = setInterval(updateCountdown, 1000);
          updateCountdown();
        </script>
      </body>
      </html>`;
  } catch (error) {
    console.error('Error generating ecom page:', error);
    throw error;
  }
}
