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
          
          .cta-button::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 5px;
            height: 5px;
            background: rgba(255, 255, 255, 0.5);
            opacity: 0;
            border-radius: 100%;
            transform: scale(1, 1) translate(-50%);
            transform-origin: 50% 50%;
          }
          
          .cta-button:hover::after {
            animation: ripple 1s ease-out;
          }
          
          @keyframes ripple {
            0% {
              transform: scale(0, 0);
              opacity: 0.5;
            }
            100% {
              transform: scale(20, 20);
              opacity: 0;
            }
          }
          
          .disclaimer {
            margin-top: 20px;
            color: ${layoutStyle === 2 ? '#666' : '#999'};
            font-size: 12px;
            max-width: 450px;
            margin-left: auto;
            margin-right: auto;
          }
          
          ${animationCSS}
        </style>
      </head>
      <body>
        ${pageHTML}
        
        <script>
          document.addEventListener('DOMContentLoaded', function() {
            // Track conversion when CTA is clicked
            const ctaButton = document.getElementById('cta-button');
            ctaButton.addEventListener('click', function() {
              if (window.gtag) {
                gtag('event', 'conversion', {
                  'send_to': '${gtagAccount}/${gtagLabel}'
                });
              }
            });
            
            // Add hover effect to benefits
            const benefits = document.querySelectorAll('.benefit');
            benefits.forEach(benefit => {
              benefit.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#f0f0f0';
              });
              
              benefit.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '#f8f9fa';
              });
            });
            
            // Add pulse animation to CTA button
            function addPulse() {
              const cta = document.getElementById('cta-button');
              cta.classList.add('pulse');
              
              setTimeout(() => {
                cta.classList.remove('pulse');
              }, 1000);
              
              setTimeout(addPulse, 5000);
            }
            
            // Start the pulse animation after 3 seconds
            setTimeout(addPulse, 3000);
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