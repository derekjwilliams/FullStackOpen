const Languages = ({ languages }) => {
  return (
    <div>
      <h2>languages:</h2>
      <ul>
        {Object.entries(languages).map(([code, full], i) => (
          <li key={code}>{full}</li>
        ))}
      </ul>
    </div>
  )
}

export default Languages
