import React, { useState } from 'react'
import ButtonAddGuests from "./ButtonAddGuests"
import randomId from 'random-id'
 
export default function SearchComponent (props) {

  const stays = props.stays.map(stay => stay.city)
  const cities = [...new Set (stays)]

  const [value, setValue] = useState('')

  function getValue (e) {
    setValue(e.target.dataset.value)
  }

  const stay = props.stays.map(stay => stay.city)

  function handleChange (e) {
    console.log(e.target.value)
    setValue(value.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
  }
  return (
    <form className="search-component" onSubmit={props.handleSubmit}>
      <fieldset>
        <label>location
          <input type='text' name="change" onChange={handleChange} name="search" value={value}/>
          {cities.map(city => {
            return <p key={randomId()} >{city}</p>
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