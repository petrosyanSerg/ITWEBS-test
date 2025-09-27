'use client';

import { Container, Title, Text, Space } from '@mantine/core';

import { BaseSection } from '@/components/ui/BaseSection';
import { HOME_SECTIONS } from '@/shared/constants/homePage';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function HomePage() {
  return (
    <Container size="lg" py="xl">
      <SectionHeading
        title="Добро пожаловать в Демо Проект Frontend Next.js"
        subtitle="Это демонстрационное приложение, созданное в рамках тестового задания. Оно призвано показать
        мои навыки в работе с Next.js App Router, Mantine UI, Axios, SWR и SCSS."
      />
      <Space h="xl" />
      {HOME_SECTIONS.map((section) => (
        <BaseSection key={section.id} title={section.title} subtitle={section.subtitle}>
          {section.content}
        </BaseSection>
      ))}
      <Text align="center" color="dimmed" mt="xl">
        Надеюсь, представленная работа полностью соответствует вашим ожиданиям и демонстрирует
        необходимый уровень знаний.
      </Text>
    </Container>
  );
}
