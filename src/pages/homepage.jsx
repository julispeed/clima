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
<div style={styles.actions}>
  <input
    type="text"
    placeholder="Ingresá una ciudad"
    style={styles.input}
    value={city}
    onChange={(e) => setCity(e.target.value)}
    onKeyDown={handleKeyDown}
  />

  <button style={styles.button} onClick={handleSearch}>
    Buscar clima
  </button>

  <button style={styles.secondaryButton} onClick={toggleTheme}>
    Cambiar a oscuro
  </button>
</div>
  );
};

export default HomePage;