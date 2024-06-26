import type { Metadata } from 'next';
import { ValidatorProgramPage } from '@/components/pages/validator-program-page';
import { DEPLOY_URL } from '@/constants';
import { haqqOpenGraphImages } from '@/lib/shared-metadata';

const title = 'Validators';
const description = '';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | HAQQ`,
    description,
    url: new URL('/validators', DEPLOY_URL).toString(),
    images: haqqOpenGraphImages,
  },
};

export default async function Page() {
  return <ValidatorProgramPage />;
}
