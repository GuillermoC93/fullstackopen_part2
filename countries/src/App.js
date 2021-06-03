import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SingleCountry = ({ filtered }) => {
  return (
    <div>
      {filtered.map(country =>
        <div key={country.name}>
          <h2>{country.name}</h2>
          <div>capital {country.capital}</div>
          <div>population {country.population}</div>
          <h2>languages</h2>
          <ul>
            {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
          </ul>
          <img src={country.flag} width="100" alt="flag"></img>
        </div>
      )}
    </div>
  )
}

const Search = (props) => {
  const handleDisplay = () => {
    if (props.filtered.length === 1) {
      return (
        <SingleCountry filtered={props.filtered} />
      )
    } else {
      return (
        <ul>
          {props.filtered.map(country => <li key={country.name}>{country.name}</li>)}
        </ul>
      )
    }
  }

  return (
    <form>
      <div>
        find countries:
        <input
          value={props.filter}
          onChange={props.handleFilterChange}
        />
        <div>
          {handleDisplay()}
        </div>
      </div>
    </form>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [filtered, setFiltered] = useState([])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)

    if (event.target.value === '') {
      setFiltered([])
      return
    }
    
    const copy = [...countries]
    setFiltered(copy.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <Search filter={filter} filtered={filtered} handleFilterChange={handleFilterChange}/>
    </div>
  );
}

export default App;
