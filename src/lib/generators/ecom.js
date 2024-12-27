import { getRandomStyle } from '../utils/style-variations';

const generateId = () => Math.random().toString(36).substr(2, 9);

export function generateEcomPage(data) {
  try {
    const [gtagAccount] = (data.gtagId || '').split('/');
    const styles = data.styles || getRandomStyle();

    if (!styles) {
      throw new Error('Failed to generate styles');
    }

    const ids = {
      container: `c_${generateId()}`,
      header: `h_${generateId()}`,
      grid: `g_${generateId()}`,
      image: `i_${generateId()}`,
      features: `f_${generateId()}`,
      trust: `t_${generateId()}`,
      badge: `b_${generateId()}`,
      footer: `ft_${generateId()}`
    };

    // Rest of your code stays the same but use these IDs instead of static class names
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <!-- Head content same as before -->
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          
          body { /* Same as before */ }

          .${ids.container} {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
          }

          .${ids.header} {
            text-align: center;
            margin-bottom: 3rem;
          }

          .${ids.grid} {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            position: relative;
          }

          @media (min-width: 768px) {
            .${ids.grid} {
              grid-template-columns: 1fr 1fr;
              align-items: start;
            }
          }

          .${ids.image} {
            width: 100%;
            border-radius: 1rem;
            overflow: hidden;
            position: relative;
            aspect-ratio: 1;
            background: rgba(255,255,255,0.1);
          }

          .${ids.badge} {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: ${styles.colors.primary};
            color: ${styles.colors.text};
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-weight: bold;
            animation: pulse 2s infinite;
          }

          .${ids.features} {
            display: grid;
            gap: 1rem;
            margin: 2rem 0;
          }

          .${ids.trust} {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;
            margin: 1.5rem 0;
          }

          /* Rest of styles with random IDs */
        </style>
      </head>
      <body>
        <div class="urgency-bar">
          ⚡ Limited Time Offer - Up to 70% OFF Today Only!
        </div>

        <div class="${ids.container}">
          <header class="${ids.header}">
            <h1 class="product-name">${data.productName}</h1>
            <div class="${ids.trust}">
              <!-- Trust indicators here -->
            </div>
          </header>

          <main class="${ids.grid}">
            <div class="${ids.image}">
              <img src="${data.productImages.split(',')[0]}" alt="${data.productName}" />
              <div class="${ids.badge}">SAVE 70%</div>
            </div>

            <div class="${ids.features}">
              <!-- Features here -->
            </div>
          </main>
        </div>

        <footer class="${ids.footer}">
          <!-- Footer content -->
        </footer>
      </body>
      </html>`;
  } catch (error) {
    console.error('Error generating ecom page:', error);
    throw error;
  }
}