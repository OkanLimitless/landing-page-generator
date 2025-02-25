export const generateStatsViewer = () => `
<!DOCTYPE html>
<html>
<head>
    <title>Landing Page Stats</title>
    <style>
        body { font-family: Arial; padding: 20px; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background: #f5f5f5; }
    </style>
</head>
<body>
    <h1>Landing Page Stats</h1>
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
            <td id="ctrValue">0%</td>
        </tr>
    </table>

    <script>
        function updateStatsDisplay() {
            const stats = JSON.parse(localStorage.getItem('pageStats') || '{"views":0,"clicks":0}');
            document.getElementById('viewCount').textContent = stats.views;
            document.getElementById('clickCount').textContent = stats.clicks;
            const ctr = stats.views ? ((stats.clicks / stats.views) * 100).toFixed(2) : '0.00';
            document.getElementById('ctrValue').textContent = ctr + '%';
        }
        updateStatsDisplay();
    </script>
</body>
</html>
`; 