import { useState, useEffect, useRef, useCallback } from 'react';
import './SecretDecoderSection.css';

export default function SecretDecoderSection() {
  const stageRef = useRef(null);
  const animFrameRef = useRef(null);
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [isRevealing, setIsRevealing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640 || window.matchMedia('(hover: none)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const lensRadius = isMobile ? 120 : 175;
  const lensDiameter = lensRadius * 2;

  const updatePos = useCallback((clientX, clientY) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    animFrameRef.current = requestAnimationFrame(() => {
      setPos({ x, y });
    });
  }, []);

  const handlePointerEnter = (e) => {
    if (e.pointerType === 'touch') return;
    setIsRevealing(true);
    updatePos(e.clientX, e.clientY);
  };

  const handlePointerMove = (e) => {
    if (e.pointerType === 'touch') return;
    if (!isRevealing) setIsRevealing(true);
    updatePos(e.clientX, e.clientY);
  };

  const handlePointerLeave = () => {
    setIsRevealing(false);
  };

  // Touch Support for mobile devices
  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      setIsRevealing(true);
      updatePos(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      setIsRevealing(true);
      updatePos(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    // Keep revealed state or gracefully hide after brief delay
    setTimeout(() => {
      setIsRevealing(false);
    }, 1500);
  };

  return (
    <section
      id="secret-clue"
      className="secret-decoder-section py-8 sm:py-12 px-4 sm:px-8 lg:px-12 relative overflow-hidden select-none"
      aria-label="Secret Clue Decoder"
    >
      <div className="max-w-[1240px] mx-auto w-full">
        <div
          ref={stageRef}
          className="decoder-stage relative overflow-hidden rounded-2xl shadow-md border border-stone-200/40 bg-[#164359]"
          onPointerEnter={handlePointerEnter}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* 1. Base Layer: Scribbled Image (Default state) */}
          <img
            src="/got a clue scribbled.png"
            alt="Scribbled secret clue illustration"
            className="decoder-img block w-full h-auto object-cover pointer-events-none select-none"
            decoding="async"
          />

          {/* 2. Revealed Layer: Clean image revealed only inside circular mask */}
          <div
            className="decoder-reveal-layer absolute inset-0 pointer-events-none"
            style={{
              clipPath: isRevealing
                ? `circle(${lensRadius}px at ${pos.x}px ${pos.y}px)`
                : 'circle(0px at 0px 0px)',
              opacity: isRevealing ? 1 : 0,
              transition: 'opacity 0.15s ease',
            }}
          >
            <img
              src="/got a clue revealed.png"
              alt="Revealed secret clue: Got a clue? Maybe we could investigate together"
              className="decoder-img block w-full h-full object-cover pointer-events-none select-none"
              decoding="async"
            />
          </div>

          {/* 3. Translucent Red Decoder Lens Overlay */}
          <div
            className={`decoder-red-lens ${isRevealing ? 'visible' : ''}`}
            style={{
              transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
              width: `${lensDiameter}px`,
              height: `${lensDiameter}px`,
            }}
          >
            <div className="red-lens-glass" />
            <div className="red-lens-rim" />
            <div className="red-lens-glare" />
          </div>

          {/* Mobile / Touch Hint */}
          <div className="decoder-touch-hint sm:hidden">
            <span>Tap or drag across the image to decode secret clue</span>
          </div>
        </div>
      </div>
    </section>
  );
}
