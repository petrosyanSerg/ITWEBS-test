import { Container, Title, Text, Space } from '@mantine/core';

import { Fetch } from '@/shared/utils/Fetch';
import { PostCard } from '@/components/ui/PostCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

async function getRandomPost() {
  const randomId = Math.floor(Math.random() * 20) + 1;
  const res = await Fetch.get(`posts/${randomId}`, { cache: 'no-store' });
  return res;
}

export default async function SSRPage() {
  const post = await getRandomPost();

  if (!post || !post.id) {
    return (
      <Container size="md" pt={50}>
        <Title order={1} c="red">
          Ошибка загрузки
        </Title>
        <Text>Не удалось загрузить случайный пост с сервера. Попробуйте обновить страницу.</Text>
      </Container>
    );
  }

  return (
    <Container size="md" py="xl">
      <SectionHeading
        title="Случайный Пост (SSR)"
        subtitle="Эта страница генерируется на сервере при каждом запросе. Обновите, чтобы увидеть новый пост."
      />
      <Space h="lg" />
      <PostCard post={post} />
    </Container>
  );
}
