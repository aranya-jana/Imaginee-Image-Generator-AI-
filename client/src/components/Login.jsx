import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Login = () => {

    const [state, setState] = useState('Log in')

    useEffect(()=>{
        document.body.style.overflow = 'hidden';

        return ()=>{
            document.body.style.overflow = 'unset';
        }
    },[])

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 
    flex justify-center items-center'>

    <form className='relative bg-white p-10 rounded-xl text-slate-600'>
        <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
        <p className='text-sm'>Welcome back! Please log in to proceed</p>

        {state !== 'Log in' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
            <img className="custom-class" style={{ width: 25 }} src={assets.profile_icon} alt="" />
            <input type="text" className='outline-none text-sm' placeholder='Full Name' required/>
        </div>}

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
            <img src={assets.email_icon} alt="" />
            <input type="email" className='outline-none text-sm' placeholder='Email id' required/>
        </div>

        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
            <img src={assets.lock_icon} alt="" />
            <input type="password" className='outline-none text-sm' placeholder='Password' required/>
        </div>

        <p className='text-sm text-green-500 my-3 cursor-pointer'>Forgot Password?</p>

        <button className='bg-slate-900 w-full text-white py-2 rounded-full'>{state === 'Log in' ? 'login' : 'Create Account'}</button>

        {state ==='Log in' ? <p className='mt-5 text-center'>Don't have an account? <span className='text-green-500 
        cursor-pointer' onClick={()=>setState('Sign up')}>Sign up</span></p>
        :
        <p className='mt-5 text-center'>Already have an account? <span className='text-green-500 
        cursor-pointer'  onClick={()=>setState('Log in')} >Log in</span></p>}

        <img src={assets.cross_icon} alt=" " className='absolute top-5 right-5 cursor-pointer'/>

    </form>

    </div>
  )
}

export default Login