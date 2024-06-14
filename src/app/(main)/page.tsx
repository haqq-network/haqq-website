import { MainPage } from '@/components/pages/main-page';
import { DEPLOY_URL } from '@/constants';
import { haqqOpenGraphImages } from '@/lib/shared-metadata';
import { getChainStatsFromFalconer } from '@/utils/get-chain-stats';
import type { Metadata } from 'next';

const title = 'Home of ethical web3';
const description =
  'Ethics-first network that welcomes sustainability-centered developers, validators and open source contributors as well as Muslim innovators in sustainable Finance';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | HAQQ`,
    description,
    url: new URL(DEPLOY_URL).toString(),
    images: haqqOpenGraphImages,
  },
};

export default async function Page() {
  const stats = await getChainStatsFromFalconer();

  return <MainPage stats={stats} />;
}
