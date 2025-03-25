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
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A" />
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
      }
      
      * { margin: 0; padding: 0; box-sizing: border-box; }
      
      body {
        font-family: ${styles.fonts.body};
        line-height: 1.6;
        color: #333;
        background: #fff;
      }

      .quiz-container {
        max-width: 800px;
        margin: 2rem auto;
        padding: 2rem;
      }

      .quiz-header {
        text-align: center;
        margin-bottom: 2rem;
      }

      .quiz-title {
        font-family: ${styles.fonts.heading};
        font-size: 2rem;
        color: var(--primary);
        margin-bottom: 1rem;
      }

      .question {
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: #f8f9fa;
        border-radius: 8px;
      }

      .question h3 {
        margin-bottom: 1rem;
        color: var(--primary);
      }

      .options {
        display: grid;
        gap: 1rem;
      }

      .option {
        padding: 1rem;
        background: white;
        border: 2px solid #e9ecef;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .option:hover {
        border-color: var(--primary);
        background: #f8f9fa;
      }

      .option.selected {
        border-color: var(--primary);
        background: var(--primary);
        color: white;
      }

      .submit-button {
        ${styles.button(styles.colors)}
        display: block;
        width: 100%;
        padding: 1rem;
        margin-top: 2rem;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1.1rem;
      }

      ${styles.buttonHover ? styles.buttonHover(styles.colors) : ''}
    </style>
</head>
<body>
    <div class="quiz-container" id="${ids.quizForm}">
        <div class="quiz-header">
            <h1 class="quiz-title">ED Treatment Qualification Quiz</h1>
            <p>Answer a few quick questions to find your perfect solution</p>
        </div>
        
        <div class="question">
            <h3>What is your age range?</h3>
            <div class="options">
                <div class="option" data-value="18-30">18-30 years</div>
                <div class="option" data-value="31-45">31-45 years</div>
                <div class="option" data-value="46-60">46-60 years</div>
                <div class="option" data-value="60+">60+ years</div>
            </div>
        </div>

        <div class="question">
            <h3>How often do you experience ED symptoms?</h3>
            <div class="options">
                <div class="option" data-value="rarely">Rarely</div>
                <div class="option" data-value="sometimes">Sometimes</div>
                <div class="option" data-value="often">Often</div>
                <div class="option" data-value="always">Almost Always</div>
            </div>
        </div>

        <div class="question">
            <h3>Have you tried ED medication before?</h3>
            <div class="options">
                <div class="option" data-value="no">No, never</div>
                <div class="option" data-value="yes-some">Yes, with some success</div>
                <div class="option" data-value="yes-no">Yes, but without success</div>
            </div>
        </div>

        <button class="submit-button">See Your Results</button>
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
            const options = document.querySelectorAll('.option');
            options.forEach(option => {
                option.addEventListener('click', function() {
                    const parent = this.closest('.options');
                    parent.querySelectorAll('.option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    this.classList.add('selected');
                });
            });

            const submitButton = document.querySelector('.submit-button');
            if (submitButton) {
                submitButton.onclick = function(e) {
                    e.preventDefault();
                    return gtag_report_conversion('${mergedData.offerUrl}');
                };
            }
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