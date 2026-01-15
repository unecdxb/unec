'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  pathname?: string;
  homeLabel?: string;
  className?: string;
  customLabels?: Record<string, string>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  pathname: pathnameProp,
  homeLabel = 'Home',
  className = '',
  customLabels = {}
}) => {
  const pathnameFromHook = usePathname();
  const pathname = pathnameProp || pathnameFromHook;

  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split('/').filter(path => path);

    const breadcrumbs: BreadcrumbItem[] = [
      { label: homeLabel, href: '/' }
    ];

    let currentPath = '';
    paths.forEach((path) => {
      currentPath += `/${path}`;

      // Decode URL-encoded characters (e.g., %20 to space)
      const decodedPath = decodeURIComponent(path);

      // Use custom label if provided, otherwise format the path segment
      const label = customLabels[currentPath] || formatLabel(decodedPath);

      breadcrumbs.push({
        label,
        href: currentPath
      });
    });

    return breadcrumbs;
  };

  // Format path segment into readable label
  const formatLabel = (segment: string): string => {
    return segment
      .replace(/-/g, ' ')
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const items = generateBreadcrumbs();

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center ${className}`}>
      <ol className="flex items-center space-x-1 flex-wrap gap-y-3">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <MdOutlineKeyboardArrowRight className="text-primary mx-1" size={20} />
              )}
              {isLast ? (
                <span className="text-sm font-light uppercase text-white opacity-100">
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className="text-sm font-light uppercase text-white opacity-60 hover:opacity-80 hover:text-gray-900 transition-opacity">
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

/* 
USAGE EXAMPLES FOR NEXT.JS APP ROUTER:

// Simple usage - automatically gets pathname from usePathname hook
import Breadcrumb from '@/components/Breadcrumb';

export default function Page() {
  return <Breadcrumb />;
}

// With custom labels
import Breadcrumb from '@/components/Breadcrumb';

export default function Page() {
  return (
    <Breadcrumb 
      customLabels={{
        '/projects': 'Our Projects',
        '/projects/Dragon%20Mall%20UAE': 'Dragon Mall UAE',
        '/about-us': 'About Us'
      }}
    />
  );
}

// Now handles URL-encoded paths correctly:
// /projects/Dragon%20Mall%20UAE → Home > Projects > Dragon Mall UAE
// /projects/Al-Ain%20Tower → Home > Projects > Al Ain Tower
*/