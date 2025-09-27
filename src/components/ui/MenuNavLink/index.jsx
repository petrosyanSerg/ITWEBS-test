import { NavLink, Tooltip } from '@mantine/core';

export default function MenuNavLink({ icon: Icon, label, route,active}) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 250 }}>
      <NavLink
        href={route}
        label={label}
        active={active}
        style={{ 'border-radius': '10px' }}
        leftSection={<Icon size={30} stroke={1.5} />}
      />
    </Tooltip>
  );
}
