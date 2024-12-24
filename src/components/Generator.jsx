import React, { useState } from 'react';
import { Download } from 'lucide-react';

const VSLForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-2">Headline</label>
          <input
            type="text"
            name="headline"
            value={formData.headline}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white"
            placeholder="Enter your headline"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Design Theme</label>
          <select
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white"
          >
            <option value="ocean">Ocean Blue</option>
            <option value="sunset">Sunset Red</option>
            <option value="forest">Forest Green</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white h-32"
          placeholder="Enter your description (use new lines for bullet points)"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Thumbnail URL</label>
        <input
          type="url"
          name="thumbnailUrl"
          value={formData.thumbnailUrl}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white"
          placeholder="Enter thumbnail URL"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-2">Offer URL</label>
          <input
            type="url"
            name="offerUrl"
            value={formData.offerUrl}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white"
            placeholder="Enter offer URL"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Google Ads ID</label>
          <input
            type="text"
            name="gtagId"
            value={formData.gtagId}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white"
            placeholder="Format: AW-XXXXXXXXXX/XXXXXXXXXXXXX"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Tracking Script (Optional)</label>
        <textarea
          name="trackingScript"
          value={formData.trackingScript}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white h-32 font-mono text-sm"
          placeholder="Enter your tracking script to be placed in <head>"
        />
      </div>

      <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <h3 className="font-medium text-blue-400 mb-2">Advanced Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="randomizeElements"
                checked={formData.randomizeElements}
                onChange={(e) => handleChange({
                  target: {
                    name: e.target.name,
                    value: e.target.checked
                  }
                })}
                className="mr-2"
              />
              <span className="text-sm">Randomize element IDs and classes</span>
            </label>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="addImageCTA"
                checked={formData.addImageCTA}
                onChange={(e) => handleChange({
                  target: {
                    name: e.target.name,
                    value: e.target.checked
                  }
                })}
                className="mr-2"
              />
              <span className="text-sm">Make thumbnail clickable (same as CTA)</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const Generator = () => {
  const [activeTab, setActiveTab] = useState('vsl');
  const [vslFormData, setVslFormData] = useState({
    headline: '',
    description: '',
    thumbnailUrl: '',
    offerUrl: '',
    gtagId: '',
    trackingScript: '',
    theme: 'ocean',
    randomizeElements: true,
    addImageCTA: true
  });

  const handleGenerate = async () => {
    const formData = activeTab === 'vsl' ? vslFormData : {};
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: activeTab,
          data: formData
        }),
      });
      
      if (!response.ok) throw new Error('Generation failed');
      
      const result = await response.json();
      if (result.html) {
        // Create blob and download
        const blob = new Blob([result.html], { type: 'text/html' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${activeTab}-landing-page-${Date.now()}.html`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold">Landing Page Generator</h2>
            <p className="text-gray-400 mt-1">Create high-converting, compliant landing pages</p>
          </div>
          
          <div className="p-6">
            <div className="flex border-b border-gray-700 mb-6">
              <button 
                className={`px-4 py-2 ${activeTab === 'vsl' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400'}`}
                onClick={() => setActiveTab('vsl')}
              >
                VSL Page
              </button>
            </div>

            {activeTab === 'vsl' && (
              <VSLForm
                formData={vslFormData}
                setFormData={setVslFormData}
              />
            )}

            <div className="mt-6 flex justify-end">
              <button 
                onClick={handleGenerate}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center font-medium"
              >
                <Download className="w-5 h-5 mr-2" />
                Generate & Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;