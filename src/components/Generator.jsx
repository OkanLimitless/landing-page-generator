import React, { useState, useEffect } from 'react';
import { Download, Trash2, Save } from 'lucide-react';
import JSZip from 'jszip';
import { contentPresets } from '../lib/utils/content-presets';

const VSLForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-2">Headline</label>
          <input type="text" name="headline" value={formData.headline} onChange={handleChange} className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white" placeholder="Enter your headline" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white h-32" placeholder="Enter your description (use new lines for bullet points)" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-2">Thumbnail URL</label>
          <input type="url" name="thumbnailUrl" value={formData.thumbnailUrl} onChange={handleChange} className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white" placeholder="Enter thumbnail URL" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">CTA Button Text</label>
          <input type="text" name="ctaText" value={formData.ctaText} onChange={handleChange} className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white" placeholder="Watch FREE Video Guide Now" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-2">Offer URL</label>
          <input type="url" name="offerUrl" value={formData.offerUrl} onChange={handleChange} className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white" placeholder="Enter offer URL" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Google Ads ID</label>
          <input type="text" name="gtagId" value={formData.gtagId} onChange={handleChange} className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white" placeholder="Format: AW-XXXXXXXXXX/XXXXXXXXXXXXX" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Tracking Script (Optional)</label>
        <textarea name="trackingScript" value={formData.trackingScript} onChange={handleChange} className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white h-32 font-mono text-sm" placeholder="Enter tracking script to be placed in <head>" />
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
          <input type="text" name="productName" value={formData.productName} onChange={handleChange} className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white" placeholder="Enter product name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Button Text</label>
          <input
            type="text"
            name="buttonText"
            value={formData.buttonText}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white"
            placeholder="Enter button text (e.g. Buy Now)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Language</label>
          <select
            name="language"
            value={formData.language || 'en'}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white"
          >
            <option value="en">English</option>
            <option value="de">German</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Features/Benefits</label>
        <textarea name="features" value={formData.features} onChange={handleChange} className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white h-32" placeholder="Enter features/benefits (one per line)" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Product Images</label>
        <input type="text" name="productImages" value={formData.productImages} onChange={handleChange} className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white" placeholder="Enter image URLs (comma separated)" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-2">Offer URL</label>
          <input type="url" name="offerUrl" value={formData.offerUrl} onChange={handleChange} className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white" placeholder="Enter offer/checkout URL" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Google Ads ID</label>
          <input type="text" name="gtagId" value={formData.gtagId} onChange={handleChange} className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white" placeholder="Format: AW-XXXXXXXXXX/XXXXXXXXXXXXX" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Tracking Script (Optional)</label>
        <textarea name="trackingScript" value={formData.trackingScript} onChange={handleChange} className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white h-32 font-mono text-sm" placeholder="Enter tracking script to be placed in <head>" />
      </div>
    </div>
  );
};

const Generator = () => {
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('vsl');
  const [loading, setLoading] = useState(false);
  const [showPresetModal, setShowPresetModal] = useState(false);
  const [newPresetName, setNewPresetName] = useState('');
  const [localPresets, setLocalPresets] = useState({});
  
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
    features: '',
    productImages: '',
    offerUrl: '',
    gtagId: '',
    trackingScript: '',
    buttonText: 'Buy Now',
    language: 'en'
  });

  // Load presets from localStorage on mount
  useEffect(() => {
    const savedPresets = JSON.parse(localStorage.getItem('customPresets') || '{}');
    setLocalPresets(savedPresets);
  }, []);

  // Combine default and local presets
  const allPresets = { ...contentPresets, ...localPresets };

  const generateRandomId = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  };

  const handleGenerate = async () => {
    try {
      setError(null);
      setLoading(true);
      
      const formData = activeTab === 'vsl' ? vslFormData : ecomFormData;
      
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
      
      const contentType = response.headers.get('content-type');
      const result = contentType?.includes('application/json') 
        ? await response.json()
        : await response.text();
      
      if (!response.ok) {
        throw new Error(result?.message || result || 'Generation failed');
      }
      
      if (!result?.html || !result?.privacy || !result?.terms) {
        throw new Error('Missing required files in response');
      }

      const zip = new JSZip();
      const folderId = generateRandomId();
      
      const folder = zip.folder(folderId);
      folder.file('index.html', result.html);
      folder.file('privacy.html', result.privacy);
      folder.file('terms.html', result.terms);

      const content = await zip.generateAsync({ type: 'blob' });
      
      const url = window.URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${folderId}.zip`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error generating files:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePresetChange = (e) => {
    const presetKey = e.target.value;
    if (presetKey && contentPresets[presetKey]) {
      if (activeTab === 'vsl') {
        setVslFormData(prev => ({
          ...prev,
          ...contentPresets[presetKey],
          preset: presetKey
        }));
      } else {
        setEcomFormData(prev => ({
          ...prev,
          ...contentPresets[presetKey],
          preset: presetKey
        }));
      }
    }
  };

  const handleSavePreset = () => {
    setShowPresetModal(true);
  };

  const confirmSavePreset = () => {
    if (!newPresetName) return;
    
    const presetKey = newPresetName.replace(/\s+/g, '');
    const currentFormData = activeTab === 'vsl' ? vslFormData : ecomFormData;
    
    // Create new preset without the preset field itself
    const { preset, ...presetData } = currentFormData;
    
    const updatedPresets = {
      ...localPresets,
      [presetKey]: presetData
    };
    
    localStorage.setItem('customPresets', JSON.stringify(updatedPresets));
    setLocalPresets(updatedPresets);
    setShowPresetModal(false);
    setNewPresetName('');
  };

  const handleDeletePreset = (presetKey) => {
    const updatedPresets = { ...localPresets };
    delete updatedPresets[presetKey];
    
    localStorage.setItem('customPresets', JSON.stringify(updatedPresets));
    setLocalPresets(updatedPresets);
  };

  // Update presetOptions to use allPresets
  const presetOptions = Object.keys(allPresets).map(key => ({
    value: key,
    label: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
    isCustom: !!localPresets[key]
  }));

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      {/* Preset Modal */}
      {showPresetModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Save as Preset</h3>
            <input
              type="text"
              value={newPresetName}
              onChange={(e) => setNewPresetName(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 mb-4"
              placeholder="Enter preset name"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowPresetModal(false)}
                className="px-4 py-2 text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={confirmSavePreset}
                className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold">Landing Page Generator</h2>
            <p className="text-gray-400 mt-1">Create high-converting, compliant landing pages</p>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Select Preset</label>
              <div className="relative">
                <select
                  value={activeTab === 'vsl' ? vslFormData.preset : ecomFormData.preset}
                  onChange={handlePresetChange}
                  className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white pr-10"
                >
                  <option value="">-- Select a Preset --</option>
                  {presetOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label} {option.isCustom && '(Custom)'}
                    </option>
                  ))}
                </select>
                {activeTab === 'vsl' ? vslFormData.preset : ecomFormData.preset && (
                  <button
                    onClick={() => handleDeletePreset(activeTab === 'vsl' ? vslFormData.preset : ecomFormData.preset)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-red-500 hover:text-red-400"
                    title="Delete Preset"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            <div className="mb-6">
              <button
                onClick={handleSavePreset}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"
              >
                <Save className="w-4 h-4" />
                Save Current Settings as Preset
              </button>
            </div>

            <div className="flex border-b border-gray-700 mb-6">
              <button 
                className={`px-4 py-2 ${activeTab === 'vsl' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400'}`}
                onClick={() => setActiveTab('vsl')}
                disabled={loading}
              >
                VSL Page
              </button>
              <button 
                className={`px-4 py-2 ${activeTab === 'ecom' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400'}`}
                onClick={() => setActiveTab('ecom')}
                disabled={loading}
              >
                E-commerce Page
              </button>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
                {error}
              </div>
            )}

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
                disabled={loading}
                className={`px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center font-medium ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <Download className="w-5 h-5 mr-2" />
                {loading ? 'Generating...' : 'Generate & Download'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
