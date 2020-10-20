import React from 'react'
import stays from './stays.json'
import CardComponent from './components/CardComponent'
import HeaderComponent from './components/HeaderComponent'
import FormComponent from './components/FormComponent'
import LogoComponent from './components/LogoComponent'
import randomId from "random-id"

//what do I do here ?
//import my element
//

export default function App () {
  let staylenght = stays.length;
  return (
    <>
    <div className="form--header">
      <LogoComponent />
      <FormComponent />
    </div>
      <HeaderComponent staylenght={staylenght} {...stays}/>
      <div className="card--container">
        {stays.map(stay => {
          return (
            <CardComponent key={randomId()} {...stay}/>
          )
        })}
      </div>
    </>
  )
}

