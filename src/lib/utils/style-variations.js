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

// Collection of carefully curated style combinations
const stylePresets = {
  modern: {
    fonts: {
      heading: ['Montserrat', 'Inter', 'system-ui'],
      body: ['Inter', 'Roboto', 'system-ui'],
    },
    colors: {
      primary: ['#3B82F6', '#2563EB', '#1D4ED8'],
      accent: ['#F59E0B', '#D97706', '#B45309'],
      background: [
        'linear-gradient(145deg, #1E293B, #0F172A)',
        'linear-gradient(135deg, #1F2937, #111827)',
        'linear-gradient(150deg, #18181B, #09090B)'
      ]
    }
  },
  elegant: {
    fonts: {
      heading: ['Playfair Display', 'Merriweather', 'serif'],
      body: ['Source Sans Pro', 'Open Sans', 'system-ui'],
    },
    colors: {
      primary: ['#8B5CF6', '#7C3AED', '#6D28D9'],
      accent: ['#EC4899', '#DB2777', '#BE185D'],
      background: [
        'linear-gradient(165deg, #1E1B4B, #312E81)',
        'linear-gradient(155deg, #312E81, #1E1B4B)',
        'linear-gradient(170deg, #281B4B, #1B1B4B)'
      ]
    }
  },
  minimal: {
    fonts: {
      heading: ['DM Sans', 'Plus Jakarta Sans', 'system-ui'],
      body: ['Plus Jakarta Sans', 'DM Sans', 'system-ui'],
    },
    colors: {
      primary: ['#10B981', '#059669', '#047857'],
      accent: ['#6366F1', '#4F46E5', '#4338CA'],
      background: [
        'linear-gradient(160deg, #27272A, #18181B)',
        'linear-gradient(170deg, #262626, #171717)',
        'linear-gradient(165deg, #1F2937, #111827)'
      ]
    }
  }
};

// Visual elements for added randomness
const decorativeElements = [
  {
    type: 'shapes',
    variants: [
      `
        <div class="decorative-shape shape1"></div>
        <div class="decorative-shape shape2"></div>
      `,
      `
        <div class="decorative-shape circle1"></div>
        <div class="decorative-shape circle2"></div>
        <div class="decorative-shape circle3"></div>
      `,
      `
        <div class="decorative-shape wave1"></div>
        <div class="decorative-shape wave2"></div>
      `
    ],
    styles: [
      `
        .decorative-shape {
          position: fixed;
          z-index: -1;
          opacity: 0.1;
          pointer-events: none;
        }
        .shape1 {
          width: 400px;
          height: 400px;
          background: var(--accent);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          top: -100px;
          right: -100px;
          animation: float1 15s ease-in-out infinite;
        }
        .shape2 {
          width: 300px;
          height: 300px;
          background: var(--primary);
          border-radius: 50% 50% 70% 30% / 30% 30% 70% 70%;
          bottom: -50px;
          left: -50px;
          animation: float2 20s ease-in-out infinite;
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(30px, 20px) rotate(8deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, 30px) rotate(-8deg); }
        }
      `,
      // Add more style variants...
    ]
  },
  // Add more decorative element types...
];

const getRandomStyle = () => {
  // Pick a random style preset
  const presetKeys = Object.keys(stylePresets);
  const selectedPreset = stylePresets[presetKeys[Math.floor(Math.random() * presetKeys.length)]];
  
  // Randomly select colors and fonts from the preset
  const primaryColor = selectedPreset.colors.primary[Math.floor(Math.random() * selectedPreset.colors.primary.length)];
  const accentColor = selectedPreset.colors.accent[Math.floor(Math.random() * selectedPreset.colors.accent.length)];
  const backgroundGradient = selectedPreset.colors.background[Math.floor(Math.random() * selectedPreset.colors.background.length)];
  
  // Select random decorative elements
  const decorative = decorativeElements[Math.floor(Math.random() * decorativeElements.length)];
  const decorativeVariant = decorative.variants[Math.floor(Math.random() * decorative.variants.length)];
  const decorativeStyle = decorative.styles[Math.floor(Math.random() * decorative.styles.length)];

  return {
    fonts: {
      heading: selectedPreset.fonts.heading[0],
      body: selectedPreset.fonts.body[0],
      weights: {
        heading: Math.random() > 0.5 ? '700' : '800',
        body: '400'
      },
      urls: [
        'https://fonts.googleapis.com/css2?family=' + 
        selectedPreset.fonts.heading[0].replace(' ', '+') + ':wght@700;800&family=' +
        selectedPreset.fonts.body[0].replace(' ', '+') + ':wght@400;500&display=swap'
      ]
    },
    colors: {
      primary: primaryColor,
      accent: accentColor
    },
    background: {
      main: '#000',
      overlay: backgroundGradient
    },
    decorative: {
      html: decorativeVariant,
      css: decorativeStyle
    },
    spacing: {
      vertical: '2rem',
      horizontal: '2rem'
    },
    container: {
      maxWidth: '1200px',
      padding: '2rem'
    },
    borderRadius: '0.75rem',
    image: `
      border-radius: 1rem;
      overflow: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    `,
    button: (colors) => `
      background: ${colors.primary};
      color: #fff;
      border: none;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      transform-origin: center;
      transition: all 0.3s ease;
    `,
    buttonHover: (colors) => `
      .cta-button:hover {
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
        background: ${colors.accent};
      }
    `
  };
};

// Update the color combinations to ensure high contrast and professionalism
const prelanderStyles = {
  modern: {
    fonts: {
      heading: ['Montserrat', 'Inter', 'system-ui'],
      body: ['Inter', 'Roboto', 'system-ui'],
    },
    colors: {
      // Professional color combinations with good contrast
      primary: [
        '#4F46E5', // Deep indigo
        '#2563EB', // Royal blue
        '#7C3AED', // Vibrant purple
        '#E11D48', // Rich red
        '#059669'  // Emerald green
      ],
      accent: [
        '#F59E0B', // Warm amber
        '#10B981', // Teal
        '#EC4899', // Pink
        '#3B82F6', // Blue
        '#F97316'  // Orange
      ],
      background: [
        'linear-gradient(145deg, #1E293B, #0F172A)', // Navy
        'linear-gradient(135deg, #1F2937, #111827)', // Cool gray
        'linear-gradient(150deg, #312E81, #1E1B4B)', // Deep purple
        'linear-gradient(145deg, #18181B, #09090B)', // Neutral
        'linear-gradient(135deg, #064E3B, #042F2E)'  // Dark emerald
      ]
    }
  }
};

// Add new function for prelander-specific styling
const getPrelanderStyle = () => {
  const style = getRandomStyle(); // Get base style
  const prelanderStyle = prelanderStyles.modern; // We can add more variations later

  // Merge and enhance the style for prelander
  return {
    ...style,
    urgencyElements: {
      timerBackground: 'rgba(255, 78, 3, 0.95)',
      counterBackground: 'rgba(255, 255, 255, 0.03)',
      borderAccent: 'rgba(255, 255, 255, 0.1)',
      pulseAnimation: `
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
      `
    },
    socialProof: {
      background: 'rgba(46, 204, 113, 0.1)',
      border: '4px solid #2ecc71',
      animation: `
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `
    }
  };
};

export { 
  getRandomStyle,
  getRandomVariation, 
  colors, 
  fonts, 
  buttonStyles, 
  imageStyles, 
  containerStyles,
  getPrelanderStyle
};
