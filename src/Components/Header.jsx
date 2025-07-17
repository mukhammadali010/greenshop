
import logo from '../assets/logo.png'
import { EyeInvisibleOutlined, EyeTwoTone, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Button, Input, Modal, Space } from 'antd'
import { useState } from 'react';

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
    <header className='py-6 bg-white shadow-sm'>
      <div className='container flex items-center justify-between mx-auto px-4'>
        <img src={logo} alt="Greenshop Logo" className="h-8" />
        <nav className='flex gap-8'>
          <a href="#" className="text-gray-800 transition-colors">Home</a>
          <a href="#" className="text-gray-600 transition-colors">Shop</a>
          <a href="#" className="text-gray-600 transition-colors">Plant Care</a>
          <a href="#" className="text-gray-600 transition-colors">Blogs</a>
        </nav>
        <div className='flex items-center gap-6'>
          <SearchOutlined/>
            <ShoppingCartOutlined/>
            
          <Button 
            className='!bg-[#46A358] !border-[#46A358] !text-white !px-6 !h-10 !rounded-md hover:!bg-[#3d8a4a] transition-colors' 
            type="primary" 
            onClick={showModal}
          >
            Login
          </Button>
          
          <Modal
            footer={null}
            title={null}
            open={isModalOpen}
            onCancel={handleCancel}
            className="!p-0"
            bodyStyle={{ padding: 0 }}
            width={400}
            centered
          >
            <div className="p-8 flex flex-col items-center">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl font-bold text-[#46A358]">Login</h2>
                <div className="w-px h-6 bg-gray-300"></div>
                <h2 className="text-2xl font-normal text-gray-400">Register</h2>
              </div>
              
              <p className="text-gray-500 text-sm mb-6 text-center">Enter your username and password to login.</p>
              
              <div className="w-full flex flex-col gap-4 mb-2">
                <Input
                  className="!rounded-lg !h-12 !px-4 !border-gray-300 !text-gray-700 focus:!border-[#46A358] focus:!shadow-sm"
                  placeholder="almamun_uxui@outlook.com"
                />
                <Input.Password
                  className="!rounded-lg !h-12 !px-4 !border-gray-300 !text-gray-700 focus:!border-[#46A358] focus:!shadow-sm"
                  placeholder="Password"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </div>
              
              <a href="#" className="text-[#46A358] text-sm self-end mb-6 hover:underline">Forgot Password?</a>
              
              <Button 
                className="!bg-[#46A358] !w-full !h-12 !rounded-lg !text-white !font-semibold mb-6 hover:!bg-[#3d8a4a] transition-colors" 
                type="primary"
              >
                Login
              </Button>
              
              <div className="flex items-center w-full mb-6">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="mx-4 text-gray-400 text-sm">Or login with</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              
              <div className="flex flex-col gap-3 w-full">
                <Button className="!w-full !h-12 !rounded-lg !flex items-center justify-center gap-3 !border !border-gray-300 !bg-white hover:!bg-gray-50 transition-colors">
                  <span className="text-blue-600 font-bold text-lg">G</span>
                  <span className="text-gray-700">Login with Google</span>
                </Button>
                <Button className="!w-full !h-12 !rounded-lg !flex items-center justify-center gap-3 !border !border-gray-300 !bg-white hover:!bg-gray-50 transition-colors">
                  <span className="text-blue-600 font-bold text-lg">f</span>
                  <span className="text-gray-700">Login with Facebook</span>
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </header>
  )
}
