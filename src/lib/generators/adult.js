import { getPrelanderStyle } from '../utils/style-variations';
import { prelanderTemplates } from '../templates/adult-prelander';

export const generateAdultLander = (data) => {
  try {
    const styles = getPrelanderStyle();
    
    // Generate unique IDs for elements
    const ids = {
      container: `container_${Math.random().toString(36).substr(2, 9)}`,
      content: `content_${Math.random().toString(36).substr(2, 9)}`,
      timer: `timer_${Math.random().toString(36).substr(2, 9)}`,
      viewers: `viewers_${Math.random().toString(36).substr(2, 9)}`,
      cta: `cta_${Math.random().toString(36).substr(2, 9)}`,
      proof: `proof_${Math.random().toString(36).substr(2, 9)}`
    };

    // Version selection and tracking script
    const versionScript = `
      // Select random version on page load
      function selectRandomVersion() {
        const versions = ['version1', 'version2', 'version3'];
        return versions[Math.floor(Math.random() * versions.length)];
      }

      // Show selected version content
      function showVersion(version) {
        document.querySelectorAll('.version-content').forEach(el => el.style.display = 'none');
        document.querySelector(\`#\${version}\`).style.display = 'block';
        
        // Track visit using beacon
        const versionNum = version.replace('version', '');
        navigator.sendBeacon(
          'https://vsl01.vercel.app/api/track', 
          JSON.stringify({
            type: 'adult',
            action: 'visit',
            version: versionNum
          })
        );
      }

      // Track clicks
      function trackClick(version) {
        // Track click using beacon
        const versionNum = version.replace('version', '');
        navigator.sendBeacon(
          'https://vsl01.vercel.app/api/track',
          JSON.stringify({
            type: 'adult',
            action: 'click',
            version: versionNum
          })
        );
        
        setTimeout(() => {
          window.location.href = '${data.ctaUrl}';
        }, 100);
        return false;
      }

      // Initialize on load with fallback
      window.addEventListener('load', function() {
        const selectedVersion = selectRandomVersion();
        showVersion(selectedVersion);
      });
    `;

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Breakthrough Discovery</title>
        ${styles.fonts.urls.map(url => `<link href="${url}" rel="stylesheet">`).join('\n')}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <script>${versionScript}</script>
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

          .top-bar {
            background: ${styles.urgencyElements.timerBackground};
            padding: 12px 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          }

          .top-bar-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
          }

          #${ids.viewers} {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
          }

          #${ids.timer} {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
          }

          #${ids.content} {
            flex: 1;
            max-width: 800px;
            margin: 80px auto 40px;
            padding: 20px;
            background: ${styles.urgencyElements.counterBackground};
            border: 1px solid ${styles.urgencyElements.borderAccent};
            border-radius: ${styles.borderRadius};
          }

          .headline {
            text-align: center;
            margin-bottom: 40px;
          }

          h1 {
            font-family: ${styles.fonts.heading};
            font-size: clamp(24px, 4vw, 36px);
            line-height: 1.3;
            margin-bottom: 20px;
            color: var(--primary);
          }

          .subtitle {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 500;
          }

          .lead-text {
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 30px;
            color: rgba(255, 255, 255, 0.9);
            font-style: italic;
          }

          .key-points {
            margin: 30px 0;
            display: grid;
            gap: 20px;
          }

          .point {
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.9);
          }

          .point i {
            color: var(--primary);
            font-size: 20px;
          }

          #${ids.cta} {
            ${styles.button(styles.colors)}
            width: 100%;
            max-width: 400px;
            margin: 2rem auto;
            padding: 20px 40px;
            font-size: 18px;
            font-weight: 600;
            border-radius: 30px;
            display: block;
            cursor: pointer;
            animation: pulse 2s infinite;
          }

          ${styles.buttonHover ? styles.buttonHover(styles.colors) : ''}

          .guarantee {
            margin-top: 20px;
            color: rgba(255, 255, 255, 0.8);
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }

          #${ids.proof} {
            ${styles.socialProof.animation}
            background: ${styles.socialProof.background};
            border-left: ${styles.socialProof.border};
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
          }

          footer {
            text-align: center;
            padding: 20px;
            background: rgba(0, 0, 0, 0.3);
          }

          footer a {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            margin: 0 10px;
          }

          ${styles.urgencyElements.pulseAnimation}

          @media (max-width: 768px) {
            #${ids.content} {
              padding: 15px;
              margin: 60px auto 20px;
            }

            .top-bar {
              font-size: 12px;
              padding: 8px 0;
            }

            h1 { font-size: 24px; }
            .lead-text { font-size: 16px; }
            .point { font-size: 14px; }
            #${ids.cta} { 
              padding: 15px 30px;
              font-size: 16px;
            }
          }

          .version-content {
            display: none; /* Initially hidden */
          }

          footer .disclaimer {
            color: rgba(255, 255, 255, 0.5);
            font-size: 0.8rem;
            max-width: 600px;
            margin: 1rem auto;
            padding: 0 20px;
            line-height: 1.4;
          }
        </style>
      </head>
      <body>
        <div class="top-bar">
          <div class="top-bar-content">
            <div id="${ids.viewers}">
              <i class="fas fa-users"></i>
              <span class="viewer-count">387</span> people are reading this
            </div>
            <div id="${ids.timer}">
              <i class="fas fa-clock"></i>
              Content available for: <span class="countdown">7:00</span>
            </div>
          </div>
        </div>

        <main id="${ids.content}">
          ${Object.entries(prelanderTemplates).map(([version, template]) => `
            <div id="${version}" class="version-content">
              <div class="headline">
                <h1>${template.headline}</h1>
                <div class="subtitle">${template.subtitle}</div>
              </div>

              <p class="lead-text">${template.leadText}</p>
              
              <div class="key-points">
                ${template.keyPoints.map(point => `
                  <div class="point">
                    <i class="fas fa-check-circle"></i>
                    <span>${point}</span>
                  </div>
                `).join('')}
              </div>

              <button id="${ids.cta}" onclick="trackClick('${version}');">
                ${template.ctaText} →
              </button>

              <div class="guarantee">
                <i class="fas fa-shield-alt"></i>
                ${template.guaranteeText}
              </div>

              <div id="${ids.proof}">
                <div class="proof-content">
                  <strong>Recent Purchase</strong>
                  <p>John D. from California just purchased</p>
                  <small>2 minutes ago</small>
                </div>
              </div>
            </div>
          `).join('')}
        </main>

        <footer>
          <p>Copyright © ${new Date().getFullYear()} All Rights Reserved</p>
          <div class="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
          <div class="disclaimer">
            This site is not a part of Google, Inc. or Google.com, nor is it sponsored or endorsed by Google. 
            Google is a trademark of Google, Inc. All other product names, logos, and brands are property 
            of their respective owners.
          </div>
        </footer>

        <script>
          // Initialize viewer count
          let viewerCount = 387;
          const viewerEl = document.querySelector('.viewer-count');
          
          setInterval(() => {
            const change = Math.floor(Math.random() * 5) - 2;
            viewerCount = Math.max(350, Math.min(450, viewerCount + change));
            viewerEl.textContent = viewerCount;
          }, 5000);

          // Initialize countdown
          let timeLeft = 420; // 7 minutes
          const countdownEl = document.querySelector('.countdown');
          
          setInterval(() => {
            if (timeLeft > 0) {
              timeLeft--;
              const minutes = Math.floor(timeLeft / 60);
              const seconds = timeLeft % 60;
              countdownEl.textContent = \`\${minutes}:\${seconds.toString().padStart(2, '0')}\`;
            }
          }, 1000);
        </script>
      </body>
      </html>`;
  } catch (error) {
    console.error('Error generating Adult Lander:', error);
    throw error;
  }
}; 