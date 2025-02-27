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

// Add more random elements
const randomElements = {
  discountTexts: [
    "LIMITED TIME OFFER",
    "EXCLUSIVE DISCOUNT",
    "FLASH SALE",
    "SPECIAL DEAL",
    "HOT DEAL",
    "INSIDER OFFER"
  ],
  urgencyPhrases: [
    "Hurry! Only a few left!",
    "Don't miss out!",
    "Offer ending soon!",
    "Last chance!",
    "Limited stock!",
    "Almost gone!"
  ],
  ratingCounts: [
    "4,832 reviews",
    "5,129 reviews",
    "4,567 reviews",
    "5,432 reviews",
    "4,921 reviews"
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

    // Generate unique class names using the existing IDs
    const classes = {
      header: `header-${generateId()}`,
      hero: `hero-${generateId()}`,
      discount: `discount-${generateId()}`,
      ratings: `ratings-${generateId()}`,
      urgency: `urgency-${generateId()}`,
      cta: `cta-${generateId()}`,
      footer: `footer-${generateId()}`
    };

    // Generate random meta elements
    const randomMeta = {
      descriptions: [
        `Discover the best deals on ${data.productName}. Limited time offer!`,
        `Get ${data.productName} at an exclusive discount. Don't miss out!`,
        `Special promotion: ${data.productName} at unbeatable prices.`,
        `Shop ${data.productName} with confidence. Best prices guaranteed.`
      ],
      keywords: [
        `${data.productName}, best deal, limited offer`,
        `${data.productName}, special promotion, online shopping`,
        `${data.productName}, exclusive discount, trusted seller`
      ]
    };

    // Generate postback URL with account and tracking IDs
    const postbackUrl = `https://postback.amjdjuduqj.workers.dev/${data.accountId}/${data.gtagId}`;

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.productName}</title>
        <meta name="description" content="${getRandomItem(randomMeta.descriptions)}">
        <meta name="keywords" content="${getRandomItem(randomMeta.keywords)}">
        <meta name="robots" content="index, follow">
        <!-- Google Ads Conversion Tracking -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=${data.gtagId}"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${data.gtagId}');
        </script>
        <style>
          /* Modern, clean base styles */
          * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
            scroll-behavior: smooth; 
          }

          body, html {
            background: ${style.colors.bg};
            color: ${style.colors.text};
            font-family: ${style.fonts.body};
            line-height: 1.6;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            overflow-x: hidden;
          }

          /* App Header */
          .${classes.header} {
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
          .${classes.hero} {
            padding: 2rem 1rem;
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .hero-section .product-image {
            width: 100%;
            max-width: 400px;
            height: auto;
            margin: 0 auto;
            border-radius: 2rem;
            overflow: hidden;
            box-shadow: 0 4px 30px rgba(0,0,0,0.2);
            display: block;
          }

          .hero-section h1 {
            color: ${style.colors.primary};
            font-size: 2rem;
            margin: 1.5rem 0;
            line-height: 1.2;
          }

          /* Discount Badge */
          .${classes.discount} {
            background: ${style.colors.secondary};
            color: ${style.colors.text};
            padding: 0.75rem 2rem;
            border-radius: 2rem;
            font-weight: 800;
            font-size: 1.1rem;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            display: inline-block;
            margin: 1.5rem 0;
            animation: pulse 1.5s infinite;
            text-decoration: none;
            font-family: 'Montserrat', sans-serif;
            border: 2px solid ${style.colors.primary}20;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
            transition: all 0.3s ease;
          }

          .${classes.discount}:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 25px rgba(0,0,0,0.25);
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.03); }
            100% { transform: scale(1); }
          }

          /* Ratings */
          .${classes.ratings} {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin: 1rem 0;
          }

          .ratings .star {
            color: #FFD700;
            font-size: 1.5rem;
          }

          .ratings .count {
            color: ${style.colors.text}cc;
            font-size: 0.9rem;
            align-self: flex-end;
          }

          /* Urgency Section */
          .${classes.urgency} {
            background: rgba(255,255,255,0.03);
            padding: 1.5rem;
            margin: 2rem 1rem;
            border-radius: 1rem;
            text-align: center;
            border: 1px solid ${style.colors.primary}10;
          }

          .urgency-section .label {
            font-size: 0.9rem;
            opacity: 0.8;
            margin-bottom: 0.5rem;
          }

          .urgency-section .timer {
            font-size: 1.5rem;
            font-weight: 700;
            color: ${style.colors.secondary};
          }

          /* Footer */
          .${classes.footer} {
            margin-top: auto;
            padding: 2rem 1rem 6rem;
            text-align: center;
            font-size: 0.8rem;
            color: ${style.colors.text}cc;
            border-top: 1px solid ${style.colors.primary}10;
            position: relative;
            z-index: 999;
          }

          .footer a {
            color: ${style.colors.primary};
            text-decoration: none;
            margin: 0 0.5rem;
          }

          .footer a:hover {
            text-decoration: underline;
          }

          /* Mobile Optimization */
          @media (max-width: 768px) {
            .hero-section h1 {
              font-size: 1.8rem;
            }
          }

          /* Floating CTA */
          .${classes.cta} {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 1rem;
            background: ${style.colors.bg};
            border-top: 1px solid ${style.colors.primary}20;
            z-index: 1000;
            text-align: center;
          }

          .floating-cta .cta-btn {
            display: inline-block;
            width: 100%;
            max-width: 400px;
            background: ${style.colors.primary};
            color: ${style.colors.text};
            padding: 1.25rem;
            border-radius: 1rem;
            font-size: 1.2rem;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.2s ease;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          }

          .floating-cta .cta-btn:hover {
            transform: scale(1.05);
            background: ${style.colors.secondary};
          }

          /* Header CTA Button */
          .${classes.header} .cta-btn {
            background: ${style.colors.primary};
            color: ${style.colors.text};
            padding: 0.75rem 1.5rem;
            border-radius: 2rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s ease;
            white-space: nowrap;
            margin-left: 1rem;
          }

          /* Floating CTA Button */
          .${classes.cta} .cta-btn {
            display: block;
            width: 90%;
            max-width: 400px;
            margin: 0 auto;
            background: ${style.colors.primary};
            color: ${style.colors.text};
            padding: 1.25rem;
            border-radius: 1rem;
            font-size: 1.2rem;
            font-weight: 700;
            text-decoration: none;
            text-align: center;
            transition: all 0.2s ease;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
          }

          /* Mobile Responsiveness */
          @media (max-width: 768px) {
            .${classes.header} .cta-btn {
              padding: 0.5rem 1rem;
              font-size: 0.9rem;
            }

            .${classes.cta} .cta-btn {
              width: 95%;
              padding: 1rem;
              font-size: 1rem;
            }

            .${classes.hero} .product-image {
              max-width: 300px;
            }
          }

          @media (max-width: 480px) {
            .${classes.hero} .product-image {
              max-width: 250px;
            }
          }

          /* Add Montserrat font */
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');

          /* Mobile adjustments */
          @media (max-width: 768px) {
            .${classes.footer} {
              padding-bottom: 5rem;
            }
          }

          @media (max-width: 480px) {
            .${classes.footer} {
              padding-bottom: 4.5rem;
            }
          }
        </style>
      </head>
      <body>
        <!-- App Header -->
        <div class="${classes.header}">
          <div class="logo">${data.productName}</div>
          <a href="${data.offerUrl}" 
             class="cta-btn"
             onclick="gtag('event', 'conversion', {'send_to': '${data.gtagId}/purchase'});">
            ${data.language === 'de' ? 'Jetzt kaufen' : 'Buy Now'}
          </a>
        </div>

        <!-- Hero Section -->
        <div class="${classes.hero}">
          <a href="${data.offerUrl}">
            <img src="${data.productImages.split(',')[0]}" alt="${data.productName}" class="product-image">
          </a>
          <h1>${data.productName}</h1>
          <a href="${data.offerUrl}" class="${classes.discount}">
            -70% ${getRandomItem(randomElements.discountTexts)}
          </a>
          <div class="${classes.ratings}">
            <div class="star">★★★★★</div>
            <div class="count">(${getRandomItem(randomElements.ratingCounts)})</div>
          </div>
        </div>

        <!-- Urgency Section -->
        <div class="${classes.urgency}">
          <div class="label">${getRandomItem(randomElements.urgencyPhrases)}</div>
          <div class="timer" id="countdown-timer">00:00:00</div>
        </div>

        <!-- Floating CTA -->
        <div class="${classes.cta}">
          <a href="${data.offerUrl}" 
             class="cta-btn"
             onclick="trackConversion()">
            ${data.language === 'de' ? 'Jetzt kaufen & sparen' : 'Buy Now & Save'}
          </a>
        </div>

        <!-- Footer -->
        <div class="${classes.footer}">
          <p>This site contains affiliate links. We may earn a commission if you make a purchase through these links.</p>
          <p>This site is not associated with Google, YouTube, or any other third-party brands.</p>
          <p>
            <a href="/disclosure">Disclosure</a> | 
            <a href="/privacy">Privacy Policy</a> | 
            <a href="/terms">Terms of Service</a>
          </p>
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

          // Enhanced conversion tracking
          function trackConversion() {
            const transactionId = '${generateId()}';
            const clientId = gtag('get', '${data.gtagId}', 'client_id');
            const conversionValue = ${Math.floor(Math.random() * (150 - 50 + 1)) + 50};

            // Send conversion data to postback server
            fetch('${postbackUrl}', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                transaction_id: transactionId,
                client_id: clientId,
                value: conversionValue,
                items: [{
                  item_id: '${data.productId}',
                  item_name: '${data.productName}'
                }]
              })
            });

            // Track conversion in Google Ads
            gtag('event', 'conversion', {
              'send_to': '${data.gtagId}/purchase',
              'value': conversionValue,
              'currency': 'USD',
              'transaction_id': transactionId
            });
          }
        </script>
      </body>
      </html>`;
  } catch (error) {
    console.error('Error generating ecom page:', error);
    throw error;
  }
}