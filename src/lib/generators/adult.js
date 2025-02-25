import { getPrelanderStyle } from '../utils/style-variations';
import { prelanderTemplates } from '../templates/adult-prelander';
import { generateDoctorDetails } from '../utils/doctor-variations';

export const generateAdultLander = (data) => {
  try {
    if (!data.ctaUrl || !data.template) {  // Add template requirement
      throw new Error('CTA URL and template selection are required');
    }

    const styles = getPrelanderStyle();
    const doctorDetails = generateDoctorDetails();
    
    // Get the selected template
    const template = prelanderTemplates[data.template];
    if (!template) {
      throw new Error('Invalid template selected');
    }

    // Update the tracking script
    const trackingScript = `
      // Initialize stats in localStorage for total counts
      if (!localStorage.getItem('pageStats')) {
        localStorage.setItem('pageStats', JSON.stringify({
          template: '${data.template}',
          totalViews: 0,
          totalClicks: 0
        }));
      }

      // Function to update stats display
      function updateStatsDisplay() {
        const stats = JSON.parse(localStorage.getItem('pageStats'));
        if (document.getElementById('viewCount')) {
          document.getElementById('viewCount').textContent = stats.totalViews;
        }
        if (document.getElementById('clickCount')) {
          document.getElementById('clickCount').textContent = stats.totalClicks;
        }
        if (document.getElementById('ctrValue')) {
          const ctr = stats.totalViews ? ((stats.totalClicks / stats.totalViews) * 100).toFixed(2) : '0.00';
          document.getElementById('ctrValue').textContent = ctr + '%';
        }
      }

      // Track clicks
      function trackClick() {
        const stats = JSON.parse(localStorage.getItem('pageStats'));
        if (!sessionStorage.getItem('pageClicked')) {
          stats.totalClicks++;
          localStorage.setItem('pageStats', JSON.stringify(stats));
          sessionStorage.setItem('pageClicked', 'true');
          updateStatsDisplay();
        }

        // Handle Google Ads conversion if ID exists
        if ('${data.gtagId}') {
          return gtag_report_conversion('${data.ctaUrl}');
        } else {
          window.location.href = '${data.ctaUrl}';
        }
        return false;
      }

      // Track page view when DOM is loaded
      document.addEventListener('DOMContentLoaded', function() {
        if (!sessionStorage.getItem('pageVisited')) {
          const stats = JSON.parse(localStorage.getItem('pageStats'));
          stats.totalViews++;
          localStorage.setItem('pageStats', JSON.stringify(stats));
          sessionStorage.setItem('pageVisited', 'true');
        }
        updateStatsDisplay();
      });

      // Update display periodically
      setInterval(updateStatsDisplay, 5000);
    `;

    // Google Ads conversion setup
    const [gtagAccount] = (data.gtagId || '').split('/');
    const gtagScript = gtagAccount ? `
      function gtag_report_conversion(url) {
        gtag('event', 'conversion', {
          'send_to': '${data.gtagId}',
          'event_callback': function() {
            window.location.href = url;
          }
        });
        return false;
      }
    ` : '';

    // Generate unique IDs for elements
    const ids = {
      container: `container_${Math.random().toString(36).substr(2, 9)}`,
      content: `content_${Math.random().toString(36).substr(2, 9)}`,
      timer: `timer_${Math.random().toString(36).substr(2, 9)}`,
      viewers: `viewers_${Math.random().toString(36).substr(2, 9)}`,
      cta: `cta_${Math.random().toString(36).substr(2, 9)}`,
      proof: `proof_${Math.random().toString(36).substr(2, 9)}`
    };

    // Google Ads base tracking code - only include if ID is provided
    const googleAdsScript = gtagAccount ? `
      <!-- Google Ads Conversion Tracking -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=${gtagAccount}"></script>
      <script>${gtagScript}</script>
    ` : '';

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Breakthrough Discovery</title>
        
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KSK2S26J');</script>
        <!-- End Google Tag Manager -->

        <!-- Add Google Ads conversion tracking if ID exists -->
        ${gtagAccount ? `
          <script async src="https://www.googletagmanager.com/gtag/js?id=${gtagAccount}"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtagAccount}');
            ${gtagScript}
          </script>
        ` : ''}

        ${styles.fonts.urls.map(url => `<link href="${url}" rel="stylesheet">`).join('\n')}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

        <style>
          :root {
            --primary: ${styles.colors.primary};
            --accent: ${styles.colors.accent};
            --accent-dark: ${styles.colors.accent}dd;
          }
          
          * { margin: 0; padding: 0; box-sizing: border-box; }
          
          body {
            font-family: ${styles.fonts.body};
            min-height: 100vh;
            background: ${styles.background.main};
            background-image: ${styles.background.overlay};
            color: var(--primary);
            line-height: 1.6;
          }

          ${styles.decorative?.css || ''}

          .top-bar {
            background: rgba(0, 0, 0, 0.3);
            padding: 10px 0;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            backdrop-filter: blur(10px);
          }

          .top-bar-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .headline {
            text-align: center;
            margin-bottom: 40px;
          }

          h1 {
            font-family: ${styles.fonts.heading};
            font-size: 2.5rem;
            margin-bottom: 1rem;
            line-height: 1.2;
          }

          .subtitle {
            font-size: 1.25rem;
            color: var(--primary);
            opacity: 0.9;
          }

          .doctor-credentials {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 30px;
          }

          .doctor-info {
            display: flex;
            gap: 20px;
            align-items: center;
          }

          .doctor-image {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
          }

          .credentials {
            flex: 1;
          }

          .name {
            font-weight: 600;
            font-size: 1.1rem;
          }

          .title {
            color: var(--primary);
            opacity: 0.8;
            font-size: 0.9rem;
          }

          .stats {
            font-size: 0.8rem;
            color: var(--primary);
            opacity: 0.7;
            margin-top: 5px;
          }

          .lead-text {
            font-size: 1.1rem;
            margin-bottom: 30px;
            font-style: italic;
          }

          .key-points {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 40px;
          }

          .point {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .point i {
            color: var(--accent);
          }

          #${ids.cta} {
            display: block;
            width: 100%;
            max-width: 400px;
            margin: 0 auto 20px;
            ${styles.button}
            cursor: pointer;
            border: none;
            font-size: 1.1rem;
          }

          .guarantee {
            text-align: center;
            color: var(--primary);
            opacity: 0.8;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }

          footer {
            text-align: center;
            padding: 40px 20px;
            color: var(--primary);
            opacity: 0.7;
            font-size: 0.8rem;
          }

          @media (max-width: 768px) {
            h1 { font-size: 2rem; }
            .subtitle { font-size: 1.1rem; }
            .lead-text { font-size: 1rem; }
            #${ids.cta} { padding: 15px 25px; font-size: 1rem; }
          }
        </style>
        <script>${trackingScript}</script>
      </head>
      <body>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KSK2S26J"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->

        <div class="top-bar">
          <div class="top-bar-content">
            <div class="trust-badge">
              <i class="fas fa-shield-check"></i>
              <span>Clinically Verified Results</span>
            </div>
            <div class="stats-display">
              <span>Views: <span id="viewCount">0</span></span>
              <span>•</span>
              <span>Clicks: <span id="clickCount">0</span></span>
              <span>•</span>
              <span>CTR: <span id="ctrValue">0%</span></span>
            </div>
          </div>
        </div>

        <main id="${ids.content}">
          <div class="version-content" style="display: block;">  <!-- Show content by default -->
            <div class="headline">
              <h1>${template.headline}</h1>
              <div class="subtitle">${template.subtitle}</div>
            </div>

            <div class="doctor-credentials">
              <div class="doctor-info">
                <img src="${doctorDetails.imageData}" alt="Medical Expert" class="doctor-image" />
                <div class="credentials">
                  <div class="name">${doctorDetails.name}</div>
                  <div class="title">${doctorDetails.title}</div>
                  <div class="stats">
                    <span class="published">Published: ${doctorDetails.published}</span>
                    <span class="separator">•</span>
                    <span class="views"><i class="fas fa-eye"></i> ${doctorDetails.views} Views</span>
                  </div>
                </div>
              </div>
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

            <button id="${ids.cta}" onclick="return trackClick();">
              ${template.ctaText} →
            </button>

            <div class="guarantee">
              <i class="fas fa-shield-alt"></i>
              ${template.guaranteeText}
            </div>

            <div id="${ids.proof}" style="display: none;"></div>
          </div>
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

        ${googleAdsScript}
      </body>
    </html>`;
  } catch (error) {
    console.error('Error generating Adult Lander:', error);
    throw error;
  }
};

// Generate a simple HTML stats viewer
const generateStatsViewer = () => `
<!DOCTYPE html>
<html>
<head>
    <title>Landing Page Stats</title>
    <style>
        body { font-family: Arial; padding: 20px; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background: #f5f5f5; }
    </style>
</head>
<body>
    <h1>Landing Page Stats</h1>
    <table>
        <tr>
            <th>Metric</th>
            <th>Count</th>
        </tr>
        <tr>
            <td>Views</td>
            <td id="viewCount">0</td>
        </tr>
        <tr>
            <td>Clicks</td>
            <td id="clickCount">0</td>
        </tr>
        <tr>
            <td>CTR</td>
            <td id="ctrValue">0%</td>
        </tr>
    </table>

    <script>
        function updateStatsDisplay() {
            const stats = JSON.parse(localStorage.getItem('pageStats') || '{"views":0,"clicks":0}');
            document.getElementById('viewCount').textContent = stats.views;
            document.getElementById('clickCount').textContent = stats.clicks;
            const ctr = stats.views ? ((stats.clicks / stats.views) * 100).toFixed(2) : '0.00';
            document.getElementById('ctrValue').textContent = ctr + '%';
        }
        updateStatsDisplay();
    </script>
</body>
</html>
`; 