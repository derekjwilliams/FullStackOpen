import { useState, useEffect } from 'react'
import './App.css'
import Filter from './components/Filter'
import Countries from './components/Countries'
import countriesService from './services/countries'
function App() {
  const [countryFilter, setCountryFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [showCountryInformation, setShowCountryInformation] = useState(null)

  const countryFilterChange = (event) => {
    setCountryFilter(event.target.value)
    setShowCountryInformation(null)
  }

  useEffect(() => {
    countriesService.getAll().then((countries) => {
      setCountries(countries)
    })
  }, [])

  const handleSelectCountry = (country) => {
    setShowCountryInformation(country)
  }

  return (
    <div>
      <Filter
        countryFilter={countryFilter}
        countryFilterChange={countryFilterChange}
      />
      <Countries
        countryFilter={countryFilter}
        countries={countries}
        showCountryInformation={showCountryInformation}
        handleSelectCountry={handleSelectCountry}
      />
    </div>
  )
}

export default App
