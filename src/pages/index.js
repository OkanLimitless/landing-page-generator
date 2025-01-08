import Generator from '@/components/Generator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">E-commerce Page Generator</h1>
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <Generator />
        </div>
      </div>
    </div>
  );
}
