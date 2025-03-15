import { generateVSLPage } from '../../lib/generators/vsl';
import { generateEcomPage } from '../../lib/generators/ecom';
import { generateAdultLander } from '../../lib/generators/adult';
import { generateQuizPage } from '../../lib/generators/quiz';
import { generatePrivacyPolicy, generateTermsOfService } from '../../lib/generators/legal';
import { getRandomStyle } from '../../lib/utils/style-variations';
import JSZip from 'jszip';

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
        html = generateAdultLander(data);
        break;
      case 'quiz':
        console.log('Generating Quiz page...');
        html = generateQuizPage(data);
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

    // Generate zip file as base64
    const zipContent = await zip.generateAsync({ type: 'base64' });

    return res.status(200).json({
      html,
      privacy,
      terms,
      success: true,
      zipContent,
      manifest: {
        files: [
          'index.html',
          'privacy.html',
          'terms.html'
        ]
      }
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