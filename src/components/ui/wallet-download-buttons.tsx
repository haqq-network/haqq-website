'use client';
import Link from 'next/link';
import { getDynamicLink } from '@/utils/get-dynamic-link';
import {
  WalletDownloadButton,
  WalletDownloadWithQrButton,
} from './wallet-download-button';
import { usePostHog } from 'posthog-js/react';

export function WalletDownloadButtons() {
  const posthog = usePostHog();
  const distinctId = posthog.get_distinct_id();

  if (!distinctId) {
    return null;
  }

  const appStoreLink = getDynamicLink(
    'https://haqq.network/wallet',
    distinctId,
    'https://apps.apple.com/app/haqq-wallet-by-bored-gen/id6443843352',
  );
  const playMarketLink = getDynamicLink(
    'https://haqq.network/wallet',
    distinctId,
    'https://play.google.com/store/apps/details?id=com.haqq.wallet',
  );

  return (
    <>
      <div className="flex flex-col space-y-[16px] md:hidden">
        <div className="flex flex-col flex-wrap items-center justify-center space-y-[16px] sm:flex-row sm:justify-center sm:space-x-[16px] sm:space-y-0 lg:justify-start">
          <Link
            href={appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            data-attr="download-ios"
          >
            <WalletDownloadButton type="apple" isAvailable />
          </Link>

          <Link
            href={playMarketLink}
            target="_blank"
            rel="noopener noreferrer"
            data-attr="download-android"
          >
            <WalletDownloadButton type="google" isAvailable />
          </Link>
        </div>
        <div>
          <Link
            href="https://github.com/haqq-network/haqq-wallet/releases/latest/download/haqq.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            data-attr="download-apk"
            download
          >
            <WalletDownloadButton type="apk" isAvailable />
          </Link>
        </div>
      </div>

      <div className="hidden flex-shrink-0 flex-row flex-wrap justify-center gap-[16px] md:flex lg:justify-start">
        <div className="leading-[0px]">
          <Link
            href={appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            data-attr="download-ios"
          >
            <WalletDownloadWithQrButton link={appStoreLink} type="apple" />
          </Link>
        </div>

        <div className="leading-[0px]">
          <Link
            href={playMarketLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            data-attr="download-android"
          >
            <WalletDownloadWithQrButton link={playMarketLink} type="google" />
          </Link>
        </div>

        <div className="leading-[0px]">
          <Link
            href="https://github.com/haqq-network/haqq-wallet/releases/latest/download/haqq.apk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            data-attr="download-apk"
            download
          >
            <WalletDownloadButton type="apk" isAvailable />
          </Link>
        </div>
      </div>
    </>
  );
}
