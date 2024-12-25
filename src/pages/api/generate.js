import { generateVSLPage } from '../../lib/generators';
import { generatePrivacyPage, generateTermsPage } from '../../lib/utils/legal-pages';
import { getRandomStyle } from '../../lib/utils/style-variations';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { type, data } = req.body;
    console.log('Generating pages for type:', type);
    
    const styles = getRandomStyle();
    console.log('Generated styles');
    
    if (type === 'vsl') {
      console.log('Generating VSL page...');
      const html = generateVSLPage({ ...data, styles });

      console.log('Generating Privacy page...');
      const privacy = generatePrivacyPage(styles);

      console.log('Generating Terms page...');
      const terms = generateTermsPage(styles);

      console.log('All pages generated successfully');

      return res.status(200).json({
        html,
        privacy,
        terms,
        success: true
      });
    }

    return res.status(400).json({ message: 'Invalid page type' });
  } catch (error) {
    console.error('Generation error:', error);
    return res.status(500).json({ message: error.message });
  }
}