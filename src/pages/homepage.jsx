import { useState,useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { darkTheme, lightTheme } from "../styles/styles";
import { getSavedCities } from "../utils/savecitysearch";


const HomePage = () => {
const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const styles = theme === "light" ? lightTheme : darkTheme;
  const [city, setCity] = useState("");
  const [recentCities, setRecentCities] = useState([]);

    useEffect(() => {
    setRecentCities(getSavedCities());
  }, []);

  const handleSearch = () => {
    if (!city.trim()) return;    
    setRecentCities(getSavedCities());
    navigate(`/weather/${city}`);
  };
    const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
 <div style={styles.page}>
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

      {recentCities.length > 0 && (
        <div style={{ width: "100%", marginTop: "12px" }}>
          {recentCities.map((c) => (
            <button
              key={c}
              style={styles.secondaryButton}
              onClick={() => navigate(`/weather/${c}`)}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <button
        style={styles.secondaryButton}
        onClick={toggleTheme}
      >
        Cambiar tema
      </button>
    </div>

  );
};

export default HomePage;