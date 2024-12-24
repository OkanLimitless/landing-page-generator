// Predefined professional font combinations
const fontSets = [
  {
    primary: 'Inter',
    url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
  },
  {
    primary: 'Roboto',
    url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
  },
  {
    primary: 'Source Sans Pro',
    url: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap'
  },
  {
    primary: 'Montserrat',
    url: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
  },
  {
    primary: 'Nunito Sans',
    url: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap'
  }
];

// Professional color schemes
const colorSchemes = [
  {
    name: 'Ocean',
    background: '#17203f',
    primary: '#4a90e2',
    accent: '#64ffda',
    text: '#ffffff',
    buttonGradient: 'linear-gradient(45deg, #4a90e2, #64ffda)'
  },
  {
    name: 'Sunset',
    background: '#1a1a2e',
    primary: '#e94560',
    accent: '#ffd700',
    text: '#ffffff',
    buttonGradient: 'linear-gradient(45deg, #e94560, #ffd700)'
  },
  {
    name: 'Forest',
    background: '#1b2f1b',
    primary: '#50c878',
    accent: '#90ee90',
    text: '#ffffff',
    buttonGradient: 'linear-gradient(45deg, #50c878, #90ee90)'
  },
  {
    name: 'Royal',
    background: '#1a1b3a',
    primary: '#7c5ce0',
    accent: '#a991f7',
    text: '#ffffff',
    buttonGradient: 'linear-gradient(45deg, #7c5ce0, #a991f7)'
  },
  {
    name: 'Coral',
    background: '#2d142c',
    primary: '#ff6b6b',
    accent: '#ffd93d',
    text: '#ffffff',
    buttonGradient: 'linear-gradient(45deg, #ff6b6b, #ffd93d)'
  }
];

// CTA text variations
const ctaVariations = [
  'Watch FREE Video Guide Now',
  'Get Your FREE Video Guide',
  'Access Video Guide Now - FREE',
  'Watch Video Guide (Free Access)',
  'Start Free Video Training Now',
  'Begin Free Video Guide Now',
  'Get Instant FREE Access',
  'Watch Your FREE Guide Now'
];

// Meta description variations
const metaDescriptionTemplates = [
  'Discover {topic} with our comprehensive video guide. Learn proven strategies and techniques for {benefit}. Watch free training now!',
  'Transform your approach to {topic}. Our expert video guide reveals exclusive methods for {benefit}. Access free guide today!',
  'Master {topic} with professional insights. Learn step-by-step techniques for {benefit} in our free video presentation.',
  'Unlock the secrets of {topic}. Expert-backed strategies for {benefit} revealed in our complimentary video guide.',
  'Revolutionary {topic} techniques exposed. Watch our free video to discover how to {benefit} effectively.'
];

// Schema.org variations
const schemaTypes = [
  'VideoObject',
  'Course',
  'LearningResource',
  'HowTo',
  'WebPage'
];

// Generate random string for IDs
function generateRandomId(prefix = 'el') {
  return `${prefix}_${Math.random().toString(36).substring(2, 9)}`;
}

// Get random item from array
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Generate meta description
function generateMetaDescription(topic, benefit) {
  const template = getRandomItem(metaDescriptionTemplates);
  return template
    .replace('{topic}', topic)
    .replace('{benefit}', benefit);
}

// Generate schema markup
function generateSchema(data, type) {
  const schemaType = type || getRandomItem(schemaTypes);
  // Implementation varies based on type
  // This is a basic example
  return {
    '@context': 'https://schema.org',
    '@type': schemaType,
    'name': data.headline,
    'description': data.description.split('\n')[0]
  };
}

// Generate viewport settings
function generateViewport() {
  const viewportOptions = [
    'width=device-width, initial-scale=1.0',
    'width=device-width, initial-scale=1.0, viewport-fit=cover',
    'width=device-width, initial-scale=1.0, user-scalable=no',
    'width=device-width, initial-scale=1.0, minimum-scale=1.0'
  ];
  return getRandomItem(viewportOptions);
}

// Generate robots meta content
function generateRobotsMeta() {
  const robotsOptions = [
    'index, follow',
    'index, follow, max-snippet:-1',
    'index, follow, max-image-preview:large',
    'index, follow, max-snippet:-1, max-image-preview:large'
  ];
  return getRandomItem(robotsOptions);
}

export {
  fontSets,
  colorSchemes,
  ctaVariations,
  generateRandomId,
  getRandomItem,
  generateMetaDescription,
  generateSchema,
  generateViewport,
  generateRobotsMeta
};