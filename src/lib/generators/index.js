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
            body {
                margin: 0;
                font-family: 'Inter', sans-serif;
                line-height: 1.6;
                color: #fff;
                background: #17203f;
            }

            .container {
                max-width: 800px;
                margin: 0 auto;
                padding: 40px 20px;
                text-align: center;
            }

            .headline {
                font-size: 2.5rem;
                font-weight: 700;
                margin-bottom: 2rem;
                line-height: 1.2;
            }

            .headline span {
                color: #ffd700;
                display: block;
                font-size: 3rem;
            }

            .video-container {
                max-width: 700px;
                margin: 2rem auto;
                aspect-ratio: 16/9;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            }

            .cta-button {
                display: inline-block;
                background: #ffd700;
                color: #000;
                padding: 1rem 2rem;
                font-size: 1.5rem;
                font-weight: 600;
                text-decoration: none;
                border-radius: 50px;
                margin: 2rem 0;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
                width: 80%;
                max-width: 500px;
            }

            .cta-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
            }

            .description {
                font-size: 1.1rem;
                line-height: 1.8;
                margin: 2rem auto;
                max-width: 700px;
                color: #fff;
                text-align: left;
            }

            .description p {
                margin-bottom: 1rem;
            }

            .footer {
                background: rgba(255, 255, 255, 0.05);
                padding: 2rem 0;
                margin-top: 4rem;
                text-align: center;
                font-size: 0.875rem;
                color: rgba(255, 255, 255, 0.7);
            }

            .footer-links {
                margin: 1rem 0;
            }

            .footer-links a {
                color: rgba(255, 255, 255, 0.7);
                text-decoration: none;
                margin: 0 1rem;
            }

            .footer-links a:hover {
                color: #fff;
            }

            .footer-disclaimer {
                max-width: 600px;
                margin: 1rem auto;
                font-size: 0.75rem;
                line-height: 1.5;
                color: rgba(255, 255, 255, 0.5);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1 class="headline">
                ${data.headline.split(':')[0]}:
                <span>${data.headline.split(':')[1] || ''}</span>
            </h1>

            <div class="video-container">
                <img src="${data.thumbnailUrl}" alt="Preview" style="width: 100%; height: 100%; object-fit: cover;">
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
        </div>

        <footer class="footer">
            <div class="container">
                <div class="footer-links">
                    <a href="#" onclick="return false;">Privacy Policy</a>
                    <a href="#" onclick="return false;">Terms of Service</a>
                    <a href="#" onclick="return false;">Support</a>
                </div>
                <div class="footer-disclaimer">
                    This website is not affiliated with, endorsed by, or sponsored by Google, YouTube, 
                    or any of their affiliates. All product names, logos, and brands are property of 
                    their respective owners. All company, product and service names used in this website 
                    are for identification purposes only.
                </div>
                <div>&copy; ${new Date().getFullYear()} All rights reserved</div>
                <div style="margin-top: 1rem;">
                    Please consult a health professional before implementing any strategy discussed on this 
                    website.
                </div>
            </div>
        </footer>
    </body>
    </html>
  `;
}

export function generateProductPage(data) {
  const [gtagAccount, gtagConversion] = (data.gtagId || '').split('/');
  const features = data.features.split('\n').filter(Boolean);
  const images = data.productImages.split(',').map(url => url.trim());

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.productName}</title>
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
            body {
                margin: 0;
                font-family: 'Inter', sans-serif;
                line-height: 1.6;
                color: #fff;
                background: #17203f;
            }

            .container {
                max-width: 800px;
                margin: 0 auto;
                padding: 40px 20px;
                text-align: center;
            }

            .headline {
                font-size: 2.5rem;
                font-weight: 700;
                margin-bottom: 2rem;
                line-height: 1.2;
            }

            .price {
                font-size: 2.5rem;
                color: #ffd700;
                font-weight: 700;
                margin: 2rem 0;
            }

            .features {
                text-align: left;
                margin: 2rem auto;
                max-width: 600px;
            }

            .feature-item {
                margin-bottom: 1rem;
                padding-left: 2rem;
                position: relative;
            }

            .feature-item:before {
                content: '✓';
                position: absolute;
                left: 0;
                color: #ffd700;
                font-weight: bold;
            }

            .cta-button {
                display: inline-block;
                background: #ffd700;
                color: #000;
                padding: 1rem 2rem;
                font-size: 1.5rem;
                font-weight: 600;
                text-decoration: none;
                border-radius: 50px;
                margin: 2rem 0;
                transition: all 0.3s ease;
                box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
                width: 80%;
                max-width: 500px;
            }

            .cta-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
            }

            .product-images {
                display: grid;
                gap: 1rem;
                margin: 2rem 0;
            }

            .product-image {
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            }

            .footer {
                background: rgba(255, 255, 255, 0.05);
                padding: 2rem 0;
                margin-top: 4rem;
                text-align: center;
                font-size: 0.875rem;
                color: rgba(255, 255, 255, 0.7);
            }

            .footer-links {
                margin: 1rem 0;
            }

            .footer-links a {
                color: rgba(255, 255, 255, 0.7);
                text-decoration: none;
                margin: 0 1rem;
            }

            .footer-links a:hover {
                color: #fff;
            }

            .footer-disclaimer {
                max-width: 600px;
                margin: 1rem auto;
                font-size: 0.75rem;
                line-height: 1.5;
                color: rgba(255, 255, 255, 0.5);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1 class="headline">${data.productName}</h1>
            <div class="price">$${data.price}</div>

            <div class="product-images">
                ${images.map(url => `
                    <div class="product-image">
                        <img src="${url}" alt="${data.productName}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                `).join('')}
            </div>

            <a 
                href="${data.offerUrl}" 
                class="cta-button"
                ${gtagConversion ? `onclick="return gtag_report_conversion('${data.offerUrl}');"` : ''}
            >
                Get Instant Access Now
            </a>

            <div class="features">
                ${features.map(feature => `
                    <div class="feature-item">${feature}</div>
                `).join('')}
            </div>

            <a 
                href="${data.offerUrl}" 
                class="cta-button"
                ${gtagConversion ? `onclick="return gtag_report_conversion('${data.offerUrl}');"` : ''}
            >
                Get Instant Access Now
            </a>
        </div>

        <footer class="footer">
            <div class="container">
                <div class="footer-links">
                    <a href="#" onclick="return false;">Privacy Policy</a>
                    <a href="#" onclick="return false;">Terms of Service</a>
                    <a href="#" onclick="return false;">Support</a>
                </div>
                <div class="footer-disclaimer">
                    This website is not affiliated with, endorsed by, or sponsored by Google, YouTube, 
                    or any of their affiliates. All product names, logos, and brands are property of 
                    their respective owners. All company, product and service names used in this website 
                    are for identification purposes only.
                </div>
                <div>&copy; ${new Date().getFullYear()} All rights reserved</div>
            </div>
        </footer>
    </body>
    </html>
  `;
}