import { getRandomStyle } from '../utils/style-variations';
import { contentPresets } from '../utils/content-presets';

// Layout variations for the landing page
const landingLayouts = [
  {
    name: 'medical',
    template: (data, styles, ids) => `
      <div class="hero-section">
        <div class="hero-content">
          <h1 class="headline">
            Breakthrough ED Treatment:<br>
            <span class="highlight">Faster & More Effective Than Traditional Solutions</span>
          </h1>
          <div class="video-container" id="${ids.video}">
            <img src="${data.thumbnailUrl}" alt="ED Treatment Video" class="video-thumbnail">
            <div class="play-button">▶</div>
          </div>
          <div class="trust-badges">
            <div class="badge">
              <span class="icon">🏆</span>
              <span class="text">FDA Registered</span>
            </div>
            <div class="badge">
              <span class="icon">⚕️</span>
              <span class="text">Doctor Approved</span>
            </div>
            <div class="badge">
              <span class="icon">🔒</span>
              <span class="text">Privacy Protected</span>
            </div>
          </div>
        </div>
      </div>
      <div class="benefits-section">
        <h2>Why Men Choose Our Solution</h2>
        <div class="benefits-grid">
          <div class="benefit-card">
            <div class="benefit-icon">⚡</div>
            <h3>Fast Acting</h3>
            <p>Works in as little as 15 minutes</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">⏰</div>
            <h3>Long Lasting</h3>
            <p>Effects for up to 36 hours</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">💊</div>
            <h3>More Powerful</h3>
            <p>Stronger than traditional options</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">💰</div>
            <h3>Affordable</h3>
            <p>Save up to 80% compared to brand names</p>
          </div>
        </div>
        <a href="quiz.html" class="cta-button">Take the 60-Second Quiz to See If You Qualify</a>
      </div>
      <div class="social-proof">
        <div class="reviews-container">
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p class="review-text">"This works better than anything I've tried before. Fast acting and long lasting."</p>
            <div class="reviewer">- John D.</div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p class="review-text">"Amazing results. My confidence is back and my wife is happier than ever."</p>
            <div class="reviewer">- Michael R.</div>
          </div>
          <div class="review-card">
            <div class="stars">★★★★★</div>
            <p class="review-text">"Finally found something that actually works. The price is great too!"</p>
            <div class="reviewer">- David S.</div>
          </div>
        </div>
      </div>
    `
  },
  {
    name: 'modern',
    template: (data, styles, ids) => `
      <div class="hero-section modern">
        <div class="hero-content">
          <h1 class="headline">
            Next-Generation ED Solution
            <span class="highlight">Outperforms Traditional Medications</span>
          </h1>
          <div class="video-container" id="${ids.video}">
            <img src="${data.thumbnailUrl}" alt="ED Treatment Video" class="video-thumbnail">
            <div class="play-button">Watch Video</div>
          </div>
        </div>
        <div class="features-grid">
          <div class="feature">
            <div class="feature-number">01</div>
            <h3>Fast Acting Formula</h3>
            <p>Results in 15 minutes or less</p>
          </div>
          <div class="feature">
            <div class="feature-number">02</div>
            <h3>36-Hour Duration</h3>
            <p>Long-lasting performance</p>
          </div>
          <div class="feature">
            <div class="feature-number">03</div>
            <h3>Clinically Proven</h3>
            <p>FDA registered solution</p>
          </div>
        </div>
        <a href="quiz.html" class="cta-button">Find Your Perfect Solution</a>
      </div>
      <div class="benefits-section modern">
        <h2>Why Choose Us?</h2>
        <div class="benefits-list">
          <div class="benefit-item">
            <div class="check-icon">✓</div>
            <div class="benefit-content">
              <h3>More Powerful</h3>
              <p>Enhanced formula for better results</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="check-icon">✓</div>
            <div class="benefit-content">
              <h3>Better Value</h3>
              <p>Save up to 80% vs brand names</p>
            </div>
          </div>
          <div class="benefit-item">
            <div class="check-icon">✓</div>
            <div class="benefit-content">
              <h3>Discreet Service</h3>
              <p>Private consultation & shipping</p>
            </div>
          </div>
        </div>
      </div>
    `
  }
];

function generateLandingHTML(data, styles, ids) {
  const [gtagAccount, gtagLabel] = (data.gtagId || '').split('/');
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced ED Treatment Solution | Roman</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A" />
    ${styles.fonts.urls.map(url => `<link href="${url}" rel="stylesheet">`).join('\n')}
    ${data.trackingScript || ''}
    ${gtagAccount ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${gtagAccount}"></script>` : ''}
    ${gtagAccount ? `<script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gtagAccount}');
    </script>` : ''}
    <style>
      :root {
        --primary: ${styles.colors.primary};
        --accent: ${styles.colors.accent};
        --text-dark: #212121;
        --text-medium: #666666;
        --text-light: #909090;
        --bg-light: #f8f9fa;
        --border-light: #e0e0e0;
      }
      
      * { margin: 0; padding: 0; box-sizing: border-box; }
      
      body {
        font-family: ${styles.fonts.body};
        line-height: 1.6;
        color: var(--text-dark);
        background: #ffffff;
      }

      .header {
        padding: 1rem 0;
        border-bottom: 1px solid var(--border-light);
        position: sticky;
        top: 0;
        background: white;
        z-index: 100;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        font-size: 2rem;
        font-weight: 700;
        color: #000;
        text-decoration: none;
      }

      .hero-section {
        padding: 4rem 0;
        background: linear-gradient(120deg, #f8f9fa, #ffffff);
      }

      .hero-content {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
      }

      .headline {
        font-family: ${styles.fonts.heading};
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        color: var(--text-dark);
        line-height: 1.2;
      }

      .highlight {
        color: var(--primary);
      }

      .hero-description {
        font-size: 1.2rem;
        color: var(--text-medium);
        margin-bottom: 2rem;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
      }

      .video-container {
        max-width: 800px;
        margin: 2rem auto;
        position: relative;
        cursor: pointer;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      }

      .video-thumbnail {
        width: 100%;
        display: block;
      }

      .play-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.9);
        color: var(--primary);
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
      }

      .play-button::before {
        content: "▶";
        font-size: 1.5rem;
      }

      .video-container:hover .play-button {
        transform: translate(-50%, -50%) scale(1.1);
        background: var(--primary);
        color: white;
      }

      .features-section {
        padding: 4rem 0;
        background: var(--bg-light);
      }

      .features-title {
        text-align: center;
        margin-bottom: 3rem;
        font-size: 2rem;
        color: var(--text-dark);
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      .feature-card {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        text-align: center;
        transition: all 0.3s ease;
      }

      .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
      }

      .feature-icon {
        font-size: 2.5rem;
        color: var(--primary);
        margin-bottom: 1rem;
      }

      .feature-title {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: var(--text-dark);
      }

      .feature-description {
        color: var(--text-medium);
        font-size: 0.95rem;
      }

      .cta-button {
        ${styles.button(styles.colors)}
        display: inline-block;
        padding: 1rem 2rem;
        text-decoration: none;
        border-radius: 50px;
        margin: 2rem 0;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      }

      .cta-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
      }

      .trust-badges {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin: 3rem 0;
        flex-wrap: wrap;
      }

      .badge {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--text-medium);
      }

      .badge .icon {
        font-size: 1.5rem;
        color: var(--primary);
      }

      .footer {
        background: #2f2f2f;
        color: #e0e0e0;
        padding: 3rem 0;
      }

      .footer-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
      }

      .footer-logo {
        font-size: 1.8rem;
        font-weight: 700;
        color: white;
        margin-bottom: 1rem;
      }

      .footer-links {
        list-style: none;
      }

      .footer-links li {
        margin-bottom: 0.5rem;
      }

      .footer-links a {
        color: #e0e0e0;
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .footer-links a:hover {
        color: var(--primary);
      }

      .footer-title {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        color: white;
      }

      .footer-disclaimer {
        margin-top: 3rem;
        padding-top: 1.5rem;
        border-top: 1px solid #444;
        text-align: center;
        font-size: 0.9rem;
        color: #a0a0a0;
      }

      @media (max-width: 768px) {
        .container {
          padding: 0 1rem;
        }
        
        .hero-section {
          padding: 3rem 0;
        }
        
        .headline {
          font-size: 2rem;
        }
        
        .features-grid {
          grid-template-columns: 1fr;
        }
        
        .trust-badges {
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
      }

      ${styles.buttonHover ? styles.buttonHover(styles.colors) : ''}
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <a href="#" class="logo">ro</a>
                <div></div> <!-- Placeholder for future navigation -->
            </div>
        </div>
    </header>

    <section class="hero-section">
        <div class="container">
            <div class="hero-content">
                <h1 class="headline">
                    Breakthrough ED Treatment<br />
                    <span class="highlight">Faster & More Effective Than Traditional Solutions</span>
                </h1>
                <p class="hero-description">
                    Our clinically proven formula works in as little as 15 minutes and lasts up to 36 hours,
                    giving you the confidence you need, when you need it most.
                </p>
                <div class="video-container" id="${ids.video}">
                    <img src="${data.thumbnailUrl || 'https://i.imgur.com/DewDYDV.jpg'}" alt="ED Treatment Video" class="video-thumbnail" />
                </div>
                <a href="quiz.html" class="cta-button">Take the 60-Second Quiz</a>
                
                <div class="trust-badges">
                    <div class="badge">
                        <span class="icon">🏆</span>
                        <span class="text">FDA Registered</span>
                    </div>
                    <div class="badge">
                        <span class="icon">⚕️</span>
                        <span class="text">Doctor Approved</span>
                    </div>
                    <div class="badge">
                        <span class="icon">🔒</span>
                        <span class="text">Privacy Protected</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="features-section">
        <div class="container">
            <h2 class="features-title">Why Men Choose Our Solution</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">⚡</div>
                    <h3 class="feature-title">Fast Acting</h3>
                    <p class="feature-description">Works in as little as 15 minutes, so you're ready when the moment is right</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⏱️</div>
                    <h3 class="feature-title">Long Lasting</h3>
                    <p class="feature-description">Effects for up to 36 hours, giving you flexibility without planning</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💪</div>
                    <h3 class="feature-title">More Powerful</h3>
                    <p class="feature-description">Stronger and more reliable than traditional ED medications</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">💰</div>
                    <h3 class="feature-title">Affordable</h3>
                    <p class="feature-description">Save up to 80% compared to brand name prescriptions</p>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div>
                    <div class="footer-logo">ro</div>
                    <p>Innovative ED treatments designed for modern men.</p>
                </div>
                <div>
                    <h3 class="footer-title">Information</h3>
                    <ul class="footer-links">
                        <li><a href="privacy.html">Privacy Policy</a></li>
                        <li><a href="terms.html">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-disclaimer">
                <p>© 2024 Roman Health Ventures Inc. All rights reserved.</p>
                <p>This website is not affiliated with, endorsed by, or sponsored by Google, YouTube, or their affiliates.</p>
                <p>Always consult a qualified healthcare provider for medical advice.</p>
            </div>
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

        function gtag_report_conversion(url) {
            var callback = function () {
                console.log('Conversion sent successfully!');
                setTimeout(() => {
                    if (typeof(url) !== 'undefined') {
                        console.log('Redirecting to:', url);
                        window.location = url;
                    }
                }, 1000);
            };

            if (typeof gtag !== 'undefined' && '${gtagAccount}' && '${gtagLabel}') {
                console.log('gtag is available, sending conversion...');
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
            const videoContainer = document.getElementById('${ids.video}');
            if (videoContainer) {
                videoContainer.onclick = function() {
                    return gtag_report_conversion('${data.offerUrl}');
                };
            }
        });
    </script>
</body>
</html>`;
}

export const generateQuizPage = (data) => {
  try {
    const presetData = data.preset ? contentPresets[data.preset] : {};
    const mergedData = { ...presetData, ...data };
    
    const [gtagAccount, gtagLabel] = (mergedData.gtagId || '').split('/');
    const styles = mergedData.styles || getRandomStyle();
    if (!styles) {
      throw new Error('Failed to generate styles');
    }

    const ids = {
      video: `video_${Math.random().toString(36).substr(2, 9)}`,
      quizForm: `quiz_${Math.random().toString(36).substr(2, 9)}`
    };

    // Generate landing page HTML
    const landingHTML = generateLandingHTML(mergedData, styles, ids);

    // Generate quiz page HTML
    const quizHTML = generateQuizHTML(mergedData, styles, ids);
    
    // Generate product pages
    const alphabitesHTML = generateProductPage('alphabites', mergedData, styles);
    const brazilianWoodHTML = generateProductPage('brazilian-wood', mergedData, styles);
    const endopeakHTML = generateProductPage('endopeak', mergedData, styles);

    // Return all files
    return {
      'index.html': landingHTML,
      'quiz.html': quizHTML,
      'product-alphabites.html': alphabitesHTML,
      'product-brazilian-wood.html': brazilianWoodHTML,
      'product-endopeak.html': endopeakHTML
    };
  } catch (error) {
    console.error('Error generating quiz page:', error);
    throw error;
  }
};

function generateQuizHTML(data, styles, ids) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ED Treatment Finder | Roman</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    ${data.trackingScript || ''}
    <style>
        :root {
            --primary: ${styles.colors.primary};
            --accent: ${styles.colors.accent};
            --text-dark: #212121;
            --text-medium: #666666;
            --text-light: #909090;
            --bg-light: #f8f9fa;
            --border-light: #e0e0e0;
        }
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: var(--text-dark);
            background: #ffffff;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .header {
            padding: 1rem 0;
            border-bottom: 1px solid var(--border-light);
            background: white;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 2rem;
            font-weight: 700;
            color: #000;
            text-decoration: none;
        }

        .quiz-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: 2rem 0;
        }

        .quiz-header {
            text-align: center;
            margin-bottom: 2rem;
        }

        .quiz-title {
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
            color: var(--text-dark);
        }

        .quiz-subtitle {
            color: var(--text-medium);
            font-size: 1.1rem;
        }

        .progress-container {
            margin-bottom: 2rem;
        }

        .progress-bar {
            height: 8px;
            background-color: #e0e0e0;
            border-radius: 4px;
            overflow: hidden;
        }

        .progress-fill {
            height: 100%;
            background-color: var(--primary);
            width: 0%;
            transition: width 0.4s ease;
        }

        .progress-text {
            display: flex;
            justify-content: space-between;
            margin-top: 0.5rem;
            color: var(--text-medium);
            font-size: 0.9rem;
        }

        .questions-container {
            position: relative;
            overflow: hidden;
        }

        .question {
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
            padding: 2rem;
            margin-bottom: 1.5rem;
            display: none;
            animation: fadeIn 0.5s ease;
        }

        .question.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .question-title {
            font-size: 1.4rem;
            margin-bottom: 1.5rem;
            color: var(--text-dark);
        }

        .options {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .option {
            background: var(--bg-light);
            border: 2px solid var(--border-light);
            border-radius: 8px;
            padding: 1rem 1.5rem;
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
        }

        .option:hover {
            background: #f0f0f0;
        }

        .option.selected {
            border-color: var(--primary);
            background: rgba(var(--primary-rgb), 0.05);
        }

        .option.selected:before {
            content: '';
            position: absolute;
            top: 50%;
            right: 1rem;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            background: var(--primary);
            border-radius: 50%;
        }

        .option.selected:after {
            content: '';
            position: absolute;
            top: 50%;
            right: 1rem;
            transform: translateY(-50%) rotate(45deg);
            width: 6px;
            height: 12px;
            border-bottom: 2px solid white;
            border-right: 2px solid white;
            margin-top: -2px;
            margin-right: 7px;
        }

        .nav-buttons {
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
        }

        .back-btn {
            background: transparent;
            border: 1px solid var(--border-light);
            color: var(--text-medium);
            padding: 0.8rem 1.5rem;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.2s ease;
        }

        .back-btn:hover {
            background: #f0f0f0;
        }

        .next-btn, .submit-btn {
            ${styles.button(styles.colors)}
            padding: 0.8rem 1.5rem;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.2s ease;
        }

        .next-btn:disabled, .submit-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .loading-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.9);
            z-index: 1000;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .loader {
            width: 50px;
            height: 50px;
            border: 5px solid var(--bg-light);
            border-top: 5px solid var(--primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 1rem;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .loading-text {
            font-size: 1.2rem;
            color: var(--text-dark);
        }

        .results-section {
            display: none;
            padding: 2rem 0;
        }

        .results-header {
            text-align: center;
            margin-bottom: 3rem;
        }

        .results-title {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: var(--text-dark);
        }

        .results-subtitle {
            color: var(--text-medium);
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto;
        }

        .products-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .product-card {
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.08);
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.12);
        }

        .product-header {
            background: var(--primary);
            color: white;
            padding: 1rem 2rem;
            text-align: center;
        }

        .product-recommendation {
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
        }

        .product-content {
            padding: 2rem;
        }

        .product-image-container {
            display: flex;
            justify-content: center;
            margin-bottom: 1.5rem;
        }

        .product-image {
            max-width: 180px;
            max-height: 180px;
            object-fit: contain;
        }

        .product-title {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            text-align: center;
        }

        .product-description {
            color: var(--text-medium);
            margin-bottom: 1.5rem;
            text-align: center;
        }

        .product-features {
            margin-bottom: 2rem;
        }

        .feature-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 0.8rem;
        }

        .feature-icon {
            color: var(--primary);
            font-size: 1.2rem;
            margin-right: 0.8rem;
            flex-shrink: 0;
        }

        .feature-text {
            flex: 1;
        }

        .product-button {
            ${styles.button(styles.colors)}
            display: block;
            width: 100%;
            padding: 1rem;
            text-align: center;
            border-radius: 6px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s ease;
        }

        .product-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .trust-indicators {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 3rem;
            flex-wrap: wrap;
        }

        .trust-item {
            display: flex;
            align-items: center;
            color: var(--text-medium);
            font-size: 0.9rem;
        }

        .trust-icon {
            margin-right: 0.5rem;
            color: var(--primary);
        }

        .footer {
            background: #2f2f2f;
            color: #e0e0e0;
            padding: 2rem 0;
            margin-top: auto;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
        }

        .footer-logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: white;
            margin-bottom: 1rem;
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 0.5rem;
        }

        .footer-links a {
            color: #e0e0e0;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-links a:hover {
            color: var(--primary);
        }

        .footer-title {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            color: white;
        }

        .footer-disclaimer {
            margin-top: 2rem;
            padding-top: 1.5rem;
            border-top: 1px solid #444;
            text-align: center;
            font-size: 0.9rem;
            color: #a0a0a0;
        }

        @media (max-width: 768px) {
            .container {
                padding: 0 1rem;
            }
            
            .products-container {
                grid-template-columns: 1fr;
            }
            
            .trust-indicators {
                flex-direction: column;
                align-items: center;
                gap: 1rem;
            }
        }

        ${styles.buttonHover ? styles.buttonHover(styles.colors) : ''}
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <a href="index.html" class="logo">ro</a>
            </div>
        </div>
    </header>

    <div class="container quiz-container">
        <div class="quiz-header">
            <h1 class="quiz-title">Find Your Personalized ED Treatment</h1>
            <p class="quiz-subtitle">Answer 5 quick questions to discover the best solution for you</p>
        </div>
        
        <div class="progress-container">
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
            <div class="progress-text">
                <span id="current-question">Question 1</span>
                <span>5 questions</span>
            </div>
        </div>
        
        <div class="questions-container">
            <div class="question active" data-question="1">
                <h2 class="question-title">What is your age range?</h2>
                <div class="options">
                    <div class="option" data-value="18-30">18-30 years</div>
                    <div class="option" data-value="31-45">31-45 years</div>
                    <div class="option" data-value="46-60">46-60 years</div>
                    <div class="option" data-value="60+">60+ years</div>
                </div>
            </div>
            
            <div class="question" data-question="2">
                <h2 class="question-title">How often do you experience ED symptoms?</h2>
                <div class="options">
                    <div class="option" data-value="rarely">Rarely (less than 25% of the time)</div>
                    <div class="option" data-value="sometimes">Sometimes (25-50% of the time)</div>
                    <div class="option" data-value="often">Often (50-75% of the time)</div>
                    <div class="option" data-value="always">Almost always (more than 75% of the time)</div>
                </div>
            </div>
            
            <div class="question" data-question="3">
                <h2 class="question-title">Have you tried ED medications before?</h2>
                <div class="options">
                    <div class="option" data-value="never">Never tried any ED medication</div>
                    <div class="option" data-value="otc">Only over-the-counter supplements</div>
                    <div class="option" data-value="prescription">Prescription medication with limited success</div>
                    <div class="option" data-value="prescription-success">Prescription medication with good results</div>
                </div>
            </div>
            
            <div class="question" data-question="4">
                <h2 class="question-title">Which factors might contribute to your ED symptoms?</h2>
                <div class="options">
                    <div class="option" data-value="stress">Stress or anxiety</div>
                    <div class="option" data-value="lifestyle">Lifestyle factors (smoking, alcohol, etc.)</div>
                    <div class="option" data-value="medical">Medical conditions (diabetes, heart disease, etc.)</div>
                    <div class="option" data-value="unknown">Not sure/Other factors</div>
                </div>
            </div>
            
            <div class="question" data-question="5">
                <h2 class="question-title">What is most important to you in an ED treatment?</h2>
                <div class="options">
                    <div class="option" data-value="fast">Fast-acting relief (works quickly)</div>
                    <div class="option" data-value="long">Long-lasting effects (works for days)</div>
                    <div class="option" data-value="natural">Natural ingredients with minimal side effects</div>
                    <div class="option" data-value="proven">Clinically proven effectiveness</div>
                </div>
            </div>
        </div>
        
        <div class="nav-buttons">
            <button class="back-btn" style="visibility: hidden;">Back</button>
            <button class="submit-btn" style="display: none;">Get My Results</button>
        </div>
    </div>
    
    <div class="loading-overlay">
        <div class="loader"></div>
        <p class="loading-text">Analyzing your answers...</p>
    </div>
    
    <div class="container results-section">
        <div class="results-header">
            <h2 class="results-title">Your Personalized Recommendations</h2>
            <p class="results-subtitle">Based on your answers, we've identified the following products as most suitable for your needs.</p>
        </div>
        
        <div class="products-container">
            <div class="product-card">
                <div class="product-header">
                    <p class="product-recommendation">Primary Recommendation</p>
                </div>
                <div class="product-content">
                    <div class="product-image-container">
                        <img src="https://i.imgur.com/VTN5W8c.png" alt="AlphaBites Product" class="product-image">
                    </div>
                    <h3 class="product-title">AlphaBites</h3>
                    <p class="product-description">Fast-acting treatment that works in as little as 15 minutes and lasts up to 6 hours</p>
                    
                    <div class="product-features">
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span class="feature-text">Works in 15-30 minutes</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span class="feature-text">FDA-approved active ingredient</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span class="feature-text">Take only when needed</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span class="feature-text">Effective for 80% of men</span>
                        </div>
                    </div>
                    
                    <a href="product-alphabites.html" class="product-button">Learn More</a>
                </div>
            </div>
            
            <div class="product-card">
                <div class="product-header">
                    <p class="product-recommendation">Alternative Option</p>
                </div>
                <div class="product-content">
                    <div class="product-image-container">
                        <img src="https://i.imgur.com/g5LZLPR.png" alt="Brazilian Wood Product" class="product-image">
                    </div>
                    <h3 class="product-title">Brazilian Wood</h3>
                    <p class="product-description">Natural supplement that improves erection quality and sexual performance over time</p>
                    
                    <div class="product-features">
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span class="feature-text">All-natural ingredients</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span class="feature-text">Builds effectiveness over time</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span class="feature-text">Minimal side effects</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span class="feature-text">Improves overall sexual health</span>
                        </div>
                    </div>
                    
                    <a href="product-brazilian-wood.html" class="product-button">Learn More</a>
                </div>
            </div>
            
            <div class="product-card">
                <div class="product-header">
                    <p class="product-recommendation">Premium Option</p>
                </div>
                <div class="product-content">
                    <div class="product-image-container">
                        <img src="https://i.imgur.com/C6UJxbC.png" alt="EndoPeak Product" class="product-image">
                    </div>
                    <h3 class="product-title">EndoPeak</h3>
                    <p class="product-description">Long-lasting solution that works for up to 36 hours, providing weekend-long coverage</p>
                    
                    <div class="product-features">
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span class="feature-text">Effects last 24-36 hours</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span class="feature-text">Starts working in 30-60 minutes</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span class="feature-text">Highest satisfaction rating</span>
                        </div>
                        <div class="feature-item">
                            <span class="feature-icon">✓</span>
                            <span class="feature-text">Most powerful formula available</span>
                        </div>
                    </div>
                    
                    <a href="product-endopeak.html" class="product-button">Learn More</a>
                </div>
            </div>
        </div>
        
        <div class="trust-indicators">
            <div class="trust-item">
                <span class="trust-icon">🔒</span>
                <span>Privacy Protected</span>
            </div>
            <div class="trust-item">
                <span class="trust-icon">⚕️</span>
                <span>Doctor Recommended</span>
            </div>
            <div class="trust-item">
                <span class="trust-icon">🚚</span>
                <span>Discreet Shipping</span>
            </div>
        </div>
    </div>
    
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div>
                    <div class="footer-logo">ro</div>
                    <p>Innovative ED treatments designed for modern men.</p>
                </div>
                <div>
                    <h3 class="footer-title">Information</h3>
                    <ul class="footer-links">
                        <li><a href="privacy.html">Privacy Policy</a></li>
                        <li><a href="terms.html">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-disclaimer">
                <p>© 2024 Roman Health Ventures Inc. All rights reserved.</p>
                <p>This website is not affiliated with, endorsed by, or sponsored by Google, YouTube, or their affiliates.</p>
                <p>Always consult a qualified healthcare provider for medical advice.</p>
            </div>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var questions = document.querySelectorAll('.question');
            var options = document.querySelectorAll('.option');
            var backButton = document.querySelector('.back-btn');
            var submitButton = document.querySelector('.submit-btn');
            var loadingOverlay = document.querySelector('.loading-overlay');
            var resultsSection = document.querySelector('.results-section');
            var progressBar = document.querySelector('.progress-fill');
            var currentQuestionText = document.getElementById('current-question');
            
            var currentStep = 1;
            var selectedOptions = {};
            var totalQuestions = questions.length;
            
            // Initialize progress bar
            updateProgress(currentStep);
            
            // Handle option selection with auto-advance
            options.forEach(function(option) {
                option.addEventListener('click', function() {
                    var questionDiv = this.closest('.question');
                    var questionIndex = questionDiv.dataset.question;
                    
                    // Clear previous selection for this question
                    var options = questionDiv.querySelectorAll('.option');
                    options.forEach(function(opt) {
                        opt.classList.remove('selected');
                    });
                    
                    // Mark as selected
                    this.classList.add('selected');
                    
                    // Store selected value
                    selectedOptions[questionIndex] = this.dataset.value;
                    
                    // Auto-advance to next question after a short delay
                    setTimeout(function() {
                        if (currentStep < totalQuestions) {
                            navigateToQuestion(currentStep + 1);
                        } else {
                            // If last question, highlight submit button
                            submitButton.style.display = 'block';
                            submitButton.style.animation = 'pulse 2s infinite';
                        }
                    }, 500);
                });
            });
            
            // Back button
            backButton.addEventListener('click', function() {
                if (currentStep > 1) {
                    navigateToQuestion(currentStep - 1);
                }
            });
            
            // Submit button
            submitButton.addEventListener('click', function() {
                // Show loading overlay
                loadingOverlay.style.display = 'flex';
                
                // Simulate processing time (2 seconds)
                setTimeout(function() {
                    // Hide quiz container
                    document.querySelector('.quiz-container').style.display = 'none';
                    
                    // Hide loading overlay
                    loadingOverlay.style.display = 'none';
                    
                    // Show results
                    resultsSection.style.display = 'block';
                    
                    // Track conversion
                    if (typeof gtag === 'function') {
                        gtag('event', 'quiz_completed', {
                            'event_category': 'engagement',
                            'event_label': JSON.stringify(selectedOptions)
                        });
                    }
                }, 2000);
            });
            
            // Track product clicks
            var productButtons = document.querySelectorAll('.product-button');
            productButtons.forEach(function(button) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    var productUrl = this.getAttribute('href');
                    
                    if (typeof gtag === 'function') {
                        gtag('event', 'conversion', {
                            'send_to': '${data.gtagId || ''}',
                            'event_callback': function() {
                                window.location = productUrl;
                            }
                        });
                        setTimeout(function() {
                            window.location = productUrl;
                        }, 1000);
                    } else {
                        window.location = productUrl;
                    }
                });
            });
            
            // Navigation function
            function navigateToQuestion(step) {
                // Hide all questions
                questions.forEach(function(q) {
                    q.classList.remove('active');
                });
                
                // Show current question
                questions[step - 1].classList.add('active');
                
                // Update current step
                currentStep = step;
                
                // Update back button visibility
                if (currentStep > 1) {
                    backButton.style.visibility = 'visible';
                } else {
                    backButton.style.visibility = 'hidden';
                }
                
                // Show or hide submit button
                if (currentStep === totalQuestions) {
                    submitButton.style.display = 'block';
                } else {
                    submitButton.style.display = 'none';
                }
                
                // Update progress
                updateProgress(currentStep);
            }
            
            // Update progress bar
            function updateProgress(step) {
                var progress = (step - 1) / (totalQuestions - 1) * 100;
                progressBar.style.width = progress + '%';
                currentQuestionText.textContent = 'Question ' + step;
            }
        });
    </script>
</body>
</html>`;
}

function generateProductPage(productName, data, styles) {
  let productTitle, productDescription, productFeatures, productImage, productPrice, productAction;
  
  switch(productName) {
    case 'alphabites':
      productTitle = 'AlphaBites';
      productDescription = 'Fast-acting ED treatment that works in as little as 15 minutes and lasts up to 6 hours. AlphaBites is our most popular solution for men who want on-demand performance without waiting.';
      productFeatures = [
        'Works in just 15-30 minutes',
        'Effects last for 4-6 hours',
        'Take only when needed',
        'FDA-approved active ingredient',
        'Effective for 80% of men with ED',
        'Minimal side effects',
        'Discreet packaging and delivery'
      ];
      productImage = 'https://i.imgur.com/VTN5W8c.png';
      productPrice = '$2.50 per dose';
      productAction = 'Limited Time Offer: Get 67% Off Your First Order';
      break;
    case 'brazilian-wood':
      productTitle = 'Brazilian Wood';
      productDescription = 'All-natural supplement that improves erection quality and sexual performance over time. Derived from rare Amazonian herbs, Brazilian Wood builds in effectiveness with regular use.';
      productFeatures = [
        '100% natural ingredient formula',
        'No prescription required',
        'Builds effectiveness over time',
        'Improves overall sexual health',
        'No side effects',
        'Enhances stamina and performance',
        'Monthly subscription available'
      ];
      productImage = 'https://i.imgur.com/g5LZLPR.png';
      productPrice = '$49.95 monthly supply';
      productAction = 'Special Offer: First Month 50% Off';
      break;
    case 'endopeak':
      productTitle = 'EndoPeak';
      productDescription = 'Premium long-lasting solution that works for up to 36 hours, providing weekend-long coverage with a single dose. Our strongest formula for maximum results.';
      productFeatures = [
        'Effects last 24-36 hours',
        'Starts working in 30-60 minutes',
        'Highest satisfaction rating',
        'Premium medical-grade formula',
        'Maximum strength for severe ED',
        'Weekend-long coverage',
        '100% money-back guarantee'
      ];
      productImage = 'https://i.imgur.com/C6UJxbC.png';
      productPrice = '$4.95 per dose';
      productAction = 'Exclusive Discount: Buy 3, Get 2 Free';
      break;
    default:
      return 'Product not found';
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${productTitle} | Advanced ED Treatment | Roman</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    ${data.trackingScript || ''}
    <style>
        :root {
            --primary: ${styles.colors.primary};
            --accent: ${styles.colors.accent};
            --text-dark: #212121;
            --text-medium: #666666;
            --text-light: #909090;
            --bg-light: #f8f9fa;
            --border-light: #e0e0e0;
        }
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: var(--text-dark);
            background: #ffffff;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .header {
            padding: 1rem 0;
            border-bottom: 1px solid var(--border-light);
            background: white;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 2rem;
            font-weight: 700;
            color: #000;
            text-decoration: none;
        }

        .product-section {
            padding: 4rem 0;
            flex: 1;
        }

        .product-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .product-image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--bg-light);
            padding: 2rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .product-image {
            max-width: 100%;
            max-height: 400px;
            object-fit: contain;
        }

        .product-details {
            display: flex;
            flex-direction: column;
        }

        .product-title {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: var(--text-dark);
        }

        .product-description {
            font-size: 1.1rem;
            color: var(--text-medium);
            margin-bottom: 2rem;
        }

        .product-price {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 1.5rem;
        }

        .product-features {
            margin-bottom: 2rem;
        }

        .feature-title {
            font-size: 1.4rem;
            margin-bottom: 1rem;
            color: var(--text-dark);
        }

        .feature-list {
            list-style: none;
        }

        .feature-item {
            display: flex;
            align-items: center;
            margin-bottom: 0.8rem;
        }

        .feature-icon {
            color: var(--primary);
            margin-right: 1rem;
            font-size: 1.2rem;
        }

        .order-button {
            ${styles.button(styles.colors)}
            display: inline-block;
            padding: 1.2rem 2.5rem;
            text-align: center;
            border-radius: 6px;
            font-weight: 600;
            font-size: 1.1rem;
            text-decoration: none;
            transition: all 0.2s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            margin-bottom: 1.5rem;
        }

        .order-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        .special-offer {
            background: linear-gradient(45deg, var(--primary), var(--accent));
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 6px;
            font-weight: 600;
            margin-bottom: 2rem;
            display: inline-block;
        }

        .testimonials-section {
            background: var(--bg-light);
            padding: 4rem 0;
        }

        .section-title {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 3rem;
            color: var(--text-dark);
        }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .testimonial-card {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .testimonial-content {
            font-style: italic;
            margin-bottom: 1.5rem;
            color: var(--text-medium);
        }

        .testimonial-author {
            font-weight: 600;
            color: var(--text-dark);
        }

        .testimonial-rating {
            color: #FFD700;
            margin-bottom: 0.5rem;
        }

        .faq-section {
            padding: 4rem 0;
        }

        .faq-container {
            max-width: 800px;
            margin: 0 auto;
        }

        .faq-item {
            margin-bottom: 1.5rem;
            border-bottom: 1px solid var(--border-light);
            padding-bottom: 1.5rem;
        }

        .faq-question {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 0.8rem;
            color: var(--text-dark);
        }

        .faq-answer {
            color: var(--text-medium);
        }

        .cta-section {
            background: linear-gradient(45deg, var(--primary), var(--accent));
            padding: 4rem 0;
            text-align: center;
            color: white;
        }

        .cta-title {
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }

        .cta-text {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .footer {
            background: #2f2f2f;
            color: #e0e0e0;
            padding: 3rem 0;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
        }

        .footer-logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: white;
            margin-bottom: 1rem;
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 0.5rem;
        }

        .footer-links a {
            color: #e0e0e0;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-links a:hover {
            color: var(--primary);
        }

        .footer-title {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            color: white;
        }

        .footer-disclaimer {
            margin-top: 3rem;
            padding-top: 1.5rem;
            border-top: 1px solid #444;
            text-align: center;
            font-size: 0.9rem;
            color: #a0a0a0;
        }

        @media (max-width: 768px) {
            .container {
                padding: 0 1rem;
            }
            
            .product-container {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            
            .product-title {
                font-size: 2rem;
            }
            
            .testimonials-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <a href="index.html" class="logo">ro</a>
            </div>
        </div>
    </header>

    <section class="product-section">
        <div class="container">
            <div class="product-container">
                <div class="product-image-container">
                    <img src="${productImage}" alt="${productTitle} Product" class="product-image">
                </div>
                <div class="product-details">
                    <h1 class="product-title">${productTitle}</h1>
                    <p class="product-description">${productDescription}</p>
                    <div class="special-offer">${productAction}</div>
                    <div class="product-price">${productPrice}</div>
                    <div class="product-features">
                        <h3 class="feature-title">Key Benefits</h3>
                        <ul class="feature-list">
                            ${productFeatures.map(feature => `
                            <li class="feature-item">
                                <span class="feature-icon">✓</span>
                                <span>${feature}</span>
                            </li>
                            `).join('')}
                        </ul>
                    </div>
                    <a href="#order-now" class="order-button">Order Now</a>
                </div>
            </div>
        </div>
    </section>

    <section class="testimonials-section">
        <div class="container">
            <h2 class="section-title">What Our Customers Say</h2>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <div class="testimonial-rating">★★★★★</div>
                    <p class="testimonial-content">"I've tried several ED treatments, but ${productTitle} is by far the most effective. Works exactly as promised with no side effects."</p>
                    <p class="testimonial-author">- Michael, 48</p>
                </div>
                <div class="testimonial-card">
                    <div class="testimonial-rating">★★★★★</div>
                    <p class="testimonial-content">"Game changer for my relationship. I feel confident again and my partner has noticed the difference. Worth every penny."</p>
                    <p class="testimonial-author">- James, 53</p>
                </div>
                <div class="testimonial-card">
                    <div class="testimonial-rating">★★★★★</div>
                    <p class="testimonial-content">"After years of disappointment with other treatments, ${productTitle} finally gave me the results I was looking for. Highly recommend!"</p>
                    <p class="testimonial-author">- Robert, 56</p>
                </div>
            </div>
        </div>
    </section>

    <section class="faq-section">
        <div class="container">
            <h2 class="section-title">Frequently Asked Questions</h2>
            <div class="faq-container">
                <div class="faq-item">
                    <h3 class="faq-question">How quickly does ${productTitle} work?</h3>
                    <p class="faq-answer">The time to effectiveness varies by product. AlphaBites works in 15-30 minutes, EndoPeak in 30-60 minutes, and Brazilian Wood builds effectiveness over time.</p>
                </div>
                <div class="faq-item">
                    <h3 class="faq-question">Are there any side effects?</h3>
                    <p class="faq-answer">Most men experience no side effects. Some may experience mild headaches, flushing, or digestive discomfort that typically resolves quickly. Each product has a different side effect profile, with our natural options having the fewest side effects.</p>
                </div>
                <div class="faq-item">
                    <h3 class="faq-question">How is shipping handled?</h3>
                    <p class="faq-answer">All products are shipped in plain, discreet packaging with no indication of the contents. Most orders are delivered within 2-3 business days.</p>
                </div>
                <div class="faq-item">
                    <h3 class="faq-question">Is there a satisfaction guarantee?</h3>
                    <p class="faq-answer">Yes, we offer a 60-day money-back guarantee. If you're not satisfied with the results, simply contact our customer service for a full refund.</p>
                </div>
                <div class="faq-item">
                    <h3 class="faq-question">Do I need a prescription?</h3>
                    <p class="faq-answer">Our products are available without a traditional prescription. However, you will complete a brief online consultation to ensure the product is right for you.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="cta-section" id="order-now">
        <div class="container">
            <h2 class="cta-title">Ready to Transform Your Confidence?</h2>
            <p class="cta-text">Join thousands of satisfied customers who have rediscovered their confidence and improved their relationships.</p>
            <a href="#" class="order-button">Order ${productTitle} Now</a>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div>
                    <div class="footer-logo">ro</div>
                    <p>Innovative ED treatments designed for modern men.</p>
                </div>
                <div>
                    <h3 class="footer-title">Information</h3>
                    <ul class="footer-links">
                        <li><a href="privacy.html">Privacy Policy</a></li>
                        <li><a href="terms.html">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-disclaimer">
                <p>© 2024 Roman Health Ventures Inc. All rights reserved.</p>
                <p>This website is not affiliated with, endorsed by, or sponsored by Google, YouTube, or their affiliates.</p>
                <p>Always consult a qualified healthcare provider for medical advice.</p>
            </div>
        </div>
    </footer>
</body>
</html>`;
} 