import type { Metadata } from 'next';
import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';
import { NotFound } from '@/components/ui/not-found';
import { DEPLOY_URL } from '@/constants';
import { haqqOpenGraphImages } from '@/lib/shared-metadata';

const title = 'Not Found';

export const metadata: Metadata = {
  title,
  openGraph: {
    title: `${title} | HAQQ`,
    url: new URL(DEPLOY_URL).toString(),
    images: haqqOpenGraphImages,
  },
};

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <NotFound />
      </main>
      <Footer />
    </>
  );
}
