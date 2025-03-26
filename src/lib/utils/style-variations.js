const colors = {
  accents: [
    { primary: '#3B82F6', secondary: '#2563EB', text: '#ffffff' },  // Blue
    { primary: '#10B981', secondary: '#059669', text: '#ffffff' },  // Green
    { primary: '#F59E0B', secondary: '#D97706', text: '#ffffff' },  // Amber
    { primary: '#8B5CF6', secondary: '#7C3AED', text: '#ffffff' },  // Purple
    { primary: '#EC4899', secondary: '#DB2777', text: '#ffffff' }   // Pink
  ],
  backgrounds: [
    { main: '#1E293B', overlay: 'linear-gradient(145deg, #1E293B, #0F172A)' },
    { main: '#1F2937', overlay: 'linear-gradient(135deg, #1F2937, #111827)' },
    { main: '#18181B', overlay: 'linear-gradient(150deg, #18181B, #09090B)' },
    { main: '#1E1B4B', overlay: 'linear-gradient(165deg, #1E1B4B, #312E81)' }
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
  modern: `
    background: linear-gradient(45deg, var(--accent), var(--accent-dark));
    color: #FFFFFF;
    font-weight: 600;
    padding: 16px 32px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  classic: `
    background: var(--accent);
    color: #FFFFFF;
    font-weight: 700;
    padding: 18px 36px;
    border-radius: 30px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  `,
  minimal: `
    background: var(--accent);
    color: #FFFFFF;
    font-weight: 600;
    padding: 16px 28px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
  `
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

const containerStyles = {
  card: `
    background: rgba(255, 255, 255, 0.03);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 40px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  `,
  clean: `
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
  `,
  modern: `
    background: rgba(255, 255, 255, 0.02);
    border-radius: 20px;
    padding: 48px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  `
};

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
        '#FFFFFF', // White text
        '#E5E7EB', // Light gray text
        '#F3F4F6', // Lighter gray text
      ],
      accent: [
        '#2563EB', // Royal blue
        '#10B981', // Emerald
        '#F59E0B', // Amber
      ],
      background: [
        'linear-gradient(145deg, #1E293B, #0F172A)', // Navy
        'linear-gradient(135deg, #1F2937, #111827)', // Cool gray
        'linear-gradient(150deg, #18181B, #09090B)', // Neutral dark
        'linear-gradient(145deg, #312E81, #1E1B4B)', // Deep indigo
        'linear-gradient(135deg, #064E3B, #042F2E)'  // Dark emerald
      ]
    }
  }
};

// Add new function for prelander-specific styling
const getPrelanderStyle = () => {
  // Get random style elements
  const buttonStyle = getRandomVariation(Object.values(buttonStyles));
  const containerStyle = getRandomVariation(Object.values(containerStyles));
  const prelanderStyle = prelanderStyles.modern;
  
  // Get random colors ensuring good contrast
  const primaryColor = getRandomVariation(prelanderStyle.colors.primary);
  const accentColor = getRandomVariation(prelanderStyle.colors.accent);
  const background = getRandomVariation(prelanderStyle.colors.background);

  return {
    fonts: {
      heading: prelanderStyle.fonts.heading.join(', '),
      body: prelanderStyle.fonts.body.join(', '),
      urls: [
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap',
        'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
      ]
    },
    colors: {
      primary: primaryColor,
      accent: accentColor
    },
    background: {
      main: background.split(',')[0].split('(')[1],
      overlay: background
    },
    button: buttonStyle,
    container: containerStyle,
    decorative: {
      css: `
        .cta-button {
          ${buttonStyle}
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }
        main {
          ${containerStyle}
        }
      `
    },
    urgencyElements: {
      timerBackground: 'rgba(255, 78, 3, 0.95)',
      counterBackground: 'rgba(255, 255, 255, 0.03)',
      borderAccent: 'rgba(255, 255, 255, 0.1)'
    }
  };
};

// Array of style variations
export const styleVariations = [
  // ... existing styles ...
  
  // Modern Gradient Style
  {
    name: 'modern-gradient',
    colors: {
      primary: '#6366F1',
      accent: '#EC4899'
    },
    fonts: {
      heading: 'Montserrat, sans-serif',
      body: 'Inter, sans-serif',
      weights: {
        heading: 700,
        body: 400
      },
      urls: ['https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Inter:wght@400;500&display=swap']
    },
    background: {
      main: '#0F172A',
      overlay: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)'
    },
    spacing: {
      vertical: '2rem',
      horizontal: '2rem'
    },
    borderRadius: '1rem',
    container: {
      maxWidth: '1200px',
      padding: '2rem'
    },
    image: `
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      position: relative;
      z-index: 1;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    `,
    button: (colors) => `
      background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%);
      color: #fff;
      border: none;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
    `,
    buttonHover: () => `
      .cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    `,
    decorative: {
      html: `
        <div class="decorative-shape blob1"></div>
        <div class="decorative-shape blob2"></div>
        <div class="decorative-shape blob3"></div>
      `,
      css: `
        .decorative-shape {
          position: fixed;
          z-index: -1;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          filter: blur(40px);
          opacity: 0.4;
        }
        .blob1 {
          width: 600px;
          height: 600px;
          background: var(--primary);
          top: -200px;
          right: -200px;
          animation: float1 20s ease-in-out infinite alternate;
        }
        .blob2 {
          width: 500px;
          height: 500px;
          background: var(--accent);
          bottom: -200px;
          left: -200px;
          animation: float2 25s ease-in-out infinite alternate;
        }
        .blob3 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: float3 15s ease-in-out infinite alternate;
        }
        @keyframes float1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(50px, 50px) rotate(10deg); }
        }
        @keyframes float2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(30px, -30px) rotate(-10deg); }
        }
        @keyframes float3 {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(1.2); }
        }
      `
    }
  },
  
  // Dark Elegant Style
  {
    name: 'dark-elegant',
    colors: {
      primary: '#F59E0B',
      accent: '#10B981'
    },
    fonts: {
      heading: 'Playfair Display, serif',
      body: 'Lato, sans-serif',
      weights: {
        heading: 700,
        body: 400
      },
      urls: ['https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@400;700&display=swap']
    },
    background: {
      main: '#111827',
      overlay: 'radial-gradient(circle at top right, rgba(17, 24, 39, 0.8) 0%, rgba(17, 24, 39, 1) 70%)'
    },
    spacing: {
      vertical: '2.5rem',
      horizontal: '2rem'
    },
    borderRadius: '0.5rem',
    container: {
      maxWidth: '1100px',
      padding: '2.5rem'
    },
    image: `
      border-radius: 0.5rem;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      position: relative;
      transition: all 0.3s ease;
      border: 1px solid rgba(245, 158, 11, 0.2);
    `,
    button: (colors) => `
      background: ${colors.primary};
      color: #111827;
      font-weight: 700;
      border: none;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
    `,
    buttonHover: (colors) => `
      .cta-button:hover {
        background: ${colors.accent};
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      }
    `,
    decorative: {
      html: `
        <div class="decorative-pattern"></div>
        <div class="decorative-line top-line"></div>
        <div class="decorative-line bottom-line"></div>
      `,
      css: `
        .decorative-pattern {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          z-index: -1;
          opacity: 0.5;
          pointer-events: none;
        }
        .decorative-line {
          position: fixed;
          height: 2px;
          width: 100%;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          z-index: -1;
          opacity: 0.3;
        }
        .top-line {
          top: 50px;
        }
        .bottom-line {
          bottom: 50px;
        }
      `
    }
  },
  
  // Vibrant Tech Style
  {
    name: 'vibrant-tech',
    colors: {
      primary: '#8B5CF6',
      accent: '#06B6D4'
    },
    fonts: {
      heading: 'Poppins, sans-serif',
      body: 'Roboto, sans-serif',
      weights: {
        heading: 700,
        body: 400
      },
      urls: ['https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Roboto:wght@400;500&display=swap']
    },
    background: {
      main: '#0F172A',
      overlay: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)'
    },
    spacing: {
      vertical: '2rem',
      horizontal: '2rem'
    },
    borderRadius: '1.5rem',
    container: {
      maxWidth: '1200px',
      padding: '2rem'
    },
    image: `
      border-radius: 1.5rem;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
      position: relative;
      transition: all 0.3s ease;
      border: 1px solid rgba(139, 92, 246, 0.2);
    `,
    button: (colors) => `
      background: ${colors.primary};
      color: #fff;
      border: none;
      box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      z-index: 1;
    `,
    buttonHover: (colors) => `
      .cta-button:hover {
        background: ${colors.accent};
        transform: translateY(-2px);
        box-shadow: 0 0 30px rgba(6, 182, 212, 0.6);
      }
      .cta-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: 0.5s;
        z-index: -1;
      }
      .cta-button:hover::before {
        left: 100%;
      }
    `,
    decorative: {
      html: `
        <div class="grid-pattern"></div>
        <div class="glow-circle"></div>
      `,
      css: `
        .grid-pattern {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(to right, rgba(139, 92, 246, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: -2;
          pointer-events: none;
        }
        .glow-circle {
          position: fixed;
          width: 800px;
          height: 800px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
          pointer-events: none;
        }
      `
    }
  },
  
  // Minimalist Clean Style
  {
    name: 'minimalist-clean',
    colors: {
      primary: '#3B82F6',
      accent: '#F43F5E'
    },
    fonts: {
      heading: 'DM Sans, sans-serif',
      body: 'Inter, sans-serif',
      weights: {
        heading: 700,
        body: 400
      },
      urls: ['https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&family=Inter:wght@400;500&display=swap']
    },
    background: {
      main: '#0F172A',
      overlay: 'linear-gradient(120deg, #0F172A 0%, #1E293B 100%)'
    },
    spacing: {
      vertical: '2.5rem',
      horizontal: '2rem'
    },
    borderRadius: '0.75rem',
    container: {
      maxWidth: '1100px',
      padding: '2rem'
    },
    image: `
      border-radius: 0.75rem;
      overflow: hidden;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      position: relative;
      transition: all 0.3s ease;
    `,
    button: (colors) => `
      background: ${colors.primary};
      color: #fff;
      border: none;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    `,
    buttonHover: (colors) => `
      .cta-button:hover {
        background: ${colors.accent};
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      }
    `,
    decorative: {
      html: `
        <div class="decorative-dots"></div>
        <div class="decorative-corner top-right"></div>
        <div class="decorative-corner bottom-left"></div>
      `,
      css: `
        .decorative-dots {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          z-index: -1;
          pointer-events: none;
        }
        .decorative-corner {
          position: fixed;
          width: 300px;
          height: 300px;
          z-index: -1;
          opacity: 0.1;
          pointer-events: none;
        }
        .top-right {
          top: 0;
          right: 0;
          background: radial-gradient(circle at top right, var(--primary), transparent 70%);
        }
        .bottom-left {
          bottom: 0;
          left: 0;
          background: radial-gradient(circle at bottom left, var(--accent), transparent 70%);
        }
      `
    }
  },
  
  // Luxury Dark Style
  {
    name: 'luxury-dark',
    colors: {
      primary: '#F59E0B',
      accent: '#10B981'
    },
    fonts: {
      heading: 'Cormorant Garamond, serif',
      body: 'Nunito Sans, sans-serif',
      weights: {
        heading: 700,
        body: 400
      },
      urls: ['https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Nunito+Sans:wght@400;600&display=swap']
    },
    background: {
      main: '#1A1A1A',
      overlay: 'linear-gradient(to bottom, #1A1A1A 0%, #2C2C2C 100%)'
    },
    spacing: {
      vertical: '2.5rem',
      horizontal: '2rem'
    },
    borderRadius: '0.25rem',
    container: {
      maxWidth: '1100px',
      padding: '2.5rem'
    },
    image: `
      border-radius: 0.25rem;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      position: relative;
      transition: all 0.3s ease;
      border: 1px solid rgba(245, 158, 11, 0.3);
    `,
    button: (colors) => `
      background: ${colors.primary};
      color: #000;
      font-weight: 600;
      border: none;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      letter-spacing: 1px;
      text-transform: uppercase;
    `,
    buttonHover: (colors) => `
      .cta-button:hover {
        background: ${colors.accent};
        color: #fff;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      }
    `,
    decorative: {
      html: `
        <div class="luxury-pattern"></div>
        <div class="luxury-border top"></div>
        <div class="luxury-border bottom"></div>
      `,
      css: `
        .luxury-pattern {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F59E0B' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E");
          z-index: -1;
          opacity: 0.5;
          pointer-events: none;
        }
        .luxury-border {
          position: fixed;
          left: 5%;
          right: 5%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          z-index: -1;
          opacity: 0.3;
        }
        .luxury-border.top {
          top: 30px;
        }
        .luxury-border.bottom {
          bottom: 30px;
        }
      `
    }
  },
  
  // Futuristic Neon Style
  {
    name: 'futuristic-neon',
    colors: {
      primary: '#06B6D4',
      accent: '#EC4899'
    },
    fonts: {
      heading: 'Orbitron, sans-serif',
      body: 'Exo 2, sans-serif',
      weights: {
        heading: 700,
        body: 400
      },
      urls: ['https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Exo+2:wght@400;500&display=swap']
    },
    background: {
      main: '#0F0F1A',
      overlay: 'linear-gradient(135deg, #0F0F1A 0%, #1A1A2E 100%)'
    },
    spacing: {
      vertical: '2rem',
      horizontal: '2rem'
    },
    borderRadius: '0.5rem',
    container: {
      maxWidth: '1200px',
      padding: '2rem'
    },
    image: `
      border-radius: 0.5rem;
      overflow: hidden;
      box-shadow: 0 0 30px rgba(6, 182, 212, 0.3);
      position: relative;
      transition: all 0.3s ease;
      border: 1px solid rgba(6, 182, 212, 0.3);
    `,
    button: (colors) => `
      background: transparent;
      color: ${colors.primary};
      border: 2px solid ${colors.primary};
      box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 2px;
      position: relative;
      overflow: hidden;
      z-index: 1;
    `,
    buttonHover: (colors) => `
      .cta-button:hover {
        background: ${colors.primary};
        color: #fff;
        border-color: ${colors.primary};
        box-shadow: 0 0 30px rgba(6, 182, 212, 0.5);
      }
      .cta-button::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: 0.5s;
        z-index: -1;
      }
      .cta-button:hover::after {
        left: 100%;
      }
    `,
    decorative: {
      html: `
        <div class="neon-grid"></div>
        <div class="neon-glow top"></div>
        <div class="neon-glow bottom"></div>
      `,
      css: `
        .neon-grid {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(to right, rgba(6, 182, 212, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: -2;
          pointer-events: none;
          perspective: 1000px;
          transform-style: preserve-3d;
          transform: rotateX(80deg) translateZ(-100px) scale(2);
          opacity: 0.5;
        }
        .neon-glow {
          position: fixed;
          width: 100%;
          height: 300px;
          z-index: -1;
          opacity: 0.1;
          pointer-events: none;
        }
        .neon-glow.top {
          top: 0;
          background: linear-gradient(to bottom, var(--primary), transparent);
        }
        .neon-glow.bottom {
          bottom: 0;
          background: linear-gradient(to top, var(--accent), transparent);
        }
      `
    }
  },
  
  // Nature Inspired Style
  {
    name: 'nature-inspired',
    colors: {
      primary: '#10B981',
      accent: '#F59E0B'
    },
    fonts: {
      heading: 'Merriweather, serif',
      body: 'Source Sans Pro, sans-serif',
      weights: {
        heading: 700,
        body: 400
      },
      urls: ['https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Source+Sans+Pro:wght@400;600&display=swap']
    },
    background: {
      main: '#1E293B',
      overlay: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)'
    },
    spacing: {
      vertical: '2.5rem',
      horizontal: '2rem'
    },
    borderRadius: '1rem',
    container: {
      maxWidth: '1100px',
      padding: '2.5rem'
    },
    image: `
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      position: relative;
      transition: all 0.3s ease;
      border: 1px solid rgba(16, 185, 129, 0.2);
    `,
    button: (colors) => `
      background: ${colors.primary};
      color: #fff;
      border: none;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    `,
    buttonHover: (colors) => `
      .cta-button:hover {
        background: ${colors.accent};
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
      }
    `,
    decorative: {
      html: `
        <div class="leaf-pattern"></div>
        <div class="organic-shape top-right"></div>
        <div class="organic-shape bottom-left"></div>
      `,
      css: `
        .leaf-pattern {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='44' height='12' viewBox='0 0 44 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 12v-2L0 0v10l4 2h16zm18 0l4-2V0L22 10v2h16zM20 0v8L4 0h16zm18 0L22 8V0h16z' fill='%2310B981' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
          z-index: -1;
          opacity: 0.5;
          pointer-events: none;
        }
        .organic-shape {
          position: fixed;
          width: 400px;
          height: 400px;
          z-index: -1;
          opacity: 0.1;
          pointer-events: none;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }
        .top-right {
          top: -100px;
          right: -100px;
          background: var(--primary);
          animation: float1 20s ease-in-out infinite;
        }
        .bottom-left {
          bottom: -100px;
          left: -100px;
          background: var(--accent);
          animation: float2 25s ease-in-out infinite;
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(30px, 30px) rotate(5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -20px) rotate(-5deg); }
        }
      `
    }
  }
];

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
