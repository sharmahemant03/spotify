import React from 'react'
import { BiCheck } from "react-icons/bi";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { IoShuffle } from "react-icons/io5";
import { IoPlayBackSharp } from "react-icons/io5";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { IoIosRepeat } from "react-icons/io";

function valuetext(value) {
    return `${value}°C`;
  }

const Play = () => {
  return (
   <div className='fixed bottom-0 left-0 w-full bg-black h-20 flex items-center'>
    <div className='flex items-center ml-4' >
        <div className='w-14 h-14 bg-cover mt-` overflow-hidden'>
            <img src="https://a10.gaanacdn.com/gn_img/albums/9MAWe97WyJ/MAWeerx5Wy/size_m_1713881672.jpg" alt="" className='w-full h-full object-cover' />

        </div>
        <div className='ml-2 mt-1'>
            <p className='font-semibold text-white'>Aa Jao Meri Tamanna</p>
            <p className='text-sm text-gray-400'>Javed Ali, Jojo Nathaniel, Pritam</p>
        </div>
        <BiCheck className='bg-green-500 rounded-full w-4 h-4 ml-2'/>
    </div>
    <div className='ml-64'><div className=' justify-center flex items-center space-x-4 mt-1'>
        <IoShuffle className='text-white cursor-pointer w-5 h-5'/>
        <IoPlayBackSharp className='text-white cursor-pointer w-5 h-5'/>
        <IoPlayCircleOutline className='text-white cursor-pointer w-12 h-12'/>
        <IoPlayForward className='text-white cursor-pointer w-5 h-5'/>
        <IoIosRepeat className='text-white cursor-pointer w-5 h-5'/>
    </div>
         <div className='w-96 '>
    <Box sx={{ width: '100%' }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        color="secondary"
      />
    </Box>
    </div>
    </div>

   </div>
  
  )
}

export default Play
