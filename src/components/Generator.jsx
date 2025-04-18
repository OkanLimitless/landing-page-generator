import React, { useState, useEffect } from 'react';
import { Download, Trash2, Save } from 'lucide-react';
import JSZip from 'jszip';
import { contentPresets } from '../lib/utils/content-presets';
import { prelanderTemplates } from '../lib/templates/adult-prelander';  // Import templates

// Create common input class for both forms
const commonInputClass = "w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white";
const commonTextareaClass = `${commonInputClass} h-32`;

// Define template options at the top level
const ADULT_TEMPLATES = {
  clinical: "Clinical Study Template",
  discovery: "Harvard Discovery Template",
  medical: "Doctor's Secret Template",
  research: "Research Team Template",
  version1: "Wife's Story Template",
  version2: "Clinical Results Template",
  version3: "Scientific Study Template"
};

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
            className={commonInputClass}
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
          className={commonTextareaClass}
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
            className={commonInputClass}
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
            className={commonInputClass}
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
            className={commonInputClass}
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
            className={commonInputClass}
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
          className={`${commonTextareaClass} font-mono text-sm`}
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
            className={commonInputClass}
            placeholder="Enter product name" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Button Text</label>
          <input
            type="text"
            name="buttonText"
            value={formData.buttonText}
            onChange={handleChange}
            className={commonInputClass}
            placeholder="Enter button text (e.g. Buy Now)"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Language</label>
          <select
            name="language"
            value={formData.language || 'en'}
            onChange={handleChange}
            className={commonInputClass}
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

const AdultLanderForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-2">CTA URL</label>
          <input 
            type="url" 
            name="ctaUrl" 
            value={formData.ctaUrl} 
            onChange={handleChange} 
            className={commonInputClass}
            placeholder="Enter your CTA URL" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Google Ads ID</label>
          <input 
            type="text" 
            name="gtagId" 
            value={formData.gtagId} 
            onChange={handleChange} 
            className={commonInputClass}
            placeholder="Format: AW-XXXXXXXXXX/XXXXXXXXXXXXX" 
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Select Template
        </label>
        <select 
          value={formData.template || ''} 
          onChange={(e) => setFormData({...formData, template: e.target.value})}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select a template...</option>
          {Object.entries(ADULT_TEMPLATES).map(([key, name]) => (
            <option key={key} value={key}>{name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

// Add QuizForm component
const QuizForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-2">Google Ads ID</label>
          <input 
            type="text" 
            name="gtagId" 
            value={formData.gtagId} 
            onChange={handleChange} 
            className={commonInputClass}
            placeholder="Format: AW-XXXXXXXXXX/XXXXXXXXXXXXX" 
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Custom Tracking Script (Optional)</label>
        <textarea 
          name="trackingScript" 
          value={formData.trackingScript} 
          onChange={handleChange} 
          className={commonTextareaClass}
          placeholder="Paste your custom tracking script here" 
        />
      </div>
    </div>
  );
};

// Add TMatesForm component
const TMatesForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-2">Google Ads ID</label>
          <input 
            type="text" 
            name="gtagId" 
            value={formData.gtagId} 
            onChange={handleChange} 
            className={commonInputClass}
            placeholder="Format: AW-XXXXXXXXXX/XXXXXXXXXXXXX" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Offer URL</label>
          <input 
            type="url" 
            name="offerUrl" 
            value={formData.offerUrl} 
            onChange={handleChange} 
            className={commonInputClass}
            placeholder="Enter offer URL" 
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Tracking Script (Optional)</label>
        <textarea 
          name="trackingScript" 
          value={formData.trackingScript} 
          onChange={handleChange} 
          className={`${commonTextareaClass} font-mono text-sm`}
          placeholder="Enter tracking script to be placed in <head>" 
        />
      </div>
    </div>
  );
};

// Add GutterLeadsForm component
const GutterLeadsForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-400 mb-1">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title || ''}
          onChange={handleChange}
          className="block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white"
          placeholder="Enter your headline"
        />
      </div>

      <div>
        <label htmlFor="text" className="block text-sm font-medium text-gray-400 mb-1">Description Text</label>
        <textarea
          name="text"
          id="text"
          rows={6}
          value={formData.text || ''}
          onChange={handleChange}
          className="block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white"
          placeholder="Enter your description (use new lines for bullet points)"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-400 mb-1">Target URL</label>
          <input
            type="text"
            name="url"
            id="url"
            value={formData.url || ''}
            onChange={handleChange}
            className="block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white"
            placeholder="https://example.com/landing"
          />
        </div>
        <div>
          <label htmlFor="buttonText" className="block text-sm font-medium text-gray-400 mb-1">Button Text</label>
          <input
            type="text"
            name="buttonText"
            id="buttonText"
            value={formData.buttonText || ''}
            onChange={handleChange}
            className="block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white"
            placeholder="Find Out What Your Home Qualifies For!"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="gtagId" className="block text-sm font-medium text-gray-400 mb-1">Google Ads Tag ID</label>
          <input
            type="text"
            name="gtagId"
            id="gtagId"
            value={formData.gtagId || ''}
            onChange={handleChange}
            className="block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white"
            placeholder="AW-XXXXXXXXXX/XXXXXXXXXXXXX"
          />
        </div>
        <div>
          <label htmlFor="logoUrl" className="block text-sm font-medium text-gray-400 mb-1">Logo Image URL</label>
          <input
            type="text"
            name="logoUrl"
            id="logoUrl"
            value={formData.logoUrl || ''}
            onChange={handleChange}
            className="block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white"
            placeholder="https://example.com/logo.png"
          />
        </div>
      </div>
    </div>
  );
};

// Add GLPForm component for weight loss landing page
const GLPForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Brand Name</label>
        <input 
          type="text" 
          name="brandName" 
          value={formData.brandName || 'GLP-1'} 
          onChange={handleChange} 
          className={commonInputClass}
          placeholder="Brand Name (e.g. GLP-1)" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Target URL</label>
        <input 
          type="url" 
          name="targetUrl" 
          value={formData.targetUrl} 
          onChange={handleChange} 
          className={commonInputClass}
          placeholder="https://hit.prowellnessroute.com/C5SxvyuMoC" 
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Google Ads ID</label>
        <input 
          type="text" 
          name="gtagId" 
          value={formData.gtagId} 
          onChange={handleChange} 
          className={commonInputClass}
          placeholder="Format: AW-XXXXXXXXXX/XXXXXXXXXXXXX" 
        />
      </div>
    </div>
  );
};

const Generator = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPresetModal, setShowPresetModal] = useState(false);
  const [newPresetName, setNewPresetName] = useState('');
  const [activeTab, setActiveTab] = useState('vsl');
  const [localPresets, setLocalPresets] = useState({});
  
  const [vslFormData, setVslFormData] = useState({
    headline: '',
    description: '',
    thumbnailUrl: '',
    ctaText: 'Watch FREE Video Guide Now',
    offerUrl: '',
    gtagId: '',
    trackingScript: ''
  });

  const [ecomFormData, setEcomFormData] = useState({
    productName: '',
    buttonText: 'Buy Now',
    language: 'en',
    features: '',
    productImages: '',
    offerUrl: '',
    gtagId: '',
    trackingScript: ''
  });

  const [adultLanderFormData, setAdultLanderFormData] = useState({
    ctaUrl: '',
    gtagId: '',
    template: 'brazilian'
  });

  // Add quiz form data state
  const [quizFormData, setQuizFormData] = useState({
    gtagId: '',
    trackingScript: ''
  });

  // Add TMates form data state
  const [tmatesFormData, setTMatesFormData] = useState({
    offerUrl: 'https://nmttrack.com/?a=25528&c=403992',
    gtagId: '',
    trackingScript: ''
  });

  // Add gutterLeads form data state
  const [gutterLeadsFormData, setGutterLeadsFormData] = useState({
    title: '',
    text: '',
    buttonText: '',
    url: '',
    gtagId: '',
    logoUrl: ''
  });

  // Add GLP form data state
  const [glpFormData, setGlpFormData] = useState({
    brandName: '',
    targetUrl: 'https://hit.prowellnessroute.com/C5SxvyuMoC',
    gtagId: ''
  });

  // Load presets from localStorage on mount
  useEffect(() => {
    const savedPresets = JSON.parse(localStorage.getItem('customPresets') || '{}');
    setLocalPresets(savedPresets);
  }, []);

  const allPresets = localPresets;

  const generateRandomId = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length: 8 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  };

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setError(null);

      let data;
      
      switch (activeTab) {
        case 'vsl':
          data = vslFormData;
          break;
        case 'ecom':
          data = ecomFormData;
          break;
        case 'quiz':
          data = quizFormData;
          break;
        case 'adult':
          data = adultLanderFormData;
          break;
        case 'tmates':
          data = tmatesFormData;
          break;
        case 'gutterLeads':
          data = gutterLeadsFormData;
          break;
        case 'glp':
          data = glpFormData;
          break;
        default:
          throw new Error('Invalid tab selection');
      }

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: activeTab,
          data: data
        })
      });

      const dataResponse = await response.json();

      if (!dataResponse.success) {
        throw new Error(dataResponse.message || 'Generation failed');
      }

      // Convert base64 zip to blob and download
      const binaryString = window.atob(dataResponse.zipContent);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const zipBlob = new Blob([bytes], { type: 'application/zip' });
      const downloadUrl = URL.createObjectURL(zipBlob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `landing-page-${Date.now()}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);

      setLoading(false);
    } catch (error) {
      console.error('Error generating files:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  const handlePresetChange = (e) => {
    const presetKey = e.target.value;
    if (presetKey && allPresets[presetKey]) {
      if (activeTab === 'vsl') {
        setVslFormData(prev => ({
          ...prev,
          ...allPresets[presetKey],
          preset: presetKey
        }));
      } else if (activeTab === 'ecom') {
        setEcomFormData(prev => ({
          ...prev,
          ...allPresets[presetKey],
          preset: presetKey
        }));
      } else if (activeTab === 'quiz') {
        setQuizFormData(prev => ({
          ...prev,
          ...allPresets[presetKey],
          preset: presetKey
        }));
      } else if (activeTab === 'adult') {
        setAdultLanderFormData(prev => ({
          ...prev,
          ...allPresets[presetKey],
          preset: presetKey
        }));
      } else if (activeTab === 'tmates') {
        setTMatesFormData(prev => ({
          ...prev,
          ...allPresets[presetKey],
          preset: presetKey
        }));
      } else if (activeTab === 'gutterLeads') {
        setGutterLeadsFormData(prev => ({
          ...prev,
          ...allPresets[presetKey],
          preset: presetKey
        }));
      } else if (activeTab === 'glp') {
        setGlpFormData(prev => ({
          ...prev,
          ...allPresets[presetKey],
          preset: presetKey
        }));
      }
    } else {
      // Clear preset selection
      if (activeTab === 'vsl') {
        setVslFormData(prev => ({
          ...prev,
          preset: ''
        }));
      } else if (activeTab === 'ecom') {
        setEcomFormData(prev => ({
          ...prev,
          preset: ''
        }));
      } else if (activeTab === 'quiz') {
        setQuizFormData(prev => ({
          ...prev,
          preset: ''
        }));
      } else if (activeTab === 'adult') {
        setAdultLanderFormData(prev => ({
          ...prev,
          preset: ''
        }));
      } else if (activeTab === 'tmates') {
        setTMatesFormData(prev => ({
          ...prev,
          preset: ''
        }));
      } else if (activeTab === 'gutterLeads') {
        setGutterLeadsFormData(prev => ({
          ...prev,
          preset: ''
        }));
      } else if (activeTab === 'glp') {
        setGlpFormData(prev => ({
          ...prev,
          preset: ''
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
    const currentFormData = activeTab === 'vsl' ? vslFormData : activeTab === 'ecom' ? ecomFormData : activeTab === 'quiz' ? quizFormData : activeTab === 'adult' ? adultLanderFormData : activeTab === 'tmates' ? tmatesFormData : activeTab === 'gutterLeads' ? gutterLeadsFormData : glpFormData;
    
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

  const presetOptions = Object.keys(allPresets).map(key => ({
    value: key,
    label: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
    isCustom: true
  }));

  const typeOptions = [
    { value: 'vsl', label: 'Video Sales Letter' },
    { value: 'ecom', label: 'E-commerce Product' },
    { value: 'glp', label: 'GLP Health Hub' }
  ];

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
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <select
                    value={activeTab === 'vsl' ? vslFormData.preset : activeTab === 'ecom' ? ecomFormData.preset : activeTab === 'quiz' ? quizFormData.preset : activeTab === 'adult' ? adultLanderFormData.preset : activeTab === 'tmates' ? tmatesFormData.preset : activeTab === 'gutterLeads' ? gutterLeadsFormData.preset : glpFormData.preset}
                    onChange={handlePresetChange}
                    className="w-full p-3 border rounded-lg bg-white/5 border-white/10 text-white pr-10"
                  >
                    <option value="">-- Select a Preset --</option>
                    {presetOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                {(activeTab === 'vsl' ? vslFormData.preset : activeTab === 'ecom' ? ecomFormData.preset : activeTab === 'quiz' ? quizFormData.preset : activeTab === 'adult' ? adultLanderFormData.preset : activeTab === 'tmates' ? tmatesFormData.preset : activeTab === 'gutterLeads' ? gutterLeadsFormData.preset : glpFormData.preset) && 
                  localPresets[activeTab === 'vsl' ? vslFormData.preset : activeTab === 'ecom' ? ecomFormData.preset : activeTab === 'quiz' ? quizFormData.preset : activeTab === 'adult' ? adultLanderFormData.preset : activeTab === 'tmates' ? tmatesFormData.preset : activeTab === 'gutterLeads' ? gutterLeadsFormData.preset : glpFormData.preset] && (
                    <button
                      onClick={() => {
                        const presetToDelete = activeTab === 'vsl' ? vslFormData.preset : activeTab === 'ecom' ? ecomFormData.preset : activeTab === 'quiz' ? quizFormData.preset : activeTab === 'adult' ? adultLanderFormData.preset : activeTab === 'tmates' ? tmatesFormData.preset : activeTab === 'gutterLeads' ? gutterLeadsFormData.preset : glpFormData.preset;
                        if (window.confirm(`Are you sure you want to delete the "${presetToDelete}" preset?`)) {
                          handleDeletePreset(presetToDelete);
                        }
                      }}
                      className="px-4 py-2 text-red-500 hover:text-red-400 flex items-center gap-1 border border-red-500/20 hover:border-red-400/30 rounded-lg"
                      title="Delete Preset"
                    >
                      <Trash2 className="w-5 h-5" />
                      <span className="sr-only">Delete Preset</span>
                    </button>
                  )
                }
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
              <button 
                className={`px-4 py-2 ${activeTab === 'glp' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-400'}`}
                onClick={() => setActiveTab('glp')}
                disabled={loading}
              >
                GLP Health
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
            ) : activeTab === 'ecom' ? (
              <EcomForm
                formData={ecomFormData}
                setFormData={setEcomFormData}
              />
            ) : activeTab === 'quiz' ? (
              <QuizForm
                formData={quizFormData}
                setFormData={setQuizFormData}
              />
            ) : activeTab === 'adult' ? (
              <AdultLanderForm
                formData={adultLanderFormData}
                setFormData={setAdultLanderFormData}
              />
            ) : activeTab === 'tmates' ? (
              <TMatesForm
                formData={tmatesFormData}
                setFormData={setTMatesFormData}
              />
            ) : activeTab === 'gutterLeads' ? (
              <GutterLeadsForm
                formData={gutterLeadsFormData}
                setFormData={setGutterLeadsFormData}
              />
            ) : activeTab === 'glp' ? (
              <GLPForm
                formData={glpFormData}
                setFormData={setGlpFormData}
              />
            ) : null}

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
