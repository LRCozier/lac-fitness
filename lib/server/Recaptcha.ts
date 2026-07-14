import 'server-only';

interface RecaptchaResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

const getSecret = (): string => {
  const secret = process.env.RECAPTCHA_SECRET?.trim();
  if (!secret) {
    throw new Error('Missing required environment variable: RECAPTCHA_SECRET');
  }
  return secret;
};

export async function verifyCaptcha(token: string): Promise<boolean> {
  try {
    const params = new URLSearchParams({
      secret: getSecret(),
      response: token,
    });

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`[reCAPTCHA] Google responded with status ${response.status}`);
      return false;
    }

    const data = (await response.json()) as RecaptchaResponse;

    if (!data.success) {
      console.warn('[reCAPTCHA] Verification failed:', data['error-codes']);
    }

    return data.success;
  } catch (error) {
    console.error('[reCAPTCHA] Network error during verification:', error);
    return false;
  }
}