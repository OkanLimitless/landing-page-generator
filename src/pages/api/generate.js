import { generateVSLPage, generateEcomPage } from '../../lib/generators';
import { generatePrivacyPage, generateTermsPage } from '../../lib/utils/legal-pages';
import { getRandomStyle } from '../../lib/utils/style-variations';

export default async function handler(req, res) {
  console.log('API handler called with method:', req.method);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
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
    if (type === 'vsl') {
      console.log('Generating VSL page...');
      html = generateVSLPage({ ...data, styles });
    } else if (type === 'ecom') {
      console.log('Generating Ecom page...');
      html = generateEcomPage({ ...data, styles });
    } else {
      return res.status(400).json({ message: 'Invalid page type' });
    }

    if (!html) {
      throw new Error('Failed to generate HTML');
    }

    const privacy = generatePrivacyPage(styles);
    const terms = generateTermsPage(styles);

    if (!privacy || !terms) {
      throw new Error('Failed to generate legal pages');
    }

    return res.status(200).json({
      html,
      privacy,
      terms,
      success: true
    });

  } catch (error) {
    console.error('Error in API handler:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });

    return res.status(500).json({
      success: false,
      message: error.message || 'Generation failed',
      error: error.message,
      name: error.name,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}