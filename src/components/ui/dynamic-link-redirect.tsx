'use client';
import { useEffect } from 'react';
import { redirect, useSearchParams } from 'next/navigation';
import { usePostHog } from 'posthog-js/react';

export function DynamicLinkRedirect() {
  const params = useSearchParams();
  const posthog = usePostHog();

  useEffect(() => {
    const posthogId = params.get('posthog_id');
    if (posthogId && posthogId !== 'undefined' && posthogId !== '') {
      posthog.identify(posthogId);
    }

    const goTo = params.get('go_to');
    if (goTo && goTo !== 'undefined' && goTo !== '') {
      redirect(goTo);
    }
  }, [params, posthog]);

  return null;
}
