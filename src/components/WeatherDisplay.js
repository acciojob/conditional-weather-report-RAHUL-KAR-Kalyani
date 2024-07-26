import React from 'react'

const WeatherDisplay = ({ weather }) => {
    const temperatureColor = weather.temperature > 20 ? 'red' : 'blue'
    return (
        <div className='m-5 text-center weather'>
            <p className='text-center fs-2' style={{ color: temperatureColor }}> Temperature : {weather.temperature}</p>
            <span className='text-center fs-2'> Conditions : {weather.conditions}</span>
            {/* <p className='text-center fs-2' style={{ color: temperatureColor }}> Temperature : {weather.temperature}</p> */}
        </div>
    )
}

export default WeatherDisplay;