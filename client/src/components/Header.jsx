import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {delay, motion} from "framer-motion"
import { AppContext } from '../context/AppContext'
import {useNavigate} from 'react-router-dom'


const Header = () => {

  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler =()=>{
    if(user){
      navigate('/result')
    }
    else{
      setShowLogin(true)
    }

  }


  return (
    <motion.div className='flex flex-col justify-center items-center text-center my-20'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once:true}}
    >
        <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-4 py-0.5 rounded-full border border-neutral-400'
        initial={{opacity:0, y:-20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay : 0.2, duration:0.8}}
        >
            <p>Imagine to Image</p>
            <img src={assets.star_icon} alt="" />
        </motion.div>

        <motion.h1 className='text-slate-300 text-3xl max-w-[180px] sm:text-6xl sm:max-w-[550px] mx-auto mt-10 
        text-center'><span className='text-[#58da20]'>Text</span>-to-<span className='text-[#58da20]'
        initial={{opacity : 0}}
        animate ={{opacity : 1}}
        transition ={{ delay : 0.4, duration: 2}}
        >Image</span> Generator</motion.h1>

        <motion.p className=' text-white text-center max-w-xl mx-auto mt-5'
        initial={{opacity : 0, y : 20}}
        animate ={{opacity : 1, y:0}}
        transition ={{ delay : 0.6, duration: 0.8}}
        >Imaginee transforms text into stunning visuals instantly. Create captivating images effortlessly with your words!</motion.p>
        <motion.button onClick={onClickHandler} className='sm:text-lg text-white bg-black/50 shadow-black/40 
        shadow-md hover:scale-[1.02] transition-all ease-in-out duration-300 border 
        border-white/10 w-auto mt-8 md:mb-48 px-12 py-2.5 flex items-center gap-2 rounded-full'
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
        initial={{opacity : 0}}
        animate ={{opacity: 1}}
        transition={{ duration: 0.5, opacity: { delay: 0.8, duration: 1 } }}
        >

            Genarate Image
            <img className="h-6" src={assets.star_group} alt="" />
        </motion.button>

    </motion.div>
  )
}

export default Header