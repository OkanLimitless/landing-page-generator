// Different ways to implement the same styles
const styleImplementations = {
  // Center content variations
  centerContent: [
    // Flex
    `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    // Grid
    `
      display: grid;
      place-items: center;
    `,
    // Position absolute
    `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `
  ],

  // Button style variations
  buttonStyles: [
    // Gradient with shadow
    (colors) => `
      background: ${colors.buttonGradient};
      color: #000;
      padding: 1rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      }
    `,
    // Solid with border
    (colors) => `
      background: ${colors.primary};
      color: #000;
      padding: 1rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      border: 2px solid ${colors.accent};
      transition: all 0.3s ease;
      &:hover {
        background: ${colors.accent};
        border-color: ${colors.primary};
      }
    `,
    // Modern with glow
    (colors) => `
      background: ${colors.primary};
      color: #000;
      padding: 1rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      box-shadow: 0 0 20px ${colors.accent}40;
      transition: all 0.3s ease;
      &:hover {
        box-shadow: 0 0 30px ${colors.accent}60;
        transform: translateY(-2px);
      }
    `
  ],

  // Container variations
  containerStyles: [
    // Max-width centered
    `
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    `,
    // Fluid container
    `
      width: min(90%, 1200px);
      margin-inline: auto;
      padding-inline: clamp(1rem, 5vw, 2rem);
    `,
    // Responsive container
    `
      width: 100%;
      padding: 0 max(5vw, 1rem);
      margin: 0 auto;
      max-width: min(1200px, 95vw);
    `
  ],

  // Image container variations
  imageContainerStyles: [
    // Aspect ratio with overflow
    `
      aspect-ratio: 16/9;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    `,
    // Padding-bottom technique
    `
      position: relative;
      padding-bottom: 56.25%;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      > img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `,
    // Grid technique
    `
      display: grid;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      > img {
        width: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
      }
    `
  ],

  // Text styles variations
  textStyles: [
    // Classic
    `
      font-size: clamp(1rem, 3vw, 1.1rem);
      line-height: 1.8;
      letter-spacing: 0.01em;
    `,
    // Modern
    `
      font-size: min(3vw, 1.1rem);
      line-height: calc(1em + 0.5rem);
      letter-spacing: 0.02em;
    `,
    // Responsive
    `
      font-size: clamp(1rem, 2vw + 0.5rem, 1.1rem);
      line-height: 1.8;
      letter-spacing: max(0.01em, 0.1vw);
    `
  ]
};

// Get random variation
function getRandomVariation(variations) {
  return variations[Math.floor(Math.random() * variations.length)];
}

export {
  styleImplementations,
  getRandomVariation
};