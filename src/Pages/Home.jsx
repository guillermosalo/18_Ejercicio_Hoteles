import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>Bienvenidos al Home de Hoteles</div>
    <Outlet/>
    {/* Outlet va en el padre de las rutas anidadas, en este caso /Detalles */}
    </>
  )
}

export default Home