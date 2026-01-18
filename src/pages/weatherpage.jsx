import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getWeatherByCity } from "../services/wheaterServices";
import { useTheme } from "../context/ThemeContext";
import { darkTheme, lightTheme } from "../styles/styles";
import { saveCitySearch } from "../utils/savecitysearch";
import { useWeather } from "../hooks/useWeather";
import WeatherCard from "../components/WeatherCard";

const WeatherPage = () => {
  const { city } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const styles = theme === "light" ? lightTheme : darkTheme;

  const { data, loading, error } = useWeather(city);

  // Guardar solo si existe
  if (data) {
    saveCitySearch(data.location.name);
  }

  return (
    <div style={styles.page}>
      <button style={styles.secondaryButton} onClick={() => navigate("/")}>
        ← Volver
      </button>

      {loading && <p>Cargando clima...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && <WeatherCard weather={data} />}
    </div>
  );
};

export default WeatherPage;