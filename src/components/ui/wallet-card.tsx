import { ReactNode } from 'react';
import clsx from 'clsx';

export function WalletCardText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx('text-[16px] font-[500] leading-[22px]', className)}>
      {children}
    </div>
  );
}

export function CardHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={clsx('text-[28px] font-[800] leading-[36px]', className)}>
      {children}
    </h3>
  );
}
