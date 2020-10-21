import React from 'react'
import SearchComponent from './SearchComponent'


export default function FormComponent (props) {
  return (
      <fieldset className="fieldset">
        <p>Helsinki, finland</p>
        <button type="button" className="btn add">Add guests</button>
        <div className="formSearch">
          <label className="fa fa-search" htmlFor="search"></label>
          <input className="open" type="checkbox" id="search"/>
          <SearchComponent 
            handeChange={props.handeChange}
            adultDecrement={props.adultDecrement}
            adultIncrement={props.adultIncrement}
            childrenDecrement={props.childrenDecrement}
            childrenIncrement={props.childrenIncrement}
            adult={props.adult}
            children={props.children}
          />
        </div>
      </fieldset>
  )
}

