import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


function Navbar() {

  const {user, setShowLogin}  = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between py-4'>
      <Link to='/'>
        <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40' />
      </Link>


      <div>
        {
          user ?
            <div className='flex items-center gap-2 sm:gap-3'>
              
              <button onClick={()=>navigate('/buy')} className='flex items-center gap-2 bg-blue-400 px-4 sm:px-4 
                py-1.5 sm:py-2 rounded-full hover:scale-105 transition-all duration-700'>
                <img className='w-5' src={assets.credit_star} alt="" />
                <p className='text-white text-sm sm:text-sm font-medium'>Credit Left : 50</p>
              </button>
              
              <p className='text-white max-sm:hidden pl-4'>Hi, User</p>
              <div className='relative group'>
                <img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
                {/* Corser button issue */}
                <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-white rounded pt-12'>
                  <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                    <li className=' text-black py-1 px-2 cursor-pointer pr-10'>
                      LogOut
                    </li>
                  </ul>

                </div>
              </div>

            </div>
            :
            <div className='flex items-center gap-2 sm:gap-5'>
              <p onClick={() => navigate('/buy')} className='cursor-pointer text-white'>Upgrade</p>
              <button className='bg-slate-200 text-green px-7 py-2 sm:px-8 text-sm rounded-full' onClick={()=>setShowLogin(true)}>Log in</button>
            </div>
        }

      </div>

    </div>
  )
}

export default Navbar