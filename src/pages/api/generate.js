import { generateVSLPage } from '@/lib/generators';
import { generatePrivacyPage, generateTermsPage } from '@/lib/utils/legal-pages';
import { getRandomStyle } from '@/lib/utils/style-variations';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { type, data } = req.body;
    const styles = getRandomStyle();
    
    if (type === 'vsl') {
      const html = generateVSLPage({ ...data, styles });
      const privacy = generatePrivacyPage(styles);
      const terms = generateTermsPage(styles);

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