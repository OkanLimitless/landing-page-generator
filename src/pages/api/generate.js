import { generateVSLPage, generateProductPage } from '@/lib/generators';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { type, data } = req.body;
    let html = type === 'vsl' ? generateVSLPage(data) : generateProductPage(data);
    return res.status(200).json({ html, success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}