import { generateVSLPage, generateProductPage } from '../../lib/generators';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { type, data } = req.body;

    let html;
    if (type === 'vsl') {
      html = generateVSLPage(data);
    } else if (type === 'product') {
      html = generateProductPage(data);
    } else {
      throw new Error('Invalid page type');
    }

    return res.status(200).json({
      html,
      success: true
    });

  } catch (error) {
    console.error('Generation error:', error);
    return res.status(500).json({
      message: 'Error generating page',
      error: error.message
    });
  }
}