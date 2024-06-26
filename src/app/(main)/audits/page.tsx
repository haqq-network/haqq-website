import type { Metadata } from 'next';
import { AuditsPage } from '@/components/pages/audits-page';
import { DEPLOY_URL } from '@/constants';
import { haqqOpenGraphImages } from '@/lib/shared-metadata';

const title = 'Audits';
const description = '';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | HAQQ`,
    description,
    url: new URL('/audits', DEPLOY_URL).toString(),
    images: haqqOpenGraphImages,
  },
};

export default async function Page() {
  return <AuditsPage />;
}
