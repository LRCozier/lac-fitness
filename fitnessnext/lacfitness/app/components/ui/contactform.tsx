'use client';

import { useState, FormEvent } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    // Add backend logic
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} required></textarea>
      </div>
      <div>
        <button type="submit" disabled={status === 'sending'} className="btn btn-primary">
          {status === 'sending' ? 'SENDING...' : 'START YOUR TRANSFORMATION'}
        </button>
      </div>
      {status === 'success' && <p className="form-status-success">Thank you! Your message has been sent. I'll be in touch shortly.</p>}
      {status === 'error' && <p className="form-status-error">Something went wrong. Please try again or email me directly.</p>}
    </form>
  );
}

export default ContactForm;
