import './video.css'

"use client";

import { useRef, useState } from "react";

export default function FeaturedWork() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [showHint, setShowHint] = useState(false);

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
      setShowHint(true);
      setTimeout(() => setShowHint(false), 1500);
    }
  };

  return (
    <section className="featured-work" id="work">

      <div className="video-wrapper" onClick={handleClick}>
        <video
          ref={videoRef}
          src="/dynamic.mp4"
          autoPlay
          loop
          muted={muted}
          playsInline
          className="featured-video"
        />
        <div className="video-overlay">
          <span>{muted ? "🔇 Click for sound" : "🔊 Sound on"}</span>
        </div>
        {showHint && (
          <div className="sound-toast">
            {muted ? "Muted" : "Unmuted"}
          </div>
        )}
      </div>
    </section>
  );
}