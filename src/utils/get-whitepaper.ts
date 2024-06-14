import { FALCONER_ENDPOINT, REVALIDATE_TIME } from '@/constants';
import { NextRequestInit } from '@/types';
import { cache } from 'react';

export const revalidate = REVALIDATE_TIME;

export async function getHaqqWhitepaperData(options: Partial<NextRequestInit>) {
  const requestUrl = new URL('/haqq/wp', FALCONER_ENDPOINT);

  const response = await fetch(requestUrl, {
    method: 'GET',
    ...options,
  });

  if (!response.ok) {
    throw new Error('Whitepaper fetch failed');
  }

  const responseJson = await response.json();

  return responseJson.wp as string;
}

export const getWhitepaperContentFromFalconer = cache(async () => {
  try {
    const data = await getHaqqWhitepaperData({
      next: {
        revalidate,
      },
    });

    return data;
  } catch (error) {
    console.error(error);
  }

  return '';
});
