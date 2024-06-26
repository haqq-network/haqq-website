import type { Metadata } from 'next';
import { WhitepaperPage } from '@/components/pages/whitepaper-page';
import { DEPLOY_URL } from '@/constants';
import { haqqOpenGraphImages } from '@/lib/shared-metadata';
import { getWhitepaperContentFromFalconer } from '@/utils/get-whitepaper';

const title = 'Whitepaper';
const description =
  'The blueprint for a harmonious meld of Islamic finance and blockchain. Delve deep into the vision and strategies steering HAQQ and Islamic Coin.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | HAQQ`,
    description,
    url: new URL('/wp', DEPLOY_URL).toString(),
    images: haqqOpenGraphImages,
  },
};

export default async function Page() {
  const whitepaper = await getWhitepaperContentFromFalconer();

  return <WhitepaperPage whitepaper={whitepaper} />;
}
