import dynamic from 'next/dynamic';
import { ChainStats } from '@/types';
import { MainAboutBlock } from '../ui/main-about-block';
import { MainDevelopersBlock } from '../ui/main-developers-block';
import { MainHeroBlock } from '../ui/main-hero-block';
import { MainMissionBlock } from '../ui/main-mission-block';
import { MainStatisticsBlock } from '../ui/main-statistics-block';
import { MainVisionBlock } from '../ui/main-vision-block';

const MainContactBlock = dynamic(
  async () => {
    const { MainContactBlock } = await import(
      '@/components/ui/main-contact-block'
    );
    return { default: MainContactBlock };
  },
  { ssr: false },
);

export function MainPage({ stats }: { stats?: ChainStats }) {
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
