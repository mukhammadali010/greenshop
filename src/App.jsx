import './App.css'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { RoutesComponent } from './RoutesComponent'
import { Outlet } from 'react-router-dom'
function App() {


  return (

    <>
      <Header/>
      <RoutesComponent/>
      <Footer/>
      <Outlet/>
    </>
  )
}

export default App
