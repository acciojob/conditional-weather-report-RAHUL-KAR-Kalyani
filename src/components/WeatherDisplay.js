import React from 'react'

const WeatherDisplay = ({ weather }) => {
    const temperatureColor = weather.temperature > 20 ? 'red' : 'blue'
    return (
        <div className='m-5 text-center weather'>
            <p className='text-center fs-2' style={{ color: temperatureColor }}>Temperature : <span style={{ color: temperatureColor }}>{weather.temperature}</span></p>
            <p className='text-center fs-2'> Conditions : {weather.conditions}</p>
        </div>
    )
}

export default WeatherDisplay;