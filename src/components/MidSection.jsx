import React from 'react'
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoShuffle } from "react-icons/io5";
import { IoDownloadOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { MdOutlineSort } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";

const MidSection = () => {
  return (
    <div className=' rounded-lg mt-2 bg-gray-800 w-[48.85%] ml-1  h-[527px]'>
      <div className='flex items-center w-full h-1/3 rounded-t-lg bg-purple-800'>
        <img className='w-36 ml-2' src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da849d25907759522a25b86a3033" alt="" />
        <div>
          <p className='text-white font-semibold ml-3'>PlayList</p>
          <p className='text-white font-bold ml-3 text-[2rem]'>Liked Songs</p>
          <p className='text-white font-semibold ml-3'>Hemant Sharma . <span className='text-gray-500'>222 songs</span></p>
        </div>
      </div>
      <div className='bg-purple-950 w-full h-2/3 rounded-b-lg'>
        <div className='flex items-center pl-2 pt-2 '>
          <IoPlayCircleOutline className='bg-green-600 text-black  rounded-full text-[3.5rem]' />
          <IoShuffle className='text-white text-[2.5rem] ml-2' />
          <IoDownloadOutline className='text-white text-[2rem] ml-2' />
          <div className='flex items-center space-x-2 ml-auto mr-2'>
            <BiSearch className='text-white text-[2rem] ' />
            <p className='text-white text-lg'>Date Added</p>
            <MdOutlineSort className='text-white text-[2rem]' />
          </div>
          </div>
          <div className='w-full h-full p-2'>
            <table className='w-full'>
              <tr className='text-gray-500'> 
                <th>#</th>
                <th>Title</th>
                <th>Album</th>
                <th>Date Added</th>
                <th><MdAccessTime /></th>
              </tr>
           
              <tr>
                <td className='text-green-600 font-semibold'>1</td>
                <td><div className='flex items-center ml-4' >
                  <div className='w-14 h-14 bg-cover mt-` overflow-hidden'>
                    <img src="https://a10.gaanacdn.com/gn_img/albums/9MAWe97WyJ/MAWeerx5Wy/size_m_1713881672.jpg" alt="" className='w-full h-full object-cover' />

                  </div>
                  <div className='ml-2 mt-1'>
                    <p className='font-semibold text-white'>Aa Jao Meri Tamanna</p>
                    <p className='text-sm text-gray-400'>Javed Ali, Jojo Nathaniel, Pritam</p>
                  </div>
                </div></td>
                <td className='text-white'>Ajab Prem Ki Gajab Kahani</td>
                <td className='text-white'>1 day ago</td>
                <td className='text-white'>4:06</td>
              </tr>
              <tr>
                <td className='text-green-600 font-semibold'>2</td>
                <td><div className='flex items-center ml-4' >
                  <div className='w-14 h-14 bg-cover mt-` overflow-hidden'>
                    <img src="https://i1.sndcdn.com/artworks-000026830546-7rw4i3-t500x500.jpg" alt="" className='w-full h-full object-cover' />

                  </div>
                  <div className='ml-2 mt-1'>
                    <p className='font-semibold text-white'>O O Jaane Jaana</p>
                    <p className='text-sm text-gray-400'>Kamaal Khan</p>
                  </div>
                </div></td>
                <td className='text-white'>Pyar Kiya Toh Darna Kya</td>
                <td className='text-white'>Oct 27,2024</td>
                <td className='text-white'>5:05</td>
              </tr>
              <tr>
                <td className='text-green-600 font-semibold'>3</td>
                <td><div className='flex items-center ml-4' >
                  <div className='w-14 h-14 bg-cover mt-` overflow-hidden'>
                    <img src="https://c.saavncdn.com/522/Zaroor-Punjabi-2024-20240528201611-500x500.jpg" alt="" className='w-full h-full object-cover' />

                  </div>
                  <div className='ml-2 mt-1'>
                    <p className='font-semibold text-white'>Zaroor</p>
                    <p className='text-sm text-gray-400'>Aparshakti Khurana</p>
                  </div>
                </div></td>
                <td className='text-white'>Zaroor</td>
                <td className='text-white'>Oct 17,2024</td>
                <td className='text-white'>5:45</td>
              </tr>
              <tr>
                <td className='text-green-600 font-semibold'>4</td>
                <td><div className='flex items-center ml-4' >
                  <div className='w-14 h-14 bg-cover mt-` overflow-hidden'>
                    <img src="https://c.saavncdn.com/090/Schedule-English-2021-20210823215603-500x500.jpg" alt="" className='w-full h-full object-cover' />

                  </div>
                  <div className='ml-2 mt-1'>
                    <p className='font-semibold text-white'>Schedule</p>
                    <p className='text-sm text-gray-400'>Tegi Pannu, Manni Sandhu</p>
                  </div>
                </div></td>
                <td className='text-white'>Schedule</td>
                <td className='text-white'>Sept 23,2024</td>
                <td className='text-white'>4:23</td>
              </tr>
             
              
            </table>
          </div>




        

      </div>



    </div>
  )
}

export default MidSection
