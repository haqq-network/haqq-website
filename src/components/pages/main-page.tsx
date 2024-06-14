import dynamic from 'next/dynamic';
import { MainHeroBlock } from '../ui/main-hero-block';
import { MainAboutBlock } from '../ui/main-about-block';
import { MainStatisticsBlock } from '../ui/main-statistics-block';
import { MainMissionBlock } from '../ui/main-mission-block';
import { MainVisionBlock } from '../ui/main-vision-block';
import { ChainStats } from '@/types';
import { MainDevelopersBlock } from '../ui/main-developers-block';

const MainContactBlock = dynamic(
  async () => {
    const { MainContactBlock } = await import(
      '@/components/ui/main-contact-block'
    );
    return { default: MainContactBlock };
  },
  { ssr: false },
);

export function MainPage({
  stats,
  turnstileSiteKey,
}: {
  stats?: ChainStats;
  turnstileSiteKey?: string;
}) {
  return (
    <section>
      <MainHeroBlock />
      <MainAboutBlock />
      <MainStatisticsBlock stats={stats} />
      <MainMissionBlock />
      <MainVisionBlock />
      <MainDevelopersBlock />
      <MainContactBlock />
    </section>
  );
}
