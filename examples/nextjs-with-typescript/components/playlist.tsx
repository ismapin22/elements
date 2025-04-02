import React, { useEffect, useRef, useState } from "react";
import PlaylistPostVideo from "./playlist-post-video";
import MuxVideoAds from "@mux/mux-video-ads/react";

const INITIAL_AUTOPLAY = false;
const INITIAL_MUTED = false;

const Playlist = ({videoList}) => {
  const mediaElRef = useRef(null);
  const [autoplay, setAutoplay] = useState<"muted" | boolean>(INITIAL_AUTOPLAY);
  const [muted, setMuted] = useState(INITIAL_MUTED);
  const [paused, setPaused] = useState<boolean | undefined>(true);
  const [sdkLoaded, setSdkLoaded] = useState(false);  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  
  useEffect(() => {
    // Dynamically load the IMA SDK
    const loadImaSdk = () => {
      const script = document.createElement("script");
      script.src = "https://imasdk.googleapis.com/js/sdkloader/ima3.js";
      script.async = true;
      script.onload = () => {
        setSdkLoaded(true);  // Mark SDK as loaded
        console.log("Google IMA SDK loaded");
      };
      document.head.appendChild(script);
    };
    
    if (!window.google || !window.google.ima) {
      loadImaSdk();
    } else {
      setSdkLoaded(true);
    }
  
    return () => {
      // Cleanup by removing the script
      const scriptElement = document.querySelector('script[src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"]');
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, []);

  return (
    <div>
      <PlaylistPostVideo video={videoList[currentIndex]} relatedVideos={videoList} > 
        {sdkLoaded && <MuxVideoAds
        ref={mediaElRef}
        playbackId={videoList[currentIndex].playbackId}
        controls
        autoplay={autoplay}
        muted={muted}
        maxResolution="2160p"
        minResolution="540p"
        renditionOrder="desc"
        preferPlayback="native"
        adTagUrl={videoList[currentIndex].adTagUrl}
        onPlay={() => {
          setPaused(false);
        }}
        onPause={() => {
          setPaused(true);
        }}
          onEnded={(event) => {
            if (currentIndex < videoList.length -1) {
              setCurrentIndex(currentIndex + 1);
              setTimeout(() => {
                setAutoplay(true);
              }, 200);
            }
          }}
        >
        </MuxVideoAds>}
      </PlaylistPostVideo>
    </div>
  )
}

export default Playlist;