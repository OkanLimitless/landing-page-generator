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
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
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
    </div>
  );
};

export default ProductForm;