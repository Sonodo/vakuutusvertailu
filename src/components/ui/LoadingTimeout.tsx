'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

/**
 * Loading state with a 60s timeout fallback.
 * If the parent suspended boundary doesn't resolve in 60s, show a recovery
 * UI with refresh hint + escape link to a static comparison surface.
 *
 * Use this as the Suspense fallback for client components that depend on
 * useSearchParams / dynamic data and may silently fail to hydrate.
 */
export default function LoadingTimeout({
  message = 'Ladataan laskuria...',
  fallbackHref = '/vakuutusyhtiot',
  fallbackLabel = 'Selaa vakuutusyhtiöitä',
  timeoutMs = 60_000,
}: {
  message?: string;
  fallbackHref?: string;
  fallbackLabel?: string;
  timeoutMs?: number;
}) {
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTimedOut(true), timeoutMs);
    return () => clearTimeout(t);
  }, [timeoutMs]);

  if (timedOut) {
    return (
      <div className="rounded-lg border border-amber/30 bg-amber/5 p-6 text-center">
        <p className="mb-2 font-semibold text-navy">
          Laskurin lataus epäonnistui.
        </p>
        <p className="mb-4 text-sm text-gray-600">
          Päivitä sivu tai siirry suoraan tarjoajien sivuille.
        </p>
        <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
          <button
            onClick={() => window.location.reload()}
            className="rounded-lg bg-navy px-4 py-2 text-sm font-medium text-white hover:bg-navy-light"
          >
            Päivitä sivu
          </button>
          <Link
            href={fallbackHref}
            className="rounded-lg border border-navy px-4 py-2 text-sm font-medium text-navy hover:bg-navy/5"
          >
            {fallbackLabel}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 text-center text-gray-400" aria-live="polite">
      {message}
    </div>
  );
}
