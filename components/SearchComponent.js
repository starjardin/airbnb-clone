import React, { useState, useEffect } from 'react'
import ButtonAddGuests from "./ButtonAddGuests"
import randomId from 'random-id'
 
export default function SearchComponent (props) {
  const stays = props.stays.map(stay => stay.city)
  const [cities, setCities] = useState([])
  const city = [...new Set (stays)]
  useEffect ( () => {
    setCities(city)
  }, [])
  const [value, setValue] = useState('')
  function getValue (e) {
    if (!value) {
      return setValue(e.target.dataset.value)
    }
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
              <p className="paragraph"
                key={randomId()} 
                data-value={city} 
                onClick={getValue} >{city}
              </p>)
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