'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Script from 'next/script';

import BaseInput from '@/components/ui/form/Baseinput';
import BaseTextArea from '@/components/ui/form/Basetextarea';
import BaseCheckboxGroup from '@/components/ui/form/Basecheckboxgroup';
import BaseButton from '@/components/ui/Basebutton';
import type { CheckboxOption, FormErrors } from '@/lib/types';

const SERVICE_OPTIONS: CheckboxOption[] = [
  {
    value: '1-to-1 Personal Training',
    label: '1-to-1 Personal Training',
    description:
      'Private strength coaching built around your goals, confidence, and movement.',
  },
  {
    value: '2-to-1 Training',
    label: '2-to-1 Small Group Training',
    description:
      'Train with a partner or friend for shared motivation and a supportive environment.',
  },
  {
    value: 'Online Consultations & Programming',
    label: 'Online Consultations & Programming',
    description:
      'Remote guidance, tailored programming, and accountability for independent training.',
  },
  {
    value: 'Online Coaching',
    label: 'Online Coaching',
    description:
      'Ongoing coaching wherever you are — programming that adapts to you week by week.',
  }
];

const PHONE_REGEX = /^[0-9+().\-\s]{7,20}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  services: [] as string[],
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const setField = <K extends keyof typeof EMPTY_FORM>(
    key: K,
    value: (typeof EMPTY_FORM)[K],
  ) => {
    setForm((current) => ({ ...current, [key]: value }));
  };


  const renderWidget = useCallback(() => {
    if (widgetIdRef.current !== null) return;
    if (!siteKey) {
      console.warn('[reCAPTCHA] NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set.');
      return;
    }
    if (!containerRef.current || !window.grecaptcha?.render) return;

    widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
      sitekey: siteKey,
      callback: () => setErrors((current) => ({ ...current, captcha: undefined })),
      'expired-callback': () =>
        setErrors((current) => ({
          ...current,
          captcha: 'CAPTCHA expired — please tick the box again.',
        })),
    });
  }, [siteKey]);


  useEffect(() => {
    if (window.grecaptcha?.render) renderWidget();
  }, [renderWidget]);

  const validate = (): boolean => {
    const next: FormErrors = {};

    if (!form.name.trim()) {
      next.name = 'Please enter your name.';
    }

    if (!form.email.trim()) {
      next.email = 'Please enter your email address.';
    } else if (!EMAIL_REGEX.test(form.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }

    if (!form.phone.trim()) {
      next.phone = 'Please provide a phone number so I can contact you.';
    } else if (!PHONE_REGEX.test(form.phone.trim())) {
      next.phone = 'Please enter a valid phone number.';
    }

    if (!form.services.length) {
      next.services = 'Please select at least one service you\u2019re interested in.';
    }

    if (!form.message.trim()) {
      next.message = 'Please add a brief message about your goals or situation.';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    if (widgetIdRef.current !== null) {
      window.grecaptcha?.reset(widgetIdRef.current);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();


    const fieldsValid = validate();

    const token =
      widgetIdRef.current !== null
        ? window.grecaptcha?.getResponse(widgetIdRef.current) || ''
        : '';

    if (!token) {
      setErrors((current) => ({
        ...current,
        captcha: 'Please confirm you are not a robot.',
      }));
    }

    if (!fieldsValid || !token) return;

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          services: form.services,
          message: form.message.trim(),
          captcha: token,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Submission failed.');

      setStatus({
        type: 'success',
        message:
          'Thanks for your message \u2014 I\u2019ll get back to you as soon as possible.',
      });
      resetForm();
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong while sending your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={renderWidget}
      />

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <BaseInput
          id="name"
          label="Name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          required
          value={form.name}
          onChange={(value) => setField('name', value)}
          error={errors.name}
        />

        <BaseInput
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          value={form.email}
          onChange={(value) => setField('email', value)}
          error={errors.email}
        />

        <BaseInput
          id="phone"
          label="Phone number"
          type="tel"
          autoComplete="tel"
          placeholder="e.g. +44 7700 900123"
          required
          value={form.phone}
          onChange={(value) => setField('phone', value)}
          error={errors.phone}
        />

        <BaseCheckboxGroup
          name="services"
          legend="What are you interested in?"
          hint="You can select more than one option."
          required
          options={SERVICE_OPTIONS}
          value={form.services}
          onChange={(value) => setField('services', value)}
          error={errors.services}
        />

        <BaseTextArea
          id="message"
          label="Tell me about your goals"
          rows={6}
          hint="Include relevant history, injuries, or what you'd like to achieve."
          required
          value={form.message}
          onChange={(value) => setField('message', value)}
          error={errors.message}
        />

        <div className="form-group">
          <div ref={containerRef} className="recaptcha-container" />
          {errors.captcha && (
            <span className="form-error" role="alert">
              {errors.captcha}
            </span>
          )}
        </div>

        <div className="form-group">
          <BaseButton type="submit" variant="primary" size="lg" disabled={isSubmitting}>
            {isSubmitting ? 'Sending\u2026' : 'Send Message'}
          </BaseButton>
        </div>

        {status && (
          <p
            className={
              status.type === 'success' ? 'form-status-success' : 'form-status-error'
            }
            role="status"
            aria-live="polite"
          >
            {status.message}
          </p>
        )}
      </form>
    </>
  );
}