import React from 'react'

export default function CardComponent ({
  beds,
  city,
  maxGuests,
  photo,
  rating,
  title,
  type,
  country,
  superHost,
}) {
  console.log(city);
  return (
    <div className="card--city">
      <h2>{city}</h2>
    </div>
  )
}