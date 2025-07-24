import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Shop } from './Pages/Shop'
import { Plant } from './Pages/Plant'
import { Blogs } from './Pages/Blogs'
import { Product } from './Components/Product'

export const RoutesComponent = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='home' Component={Home}/>
                <Route path='shop' Component={Shop}/>
                <Route path='plant' Component={Plant}/>
                <Route path='blog' Component={Blogs}/>
                <Route path='product' Component={Product}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
