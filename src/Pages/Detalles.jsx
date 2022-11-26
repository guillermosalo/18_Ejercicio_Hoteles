import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import HotelCard from '../Components/HotelCard'
import hoteles from '../Components/hoteles.json'

const Detalles = ({}) => {
  return (
    <>
    <div>Detalles</div>
    <Outlet/>
    <div className='container'>
      {hoteles.map(item => <Link key={item.email} to= {item.email}><li>{item.name}</li></Link>)}
    </div>
    </>
  )
}

export default Detalles