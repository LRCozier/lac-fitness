'use client';

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { getEmailJSConfig, isEmailJSConfigured } from '@/app/lib/emailjsconfig';
import { FormErrors } from '@/app/types';

const VALIDATION_PATTERNS = {
  name: /^[a-zA-Z\s]{2,50}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: /^[\s\S]{10,1000}$/,
} as const;

const SERVICE_OPTIONS = [
  { id: 'one-on-one', label: '1-on-1 Personal Training', description: 'Individualized coaching with complete focus on your goals' },
  { id: 'group-training', label: 'Group Personal Training', description: 'Train with partners or small groups for motivation and cost savings' },
  { id: 'online-coaching', label: 'Online Coaching', description: 'Remote programming and coaching with weekly check-ins' },
  { id: 'one-off-consultation', label: 'One-off Consultation', description: 'Single session for form check, program review, or specific advice' }
] as const;

const sanitizeInput = (input: string): string => {
  return input.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
};

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  const emailjsConfig = getEmailJSConfig();

  const handleServiceChange = (serviceId: string, isChecked: boolean) => {
    setSelectedServices(prev => isChecked ? [...prev, serviceId] : prev.filter(id => id !== serviceId));
  };

  const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !VALIDATION_PATTERNS.name.test(name)) errors.name = 'Please enter a valid name (2-50 characters)';
    if (!email || !VALIDATION_PATTERNS.email.test(email)) errors.email = 'Please enter a valid email address';
    if (!message || !VALIDATION_PATTERNS.message.test(message)) errors.message = 'Please enter a message between 10 and 1000 characters';
    if (selectedServices.length === 0) errors.services = 'Please select at least one service';

    return errors;
  };

  const getSelectedServiceLabels = (): string[] => SERVICE_OPTIONS.filter(service => selectedServices.includes(service.id)).map(service => service.label);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrors({});

    if (!isEmailJSConfigured()) {
      setStatus('error');
      return;
    }

    const formData = new FormData(e.currentTarget);
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setStatus('idle');
      return;
    }

    try {
      const sanitizedData = {
        name: sanitizeInput(formData.get('name') as string),
        email: sanitizeInput(formData.get('email') as string),
        message: sanitizeInput(formData.get('message') as string),
        services: getSelectedServiceLabels().join(', '),
        services_count: selectedServices.length.toString(),
        timestamp: new Date().toISOString(),
      };

      emailjs.init(emailjsConfig.publicKey);
      const result = await emailjs.send(emailjsConfig.serviceId, emailjsConfig.templateId, sanitizedData, emailjsConfig.publicKey);

      if (result.status === 200) {
        (e.target as HTMLFormElement).reset();
        setSelectedServices([]);
        setStatus('success');
      } else throw new Error(`EmailJS returned status: ${result.status}`);
    } catch (error) {
      console.error('EmailJS submission error:', error);
      setStatus('error');
    }
  };

  if (!isEmailJSConfigured()) return (
    <div className="contact-form-container">
      <div className="text-center"><p className="form-status-error">Contact form is not configured.</p></div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <div className="form-group">
        <label htmlFor="name" className="form-label">Full Name *</label>
        <input type="text" name="name" id="name" required className={`form-input ${errors.name ? 'error' : ''}`} maxLength={50} />
        {errors.name && <span className="form-error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email Address *</label>
        <input id="email" name="email" type="email" required className={`form-input ${errors.email ? 'error' : ''}`} maxLength={100} />
        {errors.email && <span className="form-error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <fieldset>
          <legend className="form-label">Services I'm Interested In *</legend>
          <p className="form-hint">Select all that apply</p>
          <div className="services-checkbox-group">
            {SERVICE_OPTIONS.map((service) => (
              <div key={service.id} className="service-checkbox">
                <input type="checkbox" id={`service-${service.id}`} checked={selectedServices.includes(service.id)} onChange={(e) => handleServiceChange(service.id, e.target.checked)} className="service-checkbox-input" />
                <label htmlFor={`service-${service.id}`} className="service-checkbox-label">
                  <span className="service-checkbox-title">{service.label}</span>
                  <span className="service-checkbox-description">{service.description}</span>
                </label>
              </div>
            ))}
          </div>
          {errors.services && <span className="form-error">{errors.services}</span>}
        </fieldset>
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">Message *</label>
        <textarea id="message" name="message" rows={4} required className={`form-textarea ${errors.message ? 'error' : ''}`} maxLength={1000} placeholder="Tell me about your fitness goals..." />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </div>

      <div><button type="submit" disabled={status === 'sending'} className="btn btn-primary">{status === 'sending' ? 'SENDING...' : 'START YOUR TRANSFORMATION'}</button></div>

      {status === 'success' && <p className="form-status-success">Thank you! Your message has been sent successfully.</p>}
      {status === 'error' && <p className="form-status-error">Sorry, there was an error sending your message.</p>}
    </form>
  );
}
