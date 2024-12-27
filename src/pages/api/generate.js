import { generateVSLPage, generateEcomPage } from '@/lib/generators';
import { generatePrivacyPage, generateTermsPage } from '@/lib/utils/legal-pages';
import { getRandomStyle } from '@/lib/utils/style-variations';

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      console.error('Method not allowed:', req.method);
      return res.status(405).json({ message: 'Method not allowed' });
    }

    // Log the entire request for debugging
    console.log('Full request body:', JSON.stringify(req.body, null, 2));

    const { type, data } = req.body;
    if (!type || !data) {
      console.error('Missing type or data', { type, data });
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Log type and data separately
    console.log('Type:', type);
    console.log('Data:', JSON.stringify(data, null, 2));
    
    let styles;
    try {
      styles = getRandomStyle();
      console.log('Generated styles:', JSON.stringify(styles, null, 2));
    } catch (error) {
      console.error('Error generating styles:', {
        error: error.message,
        stack: error.stack
      });
      return res.status(500).json({ message: 'Error generating styles', error: error.message, stack: error.stack });
    }
    
    let html;
    try {
      if (type === 'vsl') {
        console.log('Attempting to generate VSL page...');
        const generatorInput = { ...data, styles };
        console.log('Generator input:', JSON.stringify(generatorInput, null, 2));
        html = generateVSLPage(generatorInput);
        console.log('VSL page generated successfully');
      } else if (type === 'ecom') {
        console.log('Generating E-commerce page...');
        const ecomInput = { ...data, styles };
        console.log('Ecom input:', JSON.stringify(ecomInput, null, 2));
        html = generateEcomPage(ecomInput);
      } else {
        console.error('Invalid page type:', type);
        return res.status(400).json({ message: 'Invalid page type' });
      }
    } catch (error) {
      console.error('Error in page generation:', {
        error: error.message,
        stack: error.stack,
        data: data,
        styles: styles
      });
      throw error;
    }

    let privacy, terms;
    try {
      console.log('Generating Privacy page...');
      privacy = generatePrivacyPage(styles);
      console.log('Privacy page generated');

      console.log('Generating Terms page...');
      terms = generateTermsPage(styles);
      console.log('Terms page generated');
    } catch (error) {
      console.error('Error generating legal pages:', {
        error: error.message,
        stack: error.stack
      });
      throw error;
    }

    console.log('All pages generated successfully');
    console.log('HTML Length:', html?.length);
    console.log('Privacy Length:', privacy?.length);
    console.log('Terms Length:', terms?.length);

    return res.status(200).json({
      html,
      privacy,
      terms,
      success: true
    });
  } catch (error) {
    console.error('Error in API handler:', {
      error: error.message,
      stack: error.stack,
      fullError: error
    });

    return res.status(500).json({
      message: error.message,
      stack: error.stack,
      fullError: JSON.stringify(error, Object.getOwnPropertyNames(error), null, 2),
    });
  }
}
