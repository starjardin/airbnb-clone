import React, { useState, useEffect } from 'react'
import ButtonAddGuests from "./ButtonAddGuests"
import randomId from 'random-id'
 
export default function SearchComponent ({
  cities,
  setCities,
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
          />
          {cities.map(city => {
            return (
              <button className="button-location"
                key={randomId()} 
                data-value={city} 
                onClick={getValue} >{city}
              </button>)
          })}
          
          <i className="fas fa-location"></i>
        </label>
        <ButtonAddGuests
          handleOpen={props.handleOpen}  
          adultGuests={props.adultGuests}
          setAdultGuests={props.setAdultGuests}
          childrenGuests={props.childrenGuests}
          setChildrenGuests={props.setChildrenGuests}
          adult={props.adult}
          children={props.children}
          isOpen={props.isOpen}
          setIsOpen={props.setIsOpen}
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