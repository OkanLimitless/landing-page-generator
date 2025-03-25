import { getRandomStyle } from '../utils/style-variations';
import { contentPresets } from '../utils/content-presets';

export const generateGutterLeadPage = (data) => {
  try {
    // Add generateId function at the top
    const generateId = () => Math.random().toString(36).substr(2, 9);
    
    // Check if preset is provided and merge with data
    const presetData = data.preset ? contentPresets[data.preset] : {};
    const mergedData = { ...presetData, ...data };
    
    // Extract gtag ID and label from the provided gtagId
    const [gtagAccount, gtagLabel] = (mergedData.gtagId || '').split('/');
    
    // Generate postback URL
    const postbackUrl = `https://postback.amjdjuduqj.workers.dev/${mergedData.accountId}/${mergedData.gtagId}`;
    
    const styles = mergedData.styles || getRandomStyle();
    if (!styles) {
      throw new Error('Failed to generate styles');
    }

    const ids = {
      container: `container_${Math.random().toString(36).substr(2, 9)}`,
      content: `content_${Math.random().toString(36).substr(2, 9)}`,
      footer: `footer_${Math.random().toString(36).substr(2, 9)}`,
      form: `form_${Math.random().toString(36).substr(2, 9)}`
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

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${mergedData.title || 'Gutter Protection'}</title>
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
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .logo-container {
            margin: ${styles.spacing.vertical} auto;
            text-align: center;
          }
          .logo {
            max-width: 200px;
            height: auto;
            margin-bottom: 20px;
          }
          .headline {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: clamp(1.8rem, 5vw, 2.5rem);
            margin: ${styles.spacing.vertical} auto;
            line-height: 1.2;
            text-align: center;
            color: #fff;
          }
          .highlight {
            color: ${styles.colors.primary};
            display: block;
            font-size: clamp(2rem, 6vw, 3rem);
            margin: 0.5rem 0;
          }
          .description {
            font-size: clamp(1rem, 3vw, 1.1rem);
            line-height: 1.8;
            margin: ${styles.spacing.vertical} auto;
            max-width: 700px;
            color: #fff;
            padding: 0 ${styles.spacing.horizontal};
            text-align: left;
          }
          .description p { margin-bottom: ${styles.spacing.vertical}; }
          .lead-form-container {
            background: rgba(255, 255, 255, 0.1);
            border-radius: ${styles.borderRadius};
            padding: ${styles.spacing.vertical} ${styles.spacing.horizontal};
            margin: ${styles.spacing.vertical} auto;
            max-width: 600px;
            width: 100%;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          .cta-button {
            display: block;
            ${styles.button(styles.colors)}
            padding: ${styles.spacing.vertical} ${styles.spacing.horizontal};
            font-size: clamp(1.2rem, 4vw, 1.5rem);
            font-weight: ${styles.fonts.weights.heading};
            text-decoration: none;
            border-radius: ${styles.borderRadius};
            margin: ${styles.spacing.vertical} auto;
            text-align: center;
            width: 90%;
            max-width: 500px;
            transition: all 0.3s ease;
            cursor: pointer;
            border: none;
          }
          ${styles.buttonHover ? styles.buttonHover(styles.colors) : ''}
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
          .benefits-list {
            list-style: none;
            margin: ${styles.spacing.vertical} auto;
            max-width: 700px;
            width: 100%;
          }
          .benefits-list li {
            margin-bottom: 15px;
            display: flex;
            align-items: center;
          }
          .benefits-list li:before {
            content: "✓";
            color: ${styles.colors.primary};
            font-weight: bold;
            margin-right: 10px;
            font-size: 1.2rem;
          }
          @media (max-width: 768px) {
            #${ids.container} { width: 95%; padding: 15px; }
            .description { padding: 0 15px; }
            .cta-button { width: 95%; padding: 0.875rem; margin: 1.5rem auto; }
            .lead-form-container { padding: 20px 15px; }
          }
        </style>
      </head>
      <body>
        ${decorativeHTML}
        <main id="${ids.container}">
          ${mergedData.logoUrl ? `
          <div class="logo-container">
            <img src="${mergedData.logoUrl}" alt="Logo" class="logo">
          </div>
          ` : ''}
          <h1 class="headline">
            ${mergedData.title.includes(':') 
              ? `${mergedData.title.split(':')[0]}:
                <span class="highlight">${mergedData.title.split(':')[1] || ''}</span>`
              : mergedData.title
            }
          </h1>
          <div class="description">
            ${mergedData.text.split('\n').map(p => `<p>${p}</p>`).join('')}
          </div>
          <div class="lead-form-container">
            <a href="${mergedData.url}" class="cta-button" id="cta-button">
              ${mergedData.buttonText || 'Find Out What Your Home Qualifies For!'}
            </a>
          </div>
        </main>
        <footer id="${ids.footer}">
          <div class="container">
            <div class="footer-links">
              <a href="privacy.html">Privacy Policy</a>
              <a href="terms.html">Terms of Service</a>
            </div>
            <div class="footer-disclaimer">
              This site is not affiliated with any specific gutter protection brand or company.
              Results may vary.
            </div>
            <div>&copy; ${new Date().getFullYear()} All rights reserved</div>
          </div>
        </footer>
        <script>
          function waitForGtag(callback) {
            if (typeof gtag !== 'undefined') {
              callback();
            } else {
              setTimeout(() => waitForGtag(callback), 100);
            }
          }

          function getUrlParameter(name) {
            name = name.replace(/[\\[]/, '\\\\[').replace(/[\\]]/, '\\\\]');
            var regex = new RegExp('[\\\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\\+/g, ' '));
          }

          function buildTargetUrl() {
            return '${mergedData.url}';
          }

          function gtag_report_conversion(url) {
            const transactionId = Math.random().toString(36).substr(2, 9);
            const conversionValue = Math.floor(Math.random() * (150 - 50 + 1)) + 50;

            console.log('Starting conversion tracking...');
            
            if (typeof gtag !== 'undefined' && '${gtagAccount}' && '${gtagLabel}') {
              console.log('gtag is available, sending conversion...');
              
              gtag('event', 'conversion', {
                'send_to': '${gtagAccount}/${gtagLabel}',
                'value': conversionValue,
                'currency': 'USD',
                'transaction_id': transactionId,
                'event_callback': function() {
                  console.log('Conversion sent successfully!');
                  // Add delay before redirect
                  setTimeout(() => {
                    if (typeof(url) !== 'undefined') {
                      console.log('Redirecting to:', url);
                      window.location = url;
                    }
                  }, 500);
                }
              });
            } else {
              console.log('gtag not available, proceeding with redirect');
              if (typeof(url) !== 'undefined') {
                window.location = url;
              }
            }
            
            return false;
          }

          document.addEventListener('DOMContentLoaded', function() {
            const targetUrl = buildTargetUrl();
            
            // Wait for gtag to be available before setting up click handlers
            waitForGtag(function() {
              console.log('gtag is ready, setting up click handlers');
              
              // Update CTA button
              const ctaButton = document.getElementById('cta-button');
              if (ctaButton) {
                ctaButton.href = targetUrl;
                ctaButton.onclick = function(e) {
                  e.preventDefault();
                  return gtag_report_conversion(targetUrl);
                };
              }
            });
          });
        </script>
      </body>
      </html>`;
  } catch (error) {
    console.error('Error generating gutter lead page:', error);
    throw error;
  }
}; 