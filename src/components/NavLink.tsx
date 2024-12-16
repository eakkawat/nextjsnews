'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ href, children }: { href: string; children: string }) {
  const path = usePathname();

  // If path is '/archive' it should match all children routes of '/archive'
  const isActive = href === '/archive' ? path.startsWith(href) : path === href;

  return (
    <Link className={isActive ? 'active' : ''} href={href}>
      {children}
    </Link>
  );
}
export default NavLink;
