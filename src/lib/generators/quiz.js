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

    // Generate product links
    const productLinks = [
      { 
        name: 'AlphaBites', 
        link: 'product-alphabites.html',
        description: 'Our newest formula with the benefits of both Viagra and Cialis. Works in 15 minutes, lasts for 36 hours.'
      },
      { 
        name: 'Brazilian Wood', 
        link: 'product-brazilian-wood.html',
        description: 'Natural herbal formula for sustained performance. Made with premium ingredients from the Amazon rainforest.'
      },
      { 
        name: 'EndoPeak', 
        link: 'product-endopeak.html',
        description: 'Advanced formula designed to maximize blood flow and enhance sensitivity. Clinically tested for optimal results.'
      }
    ];

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
          
          /* Loading animation styles */
          .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${styles.background.main};
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
            transform-origin: top;
          }
          .loading-overlay.reveal {
            transform: scaleY(0);
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
          .loading-subtitle {
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
          .content-container {
            opacity: 1;
          }
          
          /* Analysis animation styles */
          .analysis-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${styles.background.main};
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
          }
          .analysis-overlay.fade-out {
            opacity: 0;
          }
          .analysis-content {
            max-width: 500px;
            width: 90%;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }
          .analysis-title {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: 24px;
            color: white;
            margin-bottom: 1.5rem;
            text-align: center;
          }
          .analysis-steps {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .analysis-step {
            display: flex;
            align-items: center;
            color: rgba(255, 255, 255, 0.7);
            font-size: 16px;
            opacity: 0.5;
            transition: all 0.3s ease;
          }
          .analysis-step.complete {
            opacity: 1;
            color: white;
          }
          .analysis-checkmark {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            height: 24px;
            background: ${styles.colors.primary};
            border-radius: 50%;
            margin-right: 12px;
            color: white;
            font-size: 14px;
            opacity: 0;
            transform: scale(0);
            transition: all 0.3s ease;
          }
          .analysis-step.complete .analysis-checkmark {
            opacity: 1;
            transform: scale(1);
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
          .quiz-results-products {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
          }
          .product-card {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            overflow: hidden;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }
          .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          }
          .product-image {
            width: 100%;
            height: 200px;
            object-fit: contain;
            background: rgba(0, 0, 0, 0.2);
            padding: 1rem;
          }
          .product-content {
            padding: 1.5rem;
          }
          .product-title {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: #fff;
          }
          .product-description {
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 1.5rem;
            font-size: 0.95rem;
          }
          .product-cta {
            ${styles.button(styles.colors)}
            display: inline-block;
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            font-weight: ${styles.fonts.weights.heading};
            text-decoration: none;
            border-radius: ${styles.borderRadius};
            text-align: center;
            transition: all 0.3s ease;
            width: 100%;
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
            .step-counter { display: none; }
          }
        </style>
      </head>
      <body>
        <!-- Loading overlay -->
        <div class="loading-overlay" id="loading-overlay">
          <div class="loading-title">ED Quiz</div>
          <div class="loading-subtitle">Preparing your personalized quiz...</div>
        </div>
        
        <!-- Main content container -->
        <div class="content-container" id="content-container">
          <div class="back-button" id="back-button">
            <svg viewBox="0 0 24 24">
              <path d="M19 12H5M12 19l-7-7 7-7"></path>
            </svg>
          </div>
          
          <div class="step-counter" id="step-counter">
            <div class="step-counter-text">1/5</div>
            <div class="step-counter-progress">
              <div class="step-counter-circle"></div>
              <div class="step-counter-progress-circle right" style="--progress-rotation: 0deg"></div>
              <div class="step-counter-progress-circle" style="--progress-rotation: 0deg"></div>
            </div>
          </div>
          
          ${decorativeHTML}
          
          <main id="${ids.container}">
            <div class="logo">ro</div>
            
            <div class="progress-container">
              <div class="progress-bar" id="progress-bar"></div>
            </div>
            
            <form id="${ids.quizForm}" class="quiz-form">
              <!-- Step 1: Age -->
              <div class="quiz-step active" data-step="1">
                <h2 class="question">What is your age?</h2>
                <p class="quiz-description">We'll use this to provide the most relevant recommendations for you.</p>
                
                <div class="options">
                  <div class="option" data-value="18-29">18-29</div>
                  <div class="option" data-value="30-39">30-39</div>
                  <div class="option" data-value="40-49">40-49</div>
                  <div class="option" data-value="50-59">50-59</div>
                  <div class="option" data-value="60+">60+</div>
                </div>
              </div>
              
              <!-- Step 2: Frequency -->
              <div class="quiz-step" data-step="2">
                <h2 class="question">How often do you experience ED symptoms?</h2>
                <p class="quiz-description">This helps us understand the severity of your symptoms.</p>
                
                <div class="options">
                  <div class="option" data-value="rarely">Rarely</div>
                  <div class="option" data-value="occasionally">Occasionally</div>
                  <div class="option" data-value="frequently">Frequently</div>
                  <div class="option" data-value="always">Almost Always</div>
                </div>
              </div>
              
              <!-- Step 3: Duration -->
              <div class="quiz-step" data-step="3">
                <h2 class="question">How long have you been experiencing ED symptoms?</h2>
                <p class="quiz-description">Duration can help determine the best treatment approach.</p>
                
                <div class="options">
                  <div class="option" data-value="recent">Less than 3 months</div>
                  <div class="option" data-value="moderate">3-12 months</div>
                  <div class="option" data-value="long">1-3 years</div>
                  <div class="option" data-value="chronic">More than 3 years</div>
                </div>
              </div>
              
              <!-- Step 4: Previous Treatments -->
              <div class="quiz-step" data-step="4">
                <h2 class="question">Have you tried ED medications before?</h2>
                <p class="quiz-description">This helps us understand what has or hasn't worked for you.</p>
                
                <div class="options">
                  <div class="option" data-value="none">No, never tried any</div>
                  <div class="option" data-value="otc">Only over-the-counter</div>
                  <div class="option" data-value="prescription">Prescription (Viagra, etc.)</div>
                  <div class="option" data-value="multiple">Multiple types</div>
                </div>
              </div>
              
              <!-- Step 5: Goals -->
              <div class="quiz-step" data-step="5">
                <h2 class="question">What's most important to you in an ED treatment?</h2>
                <p class="quiz-description">This helps us match you with the right solution.</p>
                
                <div class="options">
                  <div class="option" data-value="speed">Fast-acting</div>
                  <div class="option" data-value="duration">Long-lasting</div>
                  <div class="option" data-value="natural">Natural ingredients</div>
                  <div class="option" data-value="price">Affordability</div>
                </div>
              </div>
              
              <!-- Results -->
              <div class="quiz-step quiz-results" data-step="results">
                <div class="results-header">
                  <h2 class="question">Your Personalized ED Solution</h2>
                  <p class="quiz-description">Based on your answers, we've identified the best options for you.</p>
                </div>
                
                <div class="quiz-results-products">
                  ${productLinks.map((product, index) => `
                  <div class="product-card" style="--card-index: ${index}">
                    <img src="${index === 0 ? 'https://i.imgur.com/VTN5W8c.png' : 
                               index === 1 ? 'https://i.imgur.com/g5LZLPR.png' : 
                               'https://i.imgur.com/C6UJxbC.png'}" 
                         alt="${product.name}" class="product-image">
                    <div class="product-content">
                      <h3 class="product-title">${product.name}</h3>
                      <p class="product-description">${product.description}</p>
                      <a href="${product.link}" class="product-cta" id="product-${index}-cta">Learn More</a>
                    </div>
                  </div>
                  `).join('')}
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
        </div>
        
        <script>
          document.addEventListener('DOMContentLoaded', function() {
            // Initial reveal animation
            const loadingOverlay = document.getElementById('loading-overlay');
            const contentContainer = document.getElementById('content-container');
            
            // Quick reveal animation after a short delay
            setTimeout(() => {
              loadingOverlay.classList.add('reveal');
            }, 1500);
            
            // Quiz functionality
            const quizForm = document.getElementById('${ids.quizForm}');
            const progressBarEl = document.getElementById('progress-bar');
            const backButton = document.getElementById('back-button');
            const stepCounter = document.getElementById('step-counter');
            const steps = document.querySelectorAll('.quiz-step');
            const totalSteps = steps.length - 1; // Exclude results
            let currentStep = 1;
            
            // Update progress bar and step counter
            function updateProgress() {
              const progressWidth = ((currentStep - 1) / (totalSteps - 1)) * 100;
              progressBarEl.style.setProperty('--progress-width', progressWidth + '%');
              
              if (currentStep > 1) {
                backButton.classList.add('visible');
              } else {
                backButton.classList.remove('visible');
              }
              
              if (currentStep <= totalSteps) {
                stepCounter.querySelector('.step-counter-text').textContent = currentStep + '/' + totalSteps;
              }
            }
            
            // Go to next step
            function goToNextStep() {
              if (currentStep <= totalSteps) {
                document.querySelector(\`.quiz-step[data-step="\${currentStep}"]\`).classList.remove('active');
                currentStep++;
                
                if (currentStep <= totalSteps) {
                  document.querySelector(\`.quiz-step[data-step="\${currentStep}"]\`).classList.add('active');
                  updateProgress();
                } else {
                  // Show analysis animation before showing results
                  showAnalysisAnimation();
                }
              }
            }
            
            // Show analysis animation
            function showAnalysisAnimation() {
              // Create analysis overlay
              const analysisOverlay = document.createElement('div');
              analysisOverlay.className = 'analysis-overlay';
              
              const analysisContent = document.createElement('div');
              analysisContent.className = 'analysis-content';
              
              const analysisTitle = document.createElement('div');
              analysisTitle.className = 'analysis-title';
              analysisTitle.textContent = 'Analyzing Your Responses';
              
              const analysisSteps = document.createElement('div');
              analysisSteps.className = 'analysis-steps';
              
              const steps = [
                'Processing your answers...',
                'Identifying optimal treatment options...',
                'Matching with clinical data...',
                'Finalizing personalized recommendations...'
              ];
              
              steps.forEach(step => {
                const stepEl = document.createElement('div');
                stepEl.className = 'analysis-step';
                stepEl.innerHTML = \`<span class="analysis-checkmark">✓</span> \${step}\`;
                analysisSteps.appendChild(stepEl);
              });
              
              analysisContent.appendChild(analysisTitle);
              analysisContent.appendChild(analysisSteps);
              analysisOverlay.appendChild(analysisContent);
              document.body.appendChild(analysisOverlay);
              
              // Animate each step
              const stepEls = analysisOverlay.querySelectorAll('.analysis-step');
              stepEls.forEach((step, index) => {
                setTimeout(() => {
                  step.classList.add('complete');
                }, 600 * index + 400);
              });
              
              // After all steps complete, show results
              setTimeout(() => {
                analysisOverlay.classList.add('fade-out');
                
                setTimeout(() => {
                  analysisOverlay.remove();
                  
                  // Show results
                  document.querySelector('.quiz-step[data-step="results"]').classList.add('active');
                  backButton.classList.remove('visible');
                  stepCounter.style.display = 'none';
                  progressBarEl.style.setProperty('--progress-width', '100%');
                }, 500);
              }, 3000);
            }
            
            // Go to previous step
            function goToPrevStep() {
              if (currentStep > 1) {
                document.querySelector(\`.quiz-step[data-step="\${currentStep}"]\`).classList.remove('active');
                currentStep--;
                document.querySelector(\`.quiz-step[data-step="\${currentStep}"]\`).classList.add('active');
                updateProgress();
              }
            }
            
            // Handle option selection
            document.querySelectorAll('.option').forEach(option => {
              option.addEventListener('click', function() {
                const currentStepEl = document.querySelector(\`.quiz-step[data-step="\${currentStep}"]\`);
                const options = currentStepEl.querySelectorAll('.option');
                
                // Add ripple effect
                this.classList.add('ripple');
                
                options.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                
                // Go to next step after a short delay
                setTimeout(goToNextStep, 300);
              });
            });
            
            // Handle back button click
            backButton.addEventListener('click', goToPrevStep);
            
            // Track conversion when CTA is clicked
            const ctaButtons = document.querySelectorAll('.product-cta');
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
    console.error('Error generating quiz page:', error);
    throw error;
  }
}; 