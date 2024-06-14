import type { Metadata } from 'next';
import { DEPLOY_URL } from '@/constants';
import { haqqOpenGraphImages } from '@/lib/shared-metadata';
import NotFound from '@/components/ui/not-found';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';

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
