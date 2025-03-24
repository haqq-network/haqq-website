export const VERCEL_ENV = process.env['VERCEL_ENV'];
export const SITE_URL = 'https://haqq.network';
export const DEPLOY_URL =
  VERCEL_ENV === 'production'
    ? SITE_URL
    : process.env['VERCEL_URL']
      ? `https://${process.env['VERCEL_URL']}`
      : process.env['NEXT_PUBLIC_VERCEL_URL']
        ? `https://${process.env['NEXT_PUBLIC_VERCEL_URL']}`
        : 'http://localhost:3000';
export const REVALIDATE_TIME = 300;
export const FALCONER_ENDPOINT = 'https://falconer.haqq.network' as const;
export const GA_ID = 'G-4CW1ECK0EV';
