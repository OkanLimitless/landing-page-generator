import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { action, version } = req.body;
    const statsFile = path.join(process.cwd(), 'stats.json');
    
    // Read existing stats
    let stats = {};
    if (fs.existsSync(statsFile)) {
      stats = JSON.parse(fs.readFileSync(statsFile, 'utf8'));
    }

    // Initialize version stats if needed
    if (!stats[version]) {
      stats[version] = { views: 0, clicks: 0 };
    }

    // Update stats
    if (action === 'view') {
      stats[version].views++;
    } else if (action === 'click') {
      stats[version].clicks++;
    }

    // Save stats
    fs.writeFileSync(statsFile, JSON.stringify(stats, null, 2));

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Tracking error:', error);
    res.status(500).json({ message: 'Tracking failed' });
  }
} 