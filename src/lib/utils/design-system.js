export const designSystem = {
  themes: [
    {
      name: 'Ocean',
      background: '#17203f',
      primary: '#4a90e2',
      accent: '#64ffda',
      buttonGradient: 'linear-gradient(45deg, #4a90e2, #64ffda)'
    },
    {
      name: 'Sunset',
      background: '#1a1a2e',
      primary: '#e94560',
      accent: '#ffd700',
      buttonGradient: 'linear-gradient(45deg, #e94560, #ffd700)'
    },
    {
      name: 'Midnight',
      background: '#0f1729',
      primary: '#6366f1',
      accent: '#c084fc',
      buttonGradient: 'linear-gradient(45deg, #6366f1, #c084fc)'
    },
    {
      name: 'Forest',
      background: '#1b2f1b',
      primary: '#50c878',
      accent: '#90ee90',
      buttonGradient: 'linear-gradient(45deg, #50c878, #90ee90)'
    }
  ],
  fonts: [
    {
      name: 'Inter',
      url: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    },
    {
      name: 'Plus Jakarta Sans',
      url: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap'
    },
    {
      name: 'Nunito Sans',
      url: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap'
    }
  ],
  getRandomTheme: () => designSystem.themes[Math.floor(Math.random() * designSystem.themes.length)],
  getRandomFont: () => designSystem.fonts[Math.floor(Math.random() * designSystem.fonts.length)],
  generateRandomId: (prefix = 'el') => `${prefix}_${Math.random().toString(36).slice(2, 9)}`,
  getSafeColors: (theme) => ({
    ...theme,
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255,255,255,0.7)',
    buttonText: '#000000'
  })
};