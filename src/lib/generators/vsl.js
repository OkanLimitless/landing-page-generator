import { getRandomStyle } from '../utils/style-variations';

const generateVSLPage = (data) => {
  // Previous code remains the same
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        ${/* Previous head content */}
    </head>
    <body>
        <main id="${ids.container}">
            <h1 class="headline">
                ${data.headline.split(':')[0]}:
                <span class="highlight">${data.headline.split(':')[1] || ''}</span>
            </h1>

            <div 
                id="${ids.video}" 
                onclick="window.location.href='${data.offerUrl}'; gtag_report_conversion();"
                role="button"
                tabindex="0"
            >
                <img src="${data.thumbnailUrl}" alt="${data.headline}">
            </div>

            <a 
                href="${data.offerUrl}" 
                class="cta-button"
                onclick="gtag_report_conversion();"
            >
                ${data.ctaText || 'Watch FREE Video Guide Now'}
            </a>

            <div class="description">
                ${data.description.split('\n').map(p => `<p>${p}</p>`).join('')}
            </div>

            <a 
                href="${data.offerUrl}" 
                class="cta-button"
                onclick="gtag_report_conversion();"
            >
                ${data.ctaText || 'Watch FREE Video Guide Now'}
            </a>
        </main>

        <footer id="${ids.footer}">
            <div class="container">
                <div class="footer-links">
                    <a href="privacy.html">Privacy Policy</a>
                    <a href="terms.html">Terms of Service</a>
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
};

export default generateVSLPage;