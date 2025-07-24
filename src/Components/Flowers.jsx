import React from 'react'
import cactus from '../assets/cactus.png'
import trends from '../assets/trends.png'
import { ArrowRightOutlined } from '@ant-design/icons'
export const Flowers = () => {
  return (
    <div className="container flex items-center justify-center mx-auto">
        <div className="cactus flex items-center justify-between p-[30px] ">
           <img src={cactus} alt="" /> 
           <div className="name flex items-start  justify-center flex-col gap-4">
            <h2 className='text-[#3D3D3D] w-[150px] font-black text-[18px]'>Summer cactus & succulents</h2>
            <p className='text-[#727272] min-w-[292px]'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
            <button className='w-[140px] h-[40px] !bg-[#46A358] text-white  rounded-[8px] mt-3'>Find more <ArrowRightOutlined /></button>
           </div>
        </div>
        <div className="trends flex items-center justify-between p-[30px]">
        <img src={trends} alt="" /> 
           <div className="name flex items-start justify-center flex-col gap-2">
            <h2 className='text-[#3D3D3D] font-black text-[18px] w-[150px]'>Styling Trends & much more</h2>
            <p className='text-[#727272]'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
            <button className='w-[140px] h-[40px] !bg-[#46A358] text-white  rounded-[8px] mt-3'>Find more <ArrowRightOutlined /></button>
           </div>
        </div>
    </div>
  )
}
