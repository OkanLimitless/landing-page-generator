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
  },
  {
    heading: "'Manrope', sans-serif",
    body: "'Work Sans', sans-serif",
    weights: { heading: 700, body: 400 },
    urls: [
      'https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500&display=swap'
    ]
  }
];

const buttonStyles = [
  (colors) => `
    background: ${colors.primary};
    color: ${colors.text};
    box-shadow: 0 4px 15px ${colors.primary}40;
    transform-origin: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px ${colors.primary}60;
    }
  `,
  (colors) => `
    background: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
    color: ${colors.text};
    box-shadow: 0 4px 15px ${colors.primary}30;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 6px 25px ${colors.primary}50;
    }
  `,
  (colors) => `
    background: linear-gradient(135deg, ${colors.secondary}, ${colors.primary}, ${colors.secondary});
    background-size: 200% auto;
    color: ${colors.text};
    box-shadow: 0 4px 15px ${colors.primary}30;
    transition: all 0.3s ease;
    &:hover {
      background-position: right center;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px ${colors.primary}50;
    }
  `
];

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

const getRandomVariation = (variations) => {
  console.log('getRandomVariation input:', variations);
  if (!Array.isArray(variations) || variations.length === 0) {
    console.error('Invalid or empty variations array:', variations);
    return null;
  }
  return variations[Math.floor(Math.random() * variations.length)];
};

const getRandomStyle = () => {
  console.log('getRandomStyle called');
  const accent = getRandomVariation(colors.accents);
  const background = getRandomVariation(colors.backgrounds);
  const font = getRandomVariation(fonts);
  const button = getRandomVariation(buttonStyles);
  const image = getRandomVariation(imageStyles);
  const container = getRandomVariation(containerStyles);

  return {
    colors: accent,
    background,
    fonts: font,
    button: (colors) => button(colors || accent),
    image,
    container,
    borderRadius: Math.floor(Math.random() * 3) * 4 + 8 + 'px',  // 8px, 12px, or 16px
    spacing: {
      vertical: Math.floor(Math.random() * 3) * 0.5 + 1.5 + 'rem',  // 1.5rem to 2.5rem
      horizontal: Math.floor(Math.random() * 3) * 0.25 + 1 + 'rem'  // 1rem to 1.5rem
    }
  };
};

export { getRandomStyle, getRandomVariation, colors, fonts, buttonStyles, imageStyles, containerStyles };
