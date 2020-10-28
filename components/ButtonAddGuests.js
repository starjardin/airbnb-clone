import React from 'react'

export default function ButtonAddGuests ({
  setAdultGuests,
  setChildrenGuests,
  isOpen,
  setIsOpen,
  handleOpen,
  adultGuests,
  ...props
  }) {

    function incrementAdult () {
      setAdultGuests(prev => prev + 1)
    }
  
  return (
    <>
      <div>
        <details>
          <summary>
            <p>Guests</p>
          </summary>
          <div>
            <div>
              <p>adult</p>
              <small>Age 13 or above</small>
              <button 
                type="button" 
                onClick={()=> {}} >-</button>
              <button 
                type="button" onClick={() => {incrementAdult}}>+</button>
              <p>{props.adult}</p>
            </div>
            <div>
              <p>Children</p>
              <small>Age 2 - 12</small>
              <button 
                type="button" onClick={() => {}} >-</button>
              <button 
                type="button" onClick={() => {}}>+</button>
              <p>{props.children}</p>
            </div>
          </div>
        </details>
      </div>
    </>
  )
}