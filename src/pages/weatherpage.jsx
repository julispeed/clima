import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getWeatherByCity } from "../services/wheaterServices";
import { useTheme } from "../context/ThemeContext";
import { darkTheme, lightTheme } from "../styles/styles";

const WeatherPage = () => {
  const { city } = useParams();
  const navigate = useNavigate();
  const { theme,toggleTheme } = useTheme();
const styles = theme === "light" ? lightTheme : darkTheme;
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getWeatherByCity(city);
        setWeather(data);
      } catch (err) {
        setError("No se pudo obtener el clima");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div style={styles.page}>
  
      {/* Header */}
      <button style={styles.secondaryButton} onClick={() => navigate("/")}>
        ← Volver
      </button>

      <h1 style={styles.title}>Clima en {city}</h1>

      {/* Estados */}
      {loading && <p>Cargando clima...</p>}
      {error && <p style={styles.error}>{error}</p>}

      {/* Datos */}
      {weather && !loading && (
        <div style={styles.card}>
          <h2 style={styles.title} >{weather.current.condition.text}</h2>
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
          />
          <p style={styles.text}>🌡️ {weather.current.temp_c}°C</p>
          <p style={styles.text}>💧 Humedad: {weather.current.humidity}%</p>
          <p style={styles.text} >💨 Viento: {weather.current.wind_kph} km/h</p>
        </div>
      )}
     
    </div>
  );
};

export default WeatherPage;