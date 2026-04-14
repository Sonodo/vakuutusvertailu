import Link from 'next/link';
import { Info } from 'lucide-react';

export default function TransparencyBar() {
  return (
    <div className="bg-amber/10 border-b border-amber/30">
      <div className="mx-auto flex max-w-7xl items-start gap-2 px-4 py-2.5 sm:items-center sm:px-6 lg:px-8">
        <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber sm:mt-0" />
        <p className="text-xs text-gray-700 leading-relaxed">
          <span className="font-semibold text-gray-800">Tietopalvelu, ei vakuutusneuvontaa.</span>{' '}
          Hinnat ovat arvioita julkisten tietojen perusteella — lopullinen hinta selviää yhtiöltä.
          Osa linkeistä on mainoslinkkejä (merkitty{' '}
          <span className="inline-block rounded-sm bg-amber/30 px-1 text-[10px] font-bold uppercase tracking-wide text-amber-700">
            Mainos
          </span>
          ) — komissio ei vaikuta järjestykseen.{' '}
          <Link
            href="/metodologia#nain-ansaitsemme"
            className="font-medium text-teal underline transition-colors hover:text-teal-dark"
          >
            Näin ansaitsemme
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
