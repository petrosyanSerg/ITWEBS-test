import {
  IconHomeFilled,
  IconHexagonNumber1Filled,
  IconHexagonNumber2Filled,
  IconHexagonNumber3Filled,
  IconHexagonNumber4Filled,
} from '@tabler/icons-react';

export const MENU_ITEMS = [
  {
    id: 1,
    route: '/',
    label: 'Home',
    icon: IconHomeFilled,
  },
  {
    id: 2,
    route: '/csr',
    label: 'Client-side Rendering',
    icon: IconHexagonNumber1Filled,
  },
  {
    id: 3,
    route: '/ssr',
    label: 'Server-side Rendering',
    icon: IconHexagonNumber2Filled,
  },
  {
    id: 4,
    route: '/ssg',
    label: 'Static Site Generation',
    icon: IconHexagonNumber3Filled,
  },
  {
    id: 5,
    route: '/isr',
    label: 'Incremental Static Regeneration',
    icon: IconHexagonNumber4Filled,
  },
];
