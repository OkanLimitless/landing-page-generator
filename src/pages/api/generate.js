import { generateVSLPage, generateEcomPage } from '@/lib/generators';
import { generatePrivacyPage, generateTermsPage } from '@/lib/utils/legal-pages';
import { getRandomStyle } from '@/lib/utils/style-variations';

const validateData = (data, type) => {
  try {
    const errors = [];

    if (!data?.offerUrl) errors.push('Offer URL is required');

    if (type === 'vsl') {
      if (!data?.headline) errors.push('Headline is required');
      if (!data?.description) errors.push('Description is required');
      if (!data?.thumbnailUrl) errors.push('Thumbnail URL is required');
    } else if (type === 'ecom') {
      if (!data?.productName) errors.push('Product Name is required');
      if (!data?.price) errors.push('Price is required');
      if (!data?.features) errors.push('Features are required');
      if (!data?.productImages) errors.push('Product Images are required');
    }

    return errors;
  } catch (error) {
    console.error('Error in validateData:', error);
    return ['Validation failed: ' + error.message];
  }
};

export default async function handler(req, res) {
  console.log('API handler called with method:', req.method);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log('Request body:', req.body);

  try {
    const { type, data } = req.body || {};

    if (!type || !data) {
      console.error('Missing type or data:', { type, data });
      return res.status(400).json({ 
        message: 'Missing required fields',
        details: { type: !type ? 'Type is required' : null, data: !data ? 'Data is required' : null }
      });
    }

    const validationErrors = validateData(data, type);
    if (validationErrors.length > 0) {
      console.error('Validation errors:', validationErrors);
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: validationErrors 
      });
    }

    let styles;
    try {
      styles = data.styles || getRandomStyle();
      console.log('Generated styles:', styles);
      if (!styles) {
        throw new Error('Failed to generate styles');
      }
    } catch (error) {
      console.error('Style generation error:', error);
      throw new Error('Style generation failed: ' + error.message);
    }

    let html;
    try {
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
        throw new Error('HTML generation returned null');
      }
    } catch (error) {
      console.error('HTML generation error:', error);
      throw new Error('HTML generation failed: ' + error.message);
    }

    let privacy, terms;
    try {
      console.log('Generating legal pages...');
      privacy = generatePrivacyPage(styles);
      terms = generateTermsPage(styles);

      if (!privacy || !terms) {
        throw new Error('Legal pages generation returned null');
      }
    } catch (error) {
      console.error('Legal pages generation error:', error);
      throw new Error('Legal pages generation failed: ' + error.message);
    }

    console.log('Generation completed successfully');
    return res.status(200).json({
      html,
      privacy,
      terms,
      success: true
    });

  } catch (error) {
    console.error('Final error in API handler:', {
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