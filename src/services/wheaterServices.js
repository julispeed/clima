const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

/**
 * Obtener clima por ciudad
 */
export const getWeatherByCity = async (city) => {
  const response = await fetch(
    `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&lang=es`
  );


  if (!response.ok) {
    throw new Error("No se pudo obtener el clima");
  }

  return response.json();
};
