import { generateVSLPage } from '@/lib/generators/vsl';
import { generateEcomPage } from '@/lib/generators/ecom';
import { generatePrivacyPage, generateTermsPage } from '@/lib/utils/legal-pages';
import { getRandomStyle } from '@/lib/utils/style-variations';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { type, data } = req.body;
    console.log('Request body:', { type, data });

    if (!type || !data) {
      console.error('Missing type or data');
      return res.status(400).json({ message: 'Missing required fields' });
    }

    console.log('Generating pages for type:', type);
    
    const styles = getRandomStyle();
    console.log('Generated styles:', styles);
    
    let html;
    try {
      if (type === 'vsl') {
        console.log('Generating VSL page...');
        html = generateVSLPage({ ...data, styles });
      } else if (type === 'ecom') {
        console.log('Generating E-commerce page...');
        html = generateEcomPage({ ...data, styles });
      } else {
        console.error('Invalid page type:', type);
        return res.status(400).json({ message: 'Invalid page type' });
      }
    } catch (error) {
      console.error('Error generating main page:', error);
      throw error;
    }

    let privacy, terms;
    try {
      console.log('Generating Privacy page...');
      privacy = generatePrivacyPage(styles);

      console.log('Generating Terms page...');
      terms = generateTermsPage(styles);
    } catch (error) {
      console.error('Error generating legal pages:', error);
      throw error;
    }

    console.log('All pages generated successfully');

    return res.status(200).json({
      html,
      privacy,
      terms,
      success: true
    });

  } catch (error) {
    console.error('Generation error:', error);
    return res.status(500).json({ 
      message: error.message,
      stack: error.stack,
      name: error.name,
      details: JSON.stringify(error)
    });
  }
}