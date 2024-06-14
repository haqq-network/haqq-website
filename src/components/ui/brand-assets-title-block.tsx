import clsx from 'clsx';
import styles from './brand-assets-title-block.module.css';
import { Heading } from './heading';
import { Text } from './text';
import { DownloadButton } from './download-button';

export function BrandAssetsTitleBlock() {
  return (
    <section
      className={clsx(
        'relative flex flex-col bg-cover bg-left bg-no-repeat px-[16px] py-[48px] sm:px-[48px] sm:py-[68px] lg:px-[80px]',
        styles.bgImage,
      )}
    >
      <Heading level={1}>Brand Assets</Heading>
      <Text className="mt-[8px]" size="large">
        Here you can find more Islamic Coin and HAQQ logos
      </Text>

      <div className="mt-[24px] sm:mt-[32px]">
        <DownloadButton
          variant={2}
          link="/assets/media-kit/media-kit.zip"
          withIcon
        >
          Download Full Pack
        </DownloadButton>
      </div>
    </section>
  );
}
