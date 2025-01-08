import React from 'react'
import { assets } from '../assets/assets'

const Login = () => {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 
    flex justify-center items-center'>

    <form className='relative bg-white p-10 rounded-xl text-slate-600'>
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>Sign Up</h1>
        <p className='text-sm'>Welcome back! Please log in to proceed</p>

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img className="custom-class" style={{ width: 25 }} src={assets.profile_icon} alt="" />
            <input type="text" className='outline-none text-sm' placeholder='Full Name' required/>
        </div>
    </form>

    </div>
  )
}

export default Login