const CountriesList = ({ countries }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {countries.map((country) => (
        <div key={country.cca3}>{country.name.common}</div>
      ))}
    </ul>
  )
}
export default CountriesList
