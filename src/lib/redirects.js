// Redirect handler for weight loss medication landing pages

// Map of medication names to their target URLs
const medicationRedirects = {
  'mounjaro': 'https://hit.prowellnessroute.com/C5SxvyuMoC',
  'saxenda': 'https://hit.prowellnessroute.com/C5SxvyuMoC',
  'wegovy': 'https://hit.prowellnessroute.com/C5SxvyuMoC',
  'qsymia': 'https://hit.prowellnessroute.com/C5SxvyuMoC',
  'orlistat': 'https://hit.prowellnessroute.com/C5SxvyuMoC',
  'zepbound': 'https://hit.prowellnessroute.com/C5SxvyuMoC',
  'rybelsus': 'https://hit.prowellnessroute.com/C5SxvyuMoC',
  'plenity': 'https://hit.prowellnessroute.com/C5SxvyuMoC',
  'naltrexone-bupropion': 'https://hit.prowellnessroute.com/C5SxvyuMoC',
  'phentermine': 'https://hit.prowellnessroute.com/C5SxvyuMoC',
  'next-step': 'https://hit.prowellnessroute.com/C5SxvyuMoC',
  'take-quiz': 'https://hit.prowellnessroute.com/C5SxvyuMoC'
};

// Default redirect URL if no match is found
const defaultRedirectUrl = 'https://hit.prowellnessroute.com/C5SxvyuMoC';

/**
 * Handles redirects for medication landing pages
 * @param {string} path - The redirect path (e.g., '/redirect/mounjaro')
 * @returns {string} The target URL to redirect to
 */
export function handleRedirect(path) {
  // Extract the medication name from the path
  const match = path.match(/\/redirect\/([^\/]+)/);
  if (!match) return defaultRedirectUrl;

  const key = match[1].toLowerCase();
  return medicationRedirects[key] || defaultRedirectUrl;
}

/**
 * Creates the HTML for the redirect page
 * @param {string} targetUrl - The URL to redirect to
 * @param {string} gtagId - Google Tag ID for conversion tracking
 * @returns {string} HTML content for the redirect page
 */
export function generateRedirectPage(targetUrl, gtagId = '') {
  const [gtagAccount, gtagLabel] = (gtagId || '').split('/');
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redirecting...</title>
  <style>
    .loading-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    .loading-spinner {
      width: 50px;
      height: 50px;
      border: 5px solid #f3f3f3;
      border-top: 5px solid #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    .loading-text {
      margin-top: 20px;
      font-size: 18px;
      color: #333;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
  ${gtagId ? `
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${gtagId}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gtagId}');
  </script>
  ` : ''}
</head>
<body>
  <div class="loading-overlay">
    <div class="text-center">
      <div class="loading-spinner"></div>
      <div class="loading-text">Finding the best match for you...</div>
    </div>
  </div>

  <script>
    // Trigger conversion and redirect
    ${gtagId ? `
    gtag('event', 'conversion', {
      'send_to': '${gtagAccount}/${gtagLabel}',
      'event_callback': function() {
        window.location.href = '${targetUrl}';
      }
    });
    
    // Fallback redirect in case gtag fails
    setTimeout(function() {
      window.location.href = '${targetUrl}';
    }, 2000);
    ` : `
    // Simple redirect if no gtag
    setTimeout(function() {
      window.location.href = '${targetUrl}';
    }, 800);
    `}
  </script>
</body>
</html>`;
} 