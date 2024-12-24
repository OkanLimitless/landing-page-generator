// Different strategies for loading external resources
const resourceLoadingStrategies = {
  font: [
    (url) => `<link href="${url}" rel="stylesheet">`,
    (url) => `<link href="${url}" rel="stylesheet" async>`,
    (url) => `<link href="${url}" rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'">`
  ],
  script: [
    (url) => `<script src="${url}"></script>`,
    (url) => `<script src="${url}" async></script>`,
    (url) => `<script src="${url}" defer></script>`,
    (url) => `<script src="${url}" async defer></script>`
  ]
};

// Different meta viewport implementations
const viewportVariations = [
  '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
  '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">',
  '<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">',
  '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">'
];

// Different responsive design implementations
const responsiveStyleVariations = [
  // Media Queries
  `
    @media (max-width: 768px) {
      /* Mobile styles */
    }
  `,
  // Container Queries (modern browsers)
  `
    @container (max-width: 768px) {
      /* Container styles */
    }
  `,
  // Mix of both
  `
    @media (max-width: 768px) {
      /* Mobile styles */
    }
    @container (max-width: 768px) {
      /* Container styles */
    }
  `
];

// Different ways to implement JavaScript
const javascriptImplementations = [
  // Inline Script
  (code) => `<script>${code}</script>`,
  // External Script with ID
  (code) => `<script id="main-script">${code}</script>`,
  // Module Script
  (code) => `<script type="module">${code}</script>`,
  // IIFE
  (code) => `<script>(function(){${code}})();</script>`
];

// HTTP Header suggestions (to be implemented in deployment)
const recommendedHeaders = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'interest-cohort=()',
  'Content-Security-Policy': "default-src 'self' 'unsafe-inline' 'unsafe-eval' https: data: *.googletagmanager.com *.google-analytics.com;"
};

export {
  resourceLoadingStrategies,
  viewportVariations,
  responsiveStyleVariations,
  javascriptImplementations,
  recommendedHeaders
};