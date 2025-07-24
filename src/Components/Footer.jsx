import React from 'react'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import logo from '../assets/logo1.png'
import img4 from '../assets/img4.png'
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'

export const Footer = () => {
    return (
        <div className='container mx-auto py-8'>
            <div className='flex bg-[#FBFBFB] items-center justify-between p-8'>
                <div>
                    <img src={img2} alt="" />
                    <h3 className='text-[17px] text-[#3D3D3D] font-bold'>Garden Care</h3>
                    <p className='text=[14px] text-[#727272] w-[204px]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <h3 className='text-[17px] text-[#3D3D3D] font-bold'>Plant Renovation</h3>
                    <p className='text=[14px] text-[#727272] w-[204px]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <h3 className='text-[17px] text-[#3D3D3D] font-bold'>Watering Graden</h3>
                    <p className='text=[14px] text-[#727272] w-[204px]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <h3 className='text-[17px] text-[#3D3D3D] font-bold'>Would you like to join newsletters?</h3>
                    <div>
                        <input type="text" placeholder='enter your email address...' className='w-[354px] h-[40px] bg-[#FFFFFF] rounded-[6px] indent-[10px] rounded-l-md shadow' name="" id="" />
                        <button className='w-[85px] h-[40px] bg-[#46A358] rounded-r-md  text-[#FFFFFF] text-[18px]'>Join</button>
                    </div>
                    <p className='text=[14px] text-[#727272] w-[354px]'>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
                </div>
            </div>
            <div className='bg-[#46A3581A] flex items-center justify-between p-8'>
                <img src={logo} alt="" />
                <p className='text-[14px] text-[#3D3D3D] w-[176px]'>70 West Buckingham Ave.
                    Farmingdale, NY 11735</p>
                <p className='text-[14px] text-[#3D3D3D]'>contact@greenshop.com</p>
                <p className='text-[14px] text-[#3D3D3D]'>+88 01911 717 490</p>
            </div>
            <div className='bg-[#FBFBFB] flex items-center justify-between p-8'>
            <div className='flex flex-col gap-2'>
                    <h3 className='text-[17px] text-[#3D3D3D] font-bold'>My Account</h3>
                    <ul className='flex flex-col gap-2'>
                        <li className='text-[14px] text-[#3D3D3D]'>My Account</li>
                        <li className='text-[14px] text-[#3D3D3D]'>Our Stores</li>
                        <li className='text-[14px] text-[#3D3D3D]'>Contact Us</li>
                        <li className='text-[14px] text-[#3D3D3D]'>Career</li>
                        <li className='text-[14px] text-[#3D3D3D]'>Specials</li>
                    </ul>
            </div>
              <div className='flex flex-col gap-2'>
                  <h3 className='text-[17px] text-[#3D3D3D] font-bold '>Help & Guide </h3>
                        <ul className='flex flex-col gap-2'>
                        <li className='text-[14px] text-[#3D3D3D]'>Help Center</li>
                        <li className='text-[14px] text-[#3D3D3D]'>How to Buy</li>
                        <li className='text-[14px] text-[#3D3D3D]'>Shipping & Delivery</li>
                        <li className='text-[14px] text-[#3D3D3D]'>Product Policy</li>
                        <li className='text-[14px] text-[#3D3D3D]'>How to Return</li>
                    </ul>
               
              </div>
              <div className='flex flex-col gap-2'>
                  <h3 className='text-[17px] text-[#3D3D3D] font-bold'>Categories  </h3>
                        <ul className='flex flex-col gap-2'>
                        <li className='text-[14px] text-[#3D3D3D]'>House Plants</li>
                        <li className='text-[14px] text-[#3D3D3D]'>Potter Plants</li>
                        <li className='text-[14px] text-[#3D3D3D]'>Seeds</li>
                        <li className='text-[14px] text-[#3D3D3D]'>Small plants</li>
                        <li className='text-[14px] text-[#3D3D3D]'>Acessories</li>
                    </ul>
              </div>
              <div className='flex flex-col gap-4'>
               <div className='flex flex-col gap-2'>
                 <h3 className='text-[17px] text-[#3D3D3D] font-bold'>Social Media</h3>
                 <div className='flex gap-1'>
                <FacebookOutlined style={{ fontSize: '30px', color: '#46A35899' }} />
                <InstagramOutlined style={{ fontSize: '30px', color: '#46A35899' }}  />
                <TwitterOutlined style={{ fontSize: '30px', color: '#46A35899' }}  />
                <LinkedinOutlined style={{ fontSize: '30px', color: '#46A35899' }} />
                <YoutubeOutlined style={{ fontSize: '30px', color: '#46A35899' }} />
                </div>
               </div>
                <h3 className='text-[17px] text-[#3D3D3D] font-bold'>We accept</h3>
                <img src={img4} alt="" />
                </div>
            </div>
        </div>
    )
}
