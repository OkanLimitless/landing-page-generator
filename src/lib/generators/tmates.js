import { getRandomStyle } from '../utils/style-variations';
import { contentPresets } from '../utils/content-presets';

export const generateTMatesPage = (data) => {
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

    const ids = {
      container: `container_${Math.random().toString(36).substr(2, 9)}`,
      hero: `hero_${Math.random().toString(36).substr(2, 9)}`,
      benefits: `benefits_${Math.random().toString(36).substr(2, 9)}`,
      testimonials: `testimonials_${Math.random().toString(36).substr(2, 9)}`,
      cta: `cta_${Math.random().toString(36).substr(2, 9)}`,
      footer: `footer_${Math.random().toString(36).substr(2, 9)}`
    };

    const gtagScript = gtagAccount ? `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gtagAccount}');
    ` : '';

    // Add the decorative elements to the HTML
    const decorativeHTML = styles.decorative?.html || '';
    const decorativeCSS = styles.decorative?.css || '';

    // Default content if not provided
    const headline = mergedData.headline || 'The easiest weight loss program ever, delivered to your door';
    const subheadline = mergedData.subheadline || 'Join 50,000+ weight loss patients';
    const description = mergedData.description || 'Unlock the key to lasting weight loss with trusted and proven medications. Our medical team will create a personalized plan just for you.';
    const ctaText = mergedData.ctaText || 'Take the 60-second quiz';
    const offerUrl = mergedData.offerUrl || '#';

    // Testimonials data
    const testimonials = [
      {
        name: 'Sarah M.',
        age: 42,
        weight_loss: '32 lbs',
        image: 'https://i.imgur.com/JFHjdNh.jpg',
        quote: 'I tried everything from keto to intermittent fasting. Nothing worked until I found this program. The medication made all the difference!'
      },
      {
        name: 'Michael T.',
        age: 38,
        weight_loss: '45 lbs',
        image: 'https://i.imgur.com/8Km9tLL.jpg',
        quote: 'For the first time in my life, I don\'t feel hungry all the time. I\'m eating less without even trying. The results speak for themselves.'
      },
      {
        name: 'Jennifer K.',
        age: 45,
        weight_loss: '28 lbs',
        image: 'https://i.imgur.com/6Uiw9JY.jpg',
        quote: 'My doctor recommended this program after my pre-diabetes diagnosis. Not only did I lose weight, but my blood sugar is now normal!'
      }
    ];

    // Benefits data
    const benefits = [
      {
        title: 'Prescription Medication',
        description: 'FDA-approved medications that help control hunger and cravings',
        icon: '💊'
      },
      {
        title: 'Doctor Consultation',
        description: 'Online consultation with licensed healthcare providers',
        icon: '👨‍⚕️'
      },
      {
        title: 'Delivered to Your Door',
        description: 'Discreet packaging shipped directly to your home',
        icon: '📦'
      },
      {
        title: 'Ongoing Support',
        description: '24/7 access to medical team for questions and guidance',
        icon: '🤝'
      }
    ];

    // FAQ data
    const faqs = [
      {
        question: 'What medications are used in this program?',
        answer: 'Our program uses FDA-approved GLP-1 medications that help regulate appetite and blood sugar levels. These include medications similar to Ozempic, Wegovy, and other proven weight loss solutions.'
      },
      {
        question: 'Is this covered by insurance?',
        answer: 'Many insurance plans cover these medications. During your consultation, our healthcare providers will check your coverage and discuss affordable options if your insurance doesn\'t cover the treatment.'
      },
      {
        question: 'How much weight can I expect to lose?',
        answer: 'Results vary, but clinical studies show that patients typically lose 15-20% of their body weight within the first year. Many of our patients report losing 30+ pounds within 6 months.'
      },
      {
        question: 'Are there any side effects?',
        answer: 'Some patients may experience mild nausea, constipation, or diarrhea when starting the medication. These side effects typically subside as your body adjusts to the treatment.'
      },
      {
        question: 'How does the online consultation work?',
        answer: 'You\'ll complete a comprehensive health questionnaire and meet with a licensed healthcare provider via video call. They\'ll review your medical history and determine if our program is right for you.'
      }
    ];

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TMates Weight Loss Program</title>
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
            --text: #333;
            --text-light: #666;
            --background: #f8f9fa;
            --card-bg: #fff;
            --border: #e5e7eb;
          }
          
          ${decorativeCSS}
          
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: ${styles.fonts.body};
            line-height: 1.6;
            color: var(--text);
            background: var(--background);
          }
          
          /* Loading animation */
          .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #4a90e2, #63b3ed);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
          }
          .loading-overlay.slide-up {
            transform: translateY(-100%);
          }
          .loading-title {
            font-size: 36px;
            color: white;
            margin-bottom: 20px;
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.6s forwards 0.2s;
          }
          .loading-text {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 30px;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.6s forwards 0.4s;
          }
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          /* Header */
          header {
            background-color: white;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
            padding: 15px 0;
            position: sticky;
            top: 0;
            z-index: 100;
          }
          .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .logo {
            font-family: ${styles.fonts.heading};
            font-weight: 700;
            font-size: 24px;
            color: var(--primary);
          }
          
          /* Hero Section */
          .hero {
            padding: 80px 0;
            background: linear-gradient(135deg, #4a90e2, #63b3ed);
            color: white;
            text-align: center;
          }
          .hero-content {
            max-width: 800px;
            margin: 0 auto;
          }
          .hero h1 {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: clamp(2rem, 5vw, 3.5rem);
            line-height: 1.2;
            margin-bottom: 20px;
          }
          .hero h2 {
            font-size: clamp(1.2rem, 3vw, 1.8rem);
            font-weight: 500;
            margin-bottom: 30px;
            opacity: 0.9;
          }
          .hero p {
            font-size: clamp(1rem, 2vw, 1.2rem);
            max-width: 600px;
            margin: 0 auto 40px;
            opacity: 0.9;
          }
          
          /* CTA Button */
          .cta-button {
            display: inline-block;
            background-color: white;
            color: var(--primary);
            font-family: ${styles.fonts.heading};
            font-weight: 600;
            font-size: 18px;
            padding: 16px 32px;
            border-radius: 50px;
            text-decoration: none;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
          }
          .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
          }
          
          /* Stats Section */
          .stats {
            padding: 60px 0;
            background-color: white;
          }
          .stats-container {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 30px;
          }
          .stat-item {
            text-align: center;
            flex: 1;
            min-width: 200px;
          }
          .stat-number {
            font-family: ${styles.fonts.heading};
            font-weight: 700;
            font-size: 48px;
            color: var(--primary);
            margin-bottom: 10px;
          }
          .stat-label {
            font-size: 18px;
            color: var(--text-light);
          }
          
          /* Benefits Section */
          .benefits {
            padding: 80px 0;
            background-color: var(--background);
          }
          .section-title {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: 36px;
            text-align: center;
            margin-bottom: 50px;
            color: var(--text);
          }
          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
          }
          .benefit-card {
            background-color: var(--card-bg);
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease;
          }
          .benefit-card:hover {
            transform: translateY(-5px);
          }
          .benefit-icon {
            font-size: 40px;
            margin-bottom: 20px;
          }
          .benefit-title {
            font-family: ${styles.fonts.heading};
            font-weight: 600;
            font-size: 20px;
            margin-bottom: 15px;
            color: var(--text);
          }
          .benefit-description {
            color: var(--text-light);
          }
          
          /* How It Works Section */
          .how-it-works {
            padding: 80px 0;
            background-color: white;
          }
          .steps {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            max-width: 900px;
            margin: 0 auto;
          }
          .step {
            flex: 1;
            min-width: 200px;
            text-align: center;
            padding: 0 20px;
            position: relative;
          }
          .step:not(:last-child)::after {
            content: '';
            position: absolute;
            top: 40px;
            right: 0;
            width: 50%;
            height: 2px;
            background-color: var(--primary);
          }
          .step-number {
            width: 80px;
            height: 80px;
            background-color: var(--primary);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: ${styles.fonts.heading};
            font-weight: 700;
            font-size: 30px;
            margin: 0 auto 20px;
          }
          .step-title {
            font-family: ${styles.fonts.heading};
            font-weight: 600;
            font-size: 20px;
            margin-bottom: 15px;
            color: var(--text);
          }
          .step-description {
            color: var(--text-light);
          }
          
          /* Testimonials Section */
          .testimonials {
            padding: 80px 0;
            background-color: var(--background);
          }
          .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
          }
          .testimonial-card {
            background-color: var(--card-bg);
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          }
          .testimonial-header {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
          }
          .testimonial-image {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 15px;
          }
          .testimonial-info h4 {
            font-family: ${styles.fonts.heading};
            font-weight: 600;
            font-size: 18px;
            margin-bottom: 5px;
            color: var(--text);
          }
          .testimonial-info p {
            color: var(--text-light);
            font-size: 14px;
          }
          .testimonial-quote {
            color: var(--text);
            font-style: italic;
            position: relative;
            padding-left: 20px;
          }
          .testimonial-quote::before {
            content: '"';
            position: absolute;
            left: 0;
            top: 0;
            font-size: 30px;
            color: var(--primary);
            font-family: Georgia, serif;
            line-height: 1;
          }
          
          /* FAQ Section */
          .faq {
            padding: 80px 0;
            background-color: white;
          }
          .faq-container {
            max-width: 800px;
            margin: 0 auto;
          }
          .faq-item {
            border-bottom: 1px solid var(--border);
            margin-bottom: 20px;
          }
          .faq-question {
            font-family: ${styles.fonts.heading};
            font-weight: 600;
            font-size: 20px;
            padding: 20px 40px 20px 0;
            position: relative;
            cursor: pointer;
            color: var(--text);
          }
          .faq-question::after {
            content: '+';
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            font-size: 24px;
            color: var(--primary);
            transition: transform 0.3s ease;
          }
          .faq-question.active::after {
            content: '-';
          }
          .faq-answer {
            padding: 0 0 20px;
            color: var(--text-light);
            display: none;
          }
          .faq-answer.active {
            display: block;
          }
          
          /* Final CTA Section */
          .final-cta {
            padding: 100px 0;
            background: linear-gradient(135deg, #4a90e2, #63b3ed);
            color: white;
            text-align: center;
          }
          .final-cta h2 {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: 36px;
            margin-bottom: 20px;
          }
          .final-cta p {
            font-size: 18px;
            max-width: 600px;
            margin: 0 auto 40px;
            opacity: 0.9;
          }
          
          /* Footer */
          footer {
            background-color: #333;
            color: white;
            padding: 40px 0;
          }
          .footer-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .footer-logo {
            font-family: ${styles.fonts.heading};
            font-weight: 700;
            font-size: 24px;
            color: white;
            margin-bottom: 20px;
          }
          .footer-links {
            display: flex;
            gap: 20px;
          }
          .footer-links a {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            transition: color 0.3s ease;
          }
          .footer-links a:hover {
            color: white;
          }
          .footer-bottom {
            margin-top: 40px;
            text-align: center;
            color: rgba(255, 255, 255, 0.5);
            font-size: 14px;
          }
          
          /* Responsive */
          @media (max-width: 768px) {
            .hero {
              padding: 60px 0;
            }
            .stats-container, .steps {
              flex-direction: column;
              gap: 40px;
            }
            .step:not(:last-child)::after {
              display: none;
            }
            .footer-container {
              flex-direction: column;
              gap: 30px;
            }
          }
        </style>
      </head>
      <body>
        <!-- Loading overlay -->
        <div class="loading-overlay" id="loading-overlay">
          <div class="loading-title">TMates Weight Loss</div>
          <div class="loading-text">Preparing your personalized weight loss solution...</div>
        </div>
        
        <div id="content-container">
          <header>
            <div class="container header-container">
              <div class="logo">TMates</div>
            </div>
          </header>
          
          ${decorativeHTML}
          
          <section class="hero" id="${ids.hero}">
            <div class="container hero-content">
              <h1>${headline}</h1>
              <h2>${subheadline}</h2>
              <p>${description}</p>
              <a href="${offerUrl}" class="cta-button" id="hero-cta">${ctaText}</a>
            </div>
          </section>
          
          <section class="stats">
            <div class="container stats-container">
              <div class="stat-item">
                <div class="stat-number">50,000+</div>
                <div class="stat-label">Patients Helped</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">15-20%</div>
                <div class="stat-label">Average Weight Loss</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">97%</div>
                <div class="stat-label">Patient Satisfaction</div>
              </div>
            </div>
          </section>
          
          <section class="benefits" id="${ids.benefits}">
            <div class="container">
              <h2 class="section-title">Why Choose TMates?</h2>
              <div class="benefits-grid">
                ${benefits.map(benefit => `
                  <div class="benefit-card">
                    <div class="benefit-icon">${benefit.icon}</div>
                    <h3 class="benefit-title">${benefit.title}</h3>
                    <p class="benefit-description">${benefit.description}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </section>
          
          <section class="how-it-works">
            <div class="container">
              <h2 class="section-title">How It Works</h2>
              <div class="steps">
                <div class="step">
                  <div class="step-number">1</div>
                  <h3 class="step-title">Take the Quiz</h3>
                  <p class="step-description">Complete our 60-second quiz to see if you qualify for our program</p>
                </div>
                <div class="step">
                  <div class="step-number">2</div>
                  <h3 class="step-title">Doctor Consultation</h3>
                  <p class="step-description">Meet with a licensed healthcare provider online</p>
                </div>
                <div class="step">
                  <div class="step-number">3</div>
                  <h3 class="step-title">Receive Treatment</h3>
                  <p class="step-description">Get your medication delivered to your door</p>
                </div>
              </div>
            </div>
          </section>
          
          <section class="testimonials" id="${ids.testimonials}">
            <div class="container">
              <h2 class="section-title">Success Stories</h2>
              <div class="testimonials-grid">
                ${testimonials.map(testimonial => `
                  <div class="testimonial-card">
                    <div class="testimonial-header">
                      <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
                      <div class="testimonial-info">
                        <h4>${testimonial.name}, ${testimonial.age}</h4>
                        <p>Lost ${testimonial.weight_loss}</p>
                      </div>
                    </div>
                    <p class="testimonial-quote">${testimonial.quote}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </section>
          
          <section class="faq">
            <div class="container faq-container">
              <h2 class="section-title">Frequently Asked Questions</h2>
              ${faqs.map((faq, index) => `
                <div class="faq-item">
                  <div class="faq-question" data-index="${index}">${faq.question}</div>
                  <div class="faq-answer">${faq.answer}</div>
                </div>
              `).join('')}
            </div>
          </section>
          
          <section class="final-cta" id="${ids.cta}">
            <div class="container">
              <h2>Ready to Start Your Weight Loss Journey?</h2>
              <p>Take our 60-second quiz to see if you qualify for our medically-supervised weight loss program.</p>
              <a href="${offerUrl}" class="cta-button" id="final-cta">${ctaText}</a>
            </div>
          </section>
          
          <footer id="${ids.footer}">
            <div class="container">
              <div class="footer-container">
                <div>
                  <div class="footer-logo">TMates</div>
                  <p>Medically-supervised weight loss, delivered to your door.</p>
                </div>
                <div class="footer-links">
                  <a href="privacy.html">Privacy Policy</a>
                  <a href="terms.html">Terms of Service</a>
                </div>
              </div>
              <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} TMates. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
        
        <script>
          document.addEventListener('DOMContentLoaded', function() {
            // Loading animation
            const loadingOverlay = document.getElementById('loading-overlay');
            
            // Quick reveal animation after a short delay
            setTimeout(() => {
              loadingOverlay.classList.add('slide-up');
            }, 1500);
            
            // FAQ functionality
            const faqQuestions = document.querySelectorAll('.faq-question');
            faqQuestions.forEach(question => {
              question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const isActive = this.classList.contains('active');
                
                // Close all FAQs
                document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
                document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('active'));
                
                // Open this FAQ if it wasn't already open
                if (!isActive) {
                  this.classList.add('active');
                  answer.classList.add('active');
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
    console.error('Error generating TMates page:', error);
    throw error;
  }
}; 