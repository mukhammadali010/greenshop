import './App.css'
import { Button, Input, Modal } from 'antd'
import { Header } from './Components/Header'
import CarouselComponent from './Components/Carousel'
import { Category } from './Components/Category'
import { Footer } from './Components/Footer'
import { Flowers } from './Components/Flowers'
import { Product } from './Components/Product'

function App() {


  return (

    <>
     <Header/>
     <CarouselComponent/>
      <Category/>
     <Flowers/>
     <Footer/>
     <Product/>
    </>
  )
}

export default App
