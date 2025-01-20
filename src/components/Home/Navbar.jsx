import React from 'react'
import youtube from '../../assets/youtube.jpg'
import youtubesvg from '../../assets/youtube-svg.svg'
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";



const Navbar = () => {
  return (
    <div className='w-full h-14 sticky bg-primarybg'>
      <div className='w-full h-full flex items-center justify-around'>
      <div className='w-10 flex items-center justify-center gap-3'>
        <img src={youtubesvg} alt="" />
        <h1 className='text-white text-2xl font-semibold font-mono'>Youtube</h1>
      </div>
      <div>3</div>
      <div>2</div>
      <div className='flex gap-4 items-center justify-center'>
      <FaRegBell className='size-5 text-white'/>
      <CgProfile className='size-7 text-slate-400 bg-transparent' />
      </div>

      </div>
    </div>
  )
}

export default Navbar
