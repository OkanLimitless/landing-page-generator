import React from 'react';
import { contentPresets } from '../../lib/utils/content-presets';

const VSLForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePresetChange = (e) => {
    const presetKey = e.target.value;
    if (presetKey && contentPresets[presetKey]) {
      setFormData(prev => ({
        ...prev,
        ...contentPresets[presetKey],
        preset: presetKey
      }));
    }
  };

  const presetOptions = Object.keys(contentPresets).map(key => ({
    value: key,
    label: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
  }));

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Select Preset</label>
        <select
          name="preset"
          value={formData.preset || ''}
          onChange={handlePresetChange}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Select a Preset --</option>
          {presetOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

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

export default VSLForm;