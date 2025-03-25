import { getRandomStyle } from '../utils/style-variations';
import { contentPresets } from '../utils/content-presets';

// Helper function that generates hero images for landing pages
function getHeroImagePlaceholder(productName, type = 'pill') {
  const encodedName = encodeURIComponent(productName);
  
  // Different hero image styles
  switch(type) {
    case 'pill': 
      return `data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22600%22%20height%3D%22400%22%20fill%3D%22%23F8F9FA%22%2F%3E%3Cellipse%20cx%3D%22300%22%20cy%3D%22200%22%20rx%3D%22150%22%20ry%3D%2260%22%20fill%3D%22%234169E1%22%2F%3E%3Ctext%20x%3D%22300%22%20y%3D%22200%22%20font-size%3D%2232%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E${encodedName}%3C%2Ftext%3E%3Cellipse%20cx%3D%22300%22%20cy%3D%22200%22%20rx%3D%22150%22%20ry%3D%2260%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%2F%3E%3C%2Fsvg%3E`;
      
    case 'bottle':
      return `data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22600%22%20height%3D%22400%22%20fill%3D%22%23F8F9FA%22%2F%3E%3Cpath%20d%3D%22M250%2080L250%20120L230%20140L230%20320L370%20320L370%20140L350%20120L350%2080Z%22%20fill%3D%22%234169E1%22%20opacity%3D%220.8%22%2F%3E%3Crect%20x%3D%22250%22%20y%3D%2280%22%20width%3D%22100%22%20height%3D%2240%22%20fill%3D%22%23333%22%2F%3E%3Ctext%20x%3D%22300%22%20y%3D%22200%22%20font-size%3D%2224%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E${encodedName}%3C%2Ftext%3E%3C%2Fsvg%3E`;
    
    case 'scientific':
      return `data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22600%22%20height%3D%22400%22%20fill%3D%22%23F8F9FA%22%2F%3E%3Ccircle%20cx%3D%22200%22%20cy%3D%22200%22%20r%3D%2280%22%20fill%3D%22%234169E1%22%20opacity%3D%220.7%22%2F%3E%3Ccircle%20cx%3D%22330%22%20cy%3D%22170%22%20r%3D%2260%22%20fill%3D%22%23FF6B6B%22%20opacity%3D%220.7%22%2F%3E%3Ccircle%20cx%3D%22380%22%20cy%3D%22250%22%20r%3D%2270%22%20fill%3D%22%2362BD69%22%20opacity%3D%220.7%22%2F%3E%3Ctext%20x%3D%22300%22%20y%3D%22200%22%20font-size%3D%2228%22%20fill%3D%22%23333%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E${encodedName}%3C%2Ftext%3E%3C%2Fsvg%3E`;
      
    case 'gradient':
    default:
      return `data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22600%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22grad%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%234169E1%3Bstop-opacity%3A1%22%20%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%23FF6B6B%3Bstop-opacity%3A1%22%20%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22600%22%20height%3D%22400%22%20fill%3D%22url%28%23grad%29%22%2F%3E%3Ctext%20x%3D%22300%22%20y%3D%22200%22%20font-size%3D%2240%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3E${encodedName}%3C%2Ftext%3E%3C%2Fsvg%3E`;
  }
}

export const generateProductDetailPage = (data) => {
  try {
    // Check if preset is provided and merge with data
    const presetData = data.preset ? contentPresets[data.preset] : {};
    const mergedData = { ...presetData, ...data };
    
    // Extract gtag ID and label from the provided gtagId
    const [gtagAccount, gtagLabel] = (mergedData.gtagId || '').split('/');
    const styles = mergedData.styles || getRandomStyle();
    if (!styles) {
      throw new Error('Failed to generate styles');
    }

    // Generate unique IDs for elements
    const ids = {
      container: `container_${Math.random().toString(36).substr(2, 9)}`,
      footer: `footer_${Math.random().toString(36).substr(2, 9)}`
    };

    // Google Analytics script
    const gtagScript = gtagAccount ? `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gtagAccount}');
    ` : '';

    // Add the decorative elements to the HTML
    const decorativeHTML = styles.decorative?.html || '';
    const decorativeCSS = styles.decorative?.css || '';

    // Product details with fallbacks
    const productName = mergedData.productName || 'Alpha Bites';
    
    // Use local images instead of placeholders
    let productImage = mergedData.productImage || '';
    
    // Set product-specific images based on product name with the provided imgur links
    if (!productImage) {
      if (productName.toLowerCase().includes('brazilian') || productName === 'Brazilian Wood') {
        productImage = 'https://i.imgur.com/g5LZLPR.png';
      } else if (productName === 'AlphaBites' || productName === 'Alpha Bites') {
        productImage = 'https://i.imgur.com/VTN5W8c.png';
      } else if (productName === 'EndoPeak') {
        productImage = 'https://i.imgur.com/C6UJxbC.png';
      } else {
        // For all other products, use a random style from our hero image generator
        const placeholderTypes = ['bottle', 'scientific', 'gradient', 'pill'];
        const randomType = placeholderTypes[Math.floor(Math.random() * placeholderTypes.length)];
        productImage = getHeroImagePlaceholder(productName, randomType);
      }
    }
    
    // Hardcoded product descriptions based on product name
    let productDescription = 'Our newest formula with the benefits of both Viagra and Cialis. Works in 15 minutes, lasts for 36 hours.';
    
    if (productName === 'AlphaBites' || productName === 'Alpha Bites') {
      productDescription = 'Our newest formula with the benefits of both Viagra and Cialis. Works in 15 minutes, lasts for 36 hours.';
    } else if (productName === 'Brazilian Wood') {
      productDescription = 'Natural herbal formula for sustained performance. Made with premium ingredients from the Amazon rainforest.';
    } else if (productName === 'EndoPeak') {
      productDescription = 'Advanced formula designed to maximize blood flow and enhance sensitivity. Clinically tested for optimal results.';
    }

    // Doctor image - using the provided imgur link with direct image URL
    const doctorImage = 'https://i.imgur.com/ZTojZ2n.png';

    // Hardcoded doctor information - randomly select one from the list
    const doctors = [
      {
        name: 'Dr. Michael Stevens',
        title: 'MD, Board Certified Urologist',
        quote: '"This innovative formula combines the best aspects of existing ED medications with fewer side effects."',
        image: doctorImage
      },
      {
        name: 'Dr. Robert Johnson',
        title: 'MD, Sexual Health Specialist',
        quote: '"After reviewing the clinical data, I\'m impressed with the efficacy and safety profile of this formula."',
        image: doctorImage
      },
      {
        name: 'Dr. David Williams',
        title: 'MD, Men\'s Health Expert',
        quote: '"The dual-action mechanism provides both rapid onset and extended duration, addressing the main limitations of traditional ED medications."',
        image: doctorImage
      }
    ];
    
    // Select a random doctor
    const doctorIndex = Math.floor(Math.random() * doctors.length);
    const doctorName = doctors[doctorIndex].name;
    const doctorTitle = doctors[doctorIndex].title;
    const doctorQuote = doctors[doctorIndex].quote;
    const selectedDoctorImage = doctors[doctorIndex].image;

    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${productName} - Premium ED Treatment</title>
        ${styles.fonts.urls.map(url => `<link href="${url}" rel="stylesheet">`).join('\n')}
        ${mergedData.trackingScript || ''}
        ${gtagAccount ? `
          <script async src="https://www.googletagmanager.com/gtag/js?id=${gtagAccount}"></script>
          <script>${gtagScript}</script>
        ` : ''}
        <style>
          :root {
            --primary: ${styles.colors.primary};
            --accent: ${styles.colors.accent};
          }
          
          ${decorativeCSS}
          
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            margin: 0;
            font-family: ${styles.fonts.body};
            line-height: 1.6;
            color: #333;
            background: #f8f9fa;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
          
          /* Loading animation styles */
          .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${styles.background.main};
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
          }
          .loading-overlay.slide-up {
            transform: translateY(-100%);
          }
          .loading-product-name {
            font-size: 36px;
            color: white;
            margin-bottom: 20px;
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.6s forwards 0.2s;
          }
          .loading-text {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 30px;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.6s forwards 0.4s;
          }
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .content-container {
            opacity: 1;
          }
          
          #${ids.container} {
            width: 90%;
            max-width: ${styles.container.maxWidth};
            margin: 0 auto;
            padding: ${styles.container.padding};
          }
          .header {
            background: ${styles.colors.primary};
            color: white;
            padding: 1rem 0;
          }
          .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .logo {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: 1.5rem;
          }
          .promo-banner {
            background: rgba(0, 0, 0, 0.1);
            padding: 0.75rem;
            text-align: center;
            font-size: 0.9rem;
            color: white;
          }
          .promo-banner a {
            color: white;
            text-decoration: underline;
            font-weight: bold;
          }
          .hero {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            margin: 3rem 0;
            align-items: center;
          }
          .hero-content {
            flex: 1;
            min-width: 300px;
          }
          .hero-image {
            flex: 1;
            min-width: 300px;
            text-align: center;
          }
          .hero-image img {
            max-width: 100%;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }
          .product-title {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: clamp(2rem, 5vw, 3rem);
            margin-bottom: 1rem;
            line-height: 1.2;
            color: #333;
          }
          .product-subtitle {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            color: #666;
          }
          .price-tag {
            display: inline-block;
            background: ${styles.colors.primary};
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 50px;
            font-weight: bold;
            margin-bottom: 1.5rem;
          }
          .benefits {
            margin: 2rem 0;
          }
          .section-title {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            color: #333;
            text-align: center;
          }
          .benefits-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
          }
          .benefit-item {
            background: white;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            display: flex;
            align-items: flex-start;
            gap: 1rem;
          }
          .benefit-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: ${styles.colors.primary};
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            flex-shrink: 0;
          }
          .benefit-content h3 {
            margin-bottom: 0.5rem;
            font-family: ${styles.fonts.heading};
          }
          .cta-button {
            ${styles.button(styles.colors)}
            display: inline-block;
            padding: 1rem 2rem;
            font-size: 1.2rem;
            font-weight: ${styles.fonts.weights.heading};
            text-decoration: none;
            border-radius: ${styles.borderRadius};
            text-align: center;
            margin: 2rem 0;
            transition: all 0.3s ease;
            width: 100%;
          }
          ${styles.buttonHover ? styles.buttonHover(styles.colors) : ''}
          .doctor-section {
            background: #f1f5f9;
            padding: 3rem 0;
            margin: 3rem 0;
          }
          .doctor-container {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            align-items: center;
            max-width: 1000px;
            margin: 0 auto;
          }
          .doctor-image {
            flex: 1;
            min-width: 250px;
            text-align: center;
          }
          .doctor-image img {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            border: 5px solid white;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          }
          .doctor-content {
            flex: 2;
            min-width: 300px;
          }
          .doctor-quote {
            font-size: 1.3rem;
            font-style: italic;
            margin-bottom: 1rem;
            position: relative;
            padding-left: 1.5rem;
            border-left: 4px solid ${styles.colors.primary};
          }
          .doctor-name {
            font-weight: bold;
            font-size: 1.2rem;
          }
          .doctor-title {
            color: #666;
          }
          .comparison-section {
            margin: 3rem 0;
          }
          .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0;
            background: white;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-radius: 10px;
            overflow: hidden;
          }
          .comparison-table th,
          .comparison-table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid #eee;
          }
          .comparison-table th {
            background: ${styles.colors.primary};
            color: white;
          }
          .comparison-table tr:last-child td {
            border-bottom: none;
          }
          .comparison-table td:nth-child(2) {
            color: ${styles.colors.primary};
            font-weight: bold;
          }
          .testimonials {
            margin: 3rem 0;
          }
          .testimonial-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }
          .testimonial-card {
            background: white;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          }
          .testimonial-text {
            font-style: italic;
            margin-bottom: 1rem;
            position: relative;
          }
          .testimonial-text::before {
            content: '"';
            font-size: 3rem;
            color: ${styles.colors.primary};
            opacity: 0.2;
            position: absolute;
            top: -1rem;
            left: -1rem;
          }
          .testimonial-author {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          .testimonial-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #eee;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: #666;
          }
          .testimonial-info h4 {
            margin: 0;
          }
          .testimonial-info p {
            color: #666;
            font-size: 0.9rem;
          }
          .faq-section {
            margin: 3rem 0;
          }
          .faq-item {
            margin-bottom: 1rem;
            border-bottom: 1px solid #eee;
            padding-bottom: 1rem;
          }
          .faq-question {
            font-weight: bold;
            margin-bottom: 0.5rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .faq-answer {
            color: #666;
            display: none;
          }
          .faq-answer.active {
            display: block;
          }
          .trust-badges {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            margin: 3rem 0;
          }
          .trust-badge {
            text-align: center;
            max-width: 150px;
          }
          .trust-badge img {
            width: 80px;
            height: 80px;
            margin-bottom: 0.5rem;
          }
          .trust-badge p {
            font-size: 0.9rem;
            color: #666;
          }
          .final-cta {
            background: ${styles.colors.primary};
            color: white;
            padding: 3rem 0;
            text-align: center;
          }
          .final-cta h2 {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: clamp(1.8rem, 5vw, 2.5rem);
            margin-bottom: 1.5rem;
          }
          .final-cta p {
            max-width: 600px;
            margin: 0 auto 2rem;
            font-size: 1.1rem;
          }
          .final-cta .cta-button {
            background: white;
            color: ${styles.colors.primary};
            max-width: 300px;
          }
          .final-cta .cta-button:hover {
            background: rgba(255, 255, 255, 0.9);
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }
          #${ids.footer} {
            background: #333;
            padding: ${styles.spacing.vertical} 0;
            padding-bottom: calc(${styles.spacing.vertical} + 80px); /* Add extra padding at the bottom to account for sticky CTA */
            margin-top: auto;
            text-align: center;
            font-size: clamp(0.75rem, 2vw, 0.875rem);
            color: rgba(255, 255, 255, 0.7);
          }
          .footer-links {
            margin: 1rem 0;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
          }
          .footer-links a {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            padding: 0.5rem;
            transition: color 0.3s ease;
          }
          .footer-links a:hover { color: ${styles.colors.primary}; }
          .footer-disclaimer {
            max-width: 600px;
            margin: 1rem auto;
            padding: 0 20px;
            font-size: clamp(0.7rem, 2vw, 0.75rem);
            line-height: 1.5;
            color: rgba(255, 255, 255, 0.5);
          }
          @media (max-width: 768px) {
            #${ids.container} { width: 95%; padding: 15px; }
            .hero { flex-direction: column-reverse; }
            .hero-content, .hero-image { min-width: 100%; }
            .doctor-container { flex-direction: column; }
            .doctor-image, .doctor-content { min-width: 100%; }
          }
          .money-back-guarantee {
            background: #f8f9fa;
            padding: 3rem 0;
            margin: 3rem 0;
          }
          .guarantee-container {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            align-items: center;
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          }
          .guarantee-image {
            flex: 1;
            min-width: 150px;
            text-align: center;
          }
          .guarantee-content {
            flex: 3;
            min-width: 300px;
          }
          .guarantee-content h2 {
            font-family: ${styles.fonts.heading};
            font-weight: ${styles.fonts.weights.heading};
            font-size: 1.8rem;
            margin-bottom: 1rem;
            color: #333;
          }
          .guarantee-content p {
            color: #666;
            line-height: 1.6;
          }
          @media (max-width: 768px) {
            .guarantee-container {
              flex-direction: column;
              text-align: center;
            }
          }
          
          /* Sticky CTA Button */
          .sticky-cta {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: white;
            box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
            padding: 15px;
            z-index: 999;
            display: flex;
            justify-content: center;
            transform: translateY(100%);
            transition: transform 0.3s ease;
          }
          .sticky-cta.visible {
            transform: translateY(0);
          }
          .sticky-cta-content {
            width: 100%;
            max-width: ${styles.container.maxWidth};
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
          }
          .sticky-product-info {
            display: flex;
            align-items: center;
            gap: 15px;
          }
          .sticky-product-image {
            width: 50px;
            height: 50px;
            object-fit: contain;
            border-radius: 5px;
          }
          .sticky-product-name {
            font-weight: bold;
            font-size: 1.1rem;
            color: #333;
          }
          .sticky-cta-button {
            ${styles.button(styles.colors)}
            padding: 10px 25px;
            border-radius: ${styles.borderRadius};
            font-weight: ${styles.fonts.weights.heading};
            text-decoration: none;
            white-space: nowrap;
            transition: all 0.3s ease;
          }
          .sticky-cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            background-color: ${styles.colors.accent};
          }
          
          @media (max-width: 768px) {
            .sticky-cta-content {
              padding: 0 10px;
            }
            .sticky-product-info {
              gap: 10px;
            }
            .sticky-product-name {
              font-size: 0.9rem;
              max-width: 100px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .sticky-cta-button {
              font-size: 0.9rem;
              padding: 8px 15px;
            }
          }
        </style>
      </head>
      <body>
        <!-- Loading overlay -->
        <div class="loading-overlay" id="loading-overlay">
          <div class="loading-product-name">${productName}</div>
          <div class="loading-text">Loading your personalized solution...</div>
        </div>
        
        <!-- Main content container -->
        <div class="content-container" id="content-container">
          <header class="header">
            <div class="promo-banner">
              Get $15 off your first ED order, if prescribed. <a href="#order-now">Start now</a>
            </div>
            <div id="${ids.container}" class="header-content">
              <div class="logo">ro</div>
            </div>
          </header>
          
          ${decorativeHTML}
          
          <main>
            <section id="${ids.container}" class="hero">
              <div class="hero-content">
                <h1 class="product-title">${productName}</h1>
                <p class="product-subtitle">${productDescription}</p>
                <p>Our newest formula combines the best of both worlds, giving you stronger, longer-lasting erections when you need them most.</p>
                <a href="#order-now" class="cta-button">Get Started</a>
              </div>
              <div class="hero-image">
                <img src="${productImage}" alt="${productName}">
              </div>
            </section>
            
            <section class="benefits">
              <div id="${ids.container}">
                <h2 class="section-title">Why Choose ${productName}?</h2>
                <div class="benefits-list">
                  <div class="benefit-item">
                    <div class="benefit-icon">1</div>
                    <div class="benefit-content">
                      <h3>Works in 15 minutes</h3>
                      <p>Our clinically tested formula ensures reliable results every time.</p>
                    </div>
                  </div>
                  <div class="benefit-item">
                    <div class="benefit-icon">2</div>
                    <div class="benefit-content">
                      <h3>Lasts for 36 hours</h3>
                      <p>Our formula is designed to provide long-lasting results.</p>
                    </div>
                  </div>
                  <div class="benefit-item">
                    <div class="benefit-icon">3</div>
                    <div class="benefit-content">
                      <h3>Clinically proven results</h3>
                      <p>Our formula has been clinically tested and proven to be effective.</p>
                    </div>
                  </div>
                  <div class="benefit-item">
                    <div class="benefit-icon">4</div>
                    <div class="benefit-content">
                      <h3>FDA approved</h3>
                      <p>Our formula is FDA approved and safe for use.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section class="doctor-section">
              <div id="${ids.container}">
                <h2 class="section-title">Expert Recommendation</h2>
                <div class="doctor-container">
                  <div class="doctor-image">
                    <img src="${selectedDoctorImage}" alt="${doctorName}">
                  </div>
                  <div class="doctor-content">
                    <p class="doctor-quote">${doctorQuote}</p>
                    <p class="doctor-name">${doctorName}</p>
                    <p class="doctor-title">${doctorTitle}</p>
                    <p>With over 15 years of experience treating men's health issues, Dr. Stevens has helped thousands of men regain their confidence and improve their relationships.</p>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="${ids.container}" class="comparison-section">
              <h2 class="section-title">How ${productName} Compares</h2>
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>${productName}</th>
                    <th>Other ED Medications</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Speed of action</td>
                    <td>As fast as 15 minutes</td>
                    <td>30-60 minutes</td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td>Up to 36 hours</td>
                    <td>4-6 hours</td>
                  </tr>
                  <tr>
                    <td>Take with food</td>
                    <td>Yes</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Daily use</td>
                    <td>Yes</td>
                    <td>No</td>
                  </tr>
                </tbody>
              </table>
            </section>
            
            <section id="${ids.container}" class="testimonials">
              <h2 class="section-title">What Our Customers Say</h2>
              <div class="testimonial-grid">
                <div class="testimonial-card">
                  <p class="testimonial-text">I've tried other ED medications before, but nothing works as quickly or lasts as long as ${productName}. It's been a game-changer for my relationship.</p>
                  <div class="testimonial-author">
                    <div class="testimonial-avatar">JD</div>
                    <div class="testimonial-info">
                      <h4>John D.</h4>
                      <p>Age 45, Customer for 6 months</p>
                    </div>
                  </div>
                </div>
                <div class="testimonial-card">
                  <p class="testimonial-text">The convenience of ${productName} is what sold me. I take it in the morning and I'm ready whenever the moment is right. No planning required.</p>
                  <div class="testimonial-author">
                    <div class="testimonial-avatar">MS</div>
                    <div class="testimonial-info">
                      <h4>Michael S.</h4>
                      <p>Age 52, Customer for 3 months</p>
                    </div>
                  </div>
                </div>
                <div class="testimonial-card">
                  <p class="testimonial-text">After trying ${productName}, I finally feel like myself again. My confidence is back and my wife has noticed the difference too.</p>
                  <div class="testimonial-author">
                    <div class="testimonial-avatar">RJ</div>
                    <div class="testimonial-info">
                      <h4>Robert J.</h4>
                      <p>Age 58, Customer for 1 year</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="${ids.container}" class="faq-section">
              <h2 class="section-title">Frequently Asked Questions</h2>
              <div class="faq-item">
                <div class="faq-question">
                  <span>How does ${productName} work?</span>
                  <span class="toggle">+</span>
                </div>
                <div class="faq-answer">
                  <p>${productName} works by increasing blood flow to the penis, helping you achieve and maintain an erection when sexually aroused. The unique formula combines the best aspects of existing ED medications for faster onset and longer duration.</p>
                </div>
              </div>
              <div class="faq-item">
                <div class="faq-question">
                  <span>How quickly does it take effect?</span>
                  <span class="toggle">+</span>
                </div>
                <div class="faq-answer">
                  <p>Most men experience results within 15-30 minutes, significantly faster than traditional ED medications which can take up to an hour.</p>
                </div>
              </div>
              <div class="faq-item">
                <div class="faq-question">
                  <span>Are there any side effects?</span>
                  <span class="toggle">+</span>
                </div>
                <div class="faq-answer">
                  <p>As with any medication, some men may experience mild side effects such as headache, flushing, or indigestion. These typically resolve quickly. Our formula is designed to minimize side effects compared to traditional ED medications.</p>
                </div>
              </div>
              <div class="faq-item">
                <div class="faq-question">
                  <span>Is a prescription required?</span>
                  <span class="toggle">+</span>
                </div>
                <div class="faq-answer">
                  <p>Yes, ${productName} requires a prescription. Our online consultation process makes it easy to connect with a licensed healthcare provider who will determine if ${productName} is right for you.</p>
                </div>
              </div>
              <div class="faq-item">
                <div class="faq-question">
                  <span>How is ${productName} shipped?</span>
                  <span class="toggle">+</span>
                </div>
                <div class="faq-answer">
                  <p>All orders are shipped in discreet, unmarked packaging to protect your privacy. No one will know what's inside.</p>
                </div>
              </div>
            </section>
            
            <section id="order-now" class="final-cta">
              <div id="${ids.container}">
                <h2>Ready to Experience the Difference?</h2>
                <p>Join thousands of satisfied customers who have rediscovered their confidence with ${productName}.</p>
                <a href="${mergedData.offerUrl || '#'}" class="cta-button">Get Started Now</a>
              </div>
            </section>
          </main>
          
          <footer id="${ids.footer}">
            <div class="container">
              <div class="footer-links">
                <a href="privacy.html">Privacy Policy</a>
                <a href="terms.html">Terms of Service</a>
              </div>
              <div class="footer-disclaimer">
                This site is not a part of Google, Inc. or Google.com, nor is it sponsored or endorsed by Google. 
                YouTube is a trademark of Google Inc.
              </div>
              <div>&copy; ${new Date().getFullYear()} All rights reserved</div>
            </div>
          </footer>
        </div>
        
        <!-- Sticky CTA Button -->
        <div class="sticky-cta" id="sticky-cta">
          <div class="sticky-cta-content">
            <div class="sticky-product-info">
              <img src="${productImage}" alt="${productName}" class="sticky-product-image">
              <span class="sticky-product-name">${productName}</span>
            </div>
            <a href="${mergedData.offerUrl || '#order-now'}" class="sticky-cta-button">Get Started Now</a>
          </div>
        </div>
        
        <script>
          document.addEventListener('DOMContentLoaded', function() {
            // Loading animation
            const loadingOverlay = document.getElementById('loading-overlay');
            const contentContainer = document.getElementById('content-container');
            
            // Quick reveal animation after a short delay
            setTimeout(() => {
              loadingOverlay.classList.add('slide-up');
            }, 1500);
            
            // Sticky CTA button behavior
            const stickyCta = document.getElementById('sticky-cta');
            let lastScrollTop = 0;
            let scrollThreshold = 300; // Show after scrolling this many pixels
            
            window.addEventListener('scroll', function() {
              let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              
              // Show the sticky CTA after scrolling down past the threshold
              if (scrollTop > scrollThreshold) {
                stickyCta.classList.add('visible');
              } else {
                stickyCta.classList.remove('visible');
              }
              
              lastScrollTop = scrollTop;
            });
            
            // FAQ toggle functionality
            const faqQuestions = document.querySelectorAll('.faq-question');
            faqQuestions.forEach(question => {
              question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const toggle = this.querySelector('.toggle');
                
                if (answer.classList.contains('active')) {
                  answer.classList.remove('active');
                  toggle.textContent = '+';
                } else {
                  answer.classList.add('active');
                  toggle.textContent = '-';
                }
              });
            });
            
            // Track conversion when CTA is clicked
            const ctaButtons = document.querySelectorAll('.cta-button');
            ctaButtons.forEach(button => {
              button.addEventListener('click', function() {
                if (window.gtag) {
                  gtag('event', 'conversion', {
                    'send_to': '${gtagAccount}/${gtagLabel}'
                  });
                }
              });
            });
          });
        </script>
      </body>
      </html>`;
  } catch (error) {
    console.error('Error generating product detail page:', error);
    throw error;
  }
}; 