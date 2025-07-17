import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Button, Modal } from 'antd'
export const Header = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
          <Button className='!bg-[#46A358]' type="primary" onClick={showModal}>Login</Button>
          <Modal
            title={null}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            width={400}
            centered
          >
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <span style={{ color: '#46A358', fontWeight: 600, fontSize: 28 }}>Login</span>
              <span style={{ margin: '0 8px', color: '#000', fontWeight: 400, fontSize: 28 }}>|</span>
              <span style={{ color: '#3D3D3D', fontWeight: 400, fontSize: 28 }}>Register</span>
            </div>
            <div style={{ marginBottom: 16, color: '#3D3D3D' }}>
              Enter your username and password to login.
            </div>
            <input
              type="text"
              placeholder="com"
              style={{
                width: '100%',
                padding: 10,
                marginBottom: 12,
                borderRadius: 6,
                border: '1px solid #EAEAEA',
                background: '#F9F9F9'
              }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                width: '100%',
                padding: 10,
                marginBottom: 8,
                borderRadius: 6,
                border: '1px solid #EAEAEA',
                background: '#F9F9F9'
              }}
            />
            <div style={{ textAlign: 'right', marginBottom: 16 }}>
              <a href="#" style={{ color: '#46A358', textDecoration: 'none' }}>Forgot Password?</a>
            </div>
            <Button
              type="primary"
              style={{
                width: '100%',
                background: '#46A358',
                borderColor: '#46A358',
                height: 40,
                marginBottom: 16
              }}
            >
              Login
            </Button>
            <div style={{ textAlign: 'center', margin: '16px 0', color: '#A5A5A5' }}>
              Or login with
            </div>
            <Button
              style={{
                width: '100%',
                background: '#fff',
                borderColor: '#EAEAEA',
                color: '#727272',
                height: 40
              }}
            >
              Login with Google
            </Button>
          </Modal>
        </div>
      </div>
    </header>
  )
}
