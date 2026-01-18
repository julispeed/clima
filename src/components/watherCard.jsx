const WeatherCard = ({ weather }) => {
  return (
    <div>
      <h2>{weather.location.name}</h2>
      <img src={weather.current.condition.icon} />
      <p>{weather.current.temp_c}°C</p>
      <p>Humedad: {weather.current.humidity}%</p>
    </div>
  );
};

export default WeatherCard;