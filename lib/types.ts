import type { ReactNode } from 'react';

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  testimonialText: string;
  rating: number;
  category: string;
  featured: boolean;
  createdAt: string;
  metric?: string;
}

export interface Service {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  duration?: string;
  intensity?: string;
  recommendedFor?: string[];
}

export type FAQCategory = 'The Basics' | 'Fine Print' | 'Personal Touch';

export interface FAQItem {
  id: string;
  category: FAQCategory;
  question: string;
  answer: ReactNode;
}

export interface FooterLink {
  label: string;
  path: string;
}

export type SocialIcon = 'instagram' | 'tiktok';

export interface SocialLink {
  label: string;
  url: string;
  icon: SocialIcon;
}

export interface NavLink {
  href: string;
  label: string;
}


export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'md' | 'lg';

interface BaseButtonCommon {
  label?: string;
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
}

export type BaseButtonProps =
  | (BaseButtonCommon & { to: string; href?: never; type?: never; onClick?: never })
  | (BaseButtonCommon & { href: string; to?: never; type?: never; onClick?: never })
  | (BaseButtonCommon & {
      to?: never;
      href?: never;
      type?: 'button' | 'submit' | 'reset';
      onClick?: () => void;
    });

export interface BaseInputProps {
  value: string;
  onChange: (value: string) => void;
  id: string;
  label: string;
  type?: string;
  name?: string;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  hint?: string;
}

export interface BaseTextareaProps {
  value: string;
  onChange: (value: string) => void;
  id: string;
  label: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  error?: string;
  hint?: string;
}

export interface CheckboxOption {
  value: string;
  label: string;
  description?: string;
}

export interface BaseCheckboxGroupProps {
  value: string[];
  onChange: (value: string[]) => void;
  name: string;
  legend: string;
  options: CheckboxOption[];
  required?: boolean;
  error?: string;
  hint?: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  services?: string;
  captcha?: string;
}