import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
    const [weatherData, setWeatherData] = useState(null)
    const api_key = import.meta.env.VITE_WEATHER_KEY

    useEffect(() => {  
        if (capital) {
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`)
                .then(response => {setWeatherData(response.data)})
                .catch(error => {console.error('Error fetching weather data:', error)})
        }
    }, [capital, api_key])

    return (
        <div>
            {weatherData ? (
                <div>
                    <h2>Weather in {capital}</h2>
                    <p>Temperature {weatherData.main.temp} Celsius</p>
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
                    <div>wind {weatherData.wind.speed} m/s</div>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    )
}

export default Weather