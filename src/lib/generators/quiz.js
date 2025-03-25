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
    <title>Advanced ED Treatment Solution</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A" />
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
      }
      
      * { margin: 0; padding: 0; box-sizing: border-box; }
      
      body {
        font-family: ${styles.fonts.body};
        line-height: 1.6;
        color: #fff;
        background: ${styles.background.main};
        background-image: ${styles.background.overlay};
      }

      .hero-section {
        padding: 4rem 2rem;
        text-align: center;
        max-width: 1200px;
        margin: 0 auto;
      }

      .headline {
        font-family: ${styles.fonts.heading};
        font-size: 2.5rem;
        margin-bottom: 2rem;
      }

      .video-container {
        max-width: 800px;
        margin: 2rem auto;
        position: relative;
        cursor: pointer;
      }

      .video-thumbnail {
        width: 100%;
        border-radius: 8px;
      }

      .cta-button {
        ${styles.button(styles.colors)}
        display: inline-block;
        padding: 1rem 2rem;
        text-decoration: none;
        border-radius: 50px;
        margin: 2rem 0;
      }

      ${styles.buttonHover ? styles.buttonHover(styles.colors) : ''}
    </style>
</head>
<body>
    <div class="hero-section">
        <h1 class="headline">
            Breakthrough ED Treatment<br />
            <span class="highlight">Faster & More Effective Than Traditional Solutions</span>
        </h1>
        <div class="video-container" id="${ids.video}">
            <img src="${data.thumbnailUrl || ''}" alt="ED Treatment Video" class="video-thumbnail" />
            <div class="play-button">Watch Video</div>
        </div>
        <a href="quiz.html" class="cta-button">Take the 60-Second Quiz</a>
    </div>

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
    const quizHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ED Treatment Qualification Quiz</title>
    ${styles.fonts.urls.map(url => `<link href="${url}" rel="stylesheet">`).join('\n')}
    ${mergedData.trackingScript || ''}
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
        --gradient: linear-gradient(135deg, var(--primary), var(--accent));
      }
      
      * { margin: 0; padding: 0; box-sizing: border-box; }
      
      body {
        font-family: ${styles.fonts.body};
        line-height: 1.6;
        color: #333;
        background: #f5f7fa;
        min-height: 100vh;
        position: relative;
      }

      body::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 300px;
        background: var(--gradient);
        z-index: -1;
        opacity: 0.8;
      }

      .quiz-container {
        max-width: 900px;
        margin: 2rem auto;
        padding: 2.5rem;
        position: relative;
        background: white;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      }

      .quiz-header {
        text-align: center;
        margin-bottom: 3rem;
        position: relative;
      }

      .quiz-header::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: var(--gradient);
        border-radius: 3px;
      }

      .quiz-title {
        font-family: ${styles.fonts.heading};
        font-size: 2.5rem;
        background: var(--gradient);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        margin-bottom: 1rem;
      }

      .quiz-subtitle {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 1.5rem;
      }

      .progress-container {
        width: 100%;
        height: 8px;
        background: #e9ecef;
        border-radius: 4px;
        margin: 2rem 0;
        overflow: hidden;
        position: relative;
      }

      .progress-bar {
        height: 100%;
        background: var(--gradient);
        width: 0;
        transition: width 0.5s ease;
        border-radius: 4px;
      }

      .question-count {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
        color: #777;
      }

      .question {
        background: white;
        padding: 2.5rem;
        border-radius: 12px;
        margin-bottom: 2rem;
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        position: relative;
        box-shadow: 0 5px 15px rgba(0,0,0,0.03);
        border: 1px solid #f0f0f0;
        display: none;
      }

      .question.active {
        opacity: 1;
        transform: translateY(0);
        display: block;
      }

      .question::before {
        content: attr(data-step);
        position: absolute;
        top: -15px;
        left: 20px;
        background: var(--gradient);
        color: white;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-weight: bold;
        font-size: 0.9rem;
      }

      .question h3 {
        font-size: 1.6rem;
        color: #333;
        margin-bottom: 1.5rem;
        font-weight: 600;
      }

      .options {
        display: grid;
        gap: 1.2rem;
      }

      .option {
        padding: 1.4rem;
        background: #f9fafc;
        border: 2px solid #e9ecef;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1.1rem;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
      }

      .option::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 100%;
        background: var(--gradient);
        opacity: 0;
        transition: all 0.3s ease;
      }

      .option:hover {
        border-color: var(--primary);
        background: white;
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      }

      .option:hover::before {
        opacity: 1;
      }

      .option.selected {
        border-color: var(--primary);
        background: white;
        box-shadow: 0 5px 15px rgba(0,0,0,0.08);
      }

      .option.selected::before {
        opacity: 1;
      }

      .option.selected::after {
        content: '✓';
        position: absolute;
        right: 20px;
        color: var(--primary);
        font-weight: bold;
        font-size: 1.2rem;
      }

      .navigation-buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
      }

      .nav-button {
        ${styles.button(styles.colors)}
        padding: 1rem 2rem;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1.1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        background: var(--gradient);
      }

      .nav-button.back {
        background: #e9ecef;
        color: #666;
      }

      .nav-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .submit-button {
        ${styles.button(styles.colors)}
        display: block;
        width: 100%;
        padding: 1.4rem;
        margin-top: 2.5rem;
        font-size: 1.3rem;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 1px;
        background: var(--gradient);
        position: relative;
        overflow: hidden;
        z-index: 1;
      }

      .submit-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: all 0.6s ease;
        z-index: -1;
      }

      .submit-button:hover::before {
        left: 100%;
      }

      .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255,255,255,0.97);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(5px);
      }

      .loading-overlay.active {
        display: flex;
      }

      .loading-content {
        text-align: center;
        max-width: 500px;
        padding: 2rem;
      }

      .loading-title {
        font-size: 2.2rem;
        background: var(--gradient);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        margin-bottom: 2.5rem;
        font-weight: 700;
      }

      .loading-steps {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        text-align: left;
      }

      .loading-step {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        opacity: 0.5;
        transition: all 0.5s ease;
        transform: translateX(-20px);
        padding: 1rem;
        border-radius: 8px;
      }

      .loading-step.active {
        opacity: 1;
        transform: translateX(0);
        background: #f5f7fa;
      }

      .loading-step .checkmark {
        width: 30px;
        height: 30px;
        background: var(--gradient);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        opacity: 0;
        transform: scale(0);
        transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .loading-step.active .checkmark {
        opacity: 1;
        transform: scale(1);
      }

      .loading-step span {
        font-size: 1.1rem;
        font-weight: 500;
      }

      .loading-anim {
        height: 5px;
        width: 100%;
        margin-top: 2rem;
        background: #e9ecef;
        border-radius: 3px;
        overflow: hidden;
        position: relative;
      }

      .loading-anim::after {
        content: '';
        position: absolute;
        top: 0;
        left: -50%;
        width: 50%;
        height: 100%;
        background: var(--gradient);
        animation: loading 1.5s infinite linear;
        border-radius: 3px;
      }

      @keyframes loading {
        0% { left: -50%; }
        100% { left: 100%; }
      }

      .results-section {
        display: none;
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        padding: 2rem;
      }

      .results-section.active {
        display: block;
        opacity: 1;
        transform: translateY(0);
      }

      .results-header {
        text-align: center;
        margin-bottom: 3rem;
      }

      .results-title {
        font-size: 2.5rem;
        color: var(--primary);
        margin-bottom: 1rem;
        font-weight: 700;
      }

      .results-subtitle {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 1rem;
      }

      .results-message {
        background: #f0f9ff;
        border-left: 4px solid var(--primary);
        padding: 1.5rem;
        margin-bottom: 3rem;
        border-radius: 6px;
      }

      .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2.5rem;
        margin-top: 2.5rem;
      }

      .product-card {
        background: white;
        border-radius: 14px;
        overflow: hidden;
        box-shadow: 0 10px 25px rgba(0,0,0,0.07);
        transition: all 0.4s ease;
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .product-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.1);
      }

      .product-badge {
        position: absolute;
        top: 15px;
        right: 15px;
        background: var(--gradient);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: bold;
        z-index: 10;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      }

      .product-image {
        width: 100%;
        height: 220px;
        object-fit: cover;
        border-bottom: 1px solid #f0f0f0;
      }

      .product-info {
        padding: 1.8rem;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }

      .product-name {
        font-size: 1.6rem;
        color: #333;
        margin-bottom: 0.8rem;
        font-weight: 600;
      }

      .product-description {
        color: #666;
        margin-bottom: 1.5rem;
        flex-grow: 1;
      }

      .product-features {
        margin-bottom: 1.5rem;
        padding-left: 1.2rem;
      }

      .product-features li {
        margin-bottom: 0.5rem;
        position: relative;
      }

      .product-features li::before {
        content: '✓';
        color: var(--primary);
        position: absolute;
        left: -1.2rem;
        font-weight: bold;
      }

      .product-button {
        ${styles.button(styles.colors)}
        display: block;
        width: 100%;
        padding: 1.2rem;
        text-align: center;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        background: var(--gradient);
      }

      .product-button:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      }

      .trust-indicators {
        display: flex;
        justify-content: center;
        margin-top: 3rem;
        gap: 2rem;
        flex-wrap: wrap;
      }

      .trust-item {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        color: #666;
      }

      .trust-icon {
        font-size: 1.5rem;
        color: var(--primary);
      }

      @media (max-width: 768px) {
        .quiz-container {
          padding: 1.5rem;
          margin: 1rem;
        }
        
        .question {
          padding: 1.5rem;
        }
        
        .quiz-title {
          font-size: 2rem;
        }
        
        .option {
          padding: 1.2rem;
        }
        
        .products-grid {
          grid-template-columns: 1fr;
        }
      }

      ${styles.buttonHover ? styles.buttonHover(styles.colors) : ''}
    </style>
</head>
<body>
    <div class="quiz-container" id="${ids.quizForm}">
        <div class="quiz-header">
            <h1 class="quiz-title">ED Treatment Qualification Quiz</h1>
            <p class="quiz-subtitle">Answer a few quick questions to find your perfect solution</p>
            <div class="question-count">
                <span id="current-question">Question 1</span>
                <span>3 Questions Total</span>
            </div>
            <div class="progress-container">
                <div class="progress-bar" id="progress-bar"></div>
            </div>
        </div>
        
        <div class="questions-container">
            <div class="question active" data-step="1">
                <h3>What is your age range?</h3>
                <div class="options">
                    <div class="option" data-value="18-30">18-30 years</div>
                    <div class="option" data-value="31-45">31-45 years</div>
                    <div class="option" data-value="46-60">46-60 years</div>
                    <div class="option" data-value="60+">60+ years</div>
                </div>
                <div class="navigation-buttons">
                    <div></div> <!-- Empty div for spacing -->
                    <button class="nav-button next" data-step="1">Continue</button>
                </div>
            </div>

            <div class="question" data-step="2">
                <h3>How often do you experience ED symptoms?</h3>
                <div class="options">
                    <div class="option" data-value="rarely">Rarely</div>
                    <div class="option" data-value="sometimes">Sometimes</div>
                    <div class="option" data-value="often">Often</div>
                    <div class="option" data-value="always">Almost Always</div>
                </div>
                <div class="navigation-buttons">
                    <button class="nav-button back" data-step="2">Back</button>
                    <button class="nav-button next" data-step="2">Continue</button>
                </div>
            </div>

            <div class="question" data-step="3">
                <h3>Have you tried ED medication before?</h3>
                <div class="options">
                    <div class="option" data-value="no">No, never</div>
                    <div class="option" data-value="yes-some">Yes, with some success</div>
                    <div class="option" data-value="yes-no">Yes, but without success</div>
                </div>
                <div class="navigation-buttons">
                    <button class="nav-button back" data-step="3">Back</button>
                    <button class="submit-button" id="submit-quiz">See Your Results</button>
                </div>
            </div>
        </div>
    </div>

    <div class="loading-overlay" id="loading-overlay">
        <div class="loading-content">
            <h2 class="loading-title">Analyzing Your Responses</h2>
            <div class="loading-steps">
                <div class="loading-step">
                    <div class="checkmark">✓</div>
                    <span>Processing your answers...</span>
                </div>
                <div class="loading-step">
                    <div class="checkmark">✓</div>
                    <span>Calculating optimal solutions...</span>
                </div>
                <div class="loading-step">
                    <div class="checkmark">✓</div>
                    <span>Matching with clinical data...</span>
                </div>
                <div class="loading-step">
                    <div class="checkmark">✓</div>
                    <span>Finalizing recommendations...</span>
                </div>
            </div>
            <div class="loading-anim"></div>
        </div>
    </div>

    <div class="results-section" id="results-section">
        <div class="results-header">
            <h2 class="results-title">Great News! You Qualify For Treatment</h2>
            <p class="results-subtitle">Based on your answers, we've found the perfect solutions for you</p>
        </div>
        
        <div class="results-message">
            <p>Our analysis shows you're an excellent candidate for ED treatment. We've matched your profile with our top recommended products.</p>
        </div>
        
        <div class="products-grid">
            <div class="product-card">
                <div class="product-badge">MOST POPULAR</div>
                <img src="https://i.imgur.com/VTN5W8c.png" alt="AlphaBites" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">AlphaBites</h3>
                    <p class="product-description">Our newest formula combines the benefits of both Viagra and Cialis in one powerful treatment. Starts working in 15 minutes and lasts for up to 36 hours.</p>
                    <ul class="product-features">
                        <li>Fast-acting formula (15 min)</li>
                        <li>Long-lasting (36 hours)</li>
                        <li>No prescription needed</li>
                        <li>Clinically tested ingredients</li>
                    </ul>
                    <a href="product-alphabites.html" class="product-button">Learn More</a>
                </div>
            </div>
            
            <div class="product-card">
                <div class="product-badge">NATURAL</div>
                <img src="https://i.imgur.com/g5LZLPR.png" alt="Brazilian Wood" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">Brazilian Wood</h3>
                    <p class="product-description">All-natural herbal formula developed with premium ingredients from the Amazon rainforest. Enhances blood flow and performance without side effects.</p>
                    <ul class="product-features">
                        <li>100% natural ingredients</li>
                        <li>No side effects</li>
                        <li>Cumulative benefits</li>
                        <li>Improves stamina & energy</li>
                    </ul>
                    <a href="product-brazilian-wood.html" class="product-button">Learn More</a>
                </div>
            </div>
            
            <div class="product-card">
                <div class="product-badge">STRONGEST</div>
                <img src="https://i.imgur.com/C6UJxbC.png" alt="EndoPeak" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">EndoPeak</h3>
                    <p class="product-description">Advanced pharmaceutical-grade formula designed to maximize blood flow and enhance sensitivity. Our strongest solution for men with severe ED symptoms.</p>
                    <ul class="product-features">
                        <li>Maximum strength formula</li>
                        <li>Enhanced sensitivity</li>
                        <li>Works for severe cases</li>
                        <li>Money-back guarantee</li>
                    </ul>
                    <a href="product-endopeak.html" class="product-button">Learn More</a>
                </div>
            </div>
        </div>
        
        <div class="trust-indicators">
            <div class="trust-item">
                <span class="trust-icon">🔒</span>
                <span>Secure Checkout</span>
            </div>
            <div class="trust-item">
                <span class="trust-icon">🚚</span>
                <span>Discreet Shipping</span>
            </div>
            <div class="trust-item">
                <span class="trust-icon">📱</span>
                <span>24/7 Support</span>
            </div>
            <div class="trust-item">
                <span class="trust-icon">💯</span>
                <span>Satisfaction Guaranteed</span>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const questions = document.querySelectorAll('.question');
            const options = document.querySelectorAll('.option');
            const nextButtons = document.querySelectorAll('.nav-button.next');
            const backButtons = document.querySelectorAll('.nav-button.back');
            const submitButton = document.getElementById('submit-quiz');
            const loadingOverlay = document.getElementById('loading-overlay');
            const resultsSection = document.getElementById('results-section');
            const progressBar = document.getElementById('progress-bar');
            const currentQuestionText = document.getElementById('current-question');
            
            let currentStep = 1;
            let selectedOptions = [];

            // Update progress bar and question counter
            function updateProgress() {
                const progress = ((currentStep - 1) / (questions.length)) * 100;
                progressBar.style.width = progress + '%';
                currentQuestionText.textContent = `Question ${currentStep}`;
            }

            // Navigate to a specific question
            function navigateToQuestion(step) {
                questions.forEach(q => q.classList.remove('active'));
                questions[step - 1].classList.add('active');
                currentStep = step;
                updateProgress();
            }

            // Handle option selection
            options.forEach(option => {
                option.addEventListener('click', function() {
                    const currentQuestion = this.closest('.question');
                    const options = currentQuestion.querySelectorAll('.option');
                    const questionIndex = parseInt(currentQuestion.getAttribute('data-step')) - 1;
                    
                    options.forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                    
                    // Store selection
                    selectedOptions[questionIndex] = this.getAttribute('data-value');
                    
                    // Enable the next/submit button
                    const nextButton = currentQuestion.querySelector('.nav-button.next');
                    if (nextButton) {
                        nextButton.removeAttribute('disabled');
                    } else if (submitButton) {
                        submitButton.removeAttribute('disabled');
                    }
                });
            });

            // Handle next button clicks
            nextButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const step = parseInt(this.getAttribute('data-step'));
                    if (selectedOptions[step - 1]) {
                        navigateToQuestion(step + 1);
                    } else {
                        // Highlight the need to select an option
                        const questionDiv = this.closest('.question');
                        questionDiv.classList.add('need-selection');
                        setTimeout(() => {
                            questionDiv.classList.remove('need-selection');
                        }, 500);
                    }
                });
            });

            // Handle back button clicks
            backButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const step = parseInt(this.getAttribute('data-step'));
                    navigateToQuestion(step - 1);
                });
            });

            // Handle submit button
            submitButton.addEventListener('click', function() {
                // Validate if the last question is answered
                if (!selectedOptions[questions.length - 1]) {
                    // Highlight the need to select an option
                    const questionDiv = this.closest('.question');
                    questionDiv.classList.add('need-selection');
                    setTimeout(() => {
                        questionDiv.classList.remove('need-selection');
                    }, 500);
                    return;
                }
                
                // Show loading overlay
                loadingOverlay.classList.add('active');
                
                // Animate loading steps
                const steps = loadingOverlay.querySelectorAll('.loading-step');
                steps.forEach((step, index) => {
                    setTimeout(() => {
                        step.classList.add('active');
                    }, 800 * index);
                });
                
                // Show results after loading
                setTimeout(() => {
                    loadingOverlay.classList.remove('active');
                    document.querySelector('.quiz-container').style.display = 'none';
                    resultsSection.classList.add('active');
                }, 4000);
            });

            // Initialize navigation buttons state
            nextButtons.forEach(button => {
                const step = parseInt(button.getAttribute('data-step'));
                if (!selectedOptions[step - 1]) {
                    button.setAttribute('disabled', 'disabled');
                }
            });

            if (!selectedOptions[questions.length - 1]) {
                submitButton.setAttribute('disabled', 'disabled');
            }

            // Track product clicks for conversion tracking
            document.querySelectorAll('.product-button').forEach(button => {
                button.addEventListener('click', function(e) {
                    if (typeof gtag !== 'undefined') {
                        e.preventDefault();
                        const url = this.getAttribute('href');
                        
                        gtag('event', 'conversion', {
                            'send_to': '${gtagAccount}/${gtagLabel}',
                            'value': 1.0,
                            'currency': 'EUR',
                            'event_callback': function() {
                                window.location = url;
                            }
                        });
                    }
                });
            });
        });
    </script>
</body>
</html>`;

    // Return both files
    return {
      'index.html': landingHTML,
      'quiz.html': quizHTML
    };
  } catch (error) {
    console.error('Error generating quiz page:', error);
    throw error;
  }
}; 