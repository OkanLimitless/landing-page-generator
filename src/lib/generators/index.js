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

        <footer class="mt-12 pt-8 border-t text-center text-gray-500 text-sm">
          <p>Results may vary. This is not financial advice.</p>
          <p class="mt-2">&copy; ${new Date().getFullYear()} All rights reserved.</p>
        </footer>
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
          <div>
            ${images[0] ? `
              <img src="${images[0]}" alt="${data.productName}" class="w-full rounded-lg mb-4">
            ` : ''}

            <div class="grid grid-cols-4 gap-2">
              ${images.slice(1).map(url => `
                <img src="${url}" alt="${data.productName}" class="w-full rounded-lg aspect-square object-cover">
              `).join('')}
            </div>
          </div>

          <div>
            <h1 class="text-3xl font-bold mb-4">${data.productName}</h1>
            <p class="text-2xl font-semibold text-blue-600 mb-6">$${parseFloat(data.price).toFixed(2)}</p>

            <div class="space-y-6">
              <div>
                <h2 class="text-xl font-semibold mb-4">Features</h2>
                <ul class="space-y-2">
                  ${features.map(feature => `
                    <li class="flex items-start">
                      <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      ${feature}
                    </li>
                  `).join('')}
                </ul>
              </div>

              <button class="w-full bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <footer class="mt-12 pt-8 border-t text-center text-gray-500 text-sm">
          <p>Satisfaction guaranteed. 30-day money-back guarantee.</p>
          <p class="mt-2">&copy; ${new Date().getFullYear()} All rights reserved.</p>
        </footer>
      </main>

      <script>
        // Add any necessary tracking or conversion scripts here
      </script>
    </body>
    </html>
  `;
}