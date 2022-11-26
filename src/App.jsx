import './App.css'
import {Route, Routes} from 'react-router-dom'
import {routes} from './routes'
import Home from './Pages/Home'
import Detalles from './Pages/Detalles'
import NotFound from './Pages/NotFound'
import HotelCard from './Components/HotelCard'
import { useState } from 'react'



function App() {
 const [item, setItem] = useState([])

  return (
    <Routes>
      <Route path= {routes.home} element= {<Home/>}/>
      <Route path= {routes.detalles} element= {<Detalles item= {item}/>}>
        <Route path ='/Detalles/:id' element= {<HotelCard item= {item}/>}/>
      </Route>
      <Route path= {routes.notfound} element= {<NotFound/>}/>
    </Routes>


  )
}

export default App
