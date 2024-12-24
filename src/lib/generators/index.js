export function generateVSLPage(data) {
  const [gtagAccount, gtagConversion] = (data.gtagId || '').split('/');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.headline}</title>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2/dist/tailwind.min.css" rel="stylesheet">
      ${gtagAccount ? `
        <!-- Global site tag (gtag.js) - Google Ads -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=${gtagAccount}"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtagAccount}');
        </script>
      ` : ''}
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
          <a 
            href="${data.offerUrl}" 
            class="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            ${gtagConversion ? `onclick="gtag('event', 'conversion', {'send_to': '${data.gtagId}'});"` : ''}
          >
            Learn More
          </a>
        </div>
      </main>
    </body>
    </html>
  `;
}

export function generateProductPage(data) {
  const [gtagAccount, gtagConversion] = (data.gtagId || '').split('/');
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
      ${gtagAccount ? `
        <!-- Global site tag (gtag.js) - Google Ads -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=${gtagAccount}"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtagAccount}');
        </script>
      ` : ''}
    </head>
    <body class="bg-gray-50">
      <main class="max-w-6xl mx-auto py-8 px-4">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            ${images.map(url => `
              <div class="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img src="${url}" alt="Product image" class="w-full h-full object-cover">
              </div>
            `).join('')}
          </div>
          <div class="space-y-6">
            <h1 class="text-3xl font-bold">${data.productName}</h1>
            <p class="text-2xl font-semibold text-blue-600">$${data.price}</p>
            <div class="space-y-4">
              <h2 class="text-xl font-semibold">Features</h2>
              <ul class="list-disc pl-5 space-y-2">
                ${features.map(feature => `<li>${feature}</li>`).join('')}
              </ul>
            </div>
            <button 
              class="w-full bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              ${gtagConversion ? `onclick="gtag('event', 'conversion', {'send_to': '${data.gtagId}'});"` : ''}
            >
              Buy Now
            </button>
          </div>
        </div>
      </main>
    </body>
    </html>
  `;
}