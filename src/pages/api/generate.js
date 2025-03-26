import { 
  generateVSLPage,
  generateEcomPage,
  generateQuizPage,
  generateProductDetailPage,
  generateAdultLanderPage,
  generateTMatesPage,
  generateProductInfoPage,
  generateGutterLeadPage,
  generateGLPPage
} from '../../lib';
import { generatePrivacyPolicy, generateTermsOfService } from '../../lib/generators/legal';
import { getRandomStyle } from '../../lib/utils/style-variations';
import JSZip from 'jszip';

export default async function handler(req, res) {
  console.log('API handler called with method:', req.method);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { type, data } = req.body || {};
    console.log('Request data:', { type, data });

    if (!type || !data) {
      return res.status(400).json({ 
        message: 'Missing required fields',
        details: { type: !type ? 'Type is required' : null, data: !data ? 'Data is required' : null }
      });
    }

    const styles = data.styles || getRandomStyle();
    console.log('Generated styles:', styles);
    
    if (!styles) {
      throw new Error('Failed to generate styles');
    }

    let html;
    let productDetailPages = {};
    
    switch (type) {
      case 'vsl':
        console.log('Generating VSL page...');
        html = generateVSLPage(data);
        break;
      case 'ecom':
        console.log('Generating Ecom page...');
        html = generateEcomPage(data);
        break;
      case 'adult':
        console.log('Generating Adult Lander...');
        html = generateAdultLanderPage(data);
        break;
      case 'quiz':
        console.log('Generating Quiz page...');
        const quizPages = generateQuizPage(data);
        
        if (!quizPages || typeof quizPages !== 'object') {
          throw new Error('Failed to generate quiz pages');
        }
        
        html = quizPages['index.html'];
        if (!html) {
          throw new Error('Failed to generate index.html for quiz');
        }
        
        // Add quiz.html to productDetailPages
        if (quizPages['quiz.html']) {
          productDetailPages['quiz.html'] = quizPages['quiz.html'];
        }
        
        // Generate product detail pages for the quiz
        const productNames = [
          'AlphaBites',
          'Brazilian Wood',
          'EndoPeak'
        ];
        
        // Product data mapping
        const productData = {
          'AlphaBites': {
            url: 'https://afflat3e1.com/trk/lnk/7EF4AD2B-B866-46E8-AE93-217072D69F31/?o=28584&c=918277&a=271469&k=C710AE04C0E95E8AF6C4BC458930795E&l=31571',
            image: 'https://i.imgur.com/VTN5W8c.png',
            description: 'Our newest formula with the benefits of both Viagra and Cialis. Works in 15 minutes, lasts for 36 hours.'
          },
          'Brazilian Wood': {
            url: 'https://afflat3e1.com/trk/lnk/7EF4AD2B-B866-46E8-AE93-217072D69F31/?o=26286&c=918277&a=271469&k=FD40240F18D488603D3C98D218ED5998&l=32307',
            image: 'https://i.imgur.com/g5LZLPR.png',
            description: 'Natural herbal formula for sustained performance. Made with premium ingredients from the Amazon rainforest.'
          },
          'EndoPeak': {
            url: 'https://endopeak24.com/b/order-now.php?aff_id=130095',
            image: 'https://i.imgur.com/C6UJxbC.png',
            description: 'Advanced formula designed to maximize blood flow and enhance sensitivity. Clinically tested for optimal results.'
          }
        };
        
        // Generate a product detail page for each product
        for (const productName of productNames) {
          const productSlug = productName.toLowerCase().replace(/\s+/g, '-');
          const productFileName = `product-${productSlug}.html`;
          
          // Create product-specific data
          const productPageData = {
            ...data,
            productName,
            productDescription: productData[productName].description,
            productImage: productData[productName].image,
            offerUrl: productData[productName].url,
            styles: data.styles // Use the same styles as the quiz
          };
          
          // Generate the product detail page
          productDetailPages[productFileName] = generateProductDetailPage(productPageData);
        }
        break;
      case 'tmates':
        console.log('Generating TMates page...');
        html = generateTMatesPage(data);
        
        // Generate product info page for TMates
        const productInfoPage = generateProductInfoPage(data);
        productDetailPages['product-info.html'] = productInfoPage;
        break;
      case 'gutterLeads':
        console.log('Generating Gutter Leads page...');
        html = generateGutterLeadPage(data);
        break;
      case 'glp':
        console.log('Generating GLP Health page...');
        const glpPages = generateGLPPage(data);
        
        // Extract the main index.html
        html = glpPages['index.html'];
        
        // Store the blog post pages
        for (const [fileName, content] of Object.entries(glpPages)) {
          if (fileName !== 'index.html') {
            productDetailPages[fileName] = content;
          }
        }
        break;
      default:
        throw new Error('Invalid page type');
    }

    if (!html) {
      throw new Error('Failed to generate HTML');
    }

    const privacy = generatePrivacyPolicy();
    const terms = generateTermsOfService();

    if (!privacy || !terms) {
      throw new Error('Failed to generate legal pages');
    }

    // Create zip with all files
    const zip = new JSZip();
    zip.file('index.html', html);
    zip.file('privacy.html', privacy);
    zip.file('terms.html', terms);
    
    // Add product detail pages if they exist
    if ((type === 'quiz' || type === 'tmates' || type === 'glp') && productDetailPages) {
      for (const [fileName, content] of Object.entries(productDetailPages)) {
        zip.file(fileName, content);
      }
    }

    // Generate zip file as base64
    const zipContent = await zip.generateAsync({ type: 'base64' });
    
    // Create manifest of files
    const manifest = {
      files: [
        'index.html',
        'privacy.html',
        'terms.html'
      ]
    };
    
    // Add product detail pages to manifest if they exist
    if ((type === 'quiz' || type === 'tmates' || type === 'glp') && productDetailPages) {
      manifest.files = [
        ...manifest.files,
        ...Object.keys(productDetailPages)
      ];
    }

    return res.status(200).json({
      html,
      privacy,
      terms,
      success: true,
      zipContent,
      manifest
    });

  } catch (error) {
    console.error('Error in API handler:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Generation failed',
      error: error.message
    });
  }
}