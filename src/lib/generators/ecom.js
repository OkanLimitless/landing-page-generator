import { getRandomStyle } from '../utils/style-variations';
import { trustSignals, benefitStyles, priceDisplays, ctaButtons, getRandomVariation } from '../utils/ecom-elements';

export function generateEcomPage(data) {
  const [gtagAccount, gtagConversion] = (data.gtagId || '').split('/');
  const styles = data.styles || getRandomStyle();
  
  // Get random variations from trustSignals array
  const trustBadges = getRandomVariation(trustSignals.find(s => s.type === 'badges').content);
  const rating = getRandomVariation(trustSignals.find(s => s.type === 'rating').content);
  const social = getRandomVariation(trustSignals.find(s => s.type === 'social').content);
  const urgency = getRandomVariation(trustSignals.find(s => s.type === 'urgency').content);
  const benefitStyle = getRandomVariation(benefitStyles);
  const priceDisplay = getRandomVariation(priceDisplays);
  const ctaButton = getRandomVariation(ctaButtons);

  // Rest of the generator code remains the same until the CSS part
  const ids = {
    container: `container_${Math.random().toString(36).substr(2, 9)}`,
    product: `product_${Math.random().toString(36).substr(2, 9)}`,
    cta: `cta_${Math.random().toString(36).substr(2, 9)}`,
    footer: `footer_${Math.random().toString(36).substr(2, 9)}`
  };

  const features = (data.features || '').split('\\n').filter(Boolean);
  const images = (data.productImages || '').split(',').map(url => url.trim());
  const mainImage = images[0] || '';

  const styles_css = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* Rest of the styles remain the same until .cta-button */

    .cta-button {
      ${styles.button(styles.colors)}
      display: block;
      padding: ${styles.spacing.vertical} ${styles.spacing.horizontal};
      font-size: clamp(1.2rem, 4vw, 1.5rem);
      font-weight: ${styles.fonts.weights.heading};
      text-decoration: none;
      border-radius: ${styles.borderRadius};
      margin: ${styles.spacing.vertical} auto;
      text-align: center;
      width: 90%;
      max-width: 500px;
    }

    ${styles.buttonHover ? styles.buttonHover(styles.colors) : ''}

    /* Rest of the styles remain the same */
  `;

  // Rest of the template remains the same
  return /* HTML template */;
}
