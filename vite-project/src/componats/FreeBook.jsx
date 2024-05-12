import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from '../../public/list.json'
import Cards from './Cards';

function FreeBook() {
    const freedata=list.filter((data)=>data.category==="Free")

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (<>
    <div className='container mx-auto px-4 md:px-20 py-5 px-4'>
        <div>
        <h1 className='text-xl font-bold my-5'>Free Offerd Course</h1>
        <p className='text-xl'>a place where the imagination unfurls its wings and soars to distant lands, where words dance upon the pages, 
           weaving tales of wonder and wisdom.</p>
        </div>
        <div>
        <Slider {...settings}>
       {freedata.map((item)=>(<Cards item={item} key={item.id} />))}
      </Slider>
        </div>
        

    </div>
    </>
  )
}

export default FreeBook