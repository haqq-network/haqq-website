import localFont from 'next/font/local';

export const clashDisplayFont = localFont({
  src: '../assets/fonts/clash-display-medium.woff2',
  variable: '--font-clash-display',
  display: 'swap',
});

export const hkGuiseFont = localFont({
  src: [
    {
      path: '../assets/fonts/hk-guise-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/hk-guise-medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-hk-guise',
  display: 'swap',
});
