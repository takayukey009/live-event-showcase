import Link from 'next/link';
import React from 'react';

interface Breadcrumb {
  label: string;
  href: string;
}

const breadcrumbs: Breadcrumb[] = [
  { label: 'HOME', href: '/' },
  { label: 'ARCHIVE', href: '/past-events' },
];

const Breadcrumbs = () => (
  <nav className="text-sm mb-6" aria-label="Breadcrumb">
    <ol className="list-reset flex text-gray-600 dark:text-gray-300">
      {breadcrumbs.map((crumb, idx) => (
        <li key={crumb.href} className="flex items-center">
          <Link href={crumb.href} className={idx === breadcrumbs.length - 1 ? 'font-bold text-accent' : 'hover:underline'}>
            {crumb.label}
          </Link>
          {idx < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumbs;
