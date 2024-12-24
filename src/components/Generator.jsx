import React, { useState } from 'react';
import { Save, Download, Upload } from 'lucide-react';

const VSLForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Headline</label>
        <input
          type="text"
          name="headline"
          value={formData.headline}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Enter your headline"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded h-24"
          placeholder="Enter your description"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Thumbnail URL</label>
        <input
          type="url"
          name="thumbnailUrl"
          value={formData.thumbnailUrl}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Enter thumbnail URL"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Offer URL</label>
        <input
          type="url"
          name="offerUrl"
          value={formData.offerUrl}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Enter offer URL"
        />
      </div>
    </div>
  );
};

const ProductForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Product Name</label>
        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Enter product name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Enter price"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Images</label>
        <input
          type="text"
          name="productImages"
          value={formData.productImages}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Enter image URLs (comma-separated)"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Features</label>
        <textarea
          name="features"
          value={formData.features}
          onChange={handleChange}
          className="w-full p-2 border rounded h-24"
          placeholder="Enter features (one per line)"
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
    offerUrl: ''
  });
  
  const [productFormData, setProductFormData] = useState({
    productName: '',
    price: '',
    productImages: '',
    features: ''
  });

  const handleGenerate = async () => {
    const formData = activeTab === 'vsl' ? vslFormData : productFormData;
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
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-semibold">Landing Page Generator</h2>
        </div>
        
        <div className="p-6">
          <div className="flex border-b mb-6">
            <button 
              className={`px-4 py-2 ${activeTab === 'vsl' ? 'border-b-2 border-blue-500' : ''}`}
              onClick={() => setActiveTab('vsl')}
            >
              VSL Page
            </button>
            <button 
              className={`px-4 py-2 ${activeTab === 'product' ? 'border-b-2 border-blue-500' : ''}`}
              onClick={() => setActiveTab('product')}
            >
              Product Page
            </button>
          </div>

          {activeTab === 'vsl' ? (
            <VSLForm
              formData={vslFormData}
              setFormData={setVslFormData}
            />
          ) : (
            <ProductForm
              formData={productFormData}
              setFormData={setProductFormData}
            />
          )}

          <div className="mt-6 flex justify-end space-x-4">
            <button className="px-4 py-2 border rounded hover:bg-gray-50">
              <Save className="inline-block w-4 h-4 mr-2" />
              Save
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-50">
              <Download className="inline-block w-4 h-4 mr-2" />
              Download
            </button>
            <button 
              onClick={handleGenerate}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              <Upload className="inline-block w-4 h-4 mr-2" />
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;