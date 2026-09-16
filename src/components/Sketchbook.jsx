import React from 'react';
import './Sketchbook.css';

export default function Sketchbook() {
  return (
    <div className="sketchbook-wrapper">
      <div className="sketchbook-iframe-container">
        <iframe
          src="/meng-to-sketchbook.html"
          title="Meng To Sketchbook"
          className="sketchbook-iframe"
          allow="autoplay; fullscreen"
        />
      </div>
    </div>
  );
}
