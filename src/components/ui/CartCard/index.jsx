import { Card, Text, Badge, Group, Flex, Divider } from '@mantine/core';

export function CartCard({ cart }) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="lg"
      withBorder
      style={{ height: '100%' }}
    >
      <Group justify="space-between" mb="xs">
        <Text weight={700} size="lg" c="teal">
          Корзина ID: {cart.id}
        </Text>
        <Badge color="blue" variant="light" size="lg">
          {cart.totalProducts} товаров
        </Badge>
      </Group>
      <Text size="sm" c="dimmed" mb="md">
        Принадлежит пользователю с ID: {cart.userId}
      </Text>
      <Divider my="sm" />
      <Flex direction="column" gap="xs" mt="md">
        <Group justify="space-between">
          <Text size="md" weight={500}>Общая стоимость:</Text>
          <Text size="md" style={{ textDecoration: 'line-through' }} c="gray">
            ${cart.total.toFixed(2)}
          </Text>
        </Group>
        <Group justify="space-between">
          <Text size="xl" weight={700}>Сумма со скидкой:</Text>
          <Text size="xl" weight={700} c="red">
            ${cart.discountedTotal.toFixed(2)}
          </Text>
        </Group>
      </Flex>
    </Card>
  );
}