import { useEffect, useRef, useState } from 'react';
import './Sketchbook.css';

export default function Sketchbook() {
  const wrapper = useRef(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setReady(true);
        observer.disconnect();
      }
    }, { rootMargin: '250px' });
    observer.observe(wrapper.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={wrapper} className="sketchbook-wrapper">
      <div className="sketchbook-iframe-container">
        {ready && <iframe
          src="/meng-to-sketchbook.html?nointro"
          title="Interactive sketchbook"
          className="sketchbook-iframe"
          allow="autoplay; fullscreen"
        />}
      </div>
    </div>
  );
}
