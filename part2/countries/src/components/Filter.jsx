const Filter = ({ countryFilter, countryFilterChange }) => {
  return (
    <div>
      find countries:{' '}
      <input value={countryFilter} onChange={countryFilterChange} />
    </div>
  )
}

export default Filter
