import React, { useState } from 'react';
import { Download } from 'lucide-react';
import JSZip from 'jszip';

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

      <div className="grid gap-6 md:grid-cols-2">
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

        <div>
          <label className="block text-sm font-medium mb-2">CTA Button Text</label>
          <input
            type="text"
            name="ctaText"
            value={formData.ctaText}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white"
            placeholder="Watch FREE Video Guide Now"
          />
        </div>
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
          placeholder="Enter tracking script to be placed in <head>"
        />
      </div>
    </div>
  );
};

const EcomForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-2">Product Name</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white"
            placeholder="Enter product name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white"
            placeholder="Enter price (e.g., 47.99)"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Features/Benefits</label>
        <textarea
          name="features"
          value={formData.features}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white h-32"
          placeholder="Enter features/benefits (one per line)"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Product Images</label>
        <input
          type="text"
          name="productImages"
          value={formData.productImages}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white"
          placeholder="Enter image URLs (comma separated)"
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
            placeholder="Enter offer/checkout URL"
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
          placeholder="Enter tracking script to be placed in <head>"
        />
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
    ctaText: 'Watch FREE Video Guide Now'
  });

  const [ecomFormData, setEcomFormData] = useState({
    productName: '',
    price: '',
    features: '',
    productImages: '',
    offerUrl: '',
    gtagId: '',
    trackingScript: ''
  });

  const generateRandomId = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  };

  const handleGenerate = async () => {
    try {
      console.log('Generating pages...');
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: activeTab,
          data: activeTab === 'vsl' ? vslFormData : ecomFormData
        }),
      });
      
      if (!response.ok) throw new Error('Generation failed');
      
      const result = await response.json();
      console.log('Generation result:', result);

      if (result.html && result.privacy && result.terms) {
        const zip = new JSZip();
        const folderId = generateRandomId();
        console.log('Generated folder ID:', folderId);

        // Create folder and add files
        const folder = zip.folder(folderId);
        folder.file('index.html', result.html);
        folder.file('privacy.html', result.privacy);
        folder.file('terms.html', result.terms);

        console.log('Creating ZIP file...');
        const content = await zip.generateAsync({ type: 'blob' });
        
        // Download ZIP file
        const url = window.URL.createObjectURL(content);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${folderId}.zip`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        console.log('ZIP file downloaded');
      } else {
        throw new Error('Missing required files in response');
      }
    } catch (error) {
      console.error('Error generating files:', error);
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
              <button 
                className={`px-4 py-2 ${activeTab === 'ecom' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400'}`}
                onClick={() => setActiveTab('ecom')}
              >
                E-commerce Page
              </button>
            </div>

            {activeTab === 'vsl' ? (
              <VSLForm
                formData={vslFormData}
                setFormData={setVslFormData}
              />
            ) : (
              <EcomForm
                formData={ecomFormData}
                setFormData={setEcomFormData}
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