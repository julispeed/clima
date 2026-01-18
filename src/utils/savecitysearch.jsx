export const saveCitySearch = (city) => {
  const stored = JSON.parse(localStorage.getItem("recentCities")) || [];

  const updated = [
    city,
    ...stored.filter(c => c.toLowerCase() !== city.toLowerCase()),
  ].slice(0, 5);

  localStorage.setItem("recentCities", JSON.stringify(updated));
};
export const getSavedCities = () => {
  return JSON.parse(localStorage.getItem("recentCities")) || [];
};