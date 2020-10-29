import React from 'react'
import SearchComponent from './SearchComponent'


export default function FormComponent (props) {

  return (
      <fieldset className="fieldset">      
        <div className="formSearch">
          <SearchComponent
            {...props}
          />
        </div>
      </fieldset>
  )
}

