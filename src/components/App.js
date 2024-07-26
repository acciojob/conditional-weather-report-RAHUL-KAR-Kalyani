
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, condition: '' });
  useEffect(() => {
    const weatherData = { temperature: 25, conditions: "Sunny" }
    setWeather(weatherData)
    console.log(setWeather);
  }, [])


  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  )
}

export default App;