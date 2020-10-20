import React from 'react'

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
      </fieldset>
    </form>
  )
}