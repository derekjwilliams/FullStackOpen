import Languages from './Languages'
import Weather from './Weather'
const itemLabel = {
  paddingRight: '0.5rem',
}
const flag = {
  fontSize: '5rem',
}
const CountryInformation = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>
        <span style={itemLabel}>capital</span>
        <span>{country.capital.map((v) => v).join(', ')}</span>
      </div>
      <div>
        <span style={itemLabel}>area</span>
        <span>{country.area}</span>
      </div>
      <Languages languages={country.languages}></Languages>
      <div style={flag}>{country?.flag}</div>
      <div>
        <h2>weather: </h2>
        {country.capital.map((city) => (
          <Weather key={city} city={city} />
        ))}
      </div>
    </div>
  )
}

export default CountryInformation
