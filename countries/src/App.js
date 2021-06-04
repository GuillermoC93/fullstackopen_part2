import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'

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
