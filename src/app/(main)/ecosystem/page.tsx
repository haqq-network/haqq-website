import type { Metadata } from 'next';
import { EcosystemPage } from '@/components/pages/ecosystem-page';
import { DEPLOY_URL } from '@/constants';
import { haqqOpenGraphImages } from '@/lib/shared-metadata';
import { getHaqqPartnersFromFalconer } from '@/utils/get-partners';

const title = 'Ecosystem';
const description =
  'Explore the HAQQ Network ecosystem comprising Bridge, Wallet, Infrastructure, DeFi, Payments, Services, and Institutional, designed to foster community-driven decentralized technologies worldwide.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | HAQQ`,
    description,
    url: new URL('/ecosystem', DEPLOY_URL).toString(),
    images: haqqOpenGraphImages,
  },
};

export default async function Page() {
  const partners = await getHaqqPartnersFromFalconer();

  return <EcosystemPage partners={partners} />;
}
