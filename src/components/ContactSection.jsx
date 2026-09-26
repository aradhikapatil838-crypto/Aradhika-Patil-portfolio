import { useState } from 'react';
import './ContactSection.css';

export default function ContactSection() {
  const [status, setStatus] = useState('');
  function submitCase(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name').trim();
    const email = data.get('email').trim();
    const message = data.get('message').trim();
    if (!name || !message) {
      setStatus('Please enter your name and a few details about your case.');
      return;
    }
    const subject = encodeURIComponent(`A new case from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:aradhikapatil06@gmail.com?subject=${subject}&body=${body}`;
    setStatus('Your email app will open a draft. Send it there to contact me.');
  }
  return (
    <section id="contact" className="illustrated-contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="sr-only">Have a case for me? Let’s investigate together.</h2>
      <div className="contact-art-window">
        <form className="contact-art-form" onSubmit={submitCase}>
          <img src="/contact-info-section.png" alt="Hands holding an illustrated case file. To my next collaborator: Got a problem to solve or an idea to explore?" className="contact-art" loading="lazy" decoding="async" width="1974" height="941" />
          <label className="sr-only" htmlFor="case-name">Your name</label>
          <input id="case-name" className="case-field case-name" name="name" autoComplete="name" placeholder="Your Name" required maxLength={100} />
          <label className="sr-only" htmlFor="case-email">Your email</label>
          <input id="case-email" className="case-field case-email" name="email" type="email" autoComplete="email" placeholder="Your Email" required />
          <label className="sr-only" htmlFor="case-message">Tell me about the case</label>
          <textarea id="case-message" className="case-field case-message" name="message" placeholder="Tell me about the case" required maxLength={4000} rows={1} />
          <button type="submit" className="case-send">Send the case <span aria-hidden="true">→</span></button>
        </form>
      </div>
      <p className="contact-send-note" role="status">{status || 'Opens an email draft in your email app.'}</p>
    </section>
  );
}
