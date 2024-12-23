import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Save, Download, Upload } from 'lucide-react';
import VSLForm from './forms/VSLForm';
import ProductForm from './forms/ProductForm';

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
      // Handle successful generation
    } catch (error) {
      console.error('Error generating landing page:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Landing Page Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="vsl">VSL Page</TabsTrigger>
              <TabsTrigger value="product">Product Page</TabsTrigger>
            </TabsList>

            <TabsContent value="vsl">
              <VSLForm
                onSubmit={handleGenerate}
                formData={vslFormData}
                setFormData={setVslFormData}
              />
            </TabsContent>

            <TabsContent value="product">
              <ProductForm
                onSubmit={handleGenerate}
                formData={productFormData}
                setFormData={setProductFormData}
              />
            </TabsContent>
          </Tabs>

          <div className="mt-6 flex justify-end space-x-4">
            <Button variant="outline" onClick={() => {}}>
              <Save className="mr-2 h-4 w-4" />
              Save Template
            </Button>
            <Button variant="outline" onClick={() => {}}>
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
            <Button onClick={handleGenerate}>
              <Upload className="mr-2 h-4 w-4" />
              Generate
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Generator;