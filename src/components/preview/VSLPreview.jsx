import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const VSLPreview = ({ data }) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white rounded-lg shadow">
      <div className="aspect-video bg-gray-200 mb-4 rounded overflow-hidden">
        {data.thumbnailUrl && (
          <img
            src={data.thumbnailUrl}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      <h1 className="text-2xl font-bold mb-4">{data.headline}</h1>
      <p className="text-gray-700 mb-6 whitespace-pre-wrap">{data.description}</p>
      
      <div className="flex justify-center">
        <a
          href={data.offerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          Learn More
        </a>
      </div>

      <footer className="mt-8 pt-4 border-t text-sm text-gray-500 text-center">
        <p>Results may vary. This is not financial advice.</p>
      </footer>
    </div>
  );
};

export default VSLPreview;