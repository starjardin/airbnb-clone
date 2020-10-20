import React from 'react'
import SearchComponent from './SearchComponent'


export default function FormComponent (props) {
  return (
      <fieldset className="fieldset">
        <p>Helsinki, finland</p>
        <button type="button" className="btn add">Add guests</button>
        <div>
          <i className="fa fa-search"></i>
          <input className="open" type="checkbox"/>
          <SearchComponent 
            handeChange={props.handeChange}
            increment={props.increment}
            decrement={props.decrement}
            adult={props.adult}
            children={props. children}
          />
        </div>
      </fieldset>
  )
}