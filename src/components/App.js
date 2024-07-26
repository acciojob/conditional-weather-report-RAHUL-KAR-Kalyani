import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/WeatherDisplay';

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: '' });

  useEffect(() => {
    // Simulate fetching weather data from an API
    const weatherData = { temperature: 25, conditions: 'Sunny' };
    setWeather(weatherData);
  }, []);

  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;
