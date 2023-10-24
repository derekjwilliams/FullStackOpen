import { useState, useEffect } from 'react'
import weatherService from '../services/weather'
import setState from 'react'

const Weather = ({ city }) => {
  const [weather, setWeather] = useState('')
  useEffect(() => {
    weatherService.getWeatherByLocation(city).then((weather) => {
      setWeather(weather)
    })
  }, [])
  return (
    <div>
      <h3>{city}</h3>
      {weather && (
        <>
          <div>
            {`temperature ${(weather.main.temp - 273.15).toFixed(1)} Celcius`}
          </div>
          <img
            alt={weather.weather[0].description}
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          />
          <div>{`wind ${weather.wind.speed} m/s`}</div>
        </>
      )}
    </div>
  )
}

export default Weather
