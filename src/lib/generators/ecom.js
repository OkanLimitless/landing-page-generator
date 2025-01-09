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
            justify-content: center;
            align-items: center;
            gap: 1rem;
            text-align: center;
          }

          .stock-countdown {
            font-weight: bold;
            color: ${style.colors.secondary};
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
            display: flex;
            gap: 1rem;
            align-items: flex-start;
          }

          .${ids.testimonials} .testimonial img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid ${style.colors.primary};
          }

          .${ids.testimonials} .author {
            font-weight: bold;
            color: ${style.colors.primary};
            margin-bottom: 0.25rem;
          }

          .${ids.testimonials} .location {
            font-size: 0.9rem;
            opacity: 0.8;
            margin-bottom: 0.5rem;
          }

          .${ids.testimonials} .verified-badge {
            color: ${style.colors.primary};
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            gap: 0.25rem;
            margin-left: 0.5rem;
          }

          .purchase-notification {
            position: fixed;
            bottom: 120px;
            right: 20px;
            background: ${style.colors.primary};
            color: ${style.colors.text};
            padding: 1rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            animation: slideIn 0.5s ease-out;
            z-index: 1001;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .scarcity-badge {
            background: ${style.colors.primary};
            color: ${style.colors.text};
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-weight: bold;
            margin: 1rem 0;
            display: inline-block;
            animation: pulse 2s infinite;
          }

          .guarantee-badge {
            background: rgba(255,255,255,0.05);
            padding: 1rem;
            border-radius: 0.5rem;
            margin: 2rem 0;
            text-align: center;
            border: 1px solid ${style.colors.primary};
          }

          .guarantee-badge .icon {
            font-size: 2rem;
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
          ${data.language === 'de' ? 
            '🔥 Nur noch <span class="stock-countdown" id="stock-countdown">12</span> verfügbar! Jetzt zugreifen!' : 
            '🔥 Only <span class="stock-countdown" id="stock-countdown">12</span> left in stock! Grab yours now!'}
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


          <!-- Real-time Purchase Notifications -->
          <div id="purchase-notifications"></div>

          <!-- Scarcity Badge -->
          <div class="scarcity-badge">
            ${data.language === 'de' ? 
              'Nur noch <span id="scarcity-count">12</span> verfügbar!' : 
              'Only <span id="scarcity-count">12</span> left in stock!'}
          </div>

          <!-- Satisfaction Guarantee -->
          <div class="guarantee-badge">
            <div class="icon">✅</div>
            <div>
              ${data.language === 'de' ? 
                '100% Zufriedenheitsgarantie | 30 Tage Geld-zurück-Garantie' : 
                '100% Satisfaction Guarantee | 30-Day Money Back Guarantee'}
            </div>
          </div>

          <!-- Verified Testimonials -->
          <div class="${ids.testimonials}">
            ${testimonials[data.language || 'en'].map(testimonial => `
              <div class="testimonial">
                <img src="${testimonial.photo}" alt="${testimonial.name}" />
                <div>
                  <div class="author">
                    ${testimonial.name}
                    ${testimonial.verified ? 
                      `<span class="verified-badge">✅ ${data.language === 'de' ? 'Verifiziert' : 'Verified'}</span>` : ''}
                  </div>
                  <div class="location">${testimonial.location}</div>
                  <p class="text">"${testimonial.text}"</p>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Animated Trust Slider -->
          <div class="trust-slider">
            <div class="slider-track">
              <div class="slide">🔒 ${data.language === 'de' ? 'Sichere SSL-Verschlüsselung' : 'Secure SSL Encryption'}</div>
              <div class="slide">💳 ${data.language === 'de' ? 'Sichere Zahlungsabwicklung' : 'Safe Payment Processing'}</div>
              <div class="slide">📦 ${data.language === 'de' ? '30 Tage Geld-zurück-Garantie' : '30-Day Money Back Guarantee'}</div>
              <div class="slide">⭐ ${data.language === 'de' ? '4.9/5 Bewertungen' : '4.9/5 Customer Reviews'}</div>
            </div>
          </div>

          <style>
            .trust-slider {
              overflow: hidden;
              position: relative;
              margin: 2rem 0;
              padding: 1rem 0;
              background: rgba(255,255,255,0.05);
              border-radius: 0.5rem;
            }

            .slider-track {
              display: flex;
              width: 400%;
              animation: slide 20s linear infinite;
            }

            .slide {
              flex: 1;
              text-align: center;
              padding: 0.5rem;
              font-size: 1.1rem;
              opacity: 0.9;
              white-space: nowrap;
            }

            @keyframes slide {
              0% { transform: translateX(0); }
              25% { transform: translateX(-25%); }
              50% { transform: translateX(-50%); }
              75% { transform: translateX(-75%); }
              100% { transform: translateX(0); }
            }

            @media (max-width: 640px) {
              .slider-track {
                width: 800%;
              }

              .slide {
                font-size: 1rem;
                white-space: normal;
              }
            }
          </style>


          <!-- Urgency Sticky Bar -->
          <div class="urgency-sticky-bar" onclick="window.location.href='${data.offerUrl}'">
            <div class="urgency-content">
              <div class="urgency-text">
                ${data.language === 'de' ? 
                  '🔥 Letzte Chance! Nur noch ' : 
                  '🔥 Last Chance! Only '}
                <span id="sticky-countdown"></span>
                ${data.language === 'de' ? 
                  ' verbleibend für 70% Rabatt!' : 
                  ' remaining for 70% OFF!'}
              </div>
              <div class="urgency-button">
                ${data.language === 'de' ? 'Jetzt kaufen' : 'Buy Now'} →
              </div>
            </div>
          </div>

          <style>
            .urgency-sticky-bar {
              position: fixed;
              bottom: 0;
              left: 0;
              width: 100%;
              background: ${style.colors.primary};
              color: ${style.colors.text};
              padding: 1rem;
              text-align: center;
              cursor: pointer;
              z-index: 1000;
              box-shadow: 0 -4px 20px rgba(0,0,0,0.2);
              animation: slideUp 0.5s ease-out;
            }

            .urgency-content {
              max-width: 1200px;
              margin: 0 auto;
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 1rem;
            }

            .urgency-text {
              font-weight: 600;
              font-size: 1.1rem;
            }

            .urgency-button {
              background: rgba(255,255,255,0.1);
              padding: 0.75rem 2rem;
              border-radius: 0.5rem;
              font-weight: bold;
              transition: all 0.3s ease;
            }

            .urgency-sticky-bar:hover .urgency-button {
              background: rgba(255,255,255,0.2);
              transform: translateX(5px);
            }

            @media (max-width: 768px) {
              .urgency-content {
                flex-direction: column;
                gap: 0.5rem;
              }
              
              .urgency-text {
                font-size: 1rem;
              }
              
              .urgency-button {
                padding: 0.5rem 1.5rem;
              }
            }
          </style>

          <script>
            const offerEndDate = new Date();
            offerEndDate.setMinutes(offerEndDate.getMinutes() + 40); // Offer ends in 40 minutes

            function updateStickyCountdown(targetDate) {
              const countdownEl = document.getElementById('sticky-countdown');
              if (!countdownEl) return;

              const interval = setInterval(() => {
                const now = new Date();
                const diff = targetDate - now;

                if (diff <= 0) {
                  clearInterval(interval);
                  countdownEl.textContent = '00:00:00';
                  return;
                }

                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                countdownEl.textContent = 
                  String(hours).padStart(2, '0') + ':' + 
                  String(minutes).padStart(2, '0') + ':' + 
                  String(seconds).padStart(2, '0');
              }, 1000);
            }

            updateStickyCountdown(offerEndDate);
          </script>

          <a href="${data.offerUrl}" class="${ids.button}" onclick="${gtagAccount ? 'gtag_report_conversion();' : ''}">
            ${data.language === 'de' ? 'Jetzt Rabatt sichern' : 'Claim Your Discount'}
          </a>
        </div>

        <footer class="${ids.footer}">
          <div class="links">
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Service</a>
            <a href="contact.html">Contact</a>
          </div>
          <div class="copyright">
            © ${new Date().getFullYear()} ${data.productName || 'Company Name'}. All rights reserved.<br>
            This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way.<br>
            FACEBOOK is a trademark of FACEBOOK, Inc.
          </div>
        </footer>

        <script>
          // Stock countdown logic
          function startStockCountdown() {
            const stockEl = document.getElementById('stock-countdown');
            const scarcityEl = document.getElementById('scarcity-count');
            if (!stockEl || !scarcityEl) return;

            let stockCount = 12;
            const minStock = 3; // Never go below this number
            const intervalTime = 30000 + Math.random() * 30000; // 30-60 seconds

            const interval = setInterval(() => {
              if (stockCount > minStock) {
                stockCount--;
                stockEl.textContent = stockCount;
                scarcityEl.textContent = stockCount;
              }
            }, intervalTime);
          }

          startStockCountdown();

          // Utility function
          function getRandomItem(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
          }

          // Real-time purchase notifications
          function showPurchaseNotification(notificationData) {
            const notification = document.createElement('div');
            notification.className = 'purchase-notification';
            const message = notificationData.language === 'de' 
              ? getRandomItem(notificationData.names) + ' aus ' + getRandomItem(notificationData.cities) + ' hat gerade gekauft!'
              : getRandomItem(notificationData.names) + ' from ' + getRandomItem(notificationData.cities) + ' just purchased!';
            
            notification.innerHTML = '<span>🛒</span><div>' + message + '</div>';
            
            document.getElementById('purchase-notifications').appendChild(notification);
            
            setTimeout(() => {
              notification.remove();
            }, 5000);
          }

          // Initialize notification data
          const notificationData = {
            language: '${data.language || 'en'}',
            names: ${data.language === 'de' ? 
              JSON.stringify(['Hans', 'Peter', 'Michael', 'Thomas', 'Andreas', 'Stefan', 'Markus', 'Christian', 'Alexander', 'Daniel', 'Simon', 'Lukas', 'Florian', 'Matthias', 'Sebastian']) : 
              JSON.stringify(['John', 'Mike', 'David', 'James', 'Robert', 'William', 'Joseph', 'Charles', 'Thomas', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Donald'])},
            cities: ${data.language === 'de' ? 
              JSON.stringify(['Berlin', 'München', 'Hamburg', 'Köln', 'Frankfurt']) : 
              JSON.stringify(['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'])}
          };

          // Show initial notifications
          setTimeout(() => showPurchaseNotification(notificationData), 2000);
          setTimeout(() => showPurchaseNotification(notificationData), 8000);
          setTimeout(() => showPurchaseNotification(notificationData), 15000);
          
          // Show random notifications every 20-40 seconds
          setInterval(() => {
            if (Math.random() > 0.5) {
              showPurchaseNotification(notificationData);
            }
          }, 20000 + Math.random() * 20000);
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
