import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ProductPreview = ({ data }) => {
  const features = data.features.split('\n').filter(Boolean);
  const images = data.productImages.split(',').map(url => url.trim());

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white rounded-lg shadow">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          {images[0] && (
            <img
              src={images[0]}
              alt={data.productName}
              className="w-full rounded-lg object-cover"
            />
          )}
          
          <div className="grid grid-cols-4 gap-2 mt-2">
            {images.slice(1).map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`${data.productName} view ${index + 2}`}
                className="w-full rounded-lg object-cover aspect-square"
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-2">{data.productName}</h1>
          <p className="text-xl font-semibold text-blue-600 mb-4">
            ${parseFloat(data.price).toFixed(2)}
          </p>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Features</h2>
            <ul className="list-disc pl-5 space-y-2">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold mt-6 hover:bg-blue-700 transition-colors">
            Buy Now
          </button>
        </div>
      </div>

      <footer className="mt-8 pt-4 border-t text-sm text-gray-500 text-center">
        <p>Satisfaction guaranteed. 30-day money-back guarantee.</p>
      </footer>
    </div>
  );
};

export default ProductPreview;