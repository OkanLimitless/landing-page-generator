export function generateVSLPage(data) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.headline}</title>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2/dist/tailwind.min.css" rel="stylesheet">
    </head>
    <body class="bg-gray-50">
      <main class="max-w-4xl mx-auto py-8 px-4">
        <div class="aspect-video bg-gray-200 mb-8 rounded-lg overflow-hidden">
          <img src="${data.thumbnailUrl}" alt="Video thumbnail" class="w-full h-full object-cover">
        </div>

        <h1 class="text-3xl font-bold mb-6">${data.headline}</h1>
        <div class="prose max-w-none mb-8">
          ${data.description.split('\n').map(p => `<p class="mb-4">${p}</p>`).join('')}
        </div>

        <div class="text-center">
          <a href="${data.offerUrl}" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Learn More
          </a>
        </div>
      </main>
    </body>
    </html>
  `;
}

export function generateProductPage(data) {
  const features = data.features.split('\n').filter(Boolean);
  const images = data.productImages.split(',').map(url => url.trim());

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.productName}</title>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2/dist/tailwind.min.css" rel="stylesheet">
    </head>
    <body class="bg-gray-50">
      <main class="max-w-6xl mx-auto py-8 px-4">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Product content here -->
        </div>
      </main>
    </body>
    </html>
  `;
}