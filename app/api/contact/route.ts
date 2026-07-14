import { NextResponse } from 'next/server';

import { ContactSchema } from '@/lib/server/Contact.schema';
import { verifyCaptcha } from '@/lib/server/Recaptcha';
import { sendContactEmail } from '@/lib/server/Email';


export const runtime = 'nodejs';


const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 10;
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many messages sent from this IP. Please try again later.' },
      { status: 429 },
    );
  }

  try {
    const body = await request.json();
    const validation = ContactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.issues[0].message },
        { status: 400 },
      );
    }

    const payload = validation.data;

    const captchaValid = await verifyCaptcha(payload.captcha);
    if (!captchaValid) {
      return NextResponse.json(
        { error: 'Captcha verification failed. Please try again.' },
        { status: 400 },
      );
    }

    await sendContactEmail(payload);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}