import React from 'react';
import pic from '../assets/pic.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'

export const Product = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-8 flex'>
        <div> 
            <h2 className='text-[17px] text-[#3D3D3D] font-bold'>Home / Shop / Checkout</h2> 
      <h2 className='text-[17px] text-[#3D3D3D] font-bold'>Billing Address</h2>
      <div className='flex gap-4'>
        <div className='flex flex-col w-[350px]'>
          <h3 className='text-[15px] text-[#3D3D3D] mb-1'>First Name</h3>
          <input type="text" className='h-[40px] rounded-[3px] border border-gray-300 outline-none indent-3' />
        </div>
        <div className='flex flex-col w-[350px]'>
          <h3 className='text-[15px] text-[#3D3D3D] mb-1'>Last Name</h3>
          <input type="text" className='h-[40px] rounded-[3px] border border-gray-300 outline-none indent-3' />
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='flex flex-col w-[350px]'>
          <h3 className='text-[15px] text-[#3D3D3D] mb-1'>Country / Region</h3>
          <select
            className='h-[40px] rounded-[3px] border border-gray-300 outline-none indent-3 text-[14px] text-[#A5A5A5]'
            defaultValue=""
          >
            <option value="" disabled hidden>
              Select a country / region
            </option>
            <option value="uz" className="text-black">Uzbekistan</option>
            <option value="us" className="text-black">United States</option>
            <option value="uk" className="text-black">United Kingdom</option>
          </select>
        </div>
        <div className='flex flex-col w-[350px]'>
          <h3 className='text-[15px] text-[#3D3D3D] mb-1'>Town / City</h3>
          <input type="text" className='h-[40px] rounded-[3px] border border-gray-300 outline-none indent-3' />
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='flex flex-col w-[350px]'>
          <h3 className='text-[15px] text-[#3D3D3D] mb-1'>Street Address</h3>
          <input
            type="text"
            placeholder="Street name and house number"
            className='h-[40px] mb-2 rounded-[3px] border border-gray-300 outline-none indent-3'
          />
        </div>
        <div className='flex flex-col w-[350px] mt-[24px]'>
          <input
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            className='h-[40px] rounded-[3px] border border-gray-300 outline-none indent-3'
          />
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='flex flex-col w-[350px]'>
          <h3 className='text-[15px] text-[#3D3D3D] mb-1'>State</h3>
          <select
            className='h-[40px] rounded-[3px] border border-gray-300 outline-none indent-3 text-[14px] text-[#A5A5A5]'
            defaultValue=""
          >
            <option value="" disabled hidden>
              Select State
            </option>
            <option value="tashkent" className="text-black">Tashkent</option>
            <option value="samarkand" className="text-black">Samarkand</option>
          </select>
        </div>
        <div className='flex flex-col w-[350px]'>
          <h3 className='text-[15px] text-[#3D3D3D] mb-1'>Zip</h3>
          <input type="text" className='h-[40px] rounded-[3px] border border-gray-300 outline-none indent-3' />
        </div>
      </div>

      <div className='flex gap-4'>
        <div className='flex flex-col w-[350px]'>
          <h3 className='text-[15px] text-[#3D3D3D] mb-1'>Email Address</h3>
          <input type="email" className='h-[40px] rounded-[3px] border border-gray-300 outline-none indent-3' />
        </div>
        <div className='flex flex-col w-[350px]'>
          <h3 className='text-[15px] text-[#3D3D3D] mb-1'>Phone Number</h3>
          <select
            className='h-[40px] rounded-[3px] border border-gray-300 outline-none indent-3 text-[14px] text-[#A5A5A5]'
            defaultValue="+966"
          >
            <option value="+966" className="text-black">
              +966
            </option>
            <option value="+998" className="text-black">
              +998 (Uzbekistan)
            </option>
            <option value="+1" className="text-black">
              +1 (USA)
            </option>
            <option value="+44" className="text-black">
              +44 (UK)
            </option>
          </select>
        </div>
      </div>

      <label className='text-[17px] text-[#3D3D3D] font-bold flex items-center gap-2'>
        <input
          type="checkbox"
          className='appearance-none w-[15px] h-[15px] rounded-full border-2 border-[#46A358] checked:bg-[#46A358]'
        />
        Ship to a different address?
      </label>

      <div className='flex flex-col w-[350px]'>
        <h3 className='text-[15px] text-[#3D3D3D] mb-1'>Order notes (optional)</h3>
        <textarea className='h-[152px] rounded-[3px] border border-gray-300 outline-none indent-3'></textarea>
      </div>
        </div>
        <div>
            <h2 className='text-[#3D3D3D] text-[17px] font-bold'>Your Order</h2>
            <div className='flex justify-between'>
                <h4 className='text-[#3D3D3D] text-[16px] font-bold'>Products</h4>
                <h4 className='text-[#3D3D3D] text-[16px] font-bold'>Subtotal</h4>
            </div>
            <hr className='w-[405px] text-[#AEAEAE]'/>
            <div className='flex items-center bg-[#FBFBFB] w-[405px] h-[70px]'>
                <img src={pic} alt="" />
                <div>
                    <h4 className='text-[#3D3D3D] text-[16px] font-bold'>Barberton Daisy</h4>
                <h1 className='text-[14px] text-[#727272]'>SKU: 1995751877966</h1>
                </div>
                <span className='text-[18px] text-[#46A358]'>$238.00</span>
            </div>

             <div className='flex items-center bg-[#FBFBFB] w-[405px] h-[70px]'>
                <img src={pic2} alt="" />
                <div>
                    <h4 className='text-[#3D3D3D] text-[16px] font-bold'>Blushing Bromeliad</h4>
                <h1 className='text-[14px] text-[#727272]'>SKU: 19957518757065</h1>
                </div>
                <span className='text-[18px] text-[#46A358]'>$834.00</span>
            </div>

             <div className='flex items-center bg-[#FBFBFB] w-[405px] h-[70px]'>
                <img src={pic3} alt="" />
                <div>
                    <h4 className='text-[#3D3D3D] text-[16px] font-bold'>Aluminum Plant</h4>
                <h1 className='text-[14px] text-[#727272]'>SKU: 1995751877786</h1>
                </div>
                <span className='text-[18px] text-[#46A358]'>$1,611.00</span>
            </div>
        </div>
    </div>
  );
};



