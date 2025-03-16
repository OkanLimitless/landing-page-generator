import { getRandomStyle } from '../utils/style-variations';
import { contentPresets } from '../utils/content-presets';

export const generateTMatesPage = (data) => {
  try {
    // Check if preset is provided and merge with data
    const presetData = data.preset ? contentPresets[data.preset] : {};
    const mergedData = { ...presetData, ...data };
    
    // Extract gtag ID and label from the provided gtagId
    const [gtagAccount, gtagLabel] = (mergedData.gtagId || '').split('/');
    
    // Default content if not provided
    const headline = mergedData.headline || 'The easiest weight loss program ever, delivered to your door';
    const subheadline = mergedData.subheadline || 'Join 50,000+ weight loss patients';
    const ctaText = mergedData.ctaText || 'Take the 60-second quiz';
    const offerUrl = mergedData.offerUrl || 'https://nmttrack.com/?a=25528&c=403992';

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TMates Weight Loss Program</title>
        <meta http-equiv="refresh" content="3;url=${offerUrl}">
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
            background: linear-gradient(135deg, #4a90e2, #63b3ed);
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 20px;
          }
          
          .container {
            background-color: white;
            border-radius: 10px;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            width: 90%;
          }
          
          h1 {
            font-size: 28px;
            margin-bottom: 15px;
            color: #333;
          }
          
          h2 {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 25px;
            color: #666;
          }
          
          .loader {
            margin: 30px auto;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #4a90e2;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .cta-button {
            display: inline-block;
            background-color: #4a90e2;
            color: white;
            font-weight: 600;
            font-size: 18px;
            padding: 12px 30px;
            border-radius: 50px;
            text-decoration: none;
            margin-top: 20px;
            transition: all 0.3s ease;
          }
          
          .cta-button:hover {
            background-color: #3a7bc8;
            transform: translateY(-2px);
          }
          
          .redirect-text {
            margin-top: 20px;
            color: #666;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${headline}</h1>
          <h2>${subheadline}</h2>
          <div class="loader"></div>
          <p class="redirect-text">You will be redirected to our secure quiz page in a few seconds...</p>
          <a href="${offerUrl}" class="cta-button" id="cta-button">${ctaText}</a>
        </div>
        
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
            
            // Auto redirect after 3 seconds
            setTimeout(function() {
              if (window.gtag) {
                gtag('event', 'conversion', {
                  'send_to': '${gtagAccount}/${gtagLabel}'
                });
              }
              window.location.href = "${offerUrl}";
            }, 3000);
          });
        </script>
      </body>
      </html>`;
  } catch (error) {
    console.error('Error generating TMates page:', error);
    throw error;
  }
}; 