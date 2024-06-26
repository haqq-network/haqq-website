import type { PropsWithChildren } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { DEPLOY_URL, GA_ID, VERCEL_ENV } from '@/constants';
import { clashDisplayFont, hkGuiseFont } from '@/lib/fonts';
import { PHProvider } from '@/providers/posthog';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | HAQQ',
    default: 'HAQQ',
  },
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL(DEPLOY_URL),
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  width: 'device-width',
};

const PostHogPageView = dynamic(
  async () => {
    const { PostHogPageView } = await import('@/components/posthog-page-view');
    return { default: PostHogPageView };
  },
  {
    ssr: false,
  },
);

const DynamicLinkRedirect = dynamic(
  async () => {
    const { DynamicLinkRedirect } = await import(
      '@/components/ui/dynamic-link-redirect'
    );
    return { default: DynamicLinkRedirect };
  },
  {
    ssr: false,
  },
);

const IdentifyWalletUsers = dynamic(
  async () => {
    const { IdentifyWalletUsers } = await import(
      '@/components/identify-wallet-users'
    );
    return { default: IdentifyWalletUsers };
  },
  {
    ssr: false,
  },
);

const IntercomMessenger = dynamic(
  async () => {
    const { IntercomMessenger } = await import(
      '@/components/intercom-messenger'
    );
    return { default: IntercomMessenger };
  },
  {
    ssr: false,
  },
);

function Scripts() {
  const isProduction = VERCEL_ENV === 'production';

  return (
    <>
      {isProduction && (
        <>
          <Script
            async={true}
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            id="gtm-haqq"
          />
          <Script
            defer={true}
            id="gtm-haqq-2"
            dangerouslySetInnerHTML={{
              __html: `
                   window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');
                  `,
            }}
          />
          <Script
            async={true}
            defer={true}
            id="gtm"
            data-cookiecategory="analytics"
            dangerouslySetInnerHTML={{
              __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-KKHPL8SG');
                  `,
            }}
          />
          <Script
            async={true}
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKHPL8SG"
            id="gtm-haqq"
            data-cookiecategory="analytics"
          />
        </>
      )}
      <SpeedInsights />
    </>
  );
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      dir="ltr"
      translate="no"
      className={clsx(clashDisplayFont.variable, hkGuiseFont.variable)}
    >
      <PHProvider>
        <body className="will-change-scroll">
          <PostHogPageView />
          <DynamicLinkRedirect />
          <IdentifyWalletUsers />
          <IntercomMessenger />
          {children}
          <Scripts />
        </body>
      </PHProvider>
    </html>
  );
}
