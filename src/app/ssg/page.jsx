import { Container, SimpleGrid, Space } from '@mantine/core';

import { Fetch } from '@/shared/utils/Fetch';
import { UserCard } from '@/components/ui/UserCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

async function getUsers() {
  const res = await Fetch.get('users');

  if (!res || !res.users) {
    throw new Error('Failed to fetch users');
  }

  return res.users;
}

export default async function SSGPage() {
  const users = await getUsers();

  return (
    <Container size="lg" py="xl">
      <SectionHeading
        title="Пользователи (SSG)"
        subtitle="Эта страница была статически сгенерирована во время сборки проекта."
      />
      <Space h="lg" />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
