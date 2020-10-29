import React from 'react'
import SearchComponent from './SearchComponent'


export default function FormComponent (props) {

  return (
      <fieldset className="fieldset">      
        <div className="formSearch">
          <SearchComponent
            handleOpen={props.handleOpen} 
            adultGuests={props.adultGuests}
            setAdultGuests={props.setAdultGuests}
            childrenGuests={props.childrenGuests}
            setChildrenGuests={props.setChildrenGuests}
            adult={props.adult}
            children={props.children}
            isOpen={props.isOpen}
            setIsOpen={props.setIsOpen}
            handleSubmit={props.handleSubmit}
            stays={props.stays}
            cities={props.cities}
            setCities={props.setCities}
            value={props.value}
            setValue={props.setValue}
          />
        </div>
      </fieldset>
  )
}

