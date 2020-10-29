import React, { useState, useEffect } from 'react'
import ButtonAddGuests from "./ButtonAddGuests"
import randomId from 'random-id'
 
export default function SearchComponent ({
  cities,
  setCities,
  optionIsopen,
  setOptionIsopen,
  value,
  setValue,
  ...props
  }) {
  const stays = props.stays.map(stay => stay.city)
  const city = [...new Set (stays)]
  useEffect ( () => {
    setCities(city)
  }, [])

  function getValue (e) {
    return setValue(e.target.dataset.value)
  }
  function handleChange (e) {
    setCities(cities.filter((item) => {
      return item.toLowerCase().includes(e.target.value)
    }))
  }

  return (
    <form className="search-component" onSubmit={props.handleSubmit}>
      <fieldset>
        <label className="loaction">location
          <input 
            autoComplete="off"
            type='text' 
            name="change" 
            onChange={handleChange} 
            name="search"
            value={value}
            onClick={() => setOptionIsopen(prev => !prev)}
          />
          <div>
            { optionIsopen && cities.map(city => {
              return (
                <button className="button-location"
                  key={randomId()} 
                  data-value={city} 
                  onClick={getValue} >{city}
                </button>)
            })}
          </div>
          
          <i className="fas fa-location"></i>
        </label>
        <ButtonAddGuests
          {...props}
          optionIsopen={optionIsopen}
          setOptionIsopen={setOptionIsopen}
        />
        <div>
        <button 
          type="submit" 
          className="fa fa-search"
          aria-label="search"
        ></button>
      </div>
      </fieldset>
    </form>
  )
}