// Privacy policy content variations
const privacyPolicyVariations = [
  (companyName = 'we') => `
    This Privacy Policy describes how ${companyName} collect, use, and share information.
    By using this site, you agree to our use of cookies and data collection for personalized content and ads.
  `,
  (companyName = 'we') => `
    Your privacy is important to us. ${companyName} only collect essential information to improve your experience.
    This site uses cookies and similar technologies for analytics and personalization.
  `,
  (companyName = 'we') => `
    When you use our service, ${companyName} may collect certain information about your device and usage.
    This helps us provide a better experience and more relevant content.
  `
];

// Terms of service variations
const termsVariations = [
  () => `
    By accessing this website, you agree to these Terms of Service.
    All content is for informational purposes only and results may vary.
  `,
  () => `
    These Terms govern your use of our website and services.
    Individual results may vary. Consult professionals for personalized advice.
  `,
  () => `
    Use of this site constitutes acceptance of our Terms.
    Content is provided as-is without guarantees of specific results.
  `
];

// Cookie consent variations
const cookieConsentVariations = [
  () => `
    <div class="cookie-notice">
      We use cookies to enhance your experience. By continuing, you accept our use of cookies.
    </div>
  `,
  () => `
    <div class="cookie-banner">
      This site uses cookies for analytics and personalized content. Continue browsing to accept.
    </div>
  `,
  () => `
    <div class="cookie-alert">
      By using this site, you agree to our use of cookies and similar technologies.
    </div>
  `
];

// Random business information generator
function generateBusinessInfo() {
  const states = ['NY', 'CA', 'FL', 'TX', 'IL', 'PA'];
  const cities = ['New York', 'Los Angeles', 'Miami', 'Houston', 'Chicago', 'Philadelphia'];
  const streetNumbers = Array.from({length: 20}, (_, i) => (i + 1) * 100);
  const streetNames = ['Main St', 'Oak Ave', 'Maple Rd', 'Cedar Ln', 'Pine St', 'Elm Dr'];
  
  const randomIdx = Math.floor(Math.random() * states.length);
  return {
    address: `${streetNumbers[Math.floor(Math.random() * streetNumbers.length)]} ${streetNames[Math.floor(Math.random() * streetNames.length)]}`,
    city: cities[randomIdx],
    state: states[randomIdx],
    zip: Math.floor(Math.random() * 90000) + 10000,
    phone: `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
    email: `contact${Math.floor(Math.random() * 1000)}@domain.com`
  };
}

// Generate breadcrumb variations
function generateBreadcrumbs(title) {
  const variations = [
    () => ({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': '/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': title
        }
      ]
    }),
    () => ({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Resources',
          'item': '/resources'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Guides',
          'item': '/resources/guides'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': title
        }
      ]
    })
  ];
  return variations[Math.floor(Math.random() * variations.length)]();
}

// Generate social proof variations
const socialProofVariations = [
  () => `
    <div class="social-proof">
      <div class="stat">Over 10,000+ satisfied users</div>
      <div class="stat">4.8/5 average rating</div>
      <div class="stat">Featured in major publications</div>
    </div>
  `,
  () => `
    <div class="testimonials">
      <div class="testimonial">"Life-changing results" - ${['John', 'Sarah', 'Mike', 'Emma'][Math.floor(Math.random() * 4)]} ${['S.', 'M.', 'R.', 'T.'][Math.floor(Math.random() * 4)]}</div>
      <div class="users-count">Joined by ${Math.floor(Math.random() * 5000) + 5000} others this month</div>
    </div>
  `
];

// Generate trust badges
const trustBadgeVariations = [
  () => `
    <div class="trust-badges">
      <div class="badge">🔒 Secure & Confidential</div>
      <div class="badge">✓ Satisfaction Guaranteed</div>
      <div class="badge">⚡ Instant Access</div>
    </div>
  `,
  () => `
    <div class="security-badges">
      <div class="badge">🛡️ Privacy Protected</div>
      <div class="badge">✓ Quality Assured</div>
      <div class="badge">⭐ Premium Content</div>
    </div>
  `
];

export {
  privacyPolicyVariations,
  termsVariations,
  cookieConsentVariations,
  generateBusinessInfo,
  generateBreadcrumbs,
  socialProofVariations,
  trustBadgeVariations
};