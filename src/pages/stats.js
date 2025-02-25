import { useState, useEffect } from 'react';
import fs from 'fs';
import path from 'path';

export default function Stats({ initialStats }) {
  const [stats, setStats] = useState(initialStats);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Landing Page Stats</h1>
      <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>Views</th>
            <th>Clicks</th>
            <th>CTR</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(stats).map(([version, data]) => (
            <tr key={version}>
              <td>{version}</td>
              <td>{data.views}</td>
              <td>{data.clicks}</td>
              <td>{((data.clicks / data.views) * 100).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getServerSideProps() {
  const statsFile = path.join(process.cwd(), 'stats.json');
  let stats = {};
  
  if (fs.existsSync(statsFile)) {
    stats = JSON.parse(fs.readFileSync(statsFile, 'utf8'));
  }

  return {
    props: {
      initialStats: stats
    }
  };
} 