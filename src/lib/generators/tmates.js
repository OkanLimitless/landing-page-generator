import { getRandomStyle } from '../utils/style-variations';
import { contentPresets } from '../utils/content-presets';

export const generateTMatesPage = (data) => {
  try {
    // Check if preset is provided and merge with data
    const presetData = data.preset ? contentPresets[data.preset] : {};
    const mergedData = { ...presetData, ...data };
    
    // Extract gtag ID and label from the provided gtagId
    const [gtagAccount, gtagLabel] = (mergedData.gtagId || '').split('/');
    
    // Generate random styles for each generation
    const generateRandomColor = () => {
      const colors = [
        '#4a90e2', '#5c6bc0', '#7e57c2', '#ab47bc', 
        '#ec407a', '#ef5350', '#ff7043', '#ffca28',
        '#26a69a', '#66bb6a', '#9ccc65', '#d4e157'
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };
    
    const primaryColor = generateRandomColor();
    const secondaryColor = generateRandomColor();
    
    // Generate a unique ID for this page
    const pageId = Math.random().toString(36).substring(2, 10);
    
    // Generate unique IDs for elements
    const ids = {
      container: `container_${Math.random().toString(36).substr(2, 9)}`,
      quizForm: `quiz_${Math.random().toString(36).substr(2, 9)}`,
      footer: `footer_${Math.random().toString(36).substr(2, 9)}`
    };
    
    // Default content if not provided
    const headline = mergedData.headline || 'The easiest weight loss program ever, delivered to your door';
    const subheadline = mergedData.subheadline || 'Join 50,000+ weight loss patients';
    const ctaText = mergedData.ctaText || 'Take the 60-second quiz';
    const offerUrl = mergedData.offerUrl || 'https://nmttrack.com/?a=25528&c=403992';
    
    // Choose a random layout style (1-3)
    const layoutStyle = Math.floor(Math.random() * 3) + 1;
    
    // Choose random animation style
    const animationStyle = Math.floor(Math.random() * 3) + 1;
    
    // Generate the appropriate layout based on the random style
    let layoutCSS = '';
    let containerClass = '';
    
    switch(layoutStyle) {
      case 1:
        // Modern card layout with shadow
        layoutCSS = `
          body {
            background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor});
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }
          
          .container {
            background-color: white;
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
            max-width: 600px;
            width: 90%;
          }
        `;
        containerClass = 'container';
        break;
      
      case 2:
        // Split layout with image background
        layoutCSS = `
          body {
            background-color: #f8f9fa;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }
          
          .container {
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            max-width: 700px;
            width: 90%;
            display: flex;
            flex-direction: column;
          }
          
          .header-section {
            background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor});
            padding: 40px;
            color: white;
            position: relative;
          }
          
          .content-section {
            padding: 40px;
          }
          
          @media (max-width: 768px) {
            .container {
              flex-direction: column;
            }
          }
        `;
        containerClass = 'container';
        break;
      
      case 3:
        // Minimal clean layout
        layoutCSS = `
          body {
            background-color: white;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
          }
          
          .container {
            border: 1px solid #eaeaea;
            border-top: 5px solid ${primaryColor};
            border-radius: 8px;
            padding: 40px;
            max-width: 600px;
            width: 90%;
          }
        `;
        containerClass = 'container';
        break;
    }
    
    // Generate animation CSS based on the random style
    let animationCSS = '';
    
    switch(animationStyle) {
      case 1:
        // Fade-in animations
        animationCSS = `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-1 {
            opacity: 0;
            animation: fadeIn 0.6s ease-out forwards;
          }
          
          .animate-2 {
            opacity: 0;
            animation: fadeIn 0.6s ease-out 0.2s forwards;
          }
          
          .animate-3 {
            opacity: 0;
            animation: fadeIn 0.6s ease-out 0.4s forwards;
          }
          
          .animate-4 {
            opacity: 0;
            animation: fadeIn 0.6s ease-out 0.6s forwards;
          }
        `;
        break;
      
      case 2:
        // Slide-in animations
        animationCSS = `
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          
          .animate-1 {
            opacity: 0;
            animation: slideInLeft 0.7s ease-out forwards;
          }
          
          .animate-2 {
            opacity: 0;
            animation: slideInRight 0.7s ease-out 0.2s forwards;
          }
          
          .animate-3 {
            opacity: 0;
            animation: slideInLeft 0.7s ease-out 0.4s forwards;
          }
          
          .animate-4 {
            opacity: 0;
            animation: slideInRight 0.7s ease-out 0.6s forwards;
          }
        `;
        break;
      
      case 3:
        // Scale animations
        animationCSS = `
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          
          .animate-1 {
            opacity: 0;
            animation: scaleIn 0.5s ease-out forwards;
          }
          
          .animate-2 {
            opacity: 0;
            animation: scaleIn 0.5s ease-out 0.15s forwards;
          }
          
          .animate-3 {
            opacity: 0;
            animation: scaleIn 0.5s ease-out 0.3s forwards;
          }
          
          .animate-4 {
            opacity: 0;
            animation: scaleIn 0.5s ease-out 0.45s forwards;
          }
        `;
        break;
    }

    // Generate the HTML based on the layout style
    let pageHTML = '';
    
    if (layoutStyle === 1) {
      pageHTML = `
        <div class="${containerClass}">
          <div class="logo-container animate-1">
            <img src="https://try.tmates.com/assets/img/logo.png" alt="TMates Logo" class="logo">
          </div>
          <h1 class="animate-1">${headline}</h1>
          <h2 class="animate-2">${subheadline}</h2>
          
          <div class="benefits animate-3">
            <div class="benefit">
              <div class="benefit-icon">💊</div>
              <div class="benefit-text">FDA-approved medications that help control hunger</div>
            </div>
            <div class="benefit">
              <div class="benefit-icon">👨‍⚕️</div>
              <div class="benefit-text">Online consultation with licensed doctors</div>
            </div>
            <div class="benefit">
              <div class="benefit-icon">📦</div>
              <div class="benefit-text">Discreet delivery right to your door</div>
            </div>
            <div class="benefit">
              <div class="benefit-icon">🔄</div>
              <div class="benefit-text">Cancel or pause your plan anytime</div>
            </div>
          </div>
          
          <a href="${offerUrl}" class="cta-button animate-4" id="cta-button">${ctaText}</a>
          
          <p class="disclaimer animate-4">Results may vary. Prescription medication requires online consultation with healthcare providers who will determine if a prescription is appropriate.</p>
        </div>
      `;
    } else if (layoutStyle === 2) {
      pageHTML = `
        <div class="${containerClass}">
          <div class="header-section">
            <div class="logo-container animate-1">
              <img src="https://try.tmates.com/assets/img/logo.png" alt="TMates Logo" class="logo">
            </div>
            <h1 class="animate-1">${headline}</h1>
            <h2 class="animate-2">${subheadline}</h2>
          </div>
          
          <div class="content-section">
            <div class="benefits animate-3">
              <div class="benefit">
                <div class="benefit-icon">💊</div>
                <div class="benefit-text">FDA-approved medications that help control hunger</div>
              </div>
              <div class="benefit">
                <div class="benefit-icon">👨‍⚕️</div>
                <div class="benefit-text">Online consultation with licensed doctors</div>
              </div>
              <div class="benefit">
                <div class="benefit-icon">📦</div>
                <div class="benefit-text">Discreet delivery right to your door</div>
              </div>
              <div class="benefit">
                <div class="benefit-icon">🔄</div>
                <div class="benefit-text">Cancel or pause your plan anytime</div>
              </div>
            </div>
            
            <a href="${offerUrl}" class="cta-button animate-4" id="cta-button">${ctaText}</a>
            
            <p class="disclaimer animate-4">Results may vary. Prescription medication requires online consultation with healthcare providers who will determine if a prescription is appropriate.</p>
          </div>
        </div>
      `;
    } else {
      pageHTML = `
        <div class="${containerClass}">
          <div class="logo-container animate-1">
            <img src="https://try.tmates.com/assets/img/logo.png" alt="TMates Logo" class="logo">
          </div>
          <h1 class="animate-1">${headline}</h1>
          <h2 class="animate-2">${subheadline}</h2>
          
          <div class="benefits animate-3">
            <div class="benefit">
              <div class="benefit-icon">💊</div>
              <div class="benefit-text">FDA-approved medications that help control hunger</div>
            </div>
            <div class="benefit">
              <div class="benefit-icon">👨‍⚕️</div>
              <div class="benefit-text">Online consultation with licensed doctors</div>
            </div>
            <div class="benefit">
              <div class="benefit-icon">📦</div>
              <div class="benefit-text">Discreet delivery right to your door</div>
            </div>
            <div class="benefit">
              <div class="benefit-icon">🔄</div>
              <div class="benefit-text">Cancel or pause your plan anytime</div>
            </div>
          </div>
          
          <a href="${offerUrl}" class="cta-button animate-4" id="cta-button">${ctaText}</a>
          
          <p class="disclaimer animate-4">Results may vary. Prescription medication requires online consultation with healthcare providers who will determine if a prescription is appropriate.</p>
        </div>
      `;
    }

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TMates Weight Loss Quiz</title>
        ${mergedData.trackingScript || ''}
        ${gtagAccount ? `
          <script async src="https://www.googletagmanager.com/gtag/js?id=${gtagAccount}"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtagAccount}');
          </script>
        ` : ''}
        <style>
          :root {
            --primary: ${primaryColor};
            --accent: ${secondaryColor};
            --progress-width: 25%;
          }
          
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: #333;
            text-align: center;
          }
          
          ${layoutCSS}
          
          .logo-container {
            text-align: center;
            margin-bottom: 20px;
          }
          
          .logo {
            max-width: 150px;
            height: auto;
          }
          
          h1 {
            font-size: 28px;
            margin-bottom: 15px;
            color: ${layoutStyle === 2 ? 'white' : '#333'};
            font-weight: 700;
          }
          
          h2 {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 25px;
            color: ${layoutStyle === 2 ? 'rgba(255,255,255,0.9)' : '#666'};
          }
          
          /* Loading animation styles */
          .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor});
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
            font-weight: 700;
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
          
          /* Analysis animation styles */
          .analysis-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor});
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
            font-weight: 700;
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
            background: ${primaryColor};
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
          
          /* Quiz styles */
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
            background: ${primaryColor};
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
          
          .question {
            font-weight: 700;
            font-size: clamp(1.5rem, 5vw, 2rem);
            margin-bottom: 2rem;
            line-height: 1.3;
            color: ${layoutStyle === 2 ? 'white' : '#333'};
          }
          
          .quiz-description {
            font-size: 1rem;
            margin-bottom: 2rem;
            color: ${layoutStyle === 2 ? 'rgba(255,255,255,0.8)' : '#666'};
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
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
            font-size: 1.1rem;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            text-align: left;
            color: ${layoutStyle === 2 ? 'white' : '#333'};
          }
          .option:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: ${primaryColor};
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }
          .option:active {
            transform: translateY(0);
          }
          .option.selected {
            background: rgba(255, 255, 255, 0.2);
            border-color: ${primaryColor};
            box-shadow: 0 0 15px rgba(${parseInt(primaryColor.slice(1, 3), 16)}, ${parseInt(primaryColor.slice(3, 5), 16)}, ${parseInt(primaryColor.slice(5, 7), 16)}, 0.3);
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
          
          .benefits {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            margin: 25px 0;
          }
          
          .benefit {
            background-color: ${layoutStyle === 2 ? '#f8f9fa' : '#f8f9fa'};
            border-radius: 8px;
            padding: 15px;
            width: calc(50% - 10px);
            text-align: left;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .benefit:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }
          
          @media (max-width: 500px) {
            .benefit {
              width: 100%;
            }
          }
          
          .benefit-icon {
            font-size: 24px;
            color: ${primaryColor};
          }
          
          .benefit-text {
            font-size: 14px;
            color: #555;
          }
          
          .cta-button {
            display: inline-block;
            background-color: ${primaryColor};
            color: white;
            font-weight: 600;
            font-size: 18px;
            padding: 15px 40px;
            border-radius: 50px;
            text-decoration: none;
            margin-top: 20px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            position: relative;
            overflow: hidden;
          }
          
          .cta-button:hover {
            background-color: ${secondaryColor};
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
          }
          
          .disclaimer {
            margin-top: 20px;
            color: ${layoutStyle === 2 ? '#666' : '#999'};
            font-size: 12px;
            max-width: 450px;
            margin-left: auto;
            margin-right: auto;
          }
          
          /* Results styles */
          .results-heading {
            font-weight: 700;
            font-size: clamp(1.8rem, 5vw, 2.5rem);
            margin-bottom: 1.5rem;
            line-height: 1.2;
            color: ${layoutStyle === 2 ? 'white' : '#333'};
          }
          .results-subheading {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            color: ${layoutStyle === 2 ? 'rgba(255,255,255,0.9)' : '#666'};
          }
          
          /* Footer styles */
          #${ids.footer} {
            background: rgba(255, 255, 255, 0.05);
            padding: 1.5rem 0;
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
          .footer-links a:hover { color: ${primaryColor}; }
          .footer-disclaimer {
            max-width: 600px;
            margin: 1rem auto;
            padding: 0 20px;
            font-size: clamp(0.7rem, 2vw, 0.75rem);
            line-height: 1.5;
            color: rgba(255, 255, 255, 0.5);
          }
          
          ${animationCSS}
          
          @media (max-width: 768px) {
            #${ids.container} { width: 95%; padding: 15px; }
            .benefit { width: 100%; }
          }
        </style>
      </head>
      <body>
        <!-- Loading overlay -->
        <div class="loading-overlay" id="loading-overlay">
          <div class="loading-title">Weight Loss Quiz</div>
          <div class="loading-subtitle">Preparing your personalized quiz...</div>
        </div>
        
        <!-- Main content container -->
        <div class="content-container" id="content-container">
          <div class="back-button" id="back-button">
            <svg viewBox="0 0 24 24">
              <path d="M19 12H5M12 19l-7-7 7-7"></path>
            </svg>
          </div>
          
          <main id="${ids.container}">
            <div class="logo-container">
              <img src="https://try.tmates.com/assets/img/logo.png" alt="TMates Logo" class="logo">
            </div>
            
            <div class="progress-container">
              <div class="progress-bar" id="progress-bar"></div>
            </div>
            
            <form id="${ids.quizForm}" class="quiz-form">
              <!-- Step 1: Age -->
              <div class="quiz-step active" data-step="1">
                <h2 class="question">What is your age?</h2>
                <p class="quiz-description">We'll use this to provide the most relevant weight loss recommendations for you.</p>
                
                <div class="options">
                  <div class="option" data-value="18-29">18-29</div>
                  <div class="option" data-value="30-39">30-39</div>
                  <div class="option" data-value="40-49">40-49</div>
                  <div class="option" data-value="50-59">50-59</div>
                  <div class="option" data-value="60+">60+</div>
                </div>
              </div>
              
              <!-- Step 2: Current Weight -->
              <div class="quiz-step" data-step="2">
                <h2 class="question">What is your current weight?</h2>
                <p class="quiz-description">This helps us understand your starting point.</p>
                
                <div class="options">
                  <div class="option" data-value="under150">Under 150 lbs</div>
                  <div class="option" data-value="150-180">150-180 lbs</div>
                  <div class="option" data-value="180-210">180-210 lbs</div>
                  <div class="option" data-value="210-240">210-240 lbs</div>
                  <div class="option" data-value="over240">Over 240 lbs</div>
                </div>
              </div>
              
              <!-- Step 3: Weight Loss Goal -->
              <div class="quiz-step" data-step="3">
                <h2 class="question">How much weight would you like to lose?</h2>
                <p class="quiz-description">This helps us determine the right approach for you.</p>
                
                <div class="options">
                  <div class="option" data-value="under10">Under 10 lbs</div>
                  <div class="option" data-value="10-20">10-20 lbs</div>
                  <div class="option" data-value="20-40">20-40 lbs</div>
                  <div class="option" data-value="40-60">40-60 lbs</div>
                  <div class="option" data-value="over60">Over 60 lbs</div>
                </div>
              </div>
              
              <!-- Step 4: Previous Attempts -->
              <div class="quiz-step" data-step="4">
                <h2 class="question">Have you tried to lose weight before?</h2>
                <p class="quiz-description">This helps us understand your weight loss journey.</p>
                
                <div class="options">
                  <div class="option" data-value="never">No, this is my first time</div>
                  <div class="option" data-value="diet">Yes, with diet only</div>
                  <div class="option" data-value="exercise">Yes, with exercise only</div>
                  <div class="option" data-value="both">Yes, with both diet and exercise</div>
                  <div class="option" data-value="medication">Yes, with medication</div>
                </div>
              </div>
              
              <!-- Step 5: Challenges -->
              <div class="quiz-step" data-step="5">
                <h2 class="question">What's your biggest weight loss challenge?</h2>
                <p class="quiz-description">This helps us match you with the right solution.</p>
                
                <div class="options">
                  <div class="option" data-value="hunger">Controlling hunger</div>
                  <div class="option" data-value="cravings">Food cravings</div>
                  <div class="option" data-value="motivation">Staying motivated</div>
                  <div class="option" data-value="time">Finding time to exercise</div>
                  <div class="option" data-value="results">Seeing results quickly</div>
                </div>
              </div>
              
              <!-- Results -->
              <div class="quiz-step" data-step="results">
                <div class="results">
                  <h2 class="results-heading">Great News! You Qualify for TMates</h2>
                  <p class="results-subheading">Based on your answers, our FDA-approved weight loss medication could help you reach your goals.</p>
                  
                  <div class="benefits">
                    <div class="benefit">
                      <div class="benefit-icon">💊</div>
                      <div class="benefit-text">FDA-approved medications that help control hunger</div>
                    </div>
                    <div class="benefit">
                      <div class="benefit-icon">👨‍⚕️</div>
                      <div class="benefit-text">Online consultation with licensed doctors</div>
                    </div>
                    <div class="benefit">
                      <div class="benefit-icon">📦</div>
                      <div class="benefit-text">Discreet delivery right to your door</div>
                    </div>
                    <div class="benefit">
                      <div class="benefit-icon">🔄</div>
                      <div class="benefit-text">Cancel or pause your plan anytime</div>
                    </div>
                  </div>
                  
                  <a href="${offerUrl}" class="cta-button" id="cta-button">${ctaText}</a>
                  
                  <p class="disclaimer">Results may vary. Prescription medication requires online consultation with healthcare providers who will determine if a prescription is appropriate.</p>
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
            const steps = document.querySelectorAll('.quiz-step');
            const totalSteps = steps.length - 1; // Exclude results
            let currentStep = 1;
            
            // Update progress bar
            function updateProgress() {
              const progressWidth = ((currentStep - 1) / (totalSteps - 1)) * 100;
              progressBarEl.style.setProperty('--progress-width', progressWidth + '%');
              
              if (currentStep > 1) {
                backButton.classList.add('visible');
              } else {
                backButton.classList.remove('visible');
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
                'Calculating BMI and weight loss potential...',
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
            const ctaButton = document.getElementById('cta-button');
            ctaButton.addEventListener('click', function() {
              if (window.gtag) {
                gtag('event', 'conversion', {
                  'send_to': '${gtagAccount}/${gtagLabel}'
                });
              }
            });
          });
          
          // Add a class to show we've loaded
          document.body.classList.add('loaded');
        </script>
      </body>
      </html>`;
  } catch (error) {
    console.error('Error generating TMates page:', error);
    throw error;
  }
}; 