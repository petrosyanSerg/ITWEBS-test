import { Card, Title, Text, Group, Badge, Rating, Flex, Image } from '@mantine/core';

export function ProductCard({ product }) {
  const finalPrice = product.price * (1 - product.discountPercentage / 100);

  const getAvailabilityColor = (status) => {
    if (status === 'In Stock') return 'teal';
    if (status === 'Low Stock') return 'orange';
    return 'red';
  };

  return (
    <Card
      shadow="md"
      padding="lg"
      radius="lg"
      withBorder
      style={{ height: '100%' }}
    >
      <Card.Section mb="md">
        <Image
          src={product.thumbnail}
          alt={product.title}
          height={200}
          fit="cover"
          fallbackSrc="https://via.placeholder.com/400x200?text=No+Image"
        />
      </Card.Section>
      <Group justify="space-between" mb="xs" wrap="nowrap">
        <Title order={3} size="h5" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {product.title}
        </Title>
        <Flex direction="column" align="flex-end" gap={0}>
          <Text size="xs" style={{ textDecoration: 'line-through' }} c="dimmed">
            ${product.price.toFixed(2)}
          </Text>
          <Text size="xl" weight={700} c="red">
            ${finalPrice.toFixed(2)}
          </Text>
        </Flex>
      </Group>
      <Text size="sm" c="dimmed" mb="md" lineClamp={2}>
        {product.description}
      </Text>
      <Group justify="space-between" align="center" mt="sm">
        <Flex direction="column" gap={4}>
          <Rating value={product.rating} fractions={2} readOnly size="sm" />
          <Text size="xs" c="dimmed">{product.reviews.length} отзывов</Text>
        </Flex>
        <Badge
          color={getAvailabilityColor(product.availabilityStatus)}
          variant="filled"
          size="lg"
        >
          {product.availabilityStatus}
        </Badge>
      </Group>
      <Group gap="xs" mt="md">
        <Text size="xs" weight={500}>Бренд:</Text>
        <Badge color="gray" variant="light">{product.brand}</Badge>
        <Text size="xs" weight={500}>Категория:</Text>
        <Badge color="violet" variant="light">{product.category}</Badge>
      </Group>
    </Card>
  );
}