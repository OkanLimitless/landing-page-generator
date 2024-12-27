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
  },
  {
    layout: 'list',
    style: `
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 2rem 0;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    `
  }
];

// Price display variations
const priceDisplays = [
  {
    type: 'simple',
    template: (price) => `
      <div class="price-display">
        <span class="price">$${price}</span>
      </div>
    `
  },
  {
    type: 'savings',
    template: (price) => {
      const originalPrice = Math.ceil(price * 1.4);
      const savings = originalPrice - price;
      return `
        <div class="price-display">
          <span class="original-price">$${originalPrice}</span>
          <span class="price">$${price}</span>
          <span class="savings">Save $${savings} Today!</span>
        </div>
      `;
    }
  },
  {
    type: 'special',
    template: (price) => `
      <div class="price-display">
        <span class="special-offer">Special Offer</span>
        <span class="price">$${price}</span>
        <span class="limited-time">Limited Time Only</span>
      </div>
    `
  }
];

// CTA button variations
const ctaButtons = [
  {
    style: 'solid',
    text: [
      'Buy Now - Special Offer',
      'Claim Your Discount',
      'Get Yours Now'
    ]
  },
  {
    style: 'gradient',
    text: [
      'Secure Your Order Now',
      'Get Special Price Now',
      'Order Now - Save Today'
    ]
  },
  {
    style: 'outline',
    text: [
      'Continue to Special Offer',
      'View Exclusive Deal',
      'See Special Price'
    ]
  }
];

// Get random variations
const getRandomVariation = (variations) => {
  return variations[Math.floor(Math.random() * variations.length)];
};

export {
  trustSignals,
  benefitStyles,
  priceDisplays,
  ctaButtons,
  getRandomVariation
};