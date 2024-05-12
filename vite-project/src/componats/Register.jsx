import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"


function Register() {

  const {
    register,
    handleSubmit,
    
    formState: { errors },
    
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
    <div className=''>
    <div id="my_modal_4" className="">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='my-5 space-y-5'>
      <form action="" onSubmit={handleSubmit(onSubmit)} className='my-5 space-y-5'>
    <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4  h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input {...register("email", { required: true })} type="email" className="grow" placeholder="Enter your email" />
</label>
{errors.email && <span className='text-sm text-red-500'>This field is required</span>}

<label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input {...register("username", { required: true })} type="text" className="grow" placeholder="Enter your userid" />
</label>
{errors.username && <span className='text-sm text-red-500'>This field is required</span>}

<label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4  h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input {...register("password", { required: true })} type="password" className="grow" />
</label>
{errors.password && <span className='text-sm text-red-500'>This field is required</span>}
<div className='flex flex-row justify-between'>
<button className="btn btn-active btn-primary px-3 py-2 hover:scale-100 duration-200 hover:bg-pink-500">Register</button>
<p className='text-small'>Click hear for :<Link className='text-blue-400 hover:text-blue-500 ruration-200' onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</Link><Login/></p>
</div>
</form>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Register
