import React from 'react'
import video from '../assets/video.mp4'
import { RxDotsHorizontal } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import { FiUpload } from "react-icons/fi";
import { BiCheck } from 'react-icons/bi';


const RightSection = () => {
  return (
    <div className='bg-gray-800 h-[100vh] w-1/4 rounded-lg flex flex-col mt-2 mr-1 ml-1 fixed overflow-hidden right-0'>
      <div className='relative h-[527px]'>
            <video className='rounded-lg h-full w-full object-cover ' src={video} autoPlay muted loop></video>
            <div className='absolute flex items-center top-1'>
              <p className=' text-white text-xl font-semibold ml-8 '>Liked Songs</p>
              <RxDotsHorizontal className='ml-40 text-white text-xl mr-2'/>
              <IoMdClose className='ml-auto text-white text-xl mr-2'/>
          </div>
          <div className='absolute z-20 flex overflow-y-auto  items-center ml-9 top-72'>
            <div>
              <p className='text-white text-2xl font-semibold'>Aao Jao Meri Tamanna</p>
            <p className='text-white text-md font-semibold'>Javed Ali, Jojo Nathaniel, Pritam</p>
            </div>
            <FiUpload className='text-white text-md mr-2 ml-5'/>
            <BiCheck className='text-md bg-green-500 rounded-full'/>


            
          </div>
         
             <div className='bg-gray-800 top-[22rem] h-44  rounded-lg bg-transparent backdrop-blur-lg w-80 ml-8 absolute z-20'>
              <div className='flex items-center'>
                <p className='text-white text-md ml-2 mt-2'>Credits</p>
                <p className='text-white text-md ml-auto mr-2 mt-2'>Show all</p>
              </div>
              <div className='flex items-center mt-5'>
                <div className='ml-2'>
                  <p className='text-white text-sm'>Javed Ali</p>
                  <p className='text-white text-sm'>Main Artist</p>
                </div>
                <button className='w-24 h-8 rounded-lg ml-auto mr-2  border text-white font-semibold'>Follow</button>
              </div>

              <div className='flex items-center mt-5'>
                <div className='ml-2'>
                  <p className='text-white text-sm'>Pritam</p>
                  <p className='text-white text-sm'>Main Artist, Composer</p>
                </div>
                <button className='w-24 h-8 rounded-lg ml-auto mr-2  border text-white font-semibold'>Follow</button>
              </div>
             </div>

          
         
        </div>
    </div>
  )
}

export default RightSection
