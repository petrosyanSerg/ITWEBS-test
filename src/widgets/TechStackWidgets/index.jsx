import { SimpleGrid } from '@mantine/core';

import { BaseCard } from '@/components/ui/BaseCard';
import { TECH_STACK_DATA } from '@/shared/constants/homePage';

export function TechStackWidgets() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" mb="xl">
      {TECH_STACK_DATA.map((item) => (
        <BaseCard
          key={item.id}
          title={item.title}
          description={item.description}
          badgeText={item.badgeText}
          badgeColor={item.badgeColor}
        />
      ))}
    </SimpleGrid>
  );
}
