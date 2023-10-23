import Languages from './Languages'
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
    </div>
  )
}

export default CountryInformation
