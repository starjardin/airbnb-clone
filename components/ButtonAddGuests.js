import React, { useState, useEffect } from 'react'

export default function ButtonAddGuests (props) {
  return (
    <>
      <button type="button" onClick={props.increment}>+</button>
      <button type="button" onClick={props.decrement}>-</button>
      <p>{}</p>
    </>
  )
}