import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Pill, Heart, Sparkles, MessageCircle, Utensils, ShieldCheck } from 'lucide-react';
import './ProjectReveal.css';

export function RevealCursor() {
  const cursor = useRef(null);
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!fine.matches) return;
    let active = null;
    const clear = () => {
      active?.removeAttribute('data-revealing');
      active = null;
      cursor.current?.classList.remove('visible', 'expanded', 'hero-expanded');
      document.body.classList.remove('reveal-cursor-active');
    };
    const move = (e) => {
      if (e.pointerType === 'touch') return;
      const node = cursor.current;
      if (!node) return;
      
      const hero = e.target.closest('[data-reveal-hero]');
      const nearButton = hero && [...hero.querySelectorAll('a,button')].some((button) => {
        const r = button.getBoundingClientRect();
        return (
          e.clientX >= r.left - 24 &&
          e.clientX <= r.right + 24 &&
          e.clientY >= r.top - 24 &&
          e.clientY <= r.bottom + 24
        );
      });
      const card = e.target.closest('[data-reveal-card]') || (nearButton ? null : hero);
      
      if (!card) {
        clear();
        return;
      }

      document.body.classList.add('reveal-cursor-active');
      node.classList.add('visible');
      node.style.left = `${e.clientX}px`;
      node.style.top = `${e.clientY}px`;
      
      const isHero = Boolean(hero && !nearButton);
      node.classList.toggle('hero-expanded', isHero);
      node.classList.toggle('expanded', Boolean(card));
      
      if (active !== card) {
        active?.removeAttribute('data-revealing');
        active = card;
      }
      
      if (card) {
        const box = card.getBoundingClientRect();
        card.style.setProperty('--reveal-x', `${e.clientX - box.left}px`);
        card.style.setProperty('--reveal-y', `${e.clientY - box.top}px`);
        card.setAttribute('data-revealing', 'true');
      }
    };
    const leave = (e) => {
      if (!e.relatedTarget) clear();
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerout', leave);
    window.addEventListener('blur', clear);
    window.addEventListener('scroll', clear, true);
    return () => {
      clear();
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerout', leave);
      window.removeEventListener('blur', clear);
      window.removeEventListener('scroll', clear, true);
    };
  }, []);

  return createPortal(
    <div ref={cursor} className="reveal-cursor" aria-hidden="true">
      <div className="lens-rim" />
      <div className="lens-glass" />
      <div className="lens-glare" />
    </div>,
    document.body
  );
}

export function ProjectReveal({ project }) {
  if (project === 'elderly-care') {
    return <div className="project-reveal project-reveal-artwork" aria-hidden="true">
      <div className="reveal-art-top"><img src="/work/case-missed-med-card.png" alt="" /></div><div className="reveal-art-paper"><img src="/work/case-missed-med-card.png" alt="" /></div>
    </div>;
  }
  const content = {
    'elderly-care': ['the case of missing medicine', Pill],
    'vaaniq': ['Every voice tells a story.', MessageCircle],
    'group-dining': ['Good food. Better together.', Utensils],
    'sbi-redesign': ['Banking with confidence.', ShieldCheck],
  };
  const [message, Icon] = content[project];
  return <div className="project-reveal" aria-hidden="true">
    <span className="reveal-note">{message}</span>
    {[0, 1, 2, 3, 4, 5].map(i => <span key={i} className={`reveal-doodle doodle-${i}`}><Icon strokeWidth={1.6} /></span>)}
    <Heart className="reveal-heart" strokeWidth={1.6} />
    <Sparkles className="reveal-spark" strokeWidth={1.5} />
  </div>;
}

