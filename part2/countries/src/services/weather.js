import axios from 'axios'

const api_key = import.meta.env.VITE_SOME_KEY
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

// see https://openweathermap.org/weather-conditions#Icon-list
// e.g. https://api.openweathermap.org/data/2.5/weather?q=London&appid=[api_id]
const getWeatherByLocation = (location) => {
  const request = axios.get(`${baseUrl}/?q=${location}&appid=${api_key}`)
  return request.then((response) => response.data)
}

export default { getWeatherByLocation }
