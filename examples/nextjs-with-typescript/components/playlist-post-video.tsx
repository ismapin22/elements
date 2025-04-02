import React, { useEffect, useState } from "react";
import "../post-video.css";

const PlaylistPostVideo = ({ video, relatedVideos, children }) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) return;

    const timer = setInterval(() => {
      setCount(prev => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="playlist">
      <div className="overlay"/>
      <div className="video-section">
        {children}
      </div>
      <div className="post-video-section">
        <div className="video-section">
          <div className="video-container">
            <h2 className="title">Video</h2>
            <div className="video-wrapper">
              <img className="video-thumbnail" src={video.imageUrl} alt={video.title} />
              <div className="countdown-overlay">
                <svg className="countdown-ring" width="50" height="50">
                  <circle cx="25" cy="25" r="22" className="circle-background" />
                  <circle
                    cx="25"
                    cy="25"
                    r="22"
                    className="circle-progress"
                    style={{
                      strokeDasharray: "138",
                      strokeDashoffset: `${(count / 3) * 138}`,
                    }}
                  />
                </svg>
                <span className="count-text">{count}</span>
              </div>
            </div>
            <p className="video-title">{video.title}</p>
          </div>
        </div>
        <hr/>
        <div className="related-videos-section">
          <h3 className="related-title">Related Videos</h3>
          <ul className="related-list">
            {relatedVideos.map((relatedVideo, index) => (
              <li key={index} className="related-item">
                <img className="related-thumbnail" src={relatedVideo.imageUrl} alt={relatedVideo.title} />
                <p className="related-text">{relatedVideo.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlaylistPostVideo;
