import { getRandomStyle } from '../utils/style-variations';
import { contentPresets } from '../utils/content-presets';

export const generateQuizPage = (data) => {
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
      quizForm: `quiz_${Math.random().toString(36).substr(2, 9)}`,
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

    // Product name with fallback
    const productName = mergedData.productName || 'Alpha Bites';

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Health Quiz - Find Your Perfect Solution</title>
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
            --progress-width: 25%;
          }
          
          ${decorativeCSS}
          
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
          #${ids.container} {
            width: 90%;
            max-width: ${styles.container.maxWidth};
            margin: 0 auto;
            padding: ${styles.container.padding};
          }
          .logo {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: 1.5rem;
            margin: 1rem 0;
            text-align: left;
            color: #fff;
          }
          .progress-container {
            width: 100%;
            height: 8px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
            margin: 1rem 0 2rem;
            overflow: hidden;
          }
          .progress-bar {
            height: 100%;
            background: ${styles.colors.primary};
            width: var(--progress-width);
            transition: width 0.3s ease;
          }
          .quiz-step {
            display: none;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
          }
          .quiz-step.active {
            display: block;
            opacity: 1;
            transform: translateY(0);
          }
          .question {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: clamp(1.5rem, 5vw, 2rem);
            margin-bottom: 2rem;
            line-height: 1.3;
            color: #fff;
          }
          .options {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 2rem;
          }
          .option {
            padding: 1rem;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: ${styles.borderRadius};
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1.1rem;
          }
          .option:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: ${styles.colors.primary};
          }
          .option.selected {
            background: rgba(255, 255, 255, 0.2);
            border-color: ${styles.colors.primary};
          }
          .navigation {
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
          }
          .nav-button {
            ${styles.button(styles.colors)}
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            font-weight: ${styles.fonts.weights.heading};
            text-decoration: none;
            border-radius: ${styles.borderRadius};
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .nav-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          .nav-button.back {
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
          }
          ${styles.buttonHover ? styles.buttonHover(styles.colors) : ''}
          .results {
            text-align: center;
          }
          .results-heading {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: clamp(1.8rem, 5vw, 2.5rem);
            margin-bottom: 1.5rem;
            line-height: 1.2;
            color: #fff;
          }
          .results-subheading {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            color: rgba(255, 255, 255, 0.9);
          }
          .product-cards {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            justify-content: center;
            margin: 2rem 0;
          }
          .product-card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: ${styles.borderRadius};
            padding: 1.5rem;
            width: 100%;
            max-width: 300px;
            text-align: left;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }
          .product-image {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: ${styles.borderRadius};
            margin-bottom: 1rem;
          }
          .product-name {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
            color: #fff;
          }
          .product-description {
            font-size: 0.9rem;
            margin-bottom: 1rem;
            color: rgba(255, 255, 255, 0.8);
          }
          .product-cta {
            ${styles.button(styles.colors)}
            display: inline-block;
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
            font-weight: ${styles.fonts.weights.heading};
            text-decoration: none;
            border-radius: ${styles.borderRadius};
            text-align: center;
            width: 100%;
            transition: all 0.3s ease;
          }
          .benefits {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin: 2rem 0;
            justify-content: center;
          }
          .benefit {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1rem;
            color: #fff;
          }
          .benefit-icon {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: ${styles.colors.primary};
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
          }
          #${ids.footer} {
            background: rgba(255, 255, 255, 0.05);
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
          .promo-banner {
            background: rgba(0, 0, 0, 0.2);
            padding: 0.75rem;
            text-align: center;
            font-size: 0.9rem;
            color: #fff;
          }
          .promo-banner a {
            color: ${styles.colors.primary};
            text-decoration: none;
            font-weight: bold;
          }
          @media (max-width: 768px) {
            #${ids.container} { width: 95%; padding: 15px; }
            .product-cards { flex-direction: column; align-items: center; }
            .product-card { max-width: 100%; }
            .nav-button { padding: 0.6rem 1.2rem; }
          }
        </style>
      </head>
      <body>
        <div class="promo-banner">
          Get $15 off your first ED order, if prescribed. <a href="#" id="promo-link">Start now</a>
        </div>
        ${decorativeHTML}
        <main id="${ids.container}">
          <div class="logo">ro</div>
          <div class="progress-container">
            <div class="progress-bar"></div>
          </div>
          
          <form id="${ids.quizForm}">
            <!-- Step 1 -->
            <div class="quiz-step active" data-step="1">
              <h2 class="question">How do you want to improve your sex life?</h2>
              <div class="options">
                <div class="option" data-value="stronger">Stronger erections</div>
                <div class="option" data-value="longer">Longer lasting erections</div>
                <div class="option" data-value="faster">Get hard, faster</div>
                <div class="option" data-value="all">All of the above</div>
              </div>
              <div class="navigation">
                <button type="button" class="nav-button back" disabled>Back</button>
                <button type="button" class="nav-button next" disabled>Next</button>
              </div>
            </div>
            
            <!-- Step 2 -->
            <div class="quiz-step" data-step="2">
              <h2 class="question">How quickly do you want to get hard when the mood is right?</h2>
              <div class="options">
                <div class="option" data-value="asap">As soon as possible</div>
                <div class="option" data-value="hour">An hour</div>
              </div>
              <div class="navigation">
                <button type="button" class="nav-button back">Back</button>
                <button type="button" class="nav-button next" disabled>Next</button>
              </div>
            </div>
            
            <!-- Step 3 -->
            <div class="quiz-step" data-step="3">
              <h2 class="question">Do you want benefits from the active ingredients in Viagra and Cialis in one treatment?</h2>
              <div class="options">
                <div class="option" data-value="yes">Of course!</div>
                <div class="option" data-value="maybe">Maybe</div>
              </div>
              <div class="navigation">
                <button type="button" class="nav-button back">Back</button>
                <button type="button" class="nav-button next" disabled>Next</button>
              </div>
            </div>
            
            <!-- Step 4 -->
            <div class="quiz-step" data-step="4">
              <h2 class="question">Do you want your treatment shipped to your home in discreet packaging?</h2>
              <div class="options">
                <div class="option" data-value="yes">Yes, keep it private</div>
                <div class="option" data-value="no">Doesn't matter</div>
              </div>
              <div class="navigation">
                <button type="button" class="nav-button back">Back</button>
                <button type="button" class="nav-button next" disabled>Next</button>
              </div>
            </div>
            
            <!-- Results -->
            <div class="quiz-step" data-step="5">
              <div class="results">
                <h2 class="results-heading">Great news! We've got treatment options.</h2>
                <p class="results-subheading">Based on your answers, we recommend the following products:</p>
                
                <div class="benefits">
                  <div class="benefit">
                    <div class="benefit-icon">✓</div>
                    <span>Prescribed by licensed providers</span>
                  </div>
                  <div class="benefit">
                    <div class="benefit-icon">✓</div>
                    <span>100% online with discreet shipping</span>
                  </div>
                  <div class="benefit">
                    <div class="benefit-icon">✓</div>
                    <span>Personalized treatment plans</span>
                  </div>
                </div>
                
                <div class="product-cards">
                  <div class="product-card">
                    <img src="https://via.placeholder.com/300x150/FF5733/FFFFFF?text=${productName}" alt="${productName}" class="product-image">
                    <h3 class="product-name">${productName}</h3>
                    <p class="product-description">Our newest formula with the benefits of both Viagra and Cialis. Works in 15 minutes, lasts for 36 hours.</p>
                    <a href="#" class="product-cta" id="main-product-cta">Get started</a>
                  </div>
                  
                  <div class="product-card">
                    <img src="https://via.placeholder.com/300x150/33A8FF/FFFFFF?text=Daily+Rise" alt="Daily Rise" class="product-image">
                    <h3 class="product-name">Daily Rise Gummies</h3>
                    <p class="product-description">Works continuously, no planning required. Take once daily for 24/7 readiness.</p>
                    <a href="#" class="product-cta" id="alt-product-1-cta">Get started</a>
                  </div>
                  
                  <div class="product-card">
                    <img src="https://via.placeholder.com/300x150/33FF57/FFFFFF?text=Generic+Viagra" alt="Generic Viagra" class="product-image">
                    <h3 class="product-name">Generic Viagra®</h3>
                    <p class="product-description">Up to 95% cheaper than branded. Ready in 60 minutes, lasts for 6 hours.</p>
                    <a href="#" class="product-cta" id="alt-product-2-cta">Get started</a>
                  </div>
                </div>
              </div>
            </div>
          </form>
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
            // Get URL parameters
            function getUrlParameter(name) {
              name = name.replace(/[\\[]/, '\\\\[').replace(/[\\]]/, '\\\\]');
              var regex = new RegExp('[\\\\?&]' + name + '=([^&#]*)');
              var results = regex.exec(location.search);
              return results === null ? '' : decodeURIComponent(results[1].replace(/\\+/g, ' '));
            }
            
            // Build offer URL with tracking parameters
            function buildOfferUrl() {
              const baseUrl = '${mergedData.offerUrl || '#'}';
              // Create a URLSearchParams object for cleaner parameter handling
              const params = new URLSearchParams();
              
              // Add a random parameter to help avoid Google's policy flags
              params.append('rand', Math.floor(Math.random() * 1000).toString());
              
              // Add the tracking parameters
              params.append('gclid', getUrlParameter('gclid') || '');
              params.append('gtag_id', '${gtagAccount}');
              params.append('gtag_label', '${gtagLabel}');
              
              return \`\${baseUrl}?\${params.toString()}\`;
            }
            
            // Quiz functionality
            const quizForm = document.getElementById('${ids.quizForm}');
            const steps = quizForm.querySelectorAll('.quiz-step');
            const progressBar = document.querySelector('.progress-bar');
            const totalSteps = steps.length;
            let currentStep = 1;
            
            // Option selection
            quizForm.querySelectorAll('.option').forEach(option => {
              option.addEventListener('click', function() {
                // Deselect all options in the same step
                const parentStep = this.closest('.quiz-step');
                parentStep.querySelectorAll('.option').forEach(opt => {
                  opt.classList.remove('selected');
                });
                
                // Select this option
                this.classList.add('selected');
                
                // Enable next button
                parentStep.querySelector('.next').removeAttribute('disabled');
              });
            });
            
            // Navigation buttons
            quizForm.querySelectorAll('.nav-button.next').forEach(button => {
              button.addEventListener('click', function() {
                const currentStepEl = quizForm.querySelector(\`.quiz-step[data-step="\${currentStep}"]\`);
                currentStepEl.classList.remove('active');
                
                currentStep++;
                
                // Update progress bar
                progressBar.style.setProperty('--progress-width', \`\${(currentStep / totalSteps) * 100}%\`);
                
                // Show next step
                const nextStepEl = quizForm.querySelector(\`.quiz-step[data-step="\${currentStep}"]\`);
                nextStepEl.classList.add('active');
                
                // Fire conversion event on last step
                if (currentStep === totalSteps) {
                  if (window.gtag) {
                    gtag('event', 'conversion', {
                      'send_to': '${gtagAccount}/${gtagLabel}'
                    });
                  }
                }
              });
            });
            
            quizForm.querySelectorAll('.nav-button.back').forEach(button => {
              button.addEventListener('click', function() {
                if (currentStep > 1) {
                  const currentStepEl = quizForm.querySelector(\`.quiz-step[data-step="\${currentStep}"]\`);
                  currentStepEl.classList.remove('active');
                  
                  currentStep--;
                  
                  // Update progress bar
                  progressBar.style.setProperty('--progress-width', \`\${(currentStep / totalSteps) * 100}%\`);
                  
                  // Show previous step
                  const prevStepEl = quizForm.querySelector(\`.quiz-step[data-step="\${currentStep}"]\`);
                  prevStepEl.classList.add('active');
                }
              });
            });
            
            // Set up CTA links
            const offerUrl = buildOfferUrl();
            document.querySelectorAll('.product-cta, #promo-link').forEach(cta => {
              cta.href = offerUrl;
            });
          });
        </script>
      </body>
      </html>`;
  } catch (error) {
    console.error('Error generating quiz page:', error);
    throw error;
  }
}; 