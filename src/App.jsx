import './App.css'
import { Button, Input, Modal } from 'antd'
import { Header } from './Components/Header'
import CarouselComponent from './Components/Carousel'
import Products from './Components/Products'


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
