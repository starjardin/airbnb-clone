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
  const [adultGuests, setAdultGuests] = useState(0)
  const [childrenGuests, setChildrenGuests] = useState(0)
  const [cities, setCities] = useState([])
  const [value, setValue] = useState('')
  const [optionIsopen, setOptionIsopen] = useState(false)

  const guests = adultGuests + childrenGuests
  const maxGuests = towns.filter(town => {
    return town.maxGuests >= guests
  })

  function handleOpen () {
    setIsOpen(prev => !prev)
  }

  function menuOpen () {
    handleOpen()
    setOptionIsopen(true)
  }

  const styleIsOpen = {
    backgroundColor : "#ccc",
    height : "100vh"
  }
  const styleIsClosed = {
    backgroundColor : "#FFF"
  }

  function handleSubmit (e) {
    e.preventDefault()
    const name = e.target.search.value
    setTowns(stays.filter(town => {
      return town.city.toLocaleLowerCase() === name.toLocaleLowerCase()
    }))
    setChildrenGuests(childrenGuests)
    setAdultGuests(adultGuests)
    handleOpen()
  }
  return (
    <>
      <div className="form--header">
        <LogoComponent />
        {/* These three following buttons buttons for handling the opning the popup */}
        <div className="button--container">
          <button 
            className="click" onClick={menuOpen}>{value !== "" && `${value} ,`} Finland</button>
          <button 
            type="button" className="btn add click" onClick={handleOpen}>
            {guests == 0 ? "Add Guests" : `${guests} guests`}
          </button>
          <button  
            className="fa fa-search click" htmlFor="search"></button>
        </div>
          {/* When the state isOpen is open, show this element otherwise do not do anything with it*/}
        {isOpen && <FormComponent
          handleOpen={handleOpen}
          stays={stays}
          adultGuests={adultGuests}
          setAdultGuests={setAdultGuests}
          childrenGuests={childrenGuests}
          setChildrenGuests={setChildrenGuests}
          adult={adultGuests}
          children={childrenGuests}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleSubmit={handleSubmit}
          cities={cities}
          setCities={setCities}
          value={value}
          setValue={setValue}
          optionIsopen={optionIsopen}
          setOptionIsopen={setOptionIsopen}
        />}
      </div>
      <HeaderComponent staylenght={maxGuests.length} {...towns}/>
      <div className="card--container" style={isOpen ? styleIsOpen : styleIsClosed} >
        {maxGuests.map(stay => {
          return (
            <CardComponent key={randomId()} {...stay}/>
          )
        })}
      </div>
    </>
  )
}

