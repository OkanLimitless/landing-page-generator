import { generateVSLPage, generateEcomPage } from '@/lib/generators';
import { generatePrivacyPage, generateTermsPage } from '@/lib/utils/legal-pages';
import { getRandomStyle } from '@/lib/utils/style-variations';

const validateData = (data, type) => {
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
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { type, data } = req.body;

    if (!type || !data) {
      return res.status(400).json({ 
        message: 'Missing required fields',
        details: { type: !type ? 'Type is required' : null, data: !data ? 'Data is required' : null }
      });
    }

    const validationErrors = validateData(data, type);
    if (validationErrors.length > 0) {
      return res.status(400).json({ 
        message: 'Validation failed', 
        errors: validationErrors 
      });
    }

    const styles = data.styles || getRandomStyle();
    if (!styles) {
      throw new Error('Failed to generate styles');
    }

    let html;
    if (type === 'vsl') {
      html = generateVSLPage({ ...data, styles });
    } else if (type === 'ecom') {
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
      message: 'Generation failed',
      error: error.message,
      name: error.name
    });
  }
}