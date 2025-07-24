import img5 from "../assets/01.png"
import img from "../assets/image7.png"
import img2 from "../assets/image8.png"
import img3 from "../assets/image9.png"
import img4 from "../assets/image10.png"

function Hero() {


  return (

    <>
    <section>
        <div className='container pl-18 flex items-center gap-15 mx-auto'>
         
           <div className="card">
             <img src={img5} alt="" className='w-[200px] bg-[#FBFBFB]' />
            <h2>Beach Spider Lily</h2>
            <p className='text-[#46A358]'>$129.00</p>
           </div>
            <div className="card">
                <img src={img} alt=""  className='w-[200px] bg-[#FBFBFB] '/>
            <h2>Blushing Bromeliad</h2>
            <p className='text-[#46A358]'>$139.00</p>
            </div>
            <div className="card">
                <img src={img2} alt=""  className='w-[200px] bg-[#FBFBFB]'/>
            <h2>Aluminum Plant</h2>
            <p className='text-[#46A358]'>$179.00</p>
            </div>
              <div className="card">
                <img src={img3} alt=""  className='w-[200px] bg-[#FBFBFB]'/>
            <h2>Bird's Nest Fern</h2>
            <p className='text-[#46A358]'>$99.00</p>
            </div>
             <div className="card">
                <img src={img4} alt=""  className='w-[200px] bg-[#FBFBFB]'/>
            <h2>Chinese Evergreen</h2>
            <p className='text-[#46A358]'>$39.00</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero
