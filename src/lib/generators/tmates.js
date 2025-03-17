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
            color: #fff;
            padding: 20px;
          }
          
          .container {
            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 12px;
            padding: 40px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
            max-width: 600px;
            width: 90%;
            border: 1px solid rgba(255, 255, 255, 0.2);
            margin: 0 auto;
          }
          
          .quiz-description {
            color: rgba(255, 255, 255, 0.8);
          }
          
          .option {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .option:hover {
            background: rgba(255, 255, 255, 0.2);
          }
          
          .option.selected {
            background: rgba(255, 255, 255, 0.3);
            border-color: white;
          }
          
          .question {
            color: white;
          }
        `;
        containerClass = 'container';
        break;
      
      case 2:
        // Split layout with image background
        layoutCSS = `
          body {
            background-color: #1a1a2e;
            background-image: linear-gradient(135deg, #1a1a2e, #16213e);
            color: #fff;
            padding: 20px;
          }
          
          .container {
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
            max-width: 700px;
            width: 90%;
            display: flex;
            flex-direction: column;
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 40px;
            margin: 0 auto;
          }
          
          .quiz-description {
            color: rgba(255, 255, 255, 0.8);
          }
          
          .option {
            background: rgba(255, 255, 255, 0.05);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .option:hover {
            background: rgba(255, 255, 255, 0.1);
          }
          
          .option.selected {
            background: rgba(255, 255, 255, 0.15);
            border-color: ${primaryColor};
          }
          
          .question {
            color: white;
          }
        `;
        containerClass = 'container';
        break;
      
      case 3:
        // Minimal clean layout
        layoutCSS = `
          body {
            background-color: #f8f9fa;
            color: #333;
            padding: 20px;
          }
          
          .container {
            background-color: white;
            border: 1px solid #eaeaea;
            border-top: 5px solid ${primaryColor};
            border-radius: 8px;
            padding: 40px;
            max-width: 600px;
            width: 90%;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            margin: 0 auto;
          }
          
          .quiz-description {
            color: #666;
          }
          
          .option {
            background: #f8f9fa;
            color: #333;
            border: 1px solid #eaeaea;
          }
          
          .option:hover {
            background: #f0f0f0;
          }
          
          .option.selected {
            background: #f0f0f0;
            border-color: ${primaryColor};
          }
          
          .question {
            color: #333;
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
        <title>Weight Loss Eligibility Quiz</title>
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
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          
          ${layoutCSS}
          
          .content-container {
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          
          #${ids.container} {
            flex: 1;
          }
          
          .logo-container {
            text-align: center;
            margin-bottom: 20px;
          }
          
          .logo {
            max-width: 150px;
            height: auto;
          }
          
          .brand-name {
            font-size: 28px;
            font-weight: 700;
            color: ${layoutStyle === 2 ? 'white' : primaryColor};
            margin-bottom: 10px;
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
            background: ${layoutStyle === 3 ? `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` : 
                         layoutStyle === 2 ? 'linear-gradient(135deg, #1a1a2e, #16213e)' : 
                         `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`};
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
            background: ${layoutStyle === 3 ? `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` : 
                         layoutStyle === 2 ? 'linear-gradient(135deg, #1a1a2e, #16213e)' : 
                         `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`};
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
            color: ${layoutStyle === 3 ? '#333' : 'white'};
          }
          
          .quiz-description {
            font-size: 1rem;
            margin-bottom: 2rem;
            color: ${layoutStyle === 3 ? '#666' : 'rgba(255,255,255,0.8)'};
          }
          
          .options {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 2rem;
          }
          
          .option {
            padding: 1.2rem;
            background: ${layoutStyle === 3 ? '#f8f9fa' : 
                         layoutStyle === 2 ? 'rgba(255, 255, 255, 0.05)' : 
                         'rgba(255, 255, 255, 0.1)'};
            border: 2px solid ${layoutStyle === 3 ? '#eaeaea' : 
                               layoutStyle === 2 ? 'rgba(255, 255, 255, 0.1)' : 
                               'rgba(255, 255, 255, 0.2)'};
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
            font-size: 1.1rem;
            position: relative;
            overflow: hidden;
            backdrop-filter: ${layoutStyle === 3 ? 'none' : 'blur(5px)'};
            -webkit-backdrop-filter: ${layoutStyle === 3 ? 'none' : 'blur(5px)'};
            text-align: left;
            color: ${layoutStyle === 3 ? '#333' : 'white'};
          }
          .option:hover {
            background: ${layoutStyle === 3 ? '#f0f0f0' : 
                         layoutStyle === 2 ? 'rgba(255, 255, 255, 0.1)' : 
                         'rgba(255, 255, 255, 0.2)'};
            border-color: ${primaryColor};
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }
          .option.selected {
            background: ${layoutStyle === 3 ? '#f0f0f0' : 
                         layoutStyle === 2 ? 'rgba(255, 255, 255, 0.15)' : 
                         'rgba(255, 255, 255, 0.3)'};
            border-color: ${layoutStyle === 3 ? primaryColor : 
                          layoutStyle === 2 ? primaryColor : 
                          'white'};
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
            background-color: ${layoutStyle === 3 ? '#f8f9fa' : 'rgba(255, 255, 255, 0.1)'};
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
            background-color: ${layoutStyle === 3 ? '#f0f0f0' : 'rgba(255, 255, 255, 0.15)'};
          }
          
          .benefit-text {
            font-size: 14px;
            color: ${layoutStyle === 3 ? '#555' : 'rgba(255,255,255,0.9)'};
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
            box-shadow: ${layoutStyle === 3 ? '0 4px 10px rgba(0, 0, 0, 0.1)' : '0 4px 10px rgba(0, 0, 0, 0.2)'};
            position: relative;
            overflow: hidden;
          }
          
          .cta-button:hover {
            background-color: ${secondaryColor};
            transform: translateY(-2px);
            box-shadow: ${layoutStyle === 3 ? '0 6px 15px rgba(0, 0, 0, 0.15)' : '0 6px 15px rgba(0, 0, 0, 0.25)'};
          }
          
          .disclaimer {
            margin-top: 20px;
            color: ${layoutStyle === 3 ? '#999' : 'rgba(255, 255, 255, 0.7)'};
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
            color: ${layoutStyle === 3 ? '#333' : 'white'};
          }
          .results-subheading {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            color: ${layoutStyle === 3 ? '#666' : 'rgba(255,255,255,0.9)'};
          }
          
          /* Product recommendation styles */
          .product-recommendation {
            background: ${layoutStyle === 3 ? 'white' : 'rgba(255, 255, 255, 0.1)'};
            border-radius: 12px;
            padding: 2rem;
            margin-bottom: 2rem;
            backdrop-filter: ${layoutStyle === 3 ? 'none' : 'blur(10px)'};
            -webkit-backdrop-filter: ${layoutStyle === 3 ? 'none' : 'blur(10px)'};
            border: ${layoutStyle === 3 ? '1px solid #eaeaea' : '1px solid rgba(255, 255, 255, 0.2)'};
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }
          
          .product-image {
            margin-bottom: 1.5rem;
          }
          
          .recommended-product-img {
            max-width: 150px;
            height: auto;
          }
          
          .product-name {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: ${layoutStyle === 3 ? '#333' : 'white'};
          }
          
          .product-description {
            font-size: 1rem;
            color: ${layoutStyle === 3 ? '#666' : 'rgba(255,255,255,0.8)'};
            margin-bottom: 1rem;
          }
          
          /* Footer styles */
          #${ids.footer} {
            background-color: #1a1a2e;
            color: white;
            padding: 3rem 0;
            margin-top: 3rem;
            text-align: center;
            width: 100%;
            position: relative;
            z-index: 10;
            box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
            left: 0;
            right: 0;
          }
          
          .footer .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 1.5rem;
          }
          
          .footer-links a {
            color: white;
            text-decoration: none;
            font-size: 1rem;
            transition: color 0.3s ease;
          }
          
          .footer-links a:hover {
            color: ${primaryColor};
          }
          
          .footer p {
            margin-bottom: 0.5rem;
            color: rgba(255, 255, 255, 0.7);
          }
          
          .footer .disclaimer {
            font-size: 0.8rem;
            max-width: 600px;
            margin: 1rem auto 0;
            color: rgba(255, 255, 255, 0.5);
          }
          
          ${animationCSS}
          
          @media (max-width: 768px) {
            #${ids.container} { width: 95%; padding: 15px; }
            .benefit { width: 100%; }
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
            color: ${layoutStyle === 3 ? '#555' : 'rgba(255,255,255,0.9)'};
          }
        </style>
      </head>
      <body>
        <!-- Loading overlay -->
        <div class="loading-overlay" id="loading-overlay">
          <div class="loading-title">Weight Loss Eligibility Quiz</div>
          <div class="loading-subtitle">Preparing your personalized assessment...</div>
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
              <h3 class="brand-name">WeightLoss MD</h3>
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
                  <h2 class="results-heading">Great News! You Qualify for Our Program</h2>
                  <p class="results-subheading">Based on your answers, we've found the perfect weight loss solution for you.</p>
                  
                  <div class="product-recommendation">
                    <div class="product-image">
                      <img src="https://try.tmates.com/assets/img/logo.png" alt="TMates" class="recommended-product-img">
                    </div>
                    <h3 class="product-name">TMates Weight Loss Program</h3>
                    <p class="product-description">Our recommended solution for your specific needs.</p>
                  </div>
                  
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
                  
                  <a href="product-info.html" class="cta-button" id="cta-button">Learn More About TMates</a>
                  
                  <p class="disclaimer">Results may vary. Prescription medication requires online consultation with healthcare providers who will determine if a prescription is appropriate.</p>
                </div>
              </div>
            </form>
          </main>
          
          <footer id="${ids.footer}" class="footer">
            <div class="container">
              <div class="footer-links">
                <a href="privacy.html">Privacy Policy</a>
                <a href="terms.html">Terms of Service</a>
                <a href="#">Contact Us</a>
              </div>
              <p>&copy; ${new Date().getFullYear()} All rights reserved.</p>
              <p class="disclaimer">Results may vary. Prescription medication requires online consultation with healthcare providers who will determine if a prescription is appropriate. This site is not a part of Google, Inc. or Google.com, nor is it sponsored or endorsed by Google.</p>
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
              // Track conversion with gtag if available
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

export const generateProductInfoPage = (data) => {
  try {
    // Check if preset is provided and merge with data
    const presetData = data.preset ? contentPresets[data.preset] : {};
    const mergedData = { ...presetData, ...data };
    
    // Extract gtag ID and label from the provided gtagId
    const [gtagAccount, gtagLabel] = (mergedData.gtagId || '').split('/');
    
    // Generate random colors for styling
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
    
    // Default content if not provided
    const headline = mergedData.headline || 'The easiest weight loss program ever, delivered to your door';
    const subheadline = mergedData.subheadline || 'Join 50,000+ weight loss patients';
    const ctaText = mergedData.ctaText || 'Get Started Now';
    const offerUrl = mergedData.offerUrl || 'https://nmttrack.com/?a=25528&c=403992';
    
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TMates Weight Loss Program</title>
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
            --secondary: ${secondaryColor};
            --text-dark: #1a1a2e;
            --text-light: #4a4a6a;
            --bg-light: #f8f9fa;
            --bg-white: #ffffff;
            --shadow-sm: 0 2px 10px rgba(0,0,0,0.05);
            --shadow-md: 0 5px 20px rgba(0,0,0,0.08);
            --shadow-lg: 0 10px 30px rgba(0,0,0,0.12);
            --radius-sm: 8px;
            --radius-md: 12px;
            --radius-lg: 20px;
            --transition: all 0.3s ease;
          }
          
          * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: var(--text-dark);
            background-color: var(--bg-light);
            overflow-x: hidden;
          }
          
          .header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 5rem 0 6rem;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          
          .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3QgaWQ9InBhdHRlcm4tYmFja2dyb3VuZCIgd2lkdGg9IjQwMCUiIGhlaWdodD0iNDAwJSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSI+PC9yZWN0PjxjaXJjbGUgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiPjwvY2lyY2xlPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSI+PC9yZWN0Pjwvc3ZnPg==');
            opacity: 0.6;
          }
          
          .container {
            max-width: 1140px;
            margin: 0 auto;
            padding: 0 20px;
            position: relative;
            z-index: 1;
          }
          
          .logo-container {
            display: inline-block;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            padding: 15px 25px;
            border-radius: var(--radius-md);
            margin-bottom: 2rem;
            box-shadow: var(--shadow-sm);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .logo {
            max-width: 180px;
            height: auto;
          }
          
          h1 {
            font-size: 3.2rem;
            font-weight: 800;
            margin-bottom: 1.5rem;
            line-height: 1.2;
            letter-spacing: -0.02em;
          }
          
          .subtitle {
            font-size: 1.4rem;
            opacity: 0.9;
            max-width: 700px;
            margin: 0 auto;
            font-weight: 400;
          }
          
          .content {
            padding: 0;
            margin-top: -3rem;
          }
          
          .section {
            margin-bottom: 3rem;
            background: var(--bg-white);
            border-radius: var(--radius-md);
            padding: 3rem;
            box-shadow: var(--shadow-md);
            transition: var(--transition);
          }
          
          .section:hover {
            box-shadow: var(--shadow-lg);
            transform: translateY(-5px);
          }
          
          h2 {
            font-size: 2.2rem;
            margin-bottom: 1.5rem;
            color: var(--primary);
            font-weight: 700;
            position: relative;
            padding-bottom: 0.5rem;
          }
          
          h2::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 60px;
            height: 4px;
            background: var(--primary);
            border-radius: 2px;
          }
          
          p {
            margin-bottom: 1.5rem;
            font-size: 1.1rem;
            color: var(--text-light);
            line-height: 1.7;
          }
          
          .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2.5rem;
          }
          
          .benefit-card {
            background: var(--bg-light);
            border-radius: var(--radius-sm);
            padding: 2rem;
            text-align: center;
            transition: var(--transition);
            border: 1px solid rgba(0,0,0,0.05);
          }
          
          .benefit-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-md);
            border-color: transparent;
          }
          
          .benefit-icon {
            font-size: 3rem;
            margin-bottom: 1.2rem;
            color: var(--primary);
            display: inline-block;
            background: rgba(0,0,0,0.03);
            width: 80px;
            height: 80px;
            line-height: 80px;
            border-radius: 50%;
          }
          
          .benefit-title {
            font-weight: 700;
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: var(--text-dark);
          }
          
          .testimonials {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2.5rem;
          }
          
          .testimonial {
            background: var(--bg-light);
            border-radius: var(--radius-sm);
            padding: 2rem;
            position: relative;
            transition: var(--transition);
            border: 1px solid rgba(0,0,0,0.05);
          }
          
          .testimonial:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-md);
            border-color: transparent;
          }
          
          .testimonial::before {
            content: '"';
            position: absolute;
            top: 10px;
            left: 20px;
            font-size: 5rem;
            color: rgba(0,0,0,0.1);
            font-family: Georgia, serif;
            line-height: 1;
          }
          
          .testimonial-text {
            font-style: italic;
            margin-bottom: 1.5rem;
            position: relative;
            z-index: 1;
            padding-top: 1rem;
          }
          
          .testimonial-author {
            font-weight: 700;
            color: var(--primary);
            display: flex;
            align-items: center;
          }
          
          .testimonial-author::before {
            content: '';
            display: inline-block;
            width: 20px;
            height: 2px;
            background: var(--primary);
            margin-right: 10px;
          }
          
          .cta-section {
            text-align: center;
            padding: 4rem 3rem;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            border-radius: var(--radius-md);
            margin-bottom: 3rem;
            position: relative;
            overflow: hidden;
          }
          
          .cta-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3QgaWQ9InBhdHRlcm4tYmFja2dyb3VuZCIgd2lkdGg9IjQwMCUiIGhlaWdodD0iNDAwJSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSI+PC9yZWN0PjxjaXJjbGUgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiPjwvY2lyY2xlPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSI+PC9yZWN0Pjwvc3ZnPg==');
            opacity: 0.6;
          }
          
          .cta-content {
            position: relative;
            z-index: 1;
          }
          
          .cta-title {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            font-weight: 800;
          }
          
          .cta-subtitle {
            font-size: 1.3rem;
            margin-bottom: 2.5rem;
            opacity: 0.9;
          }
          
          .cta-button {
            display: inline-block;
            background-color: white;
            color: var(--primary);
            font-weight: 700;
            font-size: 1.2rem;
            padding: 18px 50px;
            border-radius: 50px;
            text-decoration: none;
            transition: var(--transition);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
            position: relative;
            overflow: hidden;
            z-index: 1;
          }
          
          .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.2), rgba(255,255,255,0));
            transform: translateX(-100%);
            transition: transform 0.6s ease;
            z-index: -1;
          }
          
          .cta-button:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
          }
          
          .cta-button:hover::before {
            transform: translateX(100%);
          }
          
          .faq-item {
            margin-bottom: 2rem;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            padding-bottom: 2rem;
          }
          
          .faq-item:last-child {
            margin-bottom: 0;
            border-bottom: none;
            padding-bottom: 0;
          }
          
          .faq-question {
            font-weight: 700;
            font-size: 1.2rem;
            margin-bottom: 1rem;
            color: var(--text-dark);
            position: relative;
            padding-left: 2rem;
          }
          
          .faq-question::before {
            content: 'Q';
            position: absolute;
            left: 0;
            top: 0;
            font-weight: 800;
            color: var(--primary);
          }
          
          .faq-answer {
            padding-left: 2rem;
            position: relative;
          }
          
          .faq-answer::before {
            content: 'A';
            position: absolute;
            left: 0;
            top: 0;
            font-weight: 800;
            color: var(--secondary);
          }
          
          .steps-list {
            counter-reset: steps;
            list-style: none;
            padding: 0;
            margin: 2rem 0;
          }
          
          .steps-list li {
            position: relative;
            padding-left: 3rem;
            margin-bottom: 1.5rem;
            counter-increment: steps;
          }
          
          .steps-list li::before {
            content: counter(steps);
            position: absolute;
            left: 0;
            top: 0;
            width: 36px;
            height: 36px;
            background: var(--primary);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
          }
          
          .steps-list li strong {
            display: block;
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            color: var(--text-dark);
          }
          
          .disclaimer {
            margin-top: 20px;
            color: rgba(0,0,0,0.5);
            font-size: 0.8rem;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }
          
          .footer {
            background-color: #1a1a2e;
            color: white;
            padding: 3rem 0;
            margin-top: 3rem;
            text-align: center;
          }
          
          .footer .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .footer-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 1.5rem;
          }
          
          .footer-links a {
            color: white;
            text-decoration: none;
            font-size: 1rem;
            transition: color 0.3s ease;
          }
          
          .footer-links a:hover {
            color: ${primaryColor};
          }
          
          .footer p {
            margin-bottom: 0.5rem;
            color: rgba(255, 255, 255, 0.7);
          }
          
          .footer .disclaimer {
            font-size: 0.8rem;
            max-width: 600px;
            margin: 1rem auto 0;
            color: rgba(255, 255, 255, 0.5);
          }
          
          /* Floating CTA Button */
          .floating-cta {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 99;
            display: none; /* Hidden initially, shown after scroll */
            animation: bounce 1s ease infinite alternate;
          }
          
          .floating-cta-button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            font-weight: 700;
            font-size: 1rem;
            padding: 15px 25px;
            border-radius: 50px;
            text-decoration: none;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            transition: var(--transition);
            border: 2px solid rgba(255, 255, 255, 0.2);
          }
          
          .floating-cta-button:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
          }
          
          .floating-cta-icon {
            margin-right: 8px;
            font-size: 1.2rem;
          }
          
          @keyframes bounce {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(-10px);
            }
          }
          
          @media (max-width: 768px) {
            .benefits-grid, .testimonials {
              grid-template-columns: 1fr;
            }
            
            h1 {
              font-size: 2.5rem;
            }
            
            .cta-title {
              font-size: 2rem;
            }
            
            .section {
              padding: 2rem;
            }
            
            .header {
              padding: 4rem 0 5rem;
            }
          }
        </style>
      </head>
      <body>
        <header class="header">
          <div class="container">
            <div class="logo-container">
              <img src="https://try.tmates.com/assets/img/logo.png" alt="TMates" class="logo">
            </div>
            <h1>TMates Weight Loss Program</h1>
            <p class="subtitle">${headline}</p>
          </div>
        </header>
        
        <div class="content">
          <div class="container">
            <div class="section">
              <h2>About TMates</h2>
              <p>TMates is a revolutionary weight loss program that combines FDA-approved medications with personalized support to help you achieve your weight loss goals.</p>
              <p>Our program is designed to make weight loss simple and effective, with medications that help control hunger and cravings, delivered discreetly to your door.</p>
              
              <div class="benefits-grid">
                <div class="benefit-card">
                  <div class="benefit-icon">💊</div>
                  <div class="benefit-title">FDA-Approved Medication</div>
                  <p>Clinically proven medications that help control hunger and reduce cravings</p>
                </div>
                <div class="benefit-card">
                  <div class="benefit-icon">👨‍⚕️</div>
                  <div class="benefit-title">Medical Supervision</div>
                  <p>Online consultation with licensed doctors who create your personalized plan</p>
                </div>
                <div class="benefit-card">
                  <div class="benefit-icon">📦</div>
                  <div class="benefit-title">Convenient Delivery</div>
                  <p>Discreet delivery right to your door, no pharmacy visits needed</p>
                </div>
                <div class="benefit-card">
                  <div class="benefit-icon">🔄</div>
                  <div class="benefit-title">Flexible Plans</div>
                  <p>Cancel or pause your plan anytime, with no long-term commitments</p>
                </div>
              </div>
            </div>
            
            <div class="section">
              <h2>How It Works</h2>
              <p>Getting started with TMates is simple and straightforward. Our process is designed to be convenient while ensuring you receive the highest quality medical care.</p>
              
              <ol class="steps-list">
                <li>
                  <strong>Complete an online assessment</strong>
                  <p>Answer a few questions about your health history and weight loss goals. This takes just a few minutes and helps our doctors understand your needs.</p>
                </li>
                <li>
                  <strong>Connect with a doctor</strong>
                  <p>A licensed physician will review your information and create a personalized treatment plan tailored to your specific needs and goals.</p>
                </li>
                <li>
                  <strong>Receive your medication</strong>
                  <p>Your prescription is delivered discreetly to your door in unmarked packaging, ensuring your privacy and convenience.</p>
                </li>
                <li>
                  <strong>Start your journey</strong>
                  <p>Follow your personalized plan and watch the pounds melt away. Our team is available to support you throughout your weight loss journey.</p>
                </li>
              </ol>
            </div>
            
            <div class="section">
              <h2>Success Stories</h2>
              <p>Thousands of people have transformed their lives with TMates. Here are just a few of their stories:</p>
              
              <div class="testimonials">
                <div class="testimonial">
                  <p class="testimonial-text">I've tried everything to lose weight, but nothing worked until I found TMates. I've lost 30 pounds in 3 months and feel amazing! The medication helped control my hunger, and the support from the team kept me motivated.</p>
                  <p class="testimonial-author">Sarah T., Lost 30 lbs</p>
                </div>
                <div class="testimonial">
                  <p class="testimonial-text">The convenience of having my medication delivered to my door makes sticking to my weight loss plan so much easier. No more trips to the pharmacy or doctor's office. Highly recommend!</p>
                  <p class="testimonial-author">Michael R., Lost 45 lbs</p>
                </div>
                <div class="testimonial">
                  <p class="testimonial-text">For the first time, I don't feel hungry all the time. TMates has changed my relationship with food and helped me lose weight consistently without the constant struggle. It's been life-changing.</p>
                  <p class="testimonial-author">Jennifer L., Lost 25 lbs</p>
                </div>
              </div>
            </div>
            
            <div class="cta-section">
              <div class="cta-content">
                <h2 class="cta-title">Ready to Start Your Weight Loss Journey?</h2>
                <p class="cta-subtitle">Join over 50,000 satisfied customers who have transformed their lives with TMates</p>
                <a href="${offerUrl}" class="cta-button" id="final-cta">${ctaText}</a>
              </div>
            </div>
            
            <div class="section">
              <h2>Frequently Asked Questions</h2>
              <div class="faq-item">
                <p class="faq-question">What medications does TMates use?</p>
                <p class="faq-answer">TMates uses FDA-approved medications that have been clinically proven to help with weight loss. The specific medication recommended for you will depend on your medical history and weight loss goals. Our doctors will determine the most appropriate medication for your individual needs.</p>
              </div>
              <div class="faq-item">
                <p class="faq-question">Is TMates covered by insurance?</p>
                <p class="faq-answer">TMates works with many insurance providers, but coverage varies. Our team can help you determine if your insurance will cover the cost of your medication. We also offer affordable self-pay options for those without insurance coverage.</p>
              </div>
              <div class="faq-item">
                <p class="faq-question">How quickly will I see results?</p>
                <p class="faq-answer">Many patients start seeing results within the first few weeks. However, individual results may vary based on your starting weight, metabolism, and adherence to the program. Most patients report significant weight loss within the first 1-3 months of treatment.</p>
              </div>
              <div class="faq-item">
                <p class="faq-question">Are there any side effects?</p>
                <p class="faq-answer">As with any medication, there may be side effects. The most common side effects are mild and temporary, such as nausea, constipation, or headache. Your doctor will discuss potential side effects with you during your consultation and monitor your progress to minimize any discomfort.</p>
              </div>
              <div class="faq-item">
                <p class="faq-question">Can I cancel my subscription?</p>
                <p class="faq-answer">Yes, you can cancel or pause your subscription at any time. There are no long-term commitments or cancellation fees. We believe in providing flexibility to our patients and ensuring you have control over your treatment plan.</p>
              </div>
            </div>
          </div>
        </div>
        
        <footer class="footer">
          <div class="container">
            <div class="footer-links">
              <a href="privacy.html">Privacy Policy</a>
              <a href="terms.html">Terms of Service</a>
              <a href="#">Contact Us</a>
            </div>
            <p>&copy; ${new Date().getFullYear()} All rights reserved.</p>
            <p class="disclaimer">Results may vary. Prescription medication requires online consultation with healthcare providers who will determine if a prescription is appropriate. This site is not a part of Google, Inc. or Google.com, nor is it sponsored or endorsed by Google.</p>
          </div>
        </footer>
        
        <!-- Floating CTA Button -->
        <div class="floating-cta" id="floating-cta">
          <a href="${offerUrl}" class="floating-cta-button" id="floating-cta-button">
            <span class="floating-cta-icon">🚀</span> ${ctaText}
          </a>
        </div>
        
        <script>
          document.addEventListener('DOMContentLoaded', function() {
            // Track final conversion when CTA is clicked
            const finalCta = document.getElementById('final-cta');
            finalCta.addEventListener('click', function() {
              if (window.gtag) {
                gtag('event', 'conversion', {
                  'send_to': '${gtagAccount}/${gtagLabel}'
                });
              }
            });
            
            // Floating CTA button functionality
            const floatingCta = document.getElementById('floating-cta');
            const floatingCtaButton = document.getElementById('floating-cta-button');
            
            // Show floating CTA after scrolling down
            window.addEventListener('scroll', function() {
              if (window.scrollY > 600) {
                floatingCta.style.display = 'block';
              } else {
                floatingCta.style.display = 'none';
              }
            });
            
            // Track conversion when floating CTA is clicked
            floatingCtaButton.addEventListener('click', function() {
              if (window.gtag) {
                gtag('event', 'conversion', {
                  'send_to': '${gtagAccount}/${gtagLabel}'
                });
              }
            });
          });
        </script>
      </body>
      </html>`;
  } catch (error) {
    console.error('Error generating product info page:', error);
    throw error;
  }
}; 