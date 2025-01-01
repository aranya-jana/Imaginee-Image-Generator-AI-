import React from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  return (
    <form className='flex flex-col min-h-[90vh] justify-center items-center'>
      <div>
        <div className='relative'>
          <img src={assets.sample_img_1} alt="" className='max-w-sm rounded' />
          <span className='absolute bottom-e left-0 h-1 bg-blue-500 w-full transition-all duration-[10s]' />
        </div>
        <p className='text-white'>Imagine . . . . .</p>
      </div>

      <div className='flex w-full max-w-xl bg-slate-800 text-sm p-0.5 mt-10 rounded-full'>
        <input type="text" placeholder='Describe your image...' className='text-white 
        flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color' />
        <button type='submit' className='bg-gray-300 px-10 sm:px-16 py-3 rounded-full'>
          Generate
        </button>
      </div>

      <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
        <p className='bg-transparent border border-zinc-400 px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
        <a className='bg-gray-300 px-8 py-3 rounded-full cursor-pointer text-black' download href='' >Download</a>
      </div>

    </form>


  )
}

export default Result