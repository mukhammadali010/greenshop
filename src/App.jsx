import './App.css'
import { Header } from './Components/Header'
import CarouselComponent from './Components/Carousel'
import Products from './Components/Products'


import { Footer } from './Components/Footer'
import { RoutesComponent } from './RoutesComponent'
import { Outlet } from 'react-router-dom'
function App() {


  return (

    <>
     <Header/>
     <CarouselComponent/>
     <Products/>
    </>
  )
}

export default App
