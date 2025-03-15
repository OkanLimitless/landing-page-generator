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
          .back-button {
            position: absolute;
            top: 20px;
            left: 20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            opacity: 0;
            pointer-events: none;
          }
          .back-button.visible {
            opacity: 1;
            pointer-events: auto;
          }
          .back-button:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
          }
          .back-button:active {
            transform: translateY(0);
          }
          .back-button svg {
            width: 20px;
            height: 20px;
            fill: none;
            stroke: #fff;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
          .step-counter {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50px;
            padding: 8px 16px;
            font-size: 1rem;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            font-weight: 500;
          }
          .step-counter-progress {
            display: none;
          }
          .step-counter-circle {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.2);
          }
          .step-counter-progress-circle {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid ${styles.colors.primary};
            clip: rect(0px, 36px, 36px, 18px);
            transform: rotate(var(--progress-rotation));
            transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
          }
          .step-counter-progress-circle.right {
            clip: rect(0px, 18px, 36px, 0px);
          }
          .step-counter-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 0.8rem;
            font-weight: bold;
          }
          .progress-container {
            width: 100%;
            height: 8px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
            margin: 1rem 0 2rem;
            overflow: hidden;
            position: relative;
          }
          .progress-bar {
            height: 100%;
            background: ${styles.colors.primary};
            width: var(--progress-width);
            transition: width 0.6s cubic-bezier(0.65, 0, 0.35, 1);
            position: relative;
            overflow: hidden;
          }
          .progress-bar::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.4),
              transparent
            );
            animation: shimmer 2s infinite;
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .quiz-step {
            display: none;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s cubic-bezier(0.65, 0, 0.35, 1), transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
            position: relative;
          }
          .quiz-step.active {
            display: block;
            opacity: 1;
            transform: translateY(0);
            animation: fadeScale 0.5s cubic-bezier(0.65, 0, 0.35, 1);
          }
          @keyframes fadeScale {
            0% {
              opacity: 0;
              transform: translateY(20px) scale(0.98);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .quiz-step.exit {
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity 0.4s cubic-bezier(0.65, 0, 0.35, 1), transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
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
            padding: 1.2rem;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: ${styles.borderRadius};
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
            font-size: 1.1rem;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
          }
          .option:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: ${styles.colors.primary};
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }
          .option:active {
            transform: translateY(0);
          }
          .option.selected {
            background: rgba(255, 255, 255, 0.2);
            border-color: ${styles.colors.primary};
            box-shadow: 0 0 15px rgba(${parseInt(styles.colors.primary.slice(1, 3), 16)}, ${parseInt(styles.colors.primary.slice(3, 5), 16)}, ${parseInt(styles.colors.primary.slice(5, 7), 16)}, 0.3);
          }
          .option::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(120deg, rgba(255,255,255,0.1), rgba(255,255,255,0), rgba(255,255,255,0.1));
            z-index: 1;
            pointer-events: none;
          }
          .option::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 5px;
            height: 5px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 100%;
            transform: scale(0);
            opacity: 0;
            transition: all 0.5s ease;
          }
          .option.ripple::after {
            animation: ripple 0.6s ease-out;
          }
          @keyframes ripple {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 0.8;
            }
            100% {
              transform: translate(-50%, -50%) scale(40);
              opacity: 0;
            }
          }
          .navigation {
            display: none;
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
            animation: fadeIn 0.8s ease-out;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
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
            perspective: 1000px;
          }
          .product-card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: ${styles.borderRadius};
            padding: 1.5rem;
            width: 100%;
            max-width: 300px;
            text-align: left;
            transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1), box-shadow 0.5s cubic-bezier(0.65, 0, 0.35, 1);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            transform: translateZ(0);
            animation: cardEntrance 0.6s cubic-bezier(0.65, 0, 0.35, 1) both;
            animation-delay: calc(var(--card-index) * 0.1s);
          }
          @keyframes cardEntrance {
            from {
              opacity: 0;
              transform: translateY(20px) rotateX(-10deg);
            }
            to {
              opacity: 1;
              transform: translateY(0) rotateX(0);
            }
          }
          .product-card:hover {
            transform: translateY(-5px) translateZ(10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
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
          <div class="back-button">
            <svg viewBox="0 0 24 24">
              <path d="M19 12H5M12 19l-7-7 7-7"></path>
            </svg>
          </div>
          <div class="progress-container">
            <div class="progress-bar"></div>
          </div>
          
          <form id="${ids.quizForm}">
            <!-- Step 1 -->
            <div class="quiz-step active" data-step="1">
              <div class="step-counter">
                1/4
                <div class="step-counter-progress">
                  <div class="step-counter-circle"></div>
                  <div class="step-counter-progress-circle" style="--progress-rotation: 90deg;"></div>
                  <div class="step-counter-progress-circle right" style="--progress-rotation: 0deg;"></div>
                  <div class="step-counter-text">1/4</div>
                </div>
              </div>
              <h2 class="question">How do you want to improve your sex life?</h2>
              <div class="options">
                <div class="option" data-value="stronger">Stronger erections</div>
                <div class="option" data-value="longer">Longer lasting erections</div>
                <div class="option" data-value="faster">Get hard, faster</div>
                <div class="option" data-value="all">All of the above</div>
              </div>
            </div>
            
            <!-- Step 2 -->
            <div class="quiz-step" data-step="2">
              <div class="step-counter">
                2/4
                <div class="step-counter-progress">
                  <div class="step-counter-circle"></div>
                  <div class="step-counter-progress-circle" style="--progress-rotation: 180deg;"></div>
                  <div class="step-counter-progress-circle right" style="--progress-rotation: 0deg;"></div>
                  <div class="step-counter-text">2/4</div>
                </div>
              </div>
              <h2 class="question">How quickly do you want to get hard when the mood is right?</h2>
              <div class="options">
                <div class="option" data-value="asap">As soon as possible</div>
                <div class="option" data-value="hour">An hour</div>
              </div>
            </div>
            
            <!-- Step 3 -->
            <div class="quiz-step" data-step="3">
              <div class="step-counter">
                3/4
                <div class="step-counter-progress">
                  <div class="step-counter-circle"></div>
                  <div class="step-counter-progress-circle" style="--progress-rotation: 270deg;"></div>
                  <div class="step-counter-progress-circle right" style="--progress-rotation: 0deg;"></div>
                  <div class="step-counter-text">3/4</div>
                </div>
              </div>
              <h2 class="question">Do you want benefits from the active ingredients in Viagra and Cialis in one treatment?</h2>
              <div class="options">
                <div class="option" data-value="yes">Of course!</div>
                <div class="option" data-value="maybe">Maybe</div>
              </div>
            </div>
            
            <!-- Step 4 -->
            <div class="quiz-step" data-step="4">
              <div class="step-counter">
                4/4
                <div class="step-counter-progress">
                  <div class="step-counter-circle"></div>
                  <div class="step-counter-progress-circle" style="--progress-rotation: 360deg;"></div>
                  <div class="step-counter-progress-circle right" style="--progress-rotation: 180deg;"></div>
                  <div class="step-counter-text">4/4</div>
                </div>
              </div>
              <h2 class="question">Do you want your treatment shipped to your home in discreet packaging?</h2>
              <div class="options">
                <div class="option" data-value="yes">Yes, keep it private</div>
                <div class="option" data-value="no">Doesn't matter</div>
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
                  <div class="product-card" style="--card-index: 0">
                    <img src="https://via.placeholder.com/300x150/FF5733/FFFFFF?text=${productName}" alt="${productName}" class="product-image">
                    <h3 class="product-name">${productName}</h3>
                    <p class="product-description">Our newest formula with the benefits of both Viagra and Cialis. Works in 15 minutes, lasts for 36 hours.</p>
                    <a href="#" class="product-cta" id="main-product-cta">Get started</a>
                  </div>
                  
                  <div class="product-card" style="--card-index: 1">
                    <img src="https://via.placeholder.com/300x150/33A8FF/FFFFFF?text=Daily+Rise" alt="Daily Rise" class="product-image">
                    <h3 class="product-name">Daily Rise Gummies</h3>
                    <p class="product-description">Works continuously, no planning required. Take once daily for 24/7 readiness.</p>
                    <a href="#" class="product-cta" id="alt-product-1-cta">Get started</a>
                  </div>
                  
                  <div class="product-card" style="--card-index: 2">
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
            const backButton = document.querySelector('.back-button');
            const totalSteps = steps.length - 1; // Exclude results step
            let currentStep = 1;
            let answers = {};
            
            // Initialize progress bar
            progressBar.style.setProperty('--progress-width', '25%');
            
            // Update step counter
            function updateStepCounter(step) {
              const counterText = \`\${step}/\${totalSteps}\`;
              const currentStepEl = quizForm.querySelector(\`.quiz-step[data-step="\${step}"]\`);
              if (currentStepEl) {
                const counterEl = currentStepEl.querySelector('.step-counter');
                if (counterEl) counterEl.textContent = counterText;
              }
            }
            
            // Initialize step counters
            for (let i = 1; i <= totalSteps; i++) {
              updateStepCounter(i);
            }
            
            // Add staggered animation to options
            function animateOptions(stepEl) {
              const options = stepEl.querySelectorAll('.option');
              options.forEach((option, index) => {
                option.style.opacity = '0';
                option.style.transform = 'translateY(10px)';
                setTimeout(() => {
                  option.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                  option.style.opacity = '1';
                  option.style.transform = 'translateY(0)';
                }, 100 + (index * 100));
              });
            }
            
            // Animate product cards in results page
            function animateProductCards() {
              const cards = document.querySelectorAll('.product-card');
              cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px) rotateX(-10deg)';
                setTimeout(() => {
                  card.style.transition = 'opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1), transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)';
                  card.style.opacity = '1';
                  card.style.transform = 'translateY(0) rotateX(0)';
                }, 300 + (index * 150));
              });
            }
            
            // Animate initial options
            animateOptions(steps[0]);
            
            // Back button functionality
            backButton.addEventListener('click', function() {
              if (currentStep > 1) {
                const currentStepEl = quizForm.querySelector(\`.quiz-step[data-step="\${currentStep}"]\`);
                currentStepEl.classList.add('exit');
                
                setTimeout(() => {
                  currentStepEl.classList.remove('active', 'exit');
                  currentStep--;
                  
                  // Update progress bar with animation
                  progressBar.style.setProperty('--progress-width', \`\${(currentStep / totalSteps) * 100}%\`);
                  
                  // Show previous step
                  const prevStepEl = quizForm.querySelector(\`.quiz-step[data-step="\${currentStep}"]\`);
                  prevStepEl.classList.add('active');
                  
                  // Animate options in the previous step
                  animateOptions(prevStepEl);
                  
                  // Update back button visibility
                  if (currentStep === 1) {
                    backButton.classList.remove('visible');
                  } else {
                    backButton.classList.add('visible');
                  }
                }, 400);
              }
            });
            
            // Option selection and auto-proceed
            quizForm.querySelectorAll('.option').forEach(option => {
              option.addEventListener('click', function() {
                // Add ripple effect
                this.classList.add('ripple');
                
                // Store the answer
                const step = this.closest('.quiz-step').getAttribute('data-step');
                const value = this.getAttribute('data-value');
                answers[step] = value;
                
                // Select this option
                this.classList.add('selected');
                
                // Wait for ripple animation
                setTimeout(() => {
                  // Proceed to next step
                  if (currentStep <= totalSteps) {
                    const currentStepEl = quizForm.querySelector(\`.quiz-step[data-step="\${currentStep}"]\`);
                    currentStepEl.classList.add('exit');
                    
                    setTimeout(() => {
                      currentStepEl.classList.remove('active', 'exit');
                      currentStep++;
                      
                      // Update progress bar with animation
                      if (currentStep <= totalSteps) {
                        progressBar.style.setProperty('--progress-width', \`\${(currentStep / totalSteps) * 100}%\`);
                      } else {
                        // Set to 100% when on results page
                        progressBar.style.setProperty('--progress-width', '100%');
                      }
                      
                      // Show next step
                      const nextStepEl = quizForm.querySelector(\`.quiz-step[data-step="\${currentStep}"]\`);
                      nextStepEl.classList.add('active');
                      
                      // Animate options in the new step or product cards in results
                      if (currentStep <= totalSteps) {
                        animateOptions(nextStepEl);
                      } else if (currentStep === totalSteps + 1) {
                        // This is the results page
                        animateProductCards();
                      }
                      
                      // Show back button after first step and hide on results page
                      if (currentStep > 1 && currentStep <= totalSteps) {
                        backButton.classList.add('visible');
                      } else if (currentStep > totalSteps) {
                        backButton.classList.remove('visible');
                      }
                      
                      // Fire conversion event on last step
                      if (currentStep === totalSteps + 1) {
                        if (window.gtag) {
                          gtag('event', 'conversion', {
                            'send_to': '${gtagAccount}/${gtagLabel}'
                          });
                        }
                      }
                    }, 400); // Match the exit animation duration
                  }
                }, 300); // Wait for ripple effect
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