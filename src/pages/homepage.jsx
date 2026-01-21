import { useState,useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { darkTheme, lightTheme } from "../styles/styles";
import { getSavedCities } from "../utils/savecitysearch";
import Listatareas from "../components/tareas";


const HomePage = () => {
const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const styles = theme === "light" ? lightTheme : darkTheme;
  const [city, setCity] = useState("");
  const [recentCities, setRecentCities] = useState([]);
  const [nombre, setNombre] = useState('');
  const [lista, setLista] = useState([]);
    useEffect(() => {
    setRecentCities(getSavedCities());
  }, []);
const remover = (texto) => {
  setLista(lista.filter(item => item.texto !== texto));
};

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
  const agregar=()=>{
    if (!nombre.trim()) return;
    setLista([...lista,{texto:nombre, tachado:false }]);
    setNombre('');
  };
const toggletachado=(nombre)=>
{
  setLista(
    lista.map(
      item=>item.texto===nombre ? {...item, tachado: !item.tachado} : item
    )
  )
}
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
      <input
        type="text"
        placeholder="Ingresá un nombre"
        style={styles.input}
        value={nombre}
        onChange={(e)=>setNombre(e.target.value)}
      />
      <button style={styles.button} onClick={agregar}>Agregar</button>
      <Listatareas lista={lista} remover={remover} toggletachado={toggletachado} />
    </div>

  );
};

export default HomePage;