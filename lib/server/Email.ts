import 'server-only';
import nodemailer from 'nodemailer';
import type { ContactPayload } from './Contact.schema';

const getEnv = (name: string): string => {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};


const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');


const createTransporter = () =>
  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: getEnv('EMAIL_USER'),
      pass: getEnv('EMAIL_PASS'),
    },
  });

export async function sendContactEmail(data: ContactPayload): Promise<void> {
  const inbox = getEnv('EMAIL_USER');
  const servicesList = data.services.join(', ');

  const text = `
New enquiry from the L.A.C. Fitness contact form

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Services interested in:
${servicesList}

Message:
${data.message}
`.trim();

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #14181c;">
      <h2 style="border-bottom: 2px solid #e2e5e0; padding-bottom: 10px;">
        New enquiry: L.A.C. Fitness
      </h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
      <p><strong>Services:</strong> ${escapeHtml(servicesList)}</p>

      <h3 style="color: #5a6067; margin-top: 20px;">Message</h3>
      <div style="background: #f6f7f5; padding: 15px; border-left: 4px solid #16a34a; white-space: pre-wrap;">
        ${escapeHtml(data.message)}
      </div>
    </div>
  `;

  await createTransporter().sendMail({
    from: inbox,
    to: inbox,
    subject: `New enquiry from ${data.name}`,
    replyTo: data.email,
    text,
    html,
  });
}