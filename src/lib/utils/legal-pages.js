export const generatePrivacyPage = (styles, name = 'Company') => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy</title>
    ${styles.fonts.urls.map(url => `<link href="${url}" rel="stylesheet">`).join('\n    ')}
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: ${styles.fonts.body};
            line-height: 1.6;
            color: #fff;
            background: ${styles.background.main};
            background-image: ${styles.background.overlay};
        }

        .container {
            max-width: ${styles.container.maxWidth};
            margin: 0 auto;
            padding: ${styles.container.padding};
        }

        h1 {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            color: ${styles.colors.primary};
            margin-bottom: 2rem;
        }

        .content {
            background: rgba(255, 255, 255, 0.05);
            padding: 2rem;
            border-radius: ${styles.borderRadius};
        }

        h2 {
            color: ${styles.colors.primary};
            margin-top: 2rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Privacy Policy</h1>
        <div class="content">
            <p>This Privacy Policy describes how ${name} collects and uses the personal information you provide on our website. It also describes the choices available to you regarding our use of your personal information and how you can access and update this information.</p>

            <h2>Information Collection</h2>
            <p>We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, respond to a survey, or fill out a form.</p>

            <h2>Information Usage</h2>
            <p>Any information we collect from you may be used in one of the following ways:</p>
            <ul>
                <li>To personalize your experience</li>
                <li>To improve our website</li>
                <li>To improve customer service</li>
                <li>To process transactions</li>
                <li>To send periodic emails</li>
            </ul>

            <h2>Information Protection</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>

            <h2>Cookie Usage</h2>
            <p>We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction.</p>

            <h2>Third Party Disclosure</h2>
            <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you.</p>

            <h2>Contact Information</h2>
            <p>If you have any questions regarding this privacy policy, you may contact us using the information below:</p>
            <p>Email: contact@domain.com</p>
        </div>
    </div>
</body>
</html>`;

export const generateTermsPage = (styles, name = 'Company') => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms of Service</title>
    ${styles.fonts.urls.map(url => `<link href="${url}" rel="stylesheet">`).join('\n    ')}
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: ${styles.fonts.body};
            line-height: 1.6;
            color: #fff;
            background: ${styles.background.main};
            background-image: ${styles.background.overlay};
        }

        .container {
            max-width: ${styles.container.maxWidth};
            margin: 0 auto;
            padding: ${styles.container.padding};
        }

        h1 {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            color: ${styles.colors.primary};
            margin-bottom: 2rem;
        }

        .content {
            background: rgba(255, 255, 255, 0.05);
            padding: 2rem;
            border-radius: ${styles.borderRadius};
        }

        h2 {
            color: ${styles.colors.primary};
            margin-top: 2rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Terms of Service</h1>
        <div class="content">
            <p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use.</p>

            <h2>Website Usage</h2>
            <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</p>

            <h2>Disclaimer</h2>
            <p>The information contained in this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability or availability of the information, products, services, or related graphics contained on the website.</p>

            <h2>Results Disclaimer</h2>
            <p>Individual results may vary. The testimonials and examples used are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual's success depends on their background, dedication, desire, and motivation.</p>

            <h2>Medical Disclaimer</h2>
            <p>The information provided on this site is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have.</p>

            <h2>Copyright Notice</h2>
            <p>This website and its content is copyright of ${name}. All rights reserved. Any redistribution or reproduction of part or all of the contents in any form is prohibited.</p>

            <h2>Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts.</p>
        </div>
    </div>
</body>
</html>`;