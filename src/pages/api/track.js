import fs from 'fs';
import path from 'path';

const STATS_DIR = path.join(process.cwd(), 'stats');

// Ensure stats directory exists
if (!fs.existsSync(STATS_DIR)) {
  fs.mkdirSync(STATS_DIR);
}

export default async function handler(req, res) {
  const { id, action } = req.query;
  if (!id) {
    return res.status(400).json({ error: 'Missing template ID' });
  }

  const statsFile = path.join(STATS_DIR, `${id}.json`);

  try {
    let stats = {
      totalViews: 0,
      totalClicks: 0,
      lastUpdated: new Date().toISOString()
    };

    if (fs.existsSync(statsFile)) {
      stats = JSON.parse(fs.readFileSync(statsFile, 'utf8'));
    }

    if (action === 'view') {
      stats.totalViews++;
    } else if (action === 'click') {
      stats.totalClicks++;
    }

    stats.lastUpdated = new Date().toISOString();
    fs.writeFileSync(statsFile, JSON.stringify(stats));

    return res.status(200).json(stats);
  } catch (error) {
    console.error('Error updating stats:', error);
    return res.status(500).json({ error: 'Failed to update stats' });
  }
} 