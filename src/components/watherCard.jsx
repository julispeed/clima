import { darkTheme, lightTheme } from "../styles/styles";
import { useTheme } from "../context/ThemeContext";
const  WeatherCard = ({ weather }) => {
  const { theme, toggleTheme } = useTheme();
  const styles = theme === "light" ? lightTheme : darkTheme;
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{weather.location.name}</h2>
      <img src={weather.current.condition.icon} />
      <p style={styles.text}>{weather.current.temp_c}°C</p>
      <p style={styles.text}>Humedad: {weather.current.humidity}%</p>
    </div>
  );
};

 export default WeatherCard;