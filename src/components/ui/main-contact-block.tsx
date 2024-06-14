import dynamic from 'next/dynamic';
import Image from 'next/image';
import eclipseImageData from '@/assets/images/index-page-contact-bg.png';
import { Heading } from './heading';
import { env } from '@/env/client';

const FeedbackForm = dynamic(
  async () => {
    const { FeedbackForm } = await import('@/components/forms/feedback-form');
    return { default: FeedbackForm };
  },
  {
    ssr: false,
  },
);

export function MainContactBlock() {
  return (
    <div
      className="relative px-[16px] pb-[148px] pt-[120px] sm:py-[120px] lg:min-h-[600px] lg:py-[136px]"
      id="contact"
    >
      <Image
        alt=""
        src={eclipseImageData.src}
        fill
        priority
        className="z-[-1] object-cover"
      />

      <div className="mx-auto max-w-full sm:max-w-[474px] lg:max-w-[556px]">
        <div className="mb-[24px] text-center sm:mb-[32px]">
          <Heading level={2}>Develop your vision on HAQQ</Heading>
        </div>

        <FeedbackForm turnstileSiteKey={env.NEXT_PUBLIC_TURNSTILE_SITEKEY} />
      </div>
    </div>
  );
}
