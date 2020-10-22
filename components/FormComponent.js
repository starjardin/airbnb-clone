import React from 'react'
import SearchComponent from './SearchComponent'


export default function FormComponent (props) {

  return (
      <fieldset className="fieldset">      
        <div className="formSearch">
          <SearchComponent
            handleOpen={props.handleOpen} 
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

