'use client';
import { useState, useEffect } from 'react';

import { Text, Container, Skeleton, Stack, Badge, Flex, SimpleGrid } from '@mantine/core';

import { ProductCard } from '@/components/ui/ProductCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useCustomSWR } from '@/shared/hooks/useCustomSWR';
import { ProductFormModal } from '@/widgets/ProductFormModal';

export default function CSRPage() {
  const { data, error, isLoading, mutate } = useCustomSWR('products');

  const [wsStatus, setWsStatus] = useState('Отключение');
  const [wsMessage, setWsMessage] = useState('...');

  useEffect(() => {
    const socket = new WebSocket('wss://echo.websocket.org');

    socket.onopen = () => {
      setWsStatus('Подключено');
      socket.send('Hello from Next.js CSR page!');
    };

    socket.onmessage = (event) => {
      setWsMessage(`Получено: ${event.data.substring(0, 50)}...`);
    };

    socket.onclose = () => {
      setWsStatus('Отключено');
    };

    socket.onerror = (e) => {
      setWsStatus('Ошибка');
    };

    return () => {
      socket.close();
    };
  }, []);

  if (error) {
    return (
      <Container size="lg" py="xl">
        <SectionHeading
          title="Client-Side Rendering (CSR)"
          subtitle="Данные загружаются через useSWR."
        />
        <Text color="red" mt="lg">
          Ошибка при загрузке продуктов: {error.message}
        </Text>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container size="lg" py="xl">
        <SectionHeading
          title="Client-Side Rendering (CSR)"
          subtitle="Данные загружаются через useSWR."
        />
        <Text color="dimmed" mb="lg">
          Загрузка данных...
        </Text>
        <Stack>
          <Skeleton height={150} radius="sm" />
          <Skeleton height={150} radius="sm" />
          <Skeleton height={150} radius="sm" />
        </Stack>
      </Container>
    );
  }

  const products = data?.products || [];

  return (
    <Container size="lg" py="xl">
      <SectionHeading
        title="Каталог Продуктов (CSR)"
        subtitle="Страница полностью рендерится на клиенте, используя useSWR для асинхронной загрузки данных."
      />
      <Flex justify="space-between" align="center" mb="xl" wrap="wrap" gap="md">
        <ProductFormModal оnProductCreated={mutate}  />
        <Stack gap={2}>
          <Text size="sm" weight={600} c="dimmed">
            WebSocket Статус:
          </Text>
          <Badge color={wsStatus === 'Подключено' ? 'teal' : 'gray'} variant="filled">
            {wsStatus}
          </Badge>
          <Text size="xs" c="gray">
            {wsMessage}
          </Text>
        </Stack>
      </Flex>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
      <Text size="sm" color="gray" mt="xl" align="center">
        *Демонстрация работы с асинхронными данными (SWR), интерактивностью (Modal/POST) и реальным
        временем (WebSocket).
      </Text>
    </Container>
  );
}
