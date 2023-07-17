export const getTotalPages = (totalItems, pageSize) => {
  return Math.ceil(totalItems / pageSize);
};