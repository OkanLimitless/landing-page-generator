import { getRandomStyle } from '../utils/style-variations';
import { contentPresets } from '../utils/content-presets';

export const generateProductDetailPage = (data) => {
  try {
    // Check if preset is provided and merge with data
    const presetData = data.preset ? contentPresets[data.preset] : {};
    const mergedData = { ...presetData, ...data };
    
    // Extract gtag ID and label from the provided gtagId
    const [gtagAccount, gtagLabel] = (mergedData.gtagId || '').split('/');
    const styles = mergedData.styles || getRandomStyle();
    if (!styles) {
      throw new Error('Failed to generate styles');
    }

    // Generate unique IDs for elements
    const ids = {
      container: `container_${Math.random().toString(36).substr(2, 9)}`,
      footer: `footer_${Math.random().toString(36).substr(2, 9)}`
    };

    // Google Analytics script
    const gtagScript = gtagAccount ? `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gtagAccount}');
    ` : '';

    // Add the decorative elements to the HTML
    const decorativeHTML = styles.decorative?.html || '';
    const decorativeCSS = styles.decorative?.css || '';

    // Product details with fallbacks
    const productName = mergedData.productName || 'Alpha Bites';
    const productDescription = mergedData.productDescription || 'Our newest formula with the benefits of both Viagra and Cialis. Works in 15 minutes, lasts for 36 hours.';
    const productImage = mergedData.productImage || 'https://via.placeholder.com/600x400/FF5733/FFFFFF?text=' + encodeURIComponent(productName);
    const productPrice = mergedData.productPrice || '$2.50';
    const productPriceUnit = mergedData.productPriceUnit || 'per pill';
    const productBenefits = mergedData.productBenefits || [
      'Works in 15 minutes',
      'Lasts for 36 hours',
      'Clinically proven results',
      'FDA approved'
    ];
    const productComparison = mergedData.productComparison || [
      { feature: 'Speed of action', product: 'As fast as 15 minutes', competitor: '30-60 minutes' },
      { feature: 'Duration', product: 'Up to 36 hours', competitor: '4-6 hours' },
      { feature: 'Take with food', product: 'Yes', competitor: 'No' },
      { feature: 'Daily use', product: 'Yes', competitor: 'No' }
    ];
    const doctorName = mergedData.doctorName || 'Dr. Michael Stevens';
    const doctorTitle = mergedData.doctorTitle || 'MD, Board Certified Urologist';
    const doctorImage = mergedData.doctorImage || 'https://via.placeholder.com/300x300/FFFFFF/333333?text=Doctor';
    const doctorQuote = mergedData.doctorQuote || '"This innovative formula combines the best aspects of existing ED medications with fewer side effects."';

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${productName} - Premium ED Treatment</title>
        ${styles.fonts.urls.map(url => `<link href="${url}" rel="stylesheet">`).join('\n')}
        ${mergedData.trackingScript || ''}
        ${gtagAccount ? `
          <script async src="https://www.googletagmanager.com/gtag/js?id=${gtagAccount}"></script>
          <script>${gtagScript}</script>
        ` : ''}
        <style>
          :root {
            --primary: ${styles.colors.primary};
            --accent: ${styles.colors.accent};
          }
          
          ${decorativeCSS}
          
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            margin: 0;
            font-family: ${styles.fonts.body};
            line-height: 1.6;
            color: #333;
            background: #f8f9fa;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          #${ids.container} {
            width: 90%;
            max-width: ${styles.container.maxWidth};
            margin: 0 auto;
            padding: ${styles.container.padding};
          }
          .header {
            background: ${styles.colors.primary};
            color: white;
            padding: 1rem 0;
          }
          .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .logo {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: 1.5rem;
          }
          .promo-banner {
            background: rgba(0, 0, 0, 0.1);
            padding: 0.75rem;
            text-align: center;
            font-size: 0.9rem;
            color: white;
          }
          .promo-banner a {
            color: white;
            text-decoration: underline;
            font-weight: bold;
          }
          .hero {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            margin: 3rem 0;
            align-items: center;
          }
          .hero-content {
            flex: 1;
            min-width: 300px;
          }
          .hero-image {
            flex: 1;
            min-width: 300px;
            text-align: center;
          }
          .hero-image img {
            max-width: 100%;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }
          .product-title {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: clamp(2rem, 5vw, 3rem);
            margin-bottom: 1rem;
            line-height: 1.2;
            color: #333;
          }
          .product-subtitle {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            color: #666;
          }
          .price-tag {
            display: inline-block;
            background: ${styles.colors.primary};
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 50px;
            font-weight: bold;
            margin-bottom: 1.5rem;
          }
          .benefits {
            margin: 2rem 0;
          }
          .section-title {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            color: #333;
            text-align: center;
          }
          .benefits-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
          }
          .benefit-item {
            background: white;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            display: flex;
            align-items: flex-start;
            gap: 1rem;
          }
          .benefit-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: ${styles.colors.primary};
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            flex-shrink: 0;
          }
          .benefit-content h3 {
            margin-bottom: 0.5rem;
            font-family: ${styles.fonts.heading};
          }
          .cta-button {
            ${styles.button(styles.colors)}
            display: inline-block;
            padding: 1rem 2rem;
            font-size: 1.2rem;
            font-weight: ${styles.fonts.weights.heading};
            text-decoration: none;
            border-radius: ${styles.borderRadius};
            text-align: center;
            margin: 2rem 0;
            transition: all 0.3s ease;
            width: 100%;
          }
          ${styles.buttonHover ? styles.buttonHover(styles.colors) : ''}
          .doctor-section {
            background: #f1f5f9;
            padding: 3rem 0;
            margin: 3rem 0;
          }
          .doctor-container {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            align-items: center;
            max-width: 1000px;
            margin: 0 auto;
          }
          .doctor-image {
            flex: 1;
            min-width: 250px;
            text-align: center;
          }
          .doctor-image img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            border: 5px solid white;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          }
          .doctor-content {
            flex: 2;
            min-width: 300px;
          }
          .doctor-quote {
            font-size: 1.3rem;
            font-style: italic;
            margin-bottom: 1rem;
            position: relative;
            padding-left: 1.5rem;
            border-left: 4px solid ${styles.colors.primary};
          }
          .doctor-name {
            font-weight: bold;
            font-size: 1.2rem;
          }
          .doctor-title {
            color: #666;
          }
          .comparison-section {
            margin: 3rem 0;
          }
          .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0;
            background: white;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 10px;
            overflow: hidden;
          }
          .comparison-table th,
          .comparison-table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid #eee;
          }
          .comparison-table th {
            background: ${styles.colors.primary};
            color: white;
          }
          .comparison-table tr:last-child td {
            border-bottom: none;
          }
          .comparison-table td:nth-child(2) {
            color: ${styles.colors.primary};
            font-weight: bold;
          }
          .testimonials {
            margin: 3rem 0;
          }
          .testimonial-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }
          .testimonial-card {
            background: white;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          }
          .testimonial-text {
            font-style: italic;
            margin-bottom: 1rem;
            position: relative;
          }
          .testimonial-text::before {
            content: '"';
            font-size: 3rem;
            color: ${styles.colors.primary};
            opacity: 0.2;
            position: absolute;
            top: -1rem;
            left: -1rem;
          }
          .testimonial-author {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          .testimonial-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #eee;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: #666;
          }
          .testimonial-info h4 {
            margin: 0;
          }
          .testimonial-info p {
            color: #666;
            font-size: 0.9rem;
          }
          .faq-section {
            margin: 3rem 0;
          }
          .faq-item {
            margin-bottom: 1rem;
            border-bottom: 1px solid #eee;
            padding-bottom: 1rem;
          }
          .faq-question {
            font-weight: bold;
            margin-bottom: 0.5rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .faq-answer {
            color: #666;
            display: none;
          }
          .faq-answer.active {
            display: block;
          }
          .trust-badges {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            margin: 3rem 0;
          }
          .trust-badge {
            text-align: center;
            max-width: 150px;
          }
          .trust-badge img {
            width: 80px;
            height: 80px;
            margin-bottom: 0.5rem;
          }
          .trust-badge p {
            font-size: 0.9rem;
            color: #666;
          }
          .final-cta {
            background: ${styles.colors.primary};
            color: white;
            padding: 3rem 0;
            text-align: center;
          }
          .final-cta h2 {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: clamp(1.8rem, 5vw, 2.5rem);
            margin-bottom: 1.5rem;
          }
          .final-cta p {
            max-width: 600px;
            margin: 0 auto 2rem;
            font-size: 1.1rem;
          }
          .final-cta .cta-button {
            background: white;
            color: ${styles.colors.primary};
            max-width: 300px;
          }
          .final-cta .cta-button:hover {
            background: rgba(255, 255, 255, 0.9);
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }
          #${ids.footer} {
            background: #333;
            padding: ${styles.spacing.vertical} 0;
            margin-top: auto;
            text-align: center;
            font-size: clamp(0.75rem, 2vw, 0.875rem);
            color: rgba(255, 255, 255, 0.7);
          }
          .footer-links {
            margin: 1rem 0;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
          }
          .footer-links a {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            padding: 0.5rem;
            transition: color 0.3s ease;
          }
          .footer-links a:hover { color: ${styles.colors.primary}; }
          .footer-disclaimer {
            max-width: 600px;
            margin: 1rem auto;
            padding: 0 20px;
            font-size: clamp(0.7rem, 2vw, 0.75rem);
            line-height: 1.5;
            color: rgba(255, 255, 255, 0.5);
          }
          @media (max-width: 768px) {
            #${ids.container} { width: 95%; padding: 15px; }
            .hero { flex-direction: column-reverse; }
            .hero-content, .hero-image { min-width: 100%; }
            .doctor-container { flex-direction: column; }
            .doctor-image, .doctor-content { min-width: 100%; }
          }
        </style>
      </head>
      <body>
        <header class="header">
          <div class="promo-banner">
            Get $15 off your first ED order, if prescribed. <a href="#order-now">Start now</a>
          </div>
          <div id="${ids.container}" class="header-content">
            <div class="logo">ro</div>
          </div>
        </header>
        
        ${decorativeHTML}
        
        <main>
          <section id="${ids.container}" class="hero">
            <div class="hero-content">
              <h1 class="product-title">${productName}</h1>
              <p class="product-subtitle">${productDescription}</p>
              <div class="price-tag">Starting at ${productPrice} ${productPriceUnit}</div>
              <p>Our newest formula combines the best of both worlds, giving you stronger, longer-lasting erections when you need them most.</p>
              <a href="#order-now" class="cta-button">Get Started</a>
            </div>
            <div class="hero-image">
              <img src="${productImage}" alt="${productName}">
            </div>
          </section>
          
          <section class="benefits">
            <div id="${ids.container}">
              <h2 class="section-title">Why Choose ${productName}?</h2>
              <div class="benefits-list">
                ${productBenefits.map((benefit, index) => `
                  <div class="benefit-item">
                    <div class="benefit-icon">${index + 1}</div>
                    <div class="benefit-content">
                      <h3>${benefit}</h3>
                      <p>Our clinically tested formula ensures reliable results every time.</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </section>
          
          <section class="doctor-section">
            <div id="${ids.container}">
              <h2 class="section-title">Expert Recommendation</h2>
              <div class="doctor-container">
                <div class="doctor-image">
                  <img src="${doctorImage}" alt="${doctorName}">
                </div>
                <div class="doctor-content">
                  <p class="doctor-quote">${doctorQuote}</p>
                  <p class="doctor-name">${doctorName}</p>
                  <p class="doctor-title">${doctorTitle}</p>
                  <p>With over 15 years of experience treating men's health issues, Dr. Stevens has helped thousands of men regain their confidence and improve their relationships.</p>
                </div>
              </div>
            </div>
          </section>
          
          <section id="${ids.container}" class="comparison-section">
            <h2 class="section-title">How ${productName} Compares</h2>
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>${productName}</th>
                  <th>Other ED Medications</th>
                </tr>
              </thead>
              <tbody>
                ${productComparison.map(item => `
                  <tr>
                    <td>${item.feature}</td>
                    <td>${item.product}</td>
                    <td>${item.competitor}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </section>
          
          <section id="${ids.container}" class="testimonials">
            <h2 class="section-title">What Our Customers Say</h2>
            <div class="testimonial-grid">
              <div class="testimonial-card">
                <p class="testimonial-text">I've tried other ED medications before, but nothing works as quickly or lasts as long as ${productName}. It's been a game-changer for my relationship.</p>
                <div class="testimonial-author">
                  <div class="testimonial-avatar">JD</div>
                  <div class="testimonial-info">
                    <h4>John D.</h4>
                    <p>Age 45, Customer for 6 months</p>
                  </div>
                </div>
              </div>
              <div class="testimonial-card">
                <p class="testimonial-text">The convenience of ${productName} is what sold me. I take it in the morning and I'm ready whenever the moment is right. No planning required.</p>
                <div class="testimonial-author">
                  <div class="testimonial-avatar">MS</div>
                  <div class="testimonial-info">
                    <h4>Michael S.</h4>
                    <p>Age 52, Customer for 3 months</p>
                  </div>
                </div>
              </div>
              <div class="testimonial-card">
                <p class="testimonial-text">After trying ${productName}, I finally feel like myself again. My confidence is back and my wife has noticed the difference too.</p>
                <div class="testimonial-author">
                  <div class="testimonial-avatar">RJ</div>
                  <div class="testimonial-info">
                    <h4>Robert J.</h4>
                    <p>Age 58, Customer for 1 year</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section id="${ids.container}" class="faq-section">
            <h2 class="section-title">Frequently Asked Questions</h2>
            <div class="faq-item">
              <div class="faq-question">
                <span>How does ${productName} work?</span>
                <span class="toggle">+</span>
              </div>
              <div class="faq-answer">
                <p>${productName} works by increasing blood flow to the penis, helping you achieve and maintain an erection when sexually aroused. The unique formula combines the best aspects of existing ED medications for faster onset and longer duration.</p>
              </div>
            </div>
            <div class="faq-item">
              <div class="faq-question">
                <span>How quickly does it take effect?</span>
                <span class="toggle">+</span>
              </div>
              <div class="faq-answer">
                <p>Most men experience results within 15-30 minutes, significantly faster than traditional ED medications which can take up to an hour.</p>
              </div>
            </div>
            <div class="faq-item">
              <div class="faq-question">
                <span>Are there any side effects?</span>
                <span class="toggle">+</span>
              </div>
              <div class="faq-answer">
                <p>As with any medication, some men may experience mild side effects such as headache, flushing, or indigestion. These typically resolve quickly. Our formula is designed to minimize side effects compared to traditional ED medications.</p>
              </div>
            </div>
            <div class="faq-item">
              <div class="faq-question">
                <span>Is a prescription required?</span>
                <span class="toggle">+</span>
              </div>
              <div class="faq-answer">
                <p>Yes, ${productName} requires a prescription. Our online consultation process makes it easy to connect with a licensed healthcare provider who will determine if ${productName} is right for you.</p>
              </div>
            </div>
            <div class="faq-item">
              <div class="faq-question">
                <span>How is ${productName} shipped?</span>
                <span class="toggle">+</span>
              </div>
              <div class="faq-answer">
                <p>All orders are shipped in discreet, unmarked packaging to protect your privacy. No one will know what's inside.</p>
              </div>
            </div>
          </section>
          
          <section id="${ids.container}" class="trust-badges">
            <div class="trust-badge">
              <img src="https://via.placeholder.com/80x80/FFFFFF/333333?text=FDA" alt="FDA Approved">
              <p>FDA Approved</p>
            </div>
            <div class="trust-badge">
              <img src="https://via.placeholder.com/80x80/FFFFFF/333333?text=Secure" alt="Secure Ordering">
              <p>Secure Ordering</p>
            </div>
            <div class="trust-badge">
              <img src="https://via.placeholder.com/80x80/FFFFFF/333333?text=Discreet" alt="Discreet Packaging">
              <p>Discreet Packaging</p>
            </div>
            <div class="trust-badge">
              <img src="https://via.placeholder.com/80x80/FFFFFF/333333?text=Support" alt="24/7 Support">
              <p>24/7 Support</p>
            </div>
          </section>
          
          <section id="order-now" class="final-cta">
            <div id="${ids.container}">
              <h2>Ready to Experience the Difference?</h2>
              <p>Join thousands of satisfied customers who have rediscovered their confidence with ${productName}.</p>
              <a href="${mergedData.offerUrl || '#'}" class="cta-button">Get Started Now</a>
            </div>
          </section>
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
        
        <script>
          document.addEventListener('DOMContentLoaded', function() {
            // FAQ toggle functionality
            const faqQuestions = document.querySelectorAll('.faq-question');
            faqQuestions.forEach(question => {
              question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const toggle = this.querySelector('.toggle');
                
                if (answer.classList.contains('active')) {
                  answer.classList.remove('active');
                  toggle.textContent = '+';
                } else {
                  answer.classList.add('active');
                  toggle.textContent = '-';
                }
              });
            });
            
            // Track conversion when CTA is clicked
            const ctaButtons = document.querySelectorAll('.cta-button');
            ctaButtons.forEach(button => {
              button.addEventListener('click', function() {
                if (window.gtag) {
                  gtag('event', 'conversion', {
                    'send_to': '${gtagAccount}/${gtagLabel}'
                  });
                }
              });
            });
          });
        </script>
      </body>
      </html>`;
  } catch (error) {
    console.error('Error generating product detail page:', error);
    throw error;
  }
}; 