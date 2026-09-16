import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Disable scroll while loading animation plays
    document.body.style.overflow = 'hidden';

    // 1. Hold initial state (logo visible) for 1.5 seconds
    const holdTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 1500);

    // 2. Complete animation after 8.0 seconds (1.5s hold + 6.0s ultra-slow slide)
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = '';
    }, 8000);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (isFinished) return null;

  return (
    <div className={`loading-screen-container ${isAnimating ? 'slide-right' : ''}`}>
      <div className="loading-image-wrapper">
        <img
          src="/loading-2.png"
          alt="Aradhika Patil Loading"
          className="loading-image"
        />
      </div>
    </div>
  );
}
