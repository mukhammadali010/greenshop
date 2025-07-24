import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { NavLink } from 'react-router-dom';

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
    <header className='py-6 sticky top-0 bg-white'>
      <div className='container flex items-center justify-between mx-auto'>
        <img src={logo} alt="Logo" />

        <nav className='flex gap-4'>
          <a href="home">Home</a>
          <a href='shop'>Shop</a>
          <a href="plant">Plant Care</a>
          <a href="blog">Blogs</a>
        </nav>
        <div className='flex gap-5 items-center'>
          <SearchOutlined />
          <ShoppingCartOutlined />
          <Button
            className='!bg-[#46A358]'
            type="primary"
            onClick={showModal}
          >
            Login
          </Button>

          <Modal
            className='flex items-center justify-center'
            title="Login"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            closable={true}
          >
            <div className="bg-white p-6 rounded-lg shadow-md w-[400px]">
              <h3 className="text-2xl font-semibold text-center mb-2">
                <span className="text-[#46A358]">Login</span> Register
              </h3>
              <p className="text-sm text-center text-gray-600 mb-4">
                Enter your username and password to login.
              </p>

              <div className="flex flex-col space-y-3">
                <input
                  className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46A358]"
                  type="text"
                  placeholder="almamun_uxui@outlook.com"
                />
                <input
                  className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46A358]"
                  type="password"
                  placeholder="Enter password"
                />
              </div>

              <button className="mt-4 w-full bg-[#46A358] text-white py-2 rounded-md hover:bg-green-600 transition">
                Login
              </button>

              <p className="text-center text-sm text-gray-500 my-3">Or login with</p>

              <div className="flex flex-col space-y-2">
                <button className="w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
                  Login with Google
                </button>
                <button className="w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
                  Login with Facebook
                </button>
              </div>
            </div>


          </Modal>
        </div>
      </div>
    </header>
  );
};

