import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen() {
  // Check if user has already seen the loading animation during this session
  const [hasLoadedBefore] = useState(() => {
    try {
      return sessionStorage.getItem('hasSeenLoading') === 'true';
    } catch {
      return false;
    }
  });

  const [isAnimating, setIsAnimating] = useState(false);
  const [isFinished, setIsFinished] = useState(hasLoadedBefore);

  useEffect(() => {
    if (hasLoadedBefore) return;

    // Mark as seen in sessionStorage so returning to Home or navigating routes skips it
    try {
      sessionStorage.setItem('hasSeenLoading', 'true');
    } catch {
      // fallback
    }

    // Disable scroll while loading animation plays
    document.body.style.overflow = 'hidden';

    // 1. Hold initial state (logo visible) for 1.5 seconds
    const holdTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 1500);

    // 2. Complete animation after 10.8 seconds (1.5s hold + 9.0s ultra-slow character slide)
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = '';
    }, 10800);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = '';
    };
  }, [hasLoadedBefore]);

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

