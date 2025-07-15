import React from 'react'
import logo from '../assets/logo.png'
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Button } from 'antd'
export const Header = () => {
  return (
    <header className='py-6'>
        <div className='container flex items-center justify-between mx-auto'>
            <img src={logo} alt="" />
            <nav className='flex gap-4'>
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">Plant Care</a>
                <a href="#">Blogs</a>
            </nav>
            <div className='flex gap-5'>
                <SearchOutlined />
                <ShoppingCartOutlined />
                <Button className='!bg-[#46A358]' type="primary">Login</Button>
            </div>
        </div>
    </header>
  )
}
