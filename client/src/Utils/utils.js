export const formatBirthday = (milliseconds) => {
  const date = new Date(milliseconds);
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};
