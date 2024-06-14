import { cache } from 'react';
import { FALCONER_ENDPOINT, REVALIDATE_TIME } from '../constants';
import { HaqqChainStats, NextRequestInit } from '@/types';

export const revalidate = REVALIDATE_TIME;

export async function getHaqqChainStatsData(options: Partial<NextRequestInit>) {
  const requestUrl = new URL('/haqq/chain_stats', FALCONER_ENDPOINT);
  const response = await fetch(requestUrl, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error('Chain stats fetch failed');
  }

  const responseJson: HaqqChainStats = await response.json();

  return responseJson;
}

export const getChainStatsFromFalconer = cache(async () => {
  try {
    const stats = await getHaqqChainStatsData({
      next: {
        revalidate,
      },
    });

    return {
      mainnetAccountsCreated: Number.parseFloat(stats.accounts),
      transactionsInLast24Hours: Number.parseFloat(stats.transactionsIn24Hour),
      secondsToConsensusFinality: Number.parseFloat(stats.consensusFinality),
      averageCostPerTransaction: Number.parseFloat(stats.transactionAvgCost),
      era: Number.parseFloat(stats.coinomicsEra),
      emissionRate: Number.parseFloat(stats.coinomicsEmissionRate),
      emittedAlready: Number.parseFloat(stats.supply),
      willBeEmitted: Number.parseFloat(stats.coinomicsWillBeMinted),
    };
  } catch (error) {
    console.error(error);
  }

  return undefined;
});
