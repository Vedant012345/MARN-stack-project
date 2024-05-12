import React from 'react'
import banner2 from '../../public/banner2.png'

function Homebaner() {
  return (<>
    <div className='container mx-auto px-4 md:px-20 py-5 px-4 flex md:flex-row flex-col my-10'>
      <div className='md:w-1/2 w-full order-2 md:order-1 mt-32'>
        <div className='space-y-10'>
        <h1 className='text-xl font-bold'>Hello, Wellcome hear to lern something {" "}<span className='text-pink-500'>new Everyday!!!</span></h1>
        <p className='text-lg'>Certainly! How about this passage: "In the heart of every book lover lies a sanctuary, 
a place where the imagination unfurls its wings and soars to distant lands, where words dance upon the pages, 
weaving tales of wonder and wisdom. Welcome to our book emporium, where shelves bow beneath the weight of countless s
tories waiting to be discovered. Here, within these walls, time slows and souls find solace in the companionship of 
bound pages. Step inside, and let the journey begin."</p>
<label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>

<input type="submit" value="Submit" className="btn bg-blue-400 text-black-500" />

</div>
      </div>
      <div className='md:w-1/2 w-full  w-97 h-97 order-1'><img src={banner2} alt="banner" /></div>
      
      </div>
    
    </>
  )
}

export default Homebaner
