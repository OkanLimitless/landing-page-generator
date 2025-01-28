import { getRandomStyle } from '../utils/style-variations';

export const generatePrivacyPolicy = () => {
  const styles = getRandomStyle();
  const ids = {
    container: `container_${Math.random().toString(36).substr(2, 9)}`,
    content: `content_${Math.random().toString(36).substr(2, 9)}`,
    footer: `footer_${Math.random().toString(36).substr(2, 9)}`
  };

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Privacy Policy</title>
      ${styles.fonts.urls.map(url => `<link href="${url}" rel="stylesheet">`).join('\n')}
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

        #${ids.container} {
          width: 90%;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        h1, h2 {
          font-family: ${styles.fonts.heading};
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        h1 { font-size: 2.5rem; }
        h2 { font-size: 1.8rem; margin-top: 2rem; }

        p, ul { margin-bottom: 1rem; }
        
        ul { padding-left: 2rem; }
        
        #${ids.footer} {
          text-align: center;
          padding: 20px;
          margin-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
        }
      </style>
    </head>
    <body>
      <div id="${ids.container}">
        <h1>Privacy Policy</h1>
        
        <p>Last updated: ${new Date().toLocaleDateString()}</p>

        <h2>Information We Collect</h2>
        <p>We collect information that you provide directly to us, including when you:</p>
        <ul>
          <li>Register for our services</li>
          <li>Make a purchase</li>
          <li>Sign up for our newsletter</li>
          <li>Contact us for support</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Process your transactions</li>
          <li>Send you marketing communications (with your consent)</li>
          <li>Improve our services</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
        <ul>
          <li>Service providers who assist in our operations</li>
          <li>Law enforcement when required by law</li>
        </ul>

        <div id="${ids.footer}">
          <p>© ${new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </body>
    </html>`;
};

export const generateTermsOfService = () => {
  const styles = getRandomStyle();
  const ids = {
    container: `container_${Math.random().toString(36).substr(2, 9)}`,
    content: `content_${Math.random().toString(36).substr(2, 9)}`,
    footer: `footer_${Math.random().toString(36).substr(2, 9)}`
  };

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Terms of Service</title>
      ${styles.fonts.urls.map(url => `<link href="${url}" rel="stylesheet">`).join('\n')}
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

        #${ids.container} {
          width: 90%;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        h1, h2 {
          font-family: ${styles.fonts.heading};
          color: var(--primary);
          margin-bottom: 1.5rem;
        }

        h1 { font-size: 2.5rem; }
        h2 { font-size: 1.8rem; margin-top: 2rem; }

        p, ul { margin-bottom: 1rem; }
        
        ul { padding-left: 2rem; }
        
        #${ids.footer} {
          text-align: center;
          padding: 20px;
          margin-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
        }
      </style>
    </head>
    <body>
      <div id="${ids.container}">
        <h1>Terms of Service</h1>
        
        <p>Last updated: ${new Date().toLocaleDateString()}</p>

        <h2>Agreement to Terms</h2>
        <p>By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.</p>

        <h2>Use License</h2>
        <p>Permission is granted to temporarily access the materials on our website for personal, non-commercial use only.</p>

        <h2>Disclaimer</h2>
        <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation:</p>
        <ul>
          <li>Implied warranties or conditions of merchantability</li>
          <li>Fitness for a particular purpose</li>
          <li>Non-infringement of intellectual property</li>
        </ul>

        <h2>Limitations</h2>
        <p>In no event shall we or our suppliers be liable for any damages arising out of the use or inability to use our materials.</p>

        <div id="${ids.footer}">
          <p>© ${new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </body>
    </html>`;
}; 