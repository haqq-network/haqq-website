import type { PropsWithChildren } from 'react';

export default function WalletPageLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col overflow-x-clip font-manrope will-change-scroll">
      {children}
    </main>
  );
}
