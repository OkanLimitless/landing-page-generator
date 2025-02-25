import fs from 'fs';
import path from 'path';

const STATS_DIR = path.join(process.cwd(), 'stats');

// Ensure stats directory exists
if (!fs.existsSync(STATS_DIR)) {
  fs.mkdirSync(STATS_DIR);
}

export default async function handler(req, res) {
  const { id } = req.query;
  const statsFile = path.join(STATS_DIR, `${id}.json`);

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

  return res.status(405).json({ message: 'Method not allowed' });
} 