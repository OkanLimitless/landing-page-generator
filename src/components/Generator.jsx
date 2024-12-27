// Continued from previous content...
          
          <div className="p-6">
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