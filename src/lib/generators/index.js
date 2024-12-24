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
                color: #333;
                background: #f8f9fa;
            }

            .header {
                background: #fff;
                padding: 1rem 0;
                box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            }

            .container {
                max-width: 1000px;
                margin: 0 auto;
                padding: 0 20px;
            }

            .hero {
                padding: 4rem 0;
                background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
                text-align: center;
            }

            .hero h1 {
                font-size: 2.5rem;
                font-weight: 700;
                margin-bottom: 1.5rem;
                color: #1a1a1a;
            }

            .hero p {
                font-size: 1.25rem;
                color: #666;
                max-width: 800px;
                margin: 0 auto 2rem;
            }

            .content-section {
                padding: 4rem 0;
                background: #fff;
            }

            .video-container {
                max-width: 800px;
                margin: 0 auto 3rem;
                aspect-ratio: 16/9;
                background: #000;
                border-radius: 12px;
                overflow: hidden;
            }

            .benefits {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 2rem;
                margin-bottom: 3rem;
            }

            .benefit-card {
                background: #f8f9fa;
                padding: 1.5rem;
                border-radius: 8px;
                text-align: center;
            }

            .benefit-card h3 {
                color: #1a1a1a;
                margin: 1rem 0;
            }

            .cta-button {
                display: inline-block;
                padding: 1rem 2.5rem;
                font-size: 1.25rem;
                font-weight: 600;
                color: #fff;
                background: #2b5797;
                border-radius: 50px;
                text-decoration: none;
                transition: all 0.3s ease;
                border: none;
                cursor: pointer;
                box-shadow: 0 4px 6px rgba(43, 87, 151, 0.2);
            }

            .cta-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 8px rgba(43, 87, 151, 0.3);
            }

            .urgency-bar {
                background: #ff6b6b;
                color: #fff;
                text-align: center;
                padding: 0.75rem;
                font-weight: 500;
            }

            .trust-badges {
                display: flex;
                justify-content: center;
                gap: 2rem;
                margin: 2rem 0;
            }

            .footer {
                background: #fff;
                padding: 2rem 0;
                border-top: 1px solid rgba(0,0,0,0.1);
                text-align: center;
                color: #666;
                font-size: 0.875rem;
            }

            .footer-links {
                margin: 1rem 0;
            }

            .footer-links a {
                color: #666;
                text-decoration: none;
                margin: 0 1rem;
            }

            .footer-links a:hover {
                color: #2b5797;
            }

            .footer-disclaimer {
                max-width: 600px;
                margin: 1rem auto;
                font-size: 0.75rem;
                line-height: 1.5;
            }
        </style>
    </head>
    <body>
        <div class="urgency-bar">
            ⚡ Limited Time Offer - Don't Miss Out!
        </div>

        <header class="header">
            <div class="container">
                <div style="font-weight: 600;">Exclusive Access</div>
            </div>
        </header>

        <section class="hero">
            <div class="container">
                <h1>${data.headline}</h1>
                <p>${data.description.split('\n')[0]}</p>
            </div>
        </section>

        <section class="content-section">
            <div class="container">
                <div class="video-container">
                    <img src="${data.thumbnailUrl}" alt="Preview" style="width: 100%; height: 100%; object-fit: cover;">
                </div>

                <div class="benefits">
                    ${data.description.split('\n').slice(1).map(benefit => `
                        <div class="benefit-card">
                            <h3>✓ ${benefit}</h3>
                        </div>
                    `).join('')}
                </div>

                <div style="text-align: center;">
                    <div class="trust-badges">
                        <div>🔒 Secure Access</div>
                        <div>✓ Verified Content</div>
                        <div>⚡ Instant Access</div>
                    </div>

                    <a 
                        href="${data.offerUrl}" 
                        class="cta-button"
                        ${gtagConversion ? `onclick="return gtag_report_conversion('${data.offerUrl}');"` : ''}
                    >
                        Get Instant Access Now
                    </a>

                    <p style="margin-top: 1rem; color: #666;">👥 Over 2,347 people have already accessed this</p>
                </div>
            </div>
        </section>

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
            /* [Previous styles remain the same] */

            .product-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 4rem;
                max-width: 1200px;
                margin: 4rem auto;
                padding: 0 20px;
            }

            .product-images {
                display: grid;
                gap: 1rem;
            }

            .product-image {
                aspect-ratio: 16/9;
                border-radius: 12px;
                overflow: hidden;
            }

            .product-details h1 {
                font-size: 2.5rem;
                margin: 0 0 1rem;
            }

            .price {
                font-size: 2rem;
                font-weight: 700;
                color: #2b5797;
                margin: 1.5rem 0;
            }

            .features-list {
                margin: 2rem 0;
                padding: 0;
                list-style: none;
            }

            .features-list li {
                padding: 0.5rem 0;
                padding-left: 2rem;
                position: relative;
            }

            .features-list li:before {
                content: '✓';
                position: absolute;
                left: 0;
                color: #2b5797;
                font-weight: bold;
            }

            @media (max-width: 768px) {
                .product-grid {
                    grid-template-columns: 1fr;
                    gap: 2rem;
                }
            }
        </style>
    </head>
    <body>
        <div class="urgency-bar">
            ⚡ Special Offer - Limited Time Only!
        </div>

        <main>
            <div class="product-grid">
                <div class="product-images">
                    ${images.map(url => `
                        <div class="product-image">
                            <img src="${url}" alt="${data.productName}" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                    `).join('')}
                </div>

                <div class="product-details">
                    <h1>${data.productName}</h1>
                    <div class="price">$${data.price}</div>

                    <ul class="features-list">
                        ${features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>

                    <div style="text-align: center;">
                        <div class="trust-badges">
                            <div>🔒 Secure Checkout</div>
                            <div>✓ Money Back Guarantee</div>
                            <div>⚡ Fast Shipping</div>
                        </div>

                        <a 
                            href="javascript:void(0)" 
                            class="cta-button"
                            ${gtagConversion ? `onclick="return gtag_report_conversion('${data.offerUrl}');"` : ''}
                        >
                            Claim Your Special Offer Now
                        </a>

                        <p style="margin-top: 1rem; color: #666;">🔥 High demand - Stock running low</p>
                    </div>
                </div>
            </div>
        </main>

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