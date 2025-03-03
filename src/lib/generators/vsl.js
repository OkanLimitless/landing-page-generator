import { getRandomStyle } from '../utils/style-variations';
import { contentPresets } from '../utils/content-presets';

export const generateVSLPage = (data) => {
  try {
    // Check if preset is provided and merge with data
    const presetData = data.preset ? contentPresets[data.preset] : {};
    const mergedData = { ...presetData, ...data };
    
    const [gtagAccount, gtagLabel] = (mergedData.gtagId || '').split('/');
    const styles = mergedData.styles || getRandomStyle();
    if (!styles) {
      throw new Error('Failed to generate styles');
    }

    const ids = {
      container: `container_${Math.random().toString(36).substr(2, 9)}`,
      video: `video_${Math.random().toString(36).substr(2, 9)}`,
      footer: `footer_${Math.random().toString(36).substr(2, 9)}`
    };

    // Function to get URL parameters
    const getUrlParamsScript = `
      function getUrlParameter(name) {
        name = name.replace(/[\\[]/, '\\\\[').replace(/[\\]]/, '\\\\]');
        var regex = new RegExp('[\\\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\\+/g, ' '));
      }
    `;

    // Construct the offer URL with parameters
    const constructOfferUrl = (baseUrl) => {
      const params = new URLSearchParams({
        gclid: '${getUrlParameter("gclid")}',
        gtag_id: gtagAccount,
        gtag_label: gtagLabel
      });
      return `${baseUrl}?${params.toString()}`;
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
          <h1 class="headline">
            ${mergedData.headline.split(':')[0]}:
            <span class="highlight">${mergedData.headline.split(':')[1] || ''}</span>
          </h1>
          <div id="${ids.video}" onclick="window.location.href='${constructOfferUrl(mergedData.offerUrl)}';" role="button" tabindex="0">
            <img src="${mergedData.thumbnailUrl}" alt="${mergedData.headline}">
          </div>
          <a href="${constructOfferUrl(mergedData.offerUrl)}" class="cta-button">
            ${mergedData.ctaText || 'Watch FREE Video Guide Now'}
          </a>
          <div class="description">
            ${mergedData.description.split('\n').map(p => `<p>${p}</p>`).join('')}
          </div>
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
        <script>${getUrlParamsScript}</script>
      </body>
      </html>`;
  } catch (error) {
    console.error('Error generating VSL page:', error);
    throw error;
  }
};