import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
        <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-4 py-0.5 rounded-full border border-neutral-400'>
            <p>Imagine to Image</p>
            <img src={assets.star_icon} alt="" />
        </div>

        <h1 className='text-slate-300 text-3xl max-w-[180px] sm:text-6xl sm:max-w-[550px] mx-auto mt-10 
        text-center'><span className='text-[#58da20]'>Text</span>-to-<span className='text-[#58da20]'>Image</span> Generator</h1>

        <p className=' text-white text-center max-w-xl mx-auto mt-5'>Imaginee transforms text into stunning visuals instantly.
            Create captivating images effortlessly with your words!</p>
        <button className='sm:text-lg text-white bg-black/50 shadow-black/40 shadow-md hover:scale-[1.02] transition-all ease-in-out duration-300 border border-white/10 w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'>

            Genarate Image
            <img className="h-6" src={assets.star_group} alt="" />
        </button>

    </div>
  )
}

export default Header