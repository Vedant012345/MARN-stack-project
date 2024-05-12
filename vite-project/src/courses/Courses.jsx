import React from 'react'
import Navbar from '../componats/Navbar'
import Foterside from '../componats/Foterside'
import Course from '../componats/Course'

function Courses() {
  return (
   <>
   <Navbar/>
   <div className='min-h-screen'>
   <Course />
   </div>
   
   <Foterside/>
   </>
  )
}

export default Courses
