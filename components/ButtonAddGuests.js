import React, { useState, useEffect } from 'react'

export default function ButtonAddGuests () {
  const [adultGuests, setAdultGuests] = useState(0)
  function decrement () {
    setAdultGuests(prev => prev - 1 )
  }

  function increment () {
    setAdultGuests(prev => prev + 1 )
  }
  return (
    <>
      <button type="button" onClick={increment}>+</button>
      <button type="button" onClick={decrement}>-</button>
      <p>{adultGuests}</p>
    </>
  )
}