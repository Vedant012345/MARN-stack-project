import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
function Course() {
  return (
    <>
    <div className='container mx-auto px-4 md:px-20 py-1 px-4 '>
        <div className='mt-28 item-center justify-center text-center'>
        <h1 className='md:text-xl font-bold'>You are deligate to have you <span className='text-pink-500'>Hear :)</span></h1>
        <p className='mt-12'>Certainly! How about this passage: "In the heart of every book lover lies a sanctuary, 
a place where the imagination unfurls its wings and soars to distant lands, where words dance upon the pages, 
weaving tales of wonder and wisdom. Welcome to our book emporium, where shelves bow beneath the weight of countless s
tories waiting to be discovered. Here, within these walls, time slows and souls find solace in the companionship of 
bound pages. Step inside, and let the journey begin."</p>
<a href="/"><button className="btn btn-success mt-10">Back</button></a>
</div>
<div className='grid grid-cols-1 md:grid-cols-4 mt-10 '>
    {
        list.map((item)=>(<Cards item={item} key={item.id}/>))
    }
</div>
        
    </div>
    </>
  )
}

export default Course
