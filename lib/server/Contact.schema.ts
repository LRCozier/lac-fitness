import 'server-only';
import { z } from 'zod';

const phoneRegex = /^[0-9+().\-\s]{7,20}$/;

export const ContactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name cannot exceed 100 characters.' }),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: 'Please provide a valid email address.' })
    .max(254, { message: 'Email is too long.' }),

  phone: z.string().trim().regex(phoneRegex, {
    message: 'Please provide a valid UK or international phone number.',
  }),

  services: z
    .array(z.string())
    .min(1, { message: 'Please select at least one service.' }),

  message: z
    .string()
    .trim()
    .min(10, { message: 'Please provide a bit more detail in your message.' })
    .max(2000, { message: 'Message cannot exceed 2000 characters.' }),

  captcha: z.string().min(1, { message: 'reCAPTCHA token is missing.' }),
});

export type ContactPayload = z.infer<typeof ContactSchema>;