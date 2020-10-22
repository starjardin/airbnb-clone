import React, { useState, useEffect } from 'react'
import stays from './stays.json'
import CardComponent from './components/CardComponent'
import HeaderComponent from './components/HeaderComponent'
import FormComponent from './components/FormComponent'
import LogoComponent from './components/LogoComponent'
import randomId from "random-id"

export default function App () {
  const [towns, setTowns] = useState(stays)
  const [isOpen, setIsOpen] = useState(false)
  function handeChange (e) {
    setTowns(stays.filter(town => {
      return town.city.toLocaleLowerCase() === e.target.value
    }))
  }

  const [adultGuests, setAdultGuests] = useState(0)
  const [childrenGuests, setChildrenGuests] = useState(0)
  
  function adultDecrement () {
    setAdultGuests(prev => {
      if (prev > 0) {
        return prev - 1
      } else {
        return prev = 0
      }
    })
  }

  function adultIncrement () {
    setAdultGuests(prev => prev + 1 )
  }

  function childrenDecrement () {
    setChildrenGuests(prev => {
      if (prev > 0) {
        return prev -1
    } else {
      return prev = 0
    }
  })
}

  function childrenIncrement () {
    setChildrenGuests(prev => prev + 1 )
  }
  const guests = adultGuests + childrenGuests;
  const maxGuests = towns.filter(town => {
    return town.maxGuests >= guests
  })

  function handleOpen () {
    setIsOpen(prev => !prev)
  }

  console.log(isOpen);

  return (
    <>
      <div className="form--header">
        <LogoComponent />
        {/* These three following buttons buttons for handling the opning the popup */}
        <div className="button--container">
          <button 
            className="click" onClick={handleOpen}>Helsinki, finland</button>
          <button 
            type="button" className="btn add click" onClick={handleOpen}>Add guests</button>
          <button  
            className="fa fa-search click" htmlFor="search" onClick={handleOpen}></button>
        </div>
          {/* When the state isOpen is open, show this element otherwise do not do anything with it*/}
        {isOpen && <FormComponent
          handleOpen={handleOpen}
          stays={stays} 
          handeChange={handeChange}
          adultDecrement={adultDecrement}
          adultIncrement={adultIncrement}
          childrenDecrement={childrenDecrement}
          childrenIncrement={childrenIncrement}
          adult={adultGuests}
          children={childrenGuests}
        />}
      </div>
      <div className="card--container">
        {maxGuests.map(stay => {
          return (
            <CardComponent key={randomId()} {...stay}/>
          )
        })}
      </div>
      <HeaderComponent staylenght={maxGuests.length} {...towns}/>
    </>
  )
}

