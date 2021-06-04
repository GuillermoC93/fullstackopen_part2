import React from 'react'
import SingleCountry from './SingleCountry'

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

export default Search