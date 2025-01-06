import React from 'react'
import { assets, plans } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const BuyCredit = () => {
const {user} = useContext(AppContext)

  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className=' border border-gray-400 px-10 py-2 rounded-full mb-6 text-white'>Our Plans</button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10 text-white'>Upgrade your plan</h1>


      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map ((item, index)=>(
          <div key={index} className='bg-slate-800  drop-shadow-sm border border-slate-600 rounded-lg py-12 px-8 text-gray-200
          hover:scale-105 transition-all duration-500'>
            <img width={40} src={assets.logo_icon} alt="" />
            <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-5'>
              <span className='text-3xl font-medium'> ₹{item.price} </span> / {item.credits} credits</p>
              <button className='w-full bg-green-600 text-white mt-8 text-sm
              rounded-md py-2.5 min-w-52'>{user ? 'Buy Now' : 'Log in to Buy'}</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit