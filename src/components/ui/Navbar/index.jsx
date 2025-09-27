'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { Stack } from '@mantine/core';

import MenuNavLink from '@/components/ui/MenuNavLink';
import { MENU_ITEMS } from '@/shared/constants/navigation';

import cn from '@/components/ui/Navbar/Navbar.module.scss';

export function Navbar() {
  const pathname = usePathname();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className={cn.navbar}>
      <div>
        <Stack justify="center" gap="xs">
          {MENU_ITEMS.map((link) => {
            let isActive = isMounted ? pathname.startsWith(link.route) : false;
            if (link.route === '/') {
              isActive = pathname === '/';
            }
            return (
              <MenuNavLink
                {...link}
                key={link.label}
                active={isActive}
              />
            );
          })}
        </Stack>
      </div>
    </nav>
  );
}