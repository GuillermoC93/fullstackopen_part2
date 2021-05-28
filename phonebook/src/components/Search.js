import React from 'react'
import Person from './Person'

const Search = (props) => {
  return (
    <form>
      <div>
        filter shown with:
          <input
            value={props.filter}
            onChange={props.handleFilterChange}
          />
          <ul>
            {props.filtered.map(person => <li key={person.name}><Person name={person.name} number={person.number}/></li>)}
          </ul>
      </div>
    </form>
  )
}

export default Search