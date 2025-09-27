import { Card, Title, Text, Group, Badge, Space } from '@mantine/core';

export function PostCard({ post }) {
  if (!post) {
    return <Text c="red">Ошибка: Данные поста не найдены.</Text>;
  }

  return (
    <Card shadow="sm" padding="xl" radius="lg" withBorder>
      <Group justify="space-between" mb="md">
        <Title order={2} size="h3" style={{ maxWidth: '80%' }}>
          {post.title}
        </Title>
        <Badge color="cyan" variant="filled" size="lg">
          ID: {post.id}
        </Badge>
      </Group>
      <Text size="md" c="dimmed" mb="lg">
        {post.body}
      </Text>
      <Space h="sm" />
      <Group justify="space-between" mt="md">
        <Group gap="xs">
          {post.tags && post.tags.map((tag) => (
            <Badge key={tag} color="gray" variant="light">
              #{tag}
            </Badge>
          ))}
        </Group>
        {post.reactions && (
          <Group gap="sm">
            <Text size="sm" c="teal">👍 {post.reactions.likes}</Text>
            <Text size="sm" c="red">👎 {post.reactions.dislikes}</Text>
            <Text size="sm" c="blue">👁️ {post.views} просмотров</Text>
          </Group>
        )}
      </Group>
      <Space h="xs" />
      <Text size="sm" c="gray" align="right">
        Автор: User ID {post.userId}
      </Text>
    </Card>
  );
}