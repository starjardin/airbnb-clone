import React, {useState, useEffect} from 'react'
import ButtonAddGuests from "./ButtonAddGuests"

export default function SearchComponent () {
  return (
    <form className="search-component">
      <fieldset>
        <label>location</label>
        <select>
          <option value="helsinki, finland">helsinki, finland</option>
          <option value="turku,finland">turku, finland</option>
          <option value="oulu,finland">oulu, finland</option>
          <option value="voasa,finland">voasa, finland</option>
        </select>
        <input type="text"/>
        <div>
          <div>
            <p>adult</p>
            <small>Age 13 or above</small>
            <ButtonAddGuests />
          </div>
          <div>
            <p>Children</p>
            <small>Age 2 - 12</small>
            <ButtonAddGuests />
          </div>
        </div>
      </fieldset>
    </form>
  )
}