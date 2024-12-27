const colors = {
  accents: [
    { primary: '#ffd700', secondary: '#ff9d00', text: '#000000' },  // Gold
    { primary: '#4a90e2', secondary: '#357abd', text: '#ffffff' },  // Ocean
    { primary: '#50c878', secondary: '#3da75c', text: '#ffffff' },  // Emerald
    { primary: '#e94560', secondary: '#c13850', text: '#ffffff' },  // Ruby
    { primary: '#9b59b6', secondary: '#8e44ad', text: '#ffffff' }   // Amethyst
  ],
  backgrounds: [
    { main: '#17203f', overlay: 'linear-gradient(45deg, #17203f, #1c2951)' },
    { main: '#1a1a2e', overlay: 'linear-gradient(135deg, #1a1a2e, #16213e)' },
    { main: '#1b2f1b', overlay: 'linear-gradient(90deg, #1b2f1b, #243524)' },
    { main: '#2d142c', overlay: 'linear-gradient(180deg, #2d142c, #391a39)' }
  ]
};

const fonts = [
  {
    heading: "'Plus Jakarta Sans', sans-serif",
    body: "'Inter', sans-serif",
    weights: { heading: 700, body: 400 },
    urls: [
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap'
    ]
  },
  {
    heading: "'Outfit', sans-serif",
    body: "'Source Sans Pro', sans-serif",
    weights: { heading: 600, body: 400 },
    urls: [
      'https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap'
    ]
  }
];

const buttonStyles = {
  base: [
    (colors) => `
      background: ${colors.primary};
      color: ${colors.text};
      box-shadow: 0 4px 15px ${colors.primary}40;
      transform-origin: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    `,
    (colors) => `
      background: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
      color: ${colors.text};
      box-shadow: 0 4px 15px ${colors.primary}30;
      transition: all 0.3s ease;
    `,
    (colors) => `
      background: linear-gradient(135deg, ${colors.secondary}, ${colors.primary}, ${colors.secondary});
      background-size: 200% auto;
      color: ${colors.text};
      box-shadow: 0 4px 15px ${colors.primary}30;
      transition: all 0.3s ease;
    `
  ],
  hover: [
    (colors) => `
      transform: translateY(-2px);
      box-shadow: 0 6px 20px ${colors.primary}60;
    `,
    (colors) => `
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 6px 25px ${colors.primary}50;
    `,
    (colors) => `
      background-position: right center;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px ${colors.primary}50;
    `
  ]
};

const imageStyles = [
  `
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
  `,
  `
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  `,
  `
    border-radius: 20px;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  `
];

const containerStyles = [
  { maxWidth: '800px', padding: '40px 20px' },
  { maxWidth: '850px', padding: '35px 25px' },
  { maxWidth: '900px', padding: '30px 30px' }
];

const getRandomVariation = (variations, defaultValue = null) => {
  try {
    if (!variations || !Array.isArray(variations) || variations.length === 0) {
      console.warn('Invalid variations array, using default:', defaultValue);
      return defaultValue;
    }
    return variations[Math.floor(Math.random() * variations.length)];
  } catch (error) {
    console.error('Error in getRandomVariation:', error);
    return defaultValue;
  }
};

const getRandomStyle = () => {
  try {
    const styleIndex = Math.floor(Math.random() * buttonStyles.base.length);
    const accent = getRandomVariation(colors.accents, colors.accents[0]);
    const background = getRandomVariation(colors.backgrounds, colors.backgrounds[0]);
    const font = getRandomVariation(fonts, fonts[0]);
    const image = getRandomVariation(imageStyles, imageStyles[0]);
    const container = getRandomVariation(containerStyles, containerStyles[0]);

    const buttonBase = buttonStyles.base[styleIndex];
    const buttonHover = buttonStyles.hover[styleIndex];

    return {
      colors: accent,
      background,
      fonts: font,
      button: (colors) => buttonBase(colors || accent),
      buttonHover: (colors) => `.cta-button:hover { ${buttonHover(colors || accent)} }`,
      image,
      container,
      borderRadius: '12px',
      spacing: {
        vertical: '1.5rem',
        horizontal: '1rem'
      }
    };
  } catch (error) {
    console.error('Error in getRandomStyle:', error);
    return null;
  }
};

export { getRandomStyle, getRandomVariation, colors, fonts, buttonStyles, imageStyles, containerStyles };
