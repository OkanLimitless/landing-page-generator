import fs from 'fs';
import path from 'path';

const STATS_DIR = path.join(process.cwd(), 'stats');

// Ensure stats directory exists
if (!fs.existsSync(STATS_DIR)) {
  fs.mkdirSync(STATS_DIR);
}

export default async function handler(req, res) {
  const { id } = req.query; // Landing page ID
  const statsFile = path.join(STATS_DIR, `${id || 'default'}.json`);

  // GET request to fetch stats
  if (req.method === 'GET') {
    try {
      if (!fs.existsSync(statsFile)) {
        return res.status(200).json({
          totalViews: 0,
          totalClicks: 0,
          lastUpdated: null
        });
      }
      const stats = JSON.parse(fs.readFileSync(statsFile, 'utf8'));
      return res.status(200).json(stats);
    } catch (error) {
      console.error('Error reading stats:', error);
      return res.status(500).json({ error: 'Failed to read stats' });
    }
  }

  // Record stats via GET with action parameter (more compliant than POST)
  if (req.query.action) {
    try {
      let stats = {
        totalViews: 0,
        totalClicks: 0,
        lastUpdated: new Date().toISOString()
      };

      if (fs.existsSync(statsFile)) {
        stats = JSON.parse(fs.readFileSync(statsFile, 'utf8'));
      }

      if (req.query.action === 'view') {
        stats.totalViews++;
      } else if (req.query.action === 'click') {
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

  return res.status(405).json({ message: 'Method not allowed' });
} 