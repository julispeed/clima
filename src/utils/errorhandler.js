// utils/errorHandler.js
export const getErrorMessage = (error) => {
  if (error.status === 404) return "Ciudad no encontrada";
  if (error.status === 429) return "Límite de API alcanzado";
  return "Error inesperado";
};