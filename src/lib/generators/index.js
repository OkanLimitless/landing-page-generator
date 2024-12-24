export function generateVSLPage(data) {
  const [gtagAccount, gtagConversion] = (data.gtagId || '').split('/');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.headline}</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
        ${gtagAccount ? `
        <!-- Global site tag (gtag.js) - Google Ads -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=${gtagAccount}"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtagAccount}');
            
            function gtag_report_conversion(url) {
                gtag('event', 'conversion', {
                    'send_to': '${data.gtagId}',
                    'event_callback': function() {
                        if (url) { window.location = url; }
                    }
                });
                return false;
            }
        </script>
        ` : ''}
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                margin: 0;
                font-family: 'Inter', sans-serif;
                line-height: 1.6;
                color: #fff;
                background: #17203f;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
            }

            .container {
                width: 90%;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
            }

            .headline {
                font-size: clamp(1.8rem, 5vw, 2.5rem);
                font-weight: 700;
                margin: 2rem auto;
                line-height: 1.2;
                text-align: center;
                max-width: 800px;
            }

            .highlight {
                color: #ffd700;
                display: block;
                font-size: clamp(2rem, 6vw, 3rem);
                margin: 0.5rem 0;
            }

            .video-container {
                width: 100%;
                max-width: 700px;
                margin: 2rem auto;
                aspect-ratio: 16/9;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            }

            .video-container img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }

            .cta-button {
                display: block;
                background: #ffd700;
                color: #000;
                padding: 1rem;
                font-size: clamp(1.2rem, 4vw, 1.5rem);
                font-weight: 600;
                text-decoration: none;
                border-radius: 50px;
                margin: 2rem auto;
                text-align: center;
                transition: all 0.3s ease;
                width: 90%;
                max-width: 500px;
                box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
            }

            .cta-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
            }

            .description {
                font-size: clamp(1rem, 3vw, 1.1rem);
                line-height: 1.8;
                margin: 2rem auto;
                max-width: 700px;
                color: #fff;
                padding: 0 20px;
                text-align: left;
            }

            .description p {
                margin-bottom: 1.5rem;
            }

            .footer {
                background: rgba(255, 255, 255, 0.05);
                padding: 2rem 0;
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
            }

            .footer-disclaimer {
                max-width: 600px;
                margin: 1rem auto;
                padding: 0 20px;
                font-size: clamp(0.7rem, 2vw, 0.75rem);
                line-height: 1.5;
                color: rgba(255, 255, 255, 0.5);
            }

            @media (max-width: 768px) {
                .container {
                    width: 95%;
                    padding: 15px;
                }

                .description {
                    padding: 0 15px;
                }

                .video-container {
                    margin: 1.5rem auto;
                    border-radius: 8px;
                }

                .cta-button {
                    width: 95%;
                    padding: 0.875rem;
                    margin: 1.5rem auto;
                }

                .footer {
                    text-align: center;
                }

                .footer-links {
                    justify-content: center;
                }
            }
        </style>
    </head>
    <body>
        <main class="container">
            <h1 class="headline">
                ${data.headline.split(':')[0]}:
                <span class="highlight">${data.headline.split(':')[1] || ''}</span>
            </h1>

            <div class="video-container">
                <img src="${data.thumbnailUrl}" alt="Preview">
            </div>

            <a 
                href="${data.offerUrl}" 
                class="cta-button"
                ${gtagConversion ? `onclick="return gtag_report_conversion('${data.offerUrl}');"` : ''}
            >
                Watch FREE Video Guide Now
            </a>

            <div class="description">
                ${data.description.split('\n').map(p => `<p>${p}</p>`).join('')}
            </div>

            <a 
                href="${data.offerUrl}" 
                class="cta-button"
                ${gtagConversion ? `onclick="return gtag_report_conversion('${data.offerUrl}');"` : ''}
            >
                Watch FREE Video Guide Now
            </a>
        </main>

        <footer class="footer">
            <div class="container">
                <div class="footer-links">
                    <a href="#" onclick="return false;">Privacy</a>
                    <a href="#" onclick="return false;">Terms</a>
                </div>
                <div class="footer-disclaimer">
                    This site is not a part of Google, Inc. or Google.com, nor is it sponsored or endorsed by Google. 
                    YouTube is a trademark of Google Inc.
                </div>
                <div>&copy; ${new Date().getFullYear()} All rights reserved</div>
                <div style="margin-top: 1rem;">
                    Please consult a health professional before implementing any strategy discussed on this website.
                </div>
            </div>
        </footer>
    </body>
    </html>
  `;
}