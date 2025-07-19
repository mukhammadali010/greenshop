import logo from '../assets/01.png'
import logo2 from '../assets/01.png'

function Blog() {
  return (
    <>
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold mb-2">Our Blog Posts</h1>
        <p className="text-gray-600">
          We are an online plant shop offering a wide range of cheap and trendy plants.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-10">
        
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <img src={logo} alt="Cactus" className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-sm text-green-600 mb-1">September 12 | Read in 6 minutes</p>
            <h4 className="font-semibold text-lg mb-1">Cactus & Succulent Care Tips</h4>
            <p className="text-gray-600 text-sm">Cacti are succulents and are easy to care for in any home or patio.</p>
            <a href="#" className="text-green-600 mt-2 inline-block font-medium hover:underline">Read More →</a>
          </div>
        </div>

        
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <img src={logo2} alt="Succulents" className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-sm text-green-600 mb-1">September 13 | Read in 2 minutes</p>
            <h4 className="font-semibold text-lg mb-1">Top 10 Succulents for Your Home</h4>
            <p className="text-gray-600 text-sm">Perfect for hanging baskets. Needs medium to bright light.</p>
            <a href="#" className="text-green-600 mt-2 inline-block font-medium hover:underline">Read More →</a>
          </div>
        </div>

        
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <img src={logo} alt="Succulent care" className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-sm text-green-600 mb-1">September 15 | Read in 3 minutes</p>
            <h4 className="font-semibold text-lg mb-1">How to Care for Indoor Succulents</h4>
            <p className="text-gray-600 text-sm">Succulents thrive in containers and dry environments. Easy to manage!</p>
            <a href="#" className="text-green-600 mt-2 inline-block font-medium hover:underline">Read More →</a>
          </div>
        </div>

        
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <img src={logo} alt="Houseplants" className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-sm text-green-600 mb-1">September 16 | Read in 2 minutes</p>
            <h4 className="font-semibold text-lg mb-1">Best Houseplants Room By Room</h4>
            <p className="text-gray-600 text-sm">Each room has its perfect plant — find the right one for your space.</p>
            <a href="#" className="text-green-600 mt-2 inline-block font-medium hover:underline">Read More →</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;