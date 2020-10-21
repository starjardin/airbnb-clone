import React from 'react'
import ButtonAddGuests from "./ButtonAddGuests"
import SearchButtonComponent from "./SearchButtonComponent"

export default function SearchComponent (props) {
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
                <button type="button" onClick={props.adultDecrement} >-</button>
                <button type="button" onClick={props.adultIncrement}>+</button>
                <p>{props.adult}</p>
              </div>
              <div>
                <p>Children</p>
                <small>Age 2 - 12</small>
                <button type="button" onClick={props.childrenDecrement} >-</button>
                <button type="button" onClick={props.childrenIncrement}>+</button>
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