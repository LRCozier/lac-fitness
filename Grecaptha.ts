interface ReCaptchaRenderOptions {
  sitekey: string;
  theme?: 'light' | 'dark';
  size?: 'normal' | 'compact';
  callback?: (token: string) => void;
  'expired-callback'?: () => void;
  'error-callback'?: () => void;
}

interface ReCaptcha {
  render: (
    container: HTMLElement | string,
    options: ReCaptchaRenderOptions,
  ) => number;
  getResponse: (widgetId?: number) => string;
  reset: (widgetId?: number) => void;
  ready: (callback: () => void) => void;
}

declare global {
  interface Window {
    grecaptcha?: ReCaptcha;
  }
}

export {};