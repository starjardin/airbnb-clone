import React from 'react'
import SearchComponent from './SearchComponent'


export default function FormComponent () {
  return (
      <fieldset className="fieldset">
        <p>Helsinki, finland</p>
        <button type="button" className="btn add">Add guests</button>
        <div>
          <i className="fa fa-search"></i>
          <input type="checkbox"/>
          <SearchComponent />
        </div>
      </fieldset>
  )
}