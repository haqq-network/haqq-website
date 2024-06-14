import clsx from 'clsx';
import Image from 'next/image';
import ledgerImageData from '@/assets/images/landing-ledger-item.svg';
import maskData from '@/assets/images/mask.png';
import {
  LikeIcon,
  SocialLoginShieldBorderImage,
  SocialLoginShieldIcon,
} from './icons';
import { CardHeading, WalletCardText } from './wallet-card';

function StakingBlock() {
  return (
    <div className="relative flex h-full select-none flex-col overflow-hidden rounded-2xl border border-[#37A37A] px-[24px] py-[32px]">
      <div className="absolute left-0 top-[50%] z-[-1] h-[558px] w-[378px] translate-y-[-50%] bg-[#016256]/20 opacity-20 blur-[67px]">
        <div className="absolute top-0 h-[378px] w-[378px] rounded-full bg-[#23DC65]/40" />
        <div className="absolute top-0 h-[378px] w-[378px] translate-y-[50px] rounded-full bg-[#137ADA]/20" />
        <div className="absolute top-0 h-[378px] w-[378px] translate-y-[180px] rounded-full bg-[#6B13DA]/10" />
      </div>

      <CardHeading className="mb-[12px]">Staking</CardHeading>
      <div className="mb-6">
        <span className="text-white/60">
          Delegate your coins and make a profit
        </span>
      </div>

      <div className="flex w-full leading-none text-[#05F08D] min-[375px]:tracking-[2px]">
        <span className="mr-[22px] font-extrabold min-[320px]:text-[52px] sm:text-[72px]">
          +21%
        </span>
        <div className="flex flex-col justify-center space-y-1 font-extrabold min-[320px]:max-h-[52px] min-[320px]:text-[24px] sm:max-h-[72px] sm:text-[28px]">
          <span className="opacity-50">+16%</span>
          <span className="opacity-20">+13%</span>
        </div>
      </div>
    </div>
  );
}

function SocialLoginBlock() {
  return (
    <div className="social-login group relative flex h-full min-h-[298px] select-none flex-col overflow-hidden rounded-2xl bg-[#2E7579] px-[24px] py-[32px]">
      <CardHeading className="mb-[12px]">Social Login</CardHeading>
      <WalletCardText className="text-white/60">
        Hassle-free private key management without a mnemonic phrase
      </WalletCardText>

      <div className="absolute bottom-[-76px] left-[50%] h-[183px] w-[130px] translate-x-[-50%] duration-[600ms] ease-in-out group-hover:translate-y-[-10px] group-hover:scale-105 lg:bottom-[-60px]">
        <SocialLoginShieldBorderImage className="social-login-animation absolute top-[2px] w-[130px] stroke-[#499599]" />
        <SocialLoginShieldBorderImage className="social-login-animation absolute top-[2px] w-[130px] stroke-[#499599]" />
        <SocialLoginShieldBorderImage className="social-login-animation absolute top-[2px] w-[130px] stroke-[#499599]" />
        <SocialLoginShieldBorderImage className="social-login-animation absolute top-[2px] w-[130px] stroke-[#499599]" />
        <SocialLoginShieldIcon className="z-1 absolute h-auto w-[130px]" />
      </div>
    </div>
  );
}

function GovernanceBlock() {
  return (
    <div className="group relative h-full min-h-[298px] select-none overflow-hidden rounded-2xl bg-gradient-to-b from-[#0DBC7A] to-[#02945D] px-[24px] py-[32px]">
      <CardHeading className="mb-[12px]">Governance</CardHeading>
      <WalletCardText className="text-white/60">
        Cast your votes on <br className="block sm:hidden" />
        proposals to
        <br className="block sm:hidden" /> participate in network decision
        making
      </WalletCardText>

      <LikeIcon className="absolute bottom-[4px] left-[50%] h-auto w-[120px] translate-x-[-50%] duration-[600ms] ease-in-out group-hover:translate-y-[-10px] group-hover:scale-105" />

      <LikeIcon
        className={clsx(
          'absolute bottom-[72px] left-[10px] h-auto w-[24px] lg:bottom-[30px] lg:left-[30px]',
          'translate-y-[25px] scale-50 opacity-0 delay-[0ms] duration-[600ms] ease-in-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-[50ms]',
        )}
      />
      <LikeIcon
        className={clsx(
          'absolute bottom-[106px] left-[28px] h-auto w-[34px] lg:bottom-[75px] lg:left-[50px]',
          'translate-y-[25px] scale-50 opacity-0 delay-[0ms] duration-[600ms] ease-in-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-[150ms]',
        )}
      />
      <LikeIcon
        className={clsx(
          'absolute bottom-[138px] left-[78px] h-auto w-[24px] lg:bottom-[130px] lg:left-[100px]',
          'translate-y-[25px] scale-50 opacity-0 delay-[0ms] duration-[600ms] ease-in-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-[275ms]',
        )}
      />
      <LikeIcon
        className={clsx(
          'absolute bottom-[147px] left-[18px] h-auto w-[24px] lg:bottom-[120px] lg:left-[20px]',
          'translate-y-[25px] scale-50 opacity-0 delay-[0ms] duration-[600ms] ease-in-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-[125ms]',
        )}
      />
      <LikeIcon
        className={clsx(
          'absolute bottom-[119px] right-[30px] h-auto w-[44px] lg:bottom-[90px] lg:right-[30px]',
          'translate-y-[25px] scale-50 opacity-0 delay-[0ms] duration-[600ms] ease-in-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-[250ms]',
        )}
      />
      <LikeIcon
        className={clsx(
          'absolute bottom-[82px] right-[10px] h-auto w-[34px] lg:bottom-[30px] lg:right-[20px]',
          'translate-y-[25px] scale-50 opacity-0 delay-[0ms] duration-[600ms] ease-in-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-[350ms]',
        )}
      />
      <LikeIcon
        className={clsx(
          'absolute bottom-[148px] right-[84px] h-auto w-[22px] lg:bottom-[140px] lg:right-[90px]',
          'translate-y-[25px] scale-50 opacity-0 delay-[0ms] duration-[600ms] ease-in-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-hover:delay-[150ms]',
        )}
      />
    </div>
  );
}

function LedgerBlock() {
  return (
    <div className="ledger-block ledger-block-background group relative flex h-full select-none flex-col overflow-hidden rounded-2xl border border-[#cdcdcd] px-[24px] py-[32px]">
      <CardHeading className="mb-[12px]">Ledger</CardHeading>

      <div className="mb-[74px]">
        <WalletCardText className="text-white/60">
          Secure your assets with an industry-standard hardware wallet
        </WalletCardText>
      </div>
      <div className="self-center pb-[24px]">
        <Image
          src={ledgerImageData.src}
          alt=""
          width={66}
          height={310}
          className="ledger-bounce-animation"
        />
      </div>
    </div>
  );
}

function NonCustodialWalletBlock() {
  return (
    <div className="non-custodial-wallet group relative h-full select-none overflow-hidden rounded-2xl bg-white px-[24px] py-[32px]">
      <div className="non-custodial-wallet-animation absolute left-[-525px] top-[10%] h-[988px] w-[1024px] sm:left-[-395px] sm:top-[-15%] lg:left-[-545px] lg:top-[20%]">
        <Image fill alt="" src={maskData.src} />
      </div>

      <div className="relative flex flex-col text-black">
        <div className="mb-[212px] max-w-[300px] sm:mb-[278px] sm:max-w-full">
          <CardHeading className="mb-[12px]">Non-custodial wallet</CardHeading>
          <WalletCardText>
            With a non-custodial wallet, you have sole authority of your private
            keys making your crypto safe, secure and always under your control.
          </WalletCardText>
        </div>
      </div>
    </div>
  );
}

export function WalletFeaturesBlock() {
  return (
    <section className="w-full py-[40px] sm:mb-[120px] sm:py-[70px] lg:mb-[140px]">
      <div className="container mx-auto flex flex-col px-[20px] sm:px-[40px]">
        <h2 className="mb-[32px] text-center text-[38px] font-extrabold leading-[52px] sm:mb-[48px] sm:text-[48px] sm:leading-[64px] lg:text-start">
          HAQQ Wallet Features
        </h2>
        <div className="grid grid-cols-1 gap-[28px] lg:grid-cols-4 xl:grid-cols-3">
          <div>
            <NonCustodialWalletBlock />
          </div>
          <div className="lg:col-span-3 xl:col-span-2">
            <div className="grid h-full gap-[28px] lg:grid-cols-3">
              <div className="flex flex-col space-y-[28px] lg:col-span-2">
                <div>
                  <StakingBlock />
                </div>
                <div className="grid h-full gap-[28px] sm:grid-cols-2 lg:grid-cols-11">
                  <div className="lg:col-span-6">
                    <GovernanceBlock />
                  </div>
                  <div className="lg:col-span-5">
                    <SocialLoginBlock />
                  </div>
                </div>
              </div>
              <div>
                <LedgerBlock />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
