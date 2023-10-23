const CountriesList = ({ countries }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {countries.map((country) => (
        <li key={country.cca3}>{country.name.common}</li>
      ))}
    </ul>
  )
}
export default CountriesList
