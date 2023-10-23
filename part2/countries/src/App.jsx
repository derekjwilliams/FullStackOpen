import { useState, useEffect } from 'react'
import './App.css'
import Filter from './components/Filter'
import Countries from './components/Countries'
import countriesService from './services/countries'

function App() {
  const [countryFilter, setCountryFilter] = useState('')
  const [countries, setCountries] = useState([])
  const countryFilterChange = (event) => {
    console.log(event.target.value)
    setCountryFilter(event.target.value)
  }

  useEffect(() => {
    countriesService.getAll().then((countries) => {
      setCountries(countries)
    })
  }, [])

  return (
    <div>
      <Filter
        countryFilter={countryFilter}
        countryFilterChange={countryFilterChange}
      />
      <Countries countryFilter={countryFilter} countries={countries} />
    </div>
  )
}

export default App
