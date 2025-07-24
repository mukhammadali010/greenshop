import { useState } from 'react';
import logo from '../assets/img.png';
import logo2 from '../assets/img2.png';
import  { FacebookOutlined, TwitterOutlined, InstagramOutlined, FileOutlined } from '@ant-design/icons';

function HomeShop() {
    const [count, setCount] = useState(0);
    const plus = () => {
        setCount(count + 1);
    };
    const minus = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>

            <div className="container mx-auto my-10 flex items-center justify-between">
                <div>
                    <h1><span className="font-bold">Home</span> / Shop</h1>
                    <div className='flex justify-center items-center my-10'>

                        <div className='mx-auto'>
                            <div className='w-[200px] h-[200px] bg-gray-200 rounded-2xl'>
                                <img src={logo2} alt="" />
                            </div>
                            <div className='w-[200px] h-[200px] bg-[#d4d0d0] rounded-2xl'>
                                <img src={logo} alt="" />
                            </div>
                            <div className='w-[200px] h-[200px] bg-[#e2e2e2] rounded-2xl'>
                                <img src={logo2} alt="" />
                            </div>
                            <div className='w-[200px] h-[200px] bg-[#d4d0d0] rounded-2xl'>
                                <img src={logo} alt="" />
                            </div>
                        </div>

                        <div>
                            <img className='w-[500px] h-[500px]' src={logo} alt="" />

                        </div>
                    </div>
                </div>
                <div className='w-[574px]'>
                    <h1 className='text-[28px] font-[700] text-[#3D3D3D]'>Barberton Daisy</h1>
                    <div className='flex justify-between items-center'>
                        <p className='text-[22px] font-bold text-[#46A358]'>$119.00</p>
                        <p className='text-[16px] text-[#3D3D3D]'>⭐️⭐️⭐️⭐️⭐️⭐️ 19 Customer Review</p>
                    </div>
                    <br />
                    <div className='h-[1px] bg-[#eeeeee]'></div>
                    <br />
                    <div>
                        <h3 className='text-[15px] font-medium text-[#3D3D3D]'>Short Description:</h3>
                        <br />
                        <p className='text-[14px] font-normal text-[#727272]'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                        <br />
                        <h3 className='text-[15px] font-medium text-[#3D3D3D]'>Size:</h3>
                        <br />
                        <div className='flex gap-2 items-center'>
                            <div className='w-[50px] h-[50px] border rounded-full flex items-center justify-center'>S</div>
                        <div className='w-[50px] h-[50px] border rounded-full flex items-center justify-center'>M</div>
                        <div className='w-[50px] h-[50px] border rounded-full flex items-center justify-center'>L</div>
                        <div className='w-[50px] h-[50px] border rounded-full flex items-center justify-center'>XL</div>
                        </div>
                        <br />
                        <div className='flex gap-5 items-center'>   
                            <button className='w-[33px] rounded-4xl h-[38px] text-2xl text-white bg-[#46A358]' onClick={minus}>-</button>
                        <h1 className='text-[28px]'>{count}</h1>
                        <button className='w-[33px] rounded-4xl h-[38px] text-2xl text-white bg-[#46A358]' onClick={plus}>+</button>
                        <button className='bg-[#46A358] text-white w-[130px] h-[40px] rounded-[6px]'>Buy NOW</button>
                        <button className='border border-[#46A358] text-[#46A358] w-[130px] h-[40px] rounded-[6px]'>Add to Cart</button>
                        <button className='border border-[#46A358] text-[#46A358] w-[40px] h-[40px] rounded-[6px]'>❤️</button>
                        </div>
                        <div className='flex flex-col gap-2 mt-5'>
                            <p className='text-[16px] font-normal text-[#727272]'>SKU: 1995751877966</p>
                            <p className='text-[16px] font-normal text-[#727272]'>Categories: Potter Plants</p>
                            <p className='text-[16px] font-normal text-[#727272]'>Tags: Home, Garden, Plants</p>
                            <p className='flex items-center gap-3 text-[16px] font-bold text-[#3D3D3D]'>Share this products:  <FacebookOutlined className='text-4xl'/> <TwitterOutlined className='text-4xl'/> <InstagramOutlined className='text-4xl'/>  <FileOutlined className='text-4xl'/> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeShop;