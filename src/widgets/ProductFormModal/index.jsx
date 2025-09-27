'use client';
import { useState } from 'react';

import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { Button, Modal, TextInput, FileInput, Stack, NumberInput } from '@mantine/core';

import { Fetch } from '@/shared/utils/Fetch';

export function ProductFormModal({ оnProductCreated }) {
  const [opened, { open, close }] = useDisclosure(false);

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(100); // Добавим цену для валидности продукта
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!productName) {
      notifications.show({ title: 'Ошибка', message: 'Введите название продукта', color: 'red' });
      return;
    }

    setLoading(true);
    close();

    try {
      const productData = {
        title: productName,
        price: productPrice,
        description: 'Новый продукт, добавленный через CSR форму.',
        userId: 1,
      };

      const res = await Fetch.post('products/add', productData, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (оnProductCreated) {
        оnProductCreated();
      }

      notifications.show({
        title: 'Продукт успешно добавлен!',
        message: `Продукт "${res.title}" (ID: ${res.id}) создан. Цена: $${res.price.toFixed(2)}.`,
        color: 'teal',
      });

      setProductName('');
      setProductPrice(100);
      setFile(null);
    } catch (e) {
      console.error('POST Error:', e);
      notifications.show({
        title: 'Ошибка API',
        message: 'Не удалось отправить данные продукта.',
        color: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={open} loading={loading} color="violet">
        Добавить новый продукт (Modal + POST)
      </Button>
      <Modal
        opened={opened}
        onClose={close}
        title="Создание нового продукта"
        overlayProps={{ opacity: 0.55, blur: 3 }}
      >
        <Stack>
          <TextInput
            label="Название продукта"
            placeholder="Например: Супер-кроссовки"
            value={productName}
            onChange={(event) => setProductName(event.currentTarget.value)}
            required
          />
          <NumberInput
            label="Цена продукта ($)"
            placeholder="100.00"
            value={productPrice}
            onChange={setProductPrice}
            min={1}
            step={1}
            precision={2}
            required
          />
          <FileInput
            label="Изображение продукта (Файл)"
            description="Файл не отправляется в Dummy API, но поле сохранено по вашему требованию."
            placeholder="Выберите файл"
            value={file}
            onChange={setFile}
          />
          <Button onClick={handleSubmit} fullWidth disabled={!productName}>
            Создать продукт
          </Button>
        </Stack>
      </Modal>
    </>
  );
}
