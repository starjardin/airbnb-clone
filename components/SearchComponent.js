import React from 'react'
import ButtonAddGuests from "./ButtonAddGuests"
import SearchButtonComponent from "./SearchButtonComponent"

export default function SearchComponent (props) {
  console.log(props);
  return (
    <form className="search-component">
      <fieldset>
        <label>location
          <select onChange={props.handeChange}>
            <option value="">----Chose a town---</option>
            <option value="helsinki">Helsinki, Finland</option>
            <option value="turku">Turku, Finland</option>
            <option value="oulu">Oulu, Finland</option>
            <option value="vaasa">Vaasa, Finland</option>
          </select>
        </label>
        <div>
          <details>
            <summary>HelloHelloHelloHello</summary>
            <div>
              <div>
                <p>adult</p>
                <small>Age 13 or above</small>
                <ButtonAddGuests 
                  increment={props.increment}
                  decrement={props.decrement}
                />
                <p>{props.adult}</p>
                {console.log(props.adult)}
              </div>
              <div>
                <p>Children</p>
                <small>Age 2 - 12</small>
                <ButtonAddGuests 
                  increment={props.increment}
                  decrement={props.decrement}
                />
                <p>{props.children}</p>
              </div>
            </div>
          </details>
        </div>
        <div>
          <SearchButtonComponent />
        </div>
      </fieldset>
    </form>
  )
}