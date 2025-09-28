export const getAvailabilityColor = (status) => {
  if (status === 'In Stock') return 'teal';
  if (status === 'Low Stock') return 'orange';
  return 'red';
};