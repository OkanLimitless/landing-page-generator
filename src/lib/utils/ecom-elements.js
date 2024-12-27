// Trust signal variations
const trustSignals = [
  {
    type: 'rating',
    content: [
      '⭐️⭐️⭐️⭐️⭐️ 4.9/5 Average Rating',
      '⭐️⭐️⭐️⭐️½ 4.8/5 Customer Rating',
      '★★★★★ 4.9 Based on 2,347+ Reviews'
    ]
  },
  {
    type: 'social',
    content: [
      '🎉 2,347+ Happy Customers',
      '👥 Join 2,000+ Satisfied Customers',
      '✨ Trusted by 2,500+ Customers'
    ]
  },
  {
    type: 'urgency',
    content: [
      '⚡️ Limited Time Special Pricing',
      '🔥 Special Offer Ends Soon',
      '⏰ Today\'s Special Price'
    ]
  },
  {
    type: 'badges',
    content: [
      ['🔒 Secure Checkout', '✅ Verified Product', '🚚 Fast Shipping'],
      ['💳 Safe Payment', '✨ Premium Quality', '🎁 Special Offer'],
      ['🛡️ Money Back Guarantee', '🌟 Top Rated', '📦 Free Shipping']
    ]
  }
];

// Get element by type with error handling
const getElementByType = (type, elements = trustSignals) => {
  const element = elements.find(e => e.type === type);
  if (!element) {
    console.error(`Element of type ${type} not found`);
    return { content: [] };
  }
  return element;
};

// Benefits display variations
const benefitStyles = [
  {
    layout: 'grid',
    style: `
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin: 2rem 0;
    `
  },
  {
    layout: 'cards',
    style: `
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin: 2rem 0;
      justify-content: center;
    `
  }
];

// Price display variations with error handling
const priceDisplays = [
  {
    type: 'simple',
    template: (price) => `
      <div class="price-display">
        <span class="price">$${Number(price).toFixed(2)}</span>
      </div>
    `
  },
  {
    type: 'savings',
    template: (price) => {
      const priceNum = Number(price);
      const originalPrice = Math.ceil(priceNum * 1.4);
      const savings = originalPrice - priceNum;
      return `
        <div class="price-display">
          <span class="original-price">$${originalPrice.toFixed(2)}</span>
          <span class="price">$${priceNum.toFixed(2)}</span>
          <span class="savings">Save $${savings.toFixed(2)} Today!</span>
        </div>
      `;
    }
  }
];

// CTA button variations
const ctaButtons = [
  {
    style: 'solid',
    text: [
      'Buy Now - Special Offer',
      'Claim Your Discount'
    ]
  },
  {
    style: 'gradient',
    text: [
      'Secure Your Order Now',
      'Get Special Price Now'
    ]
  }
];

// Get random variation with error handling
const getRandomVariation = (variations) => {
  if (!Array.isArray(variations) || !variations.length) {
    console.error('Invalid variations array');
    return variations || [];
  }
  return variations[Math.floor(Math.random() * variations.length)];
};

export {
  trustSignals,
  benefitStyles,
  priceDisplays,
  ctaButtons,
  getRandomVariation,
  getElementByType
};