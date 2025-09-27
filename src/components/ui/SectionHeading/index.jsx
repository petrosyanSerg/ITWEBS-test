import { Title, Text, Space } from '@mantine/core';

export function SectionHeading({ title, subtitle, color = 'dimmed' }) {
  return (
    <>
      <Title order={1} align="center" mb="md">
        {title}
      </Title>
      <Text size="lg" color={color} align="center" mb="xl">
        {subtitle}
      </Text>
      <Space h="lg" />
    </>
  );
}