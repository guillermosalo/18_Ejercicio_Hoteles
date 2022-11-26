import React from 'react'
import { useParams } from 'react-router-dom'

const HotelCard = ({item}) => {
    const params = useParams()
    let hotelCard = item => item.id === params.id
    console.log(params);
  return (
    <>
    <h1>HotelCard</h1>
    <h3>{hotelCard.name}</h3>
    </>
  )
}

export default HotelCard