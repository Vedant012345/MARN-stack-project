import React from 'react'

function Cards({item}) {
  return (<>
  <div className='pt-5 my-5 p-3'>
  <div className="card w-90 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.titla}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline hover:bg-pink-500 duration-200 text-md hover:text-white font-semibold p-4">${item.price}</div> 
      <div className="badge badge-outline hover:bg-pink-500 duration-200 hover:text-white text-md font-semibold p-5">Buy now</div>
    </div>
  </div>
</div>
  </div>
  </>
  )
}

export default Cards
