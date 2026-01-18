import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { darkTheme, lightTheme } from "../styles/styles";

const HomePage = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const styles = theme === "light" ? lightTheme : darkTheme;
  const [city, setCity] = useState("");
  const handleSearch = () => {
    if (!city.trim()) return;
    navigate(`/weather/${city}`);
  };
    const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🌤 Clima</h1>

      <input
        type="text"
        placeholder="Ingresá una ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        style={styles.input}
      />

      <button style={styles.button} onClick={handleSearch}>
        Buscar clima
      </button>
      
      <button onClick={toggleTheme} style={styles.button}>
        Cambiar a {theme === "light" ? "oscuro" : "claro"}
      </button>      
    </div>
  );
};

export default HomePage;