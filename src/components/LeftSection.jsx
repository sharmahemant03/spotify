import React from 'react'
import { TiPinOutline } from "react-icons/ti";
import { BiSearch } from "react-icons/bi";
import { MdOutlineSort } from "react-icons/md";
import { TbLayoutNavbarCollapse } from "react-icons/tb";
import { IoIosAdd } from "react-icons/io";

const LeftSection = () => {
  return (

        <div className='bg-gray-800 mt-2 ml-1 rounded-lg h-[527px] w-1/4'>
            <div className='flex items-center'> 
            <TbLayoutNavbarCollapse className='text-white text-2xl ml-1 mt-1'/>
            <p className='text-white text-2xl ml-3 mt-1'>Your Library</p>
            <IoIosAdd className='text-white text-3xl mt-1 ml-auto'/>

            </div>
            <div className='mt-3 ml-1'>
                <button className='text-white w-24 h-10 rounded-2xl bg-gray-700 font-semibold'>PlayList</button>
            </div>
            <div className='flex items-center mt-2'>
                <BiSearch className='text-white text-2xl'/>
                <p className='text-white text-xl ml-auto '>Recents</p>
                <MdOutlineSort className='text-white text-xl mt-1 mr-1 ml-1'/>
            </div>
            <div className='flex items-center ml-1 mt-2'>
                <img src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da849d25907759522a25b86a3033" alt=""  className='w-11 h-11 rounded-md'/>
                <div className='ml-1'>
                    <p className='font-semibold text-green-500'>Liked Songs</p>
                    <div className='flex items-center text-white'>
                        <TiPinOutline className='text-green-500 mr-1 text-lg'/>
                        <p>Playlist.</p>
                        <p>222 songs</p>
                    </div>
                </div>
            </div>

        </div>
      

  )
}

export default LeftSection
