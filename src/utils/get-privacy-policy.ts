import { cache } from 'react';
import { NextRequestInit } from '@/types';
import { FALCONER_ENDPOINT, REVALIDATE_TIME } from '../constants';

export const revalidate = REVALIDATE_TIME;

export async function getHaqqPrivacyPolicyData(
  options: Partial<NextRequestInit>,
) {
  const requestUrl = new URL('/haqq/pp', FALCONER_ENDPOINT);
  const response = await fetch(requestUrl, {
    method: 'GET',
    ...options,
  });

  if (!response.ok) {
    throw new Error('Privacy policy fetch failed');
  }

  const responseJson = await response.json();

  return responseJson.pp as string;
}

export const getPrivacyPolicyContentFromFalconer = cache(async () => {
  try {
    const data = await getHaqqPrivacyPolicyData({
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
