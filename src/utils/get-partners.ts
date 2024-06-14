import { cache } from 'react';
import { NextRequestInit, Partner } from '@/types';
import { FALCONER_ENDPOINT, REVALIDATE_TIME } from '../constants';

export const revalidate = REVALIDATE_TIME;

export async function getHaqqPartnersData(options: Partial<NextRequestInit>) {
  const requestUrl = new URL('/haqq/partners', FALCONER_ENDPOINT);
  const response = await fetch(requestUrl, {
    method: 'GET',
    ...options,
  });

  if (!response.ok) {
    throw new Error('Partners fetch failed');
  }

  const responseJson = await response.json();

  return responseJson.partners as Partner[];
}

export const getHaqqPartnersFromFalconer = cache(async () => {
  try {
    const data = await getHaqqPartnersData({
      next: {
        revalidate,
      },
    });

    return data;
  } catch (error) {
    console.error(error);
  }

  return [];
});
