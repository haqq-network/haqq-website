import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import iphoneWalletScreenshotData from '@/assets/images/wallet-iphone-screenshot.png';
import {
  GovernanceIcon,
  LedgerIcon,
  MpcIcon,
  ShieldIcon,
  StakingIcon,
} from './icons';
import { WalletCardText } from './wallet-card';

const WalletDownloadButtons = dynamic(
  async () => {
    const { WalletDownloadButtons } = await import(
      '@/components/ui/wallet-download-buttons'
    );
    return { default: WalletDownloadButtons };
  },
  { ssr: false },
);

function FeatureText({ children }: PropsWithChildren) {
  return (
    <div className="mx-[8px] mb-[8px] inline-block text-center text-[14px] font-[500] leading-[22px] text-white sm:ml-0 sm:mr-[16px] sm:text-left">
      {children}
    </div>
  );
}

export function WalletHeroBlock() {
  return (
    <section className="w-full py-[40px] sm:py-[70px]">
      <div className="container mx-auto flex flex-col items-center px-[20px] sm:px-[40px] lg:flex-row">
        <div className="text-center lg:w-3/5 lg:flex-row lg:text-start">
          <h1
            className={clsx(
              'font-messiri',
              'text-[48px] font-bold leading-[62px] sm:mb-[16px] sm:text-[84px] lg:leading-[100px]',
            )}
          >
            HAQQ Wallet
          </h1>
          <WalletCardText className="mb-[30px] text-white/50">
            The best way to hold Islamic Coin and remain Shariah-compliant along
            the way!
          </WalletCardText>

          <div className="mb-[38px] text-center lg:text-left">
            <FeatureText>
              <div className="mb-[-6px] mr-[6px] inline-block">
                <ShieldIcon />
              </div>
              Non-custodial wallet for the HAQQ Ecosystem
            </FeatureText>
            <FeatureText>
              <div className="mb-[-6px] mr-[6px] inline-block">
                <StakingIcon />
              </div>
              <span>Staking</span>
            </FeatureText>
            <br className="hidden sm:block lg:hidden" />
            <FeatureText>
              <div className="mb-[-6px] mr-[6px] inline-block">
                <GovernanceIcon />
              </div>
              <span>Governance</span>
            </FeatureText>
            <FeatureText>
              <div className="mb-[-6px] mr-[6px] inline-block">
                <LedgerIcon />
              </div>
              <span>Ledger integration</span>
            </FeatureText>
            <FeatureText>
              <div className="mb-[-6px] mr-[6px] inline-block">
                <MpcIcon />
              </div>
              <span>Mnemonic-free private key security</span>
            </FeatureText>
          </div>

          <div className="mb-[60px]">
            <WalletDownloadButtons />

            <div className="mt-[24px] text-[14px] leading-[20px]">
              You can find more supported wallets{' '}
              <Link
                href="https://docs.haqq.network/user-guides/wallet/"
                target="__blank"
                className="cursor-pointer underline transition-colors duration-150 ease-out hover:text-white/75"
              >
                here
              </Link>
              .
            </div>
          </div>
        </div>

        <div className="flex flex-1 justify-center">
          <Image
            alt="HAQQ Wallet"
            src={iphoneWalletScreenshotData}
            className="max-w-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
