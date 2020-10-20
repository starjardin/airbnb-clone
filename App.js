import React, { useState, useEffect } from 'react'
import stays from './stays.json'
import CardComponent from './components/CardComponent'
import HeaderComponent from './components/HeaderComponent'
import FormComponent from './components/FormComponent'
import LogoComponent from './components/LogoComponent'
import randomId from "random-id"

export default function App () {
  const [towns, setTowns] = useState(stays)
  function handeChange (e) {
    setTowns(stays.filter(town => {
      return town.city.toLocaleLowerCase() === e.target.value
    }))
  }

  const [adultGuests, setAdultGuests] = useState(0)
  const [childrenGuests, setChildrenGuests] = useState(0)
  function decrement () {
    setAdultGuests(prev => prev - 1 )
  }

  function increment () {
    setChildrenGuests(prev => prev + 1 )
  }
  const guests = adultGuests + childrenGuests;
  const maxGuests = towns.filter(town => {
    return town.maxGuests > guests
  })
  return (
    <>
      <div className="form--header">
        <LogoComponent />
        <FormComponent 
          stays={stays} 
          handeChange={handeChange}
          increment={increment}
          decrement={decrement}
          adult={adultGuests}
          children={childrenGuests}
        />
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

