import './App.css'
import { Button, Input, Modal } from 'antd'
import { Header } from './Components/Header'
import CarouselComponent from './Components/Carousel'
import { Category } from './Components/Category'

function App() {


  return (

    <>
     <Header/>
     <CarouselComponent/>
     <Flowers/>
     <Category/>
    </>
  )
}

export default App
