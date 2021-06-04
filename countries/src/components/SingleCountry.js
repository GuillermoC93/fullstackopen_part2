import React from 'react'

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

export default SingleCountry