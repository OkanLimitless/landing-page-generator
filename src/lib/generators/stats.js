export const generateStatsViewer = () => `<!DOCTYPE html>
<html>
<head>
    <title>Landing Page Statistics</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 0;
            background: #f4f6f8;
            min-height: 100vh;
        }
        .container {
            max-width: 1000px;
            margin: 40px auto;
            padding: 0 20px;
        }
        h1 {
            color: #1a2b3c;
            font-size: 28px;
            margin-bottom: 30px;
            font-weight: 600;
        }
        .stats-table {
            width: 100%;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            overflow: hidden;
        }
        .stats-table th,
        .stats-table td {
            padding: 20px;
            text-align: left;
            border-bottom: 1px solid #edf2f7;
        }
        .stats-table th {
            background: #f8fafc;
            font-weight: 500;
            color: #64748b;
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 0.5px;
        }
        .stats-table td {
            font-size: 16px;
            color: #334155;
        }
        #ctrValue {
            color: #0ea5e9;
            font-weight: 600;
        }
        .refresh-text {
            text-align: center;
            color: #64748b;
            font-size: 14px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Landing Page Statistics</h1>
        <table class="stats-table">
            <thead>
                <tr>
                    <th>Metric</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
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
                    <td id="ctrValue">0.00%</td>
                </tr>
            </tbody>
        </table>
        <p class="refresh-text">Stats auto-refresh every 5 seconds</p>
    </div>

    <script>
        function updateStatsDisplay() {
            const stats = JSON.parse(localStorage.getItem('pageStats') || '{"totalViews":0,"totalClicks":0}');
            document.getElementById('viewCount').textContent = stats.totalViews || 0;
            document.getElementById('clickCount').textContent = stats.totalClicks || 0;
            const ctr = stats.totalViews ? ((stats.totalClicks / stats.totalViews) * 100).toFixed(2) : '0.00';
            document.getElementById('ctrValue').textContent = ctr + '%';
        }
        
        // Initial update
        updateStatsDisplay();
        
        // Update every 5 seconds
        setInterval(updateStatsDisplay, 5000);
    </script>
</body>
</html>`; 