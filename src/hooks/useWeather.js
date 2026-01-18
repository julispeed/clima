import { useEffect, useState } from "react";
import { getWeatherByCity } from "../services/wheaterServices";

export let useWeather = (city) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

    if (!city) return;

    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await getWeatherByCity(city);
        setData(res);
        console.log("got data")
      } catch {
        setError("No se pudo obtener el clima");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { data, loading, error };
};