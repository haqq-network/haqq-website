import { Fragment, type PropsWithChildren } from 'react';
import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </Fragment>
  );
}
