import { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './components/Weather'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => response.data)
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching countries:', error)) 
  }, [])

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  ) 

  const handleSearchChange = (event) => {setSearch(event.target.value)}
  
  return (
    <div>
      find countries <input value={search} onChange={handleSearchChange} />    
      {filteredCountries.length > 10 ? <div>Too many matches, specify another filter<br /></div> : null}
      {filteredCountries.length > 1 && filteredCountries.length <= 10 ? (
        <div>
          {filteredCountries.map(country => (
            <div key={country.name.common}>
              {country.name.common} <button onClick={() => setSearch(country.name.common)}>Show</button>
            </div>
          ))}
        </div>
      ) : null}
      {filteredCountries.length === 1 ? (
        <div>
          <h1>{filteredCountries[0].name.common}</h1>
          <div>
            Capital: {filteredCountries[0].capital}<br />
            Area: {filteredCountries[0].area}
          </div>
          <h2>Languages</h2>
          <ul>
            {Object.values(filteredCountries[0].languages).map(language => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <img src={filteredCountries[0].flags.png} alt={`Flag of ${filteredCountries[0].name.common}`} />

          <Weather capital={filteredCountries[0].capital} />
        </div>
      ) : null}
    </div>
  )
}

export default App