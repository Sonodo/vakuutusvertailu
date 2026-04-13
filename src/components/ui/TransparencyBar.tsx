import Link from 'next/link';
import { Info } from 'lucide-react';

export default function TransparencyBar() {
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-start gap-2 px-4 py-2.5 sm:items-center sm:px-6 lg:px-8">
        <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400 sm:mt-0" />
        <p className="text-xs text-gray-500 leading-relaxed">
          <span className="font-medium text-gray-600">Puolueeton vertailu:</span>{' '}
          järjestys perustuu hintaan, kattavuuteen ja asiakastyytyväisyyteen —
          sama menetelmä jokaiselle vakuutukselle.{' '}
          <Link
            href="/metodologia"
            className="font-medium text-teal underline transition-colors hover:text-teal-dark"
          >
            Näin vertailemme
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
