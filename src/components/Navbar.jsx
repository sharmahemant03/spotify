import React from 'react'
import { RxDotsHorizontal } from 'react-icons/rx'
import { RxCaretLeft } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";
import { BiHome } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { PiBrowsersLight } from "react-icons/pi";
import { MdMinimize } from "react-icons/md";
import { FiMaximize2 } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='bg-black h-20 flex items-center w-full'>
      <div className='m-4 flex items-center'>
        <RxDotsHorizontal className='w-8 h-10 text-white'/>
        <RxCaretLeft className='w-8 h-16 text-white'/>
        <RxCaretRight className='w-8 h-16 text-white'/>

      </div>
      <div className=' m-96 flex items-center bg-black space-x-2'>
        <div className='bg-gray-800 w-12 h-12 rounded-full flex justify-center'>
        <BiHome className='w-12 h-10 text-white '/>
        </div>
        <div className=' hover:border-2 border-white flex h-10 w-[400px] bg-gray-800 items-center space-x-2 rounded-lg text-white pl-1 pr-1'>
        <BiSearch className=' cursor-pointer w-5 h-5'/>
        <input type="text" placeholder='What do you want to play?' 
        className='bg-gray-800 text-white outline-none flex-grow'/>
        <PiBrowsersLight className=' cursor-pointer w-5 h-5'/>
        </div>

        <div className='flex items-center bg-black'>
          <button className='text-black ml-20 font-semibold cursor-pointer bg-white w-40 h-10 rounded-2xl '>Explore Premium</button>
          <FaRegBell className='text-white items-center h-6 w-6 ml-4 mr-4 cursor-pointer'/>
          <FaUserFriends className='text-white items-center h-6 w-6 ml-4 mr-4 cursor-pointer'/>
          <p className='bg-green-500 text-center rounded-full pt-2 h-10 w-10 text-black cursor-pointer'>H</p>
          <MdMinimize className='text-white mb-2 items-center h-6 w-6 ml-4 mr-4 cursor-pointer'/>
          <FiMaximize2 className='text-white items-center mt-1 h-6 w-6 ml-4 mr-4 cursor-pointer'/>
          <IoMdClose className='text-white items-center h-6 w-6 ml-4 mr-4 cursor-pointer'/>

          
        </div>
      </div>
    </div>
  )
}

export default Navbar
