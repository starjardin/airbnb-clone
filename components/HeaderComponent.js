import React from 'react'

export default function HeaderComponent(props) {
  return (
    <>
    <div className="header">
      <h2>Stays in Finland</h2>
      <small>{props.staylenght}+ stays</small>
    </div>
    </>
  )
}