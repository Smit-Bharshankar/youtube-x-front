import React from 'react'
import youtube from '../../assets/youtube.jpg'
import youtubesvg from '../../assets/youtube-svg.svg'
import { FaRegBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";




const Navbar = () => {
  return (
    <div className='w-full h-14 sticky bg-primarybg'>
      <div className='w-full h-full flex items-center justify-around'>
      <div className='w-10 flex items-center justify-center gap-3'>
        <img src={youtubesvg} alt="" />
        <h1 className='text-white text-2xl font-semibold font-mono'>Youtube</h1>
      </div>
      <div className='w-[23%] h-[65%] border-solid border-2 justify-self-center border-gray-600 flex items-center justify-between overflow-hidden'>
        <input type='text' placeholder='search' className='text-white bg-primarybg p-1 w-full'/>
        <div>
      <IoSearchSharp className='px-4 size-12 cursor-pointer text-white overflow-hidden bg-gray-600' />
        </div>
      </div>
      {/* <div>2</div> */}
      <div className='flex gap-4 items-center justify-center'>
      <FaRegBell className='size-5 text-white'/>
      <CgProfile className='size-7 text-slate-400 bg-transparent' />
      </div>

      </div>
    </div>
  )
}

export default Navbar
