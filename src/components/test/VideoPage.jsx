export default function VideoPage() {
  return (
    <div>
      <style jsx>{`
        :root {
          --primary-color: #00dd00;
          --secondary-color: #ff0000;
          --font-primary: 'Roboto', sans-serif;
          --font-secondary: 'Oswald', sans-serif;
          --font-tertiary: 'Montserrat', sans-serif;
          --spacing-sm: 1rem;
          --spacing-md: 2rem;
          --spacing-lg: 3rem;
          --border-radius: 12px;
        }

        body {
          background-color: #fff;
          text-align: center;
          font-family: var(--font-primary);
          margin: 0;
          padding: 0;
        }

        .video-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: var(--spacing-md) auto;
          padding: 56.25% 0 0 0;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .video-container img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .backdrop {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(5px);
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 2rem;
          color: white;
          cursor: pointer;
          background: var(--primary-color);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          opacity: 0.9;
        }

        .play-button:hover {
          transform: translate(-50%, -50%) scale(1.1);
          opacity: 1;
        }

        .cta-button {
          display: none;
          position: absolute;
          bottom: var(--spacing-md);
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary-color);
          color: white;
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--border-radius);
          text-decoration: none;
          font-family: var(--font-tertiary);
          font-weight: bold;
          transition: all 0.3s ease;
          opacity: 0;
        }

        .cta-button.active {
          display: block;
          opacity: 1;
        }

        .cta-button:hover {
          background: var(--secondary-color);
          transform: translateX(-50%) scale(1.05);
        }

        @media (max-width: 768px) {
          .video-container {
            margin: var(--spacing-sm) auto;
          }
          
          .cta-button {
            font-size: 0.9rem;
            padding: 0.75rem 1.5rem;
          }
        }
      `}</style>

      <div className="video-container">
        <div id="vid_677444f834e21f48aa3179b8">
          <img 
            id="thumb_677444f834e21f48aa3179b8" 
            src="https://images.converteai.net/ee23f5b0-45e7-4e27-a038-209fb03d31cc/players/677444f834e21f48aa3179b8/thumbnail.jpg" 
            alt="Video Thumbnail" 
          />
          <div id="backdrop_677444f834e21f48aa3179b8" className="backdrop"></div>
          <div className="play-button">▶</div>
          <a 
            href="https://www.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button esconder"
          >
            VIEW PACKAGES
          </a>
        </div>
        <script 
          type="text/javascript" 
          id="scr_677444f834e21f48aa3179b8"
          dangerouslySetInnerHTML={{
            __html: `
              var s=document.createElement("script");
              s.src="https://scripts.converteai.net/ee23f5b0-45e7-4e27-a038-209fb03d31cc/players/677444f834e21f48aa3179b8/player.js";
              s.async=!0;
              document.head.appendChild(s);
              
              document.addEventListener("DOMContentLoaded", function() {
                var ctaButton = document.querySelector('.cta-button');
                var videoContainer = document.getElementById('vid_677444f834e21f48aa3179b8');
                
                if (videoContainer) {
                  videoContainer.addEventListener('timeupdate', function(e) {
                    if (e.target.currentTime >= 30) { // Show after 30 seconds
                      ctaButton.classList.add('active');
                    }
                  });
                }
              });
            `
          }}
        />
      </div>
    </div>
  );
}
