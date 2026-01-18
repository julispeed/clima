import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import WeatherPage from "./pages/WeatherPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/weather/:city" element={<WeatherPage />} />
    </Routes>
  );
}

export default App;