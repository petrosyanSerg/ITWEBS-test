import { Card, Text, Badge, Group, Divider, Flex } from '@mantine/core';

import { getRoleColor } from '@/shared/utils/usersUtils';

export function UserCard({ user }) {
  return (
    <Card
      shadow="md"
      padding="lg"
      radius="lg"
      withBorder
      style={{ height: '100%' }}
    >
      <Group justify="space-between" mb="xs">
        <Text weight={700} size="xl">
          {user.firstName} {user.lastName}
        </Text>
        <Badge color={getRoleColor(user.role)} variant="filled" size="lg">
          {user.role}
        </Badge>
      </Group>
      <Text size="sm" c="dimmed" mb="md">
        {user.email}
      </Text>
      <Divider my="sm" />
      <Text weight={600} size="sm" mb={4}>
        💼 {user.company.title}
      </Text>
      <Text size="xs" c="gray">
        {user.company.name} ({user.company.department})
      </Text>
      <Divider my="sm" />
      <Group justify="space-between" mt="md">
        <Flex direction="column" gap={2}>
          <Text size="xs" c="dimmed">Возраст/Пол:</Text>
          <Text size="sm">{user.age} / {user.gender}</Text>
        </Flex>
        <Flex direction="column" gap={2} align="flex-end">
          <Text size="xs" c="dimmed">Город/Страна:</Text>
          <Text size="sm">{user.address.city}, {user.address.country}</Text>
        </Flex>
      </Group>
      <Group justify="space-between" mt="md">
        <Flex direction="column" gap={2}>
          <Text size="xs" c="dimmed">Группа крови:</Text>
          <Badge color="red">{user.bloodGroup}</Badge>
        </Flex>
        <Flex direction="column" gap={2} align="flex-end">
          <Text size="xs" c="dimmed">Университет:</Text>
          <Text size="sm" style={{ textAlign: 'right' }}>{user.university}</Text>
        </Flex>
      </Group>
    </Card>
  );
}