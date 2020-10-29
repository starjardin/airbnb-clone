import React from 'react'

export default function ButtonAddGuests ({
  setAdultGuests,
  isOpen,
  setChildrenGuests,
  childrenGuests,
  setIsOpen,
  handleOpen,
  adultGuests,
  optionIsopen,
  setOptionIsopen,
  ...props
  }) {

    function incrementAdult () {
      setAdultGuests(prev => prev + 1)
    }

    function decrementAdult () {
      if (props.adult <= 0) {
        setAdultGuests(0)
      } else {
        setAdultGuests(prev => prev - 1)
      }
    }

    function incrementChildren () {
      setChildrenGuests(prev => prev + 1)
    }

    function decrementChildren () {
      if (props.children <= 0) {
        setChildrenGuests(0)
      } else {
        setChildrenGuests(prev => prev - 1)
      }
    }

  return (
    <>
      <div>
        <p>adult</p>
          <div>
          <small>Age 13 or above</small>
          <button 
            type="button" 
            onClick={decrementAdult} >-</button>
          <button 
            type="button" onClick={incrementAdult}>+</button>
          <p>{props.adult}</p>
        </div>
        <div>
          <p>Children</p>
          <small>Age 2 - 12</small>
          <button 
            type="button" onClick={decrementChildren} >-</button>
          <button 
            type="button" onClick={incrementChildren}>+</button>
          <p>{props.children}</p>
        </div>
      </div>
    </>
  )
}
