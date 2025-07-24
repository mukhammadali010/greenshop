import React from 'react';
import { Button, Carousel } from 'antd';
import img1 from '../assets/01.png'
const contentStyle = {
  height: '560px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#eee',
};
const CarouselComponent = () => (

  <div className='container mx-auto'>
    <Carousel autoplay>  
      <div className='!flex !items-center !justify-between' >
        <div className=' w-1/2'>
          <h1>Let’s Make a
            Better Planet</h1>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
          <Button className='!bg-[#46A358]' type="primary">Primary Button</Button>
        </div>
        <img src={img1} alt="" />

      </div>
      <div className='!flex !items-center !justify-between'>
        <div className=' w-1/2'>
          <h1>Let’s Make a
            Better Planet</h1>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
          <Button className='!bg-[#46A358]' type="primary">Primary Button</Button>
        </div>
        <img src={img1} alt="" />

      </div>
      <div className='!flex !items-center !justify-between'>
        <div className=' w-1/2'>
          <h1>Let’s Make a
            Better Planet</h1>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
          <Button className='!bg-[#46A358]' type="primary">Primary Button</Button>
        </div>
        <img src={img1} alt="" />

      </div>
      <div className='!flex !items-center !justify-between'>
        <div className=' w-1/2'>
          <h1>Let’s Make a
            Better Planet</h1>
          <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
          <Button className='!bg-[#46A358]' type="primary">Primary Button</Button>
        </div>
        <img src={img1} alt="" />

      </div>
    </Carousel>
  </div>
);
export default CarouselComponent;