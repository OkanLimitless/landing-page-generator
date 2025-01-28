import { getRandomStyle } from '../utils/style-variations';

export const generateAdultLander = (data) => {
  try {
    const styles = getRandomStyle();
    
    // Generate unique IDs for elements
    const ids = {
      container: `container_${Math.random().toString(36).substr(2, 9)}`,
      content: `content_${Math.random().toString(36).substr(2, 9)}`,
      alert: `alert_${Math.random().toString(36).substr(2, 9)}`,
      cta: `cta_${Math.random().toString(36).substr(2, 9)}`,
      stats: `stats_${Math.random().toString(36).substr(2, 9)}`,
      footer: `footer_${Math.random().toString(36).substr(2, 9)}`
    };

    // Google Ads tracking setup
    const [gtagAccount] = (data.gtagId || '').split('/');
    const gtagScript = gtagAccount ? `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gtagAccount}');
      
      function gtag_report_conversion(url) {
        gtag('event', 'conversion', {
          'send_to': '${data.gtagId}'
        });
        return false;
      }
    ` : '';

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Breakthrough Discovery: Ancient Brazilian Secret Revealed</title>
        ${styles.fonts.urls.map(url => `<link href="${url}" rel="stylesheet">`).join('\n')}
        ${gtagAccount ? `
          <script async src="https://www.googletagmanager.com/gtag/js?id=${gtagAccount}"></script>
          <script>${gtagScript}</script>
        ` : ''}
        <style>
          ${styles.decorative?.css || ''}
          
          :root {
            --primary: ${styles.colors.primary};
            --accent: ${styles.colors.accent};
          }
          
          * { margin: 0; padding: 0; box-sizing: border-box; }
          
          body {
            font-family: ${styles.fonts.body};
            min-height: 100vh;
            background: ${styles.background.main};
            background-image: ${styles.background.overlay};
            color: white;
            display: flex;
            flex-direction: column;
          }

          #${ids.content} {
            flex: 1;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
            position: relative;
            z-index: 1;
          }

          #${ids.alert} {
            background: var(--accent);
            color: white;
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 30px;
            font-weight: 600;
            animation: pulse 2s infinite;
          }

          h1 {
            font-family: ${styles.fonts.heading};
            font-size: clamp(1.8rem, 5vw, 2.2rem);
            line-height: 1.3;
            margin-bottom: 30px;
          }

          .highlight {
            color: var(--accent);
          }

          .discovery-box {
            background: rgba(255, 255, 255, 0.05);
            border: 2px solid var(--accent);
            border-radius: ${styles.borderRadius};
            padding: 25px;
            margin: 30px 0;
            position: relative;
          }

          #${ids.cta} {
            ${styles.button(styles.colors)}
            padding: ${styles.spacing.vertical} ${styles.spacing.horizontal};
            font-size: clamp(1.2rem, 4vw, 1.5rem);
            font-weight: ${styles.fonts.weights.heading};
            width: 100%;
            max-width: 400px;
            margin: 2rem auto;
            cursor: pointer;
            animation: pulse 2s infinite;
          }

          ${styles.buttonHover ? styles.buttonHover(styles.colors) : ''}

          #${ids.stats} {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-top: 30px;
          }

          .stat-item {
            text-align: center;
          }

          .number {
            display: block;
            font-size: clamp(1.5rem, 4vw, 1.8rem);
            font-weight: 700;
            color: var(--primary);
          }

          #${ids.footer} {
            text-align: center;
            padding: 20px;
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.9rem;
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
          }

          @media (max-width: 768px) {
            #${ids.content} { padding: 15px; }
            #${ids.stats} { gap: 20px; }
          }
        </style>
      </head>
      <body>
        ${styles.decorative?.html || ''}
        
        <main id="${ids.content}">
          <div id="${ids.alert}">
            ⚠️ Warning: This page will be removed at midnight tonight
          </div>

          <h1>
            <span class="highlight">EXPOSED:</span> Ancient Brazilian Tribe's Secret Formula Making ED Pills Obsolete
          </h1>

          <div class="discovery-box">
            <div class="badge">LEAKED RESEARCH</div>
            <p>Recent studies show this natural compound is <span class="highlight">312% more effective</span> than traditional solutions</p>
            <div class="arrow-down">↓</div>
          </div>

          <button id="${ids.cta}" onclick="window.location.href='${data.ctaUrl}'; gtag_report_conversion();">
            See The Breakthrough →
          </button>

          <div id="${ids.stats}">
            <div class="stat-item">
              <span class="number">13,847</span>
              <span class="label">Men Already Using This</span>
            </div>
            <div class="stat-item">
              <span class="number">98.7%</span>
              <span class="label">Success Rate</span>
            </div>
          </div>
        </main>

        <footer id="${ids.footer}">
          <p>Copyright © ${new Date().getFullYear()} All Rights Reserved</p>
          <div class="links">
            <a href="/privacy">Privacy</a> | <a href="/terms">Terms</a>
          </div>
        </footer>
      </body>
      </html>`;
  } catch (error) {
    console.error('Error generating Adult Lander:', error);
    throw error;
  }
}; 