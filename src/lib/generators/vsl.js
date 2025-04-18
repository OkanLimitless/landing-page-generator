import { getRandomStyle } from '../utils/style-variations';
import { contentPresets } from '../utils/content-presets';

export const generateVSLPage = (data) => {
  try {
    // Add generateId function at the top
    const generateId = () => Math.random().toString(36).substr(2, 9);
    
    // Check if preset is provided and merge with data
    const presetData = data.preset ? contentPresets[data.preset] : {};
    
    // Ensure that the user-provided data takes precedence over preset data
    const mergedData = { ...presetData, ...data };
    
    // Ensure URLs have fallbacks if not provided
    if (!mergedData.offerUrl) {
      console.warn('No offer URL provided, using fallback');
      mergedData.offerUrl = '#';
    }
    
    if (!mergedData.thumbnailUrl) {
      console.warn('No thumbnail URL provided, using fallback');
      mergedData.thumbnailUrl = 'https://via.placeholder.com/640x360?text=No+Image+Provided';
    }
    
    // Log data for debugging
    console.log('Generated page with data:', { 
      headline: mergedData.headline,
      offerUrl: mergedData.offerUrl,
      thumbnailUrl: mergedData.thumbnailUrl
    });
    
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
      video: `video_${Math.random().toString(36).substr(2, 9)}`,
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

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${mergedData.headline}</title>
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
          .advertisement-label {
            text-align: center;
            font-size: 0.875rem;
            color: #9CA3AF;
            background: rgba(255, 255, 255, 0.05);
            padding: 0.5rem 1rem;
            border-radius: 4px;
            margin: 1rem auto;
            width: fit-content;
          }
          #${ids.container} {
            width: 90%;
            max-width: ${styles.container.maxWidth};
            margin: 0 auto;
            padding: ${styles.container.padding};
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
          #${ids.video} {
            width: 100%;
            max-width: 700px;
            margin: ${styles.spacing.vertical} auto;
            aspect-ratio: 16/9;
            ${styles.image}
            cursor: pointer;
          }
          #${ids.video}:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
          }
          #${ids.video} img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: inherit;
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
          }
          ${styles.buttonHover ? styles.buttonHover(styles.colors) : ''}
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
          @media (max-width: 768px) {
            #${ids.container} { width: 95%; padding: 15px; }
            .description { padding: 0 15px; }
            #${ids.video} { margin: 1.5rem auto; border-radius: 8px; }
            .cta-button { width: 95%; padding: 0.875rem; margin: 1.5rem auto; }
          }
        </style>
      </head>
      <body>
        ${decorativeHTML}
        <main id="${ids.container}">
          <div class="advertisement-label">Advertisement</div>
          <h1 class="headline">
            ${mergedData.headline.split(':')[0]}:
            <span class="highlight">${mergedData.headline.split(':')[1] || ''}</span>
          </h1>
          <div id="${ids.video}" role="button" tabindex="0">
            <img src="${mergedData.thumbnailUrl}" alt="${mergedData.headline}">
          </div>
          <a href="${mergedData.offerUrl}" class="cta-button">
            ${mergedData.ctaText || 'Watch FREE Video Guide Now'}
          </a>
          <div class="description">
            ${mergedData.description.split('\n').map(p => `<p>${p}</p>`).join('')}
          </div>
          <a href="${mergedData.offerUrl}" class="cta-button">
            ${mergedData.ctaText || 'Watch FREE Video Guide Now'}
          </a>
        </main>
        <footer id="${ids.footer}">
          <div class="container">
            <div class="footer-disclaimer">
              <p>This site is not a part of the Youtube website or Youtube Inc. Additionally, This site is NOT endorsed by Youtube in any way. YOUTUBE is a trademark of YOUTUBE, Inc.</p>
              
              <p>FDA Compliance</p>
              <p>The information on this website has not been evaluated by the Food & Drug Administration or any other medical body. We do not aim to diagnose, treat, cure or prevent any illness or disease. Information is shared for educational purposes only. You should always consult your doctor before acting on any content on this website, especially if you are pregnant, nursing, taking medication or have a medical condition.</p>
              
              <p>Results May Vary: the weight loss results testimonials are in no way a guarantee of results. Individual weight loss results, including amount and time, will vary. Whether genetic or environmental, it should be noted that food intake, rates of metabolism and levels of exercise and physical exertion vary from person to person. This means weight loss results will also vary from person to person.</p>
              
              <p>Some names and personal identifying information on this site have been changed to protect the privacy of individuals.</p>
              
              <p>No individual result should be seen as typical.</p>
              
              <p>Marketing Disclosure: This website is a market place. As such you should know that the owner has a monetary connection to the product and services advertised on the site. The owner receives payment whenever a qualified lead is referred but that is the extent of it.</p>
              
              <p>Advertising Disclosure: This website and the products & services referred to on the site are advertising marketplaces. This website is an advertisement and not a news publication. Any photographs of persons used on this site are models. The owner of this site and of the products and services referred to on this site only provides a service where consumers can obtain and compare.</p>
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

          function buildVideoUrl() {
            // Make sure we have a valid URL from the data
            const url = '${mergedData.offerUrl || ""}';
            console.log('Building video URL:', url);
            return url || '#';
          }

          function gtag_report_conversion(url) {
            var callback = function () {
              console.log('Conversion sent successfully!');
              setTimeout(() => {
                if (typeof(url) !== 'undefined' && url && url !== '#') {
                  console.log('Redirecting to:', url);
                  window.location = url;
                } else {
                  console.warn('No valid URL to redirect to');
                }
              }, 1000); // 1000ms delay to ensure the conversion request completes
            };

            console.log('Starting conversion tracking...');
            if (typeof gtag !== 'undefined' && '${gtagAccount}' && '${gtagLabel}') {
              console.log('gtag is available, sending conversion...');
              console.log('Conversion details:', {
                send_to: '${gtagAccount}/${gtagLabel}',
                value: 1.0,
                currency: 'EUR'
              });

              gtag('event', 'conversion', {
                'send_to': '${gtagAccount}/${gtagLabel}',
                'value': 1.0,
                'currency': 'EUR',
                'event_callback': callback
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
            const videoUrl = buildVideoUrl();
            console.log('Video URL:', videoUrl);
            
            // Wait for gtag to be available before setting up click handlers
            waitForGtag(function() {
              console.log('gtag is ready, setting up click handlers');
              
              // Update video div
              const videoDiv = document.getElementById('${ids.video}');
              if (videoDiv) {
                videoDiv.onclick = function() {
                  if (videoUrl && videoUrl !== '#') {
                    return gtag_report_conversion(videoUrl);
                  } else {
                    console.warn('No valid URL for video click');
                    return false;
                  }
                };
              }
              
              // Update CTA buttons
              document.querySelectorAll('.cta-button').forEach(button => {
                // Make sure the href is set correctly
                if (videoUrl && videoUrl !== '#') {
                  button.href = videoUrl;
                  button.onclick = function(e) {
                    e.preventDefault();
                    return gtag_report_conversion(videoUrl);
                  };
                } else {
                  console.warn('No valid URL for CTA button');
                  button.href = '#';
                  button.onclick = function(e) {
                    e.preventDefault();
                    console.warn('Button clicked but no URL is set');
                    return false;
                  };
                }
              });
            });
          });
        </script>
      </body>
      </html>`;
  } catch (error) {
    console.error('Error generating VSL page:', error);
    throw error;
  }
};