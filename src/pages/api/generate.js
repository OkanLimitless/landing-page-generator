import { generateVSLPage } from '../../lib/generators/vsl';
import { generateEcomPage } from '../../lib/generators/ecom';
import { generateAdultLander } from '../../lib/generators/adult';
import { generatePrivacyPolicy, generateTermsOfService } from '../../lib/generators/legal';
import { generateStatsViewer } from '../../lib/generators/stats';
import { getRandomStyle } from '../../lib/utils/style-variations';
import JSZip from 'jszip';

export default async function handler(req, res) {
  console.log('API handler called with method:', req.method);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { type, data } = req.body || {};
    console.log('Request data:', { type, data });

    if (!type || !data) {
      return res.status(400).json({ 
        message: 'Missing required fields',
        details: { type: !type ? 'Type is required' : null, data: !data ? 'Data is required' : null }
      });
    }

    const styles = data.styles || getRandomStyle();
    console.log('Generated styles:', styles);
    
    if (!styles) {
      throw new Error('Failed to generate styles');
    }

    let html;
    switch (type) {
      case 'vsl':
        console.log('Generating VSL page...');
        html = generateVSLPage(data);
        break;
      case 'ecom':
        console.log('Generating Ecom page...');
        html = generateEcomPage(data);
        break;
      case 'adult':
        console.log('Generating Adult Lander...');
        html = generateAdultLander(data);
        break;
      default:
        throw new Error('Invalid page type');
    }

    if (!html) {
      throw new Error('Failed to generate HTML');
    }

    const privacy = generatePrivacyPolicy();
    const terms = generateTermsOfService();

    if (!privacy || !terms) {
      throw new Error('Failed to generate legal pages');
    }

    // Generate stats page
    const statsHtml = `<!DOCTYPE html>
    <html>
    <head>
        <title>Landing Page Stats</title>
        <style>
            body { font-family: Arial; padding: 20px; background: #f5f5f5; }
            .stats-card { 
              background: white; 
              border-radius: 8px; 
              padding: 20px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            table { border-collapse: collapse; width: 100%; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
            th { background: #f8f9fa; }
            h1 { color: #333; margin-bottom: 20px; }
            .ctr { color: #2196F3; font-weight: bold; }
        </style>
    </head>
    <body>
        <div class="stats-card">
            <h1>Landing Page Statistics</h1>
            <table>
                <tr>
                    <th>Metric</th>
                    <th>Count</th>
                </tr>
                <tr>
                    <td>Views</td>
                    <td id="viewCount">0</td>
                </tr>
                <tr>
                    <td>Clicks</td>
                    <td id="clickCount">0</td>
                </tr>
                <tr>
                    <td>CTR</td>
                    <td id="ctrValue" class="ctr">0%</td>
                </tr>
            </table>
        </div>

        <script>
            function updateStatsDisplay() {
                const stats = JSON.parse(localStorage.getItem('pageStats') || '{"views":0,"clicks":0}');
                document.getElementById('viewCount').textContent = stats.views;
                document.getElementById('clickCount').textContent = stats.clicks;
                const ctr = stats.views ? ((stats.clicks / stats.views) * 100).toFixed(2) : '0.00';
                document.getElementById('ctrValue').textContent = ctr + '%';
            }
            updateStatsDisplay();
            
            // Update stats every 5 seconds
            setInterval(updateStatsDisplay, 5000);
        </script>
    </body>
    </html>`;

    // Create zip with all files
    const zip = new JSZip();
    zip.file('index.html', html);
    zip.file('stats.html', statsHtml);
    zip.file('privacy.html', privacy);
    zip.file('terms.html', terms);

    // Generate zip file as base64
    const zipContent = await zip.generateAsync({ type: 'base64' });

    // Return in the format expected by the frontend
    return res.status(200).json({
      html,      // Original format expected these direct file contents
      privacy,
      terms,
      success: true,
      zipContent, // Add the zip content as well
      stats: statsHtml // Add stats HTML
    });

  } catch (error) {
    console.error('Error in API handler:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Generation failed',
      error: error.message
    });
  }
}