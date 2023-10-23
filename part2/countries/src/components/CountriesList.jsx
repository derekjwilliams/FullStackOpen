const itemLabel = {
  paddingRight: '0.5rem',
}
const countryStyle = {
  padding: '0.5rem 0',
}

const CountriesList = ({ countries, handleSelectCountry }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {countries.map((country) => (
        <li style={countryStyle} key={country.cca3}>
          <span style={itemLabel}>{country.name.common}</span>
          <button onClick={() => handleSelectCountry(country)}>show</button>
        </li>
      ))}
    </ul>
  )
}
export default CountriesList
