import fs from 'fs';
import path from 'path';

const STATS_FILE = path.join(process.cwd(), 'stats.json');

// Initialize stats file if it doesn't exist
if (!fs.existsSync(STATS_FILE)) {
  fs.writeFileSync(STATS_FILE, JSON.stringify({
    totalViews: 0,
    totalClicks: 0,
    lastUpdated: new Date().toISOString()
  }));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { action, template } = req.body;
    
    // Read current stats
    const stats = JSON.parse(fs.readFileSync(STATS_FILE, 'utf8'));
    
    // Update stats based on action
    if (action === 'view') {
      stats.totalViews++;
    } else if (action === 'click') {
      stats.totalClicks++;
    }
    
    stats.lastUpdated = new Date().toISOString();
    
    // Save updated stats
    fs.writeFileSync(STATS_FILE, JSON.stringify(stats));
    
    return res.status(200).json(stats);
  } catch (error) {
    console.error('Error tracking stats:', error);
    return res.status(500).json({ error: 'Failed to track stats' });
  }
} 