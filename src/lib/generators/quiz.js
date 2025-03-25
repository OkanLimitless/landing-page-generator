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
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A" />
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
        background: #f8f9fa;
        min-height: 100vh;
      }

      .quiz-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        position: relative;
      }

      .quiz-header {
        text-align: center;
        margin-bottom: 2rem;
        padding: 1rem;
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
      }

      .quiz-title {
        font-family: ${styles.fonts.heading};
        font-size: 2rem;
        color: var(--primary);
        margin-bottom: 0.5rem;
      }

      .progress-container {
        width: 100%;
        height: 6px;
        background: #e9ecef;
        border-radius: 3px;
        margin: 1rem 0;
        overflow: hidden;
      }

      .progress-bar {
        height: 100%;
        background: var(--primary);
        width: 0;
        transition: width 0.3s ease;
      }

      .question {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        margin-bottom: 1rem;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
      }

      .question.active {
        opacity: 1;
        transform: translateY(0);
      }

      .question h3 {
        font-size: 1.5rem;
        color: var(--primary);
        margin-bottom: 1rem;
      }

      .options {
        display: grid;
        gap: 1rem;
      }

      .option {
        padding: 1.2rem;
        background: #f8f9fa;
        border: 2px solid #e9ecef;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1.1rem;
      }

      .option:hover {
        border-color: var(--primary);
        background: #fff;
        transform: translateY(-2px);
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
        padding: 1.2rem;
        margin-top: 2rem;
        font-size: 1.2rem;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255,255,255,0.95);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }

      .loading-overlay.active {
        display: flex;
      }

      .loading-content {
        text-align: center;
      }

      .loading-title {
        font-size: 2rem;
        color: var(--primary);
        margin-bottom: 2rem;
      }

      .loading-steps {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .loading-step {
        display: flex;
        align-items: center;
        gap: 1rem;
        opacity: 0.5;
        transition: opacity 0.3s ease;
      }

      .loading-step.active {
        opacity: 1;
      }

      .loading-step .checkmark {
        width: 24px;
        height: 24px;
        background: var(--primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        opacity: 0;
        transform: scale(0);
        transition: all 0.3s ease;
      }

      .loading-step.active .checkmark {
        opacity: 1;
        transform: scale(1);
      }

      .results-section {
        display: none;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
      }

      .results-section.active {
        display: block;
        opacity: 1;
        transform: translateY(0);
      }

      .results-title {
        text-align: center;
        font-size: 2rem;
        color: var(--primary);
        margin-bottom: 2rem;
      }

      .products-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
      }

      .product-card {
        background: white;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        transition: all 0.3s ease;
      }

      .product-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 20px rgba(0,0,0,0.1);
      }

      .product-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .product-info {
        padding: 1.5rem;
      }

      .product-name {
        font-size: 1.5rem;
        color: var(--primary);
        margin-bottom: 0.5rem;
      }

      .product-description {
        color: #666;
        margin-bottom: 1rem;
      }

      .product-button {
        ${styles.button(styles.colors)}
        display: block;
        width: 100%;
        padding: 1rem;
        text-align: center;
        text-decoration: none;
        border-radius: 6px;
      }

      ${styles.buttonHover ? styles.buttonHover(styles.colors) : ''}
    </style>
</head>
<body>
    <div class="quiz-container" id="${ids.quizForm}">
        <div class="quiz-header">
            <h1 class="quiz-title">ED Treatment Qualification Quiz</h1>
            <p>Answer a few quick questions to find your perfect solution</p>
            <div class="progress-container">
                <div class="progress-bar" id="progress-bar"></div>
            </div>
        </div>
        
        <div class="question active" data-step="1">
            <h3>What is your age range?</h3>
            <div class="options">
                <div class="option" data-value="18-30">18-30 years</div>
                <div class="option" data-value="31-45">31-45 years</div>
                <div class="option" data-value="46-60">46-60 years</div>
                <div class="option" data-value="60+">60+ years</div>
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
        </div>

        <div class="question" data-step="3">
            <h3>Have you tried ED medication before?</h3>
            <div class="options">
                <div class="option" data-value="no">No, never</div>
                <div class="option" data-value="yes-some">Yes, with some success</div>
                <div class="option" data-value="yes-no">Yes, but without success</div>
            </div>
        </div>

        <button class="submit-button">See Your Results</button>
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
        </div>
    </div>

    <div class="results-section" id="results-section">
        <h2 class="results-title">Great News! You Qualify for Our Solutions</h2>
        <p class="results-subtitle">Based on your answers, we've found the perfect treatment options for you.</p>
        
        <div class="products-grid">
            <div class="product-card">
                <img src="https://i.imgur.com/VTN5W8c.png" alt="AlphaBites" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">AlphaBites</h3>
                    <p class="product-description">Our newest formula with the benefits of both Viagra and Cialis. Works in 15 minutes, lasts for 36 hours.</p>
                    <a href="https://afflat3e1.com/trk/lnk/7EF4AD2B-B866-46E8-AE93-217072D69F31/?o=28584&c=918277&a=271469&k=C710AE04C0E95E8AF6C4BC458930795E&l=31571" class="product-button">Learn More</a>
                </div>
            </div>
            
            <div class="product-card">
                <img src="https://i.imgur.com/g5LZLPR.png" alt="Brazilian Wood" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">Brazilian Wood</h3>
                    <p class="product-description">Natural herbal formula for sustained performance. Made with premium ingredients from the Amazon rainforest.</p>
                    <a href="https://afflat3e1.com/trk/lnk/7EF4AD2B-B866-46E8-AE93-217072D69F31/?o=26286&c=918277&a=271469&k=FD40240F18D488603D3C98D218ED5998&l=32307" class="product-button">Learn More</a>
                </div>
            </div>
            
            <div class="product-card">
                <img src="https://i.imgur.com/C6UJxbC.png" alt="EndoPeak" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">EndoPeak</h3>
                    <p class="product-description">Advanced formula designed to maximize blood flow and enhance sensitivity. Clinically tested for optimal results.</p>
                    <a href="https://endopeak24.com/b/order-now.php?aff_id=130095" class="product-button">Learn More</a>
                </div>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const questions = document.querySelectorAll('.question');
            const options = document.querySelectorAll('.option');
            const submitButton = document.querySelector('.submit-button');
            const loadingOverlay = document.getElementById('loading-overlay');
            const resultsSection = document.getElementById('results-section');
            const progressBar = document.getElementById('progress-bar');
            let currentStep = 1;

            // Update progress bar
            function updateProgress() {
                const progress = ((currentStep - 1) / (questions.length - 1)) * 100;
                progressBar.style.width = progress + '%';
            }

            // Handle option selection
            options.forEach(option => {
                option.addEventListener('click', function() {
                    const currentQuestion = this.closest('.question');
                    const options = currentQuestion.querySelectorAll('.option');
                    
                    options.forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');
                    
                    // Move to next question
                    setTimeout(() => {
                        if (currentStep < questions.length) {
                            currentQuestion.classList.remove('active');
                            currentStep++;
                            questions[currentStep - 1].classList.add('active');
                            updateProgress();
                        }
                    }, 300);
                });
            });

            // Handle submit button
            submitButton.addEventListener('click', function() {
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
                    resultsSection.classList.add('active');
                }, 4000);
            });

            // Track product clicks
            document.querySelectorAll('.product-button').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const url = this.getAttribute('href');
                    
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'conversion', {
                            'send_to': '${gtagAccount}/${gtagLabel}',
                            'value': 1.0,
                            'currency': 'EUR',
                            'event_callback': function() {
                                window.location = url;
                            }
                        });
                    } else {
                        window.location = url;
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