import './App.css'
import { Button, Input, Modal } from 'antd'
import { Header } from './Components/Header'
import CarouselComponent from './Components/Carousel'
import { Flowers } from './Components/Flowers'
import Account from './Components/Account'


function App() {


  return (

    <>
     <Header/>
     <CarouselComponent/>
     <Flowers/>
      <Account/>
    </>
  )
}

export default App
