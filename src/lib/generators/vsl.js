import { designSystem } from '../utils/design-system';
import { variations } from '../utils/variations';

export function generateVSLPage(data) {
  const { theme, font, uniqueIds } = data;
  const [gtagAccount, gtagConversion] = (data.gtagId || '').split('/');

  // Get random variations
  const contentStructure = variations.getRandomVariation(variations.contentStructures);
  const mediaContainer = variations.getRandomVariation(variations.mediaContainers);
  const ctaButton = variations.getRandomVariation(variations.ctaButtons);
  const footer = variations.getRandomVariation(variations.footers);

  // Generate Google Ads conversion tracking
  const gtagScript = gtagAccount ? `
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
  ` : '';

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.headline}</title>
      
      <link href="${font.url}" rel="stylesheet">
      ${data.trackingScript || ''}
      
      ${gtagAccount ? `
        <script async src="https://www.googletagmanager.com/gtag/js?id=${gtagAccount}"></script>
        <script>${gtagScript}</script>
      ` : ''}
      
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: '${font.name}', sans-serif;
          line-height: 1.6;
          color: ${theme.textPrimary};
          background: ${theme.background};
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        #${uniqueIds.container} {
          width: 90%;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .headline {
          font-size: clamp(1.8rem, 5vw, 2.5rem);
          font-weight: 700;
          margin: 2rem auto;
          line-height: 1.2;
          text-align: center;
          max-width: 800px;
          color: ${theme.accent};
        }

        #${uniqueIds.video} {
          width: 100%;
          max-width: 700px;
          margin: 2rem auto;
          aspect-ratio: 16/9;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        #${uniqueIds.video}:hover {
          transform: translateY(-2px);
        }

        #${uniqueIds.video} img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        #${uniqueIds.cta} {
          display: block;
          background: ${theme.buttonGradient};
          color: ${theme.buttonText};
          padding: 1rem 2rem;
          font-size: clamp(1.2rem, 4vw, 1.5rem);
          font-weight: 600;
          text-decoration: none;
          border-radius: 50px;
          margin: 2rem auto;
          text-align: center;
          width: 90%;
          max-width: 500px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        #${uniqueIds.cta}:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .description {
          font-size: clamp(1rem, 3vw, 1.1rem);
          line-height: 1.8;
          margin: 2rem auto;
          max-width: 700px;
          color: ${theme.textPrimary};
          text-align: left;
        }

        .description p {
          margin-bottom: 1.5rem;
        }

        .footer {
          margin-top: auto;
          padding: 2rem 0;
          text-align: center;
          color: ${theme.textSecondary};
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .footer a {
          color: ${theme.textSecondary};
          text-decoration: none;
          margin: 0 1rem;
        }

        @media (max-width: 768px) {
          #${uniqueIds.container} {
            width: 95%;
            padding: 20px;
          }

          #${uniqueIds.cta} {
            width: 95%;
            padding: 1rem;
          }

          .description {
            padding: 0 15px;
          }
        }
      </style>
    </head>
    <body>
      ${contentStructure({
        mainClass: uniqueIds.container,
        headerClass: 'header',
        contentClass: 'content',
        footerClass: 'footer',
        header: `
          <h1 class="headline">${data.headline}</h1>
        `,
        body: `
          ${mediaContainer({
            containerClass: uniqueIds.video,
            imageClass: 'thumbnail',
            src: data.thumbnailUrl,
            alt: data.headline,
            onClick: gtagConversion ? `onclick="return gtag_report_conversion('${data.offerUrl}');"` : `onclick="window.location.href='${data.offerUrl}';"`
          })}
          
          ${ctaButton({
            url: data.offerUrl,
            class: uniqueIds.cta,
            text: data.ctaText || 'Watch FREE Video Guide Now',
            onClick: gtagConversion ? `return gtag_report_conversion('${data.offerUrl}');` : ''
          })}
          
          <div class="description">
            ${data.description.split('\n').map(p => `<p>${p}</p>`).join('')}
          </div>
          
          ${ctaButton({
            url: data.offerUrl,
            class: uniqueIds.cta,
            text: data.ctaText || 'Watch FREE Video Guide Now',
            onClick: gtagConversion ? `return gtag_report_conversion('${data.offerUrl}');` : ''
          })}
        `,
        footer: footer({
          links: `
            <a href="#" onclick="return false;">Privacy</a>
            <a href="#" onclick="return false;">Terms</a>
          `,
          disclaimer: `
            This site is not a part of Google, Inc. or Google.com, nor is it sponsored or endorsed by Google. 
            YouTube is a trademark of Google Inc.
            <br>
            Please consult a health professional before implementing any strategy discussed on this website.
          `
        })
      })}
    </body>
    </html>
  `;
}