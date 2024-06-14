'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './main-statistics-block.module.css';
import { MemoizedAnimatedNumbers } from './animated-numbers';
import { useInViewport } from 'react-in-viewport';
import { ChainStats } from '@/types';

export function StatisticsBlockStatCard({
  title,
  value,
  startAnimation,
  prefix,
  postfix,
}: {
  title: string;
  value: number;
  startAnimation: boolean;
  prefix?: string;
  postfix?: string;
}) {
  return (
    <div>
      <div
        className={clsx(
          'font-clash text-[18px] font-[500] leading-[1.3em] sm:text-[24px] lg:text-[32px]',
          styles['statsBlock'],
        )}
      >
        {prefix && `${prefix} `}
        {startAnimation ? (
          <MemoizedAnimatedNumbers
            animateToNumber={value}
            locale="en-US"
            configs={(_, index) => {
              return {
                mass: 1,
                friction: 100,
                tension: 140 * (index + 1),
              };
            }}
          />
        ) : (
          <span>0</span>
        )}
        {postfix && ` ${postfix}`}
      </div>
      <div className="font-guise text-[13px] font-[500] leading-[1.6em] sm:text-[15px] lg:text-[16px]">
        {title}
      </div>
    </div>
  );
}

export function MainStatisticsBlock({ stats }: { stats?: ChainStats }) {
  const [startAnimation, setStartAnimation] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);
  const { inViewport } = useInViewport(
    blockRef,
    {},
    { disconnectOnLeave: true },
  );

  useEffect(() => {
    if (inViewport && !startAnimation) {
      setStartAnimation(true);
    }
  }, [inViewport, startAnimation]);

  const memoizedStats = useMemo(() => {
    if (!stats) {
      return undefined;
    }

    return {
      mainnetAccountsCreated: stats.mainnetAccountsCreated,
      transactionsInLast24Hours: stats.transactionsInLast24Hours,
      secondsToConsensusFinality: stats.secondsToConsensusFinality,
      averageCostPerTransaction: stats.averageCostPerTransaction,
      era: stats.era,
      emissionRate: stats.emissionRate,
      emittedAlready: stats.emittedAlready,
      willBeEmitted: stats.willBeEmitted,
    };
  }, [stats]);

  if (memoizedStats === undefined) {
    return null;
  }

  return (
    <div className="border-t border-haqq-border" ref={blockRef}>
      <div
        className="mx-[16px] border-l border-haqq-border px-[16px] sm:ml-[63px] sm:mr-0 sm:pl-0 sm:pr-0 lg:ml-[79px]"
        id="stats"
      >
        <div className="grid grid-cols-1 gap-[24px] py-[42px] sm:grid-cols-2 sm:px-[32px] sm:py-[60px] xl:grid-cols-3">
          <StatisticsBlockStatCard
            value={memoizedStats.mainnetAccountsCreated}
            title="mainnet accounts created"
            startAnimation={startAnimation}
          />
          <StatisticsBlockStatCard
            value={memoizedStats.transactionsInLast24Hours}
            title="transactions in the last 24 hours"
            startAnimation={startAnimation}
            prefix="~"
          />
          <StatisticsBlockStatCard
            value={memoizedStats.secondsToConsensusFinality}
            title="seconds to consensus finality"
            startAnimation={startAnimation}
            prefix="~"
          />
          <StatisticsBlockStatCard
            value={memoizedStats.averageCostPerTransaction}
            title="average cost per transaction"
            startAnimation={startAnimation}
            postfix="ISLM"
          />
          <StatisticsBlockStatCard
            value={memoizedStats.emittedAlready}
            title="emitted already"
            startAnimation={startAnimation}
          />
          <StatisticsBlockStatCard
            value={memoizedStats.willBeEmitted}
            title="will be emitted"
            startAnimation={startAnimation}
          />
        </div>
      </div>
    </div>
  );
}
