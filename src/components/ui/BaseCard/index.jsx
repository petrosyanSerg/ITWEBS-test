import { Card, Text, Group, Badge } from '@mantine/core';

export function BaseCard({ title, description, badgeText, badgeColor, children }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart" mb="xs">
        <Text weight={600} size="lg">
          {title}
        </Text>
        {badgeText && (
          <Badge color={badgeColor} variant="light">
            {badgeText}
          </Badge>
        )}
      </Group>
      <Text size="sm" color="dimmed" mb="md">
        {description}
      </Text>
      {children}
    </Card>
  );
}
