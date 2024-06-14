import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';
import { Fragment, type PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </Fragment>
  );
}
