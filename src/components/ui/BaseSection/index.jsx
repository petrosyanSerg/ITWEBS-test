import { Container, Title, Text, Space } from '@mantine/core';

export function BaseSection({ title, subtitle, children }) {
  return (
    <Container size="lg" py="xl">
      <Title order={2} align="center" mb="sm">
        {title}
      </Title>
      <Text size="lg"  align="center" mb="xl">
        {subtitle}
      </Text>
      {children}
      <Space h="xl" />
    </Container>
  );
}
