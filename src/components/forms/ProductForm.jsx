import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ProductForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="productName">Product Name</Label>
        <Input
          id="productName"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          placeholder="Enter product name"
        />
      </div>


      <div>
        <Label htmlFor="productImages">Product Images</Label>
        <Input
          id="productImages"
          name="productImages"
          value={formData.productImages}
          onChange={handleChange}
          placeholder="Enter image URLs (comma-separated)"
        />
      </div>

      <div>
        <Label htmlFor="features">Features</Label>
        <Textarea
          id="features"
          name="features"
          value={formData.features}
          onChange={handleChange}
          placeholder="Enter product features (one per line)"
          className="h-32"
        />
      </div>

      <div>
        <Label htmlFor="buttonText">Button Text</Label>
        <Input
          id="buttonText"
          name="buttonText"
          value={formData.buttonText}
          onChange={handleChange}
          placeholder="Enter button text (e.g. Buy Now)"
        />
      </div>

      <div>
        <Label htmlFor="language">Language</Label>
        <select
          id="language"
          name="language"
          value={formData.language || 'en'}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="en">English</option>
          <option value="de">German</option>
        </select>
      </div>
    </div>
  );
};

export default ProductForm;
