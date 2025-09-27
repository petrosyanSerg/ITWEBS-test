import { Container, SimpleGrid } from '@mantine/core';

import { CartCard } from '@/components/ui/CartCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { apiFetch } from '@/shared/utils/Fetch/apiFetch';

async function getCarts() {
  const res = await apiFetch('carts', {
    next: { revalidate: 60 },
  });

  if (!res || !res.carts) {
    throw new Error('Failed to fetch carts');
  }

  return res.carts;
}

export default async function ISRPage() {
  const carts = await getCarts();

  return (
    <Container size="lg" py="xl">
      <SectionHeading
        title="Корзины (ISR)"
        subtitle={`Эта страница была сгенерирована статически, но данные обновляются каждые 60 секунд. Чтобы увидеть, как работает ISR, обновите страницу через минуту (после первого запроса).`}
      />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {carts.slice(0, 15).map((cart) => (
          <CartCard key={cart.id} cart={cart} />
        ))}
      </SimpleGrid>
    </Container>
  );
}