import CountriesList from './CountriesList'
import CountryInformation from './CountryInformation'

const Countries = ({ countryFilter, countries }) => {
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
  return <CountriesList countries={matchingCountries} />
}
export default Countries
