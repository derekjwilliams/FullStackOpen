import CountriesList from './CountriesList'
import CountryInformation from './CountryInformation'
import { useState } from 'react'

const Countries = ({
  countryFilter,
  countries,
  showCountryInformation,
  handleSelectCountry,
}) => {
  const caseInsensitiveCountryFilter = countryFilter.trim().toLowerCase()
  const matchingCountries = countries.filter((country) =>
    country.name.common
      .trim()
      .toLowerCase()
      .includes(caseInsensitiveCountryFilter)
  )

  if (matchingCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }
  if (matchingCountries.length === 0) {
    return <div>No Matches</div>
  }
  if (matchingCountries.length === 1) {
    return <CountryInformation country={matchingCountries[0]} />
  }
  if (showCountryInformation !== null) {
    return <CountryInformation country={showCountryInformation} />
  }
  return (
    <CountriesList
      countries={matchingCountries}
      handleSelectCountry={handleSelectCountry}
    />
  )
}
export default Countries
