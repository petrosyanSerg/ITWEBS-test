import Link from 'next/link';
import { SimpleGrid, Button } from '@mantine/core';

import { BaseCard } from '@/components/ui/BaseCard';
import { NAV_PAGES_DATA } from '@/shared/constants/homePage';

export function PageNavigationWidgets() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
      {NAV_PAGES_DATA.map((page) => (
        <BaseCard
          key={page.id}
          title={page.title}
          description={page.description}
          badgeText={page.badgeText}
          badgeColor={page.badgeColor}
        >
          <Button component={Link} href={page.link} variant="light" fullWidth radius="md">
            Перейти на страницу
          </Button>
        </BaseCard>
      ))}
    </SimpleGrid>
  );
}
