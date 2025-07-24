import React, { useState } from 'react';
import logo from '../assets/logo1.png'
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Modal, Form, Input, notification } from 'antd';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    const { username, password } = values;

    if (username === 'admin' && password === '1234') {
      notification.success({
        message: 'Login Successful',
      });
      setIsModalOpen(false);
    } else {
      notification.error({
        message: 'Login Failed',
        description: 'Incorrect username or password.',
      });
    }
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
          <Button
            className='!bg-[#46A358]'
            type="primary"
            onClick={showModal}
          >
            Login
          </Button>
        </div>
      </div>

      <Modal
        title="Login"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form>
      </Modal>
    </header>
  );
};
