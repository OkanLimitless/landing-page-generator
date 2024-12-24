// Layout variations
export const layouts = {
  vsl: [
    'centered-video',
    'side-content',
    'minimal',
    'hero-style',
    'two-column'
  ],
  product: [
    'gallery-left',
    'gallery-right',
    'full-width',
    'grid-layout',
    'masonry'
  ]
};

// Font combinations
export const fontPairs = [
  { heading: 'Poppins', body: 'Inter' },
  { heading: 'Montserrat', body: 'Open Sans' },
  { heading: 'Playfair Display', body: 'Roboto' },
  { heading: 'Oswald', body: 'Lato' },
  { heading: 'DM Sans', body: 'DM Sans' }
];

// Color schemes
export const colorSchemes = [
  { primary: '#2563eb', secondary: '#e11d48', accent: '#0891b2' },
  { primary: '#7c3aed', secondary: '#db2777', accent: '#059669' },
  { primary: '#0f766e', secondary: '#9333ea', accent: '#ca8a04' },
  { primary: '#be123c', secondary: '#1d4ed8', accent: '#15803d' }
];

// Loading strategies
export const resourceLoading = [
  { strategy: 'async', viewport: 'width=device-width, initial-scale=1' },
  { strategy: 'defer', viewport: 'width=device-width, initial-scale=1, maximum-scale=1' },
  { strategy: 'preload', viewport: 'width=device-width, initial-scale=0.86, maximum-scale=5.0' }
];

// Trust elements
export const trustElements = [
  'satisfaction-guarantee',
  'money-back-guarantee',
  'secure-checkout',
  'ssl-encrypted',
  'customer-reviews',
  'testimonials',
  'authority-badges',
  'payment-logos'
];

// Generate random selections
export const getRandomLayout = (type) => layouts[type][Math.floor(Math.random() * layouts[type].length)];
export const getRandomFonts = () => fontPairs[Math.floor(Math.random() * fontPairs.length)];
export const getRandomColors = () => colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
export const getRandomLoading = () => resourceLoading[Math.floor(Math.random() * resourceLoading.length)];
export const getRandomTrustElements = (count = 3) => {
  const shuffled = [...trustElements].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Schema markup generator
export const generateSchemaMarkup = (data, type = 'Product') => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type
  };

  switch(type) {
    case 'Product':
      return {
        ...baseSchema,
        name: data.title,
        description: data.description,
        image: data.images?.[0],
        offers: {
          '@type': 'Offer',
          price: data.price,
          priceCurrency: data.currency || 'USD',
          availability: 'https://schema.org/InStock'
        }
      };
    case 'VideoObject':
      return {
        ...baseSchema,
        name: data.title,
        description: data.description,
        thumbnailUrl: data.thumbnail,
        uploadDate: new Date().toISOString()
      };
    default:
      return baseSchema;
  }
};