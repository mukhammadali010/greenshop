import { Button, Progress } from 'antd';
import logo from '../assets/super.png'
import img from '../assets/img.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img7 from '../assets/img7.png'
import igm4 from '../assets/igm4.png'
import igm5 from '../assets/igm5.png'
import igm6 from '../assets/igm6.png'
import img013 from '../assets/01 3.png'


export const Category = () => {
    const categories = [
        { name: "House Plants", count: 33, active: true },
        { name: "Potter Plants", count: 12 },
        { name: "Seeds", count: 65 },
        { name: "Small Plants", count: 39 },
        { name: "Big Plants", count: 23 },
        { name: "Succulents", count: 17 },
        { name: "Terrariums", count: 19 },
        { name: "Gardening", count: 13 },
        { name: "Accessories", count: 18 },
      ];

      const sizes = [
        { name: "Small", count: 119 },
        { name: "Medium", count: 86 },
        { name: "Large", count: 78 }
      ];
      
      const products = [
        { name: "Barberton Daisy", price: 119.00, img: img },
        { name: "Angel Wing Begonia", price: 169.00, img: img1 },
        { name: "African Violet", price: 199.00, oldPrice: 229.00, discount: "13% OFF", img: img2 },
        { name: "Beach Spider Lily", price: 129.00, img: img3 },
        { name: "Blushing Bromeliad", price: 139.00, img: img7 },
        { name: "Aluminum Plant", price: 179.00, img: igm4 },
        { name: "Bird’s Nest Fern", price: 99.00, img: igm5 },
        { name: "Broadleaf Lady Palm", price: 59.00, img: igm6 },
        { name: "Chinese Evergreen", price: 39.00, img: img013 }
      ];
      
  return (
    <div className="container gap-38 p-[60px] flex items-center justify-between">
      <div>
        <div className="w-[310px] h-[974px] bg-[#FBFBFB] p-5">
        <h1 className='text-2xl font-bold'>Category</h1>
        {
            categories.map((category) => (
                <div className="flex items-center justify-between mt-7" key={category.name}>
                    <h2 className='text-lg'>{category.name}</h2>
                    <p className='text-lg'>{category.count}</p>
                </div>
            ))
        }
        <p className='text-lg font-bold mt-6'>Price Range</p>
        <Progress percent={50} showInfo={false} />
        <p>Price: $39 - $1230</p>
        <Button  className='!bg-[#46A358] !border-[#46A358] !text-white !px-6 !h-10 !rounded-md hover:!bg-[#3d8a4a] transition-colors' type="primary"  >Filter</Button>
        <p className='text-lg font-bold mt-6'>Sizes</p>
        {
            sizes.map((size) => (
                <div className="flex items-center justify-between mt-7" key={size.name}>
                    <h2 className='text-lg'>{size.name}</h2>
                    <p className='text-lg'>{size.count}</p>
                </div>
            ))
        }
      </div>
      <img src={logo} alt="" className='w-[310px]' />
      </div>
      <div className='flex items-center justify-between flex-col'>
      <div className="flex items-center justify-between gap-120">
        <div className="flex gap-8">
          <button className="text-[#46A358] font-bold border-b-2 border-[#46A358] pb-2">All Plants</button>
          <button className="text-[#3D3D3D] font-medium  transition-colors">New Arrivals</button>
          <button className="text-[#3D3D3D] font-medium transition-colors">Sale</button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">Short by:</span>
          <select className="border rounded px-2 py-1 text-sm">
            <option>Default sorting</option>
          </select>
        </div>
      </div>
        
      <div className="flex flex-wrap gap-6">
        {
            products.map((product) => (
                <div className="mt-11 flex flex-col items-center w-[300px] h-[400px] bg-white rounded-lg shadow p-4" key={product.name}>
                    <img src={product.img} alt="" className='w-[100%]' />
                    <div>
                    <h2 className="mt-2 font-semibold">{product.name}</h2>
                    <p className='text-lg text-green-700'>${product.price}</p>
                    </div>
                    
                </div>
            ))
        }
      </div>
      </div>
    </div>
  )
}