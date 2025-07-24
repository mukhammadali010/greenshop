import './App.css'
import { Button, Input, Modal } from 'antd'
import { Header } from './Components/Header'
import CarouselComponent from './Components/Carousel'
import { Category } from './Components/Category'
import HomeShop from './Components/HomeShop'


function App() {


  return (

    <>
     <Header/>
     <CarouselComponent/>
     <Category/>
     <HomeShop/>
    </>
  )
}

export default App
