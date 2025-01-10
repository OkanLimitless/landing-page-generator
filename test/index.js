export default function VideoPage() {
  return (
    <div>
      <style jsx>{`
        body {
          background-color: #fff;
          text-align: center;
        }

        .video-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 56.25% 0 0 0;
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
            `
          }}
        />
      </div>
    </div>
  );
}
