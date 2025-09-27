export const getRoleColor = (role) => {
  switch (role) {
    case 'admin':
      return 'red';
    case 'moderator':
      return 'orange';
    default:
      return 'teal';
  }
};