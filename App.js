import React from 'react'
import stays from './stays.json'
import CardComponent from './components/CardComponent'

//what do I do here ?
//import my element
//

export default function App () {
  
  return (
    <>
      {stays.map(stay => {
        return <CardComponent key={stay.id} {...stay}/>
      })}
    </>
  )
}

