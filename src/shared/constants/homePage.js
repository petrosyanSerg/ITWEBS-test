import { TechStackWidgets } from '@/widgets/TechStackWidgets';
import { PageNavigationWidgets } from '@/widgets/PageNavigationWidgets';

export const HOME_SECTIONS = [
  {
    id: 'stack',
    title: 'Используемый Стек и Архитектура',
    subtitle:
      'Проект построен на основе современного стека, обеспечивающего производительность, масштабируемость и отличный пользовательский опыт.',
    content: <TechStackWidgets />,
  },
  {
    id: 'demo',
    title: 'Демонстрация Обязательных Требований',
    subtitle:
      'Ниже представлены ссылки на страницы, где реализованы ключевые аспекты задания (роутинг, API, модальное окно, POST-запрос):',
    content: <PageNavigationWidgets />,
  },
];

export const TECH_STACK_DATA = [
  {
    id: 1,
    title: 'Next.js (App Router)',
    description:
      'Использование новейших методов рендеринга (SSR, CSR, SSG, ISR) и файлового роутинга для создания производительных страниц.',
    badgeText: 'Фреймворк',
    badgeColor: 'cyan',
  },
  {
    id: 2,
    title: 'Mantine UI',
    description:
      'Быстрая разработка UI с использованием готовых, доступных и кастомизированных компонентов.',
    badgeText: 'UI Библиотека',
    badgeColor: 'violet',
  },
  {
    id: 3,
    title: 'Axios (FetchService)',
    description:
      'Инкапсуляция всей логики HTTP-запросов в едином классе для чистоты и переиспользования кода.',
    badgeText: 'API Клиент',
    badgeColor: 'grape',
  },
  {
    id: 4,
    title: 'SWR (Vercel)',
    description:
      'Эффективное кэширование, фоновая ревалидация и управление асинхронным состоянием на стороне клиента.',
    badgeText: 'Управление данными',
    badgeColor: 'orange',
  },
  {
    id: 5,
    title: 'SCSS Modules',
    description: 'Применение глобального сброса стилей, SCSS-миксинов.',
    badgeText: 'Стилизация',
    badgeColor: 'green',
  },
];

export const NAV_PAGES_DATA = [
  {
    id: 1,
    title: 'Задачи (SSG)',
    description:
      'Данные загружаются во время сборки (Build Time) для максимальной производительности.',
    link: '/ssg',
    badgeText: 'SSG',
    badgeColor: 'blue',
  },
  {
    id: 2,
    title: 'Динамическая Задача (SSR)',
    description:
      'Данные загружаются на сервере при каждом запросе пользователя (Runtime), демонстрируя динамический контент.',
    link: '/ssr',
    badgeText: 'SSR',
    badgeColor: 'teal',
  },
  {
    id: 3,
    title: 'Создание (CSR + Modal/POST)',
    description:
      'Клиентский компонент с useSWR и Модальным окном. Здесь демонстрируется POST-запрос с отправкой данных и файла.',
    link: '/csr',
    badgeText: 'CSR + Modal/POST',
    badgeColor: 'grape',
  },
  {
    id: 4,
    title: 'Посты (ISR)',
    description:
      'Гибридный рендеринг (Incremental Static Regeneration). Страница перестраивается через заданный интервал, демонстрируя свежесть и скорость контента.',
    link: '/isr',
    badgeText: 'ISR',
    badgeColor: 'orange',
  },
];
